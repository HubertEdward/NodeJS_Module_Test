/**
 * http://usejsdoc.org/
 */
var baseModule = require("./Tutorial.js");
exports.SubModule = function() {
	console.log("Sub Module");
	function callBase() {
		var objectBase = baseModule;
		objectBase.tutorial();
	}
};

var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
	console.log("Node Tutorial")
	function pTutor()
	{
		var PTutor=Tutor
		PTutor.tutorial();
	}
};