let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

class Circle {
    constructor(xpos, ypos, radius, color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }
    draw(context){
        context.beginPath();
        context.lineWidth=5;
        
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI* 2,false);
        context.stroke();
        context.closePath();
        
        
        
        
    }
}




let all_circle = [];

let createcircle = function(circle){
    circle.draw(context);
}
let getRandomColor = function () {  
    const letters = '0123456789ABCDEF';  
    let color = '#';  
    for (let i = 0; i < 6; i++) {  
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;  
}  

canvas.style.background = getRandomColor();
 

for(var numbers=0; numbers<10; numbers++){
    let random_x = Math.random() * window_width;
    let random_y = Math.random() * window_height;
    context.strokeStyle = getRandomColor();
    let my_circle = new Circle(random_x, random_y, 50, getRandomColor());
    all_circle.push(my_circle);
    createcircle(all_circle[numbers]);
}

// let my_circle = new Circle(100, 100, 50, "black");
// let my_circle2 = new Circle(200, 200, 50, "black");
// my_circle.draw(context);
// my_circle2.draw(context);