const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    // console.log('Upgrade request recieved for:', request.url);
    if (request.url.startsWith('/ws')) {
        if (!socket._handled) {
            // Mark the socket as handled
            socket._handled = true;
    
            // Handle WebSocket upgrade
            wss.handleUpgrade(request, socket, head, (ws) => {
            //   console.log('WebSocket connection established');
              wss.emit('connection', ws, request);
            });
          } else {
            // console.log('Socket already handled, ignoring request');
          }
    } else {
        // console.log('Non-WebSocket request, destroying socket');
        socket.destroy();
    }
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    // Forward messages to everyone except the sender
    ws.on('message', (data) => {
      let message = {};
      try {
        message = JSON.parse(data);
      } catch (e) {
        console.error('Invalid JSON:', data);
        return;
      }

      if (message.type === "teeTimeUpdate") {
        connections.forEach((c) => {
            if (c.id !== connection.id) {
              c.ws.send(JSON.stringify(message));
            }
        });
      }
    });

    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', () => {
      const pos = connections.findIndex((o, i) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);

  function broadcastMessage(message) {
    connections.forEach((c) => {
      c.ws.send(JSON.stringify(message));
    });
  }

  return {
    broadcastMessage,
  };
}

module.exports = { peerProxy };
