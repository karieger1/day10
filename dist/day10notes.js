/*var myBar = document.getElementById("bar");
	console.log(myBar)

//myFoos.innerHTML = "foo 3";

myFoos[1].innerHTML = "foo 3";

document.getElementByClassName ("foo";)
console.log("My foo")

//target all a elements with a class of foo 
var myFooLink = document.querySelector("a.foo")
console.log(myFooLinks)

function changeLinkText() {
	var myFooLink = document.querySelector("a.foo");
	myFooLink.innerHTML = "New Foo Link";

}
setTimeout(changeLinkText, 3000); */

var myKitten = document.getElementById
	myKitten.innerHTML = "New Kitten Stuff!";

var i = 1;

setInterval= 1;

var interval = setInterval( increment, 1000);

function increment(){
    i = i % 360 + 1;
}

var counter = 0;
function incrementCounter(){
	counter++;
	var c = document.getElementById("counter");
	c.innerHTML= counter.toString();

	if(counter >= 10) {
		clearInterval(intervalId);
	}
}

//animate
var boxElement = document.querySelector(".box");
boxElement.style.width = "20px";
boxElement.style.height = "20px";
boxElement.style.backgroundColor = "teal";


console.log(boxElement.style.marginLeft)
setInterval(moveLeft, 50/*speed*/)

var myDate = new Date();
console.log("myDate")