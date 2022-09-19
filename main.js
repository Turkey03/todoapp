//Create a close button and append it each to list
var myNodelist = document.getElementsByTagName("LI");
var i;
for( i=0; i< myNodelist.length;i++) {
  var span= document.createElement("SPAN");
  var icon=document.createTextNode("\u00d7");
  span.className="close";
  span.appendChild(icon);
  myNodelist[i].appendChild(span);
}
//click close button to hide current list
 var close = document.getElementsByClassName("close");
 var i;
 for( i = 0; i<close.length; i++) {
   close[i].onclick = function () {
    var hide=this.parentElement;
    hide.style.display = "none";
   }
 }
 //click on checked on list
 var list=document.querySelector("ul");
 list.addEventListener("click",function(ev) {
    if(ev.target.tagName==="LI") {
      ev.target.classList.toggle("checked");
    }
 },false);
 //add info from input
 function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var txtInput =   document.createTextNode(inputValue);
  li.appendChild(txtInput);
  if (inputValue === '') {
    alert("Điền gì đó đi thằng loz");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var icon = document.createTextNode("\u00d7")
  span.className ="close";
  span.appendChild(icon);
  li.appendChild(span);
  for( i = 0; i<close.length; i++) {
    close[i].onclick = function () {
     var hide=this.parentElement;
     hide.style.display = "none";
    }
  }
}
