const gridItem1 = `
<div class="who">who?</div>
<div class="skill">프론트 엔드</div>
<div class="hobby">취미</div>
<div class="hello">hello world</div>
`
const gridItem2 = `
<div class="instagram">INSTA</div>
<div class="fire">fire</div>
<div class="nyan">냥!</div>
<div class="bike">classic</div>
<div class="trump">trump</div>
`

const gridItem3 = `
<div class="a">A</div>
<div class="b">B</div>
<div class="c">C</div>
<div class="d">D</div>
<div class="e">E</div>
<div class="f">F</div>
<div class="g">G</div>
<div class="h">H</div>

`
const gridItem4 = `
<div class="resume">
  <h5>프론트 엔드 개발자 김영준 이력서</h5>
  <p class="intro">간단한 자기소개</p>
  <div class="box">
    <p>Node. JS 환경에서 React JS, Axios, styled-components, redux-react를 다루는 개발자</p>
<p class="title">[새로운 시도를 좋아하고 배우는 것에 두려움이 없다]</p>
   <p class="dec">&ensp;- 데이터를 다루는 대회에서 코딩을 공부하고 대회에서 적용해 본 경험과 해당 대회에서 최우수상 수상과 대학 졸업 논문이라는 결과 </p>
    <p class="dec">&ensp;- 웹의 성능 향상을 위해 클린 아키텍쳐와 다양한 프론트 엔드 디자인 패턴을 학습하고 적용</p>
    <p class="dec">&ensp;- 현재는 CORS정책, mixed contents를 대처하기 위해 프록시 서버를 학습</p>

<p class="title">[“왜?”라는 질문을 던지며 개념을 파고드는 물리학적 사고방식을 가짐]</p>
<p class="dec">&ensp;- 컨벤션을 중요하게 생각하고 또 다른 방법을 찾기 위한 개념을 파고드는 공부를 통해 두 번의 프로젝트를 완성</p>

<p class="title">[재활용성에 집착하는 개발자]</p>
<p class="dec">&ensp;- stateful, Container, Presentational 등 다양한 패턴에 대해 알아가고 또 적용하는 것을 좋아함</p>
  </div>
</div>
`

export const GRID = {
  GRID_ONE: {
    name: "grid-item1",
    element: gridItem1
  },

  GRID_TWO: {
    name: "grid-item2",
    element: gridItem2
  },

  GRID_THREE: {
    name: "grid-item3",
    element: gridItem3
  },

  GRID_FOUR: {
    name: "grid-item4",
    element: gridItem4
  }
}

export const grid_ARR = Object.values(GRID)