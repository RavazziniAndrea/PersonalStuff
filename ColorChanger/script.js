let btn=document.getElementById("btn"),
    title=document.getElementById("title"),
    // rand=0,
    s_rand="";

randomColor();

btn.addEventListener("click", randomColor);


function randomColor(){
    s_rand="";
    for(let i=0; i<3;i++){
        let str=parseInt(Math.random()*1000%256).toString(16);
        if(str.length<2) str="0"+str;
        s_rand+=str;
    }
    
    title.innerHTML="Color: #"+s_rand.toUpperCase();
    title.style.border="3px #"+s_rand+" solid";
    title.style.color="#"+s_rand;
}
