const express = require("express");
const path = require("path");
const app = express();

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static("public")); // public 폴더 아래의 파일들을 정적으로 제공

// HTML 파일 제공을 위한 라우트 설정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 387
app.get("/event/387", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/387/pc", "common.html"));
});

app.get("/event/387/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/387/mo", "common.html"));
});

// 80
app.get("/event/80", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/80/pc", "common.html"));
});

app.get("/event/80/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/80/mo", "common.html"));
});

// 121
app.get("/event/121", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/121/pc", "common.html"));
});

app.get("/event/121/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/121/mo", "common.html"));
});

// 632
app.get("/event/632", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/632/pc", "common.html"));
});

app.get("/event/632/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/632/mo", "common.html"));
});

// 870
app.get("/event/870", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/870/pc", "common.html"));
});

app.get("/event/870/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/870/mo", "common.html"));
});

// 1594
app.get("/event/1594", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/1594/pc", "common.html"));
});

app.get("/event/1594/m", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "event/1594/mo", "common.html"));
});

// 팝업 HTML 파일 제공을 위한 라우트 설정
app.get("/popup/common", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "popup/common/pc", "common.html")
  );
});

app.get("/popup/common/m", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "popup/common/mo", "common.html")
  );
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
