var data = JSON.parse(dress);
console.log("data");

//CREATE PRODUCTS MAIN PAGE HTML
$("document").ready(function(){
	for (let i = 0; i < data.length; i++) {
		$("#products").append(`<div><img src=${data[i].image}><h4>${data[i].price}€</h4>
			<input type="button" value="Add to cart" name="${i}"></div>`);
	}
	//$("#products input").on("click", addToCart);
	

	$("#showcart").mouseover(function(){
		$("#cart").show(); //toggles between show/hide
	})
});
//WHAT SERRI SHOWED
// $(document).ready(function() {
// 	 for (let i = 0; i < dress.length; i++) {
// 	$("#image").attr("src",dress[i].image);
// 	}
// });
// console.log("hello");

// // $(document).ready(function() {
// // 	var i;
// // 	for (i = 0; i < dress.length; i++);
// // 	$("#image").attr("src", dress[i].image);
// // });