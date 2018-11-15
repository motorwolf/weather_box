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
      //this.opacityIncrement = 1 / width; 
      // Decided to remove opacity.
  }
}

// this defines the coordinates for our class additions.
const classMapRow = {
  skyTop: /\b(R[1-5])\b/,
  skyMidTop: /\b(R[6-9]|R10)\b/,
  skyMidBottom: /\b(R1[1-5])\b/,
  skyBottom: /\b(R1[6-9]|R20)\b/,
  ground: /\b(R2[1-9]|R3[0-2])\b/
};

const classMapColumn = {
  rainGroup1: ["C2","C7","C12","C18","C24","C28"],
  rainGroup2: ["C5","C10","C15","C21","C26","C31"]
}

const idMapAreas = {
  roof: 
  [ 'R14 C8',
  'R14 C9',
  'R14 C10',
  'R14 C11',
  'R14 C12',
  'R14 C13',
  'R14 C14',
  'R14 C15',
  'R15 C9',
  'R15 C10',
  'R15 C11',
  'R15 C12',
  'R15 C13',
  'R15 C14',
  'R15 C15',
  'R15 C16',
  'R15 C7',
  'R16 C9',
  'R16 C9',
  'R16 C10',
  'R16 C11',
  'R16 C12',
  'R16 C13',
  'R16 C14',
  'R16 C15',
  'R16 C16',
  'R16 C7',
  'R17 C6',
  'R17 C10',
  'R17 C11',
  'R17 C12',
  'R17 C13',
  'R17 C14',
  'R17 C15',
  'R17 C16',
  'R17 C17',
  'R18 C5',
  'R18 C11',
  'R18 C12',
  'R18 C13',
  'R18 C14',
  'R18 C15',
  'R18 C16',
  'R18 C17',
  'R18 C18',
  'R19 C5',
  'R19 C11',
  'R19 C12',
  'R19 C13',
  'R19 C14',
  'R19 C15',
  'R19 C16',
  'R19 C17',
  'R19 C18',
  'R20 C4',
  'R20 C12',
  'R20 C13',
  'R20 C14',
  'R20 C15',
  'R20 C16',
  'R20 C17',
  'R20 C18',
  'R20 C19' ],

  houseFront:
[ 'R15 C8',
  'R16 C8',
  'R17 C7',
  'R17 C8',
  'R17 C9',
  'R18 C6',
  'R18 C7',
  'R18 C8',
  'R18 C9',
  'R18 C10',
  'R19 C6',
  'R19 C7',
  'R19 C8',
  'R19 C9',
  'R19 C10',
  'R20 C5',
  'R20 C6',
  'R20 C7',
  'R20 C8',
  'R20 C9',
  'R20 C10',
  'R20 C11',
  'R21 C4',
  'R21 C5',
  'R21 C6',
  'R21 C7',
  'R21 C8',
  'R21 C9',
  'R21 C10',
  'R21 C11',
  'R22 C4',
  'R22 C5',
  'R22 C6',
  'R22 C7',
  'R22 C8',
  'R22 C9',
  'R22 C10',
  'R22 C11',
  'R23 C4',
  'R23 C5',
  'R23 C6',
  'R23 C7',
  'R23 C8',
  'R23 C9',
  'R23 C10',
  'R23 C11',
  'R24 C4',
  'R24 C5',
  'R24 C6',
  'R24 C7',
  'R24 C8',
  'R24 C9',
  'R24 C10',
  'R24 C11',
  'R25 C4',
  'R25 C5',
  'R25 C6',
  'R25 C7',
  'R25 C8',
  'R25 C9',
  'R25 C10',
  'R25 C11',
  'R26 C4',
  'R26 C5',
  'R26 C6',
  'R26 C7',
  'R26 C8',
  'R26 C9',
  'R26 C10',
  'R26 C11',
  'R27 C4',
  'R27 C5',
  'R27 C6',
  'R27 C7',
  'R27 C8',
  'R27 C9',
  'R27 C10',
  'R27 C11' ],

  houseSide: 
[ 'R21 C12',
  'R21 C13',
  'R21 C14',
  'R21 C15',
  'R21 C16',
  'R21 C17',
  'R21 C18',
  'R21 C19',
  'R22 C12',
  'R22 C13',
  'R22 C14',
  'R22 C15',
  'R22 C16',
  'R22 C17',
  'R22 C18',
  'R22 C19',
  'R23 C12',
  'R23 C13',
  'R23 C14',
  'R23 C15',
  'R23 C16',
  'R23 C17',
  'R23 C18',
  'R23 C19',
  'R24 C12',
  'R24 C13',
  'R24 C14',
  'R24 C15',
  'R24 C16',
  'R24 C17',
  'R24 C18',
  'R24 C19',
  'R25 C12',
  'R25 C13',
  'R25 C14',
  'R25 C15',
  'R25 C16',
  'R25 C17',
  'R25 C18',
  'R25 C19',
  'R26 C12',
  'R26 C13',
  'R26 C14',
  'R26 C15',
  'R26 C16',
  'R26 C17',
  'R26 C18',
  'R26 C19',
  'R27 C12',
  'R27 C13',
  'R27 C14',
  'R27 C15',
  'R27 C16',
  'R27 C17',
  'R27 C18',
  'R27 C19' ],

  crescent:
  [ 'R2 C25',
  'R2 C26',
  'R3 C27',
  'R3 C28',
  'R4 C27',
  'R4 C28',
  'R5 C27',
  'R5 C28',
  'R5 C29',
  'R6 C27',
  'R6 C28',
  'R6 C29',
  'R7 C27',
  'R7 C28',
  'R8 C27',
  'R8 C28',
  'R9 C25',
  'R9 C26',
"R2 C27",
"R9 C27",
"R8 C26",
"R3 C26",
"R7 C29",
"R4 C29"
  ],
  
  celestialBody: 
  [ 'R3 C23',
  'R3 C24',
  'R3 C25',
  'R3 C26',
  'R4 C23',
  'R4 C24',
  'R4 C25',
  'R4 C26',
  'R5 C24',
  'R5 C25',
  'R5 C26',
  'R6 C23',
  'R6 C24',
  'R6 C25',
  'R6 C26',
  'R7 C23',
  'R7 C24',
  'R7 C25',
  'R7 C26',
  'R8 C24',
  'R8 C25',
  'R8 C26',
  "R2 C24",
  "R5 C23",
  "R4 C22",
  "R5 C22",
  "R6 C22",
  "R7 C22",
  "R8 C23",
  "R9 C24"
  ],
  cloud:
[ 'R3 C19',
  'R3 C20',
  'R3 C21',
  'R3 C22',
  'R3 C23',
  'R4 C18',
  'R4 C19',
  'R4 C20',
  'R4 C21',
  'R4 C22',
  'R4 C23',
  'R4 C24',
  'R5 C15',
  'R5 C16',
  'R5 C17',
  'R5 C18',
  'R5 C19',
  'R5 C20',
  'R5 C21',
  'R5 C22',
  'R5 C23',
  'R5 C24',
  'R5 C25',
  'R5 C26',
  'R5 C27',
  'R6 C14',
  'R6 C15',
  'R6 C16',
  'R6 C17',
  'R6 C18',
  'R6 C19',
  'R6 C20',
  'R6 C21',
  'R6 C22',
  'R6 C23',
  'R6 C24',
  'R6 C25',
  'R6 C26',
  'R6 C27',
  'R6 C28',
  'R7 C15',
  'R7 C16',
  'R7 C17',
  'R7 C18',
  'R7 C19',
  'R7 C20',
  'R7 C21',
  'R7 C22',
  'R7 C23',
  'R7 C24',
  'R7 C25',
  'R7 C26',
  'R7 C27' ],
  thunder:
[ 'R8 C21',
  'R8 C22',
  'R8 C23',
  'R8 C24',
  'R8 C25',
  'R9 C21',
  'R9 C22',
  'R9 C23',
  'R9 C24',
  'R9 C25',
  'R10 C20',
  'R10 C21',
  'R10 C22',
  'R10 C23',
  'R11 C19',
  'R11 C20',
  'R11 C21',
  'R12 C19',
  'R12 C20',
  'R12 C21',
  'R13 C20',
  'R13 C21',
  'R14 C20',
  'R14 C21',
  'R15 C20',
  'R15 C21',
  'R16 C21',
  'R16 C22',
  'R16 C23',
  'R17 C22',
  'R17 C23',
  'R17 C24',
  'R18 C21',
  'R18 C22',
  'R19 C20',
  'R19 C21' ],
  stars: [
  "R6 C8",
  "R10 C5",
  "R4 C4",
  "R2 C14",
  "R8 C14",
  "R11 C10",
  "R5 C19",
  "R10 C21",
  "R15 C21",
  "R12 C26",
  "R17 C29"
  ],
  snow:
  [
  "R6 C2",
  "R13 C4",
  "R16 C2",
  "R19 C5",
  "R25 C3",
  "R28 C7",
  "R24 C8",
  "R26 C14",
  "R29 C13",
  "R16 C14",
  "R13 C10",
  "R11 C15",
  "R6 C11",
  "R3 C9",
  "R6 C15",
  "R2 C18",
  "R8 C20",
  "R4 C23",
  "R6 C25",
  "R3 C30",
  "R12 C23",
  "R17 C25",
  "R19 C21",
  "R23 C24",
  "R22 C15",
  "R27 C20",
  "R31 C19",
  "R27 C26",
  "R24 C22",
  "R29 C30",
  "R23 C28",
  "R13 C29",
  "R10 C31",
  "R19 C8",
  "R15 C11",
  "R30 C4"
  ],
  snowroof: 
  [
  "R14 C10",
  "R14 C11",
  "R14 C12",
  "R14 C13",
  "R14 C14",
  "R15 C11",
  "R15 C12",
  "R15 C10",
  "R15 C13",
  "R15 C14",
  "R15 C15",
  "R14 C9",
  "R16 C10",
  "R17 C11",
  "R18 C12",
  "R18 C13",
  "R18 C14",
  "R18 C15",
  "R18 C16",
  "R18 C17",
  "R17 C16",
  "R17 C15",
  "R16 C15",
  "R16 C14",
  "R17 C14",
  "R16 C13",
  "R17 C13",
  "R16 C12",
  "R16 C11",
  "R17 C12",
  "R19 C14",
  "R19 C15",
  "R19 C16",
  "R19 C13",
  ],
  bigCloud: 
  [
  "R8 C16",
  "R8 C17",
  "R8 C18",
  "R8 C19",
  "R8 C20",
  "R8 C21",
  "R8 C22",
  "R8 C23",
  "R8 C24",
  "R8 C25",
  "R4 C17",
  "R3 C18",
  "R2 C19",
  "R2 C20",
  "R2 C21",
  "R2 C22",
  "R5 C14",
  "R6 C13",
  "R5 C13",
  "R6 C12",
  "R6 C11",
  "R5 C12",
  "R7 C12",
  "R7 C13",
  "R7 C14",
  "R7 C11",
  "R8 C12",
  "R8 C13",
  "R8 C14",
  "R8 C15",
  "R9 C20",
  "R9 C21",
  "R9 C22",
  "R9 C24",
  "R9 C23",
  "R9 C19",
  "R9 C17",
  "R10 C18",
  "R9 C18",
  "R9 C15",
  "R9 C16",
  "R10 C17",
  "R10 C19",
  "R10 C20",
  "R10 C21",
  "R10 C22",
  "R10 C23",
  "R10 C24",
  "R10 C26",
  "R10 C25",
  "R10 C27",
  "R10 C28",
  "R8 C29",
  "R9 C28",
  "R9 C29",
  "R4 C16",
  "R3 C17",
  "R6 C30",
  "R6 C31",
  "R6 C32",
  "R7 C30",
  "R7 C31",
  "R7 C32",
  "R8 C30",
  "R8 C31",
  "R8 C32" 
  ]
};

