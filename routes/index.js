/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title	: 'Mary Kat & Archies Wedding Information',
	});
};
