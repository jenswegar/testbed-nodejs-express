# testbed-nodejs-express
Test API based on NodeJS and Express.js.

This is part of a project to compare different programming languages and their performance in a containerized environment. The idea is to implement the same API in all languages and do various benchmarks on all of them to figure out which language enables the fastest API, both in container startup time and request/response time. At the same time it gives me a rough idea of how easy the setup is. This is by no means super scientific. The languages and frameworks chosen are simply the ones I have some level of knowledge in atm. I have made no further analysis on wether or not a chosen framework would actually be the best within that given language for this given task.


## Build docker image

```
docker build -t testbed-nodejs-express .
```

## Run docker image

```
docker run --rm -p 8080:8080 testbed-nodejs-express
```