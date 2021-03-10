var btn=document.getElementById("back-to-top"),
    body=document.body,
    docElem=document.documentElement,
    offset=100,
    scrollPos,
    docHeight,
    isFirefox = navigator.userAgent.includes("Firefox");


docHeight=Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if(docHeight!="undefined"){
    offset=docHeight/4;
}

window.addEventListener("scroll", function(event){
    scrollPos=body.scrollTop || docElem.scrollTop;
    if(scrollPos>offset)
        btn.className="visible";
    else
        btn.className="";
});

btn.addEventListener("click", function(event){
    event.preventDefault();
    if(isFirefox){
        docElem.scrollTop=0;
    }
    else{
        docElem.scrollTop=0;        
    }
});

