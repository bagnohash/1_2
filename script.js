const element = document.getElementById("ex3_element");
const one = document.getElementById("ex3_one");
const two = document.getElementById("ex3_two");

element.draggable = true;

element.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});


two.addEventListener("dragover", (event) => {
    event.preventDefault();
});

two.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const dragged = document.getElementById(id);
    if (dragged) {
        two.appendChild(dragged);
    }
});