const calculateRawData = (string) => {
  const coordinates = [];
  string.split(",").map(crange => {
    let dividedRange = crange.split(" ");
    dividedRange[1] = dividedRange[1].substring(1);
    let startEnd = dividedRange[1].split("-");
    if(startEnd.length === 1){
      coordinates.push(`${dividedRange[0]}, C${startEnd}`);
    }
    else {
    let start = startEnd[0];
    let end = startEnd[1];
    for(let i = start; i <= end; i++){
      let coord = `${dividedRange[0]} C${i}`;
      coordinates.push(coord);
    }
    }
  });
  return coordinates;
}
//console.log(calculateRawData(rawStars));
const convertCSS = (coords) => {
  return coords.split(',').map(coord => {
    coord = coord.substring(1);
  if(coord[0] === ".") {
    coord = coord.substring(1);
  }
  coord = coord.split(".").join(" ");
  return coord;
  });
};

const classRowFinder = (coordinates,classes) => {
  let addedClasses = [];
  coordinates = coordinates.split(" ");
  for(let className in classes){
    if(classes[className].test(coordinates[0])){
      addedClasses.push(className);
    }
    if(classes[className].test(coordinates[1])){
      addedClasses.push(className);
    }
  }
  if(addedClasses.length === 0){
    return false;
  } 
  else {
    return addedClasses.join(" ");
  }
}
const classColumnFinder = (coordinates,columnNumbers) => {
  let addedClasses = [];
  let target = coordinates.split(" ")[1];
  for(let columns in columnNumbers){
    if(columnNumbers[columns].some(coord => {
      return coord === target;
    })){
      return columns;
    }
  }
}

