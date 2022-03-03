const canvas = document.getElementById('jsCanvas');

let painting = false


if(canvas){
    canvas.addEventListener('mousemove', (event)=>{
        const x = event.offsetX;
        const y = event.offsetY;
        console.log(x,y,painting);
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
}