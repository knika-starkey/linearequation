alert("a*x+b=0");
let a = prompt("Enter a");
let b = prompt("Enter b");
if (isNaN(a) || isNaN(b)) alert("a must be number");
else if (a == 0) alert("a should not be equal to 0");
else {
  alert(a + "* x +" + b + "= 0");
  let x = -b / a;
  alert("x=-" + b + "/" + a + "=" + x);
}