const idFinder = (coordinates,ids) => {
  let addedIds = [];
  for(let idName in ids){
    if(ids[idName].includes(coordinates)){
      addedIds.push(idName);
    }
  }
  if(addedIds.length === 0){
    return false;
  }
  else {
    return addedIds.join(" ");
  }
}

// this generates the rect squares.
const generateCode = (svg,targetAreas) => {
    let svgbody = []; // this is going to be our output.
    let id = "";
    let rect = "";
    let rectClass = "";
    let fill = svg.color;
    let pxHeight = `${svg.px}px`;
    let pxWidth = `${svg.px}px`;
    let yVal = "";
    let xVal = "";
  //let opacity = "";
    let hw = [(svg.height * svg.px),(svg.width * svg.px)];
    let svgshell = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xlink="http://www.w3.org/1999/xlink" baseProfile="full" height="${hw[0]}px" version="1.1" width="${hw[1]}">\n`;
    svgbody.push(svgshell);
  for(let x = 0; x < svg.height; x++){
      let oddRow = false;
      x%2 !== 0 ? oddRow = true : oddRow = false;
      for(let y = 0; y < svg.width; y++){
        if(oddRow) {
          y%2 !== 0 ? fill = svg.altColor : fill = svg.color;
        }
        if(!oddRow){
          y%2 !== 0 ? fill = svg.color : fill = svg.altColor;
        }
        rectClass = `R${x + 1} C${y + 1}`;
        let addedClasses = classRowFinder(rectClass,classMapRow);
        let addedColumnClasses = classColumnFinder(rectClass,classMapColumn);
        let addedIds = idFinder(rectClass,idMapAreas);
        if(addedClasses){
          rectClass += ` ${addedClasses}`;
        }
        if(addedColumnClasses){
          rectClass += ` ${addedColumnClasses}`;
        }
        if(addedIds){
          id = addedIds;
        }
        else {
          id = "";
        }
        yVal = `${x * 10}px`;
        xVal = `${y * 10}px`;
        opacity = svg.opacityIncrement + (svg.opacityIncrement * y);
        rect = `<rect class="${rectClass} ${id}" fill="${fill}" height="${pxHeight}" width="${pxWidth}" y="${yVal}" x="${xVal}"></rect> \n`;
        svgbody.push(rect);
      }
    }
    svgbody.push(`\n</svg>`)
    return svgbody.join("");
}
//const testHouse = new svg(10,10,10,"#F0F","#0F0");
//const code = generateCode(testHouse);
const house = new svg(10,32,32,"#F0F","#0F0");
const code = generateCode(house);

 fs.writeFileSync('/home/motorwolf/Documents/coding/projects/weatherBox/exportedSVG.svg',code, (err) => {
   if(err){
     console.log("something went horribly wrogn!");
     console.log(err);
   }
   else {
     console.log("Your svg is saved in exportedSVG.html");
   }
 });
