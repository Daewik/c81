canvas= document.getElementById('canva');
ctx= canvas.getContext("2d");
color='blue';
width='4';

ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth=width;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener('mousedown' ,my_mousedown );

function my_mousedown(e)
{
    mx=e.clientX -canvas.offsetLeft;

    my=e.clientY -canvas.offsetTop;
    circle(mx,my);  
}
function circle(mx,my)
{
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth=width;
    ctx.arc(mx,my,40,0,2*Math.PI);
    ctx.stroke();  
}