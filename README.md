# Snippet 

Snippet is an app built in Fellowship with NSW Education Centre for Education Statistics and Evaluation in 2017-18. 

Snippet allows educators to view or publish insights about program applications in NSW schools.

This repository contains both a mock server and the client app that is used internally at NSW Education. 


## Client 

[![Build Status](https://travis-ci.org/CodeforAustralia/cese-snippet.svg?branch=master&)](https://travis-ci.org/CodeforAustralia/cese-snippet)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2092e91a51aa5a067495/test_coverage)](https://codeclimate.com/github/CodeforAustralia/cese-snippet/test_coverage)


View [Readme](https://github.com/CodeforAustralia/cese-snippet/blob/master/client/README.md). 


## Server 

This is a mock server and documentation is not provided. 


## Development setup

You can setup the app as separate services running on your local machine, or use the docker-compose file to run the system within a containerized environment.

To run separate services, open two command sessions, 

1. Run the backend  

```bash
cd server && yarn install && yarn dev
```

2. Run the frontend

```bash
cd client && yarn install && yarn dev
```

