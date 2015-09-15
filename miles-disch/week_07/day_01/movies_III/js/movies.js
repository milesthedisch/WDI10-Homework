// var getInfo = function () {
// 	var client = new XMLHttpRequest();

// 	client.onreadystatechange = function () {
// 		if (client.readyState !== 4) {
// 			return;
// 		}  
// 		var info = JSON.parse(client.responseText)
// 		console.log(info['uptime'])

// 		var p = document.getElementById('lucky_numbers')
// 		p.innerHTML += client.responseText

// 		var p = document.getElementById('uptime')
// 		p.innerHTML = info['uptime']
// 	}

// 	client.open('GET', '/info');
// 	client.send();
// };



		var search = function () {
			var client = new XMLHttpRequest();

			client.onreadystatechange = function () {
				if (client.readyState !== 4) {
					return;
				};

				var movie = document.getElementById('movie') 
				var info = JSON.parse(client.responseText)
				var poster = info['Poster']
				var image = document.getElementById('movie-poster')
				image.src = poster
			}

			client.open('GET', 'http://omdbapi.com/?t=' + movie.value)
			client.send();



		}

		var submit = document.getElementById('movie-submit')
		submit.addEventListener('click', search)
		


// var getNumber = function () {
// 	var client = new XMLHttpRequest();

// 	client.onreadystatechange = function () {
// 		if (client.readyState !== 4) {
// 			return
// 		};

// 		var search = document.getElementById('movie')
// 		console.log(search)

// 	}
// 	client.open('GET', '/lucky');
// 	client.send();
// };

// 	var button = document.getElementById('fetch_number');
// 	button.addEventListener('click', getNumber)