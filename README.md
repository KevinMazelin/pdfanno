<p align="center"><img src="https://github.com/paperai/paperanno/blob/master/paperanno.png" width="750"></p>

# paperanno
paperanno is a browser-based annotation tool for papers.  
Users can add annotations on pdf and html directly.

[Demo](https://paperai.github.io/paperanno/)

## Features

## Usage

## Developer's Guide
paperanno is an extension of the following libraries:
* [pdf.js](https://github.com/mozilla/pdf.js)
* [pdf-annotate.js](https://github.com/instructure/pdf-annotate.js/)

### Install and Build
First, install [Node.js](https://nodejs.org/) and npm.  
Then, run the following commands:
```
npm install
npm run anno:build
```
where the output is on `dist/`.

To run,
```
npm run anno:watch
```
Then, access http://localhost:8080/dist/index.html in your browser.
