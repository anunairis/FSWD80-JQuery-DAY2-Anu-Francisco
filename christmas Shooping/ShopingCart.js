$(document).ready(function(){	
$("*").css("background","red");
// $("div").css({"margin": "20px","padding":"10px", 
// 	"border": "4px solid black", "height":"200px",
// 	"width": "200px", "background-color":"yellow"});



var item = christmas;
console.log(item);

for(j=1; j<4;j++){
	console.log(j);
	for(i=0; i < item.length; i++) {
		console.log(item[i].name);
			$('#row'+j).append("<div><span>"+ item[i].name + "</span><p><img width='200px' height='200px' src='"+item[i].image+"'></p>"+"<p><button>add to chart</button><span class='price'>"+item[i].price+"</span></p>"+"</div>");
			
		}
	}

$("div > div").click(function() {
        var christmas = $(this).find("span").html();
        $("#result").text("You clicked on " + christmas);
    });

$("#row1").css('display','flex');
$("#row1").css('justify-content','space-around');
$("#row2").css('display','flex');
$("#row2").css('justify-content','space-around');
$("#row3").css('display','flex');
$("#row3").css('justify-content','space-around');

// $("div div").click(function(){
// 	// console.log(image);
// 	$(this).find("src").hide();
// });

$("button").click(function(){
var price = $(this).parent().find(".price").text();
console.log(price);
});

});
