let stylesheet = document.styleSheets[1];
  // .filter(css => {
  // if(css.ownerNode.attributes.href === "css/styles.css")
  // {
  //   return css;
  // }
// });

//console.log(weatherStyleSheet);
//for(let i = 0; i < stylesheet.length; i++){
//  if(stylesheet[i].selectorText === '.ground'){
//    console.log('ground found!');
//    console.log(stylesheet[i]);
//    stylesheet[i].style.fill = "red";
//  }
//}
//console.log(stylesheet); 
////  .rules[0].style;
////declaration.setProperty('background-color',"yellow");

//const ground = document.getElementsByClassName("ground");
//for(let i = 0; i < 5; i++)
//{
//  //console.log(ground[i].className.baseVal);
//  //if(!ground[i].id){
//  //  console.log('id not found, should be manip');
//  //  //ground[i].className.baseVal += " red";
//  //  //ground[i].setProperty("fill","red");
//  // }
//  ground[i].style.setProperty('fill', 'red');
//}
////console.log(ground);
////
//
//
const buildMode = false; // toggles build mode. For logging out target areas rather than trying to puzzle out where to put thunder
const weatherDefinitions = {
  THUNDER: [[200,299]],
  CLOUDRAIN: [[300,399],[511,531]],
  SUNRAIN: [[500,504]],
  SNOW: [[600,699]],
  FOG: [[700,799],[802,802]],
  CLEAR: [[800,800]],
  LIGHTCLOUD: [[801,801]],
  HEAVYCLOUD: [[803,804]]
};

const conditionFinder = (conditionId) => {
  const inRange = (s,e,t) => (t >= s && t <= e);
  for(let condition in weatherDefinitions){
    if(weatherDefinitions[condition].length > 1){
      weatherDefinitions[condition].forEach(range => {
         if(inRange(range[0],range[1],conditionId)){
          return condition;
         }
       });
     }
    if(inRange(weatherDefinitions[condition][0][0],weatherDefinitions[condition][0][1],conditionId)){
       return condition;
     }
   }
    return "No condition found!?";
}

const townSpan = document.getElementById('town');
const textBox = document.getElementById('messageBox');
const addToBox = (string) => {
  textBox.textContent += string;
}
if(buildMode){  
const pixels = document.querySelectorAll('rect');
pixels.forEach(rect => {
  rect.addEventListener('click',(e) => {
    const targetedClasses = /(R\d*|C\d*)/;
    e.target.style = "fill: pink;";
    const classList = Object.values(e.target.classList);
    const coords = classList.filter(cla => targetedClasses.test(cla)).join(" ");
    console.log(`"${coords}",`);
    });
});
}

//const rainBars = document.getElementByC

const weather = 
{ coord: { lon: -103.22, lat: 44.11 },
  weather: 
   [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  base: 'stations',
  main: 
   { temp: 24.17,
     pressure: 1033,
     humidity: 57,
     temp_min: 21.2,
     temp_max: 26.06 },
  visibility: 16093,
  wind: { speed: 11.59, deg: 305 },
  clouds: { all: 1 },
  dt: 1542048900,
  sys: 
   { type: 1,
     id: 2465,
     message: 0.0048,
     country: 'US',
     sunrise: 1542030321,
     sunset: 1542065305 },
  id: 420032045,
  name: 'Rapid City',
  cod: 200 };
const worldWeather = conditionFinder(weather.weather[0].id);
const townName = weather.name;
townSpan.textContent = townName;
//============= 
// FIND TIME
let time = new Date;
let hours = time.getHours();
console.log(hours);
const sunrise = weather.sys.sunrise;
const sunTime = new Date(sunrise).getUTCHours();
//console.log(sunTime);
let fakeTime = 10;
let timeOfDay = (hours > 17 || hours < 6) ? "NIGHT" : "DAY";
textBox.textContent += `It is ${timeOfDay.toLowerCase()}time.`;
//============
// COLOR STATES
const clearNight = {
  skyTop: "#020077",
  skyMidTop: "#020077",
  skyMidBottom: "#020077",
  skyBottom: "#020077",
  ground: "#384831",
  roof: "#948787",
  houseFront: "#984040",
  houseSide: "#9e675e",
  crescent: "#fffda8",
  celestialBody: "#373737",
  stars: "#d6cffd",
  toAdd: ['stars'],
}

const applyColorSet = (colorset) => {
  for(let color in colorset){
    if(color !== 'toAdd'){
      let colorVariable = `--${color}`;
      document.documentElement.style.setProperty(colorVariable,colorset[color]);
    }
  }
  if(colorset.toAdd.length !== 0){
    console.log(stylesheet[0].selectorText);
    // colorset.toAdd.forEach(cla => {
    //   for(let i = 0; i < stylesheet.length; i++){
    //     console.log(stylesheet[i]);
    //     if(stylesheet[i].selectorText === `.${cla}`){
    //     console.log('ground found!');
    //     console.log(stylesheet[i]);
    //     stylesheet[i].style.fill = `--${cla}`;
    //     }
    //   }
    // });
  }
}
const worldState = `${worldWeather} ${timeOfDay}`;

switch(worldState){
  case "CLEAR NIGHT":
    applyColorSet(clearNight);
    break;
  default:
    console.log('hello there');
}

//document.documentElement.style.setProperty("--skyTop", "none");

