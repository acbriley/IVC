# IVC

This Project includes the IVC app
the main file structure of the projects is the server-side of the web app,
and the client app sits at core/client

# to run the backend server app for development:
1. install docker and docker-compose
2. run docker-compose up -d inside the scripts folder scope - this will set up a postgres db
3. run npm start at the main scope (where app.js resides) - this will drop the current db (script.js) and start the server on localhost:3000
4. now you can use postman to play with the backend Api
5. alternatively you can develop the client side react app on top of the api now, please see:
https://create-react-app.dev/docs/proxying-api-requests-in-development
in order to handle any CORS issues rising when developing the client app (either set the proxy configuration or
enable CORS in express and explicitly allow localhost:3000 as the origin)

# todos:
currently the api supports user user and password authentication with RBAC, with basic CRUD of voyages,users,roles andvoyageInstances
Voyages are the available voyages to take
VoyageInstances are a user-specific instance of a voyage
A voyage is stored in JSON format, there is an example format in the models/voyage file
This should be sufficient for an alpha version for alpha users tests
For the next steps, there is a lot of work to be done, including:
* adding facebook login (very easy to add)
* adding content routes (very easy to add)
* add tests! there are no tests at the moment
* more complex permissions
* security policies (passwords for the db right now are stored in a very unsafe way)
* storing assets on statically on the server but on a cloud service
* adding lots of relevant info not currently stored in the db
* and many more..

