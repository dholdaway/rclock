
/*jslint browser: true */
/*global YUI */
YUI().use("node", "datatype-date", "io", function (Y) {
	"use strict";
	var weather = Y.one("#weather"),
		clock = Y.one("#clock"),
		alarms = Y.one("alarms");

	Y.log("Setting up clock and weather feed", "info");
	clock.set("text", Y.Date.format(new Date(), {format: "%T %p"}));

	setInterval(function () {
		clock.set("text", Y.Date.format(new Date(), {format: "%T %p"}));
	}, 1000);


});