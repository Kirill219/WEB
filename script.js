function changeformat1(type)
{
var txtStyle = document.getElementById('var1').style;
txtStyle.getPropertyValue("background-color") === "yellow" ?
            txtStyle.setProperty("background-color", "blue"):
            txtStyle.setProperty("background-color", "yellow");
txtStyle.getPropertyValue("color") === "black" ?
            txtStyle.setProperty("color", "white"):
            txtStyle.setProperty("color", "black");
}

function changeformat2()
{
var txtStyle = document.querySelectorAll('#tit')[0].style;
txtStyle.getPropertyValue("background-color") === "yellow" ?
            txtStyle.setProperty("background-color", "blue"):
            txtStyle.setProperty("background-color", "yellow");
txtStyle.getPropertyValue("color") === "black" ?
            txtStyle.setProperty("color", "white"):
            txtStyle.setProperty("color", "black");
}

function increase(type)
{
var imgStyle = document.getElementById('symbol').style;
imgStyle.setProperty("width", "250px");
imgStyle.setProperty("height", "250px");        
}

function decrease(type)
{
var imgStyle = document.getElementById('symbol').style;
imgStyle.setProperty("width", "200px");
imgStyle.setProperty("height", "200px");          
}

function del(type)
{
var imgStyle = document.getElementById('symbol').style;
imgStyle.setProperty("display", "none");        
}

function add(type)
{
var imgStyle = document.getElementById('symbol').style;
imgStyle.setProperty("display", "flex");        
}