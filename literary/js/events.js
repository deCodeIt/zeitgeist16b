$(document).ready(function() {
	$(".technical").hover(function() {
		$(".technical").css("width","56%");
		$(".cultural").css("width","44%");
	},function() {
		$(".technical").css("width","50%");
		$(".cultural").css("width","50%");
	});
	$(".cultural").hover(function() {
		$(".technical").css("width","44%");
		$(".cultural").css("width","56%");
	},function() {
		$(".technical").css("width","50%");
		$(".cultural").css("width","50%");
	});
});