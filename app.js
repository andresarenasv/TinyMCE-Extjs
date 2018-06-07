/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
	extend: 'TinyMCE.Application',

	name: 'TinyMCE',

	requires: [
		// This will automatically load all classes in the TinyMCE namespace
		// so that application classes do not need to require each other.
		'TinyMCE.*'
	],

	// The name of the initial view to create.
	mainView: 'TinyMCE.view.main.Main'
});
