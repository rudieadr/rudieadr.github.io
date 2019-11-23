
const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';

fetch( URL).then(function(response) {
	return response.json();
}).then(function(ojb) {
	//console.log(ojb);
	let currDesc = 'Currently:  ' + ojb.list[0].weather[0].description;
	document.getElementById('current').textContent = currDesc;
	let currTemp = 'Temp:  ' + Math.round(ojb.list[0].main.temp, 0) + '\xB0 F';
	document.getElementById('temp').textContent = currTemp;
	let currHum = 'Humidity:  ' + ojb.list[0].main.humidity + '%';
	document.getElementById('humidity').textContent = currHum;
	let windSpd = 'Wind Speed:  ' + ojb.list[0].wind.speed + ' MPH';
	document.getElementById('windspeed').textContent = windSpd;
	let o = ojb.list[0].wind.speed;
	let t = ojb.list[0].main.temp;
	if (t <= 50 && o > 3) {
		let wChill = 'Wind Chill:  ' + Math.round(35.74 + (0.6215 * t) - (35.75 - (Math.pow(o, 0.16))) + (0.4275 * t * (Math.pow(o, 0.16))));
		document.getElementById('windspeed').textContent = wChill;
	} else {
		let wChill = 'Wind Chill: N/A';
		document.getElementById('windspeed').textContent = wChill;
	}
});

fetch( URL).then(function(response) {
	return response.json();
}).then(function(ojb) {
	//console.log(ojb);
	let list=ojb.list;
	let number=1;
	let weekdays = [ 'Sun','Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	for (let i = 0; i < (list.length); i++) {
		let value = list[i].dt_txt.split(" ");
		if (value[1].dt_txt=='18:00:00') {
			const date = new Date(list[i].dt_txt);
			const days = weekdays[date.getDay()];
			document.getElementById('wkdays' + number).textcontent = days;
			document.getElementById('temp'+number).textContent=list[i].main.temp;
			let wIcon='//openweathermap.org/img/wn' + list[i].weather[0].icon + '.png';
			let wAlt='//openweathermap.org/img/wn'+ list[i].weather[0].descrption + '\xB0 F';
			document.getElementById('icon'+number).setAttribute('src',wIcon);
			document.getElementById('icon'+number).setAttribute('alt',wAlt);
			number+=1;
		}
	}
}).catch(function(error) {
	console.error('Something is wrong with the engine, Captain!');
});



