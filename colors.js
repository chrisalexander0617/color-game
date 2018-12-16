//adding code to give squares different
//colors
var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 0, 0)'
];
//identify squares from HTML
var squares = document.querySelectorAll('.square');
//identify header
var header = document.querySelectorAll('header');
//randomizes choice of color
function pickedColor(){
    var randomColor = (Math.floor(Math.random() * colors.length))
     return colors[randomColor]
}
function changeBackground(){
  header.style.backgroundColor = pickedColor

}


var pickedColor = pickedColor();
//selecting id in HTML that will choose that element
//displays the rgb number
var gameDisplay = document.querySelector('#rgb');


//selecting the the 4th index out of the 'colors' array


gameDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  //adding event handlers to squares
    squares[i].addEventListener('click', function alertUser(){
        //grabbing color of clicked square
        var clickedColor = this.style.background;
        //compare color to picked color
        if(clickedColor == pickedColor){
            changeColors(pickedColor)
            document.getElementById('header').style.backgroundColor = pickedColor;
            document.getElementById('rgb').style.color = 'white';
            document.getElementById('rgb').textContent = 'CORRECT!';
        }
        else {

           this.style.background = '#232323';
        }



    });

}

function changeColors(){
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = pickedColor
    }
}

var button = document.querySelector('#reload');
button.addEventListener('click', function refresh(){
  location.reload();
})


//random color generator
