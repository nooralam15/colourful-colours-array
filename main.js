// color array by Noor

// vaurables for html elements 
let containerEl = document.getElementById("container")
let inputEl = document.getElementById("color-in")

//global variable 
let colors

//fetch content from colors.txt
//fetches contents of ile, then call covertData, then gonna process the data
//taking data from a text file and converting it into an array
fetch("colors.txt").then(convertData).then(processData)

function convertData(rawData) {
    //take response and convert into a sting/text
    return rawData.text()

}

function processData(stringData) {
    // \r\n is the special character at the end of each line
    //use this on ANY text file, whne you 
    colors = stringData.split(/\r?\n/)
    //this fetch thing takes a reaaallly long time to load, and will load after veyrhthing else, runing yor code, so call the siplaycolours function inside this function so that it loadas after
    displayColors(colors)
    console.log(colors)

}

console.log("After Fetch")


//event listener 
//this function works as a searchbar and pulls up each one based on the key you press, like the google recomended thing
inputEl.addEventListener("keyup", submitHandler)

function submitHandler(event)  { //enter key
        // //add users color to the colors array and display
        // //.push() adds things onto the end of an array
        // colors.push(inputEl.value)
        // //the .split will take a string and will split it up into an array based on the paremeter you put in it
        // //this one will spli it based upon the , 
        // // let colorsArray = inputStr.split(",")
        // inputEl.value = ""
        // displayColors(colors)
        //.includes() searches an array or a string and sees if that paremter is in the array/string
          //display all colours on page
        let divStr= ""
        //common loop when traversing through an array
        for (let i = 0; i < colors.length; i++){
            if (colors[i].includes(inputEl.value)) {
                divStr += `<div style="background: ${colors[i]} ">${colors[i]}</div>`

        }
    }
    containerEl.innerHTML = divStr
    
}

function displayColors(colors) {
    //display all colours on page
    let divStr= ""
    let count = 0
    //common loop when traversing through an array
    for (let i = 0; i < colors.length; i++){
        if (colors[i][0] === "B" || colors[i][0] === "A") {
            divStr += `<div style="background: ${colors[i]} ">${colors[i]}</div>`
            count++
        }
}
    containerEl.innerHTML = divStr + `<p>Count: ${count}</p> `

}
//array
// let colors = ["red", "green", "blue", "orange", "cyan", "purple", "maroon"]
// position of stuff in the array is caLLED an idex
//index -----> 0        1        2       3        4         5

// //length of an array add .length at the end to get length
// console.log(colors.length)

//display all colours on page
// let divStr= ""
// //common loop when traversing through an array
// for (let i = 0; i < colors.length; i++){
//     divStr += `<div style="background: ${colors[i]} "></div>`
//     console.log(divStr)
// }
// containerEl.innerHTML = divStr

// let randCol = randomElement(colors)
// containerEl.innerHTML = `<div style="background: ${randCol} "></div>`





