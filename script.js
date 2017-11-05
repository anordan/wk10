//clicking on an a element and applies a css class to it thatchanges the background color.
//clicking on one of the h2 post titles in the main content area hides it.

	$("document").ready(function () {
		$("a").click(function () {
			$("a").addClass("changeColor");
		
	});

	$("h2.title").click(function() {
		$("h2.title").hide();
	});
	
});