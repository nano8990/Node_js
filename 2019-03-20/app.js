var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get(`/`, function(req, res) {
  res.sendfile("files/practice.html");
})

app.get(`/practice2`, function(req, res) {
  res.sendfile("files/practice2.html");
});

app.get(`/practice3`, function(req, res) {
  res.sendfile("files/practice3.html");
});

app.get(`/practice4`, function(req, res) {
  res.sendfile("files/practice4.html");
});

console.log("running")
