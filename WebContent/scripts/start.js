$(function() {
	$("input[name='metrics']").on("change", function() {
		if($(this).val() === 'Accuracy') {
			if(this.checked) {
				$("input[name='accuracySubMet']").prop('checked', true);
			}
			else {
				$("input[name='accuracySubMet']").prop('checked', false);
			}
		}
		else if($(this).val() === 'Consistency') {
			if(this.checked) {
				$("input[name='consistencySubMet']").prop('checked', true);
			}
			else {
				$("input[name='consistencySubMet']").prop('checked', false);
			}
		}
		else if($(this).val() === 'Understandability') {
			if(this.checked) {
				$("input[name='understandabilitySubMet']").prop('checked', true);
			}
			else {
				$("input[name='understandabilitySubMet']").prop('checked', false);
			}
		}
	});
	
	
	$("input[name='understandabilitySubMet']").on("change", function() {
		if(!this.checked) {
			$("input[id='understandability']").prop('checked',false);
		}
		else {
			if($('#understandabilitySubMet1').is(':checked') &&
					$('#understandabilitySubMet2').is(':checked') &&
					$('#understandabilitySubMet3').is(':checked') &&
					$('#understandabilitySubMet4').is(':checked')) {
				$("input[id='understandability']").prop('checked',true);
			}
		}
	});
	
	
	$("input[name='consistencySubMet']").on("change", function() {
		if(!this.checked) {
			$("input[id='consistency']").prop('checked',false);
		}
		else {
			if($('#consistencySubMet1').is(':checked') &&
					$('#consistencySubMet2').is(':checked') &&
					$('#consistencySubMet3').is(':checked') &&
					$('#consistencySubMet4').is(':checked') &&
					$('#consistencySubMet5').is(':checked') &&
					$('#consistencySubMet6').is(':checked')) {
				$("input[id='consistency']").prop('checked',true);
			}
		}
	});
	
	
	$("input[name='accuracySubMet']").on("change", function() {
		if(!this.checked) {
			$("input[id='accuracy']").prop('checked',false);
		}
		else {
			if($('#accuracySubMet1').is(':checked') && $('#accuracySubMet2').is(':checked')) {
				$("input[id='accuracy']").prop('checked',true);
			}
		}
	});
	
	
	$("input[name='accessMethodRadio']").on("change", function(){
	
	});
});