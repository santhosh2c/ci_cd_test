/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cicd/continousintegration/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
