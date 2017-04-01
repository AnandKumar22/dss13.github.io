var anim = "swing 1.5s infinite";
var def = "<a>Have a coupon?</a>";
var verf = "<a>Verify</a>";
var k=1,success=0;

$(".sliderDiv").click(function(){
	if(!success){
		if(k){
			$(".sliderDiv").html(verf);
			$(".sliderDiv").addClass("verify");
			k=0;
		}
		else{
			var code = $(".couponCode").val();
			console.log(code);
			if(code == "PV50"){
				$(".sliderDiv").html("<a>Successfully applied</a>");
				$(".sliderDiv").removeClass("verify");
				success = 1;
				k=1;
			}
			else{
				$(".couponCode").val("");	
				$(".couponCode").addClass("wiggle");
				setTimeout(function(){
					$(".couponCode").removeClass("wiggle");
				},500);
				if(code == ""){
					$(".sliderDiv").html("<a>Enter something</a>");
				}
				else{
					$(".sliderDiv").html("<a>Invalid promo code.</a>");
				}
			}
		}
	}
});

$("#closeCode").click(function(){
	$(".sliderDiv").removeClass("verify");
	$(".sliderDiv").html(def);
	k=1;
});

$(".couponCode").focus(function(){
	$(".sliderDiv").html(verf);
})