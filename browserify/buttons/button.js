var $ = require('jquery')

var button = $('<button/>').html('click me').on('click', function(){
	alert('works')
})

module.exports = button