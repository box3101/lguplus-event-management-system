# README.MD

## Package.json

```
dependencies

- 프로덕션 환경에서 필요한 패키지들
- 쉽게 말해서 "고객이 웹사이트를 이용할 때 필요한" 패키지들

devDependencies

- 개발자가 코딩할 때 편하게 하기 위한 도구들입니다
- 쉽게 말해서 "개발자가 개발하는 동안만 필요한" 패키지들

scripts

- 자주 사용되는 npm 명령어들을 미리 정의해두는 부분(단축키)

```

## 1. npm i

- 프로젝트 폴더에서 실행하면 package.json에 정의된(dependencies와 devDependencies ) 패키지들을 모두 설치 (node_modules 폴더 생성)

## 2. .gitignore

- node_modules 폴더는 프로젝트 폴더에 포함되지 않도록 설정

## 3. server.js

- 서버 실행 파일

```
const express = require("express");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  HTML 파일 제공을 위한 라우트 설정
  루트 경로('/')로 접속하면 public 폴더의 index.html 파일을 응답으로 보냄
  __dirname 은 절대 경로
*/

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


```

## 3-2. 이벤트 페이지 라우팅

```
// 이벤트 페이지 라우팅
// -> 라우팅 : 사용자가 요청한 URL에 따라 적절한 페이지나 데이터를 보여주는 과정

// 이벤트 ID 배열 정의
const events = ["387", "80", "121", "506", "632", "870", "1594", "1586", "1634", "1636"];

// 각 이벤트 ID에 대한 라우팅 설정
events.forEach((eventId) => {

  // PC 버전 라우팅 (/event/[eventId])
  app.get(`/event/${eventId}`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `event/${eventId}/pc`, "common.html"));
  });

  // 모바일 버전 라우팅 (/event/[eventId]/m)
  app.get(`/event/${eventId}/m`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", `event/${eventId}/mo`, "common.html"));
  });

});

```
