/**
 * http://usejsdoc.org/
 */
var localVariable = require("./SubModule.js");
localVariable.SubModule();
localVariable.SubModule.callBase();
localVariable.NodeTutorial();
var tut = new localVariable.NodeTutorial();  // Create and save object
tut.pTutor();