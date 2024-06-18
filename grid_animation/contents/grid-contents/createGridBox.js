function createGridBox (arr) {
  const gridList = arr.map((item) => {
    const div = document.createElement("div");


    div.className = item.name;

    switch (item.name) {
      case "grid-item1":
        div.innerHTML = item.element;
      break;

      case "grid-item2":
        div.innerHTML = item.element;
      break;

      case "grid-item3":
        div.innerHTML = item.element;
      break;

      case "grid-item4":
        div.innerHTML = item.element;
      break;
    }
    
    return div;  
  });
  return gridList;
}

// 함수 자체를 내보내기, 호출 결과가 아니라.
// export default createGridBox(grid_ARR); ==> XXXXXXX
export default createGridBox;


/**
 *  나중에 호출하는 페이지 !!여기서 42번 줄이랑 46번 줄 컨벤션 기억해두기!!!@!!!
 * 
import createGridBox from './path/to/createGridBox';
import { grid_ARR } from '../contentItems/items';

const gridElements = createGridBox(grid_ARR);

// 이 요소들을 문서의 컨테이너에 추가하려는 경우
const container = document.getElementById('grid-container');
gridElements.forEach(element => container.appendChild(element));
 */