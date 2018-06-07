Ext.define('TinyMCE.view.main.Main', {

	//-----------------------------------
	// Alias / Extend
	//-----------------------------------

	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	//-----------------------------------
	// Requires
	//-----------------------------------

	requires: [
		'Ext.plugin.Viewport',
		'Ext.ux.TinyMCE',

		'TinyMCE.view.main.MainController',
		'TinyMCE.view.main.MainModel',
	],
	controller: 'main',
	viewModel: 'main',
	plugins: 'viewport',

	//-----------------------------------
	// Properties
	//-----------------------------------

	title: 'TinyMCE with Extjs 6',
	layout: {
		type: 'fit'
	},

	//-----------------------------------
	// UI Components
	//-----------------------------------

	items: [
		{
			xtype: 'tinymce',
		}
  ]

});
