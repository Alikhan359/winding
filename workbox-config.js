module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ico,jpg,css,html,js,json,md,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};