"use strict"

document.addEventListener("readystatechange",(event) => {
    if (event.target.readyState ==="complete") {
        initApp();
        // console.log("loaded")
    } 
});


const initApp = () => {
    /* get data from document */
    const section = document.querySelector(".section");
    
    const colorText = document.querySelector(".colorText");
    
    /* for same value to text and color  */
    const app = randomColorGenarate(); 

    /* assign values */
    colorText.textContent = app;
    section.style.backgroundColor = app;

    /* submit button function */
    document.querySelector("button").addEventListener("click", (event) => {
        location.reload()
    
    });
}



const randomColorGenarate = () => {

/* clolor modes
rgb  3 * (0-255) 
rgba 3 * (0-255) (0.0 - 1.0)
hex  6 * (0-9)
hsl 0-360 0-100 0-100
hsla 0-360 0-100 0-100 (0.0 - 1.0)
pre difind 
*/


/*Available color mode array*/

const clolorMode = ['rgb', 'rgba', 'hex','hsl', 'hsla', 'predefined'];


/*choose color mode*/

const colorModeIndex = wholeNumberFinder(clolorMode.length);


/* choose color mode */

switch (colorModeIndex){
        case 0:
            return colorRgb();
        break;

        case 1:
            return colorRgba();
            break;
        case 2:
            return colorHex();
            break;
        case 3:
            return colorHsl();
            break;
        case 4:
            return colorHsla();
            break;
        default:
            return predefined();
    }
}


/*random whole number genarator*/

const wholeNumberFinder = (n) => {
    return Math.floor(Math.random()*(n));
}


/* Random fraction number genarator */

const fractionNumberFinder = (maxValue) =>{
    return Math.floor(Math.random()*(maxValue+1))/10;
}


/*Color calculators */

function colorRgb(){
    return `rgb( ${wholeNumberFinder(256)},${wholeNumberFinder(256)},${wholeNumberFinder(256)})`;
}

function colorRgba(){
    return `rgba( ${wholeNumberFinder(256)},${wholeNumberFinder(256)},${wholeNumberFinder(256)},${fractionNumberFinder(10)})`;
}

function colorHex(){
    let temp = "";
    for (let i = 0; i<6;i++ ){
        temp += wholeNumberFinder(16).toString(16)
    }
    return `#${temp}`;
}

function colorHsl(){
    return `hsl(${wholeNumberFinder(360)},${wholeNumberFinder(100)}%,${wholeNumberFinder(100)}%)`;
}

function colorHsla(){
    return `hsl(${wholeNumberFinder(360)},${wholeNumberFinder(100)}%,${wholeNumberFinder(100)}%,${fractionNumberFinder(10)})`;
}

function predefined(){
    const colorGalary = ['red', 'blue','green', 'yellow', 'lime','pink','orange']
    return `${colorGalary[wholeNumberFinder(colorGalary.length-1)]}`;

}


