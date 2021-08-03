# CORS-Helper
## Setup
You can set port in .env file
```
// .env
PORT=3000
```
It' will change in index.js if .env file not exist default port is 80
```js
// index.js
const express = require('express');
const app = express();
const port = process.env.PORT | 80;
...
```
Start Express Application
```
// npm
npm install
npm start
// yarn 
yarn
yarn start
```

## How to use ?
You can change key query for any name. Then the value should be the url of destination.
```js
http://localhost/url?targetUrl=https://example.com/api/users

//axios
axios.get('http://localhost/url?targetUrl=https://example.com/api/users')

//fetch
fetch('http://localhost/url?targetUrl=https://example.com/api/users')

```
