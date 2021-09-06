var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    console.log("cel changed");
    cel();
    let c = this.value;
    let f = (C * 9/5) + 32;
    fah.value = f;

});

fah.addEventListener('input', function(){
    console.log("fah changed");
});