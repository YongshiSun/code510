$(document).ready(function () {
	// find all the elements that have the "add-to-cart" class
	// and call the addToCart function below when the user clicks
	// the element.
    $(".add-to-cart").click(addToCart);
});

function addToCart() {
	//find the parent:
	var frame = $(this).parent();
	
	// 1. find the title (contained two elements before the button):
	var title = frame.find("em").html();
	
	// 2. add the price and the title to the shopping cart:
	$('#shopping-cart').append(title);
	$('#shopping-cart').append("<br />");
	
	//var price = frame.find("span").html();
	//$('#shopping-cart').append(title + ": " + price);
	
}