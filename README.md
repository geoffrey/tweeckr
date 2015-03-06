Tweeckr
====

Twitter background check as a service.

The **API** is on the **master branch** and the **SPA** is on the **gh-pages** branch.

For the deployment, I used **heroku** for the **API** and the built-in **GitHub Pages** for the **SPA**. (links are below).


API
===

https://tweeckr.herokuapp.com/

[API Doc](https://github.com/geoffrey/tweeckr/blob/master/API.md)

The API is running on Nodejs using Express 4.
It has **2 endpoints**:
 - One to get the user's profile 
 - One to get the latest (200) tweets.

For each endpoint, the API provide a reputation score as follow:
 - For the user endpoint, the reputation is simply the number of followers
 - For the tweets endpoint, it is a basic sum of the sentiment of each tweets

**Edit the Twitter App access tokens in `/config.js` before running tests or the app**

 

Test
---
Tests are done using mocha should and supertest.
I have two sets of tests for the API, one to test endpoints, and one to test the sentiment analyser.

`$ make test` (= `$ npm prune && npm install && npm test`)


Run
---

`$ make run` (= `$ npm prune && npm install && npm start`)

note: for dev puropose `$ npm install -g nodemon && nodemon server.js`



Deploy
---

Set environment variables for Twitter access tokens as defined in `/config.js`


Client
===

http://geoffrey.github.io/tweeckr/

The client simply consume the API and compute the global reputation score based on the score from the user profile and from it's tweets.

Filtering is done on the front-end and does not require extra API calls.

Run
---
Change the `API_BASE_URL` constant in `js/app.js` to point to your localhost.

Make sure you have python installed before hand
`$ make` (= `bower prune && bower install && python -m SimpleHTTPServer 4000`)

