
const gridArr = [
  {
    name: "grid-item1",
  },

  {
    name: "grid-item2",
  },

  {
    name: "grid-item3",
  },

  {
    name: "grid-item3",
  }

]

function createGridList (arr) {
  const gridList = arr.map((item) => {
    const div = document.createElement("div");
    div.className = item.name;

    
    return div;  
  });
  return gridList;
}


export default createGridList(gridArr);
