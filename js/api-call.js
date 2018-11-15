// clean this up before reinsertion
//
let zip = "57701";
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${CONFIG.APIKEY}&units=imperial`;
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let theReturnedData = data;
    console.log(theReturnedData);
    //textBox.textContent += theReturnedData;
    return theReturnedData;
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });

