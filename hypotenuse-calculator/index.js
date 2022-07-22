let a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C:", c);

document.getElementById("submit").onclick = function(){
    
    a = Number(document.getElementById("getA").value);
    b = Number(document.getElementById("getB").value);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("labelC").innerHTML = "Side C: " + c;

}

