console.log("ayo")

var addElement=function(e){
    console.log(this);
    var x=document.createElement("li");
    var t=document.createTextNode("new");
    x.appendChild(t);
    document.getElementById("thelist").appendChild(x);
};

var a=document.getElementById('a');
a.addEventListener('click',addElement);

