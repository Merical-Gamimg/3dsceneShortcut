console.log("hello world");

var makeWorld = function(w,prosp,top,src1,src2,src3,src4,src5,src6){

    this.w = w;
    this.prosp = prosp;
    this.top = top;
    this.src1 = src1;
    this.src2 = src2;
    this.src3 = src3;
    this.src4 = src4;
    this.src5 = src5;
    this.src6 = src6;

var bodyEL = document.getElementsByTagName("body");

//===================================  FATHER DIV  ====================================================\\

var fatherDiv = document.createElement("div");
fatherDiv.id = "fatherDiv";
fatherDiv.style.color = "black";
fatherDiv.style.width = w;
fatherDiv.style.height = w;
fatherDiv.style.margin = "40px";
fatherDiv.style.perspective = prosp;
fatherDiv.style.position = "absolute";
fatherDiv.style.top = top;

var fatherDivEL = document.getElementById("fatherDiv");
fatherDiv.textContent = "Satyam, i am fatherDiv";
document.body.appendChild(fatherDiv);
console.log(bodyEL);

//=========================================  MOTHER DIV  ==================================================\\

var motherDiv = document.createElement("div");
motherDiv.textContent = "Satyam,  i am motherDiv";
motherDiv.style.width = w;
motherDiv.style.height = w;
motherDiv.style.color = "black";
motherDiv.style.transformStyle = "preserve-3d";
motherDiv.id = "motherDiv"
fatherDiv.appendChild(motherDiv);

//==========================================  SELECTING ALL CHILD DIVS  =======================================\\

/*var allChilds = document.getElementById("child");
allChilds.style.width =w;
allChilds.style.height =w;
allChilds.style.backgroundColor = "black";
allChilds.style.position = "absolute";*/

//========================================== CHILD DIV  ===================================================\\

var child1 = document.createElement("div");
child1.textContent = "child1";
child1.id = "child";
child1.style.position = "absolute";
child1.style.backgroundColor = "transparent";
child1.style.transform = "translateZ("+200+"px) rotateY(180deg)";
child1.style.width = w;
child1.style.height = w;
motherDiv.appendChild(child1);

var child2 = document.createElement("div");
child2.textContent = "child2";
child2.id = "child";
child2.style.position = "absolute";
child2.style.transform = "translateZ(-"+200+"px)";
child2.style.height = w;
child2.style.width = w;
motherDiv.appendChild(child2);

var child3 = document.createElement("div");
child3.textContent = "child3";
child3.id = "child";
child3.style.position = "absolute";
child3.style.transform = "rotateY(90deg) translateX(-"+200+"px)";
child3.style.transformOrigin = "left";
child3.style.width = w;
child3.style.height = w;
child3.style.border = "1px solid white";
motherDiv.appendChild(child3);

var child4 = document.createElement("div");
child4.textContent = "child4";
child4.id = "child";
child4.style.position = "absolute";
child4.style.transform = "rotateY(-90deg) translateX("+200+"px)";
child4.style.transformOrigin = "right";
child4.style.width = w;
child4.style.height = w;
child4.style.border = "1px solid white";
child4.style.border = "1px solid white";
motherDiv.appendChild(child4);

var child5 = document.createElement("div");
child5.textContent = "child5";
child5.id = "child";
child5.style.position = "absolute";
child5.style.transform = "rotateY(-90deg) rotateX(-90deg) translateY(-200px)";
child5.style.transformOrigin = "top";
child5.style.width = w;
child5.style.height = w;
child5.style.border = "1px solid white";
child5.style.border = "1px solid white";
motherDiv.appendChild(child5);

var child6 = document.createElement("div");
child6.textContent = "child6";
child6.id = "child";
child6.style.position = "absolute";
child6.style.transform = "rotateY(270deg) rotateX(90deg) translateY(200px)";
child6.style.transformOrigin = "bottom";
child6.style.width = w;
child6.style.height = w;
child6.style.border = "1px solid white";
child6.style.border = "1px solid white";
motherDiv.appendChild(child6);


//================================================ IMG ELEMENTS =================================================\\

var child1img = document.createElement("img");
child1img.src = "";
child1img.style.width = w;
child1img.style.height = w;
child1.appendChild(child1img);

var child2img = document.createElement("img");
child2img.src = "";
child2img.style.width = w;
child2img.style.height = w;
child2.appendChild(child2img);

var child3img = document.createElement("img");
child3img.src = "";
child3img.style.width = w;
child3img.style.height = w;
child3.appendChild(child3img);

var child4img = document.createElement("img");
child4img.src = "";
child4img.style.width = w;
child4img.style.height = w;
child4.appendChild(child4img);

var child5img = document.createElement("img");
child5img.src = "";
child5img.style.width = w;
child5img.style.height = w;
child5.appendChild(child5img);

var child6img = document.createElement("img");
child6img.src = "";
child6img.style.width = w;
child6img.style.height = w;
child6.appendChild(child6img);

}

