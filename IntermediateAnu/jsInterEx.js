var data = JSON.parse(dress);
console.log("data", data, data.length);

//CREATE PRODUCTS MAIN PAGE HTML
$("document").ready(function(){
	for (let i = 0; i < data.length; i++) {
		$("#products").append(`<div><img src=${data[i].image}><h4>${data[i].price}€</h4>
			<input type="button" value="Add to cart" name="${i}"></div>`);
	}
	$("#products input").on("click", addToCart);
	
	function addToCart(){
		var i = this.name;
		data[i].quantity++;
		update();
	}

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
var sum;
function update(){
	var html =""; //clear content first before rewriting 
	var rawsum = 0;
	var discountPct;
	for (let i = 0; i < data.length; i++) {
		if (data[i].quantity > 0) {
			rawsum += data[i].quantity*data[i].price;
			html += `<div><img src=${data[i].image}><div><p>${data[i].name}</p><h5>${data[i].price}€</h5></div>
			<div><input type="number" value=${data[i].quantity} onchange="changeAmount(${i},this.value)"><p>${(data[i].quantity*data[i].price).toFixed(2)}€</p></div></div>`
		}
	}
	tax = rawsum*.22;
	shipping = (rawsum > 80) ? 2 : 9;
	discountPct = (rawsum+shipping < 40) ? 0 : (rawsum+shipping < 100) ? .07 : .12;
	discountDelta = rawsum*discountPct;
	sum = rawsum - discountDelta + shipping;

	html+=`<div><div class="pct70"><p>sub total: ${rawsum.toFixed(2)}€</p><p>tax (22%): ${tax.toFixed(2)}€</p>
	<p>Discount: -${discountDelta.toFixed(2)}€</p><p>Shipping: ${shipping.toFixed(2)}€</p><hr><h4>Total: ${sum.toFixed(2)}€</h4></div>
	<div><br><button id="reset" onclick="clearCart()">clear cart</button><br><button id="buy" onclick="alertBuy()">BUY NOW</button></div></div>`

	$("#cart").html(html);
}