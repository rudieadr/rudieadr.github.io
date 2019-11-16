const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
	
	const towns = jsonObject['towns'];
	
	for (let i = 0; i < towns.length; i++ ) {
		if (i==1 || i == 4 || i ==5) {
	let card = document.createElement('section');
	let h2 = document.createElement('h2');
	let motto = document.createElement('p');
	let date = document.createElement('p');
	let pop = document.createElement('p');
	let annual = document.createElement('p');
	let image = document.createElement('img');

	h2.textContent = towns[i].name;
    date.textContent = 'Year Founded: ' + towns[i].yearFounded;
    motto.textContent = towns[i].motto;
	pop.textContent = 'Current Population: '+ towns[i].currentPopulation;
	annual.textContent = 'Annual Rainfall: '+ towns[i].averageRainfall;
    image.setAttribute('src', 'static/images/' + towns[i].photo);
    image.setAttribute('alt', towns[i].name);
	card.appendChild(h2);
	card.appendChild(date);
	card.appendChild(motto);
	card.appendChild(pop);
	card.appendChild(annual);
	card.appendChild(image);

	document.querySelector('div.card').appendChild(card);
	}
	}
  });
