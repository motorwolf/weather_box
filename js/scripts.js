const locationChanger = document.getElementById('locationChanger');
const locationForm = document.getElementById('changeLocation');
const locationInput = locationForm.querySelector('#location');
const tempSlot = document.getElementById('tempSlot');
const weatherSlot = document.getElementById('weatherSlot');
console.log(tempSlot,weatherSlot);
let refreshButton = document.getElementById('reset');
refreshButton.addEventListener('click',() => {
  window.location.search = "";
});
const countries = {
    AF: 'Afghanistan',
    AX: 'Aland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua And Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia And Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CD: 'Congo, Democratic Republic',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: 'Cote D\'Ivoire',
    HR: 'Croatia',
    CU: 'Cuba',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island & Mcdonald Islands',
    VA: 'Holy See (Vatican City State)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran, Islamic Republic Of',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle Of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KR: 'Korea',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Lao People\'s Democratic Republic',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libyan Arab Jamahiriya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia, Federated States Of',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territory, Occupied',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russian Federation',
    RW: 'Rwanda',
    BL: 'Saint Barthelemy',
    SH: 'Saint Helena',
    KN: 'Saint Kitts And Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin',
    PM: 'Saint Pierre And Miquelon',
    VC: 'Saint Vincent And Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome And Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia And Sandwich Isl.',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard And Jan Mayen',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad And Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks And Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    UM: 'United States Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Viet Nam',
    VG: 'Virgin Islands, British',
    VI: 'Virgin Islands, U.S.',
    WF: 'Wallis And Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
}
let formWeatherSet = window.location.search;
let setWeather;
let locWeather;
if(formWeatherSet !== ""){
  formWeatherSet = formWeatherSet.replace(/(\?)/).split("&");
} else {
  formWeatherSet = false;
}
if(formWeatherSet){
  if(formWeatherSet[0].indexOf("location") === -1){
    document.getElementById("godMode").checked = true;
    setWeather = formWeatherSet.map(val => {
      return val.split("=")[1];
    }).join(" ");
  }
  else{
    locWeather = formWeatherSet[0].split("=")[1];
  }
}
let stylesheet = document.styleSheets[1];

const buildMode = true; // toggles build mode. For logging out target areas rather than trying to puzzle out where to put thunder

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
  const inRange = (s,e,t) => {
    return (t >= s && t <= e);
  };
  for(let condition in weatherDefinitions){
    if(weatherDefinitions[condition].length > 1){
      let conditionFound = "";
      weatherDefinitions[condition].forEach(range => {
        if(inRange(range[0],range[1],conditionId)){
          conditionFound = condition;
         }
      });
      if(conditionFound !== ""){
        return conditionFound;
      }
    }

    if(inRange(weatherDefinitions[condition][0][0],weatherDefinitions[condition][0][1],conditionId)){
       return condition;
     }
  }
  console.log(conditionId);
  console.log('but it keeps running');
  return "No condition found!?";
}
const weatherChangeForm = document.getElementById('weatherChanger');
const weatherInput = weatherChangeForm.querySelector('#weather');
const timeInput = weatherChangeForm.querySelector('#time');
weatherChangeForm.addEventListener('submit',e => {
  weatherChange(`${weatherInput.value} ${timeInput.value}`);
});
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
   [ { id: 511, main: 'Clear', description: 'clear sky', icon: '01d' } ],
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
//const worldWeather = conditionFinder(weather.weather[0].id);
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
//let timeOfDay = (hours > 17 || hours < 6) ? "NIGHT" : "DAY";
//textBox.textContent += `It is ${timeOfDay.toLowerCase()}time.`;
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
  toAdd: [],
  animations: []
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
  toAdd: ['cloud'],
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
  toAdd: [],
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
  toAdd: [],
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
  toAdd: ['thunder','cloud','bigCloud'],
  animations: ['lightning','rain'],
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
  toAdd: ['cloud','bigCloud','thunder'],
  animations: ['lightning', 'rain'],
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

const weatherChange = weatherTime => {
  switch(weatherTime){
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
}
const weatherRetriever = (weather) => {
  const worldWeather = conditionFinder(weather.weather[0].id);
  const weatherCountry = countries[weather.sys.country].toUpperCase();
  const town = weather.name.toUpperCase() + `, ${weatherCountry}`;
  townSpan.textContent = town;
  let timeOfDay = weather.weather[0].icon[2];
  if(timeOfDay === 'n'){
    timeOfDay = "NIGHT";
  } else {
    timeOfDay = "DAY";
  }
  const conditions = weather.weather[0].description;
  const temperature = `Temperature: ${weather.main.temp} Degrees F`;
  const apiWeather = `${worldWeather} ${timeOfDay}`;
  tempSlot.textContent = temperature;
  weatherSlot.textContent = conditions;
  console.log(weather);
  console.log(apiWeather);
  weatherChange(apiWeather); 
}
if(setWeather && godMode.checked){
  weatherChange(setWeather);
}
if(locWeather){
  APICALL(locWeather);
}

