const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static("public"));

// HTML 파일 제공을 위한 라우트 설정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 이벤트 페이지 라우팅
const events = [
  "387",
  "80",
  "121",
  "506",
  "632",
  "768",
  "870",
  "965",
  "1391",
  "1594",
  "1586",
  "1634",
  "1636",
  "239",
  "1682",
  "1704",
];

events.forEach((eventId) => {
  // PC 버전
  app.get(`/event/${eventId}`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `event/${eventId}/pc`, "common.html"));
  });

  // 모바일 버전
  app.get(`/event/${eventId}/m`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `event/${eventId}/mo`, "common.html"));
  });
});

// 팝업 라우팅
const popupPath = "popup/common";

app.get(`/${popupPath}`, (req, res) => {
  res.sendFile(path.join(__dirname, "public", `${popupPath}/pc`, "common.html"));
});

app.get(`/${popupPath}/m`, (req, res) => {
  res.sendFile(path.join(__dirname, "public", `${popupPath}/mo`, "common.html"));
});

// 단말관리 라우팅
const devicePath = "deviceManagement/common";

app.get(`/deviceManagement`, (req, res) => {
  res.sendFile(path.join(__dirname, "public", `${devicePath}/pc`, "common.html"));
});

app.get(`/deviceManagement/m`, (req, res) => {
  res.sendFile(path.join(__dirname, "public", `${devicePath}/mo`, "common.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
