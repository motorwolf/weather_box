# WEATHER BOX
Weather box is a procedurally generated svg comprised of pixel boxes delineated by css classes to create a graphical representation of a house and weather. The weather is fetched from Open Weather Map when a user enters a weather location, and the various pieces of the svg are changed to conform to these weather conditions. The areas on the svg that were to be changed were first mapped out in a series of coordinates, and applied to the svg generator to output the proper classes when the coordinates matched. I added a build mode to facilitate adding these areas, which can be toggled on and off. In build mode, any pixel that is clicked on changes color and outputs the coordinates to the console. The backdrop changes on a formula depending on whether the weather is warm or cold. 

Live example at http://www.kristenpaynedesign.com/weather
![BERKELEY RAIN DAY](https://raw.githubusercontent.com/motorwolf/weather_box/master/docs/berkeley-day-rain.gif)
