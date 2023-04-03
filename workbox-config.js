module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ico,css,html,js,json,md,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};