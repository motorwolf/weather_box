// clean this up before reinsertion
//
const APICALL = (loc) => {
let isCity = isNaN(parseFloat(loc));
let url;  
if(!isCity){
  url = `https://api.openweathermap.org/data/2.5/weather?zip=${loc}&APPID=${CONFIG.APIKEY}&units=imperial`;
} else {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${CONFIG.APIKEY}&units=imperial`;
}
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let oWMData = data;
    weatherRetriever(oWMData);
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
}
