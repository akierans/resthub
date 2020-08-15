//Initialise express router
let router = require('express').Router();

//Set default API response
router.get('/', function(req, res) {
	res.json({
		status: 'API It\'s Working',
		message: 'Welcome to RESTHub crafted with love!'
	});
});


//Export API Routes
module.exports = router;