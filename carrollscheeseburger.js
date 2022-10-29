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

	//BURGER 18 CARROLLS CHEESE BURGER
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

    var bname = ObjectData[17].name;
	var burgers = document.createElement('li');
	burgers.innerHTML = bname;
	document.body.appendChild(burgers);

	var dname = ObjectData[17].description;
	var describe = document.createElement('li');
	describe.innerHTML = dname;
	document.body.appendChild(describe);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

    var image = document.createElement('img');
    image.setAttribute('src', "https://scontent.fmnl30-1.fna.fbcdn.net/v/t1.6435-9/43672920_1901831799906347_6489098046930944000_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_eui2=AeFYT02QwFVO5bkh0JY8mqCKWv9mkaiYdbha_2aRqJh1uMghg7T379Ffmf5WCQZVTFbYt3ZVMvQppW5QYdpugnHd&_nc_ohc=WDLtD4RlvMsAX8D6pLA&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfAhSNMp8HtlZZo3cFS8hJXcIg0xmzdLidDjQt5GQFQiMw&oe=6380CB9A");
    document.body.appendChild(image);
	
	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var rname = ObjectData[17].restaurant;
	var resto = document.createElement('li');
	resto.innerHTML = "RESTAURANT: "+rname;
	document.body.appendChild(resto);

	lineBreak = document.createElement('br');
	document.body.appendChild(lineBreak);

	var wname = ObjectData[17].web;
	var anchor = document.createElement('a');
	var link = document.createTextNode("ORDER NOW!");
	anchor.appendChild(link);
	anchor.title = "ORDER NOW!";
	anchor.href = wname;
	document.body.appendChild(anchor);
}
xhr.send(data);