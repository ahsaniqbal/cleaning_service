$(function() {
	$("form").submit(function(event) {
		var metrics = [];
		
		
		$('input[type=checkbox]').each(function () {
			  var sThisVal = (this.checked ? $(this).val() : "");
		      
			  if(sThisVal !== "" && 
					  sThisVal !== "Accuracy") {
				  	alert(sThisVal);
				  	metrics.push(sThisVal);
				  }
		});
		
		$.post("/qualityReport/calculateQRWithMetrics", metrics);
		event.preventDefault();
		
	});
});
