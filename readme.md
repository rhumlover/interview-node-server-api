# Backend with Node.js

### Goal
How would you design an API? :)

given a video has:

- id
- title
- thumbnail_url
- private

Note that a video can be `private`: you must be authenticated to access to it (valid access_token as QS parameter)

### Let's work

- given the node server bootstrap (index.js), create the specific endpoints for **C**reate, **R**ead, **U**pdate and **D**elete a video
- we'll emulate a **local database** by storing a small video catalog in `videos.json`
- focus more on **architecture principles** rather than actual coding. If you can code something it's a bonus, but we want to see how you would architecture the code, which areas you'll focus on.