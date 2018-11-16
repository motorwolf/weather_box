let stylesheet = document.styleSheets[1];

const buildMode = false; // toggles build mode. For logging out target areas rather than trying to puzzle out where to put thunder

const weatherDefinitions = {
  THUNDER: [[200,299]],
  CLOUDRAIN: [[300,399],[511,531]],
  CLEARRAIN: [[500,504]],
  SNOW: [[600,699]],
  FOG: [[700,799],[802,802]],
  CLEAR: [[800,800]],
  LIGHTCLOUD: [[801,801]],
  HEAVYCLOUD: [[803,804]]
};

const findSelectorAddStyle = (selector,styleType,style) => {
  for(let i = 0; i < stylesheet.cssRules.length; i++){
    if(stylesheet.cssRules[i].selectorText === selector){
      stylesheet.cssRules[i].style[styleType] = style;
    }
  }
}
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
let timeOfDay = (hours > 17 || hours < 6) ? "NIGHT" : "DAY";
textBox.textContent += `It is ${timeOfDay.toLowerCase()}time.`;
//============
// COLOR STATES
const clearDay = {
  skyTop: "#1ED2FF", 
  skyMidTop: "#14BEFF",
  skyMidBottom: "#23ABFF",
  skyBottom: "#23ABFF",
  ground: "#9aff70",
  roof: "#333",
  houseFront: "#C33",
  houseSide: "#A01700",
  crescent: "#F2F211",
  celestialBody: "#F7F211",
  toAdd: [],
  animations: []
}

const shell = {
  skyTop: "#",
  skyMidTop: "#",
  skyMidBottom: "#",
  skyBottom: "#",
  ground: "#",
  roof: "#",
  houseFront: "#",
  houseSide: "#",
  crescent: "#",
  celestialBody: "#",
  toAdd: [""] 
}

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
  twinkleColor: "#FFFFFF",
  toAdd: ['stars'],
  animations: ['twinkle'],
}

const lightCloudDay = {
  skyTop: "#1ED2FF", 
  skyMidTop: "#14BEFF",
  skyMidBottom: "#23ABFF",
  skyBottom: "#23ABFF",
  ground: "#9aff70",
  roof: "#333",
  houseFront: "#C33",
  houseSide: "#A01700",
  crescent: "#F2F211",
  celestialBody: "#F7F211",
  cloud: "#FFF",
  toAdd: ['cloud'],
  animations: [],
}

const lightCloudNight = {
  skyTop: "#29286d",
  skyMidTop: "#29286d",
  skyMidBottom: "#29286d",
  skyBottom: "#29286d",
  ground: "#384831",
  roof: "#948787",
  houseFront: "#984040",
  houseSide: "#9e675e",
  crescent: "#fffda8",
  celestialBody: "#373737",
  stars: "#867eb1",
  toAdd: ['stars','cloud'],
  animations: [],
}

const heavyCloudDay = {
  skyTop: "#a5ccd6", 
  skyMidTop: "#99c1d0",
  skyMidBottom: "#95b4c7",
  skyBottom: "#95b4c7",
  ground: "#7ed05c",
  roof: "#333",
  houseFront: "#C33",
  houseSide: "#A01700",
  crescent: "#F2F211",
  celestialBody: "#F7F211",
  cloud: "#e4e4e4",
  bigCloud: "#9e9494",
  toAdd: ['cloud','bigCloud'],
  animations: [],

}

const heavyCloudNight = {
  skyTop: "#302f54",
  skyMidTop: "#302f54",
  skyMidBottom: "#302f54",
  skyBottom: "#302f54",
  ground: "#384831",
  roof: "#948787",
  houseFront: "#984040",
  houseSide: "#9e675e",
  crescent: "#fffda8",
  cloud: "#cecece",
  celestialBody: "#cecece",
  stars: "#867eb1",
  toAdd: ['stars','cloud',"bigCloud"],
  animations: [],

}

