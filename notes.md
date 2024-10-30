# CS 260 notes

- console commands
     - chmod: change mode (changes permissions of file or dir)
     - pwd: print working directory
     - cd: change directory
     - ls: list everyting in curr dir
     - vim: opens vim text editor
     - nano: opens nano text editor
     - mkdir: makes a new directory
     - mv: moves a file
     - rm: removes a file
     - man: displays the manual or help page
     - ssh: connects to a remote server (secure shell)
     - ps: shows the currently running processes
     - wget: downloads files from the web 
     - sudo: executes commands as the superuser
     - ls -la: lists all files in long format (including hidden files)
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
- Important Vim commands
     - :h - help
     - i - enter insert mode
     - Esc - exit insert mode
     - u - undo
     - :w - write file
     - :q quit
     - :q! quit without saving

- Website Notes
    - IP: 54.152.147.228
    - `ssh command: ssh -i ~/Desktop/cs260/cs260keypair.pem ubuntu@54.152.147.228`
     - leave secure shell with `exit` command
     - domains: owenlarson.click, startup.owenlarson.click, simon,owenlarson.click
     - Deploy files command (HTML) ` ./deployFiles.sh -k ~/Desktop/cs260/cs260keypair.pem -h owenlarson.click -s startup `


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
- CSS Notes
     - use the name of a tag to apply styling to every one of those tags
     - use .class to apply styling to any tag with given class
     - use #id to apply styling to any tag with given id
     - separate tags by comma to apply styling to a list of tags
     - separate tags by space to apply styling to elements that are a decendent of a specified element
     - use > to apply styling to elements that are a direct child of a specified element
     - use a ~ to apply styling to elements that are general siblings
     - use a + to apply styling to an element that has a specified adjacent sibling
     - use tag:hover to apply styling when the mouse is hovering on the item
     - Common Syntax
          | Property | Input | Purpose |
          | -------- | ----- | ------- |
          | background-color | color | fill the background |
          | border | color width style | creates border with specified styling |
          | border-radius | any unit | makes the border curved |
          | box-shadow | x-offset y-offset radius color | creates a shadow |
          | color | color input | modifies text color |
          | cursor | type | tells cursor how to display |
          | font-family | font | modifies font (import a google font)|
          | animation | animation type | animates something (use keyframes) |
     - Display keywords
          - none - don't display this element
          - block - display this element with width that fills parent element
          - inline - display this element with width that is only as big as its content
          - flex - display this element's childred in a flexible orientation
          - grid - display this element's children in a grid orientation
          - float proptery - allows inline elements to wrap around it
     - Include Bootstrap
          ```
          <link 
               href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
               rel="stylesheet"
               integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
               crossorigin="anonymous"
          /> 
          ```

- Midterm Notes
     - link elements allow you to reference other resources (stylesheets, icons, etc.)
     - div tags allow you to group content to apply effects to them as a whole
     - use # to refer to an id, use . to refer to a class
     - padding adds space within an element, margin adds space on the outside of an element
     - for loop in JS: for (initialization; condition; increment){}
     - switch in JS: 
     ```
     switch (expression) {
          case value1:
               // code to execute if expression matches value1
               break;
          case value2:
               // code to execute if expression matches value2
               break;
          default:
               // code to execute if no case matches
     }
     ```
     - object in JS: 
     ```
     let obj = {
          key1: value1,
          key2: value2,
          key3: value3
     }
     ```
     - a DNS A record can only point to an IP address, not another A record
     - port 443 is reserved for HTTPS, port 80 is reserved for HTTP, and port 22 is reserved for SSH (secure shell)
     - 

- Sequence for NPM
     - Create your project directory
     - Initialize it for use with NPM by running npm init -y
     - Make sure .gitignore file contains node_modules
     - Install any desired packages with npm install \<package name here\>
     - Add require('\<package name here\>') to your application's JavaScript
     - Use the code the package provides in your JavaScript
     - Run your code with node index.js

- Converting to React Notes
     - to use bootstrap in jsx: ` import 'bootstrap/dist/css/bootstrap.min.css'; `
     
