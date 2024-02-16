document.getElementById("hight").addEventListener("keyup", function (event) {
    const text = event.target.value;
    const calculateBtn = document.getElementById("btn-calculate");
    if (text !== "") {
      calculateBtn.removeAttribute("disabled", true);
    }
  });
document.getElementById("length").addEventListener("keyup", function (event) {
    const text = event.target.value;
    const calculateBtn = document.getElementById("btn-rect-calculate");
    if (text !== "") {
      calculateBtn.removeAttribute("disabled", true);
    }
  });

function triangleCalculate() {
  const baseInput = document.getElementById("base");
  const baseValue = baseInput.value;
  const base = parseFloat(baseValue);
  const hightInput = document.getElementById("hight");
  const hightValue = hightInput.value;
  const hight = parseFloat(hightValue);
  const result = 0.5 * base * hight;
  const resultOutput = document.getElementById("final-output");

  return (resultOutput.innerText = result+' cm²');

}


function rectangleCalculate(){
    const widthInput = document.getElementById("width");
    const widthValue = widthInput.value;
    const width = parseFloat(widthValue);
    const lengthInput = document.getElementById("length");
    const lengthValue = lengthInput.value;
    const length = parseFloat(lengthValue);
    const result = width * length;
    const resultOutput = document.getElementById("rect-output");
  
    return (resultOutput.innerText = result+' cm²');
  
  }

