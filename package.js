Package.describe({
	name: 'mohkamfer:noverlay',
	version: '0.1.1',
	summary: 'Meteor nice overlay library for rendering templates in an overlay',
	git: 'https://github.com/mohkamfer/meteor-noverlay.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.1');
	api.use('ecmascript');
	api.addFiles('lib/noverlay.css', 'client');
	api.addFiles('lib/noverlay.js', 'client');
	api.export('nOverlay', 'client');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('mohkamfer:noverlay');
	api.addFiles('test/noverlay-tests.js');
});
