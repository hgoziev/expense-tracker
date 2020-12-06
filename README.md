# expense-tracker
### Full stack MERN  app 

## File structure
<h4>Back</h4>

<ul>
<li>
<h4> client - Holds the client application</h4>
</li>
<li>
public - This holds all of our static files
</li>

<li>
src
<ul>
<li>
components - This folder holds all of the different components that will make up our views
</li>
<li>
context  - state management -- context API and useReducer hooks 
</li>
<li>
App.js - This is what renders all of our browser routes and different views
</li>
<li>
index.js - This is what renders the react app by rendering App.js, should not change
</li>
<li>
package.json - Defines npm behaviors and packages for the client
</li>
</ul>
</li>

<li>
controllers - transactions controllers - async functions
</li>
<li>
models  - mongoDB models
</li>
<li>
routes - expresss JS routes 
</li>
<li>
server -  Holds the server application
</li>

<li>
package.json - Defines npm behaviors and packages for the backend
</li>
</ul>


### Available Scripts
In the project directory, you can run:

<h5> npm run dev <h5> 
Runs both the client app and the server app in development mode.
Open http://localhost:9000 to view the client in the browser.

<h5>npm run client</h5>
Runs just the client app in development mode.
Open http://localhost:3000 to view the client in the browser.

<h5>npm run server </h5>
Runs just the server in development mode.

<h5> npm run build </h5>
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script

See the section about deployment for more information.

### Learn More
You can learn more in the Create React App documentation.

To learn how to setup a local MongoDB instance for testing, check out how to Connect to MongoDB.

To learn how to deploy a full-stack web app to heroku, check out this great guide.

To learn React, check out the React documentation.



