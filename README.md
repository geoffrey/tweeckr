Tweeckr
====

Twitter background check as a service.


API
===

https://tweeckr.herokuapp.com/

[API Doc]('https://github.com/geoffrey/tweeckr/API.md')


Test
---

`$ make test` (= `$ npm prune && npm install && npm test`)


Run
---

Edit your Twitter App access tokens in `/config.js`

`$ make run` (= `$ npm prune && npm install && npm start`)

note: for dev puropose `$ npm install -g nodemon && nodemon server.js`



Deploy
---

Set environment variables for Twitter access tokens as defined in `/config.js`


Client
===

http://geoffrey.github.io/tweeckr/


Run
---
Change the `API_BASE_URL` constant in `js/app.js` to point to your localhost.

Make sure you have python installed before hand
`$ make`

