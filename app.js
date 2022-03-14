const canvas = document.getElementById('jsCanvas');
// canvas.width = 1920;
// canvas.height = 1080;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "#";
ctx.lineWidth = 0.5;
const colors = document.querySelectorAll('#jsColors button');
console.log(colors);
let painting = false;


if(canvas){
    canvas.addEventListener('mousemove', (event)=>{
        const x = event.offsetX/canvas.offsetWidth*canvas.width;
        const y = event.offsetY/canvas.offsetHeight*canvas.height;
        // console.log(x,y);;
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    })
    canvas.addEventListener('mousedown',(event)=>{
        painting = true;
    })
    canvas.addEventListener('mouseup',(event)=>{
        painting = false;
    })
    canvas.addEventListener('mouseleave',(event)=>{
        painting = false;
    })

    document.getElementById('jsClear').addEventListener('click',(event)=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
}

colors.forEach((color)=>{
    color.addEventListener('click',(event)=>{
        ctx.strokeStyle = event.target.style.backgroundColor;
    })
});