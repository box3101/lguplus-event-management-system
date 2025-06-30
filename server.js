const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

// 정적 파일 제공을 위한 미들웨어 설정
app.use(
  express.static("public", {
    etag: false,
    lastModified: false,
    maxAge: "0",
    setHeaders: (res, path) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    },
  })
);

// HTML 파일 제공을 위한 라우트 설정
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 이벤트 페이지 라우팅
const sgates = ["01", "02", "03", "04", "05", "06", "07"];
const isparks = ["01", "02", "03", "04", "05", "06", "07", "08"];


sgates.forEach((sgateId) => {
  // PC 버전
  app.get(`/sgate/${sgateId}/`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `sgate/${sgateId}/pc`, "common.html"));
  });
});

isparks.forEach((isparkId) => {
  // PC 버전
  app.get(`/ispark/${isparkId}/`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `ispark/${isparkId}/pc`, "common.html"));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
