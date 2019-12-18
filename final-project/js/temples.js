const requestURL = 'https://rudieadr.github.io/final-project/json/temples.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
	
	const temples = jsonObject['temples'];
	for (let i=0; i < temples.length; i++) {
	let card = document.createElement('section');
	let name = document.createElement('h2');
	let image = document.createElement('img');
	let saddress = document.createElement('div');
	let caddress = document.createElement('div');
	let phone = document.createElementt('div');
	let services = document.createElement('div');
	let ordinaces = document.createElement('div');
	let closures = document.createElement('div');
	let history = document.createElement('div');
	
	card.setAttribute("id", i);
	name.textContent=temples[i].name;
	saddress.textContent=temples[i].contact.saddress;
	caddress.textContent=temples[i].contact.caddress;
	phone.textContent=temples[i].contact.phone;
	services.textContent=temples[i].Services;
	ordinaces.textContent=temples[i].Ordinance;
	closures.textContent=temples[i].Closures;
	history.textContent=temples[i].history;
	image.setAttribute('src',temples[i].image);
	image.setAttribute('alt', temples[i].imageAlt);
	card.appendChild(name);
	card.appendChild(history);
	
	document.querySelector('div.card').appendChild(card);
	}
	}
	);