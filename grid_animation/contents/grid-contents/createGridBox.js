const gridArr = [
  {
    name: "grid-container(1)",
  },

  {
    name: "grid-container(2)",
  },

  {
    name: "grid-container(3)",
  },

  {
    name: "grid-container(4)",
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
