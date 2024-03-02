var inbox;
var result;
inbox="";
result=0;
var x="0";
document.getElementById("res").value="";
//On clicking buttons, following will be called
document.getElementById("1").onclick = function(){changefun("1")};
document.getElementById("2").onclick = function(){changefun("2")};
document.getElementById("3").onclick = function(){changefun("3")};
document.getElementById("4").onclick = function(){changefun("4")};
document.getElementById("5").onclick = function(){changefun("5")};
document.getElementById("6").onclick = function(){changefun("6")};
document.getElementById("7").onclick = function(){changefun("7")};
document.getElementById("8").onclick = function(){changefun("8")};
document.getElementById("9").onclick = function(){changefun("9")};
document.getElementById("0").onclick = function(){changefun("0")};
document.getElementById("sum").onclick = function(){changefun("+")};
document.getElementById("sub").onclick = function(){changefun("-")};
document.getElementById("mul").onclick = function(){changefun("*")};
document.getElementById("div").onclick = function(){changefun("/")};
document.getElementById("dec").onclick=function(){changefun(".")};
document.getElementById("equal").onclick = function(){final()};
document.getElementById("clear").onclick = function(){clrall()};
function changefun(x){				//function to change input values
inbox=inbox+x;
document.getElementById("res").value=inbox}
function final(){					//function to evaluate the values present inside input(id="inbox")
result=eval(inbox);
document.getElementById("res").value=result;
inbox=result;}
function clrall(){					//function to clear all the values inside the input(id="inbox") on clicking the clear button(id="clear")
document.getElementById("res").value="";
inbox=""}