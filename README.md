# startup2024

## Specification Deliverable 

### Elevator Pitch
Have you ever stuggled to find an available tee time at a golf course in your area? My application will make it easy for you by displaying all available tee times in your area on one page, and will let you sign in and reserve them all from one website. This website will update its tee sheet in real time, and will allow for an easy one stop experience for booking tee times. Less time booking, more time playing!

### Rough Draft Design
![Design](https://github.com/owenslar/startup2024/blob/main/websiteimage.png?raw=true)

### Key Features
- Displays tee times in the area
- Secure login over HTTPS
- Ability to choose a tee time and book it under your name
- Reserved tee times are stored and can be managed

### Technologies

I will use the required technologies in the following ways.

- HTML - Uses correct HTML structure for 3 pages of HTML. 3 HTML pages include login page, main page displaying tee times, and a page for booking a tee times/ managing tee times. Hyperlinks between pages.
- CSS - Website styling that makes for easy to understand pages, looks pleasing to the eye, and functions on smartphone screen sizes. 
- React - Provide functionality for displaying tee times, booking tee times, canceling tee times, and interactions with web services.
- Web Services - Backend service with endpoins for: 
    - user authentication
    - tee time booking
    - external API integration - (I have been searching for an API that provides me with tee time information from golf courses and I haven't found a free one. I will keep searching, but my backup plan is to use mock data for the tee times and use a weather API to provide users with weather data at the chosen golf course)
    - updating list of tee times
- Database/Login - Store users and tee time data in database. Cannot reserve a tee time unless logged in.
- WebSocket - As a tee time is reserved, it goes off the screen for other users. As a tee time is cancelled, it reappears on the webpage.

## HTML Deliverable

For this deliverable I built out the basic structure of my application using HTML.

- HTML pages - Four HTML pages that include a login page, a main page for booking tee times, a page holding tee time booking data, and an about page.
- Links - The login page links to the booking page through the login button, and the nav section in the header of every page links to the other pages
- Text - The available tee times have textual information, as well as an about section with textual information.
- Images - Each available tee time has an image of that golf course displayed in the box.
- DB/Login - Input box and submit button for login. The currently reserved or canceled tee times will be stored in the database. (The information on the "Your Reservations" page on my website)
- 3rd Party Service Calls - The available tee times in the area will be displayed through an external API. (I am still searching for a free API that provides data from golf course websites. If I can't find one, I will use an API to display the current weather at that golf course, which I have a text placeholder for.)
- WebSocket - The available tee times will be updated in real time when another user books or cancels a tee time. 

## CSS Deliverable

For this deliverable I properly styled my application to it's final appearance.

- Properly styled header, footer, and content body
- Navigation - created functional navbar that collapses into a dropdown for small screen sizes
- Responsive to resizing - Used flex display and grid display to ensure my application looks good on all screen sizes
- Application elements - Styled the tee times as well as the reservation history to look appealing and easy to understand
- Application text content - Used appropriate colors and consistent fonts using CSS variables
- Application images - Integrated the golf course images to look appealing, styled all tee time images to be the same size

## React Deliverable

For this deliverable I used JavaScript and React so that my application completely works for a single user. I included placeholders in my code to allow for future technologies.

- Bundled and Transpiled
- Components - Login, Booking Page, Reservations Page, and About Page
    - login - When you login it takes you to the booking page, cannot navigate there without logging in
    - database - included a function that mocks fetching tee time data from my database, currently have the tee time data hard-coded and retured from that function
    - WebSocket - Currently the tee-times display or stop displaying based on if they are booked by a single user. In the future they will stop displaying for all users when a tee time is booked.
    - application logic - When a tee time is booked, it takes the user to the reservation page, and displayes the booked tee time on their reservations table, and the tee time is no longer available on the booking page. When that tee time is cancelled from the reservation page, it shows up again on the booking page.
    - Service - I currently call a function that mocks calling an API for the weatehr at a given location. The function currenlty waits for a second then returns 'Sunny'
- Router - Routing between all components works, collapsable navbar still functional within React
- Hooks - used UseState, UseContext, and UseEffect to implement the functionality needed for the application.

## Service Deliverable

For this deliverable I added backend endpoints that handle login/create/logout, and an enpoint that provides the tee time data

- Node.js/Express HTTP Servide - done
- Static middleware for frontend - done
- Calls to third party endpoints - Calls a weather API to get current temperature and humidity at golf course, then displays it with the tee time on the booking page
- Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoint for tee time data
- Fortend calls service endpoints - I did this using async/await fetch commands