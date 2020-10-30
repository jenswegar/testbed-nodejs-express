const pjson = require('./../package.json');
const express = require('express');
const responseTime = require('response-time');


const app = express();
app.use(express.json());
app.use(responseTime());


// define API routes (should eventually extract into external route files)
app.get('/', (req,res)=> {
  let apiMetadata = {
    name: pjson.name,
    version: pjson.version
  }
  res.send(apiMetadata);
});

// startup server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));