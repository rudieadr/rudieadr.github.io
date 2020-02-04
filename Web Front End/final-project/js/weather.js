			const rURL='https://api.openweathermap.org/data/2.5/forecast?id=5063518&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';
			fetch(rURL)
			.then(function(response) {
			return response.json();
			}) .then(function(jObject) {
			console.table(jObject);
			const jojb=jObject.list;
			let currDesc = 'Currently:  ' + jObject.list[0].weather[0].description;
			document.getElementById('current').textContent=currDesc;
			let currTemp = 'Temp:  ' + Math.round(jObject.list[0].main.temp, 0) + '\xB0F';
			document.getElementById('temp').textContent = currTemp;
			let currHum = 'Humidity:  ' + jObject.list[0].main.humidity + '%';
			document.getElementById('humidity').textContent = currHum;
			let windSpd = 'Wind Speed:  ' + jObject.list[0].wind.speed + ' MPH';
			document.getElementById('windspeed').textContent = windSpd;
			let o = jObject.list[0].wind.speed;
			let t = jObject.list[0].main.temp;
			if (t <= 50 && o > 3) {
				let wChill = 'Wind Chill:  ' + Math.round(35.74 + (0.6215 * t) - (35.75 - (Math.pow(o, 0.16))) + (0.4275 * t * (Math.pow(o, 0.16))));
				document.getElementById('windspeed').textContent = wChill;
			} else {
				let wChill = 'Wind Chill: N/A';
				document.getElementById('windspeed').textContent = wChill;
				}})
						
						const aURL='https://api.openweathermap.org/data/2.5/forecast?id=4393217&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';
			fetch(aURL)
			.then(function(response) {
			return response.json();
			}) .then(function(jObject) {
			console.table(jObject);
			const jojb=jObject.list;
			let currDesc = 'Currently:  ' + jObject.list[0].weather[0].description;
			document.getElementById('current1').textContent=currDesc;
			let currTemp = 'Temp:  ' + Math.round(jObject.list[0].main.temp, 0) + '\xB0F';
			document.getElementById('temp1').textContent = currTemp;
			let currHum = 'Humidity:  ' + jObject.list[0].main.humidity + '%';
			document.getElementById('humidity1').textContent = currHum;
			let windSpd = 'Wind Speed:  ' + jObject.list[0].wind.speed + ' MPH';
			document.getElementById('windspeed1').textContent = windSpd;
			let o = jObject.list[0].wind.speed;
			let t = jObject.list[0].main.temp;
			if (t <= 50 && o > 3) {
				let wChill = 'Wind Chill:  ' + Math.round(35.74 + (0.6215 * t) - (35.75 - (Math.pow(o, 0.16))) + (0.4275 * t * (Math.pow(o, 0.16))));
				document.getElementById('windspeed1').textContent = wChill;
			} else {
				let wChill = 'Wind Chill: N/A';
				document.getElementById('windspeed1').textContent = wChill;
			}})
						const bURL='https://api.openweathermap.org/data/2.5/forecast?id=4407074&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';
			fetch(aURL)
			.then(function(response) {
			return response.json();
			}) .then(function(jObject) {
			console.table(jObject);
			const jojb=jObject.list;
			let currDesc = 'Currently:  ' + jObject.list[0].weather[0].description;
			document.getElementById('current2').textContent=currDesc;
			let currTemp = 'Temp:  ' + Math.round(jObject.list[0].main.temp, 0) + '\xB0F';
			document.getElementById('temp2').textContent = currTemp;
			let currHum = 'Humidity:  ' + jObject.list[0].main.humidity + '%';
			document.getElementById('humidity2').textContent = currHum;
			let windSpd = 'Wind Speed:  ' + jObject.list[0].wind.speed + ' MPH';
			document.getElementById('windspeed2').textContent = windSpd;
			let o = jObject.list[0].wind.speed;
			let t = jObject.list[0].main.temp;
			if (t <= 50 && o > 3) {
				let wChill = 'Wind Chill:  ' + Math.round(35.74 + (0.6215 * t) - (35.75 - (Math.pow(o, 0.16))) + (0.4275 * t * (Math.pow(o, 0.16))));
				document.getElementById('windspeed2').textContent = wChill;
			} else {
				let wChill = 'Wind Chill: N/A';
				document.getElementById('windspeed2').textContent = wChill;
			}})
			
					const cURL='https://api.openweathermap.org/data/2.5/forecast?id=4315588&units=imperial&APPID=acc39441dc7e66097741bfaff8c674bc';
			fetch(aURL)
			.then(function(response) {
			return response.json();
			}) .then(function(jObject) {
			console.table(jObject);
			const jojb=jObject.list;
			let currDesc = 'Currently:  ' + jObject.list[0].weather[0].description;
			document.getElementById('current3').textContent=currDesc;
			let currTemp = 'Temp:  ' + Math.round(jObject.list[0].main.temp, 0) + '\xB0F';
			document.getElementById('temp3').textContent = currTemp;
			let currHum = 'Humidity:  ' + jObject.list[0].main.humidity + '%';
			document.getElementById('humidity3').textContent = currHum;
			let windSpd = 'Wind Speed:  ' + jObject.list[0].wind.speed + ' MPH';
			document.getElementById('windspeed3').textContent = windSpd;
			let o = jObject.list[0].wind.speed;
			let t = jObject.list[0].main.temp;
			if (t <= 50 && o > 3) {
				let wChill = 'Wind Chill:  ' + Math.round(35.74 + (0.6215 * t) - (35.75 - (Math.pow(o, 0.16))) + (0.4275 * t * (Math.pow(o, 0.16))));
				document.getElementById('windspeed3').textContent = wChill;
			} else {
				let wChill = 'Wind Chill: N/A';
				document.getElementById('windspeed3').textContent = wChill;
			}})