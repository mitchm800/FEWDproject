//set variables for button elements
var HomeBtn = document.getElementById ("HomeBtn");
var GettingStartedBtn = document.getElementById ("GettingStartedBtn");
var GearBtn = document.getElementById ("GearBtn");
var LearningBtn = document.getElementById ("LearningBtn");
var StarterBikesBtn = document.getElementById ("StarterBikesBtn");

// Set variables for text elements
var HomeTxt = document.getElementById ("Home");
var GettingStartedTxt = document.getElementById ("GettingStarted");
var GearTxt = document.getElementById ("Gear");
var LearningTxt = document.getElementById ("Learning");
var StarterBikesTxt = document.getElementById ("StarterBikes");


// Remove "show" class from content divs and from Home button.  This is only visible in large screens
$("button").click(function(){
	//Remove the active class from the previously selected button
	$("button").siblings().removeClass("active");
	//add the active class to the new button
	$(this).addClass("active");
	//get ID of the selected content
	var Str = $(this).attr("id");
	Str = Str.slice(0, -3);
	// Remove the "show" class from all of the Content Divs
	$("#" + Str).siblings().removeClass("show").addClass("hidden");
	// Show only the Content Div that is selected
	$("#" +Str).removeClass("hidden").addClass("show");
})

// Remove "show" class from content divs and from Home nav anchor.  This is only visible in small screens
$("a").click(function(){
	//Remove the active class from the previously selected nav anchor
	$("a").siblings().removeClass("active");
	//add the active class to the new nav anchor
	$(this).addClass("active");
	//get ID of the selected content
	var Str = $(this).attr("id");
	Str = Str.slice(0, -3);
	// Remove the "show" class from all of the Content Divs
	$("#" + Str).siblings().removeClass("show").addClass("hidden");
	// Show only the Content Div that is selected
	$("#" +Str).removeClass("hidden").addClass("show");
})