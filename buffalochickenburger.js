const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr.setRequestHeader("X-RapidAPI-Key", "dc64da9514msh0cd196877e63c46p1b3a83jsnf7dfdfca7bb1");
xhr.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr.onload = function () {
	var response = xhr.response;
    var ObjectData = JSON.parse(response);
    console.log(ObjectData);

	//BURGER 13 BUFFALO CHICKEN BURGER
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

    var bname = ObjectData[12].name;
	var burgers = document.createElement('li');
	burgers.innerHTML = bname;
	document.body.appendChild(burgers);

	var dname = ObjectData[12].description;
	var describe = document.createElement('li');
	describe.innerHTML = dname;
	document.body.appendChild(describe);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

    var image = document.createElement('img');
    image.setAttribute('src', "https://pbs.twimg.com/media/E7OHjJ-UcAAVdHT.jpg:large");
    document.body.appendChild(image);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var rname = ObjectData[12].restaurant;
	var resto = document.createElement('li');
	resto.innerHTML = "RESTAURANT: "+rname;
	document.body.appendChild(resto);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var wname = ObjectData[12].web;
	var anchor = document.createElement('a');
	var link = document.createTextNode("ORDER NOW!");
	anchor.appendChild(link);
	anchor.title = "ORDER NOW!";
	anchor.href = wname;
	document.body.appendChild(anchor);
}
xhr.send(data);