const overcastDay = {
  skyTop: "#93a3a7", 
  skyMidTop: "#93a3a7",
  skyMidBottom: "#93a3a7",
  skyBottom: "#93a3a7",
  ground: "#82bb6a",
  roof: "#5a5a5a",
  houseFront: "#bd5656",
  houseSide: "#9c4638",
  crescent: "#d0d0b3",
  celestialBody: "#e8e8b5",
  cloud: "#e4e4e4",
  bigCloud: "#9e9494",
  toAdd: []
}

const overcastNight = {
  skyTop: "#242433",
  skyMidTop: "#242433",
  skyMidBottom: "#242433",
  skyBottom: "#242433",
  ground: "#979e94",
  roof: "#6d6d6d",
  houseFront: "#774242",
  houseSide: "#9e675e",
  crescent: "#82827f",
  celestialBody: "#3d3d4c",
  toAdd: [],
  animations: [],
}

const clearRainDay = {
  skyTop: "#93a3a7", 
  skyMidTop: "#93a3a7",
  skyMidBottom: "#93a3a7",
  skyBottom: "#93a3a7",
  ground: "#82bb6a",
  roof: "#5a5a5a",
  houseFront: "#bd5656",
  houseSide: "#9c4638",
  crescent: "#e8e8b5",
  celestialBody: "#e8e8b5",
  cloud: "#EEE",
  rainGroup1: "#333",
  rainGroup2: "#666",
  toAdd: ['cloud','rainGroup2'],
  animations: ['rain'],
}

const clearRainNight = {
  skyTop: "#242433",
  skyMidTop: "#242433",
  skyMidBottom: "#242433",
  skyBottom: "#242433",
  ground: "#979e94",
  roof: "#6d6d6d",
  houseFront: "#774242",
  houseSide: "#9e675e",
  crescent: "#82827f",
  celestialBody: "#3d3d4c",
  rainGroup2: "#BBB",
  toAdd: ['rainGroup2'],
  animations: ['rain'],
}

const cloudRainDay = {
  skyTop: "#a0a0a0", 
  skyMidTop: "#a0a0a0",
  skyMidBottom: "#a0a0a0",
  skyBottom: "#a0a0a0",
  ground: "#6c7d65",
  roof: "#3c3636",
  houseFront: "#af8383",
  houseSide: "#71514c",
  crescent: "#a0a0a0",
  celestialBody: "#a0a0a0",
  rainGroup1: "#CCC",
  rainGroup2: "#FFF",
  toAdd: [],
  animations: ['rain'],
}

const cloudRainNight = {
  skyTop: "#424242", 
  skyMidTop: "#424242",
  skyMidBottom: "#424242",
  skyBottom: "#424242",
  ground: "#6c7d65",
  roof: "#737373",
  houseFront: "#543535",
  houseSide: "#845a54",
  crescent: "#424242",
  celestialBody: "#424242",
  rainGroup1: "#999",
  rainGroup2: "#BBB",
  toAdd: ['rainGroup1','rainGroup2'],
  animations: ['rain'],
}

const thunderDay = {
  skyTop: "#a0a0a0", 
  skyMidTop: "#a0a0a0",
  skyMidBottom: "#a0a0a0",
  skyBottom: "#a0a0a0",
  ground: "#6c7d65",
  roof: "#3c3636",
  houseFront: "#af8383",
  houseSide: "#71514c",
  crescent: "#545154",
  celestialBody: "#545154",
  rainGroup1: "#CCC",
  rainGroup2: "#FFF",
  cloud: "#a0a0a0",
  bigCloud: "#545154",
  thunder: "#a0a0a0",
  toAdd: ['thunder','cloud','bigCloud','rainGroup1','rainGroup2'],
  animations: ['lightning'],
}

const thunderNight = {
  skyTop: "#424242", 
  skyMidTop: "#424242",
  skyMidBottom: "#424242",
  skyBottom: "#424242",
  ground: "#6c7d65",
  roof: "#737373",
  houseFront: "#543535",
  houseSide: "#845a54",
  crescent: "#424242",
  celestialBody: "#424242",
  rainGroup1: "#999",
  rainGroup2: "#BBB",
  cloud: "#1f1c1f",
  bigCloud: "#1f1c1f",
  thunder: '#424242',
  toAdd: ['cloud','bigCloud','thunder','rainGroup1','rainGroup2'],
  animations: ['lightning'],
}

