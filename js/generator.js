// This will generate a pixel based svg based on the parameters we give it.
// Since the output will be many lines, it makes sense to output this to a file rather than directly in the console.

// initialize the file system module.
const fs = require('fs');

// this is our template for the svg.
class svg {
  constructor(pxSize,height,width,colorHex,colorHex2) {
    this.px = pxSize, // size of pixels
      this.height = height, // total height of svg
      this.width = width, // total width of svg
      this.color = colorHex, // even row colors
      this.altColor = colorHex2 // odd row colors
    this.opacityIncrement = 1 / width; // may not work if svg opacity works on a 1 decimal point scale like css opacity... worth a try!
  }
}

// this generates the rect squares.
const generateCode = (svg) => {
  console.log(svg.px);
    let svgbody = []; // this is going to be our output.
    let rect = "";
    let rectClass = "";
    let fill = svg.color;
    let pxHeight = `${svg.px}px`;
    let pxWidth = `${svg.px}px`;
    let yVal = "";
    let xVal = "";
    let opacity = "";
    for(let x = 0; x < svg.height; x++){ 
      x%2 !== 0 ? fill = svg.altColor : fill = svg.color;
      for(let y = 0; y < svg.width; y++){
        rectClass = `R${x + 1} C${y + 1}`;
        yVal = `${x * 10}px`;
        xVal = `${y * 10}px`;
        opacity = svg.opacityIncrement + (svg.opacityIncrement * y);
        rect = `<rect class="${rectClass}" fill="${fill}" height="${pxHeight}" width="${pxWidth}" y="${yVal}" x="${xVal}" opacity="${opacity}"></rect> \n`;
        svgbody.push(rect);
      }
    }
    return svgbody.join("");
}
const testHouse = new svg(10,10,10,"#F0F","#0F0");
const code = generateCode(testHouse);
//const house = new svg(10,32,32,"#F0F");
//const code = generateCode(house);
console.log(code);
