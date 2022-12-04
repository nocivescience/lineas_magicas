window.addEventListener('load', function(){
    const canvas1= document.getElementById('canvas1');
    const canvas2= document.getElementById('canvas2');
    const ctx1=canvas1.getContext('2d');
    const ctx2=canvas2.getContext('2d');
    const colors=[
        'green',
        '#00d5d5',
        'rgb(213, 121, 0)',
        'rgb(123, 166, 3)',
        'rgb(213, 0, 177)',
    ];
    
    canvas1.width= window.innerWidth;
    canvas1.height= window.innerHeight;
    canvas2.width= window.innerWidth;
    canvas2.height= window.innerHeight;
    ctx1.fillStyle='black';
    ctx1.fillStroke='green';
    ctx1.fillStyle=colors[Math.floor(Math.random()*colors.length)];
    ctx1.fillStroke='red';
    let particleArray=[];
    let canvasCenterX= window.innerWidth;
    let canvasCenterY= window.innerHeight;
    let radius= window.innerWidth/5;
    let angle=0;
    //posicionar al mouse
    const mouse={x: null, y:null};
    this.window.addEventListener('mousemove',function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        console.log(mouse);
    });
    // reubicar la posiucion del muose cada 5 segundos para prevenir que el mouse se estanque cuando se ubique en las esquinas cuando el muse deje la pantalla
    this.setInterval(()=>{
        mouse.x=undefined;
        mouse.y=undefined;
    },10);
    //creando las particulas
    class Particle{
        constructor(x,y,size,color,weight){
            this.x=x;
            this.y=y;
            this.size=size;
            this.minSize=size;
            this.color=color;
            this.weight=weight;
        };
        draw(){
            ctx1.beginPath();
            ctx1.globalAlpha=.6;
            ctx1.fillStyle=this.color;
            ctx1.arc(this.x,this.y,this.size, 0, 2*Math.PI, false); //para que es el false?????
            ctx1.fill();
            ctx1.closePath();
        }
        update(){
            // autopilotaje
            if(mouse.x==undefined&& mouse.y==undefined){
                let newX= radius*2*Math.cos(angle*Math.PI/180);
                let newY= radius*2*Math.sin(angle*Math.PI/90);
                mouse.x=newX+canvasCenterX;
                mouse.y=newY+canvasCenterY;
            }
            angle+=0.15;
            if(this.size<0){
                this.x=(mouse.x+(Math.random()*20)-10);
                this.y=(mouse.y+(Math.random()*20)-10);
                this.size=(Math.random()*25);
                this.weight=(Math.random()*2)+.1;
            }
            this.y+=this.weight;
            this.weight+=0.05;
            //cuando alcanza el fondo de la pantalla
            if(this.y>canvas1.height-this.size*2){
                this.weight*=-.99
            }
        }
    }
    function init(){
        particleArray=[];
        for (let i=0;i<300;i++){
            let size=(Math.random()*10)+5;
            let x=Math.random()*(innerWidth-size*2)+size;
            let y=Math.random()*(innerHeight-size*2)+size;
            let color=colors[Math.floor(Math.random()*colors.length)];
            let weight=1;
            particleArray.push(new Particle(x,y,size,color,weight))
        }
    }
    function animate(){
        ctx1.clearRect(0,0,canvas1.width,canvas1.height);
        ctx2.clearRect(0,0,canvas2.width,canvas2.height);
        for (let i=0;i<particleArray.length;i++){
           particleArray[i].update();
           particleArray[i].draw(); 
        }
        requestAnimationFrame(animate)
    }
    init();
    animate();
    window.addEventListener('resize',()=>{
        init();
    })
})