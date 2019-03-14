var express = require('express');   // require가 express를 가져다 쓰겠다는 뜻
var http = require('http')
var app = express();
var server = http.createServer(app).listen(80);   // 80번 포트를 쓰겠다 (http는 통용적으로 80울 쓰니 생략함 / https는 443)

// 위의 4개는 서버를 만드려면 무조건 쓴다

app.get(`/`, function(req, res) {
  res.sendfile("images/2560x1440.90.98303-2560x1440.90._.jpeg");
});

app.get(`/test`, function(req, res) {   // test라는 요청을 받으면 "hello workd"라는 response를 보내겠다
  res.send("hello world");
});

app.get(`/image1`, function(req, res) {
  res.sendfile("images/2560x1440.90.100049-2560x1440.90._.jpeg");
});

app.get(`/image2`, function(req, res) {
  res.sendfile("images/866322.png");
});

app.get(`/image3`, function(req, res) {
  res.sendfile("C:/Users/SMART-03/Downloads/바탕화면.jpg");   // 경로로 설정하려면 슬래시로 해야하나, 가급적 하위폴더 내에 넣기
});

app.get(`/file`, function(req, res) {   // hello.html을 열어주기
  res.sendfile("files/hello.html");
});

app.get(`/file2`, function(req, res) {    // rawfile이라는 파일이 다운로드 됨
  res.sendfile("files/rawfile");
});

app.get(`/practice`, function(req, res) {    // rawfile이라는 파일이 다운로드 됨
  res.sendfile("files/practice.html");
});

console.log("running");   // cmd에서 잘 작동이 됐는지 메시지 출력 여부를 통해 확인
