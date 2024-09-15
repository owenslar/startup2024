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