const snowDay = {
  skyTop: "#a0a0a0", 
  skyMidTop: "#a0a0a0",
  skyMidBottom: "#a0a0a0",
  skyBottom: "#a0a0a0",
  ground: "#CCC",
  roof: "#3c3636",
  houseFront: "#af8383",
  houseSide: "#71514c",
  crescent: "#a0a0a0",
  celestialBody: "#a0a0a0",
  snow: "#FFF",
  stars: "#FFF",
  snowroof: "#CCC",
  toAdd: ['snowroof'],
  animations: ['snow'],
}

const snowNight = {
  skyTop: "#424242", 
  skyMidTop: "#424242",
  skyMidBottom: "#424242",
  skyBottom: "#424242",
  ground: "#808080",
  roof: "#B7B7B7",
  houseFront: "#543535",
  houseSide: "#845a54",
  crescent: "#424242",
  celestialBody: "#424242",
  snow: "#FFF",
  stars: "#afafaf",
  snowroof: "#BDBDBD",
  toAdd: ['snowroof'],
  animations: ['snow'],
}

const animationList = {
  lightning: {
    ".thunder": 'lightning 15s infinite',
    svg: 'opacitron 15s infinite'
  },
  twinkle: {
    ".stars": 'twinkle 1s infinite'
  },
  rain: {
    ".rainGroup1": 'rainCycle1 3s infinite',
    ".rainGroup2": 'rainCycle2 3s infinite'
  },
  snow: {
    ".snow": 'snowCycle1 3s infinite',
    ".stars": 'snowCycle2 3s infinite',
  }
}

const applyColorSet = (colorset) => {
  for(let color in colorset){
    if(color !== 'toAdd' && color !== 'animations'){
      let colorVariable = `--${color}`;
      document.documentElement.style.setProperty(colorVariable,colorset[color]);
    }
  }
  if(colorset.toAdd.length !== 0){
    colorset.toAdd.forEach(cla => {
      findSelectorAddStyle(`.${cla}`,`fill`,`var(--${cla})`);
    });
  }
  if(colorset.animations.length !== 0){
    colorset.animations.forEach(anim => {
      let animObj = animationList[anim];
      for(let element in animObj){
        findSelectorAddStyle(element,'animation',animObj[element]);
      }
    });
    }
  }

let worldState = `${worldWeather} ${timeOfDay}`;
// FAKE WORLDSTATE SETTER//
worldState = "SNOW DAY";
// END FAKE WORLDSTATE SETTER FOR TESTING
switch(worldState){
  case "CLEAR DAY":
    applyColorSet(clearDay);
    break;
  case "CLEAR NIGHT":
    applyColorSet(clearNight);
    break;
  case "LIGHTCLOUD DAY":
    applyColorSet(lightCloudDay);
    break;
  case "LIGHTCLOUD NIGHT":
    applyColorSet(lightCloudNight);
    break;
  case "HEAVYCLOUD DAY":
    applyColorSet(heavyCloudDay);
    break;
  case "HEAVYCLOUD NIGHT":
    applyColorSet(heavyCloudNight);
    break;
  case "FOG DAY":
    applyColorSet(overcastDay);
    break;
  case "FOG NIGHT":
    applyColorSet(overcastNight);
    break;
  case "CLEARRAIN DAY":
    applyColorSet(clearRainDay);
    break;
  case "CLEARRAIN NIGHT":
    applyColorSet(clearRainNight);
    break;
  case "CLOUDRAIN DAY":
    applyColorSet(cloudRainDay);
    break;
  case "CLOUDRAIN NIGHT":
    applyColorSet(cloudRainNight);
    break;
  case "THUNDER DAY":
    applyColorSet(thunderDay);
    break;
  case "THUNDER NIGHT":
    applyColorSet(thunderNight);
    break;
  case "SNOW DAY":
    applyColorSet(snowDay);
    break;
  case "SNOW NIGHT":
    applyColorSet(snowNight);
    break;

  default:
    console.log('hello there');
}


