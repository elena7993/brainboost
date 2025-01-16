# 프로젝트명: BrainBoost

### 영어상식퀴즈앱👀

### 배포주소

브레인부스트 바로가기: <https://elena7993.github.io/brainboost/>

### 1. 앱 이미지

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
<img src="./public/bb_images/bb_home.png" alt="홈화면" width="300" height="500">
<img src="./public/bb_images/bb_main.png" alt="메인화면" width="300" height="500">
<img src="./public/bb_images/bb_quiz.png" alt="퀴즈화면" width="300" height="500">
<img src="./public/bb_images/bb_feedback.png" alt="피드백화면" width="300" height="500">
<img src="./public/bb_images/bb_ox.png" alt="오답노트화면" width="300" height="500">

<div>

<p style="margin: 20px 0;"></p>

### 2.목적

- 사용자가 다양한 카테고리와 난이도의 퀴즈를 통해 영어를 재미있게 학습하고 지식을 확장할 수 있도록 돕는다.

### 3.기능

- 사용자가 퀴즈 카테고리와 난이도를 선택할 수 있음.
- 5개의 퀴즈 질문을 출제.
- 사용자의 정답 여부에 따라 '오답 노트'를 제공.

### 4. 스택

- HTML, CSS, JavaScript, React, Open Trivia Database API, Figma

### 5. 개발 스케줄

| 날짜     | 작업 내용                                                                                                         |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| 수 13/11 | API 선정<br>프로젝트명 및 기획안 작성                                                                             |
| 목 14/11 | 기획안 수정 및 컨펌<br>레퍼런스 조사 및 디자인 작업                                                               |
| 금 15/11 | 디자인 최종 수정 및 컨펌<br>코드 초기 세팅 및 GitHub 연동<br>기본 구성요소 세팅: 헤더, 푸터 등 공통 컴포넌트 작성 |
| 토 16/11 | API 연동 및 기능 구현<br>메인화면 구성                                                                            |
| 일 17/11 | 퀴즈 페이지 구성<br>오답 노트 페이지 구성                                                                         |
| 월 18/11 | 각 페이지들 코드 최종 수정                                                                                        |
| 화 21/11 | 버그 수정 및 최종 테스트<br>유지 보수 및 배포 준비                                                                |
| 수 22/11 | 배포                                                                                                              |

### **6. 작업하면서 느낀 점**

**(1)문제 발생과 해결을 위한 시도**

- API호출에서 429 Too Many Requests 이슈가 발생했다.
  처음에 기획한 10문제 출제에서 5문제로 줄이고 요청 시 딜레이 시간을 추가했다. 하지만 여전히 문제가 해결되지 않았고 요청을 재시도하는 로직을 추가하여 시도한 끝에 마침내 퀴즈들을 불러올 수 있었다.
- 퀴즈를 불러오는데는 성공했으나, 호출을 재시도하는 만큼(+딜레시시간) 로딩시간이 길어진 점이 아쉽다.

**(2)디자인과 로직의 균형**

- 이번 프로젝트에서 여백에 신경을 쓰려고 했다. 사용자의 입장에서 생각하려고 노력했고 디자인작업중에는 꾀나 만족스러웠다 하지만 배포하고 테스트를 해보니 행간, 패딩 등 아쉬운 부분이 눈에 보인다. 또한 버튼의 간격이라던가, 모양이라던가 사소하다고 느껴질 수 있는 모든 부분이 사실은 굉장히 중요하다는 것을 다시금 느낄 수 있었다.

**(3)향후계획 및 총평:**

- 현재 API호출 로직을 개선하고 싶은 것이 첫째이다. 로딩시간이 길기 때문에 사용자입장에서는 지루함을 느낄 것이다. 로딩에서 기다리는 즐거움을 추가하던지, 호출하는 방법을 개선하던지 고민해봐야한다.

- 또한 오답노트에서 다음 문제로 넘어가지않고 완료되고 홈으로 넘어가게 되어있는데, 이 역시 디테일을 잡지 못한 나의 실수다. 이 부분을 수정해야 한다.

- 배포를 준비하면서 실무에 가까운 워크플로우를 경험했고, 프로젝트를 완성하는 과정에서 즐거움과 괴로움을 숨 쉬듯 느끼며 성장하는 시간이었다. 아직 너무 부족하고 실수투성이지만 하나의 프로젝트를 해냈다는, 끝냈다는 생각에 뿌듯한 마음도 든다. 이대로만 차근차근 해나가고 싶다. 💪🏼💪🏼💪🏼
