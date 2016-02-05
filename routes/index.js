// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);



	//<script src="https://code.jquery.com/jquery.js"></script>
	//<script src="js/bootstrap.min.js"></script>

};
