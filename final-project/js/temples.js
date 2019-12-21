const requestURL = 'json/temples.json';
fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
			console.table(jsonObject);  // temporary checking for valid response and data parsing

			const temple = jsonObject['data'];
	for (let i=0; i <= temple.length -1; i++) {
	let card = document.createElement('section');
	let name = document.createElement('h2');
	let image = document.createElement('img');
	let saddress = document.createElement('div');
	let caddress = document.createElement('div');
	let phone = document.createElement('div');
	let services = document.createElement('div');
	let ordinaces = document.createElement('div');
	let closures = document.createElement('div');
	let history = document.createElement('div');
	
	card.setAttribute("id", i);
	name.textContent= temple.name;
	saddress.textContent=temple.sAddress;
	caddress.textContent=temple.cAddress;
	phone.textContent= temple.phone;
	services.textContent=temple.services;
	ordinaces.textContent=temple.ordinance;
	closures.textContent=temple.closures;
	history.textContent=temple.history;
	image.setAttribute('src',temple.image);
	image.setAttribute('alt', temple.imageAlt);
	card.appendChild(name);
	card.appendChild(history);
	document.getElementById("card").textContent=card;
	}
	}
	);