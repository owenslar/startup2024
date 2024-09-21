#CS 260 notes

- git commands
     ```
     git init
     git add
     git commit
     git rebase
     git status
     git push
     git pull
     ```

- Website Notes
    - IP: 54.152.147.228
    - `ssh command: ssh -i ~/Desktop/cs260/cs260keypair.pem ubuntu@54.152.147.228`
     - leave secure shell with `exit` command

- HTML Notes
     - Starting an HTML file:
     ``` 
     <!DOCTYPE html>
     <html lang="en">
          <head>
               <title>First HTML</title>
          </head>
          <body>
               <p>Hello world</p>
           </body>
     </html>
     ```
     - Helpful HTML tags
     ```
     <img alt="alt title" src="link"> (no closing tag)
     <a href="hyperlink">
     <div> - block division of content
     <span> - an inline span of content
     <h1-9> - text heading (h1 highest level)
     <p> - paragraph tag
     <table> - table tag
     <ol><ul> - ordered or unordered lists
     ```
     - Visit [w3schools](https://www.w3schools.com) to practice
     - Form element
          - Submits the values of the inputs it contains
          - ` <form action ="form.html" method="post"> `
     - Input element
          - represents many different input types
          - `text`, `password`, `email`, `tel`(telephone number), `url`, `number`, `checkbox`, `radio`, `range`, `date`, `datetime-local`, `month`, `week`, `color`, `file`, `submit`
          - Most input elements share the following attributes: 
               - `name` - name of the input
               - `disabled` - disables the ability for user to interact
               - `value` - the initial value of the input
               - `required` - signifies that a value is required in order to be valid
          - On some inputs you can use the `pattern` attribute which is a regular expression that must match for the input to be valid
          - Preceed an input element with a label tag with an id tag linking it to the input and a name
          ` <label id="inputID">Name</label>`
     - Media elements
          - img: use `src` for link and `alt` for description of image
          - `audio`: put `controls` as an attribute to allow controls, use `src` attribute for audio file
          - `video`: `src` attribute for file, `controls` same as audio, use `crossorigin="anonymous"` if requesting files from a different domain than the one serving your content, also has `width` and `height` attributes
     - Internal media elements
          - `svg`: render graphics within HTML
          - `canvas`: facilitates 2D drawing and animation