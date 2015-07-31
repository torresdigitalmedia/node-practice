setInterval(function(){
console.log('Hello world');
}, 5000)

console.log('PAUSE');

var http = require('http')
setInterval(function(){
console.log('get google.com');

http.get({ host: 'google.com' }, function(res){
	console.log(res.headers);
});
}, 2000)

console.log('PAUSE');

