// coloyr array by Noor

// vaurables for html elements 
let containerEl = document.getElementById("container")

//array
let colors = ["red", "green", "blue" ]
// position of stuff in the array is caLLED an idex
//index -----> 0        1        2

containerEl.innerHTML = "<div style='background-color: " + colors[0] + " ></div>"

console.log(colors[0])