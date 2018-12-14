(function ($) {
	"use strict";
	$(document).ready(function () {
		search.init();
		initializeAutoComplete()
	});

	function initializeAutoComplete() {
		var inputs = document.getElementsByClassName('searchTextField');
		for(var i = 0; i < inputs.length; i++){
			new google.maps.places.Autocomplete(inputs[i]);
		}
		
	}
	// google.maps.event.addDomListener(window, 'load', initialize);

	$('#submit').click(function (e) {
		if ($("input:radio[name='radio']:checked").val() === 'return') {
			$('input:text[name=ret-date]').attr('required', '');
			$('input:text[name=ret-pick-up-location]').attr('required', '');
			$('input:text[name=ret-pick-off-location]').attr('required', '');
			$('#ret-date-err-cont').show();
			$('#ret-pick-up-location-err-cont').show();
			$('#ret-pick-off-location-err-cont').show();
		}
		else if ($("input:radio[name='radio']:checked").val() === 'oneway') {
			$('input:text[name=ret-date]').removeAttr('required');
			$('input:text[name=ret-pick-up-location]').removeAttr('required');
			$('input:text[name=ret-pick-off-location]').removeAttr('required');
			$('#ret-date-err-cont').hide();
			$('#ret-pick-up-location-err-cont').hide();
			$('#ret-pick-off-location-err-cont').hide();
		}

		if ($('#booking-section').parsley().validate()) {
			var radio_val = $("input:radio[name='radio']:checked").val();
			var departure_date = $("input:text[name='departure-date']").val();
			var ret_date = $("input:text[name='ret-date']").val();
			var ret_pick_up_location = $("input:text[name='ret-pick-up-location']").val(); 
			var ret_pick_off_location = $("input:text[name='ret-pick-off-location']").val(); 
			var dep_pick_up_location = $("input:text[name='dep-pick-up-location']").val(); 
			var dep_pick_off_location = $("input:text[name='dep-pick-off-location']").val(); 
			var name = $('#name').val();
			var email = $('#email').val();
			var phone = $('#phone').val();
			var flight;
			if ($('#flight-number').val() != '') {
				flight = $('#flight-number').val();
			}
			var people = $('#people').val();
			var data = {
				"radio_val": radio_val,
				"departure_date": departure_date,
				"ret_date": ret_date,
				"ret_pick_up_location": ret_pick_up_location,
				"ret_pick_off_location": ret_pick_off_location,
				"dep_pick_up_location": dep_pick_up_location,
				"dep_pick_off_location": dep_pick_off_location,
				"name": name,
				"email": email,
				"phone": phone,
				"flight": flight,
				"people": people
			}
			console.log(data);
			swal("Thanks for contacting us!", "We will be contacting you back soon.", "success");
			// $.ajax({
			// 	type: "POST",
			// 	url: "/#",
			// 	data: JSON.stringify(data) ,
			// 	success: function (result) {
			// 		console.log(result);
			// 		if (result.success) {
			// 			swal("Thanks for contacting us!", "We will be contacting you back soon.", "success");
			// 		} else {
			// 			swal("Thanks for contacting us!", "We will be contacting you back soon.", "success");
			// 			console.log(result.reason)
			// 		}
			// 	}
			// });

		} else {
		}
	});

	var search = {

		init: function () {

			// SEARCH
			$('.advanced-search .f-row:nth-child(2)').hide(500);
			$('input[type=radio]#oneway').click(function () {
				$('.f-row:nth-child(2)').hide(500);
			});
			$('input[type=radio]#return').click(function () {
				$('.f-row:nth-child(2)').slideToggle(500);
				//$('#ret-date-err-cont').hide();
			});

			// DATE & TIME PICKER
			$('#dep-date,#ret-date').datetimepicker();
		}
	}

})(jQuery);