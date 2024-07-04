# Glawbal
> 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커!
* 전세계 외국인 근로자를 위한 RAG 기반 AI 법률 탐색 서비스
* RAG-based AI legal recommendation service for foreign workers around the world

## 1. Introduction
<img src="public/preview-home.png" width=400/> <img src="public/preview-login.png" width=400/>
<img src="public/preview-chat1.png" width=400/> <img src="public/preview-chat2.png" width=400/>

* 이 Repository는 KT AIVLE SCHOOL 5기 AI트랙 19조의 빅프로젝트 코드 중 FE 파트의 내용을 포함하고 있습니다.
* 본 코드는 FE 코드로, React.js 기반으로 작성되었습니다.

## 2. How to use?
1. **Node.js 설치**
    * 이 레포는 React.js framework를 사용하였으며, Node.js 설치가 선행되어야 실행할 수 있습니다.
2. 설치한 패키지 목록 <br>
big-project-front@0.1.0 <br>
├── @emotion/react@11.11.4 <br>
├── @emotion/styled@11.11.5 <br>
├── @fortawesome/fontawesome-svg-core@6.5.2 <br>
├── @fortawesome/free-brands-svg-icons@6.5.2 <br>
├── @fortawesome/free-regular-svg-icons@6.5.2 <br>
├── @fortawesome/free-solid-svg-icons@6.5.2 <br>
├── @fortawesome/react-fontawesome@0.2.2 <br>
├── @mui/icons-material@5.15.21 <br>
├── @mui/material@5.15.21 <br>
├── @testing-library/jest-dom@5.17.0 <br>
├── @testing-library/react@13.4.0 <br>
├── @testing-library/user-event@13.5.0 <br>
├── material-icons@1.13.12 <br>
├── react-dom@18.3.1 <br>
├── react-router-dom@6.24.0 <br>
├── react-scripts@5.0.1 <br>
├── react-textarea-autosize@8.5.3 <br>
├── react@18.3.1 <br>
├── sass@1.77.6 <br>
├── scss@0.2.4 <br>
└── web-vitals@2.1.4 <br>
3. **터미널에서 npm start 실행**
    * 해당 Repository를 Clone 한 후, 터미널에서 해당 명령어를 실행하면 현재 진행된 프로젝트 결과물을 로컬에서 확인할 수 있습니다.


## 3. Structures
Glawber <br>
    ├── public <br>
    ├── src <br>
    │   ├── Assetts <br>
    │   │   ├── colors.scss <br>
    │   │   ├── fonts.scss <br>
    │   │   └── layout.scss <br>
    │   ├── Componentts <br>
    │   │   ├── GBox <br>
    │   │   ├── GButton <br>
    │   │   └── GComment <br>
    │   ├── Layout <br>
    │   │   ├── Header <br>
    │   │   ├── SideNavigation <br>
    │   │   ├── Layout.jsx <br>
    │   │   └── Layout.scss <br>
    │   └── Pages <br>
    │   │   ├── Chatbot <br>
    │   │   ├── Community <br>
    │   │   ├── Home <br>
    │   │   ├── Join <br>
    │   │   └── Login <br>
    │   └── index.js <br>
    ├── .gitignore <br>
    ├── package.json <br>
    ├── package-lock.json <br>
    └── README.md <br>

## 4. Update Note
* 2024/07/02 (화)
    * Layout 구축 및 Header, SideNavigation 생성
* 2024/07/03 (수)
    * Home 화면 Layout 구축
    * Chatbot 화면, Login 화면 UI 구현