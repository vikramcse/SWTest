'use strict';

var main = document.getElementById('main');

var setHTML = function (text, classname) {
	main.innerHTML += text + '</br>';
	main.className = classname;
};

if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  setHTML('Yeah, The Service Worker is supproted', 'success');

  navigator.serviceWorker.register('./sw.js')
  	.then(function () {
  		console.log('CLIENT: service worker registration complete.');
  		setHTML('Service worker registration complete', 'success');
  	}, function () {
  		console.log('CLIENT: service worker registration failure.');
  		setHTML('Service worker registration failure', 'failure');
  	});

} else {
  console.log('CLIENT: service worker is not supported.');
  setHTML('Sorry, The Service Worker is not supproted', 'failure');
}