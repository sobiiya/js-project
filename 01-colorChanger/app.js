const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target.id)
    let color = e.target.id;
    switch (color) {
      case "grey": 
        body.style.backgroundColor = "grey";
        break;
        case "white": 
        body.style.backgroundColor = "white";
        break;  
        case "blue": 
        body.style.backgroundColor = "blue";
        break;
        case "yellow": 
        body.style.backgroundColor = "yellow";
        break;
        default:
        console.log("background color in unavailable")
    }
  });
});
