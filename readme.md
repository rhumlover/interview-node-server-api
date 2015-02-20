# Server-Side API with Node.JS

### Goal
As a developer, I want to use a Video API in order to manage a video list. The typical use cases are :

- fetch a video's information
- update a video's information
- delete a video

So... How would you design this API? :)

### The Video Object
A Video is composed of:

- `id`
- `title`
- `thumbnail_url`
- `private`

Note that a video can be `private`: you must be authenticated to access it (valid access_token as QS parameter)

### Setup

- install dependencies (express framework for Node.JS) with `npm install`
- you can launch the server with `$ node index.js`

### Let's work

- given the node server bootstrap (index.js), create the specific endpoints for **C**reating, **R**eading, **U**pdating and **D**eleting a video
- we'll emulate a **local database** by storing a small video catalog in `videos.json`
- focus more on **architecture principles** rather than actual coding. If you can code something it's a bonus, but we want to see how you would architecture the code, which areas you'll focus on.

*Notes:*

- the authentication part for the private videos doesn't have to be written. Just think about the interaction flow between the client and the server