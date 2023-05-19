let target=document.querySelector(".box");

target.addEventListener("click",function(e){
   /* var ctrl=e.ctrlKey;

    console.log(ctrl);

    if(ctrl){
        document.write("User acces ctrl Key");
    }else{
        alert("User Not acces ctrl key");
    }
    */

    /*let shift=e.shiftKey;
    console.log(shift);
    if(shift){
        document.write("User acces shift Key");
    }else{
        alert("User Not acces shift key");
    }
    */

    /*const alt=e.altKey;
    console.log(alt);
    if(alt){
        document.write("User acces alt Key");
    }else{
        alert("User Not acces alt key");
    }*/

    var meta=e.metaKey;
    console.log(meta);
    if(meta){
        document.write("User acces alt Key");
    }else{
        alert("User Not acces alt key");
    }
})