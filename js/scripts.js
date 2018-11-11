let styleSheets = document.styleSheets[1];
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
const textBox = document.getElementById('messageBox');
let time = new Date;
let hours = time.getHours();
let timeOfDay = hours > 18 ? "night" : "day";
textBox.textContent += `It is ${timeOfDay}time.`;
const responseListener = () => {
  
}
