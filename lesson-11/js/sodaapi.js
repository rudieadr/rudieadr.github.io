
const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';

fetch( URL).then(function(response) {
	return response.json();
}).then(function(ojb) {
	//console.log(ojb);
	const jojb = ojb.list
	let currDesc = 'Currently:  ' + ojb.list[0].weather[0].description;
	document.getElementById('current').textContent = currDesc;
	let currTemp = 'Temp:  ' + Math.round(ojb.list[0].main.temp, 0) + '\xB0F';
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
	function wkdays(date) {
		const days = new Array('Sun','Mon','Tues','Wed','Thur','Fri','Sat');
		const today = date.getDay();
		return days[today];
	}
	const wkdaysH = document.createElement('tr');
	const wIcon = document.createElement('tr');
	const wTemp = document.createElement('tr');
	for (var i = 0; i <=jojb.length -1; i++) {
		const dt_txt_field = jojb[i].dt_txt;
		if (dt_txt_field.includes("18:00:00")) {
			const nextDay = new Date(dt_txt_field);
			nextDay.setDate(nextDay.getDate());
			const nextwkdays = wkdays(nextDay);
			const tableHeader = document.createElement('th');
			tableHeader.textContent = nextwkdays;
			wkdaysH.appendChild(tableHeader);
			document.querySelector('thead.theader').appendChild(wkdaysH);

			const imgsrc = 'https://openweathermap.org/img/w/' + jojb[i].weather[0].icon + '.png';
			const desc = jojb[i].weather[0].description;
			const imgtbldata = document.createElement('td');
			const wimg = document.createElement('img');
			wimg.setAttribute('src',imgsrc);
			wimg.setAttribute('alt',desc);
			imgtbldata.appendChild(wimg);
			wIcon.appendChild(imgtbldata);
			document.querySelector('thead.theader').appendChild(wIcon);

			const temp = document.createElement('td');
			temp.innerHTML = jojb[i].main.temp + "\xB0F";
			wTemp.appendChild(temp);
			document.querySelector('thead.theader').appendChild(wTemp);

		}

	}

});

