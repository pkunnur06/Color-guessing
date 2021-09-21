


let cl1=document.getElementById("btn1");
let cl2=document.getElementById("btn2");
let cl3=document.getElementById("btn3");
let cl4=document.getElementById("btn4");

// a.onclick=handler;

// function handler(){
    let color=["BLUE","GREEN","YELLOW","BLACK"];
    let randomColor=color[Math.floor(Math.random()*color.length)];
    let z=randomColor;
   document.getElementById("box").style.background=z;
 
// }
    function display(){
        document.getElementById("box").style.display="none";
    }
    window.setTimeout(display , 2000);

    cl1.onclick=result;
    cl2.onclick=result;
    cl3.onclick=result;
    cl4.onclick=result;
    
    function result(e){

        if(e.target.innerHTML==z){
            document.getElementById("demo").innerHTML=`<div><h1>It's correct</h1</div>`;
          
        }
        else{
            document.getElementById("demo").innerHTML=`<div><h1>It's wrong</h1></div>`;
        }
        document.getElementById("disable").style.pointerEvents="none";

    }



    