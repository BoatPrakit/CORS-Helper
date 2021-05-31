# CORS-Helper
## Setup
You can set port in index.js
```js
const express = require('express');
const app = express();
const port = ChangeMe;   <==========
...
```
Start Express Application
```
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