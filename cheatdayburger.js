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

	//BURGER 14 CHEATDAY BURGER
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

    var bname = ObjectData[13].name;
	var burgers = document.createElement('li');
	burgers.innerHTML = bname;
	document.body.appendChild(burgers);

	var dname = ObjectData[13].description;
	var describe = document.createElement('li');
	describe.innerHTML = dname;
	document.body.appendChild(describe);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

    var image = document.createElement('img');
    image.setAttribute('src', "https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.6435-9/45791908_10156649963113592_3012771854218690560_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEeN5U_P7mcEddRJxPNQvrXJLTPnEur-owktM-cS6v6jGk5Z4zehrQMeZhRSkgwz-5B4z8y6wBAGPiG2IY9ybNM&_nc_ohc=IoSGqIKUyggAX8Ah2Ot&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfBVFSAp1SQwhOsyTeM411TrkUDM7Opt-CXQ07sl3PWH_w&oe=6380D556");
    document.body.appendChild(image);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var rname = ObjectData[13].restaurant;
	var resto = document.createElement('li');
	resto.innerHTML = "RESTAURANT: "+rname;
	document.body.appendChild(resto);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var wname = ObjectData[13].web;
	var anchor = document.createElement('a');
	var link = document.createTextNode("ORDER NOW!");
	anchor.appendChild(link);
	anchor.title = "ORDER NOW!";
	anchor.href = wname;
	document.body.appendChild(anchor);
}
xhr.send(data);