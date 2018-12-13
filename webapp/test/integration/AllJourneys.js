/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"mds/UI5MasterDetailSkeleton/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"mds/UI5MasterDetailSkeleton/test/integration/pages/App",
	"mds/UI5MasterDetailSkeleton/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mds.UI5MasterDetailSkeleton.view.",
		autoWait: true
	});
});