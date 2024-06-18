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
<div class="resume">RESUME</div>
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