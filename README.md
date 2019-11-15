# axis2020
A simple, local Axis front end dev environment using Express and Handlebars.js. Includes boilerplate code to quickly launch and code in a local environment based on Clubessential Axis.

## Getting Started
- Create a new directory for your project
- git clone this repo
- npm i to install dependencies
- npm run dev to launch the environment

## Deploy your code
```
npm run build
```
Run this npm script to output your site stylesheet in a minified format. In package.json change the SITENAME text in the build script to what you want to name your stylesheet. In the _variables.scss, change the environment variable to 'prod' ('dev' is for local environment). The build script will also compile your javascript bundle from the javascript files specified in Gruntfile.js.


## What's Inside

### Public
This is your working environment. CSS, SCSS and JS files live here as well as Images to be used for the site. Code your stylesheets and js files here.

### SCSS (./public/scss)
The SCSS uses the atomic approach to CSS and breaks out for top-down styling from base elements to complex components:
- Base: Includes typography, bootstrap, lists, buttons, base, modules, mosv and CE reset partials
- Helpers: Variables, mixins, extends
- Components: partials based on commonly used CE components (panels, billboards, callouts, events, news, etc)
- Layouts: Complex components (header, nav, footer, coursetour, real estate, etc.)
- Pages: Page-specific stylesheets
- Vendor: Any third-party CSS files

npm run build compiles a compressed css file

### JS (./public/js)
The Javascript is broken down into components (located in the src/components folder) to be compiled into a bundle for deployment. Components include:
- ada.js: js to make Axis more ada-compliant - based on work of Roger and Will
- adminScriptToggle.js: js to launch the admin toggle for scripts at the bottom of the page
- albumScripts.js: album functions from Axis FED 2016 project
- axis-base.js: just some quick generic js fixes for axis (adding the img-fluid class to images inside content minis is an example)
- bootstrapModal.js: bootstrap's js for their modal plugin
- burgers.js: click event for a burger menu animation
- cteBuild.js: changes configuration of minipage layout for callouts, billboars, panels, etc.
- formBaseFormat.js: a starter js file to reconfigure FormBase forms
- fullHeightPalb.js: sets the photo album to be the full height of the window (called on plugin load and can be run in a resize event)
- imgBG.js: sets image in minipage to be the background of that minipage (uses class .mp-bg)
- navSlideIn.js: js for a nav that slides in on mobile
- navSplash.js: js for a nav that splashes on to the screen for mobile
- override-palb.js: overrides axis photoAlbum plugin js
- resizeSiteWrap.js: a resize sitewrap function
- responsiveCarousel.js: resizes carousels to attach to events
- sidemenu.js: creates an arrow to activate a sub-menu in a sidebar navigation
- smoothScrool.js: a click event to activate smoother scrolling to an anchor link
- tabsSizer.js: sets the size of tabs and toggles a message for more scrolling on smaller views
- weatherTxtFormatter: just a starter file to modify string inside of weather plugin

npm run bundle triggers the grunt-concat task to compile your axis-bundle.js file. You can configure which components are in your bundle via the Gruntfile.js in the root. There is an array of strings pointing to the js component path, configure to your needs and deploy to the site.

### Handlebars (./views)
Handlebars is a simple templating engine that uses basic HTML and breaks it down into partials to build layouts quickly and easily. The structure of the views folder is:
- Pages (i.e. My Club or Staff page) are located in the root
- Components: Handlebars partials are located here. These files represent the HTML structure of your component, while some create the layout for Axis items (i.e. a minipage)
- Layouts: Your masterpages live here (think public, blank/login, etc)

You can learn more about handlebars here: https://handlebarsjs.com/

The basic premise follows the logic used for this project: build smaller components to build larger layouts:
```
{{{body}}}
```
Your masterpage files will look like a normal HTML doc with the handlebar variable {{{body}}} where the page content is to be injected.
```
{{> partial}}
```
Partials are called using this method {{> myPartial}} where myPartial referes to an .hbs file in the views/components folder
```
{{#> minipage}}
<h1>Hello World!</h1>
{{/minipage}}
```
The minipage and photoAlbumPlugin partials allow you to create custom content inside a standard axis layout. They follow this pattern above. The h1 tag and content will be injected into an .mpContent div when the page renders. Note the # symbol before the > in this setup.

### server.js
In the root of the package is a server file set up to run an express server with the handlebars templating engine out of the box. You can configure your navigation for the site by modifying the navigation variable. You can also configure your routes to each page for the build. The routes all take an object with the variable navigation set to the navigation variable configured in the variable above. There is a Handlebars template that will replicate a CE menu, complete with subnav items.

### Task Runners
The package includes the following utilies to help optimize build:
- grunt: This is being used to concatenate the js partials into the axis bundle (grunt concat)
- imagemin: This tool will compress images down further (npm compress)
- browser-sync: This script sets up your localhost server to refresh any time CSS updates occur (JS bundler to come here) (npm run ui)
- concurrently: Allows multiple scripts to run at once. (npm run dev launches browser-sync and sass watches and nodemon)

## Other Notes
- The assets folder is meant to house design files. The imagemin task will look for any .jpg or .png files in assets/Images and will create a batch of new files in a compressed folder (assets/Images/compressed)
- The raw folder is just a collection of HTML that likely will need to be pulled in as .hbs files - as of now this is just a resource of HTML collected since initial Github project
