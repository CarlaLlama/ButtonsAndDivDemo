

window.addEventListener("scroll", function(){
    const parallax = document.getElementById("parallax");
    let offSet = window.pageYOffset;
    console.log("Offset: " + offSet);
    console.log("Offset*0.7: " + offSet*0.7);

    parallax.style.backgroundPositionY = offSet * 0.7  + "px";
});