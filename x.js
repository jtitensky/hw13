console.log("ayo")

var addElement=function(e){
    var k=document.createElement("li");
    k.innerHTML="item "+elements.length;
    addListeners(k);
    document.getElementById("thelist").appendChild(k);
};


var a=document.getElementById("a");
a.addEventListener('click',addElement);


var changeHeading=function(e){
    var t=this.innerHTML;
    document.getElementById("h").innerHTML=t;
};

var changeHeadingBack=function(e){
    document.getElementById("h").innerHTML="Hello World";
};

var remove=function(e){
    document.getElementById("thelist").removeChild(this);
};

var addListeners=function(obj){
    obj.addEventListener("mouseover",changeHeading);
    obj.addEventListener("mouseout",changeHeadingBack);
    obj.addEventListener("click",remove);
};

var elements=document.getElementsByTagName("li");     

for(var i=0;i<elements.length;i++){
    addListeners(elements[i]);
};


var addFib=function(e){
    n=document.getElementById("otherlist").childElementCount;
    var k=document.createElement("li");
    var n=Math.round((Math.pow(1+Math.sqrt(5),n+1)-Math.pow(1-Math.sqrt(5),n+1))/Math.pow(2,n+1)/Math.sqrt(5));
    k.innerHTML=""+n;
    document.getElementById("otherlist").appendChild(k);    
};


var b=document.getElementById("b");
b.addEventListener('click',addFib);
