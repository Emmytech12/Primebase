
function _alert_close() {
	$('#get-more-div').html('').fadeOut(200);
}

///// accept number ////
function isNumber_Check() {
	var e = window.event;
	var key = e.keyCode && e.which;
  
	if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
	  if (e.preventDefault) {
		e.preventDefault();
		$("#amount_info").fadeIn(300);
		document.getElementById("loan_amount").style.color =
		  "color:rgba(255,0,0,1);";
	  } else {
		e.returnValue = false;
	  }
	} else {
	  $("#amount_info").fadeOut(300);
	  document.getElementById("loan_amount").style.color =
		"color:rgba(255,0,0,1);";
	}
  }

  ///// accept number ////
function isNumber_Check2() {
	var e = window.event;
	var key = e.keyCode && e.which;
  
	if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
	  if (e.preventDefault) {
		e.preventDefault();
		$("#duration_info").fadeIn(300);
		document.getElementById("repayment_duration").style.color =
		  "color:rgba(255,0,0,1);";
	  } else {
		e.returnValue = false;
	  }
	} else {
	  $("#duration_info").fadeOut(300);
	  document.getElementById("repayment_duration").style.color =
		"color:rgba(255,0,0,1);";
	}
  }


  function validatePositiveNumber2() {
    var inputElement = document.getElementById('loan_amount');
    var inputValue = inputElement.value;

    // Remove non-numeric characters and leading zeros
    var numericValue = inputValue.replace(/\D/g, '').replace(/^0+/, '');

    // Ensure the value is a positive number
    if (numericValue === '') {
        inputElement.value = '';  // Clear the input value if it's empty
    } else {
        inputElement.value = parseInt(numericValue, 10);  // Convert to integer to remove leading zeros
    }
}

function validatePositiveNumber() {
    var inputElement = document.getElementById('repayment_duration');
    var inputValue = inputElement.value;

    // Remove non-numeric characters and leading zeros
    var numericValue = inputValue.replace(/\D/g, '').replace(/^0+/, '');

    // Ensure the value is a positive number
    if (numericValue === '') {
        inputElement.value = '';  // Clear the input value if it's empty
    } else {
        inputElement.value = parseInt(numericValue, 10);  // Convert to integer to remove leading zeros
    }
}

function _get_form(page) {
	$("#get-more-div").html('<div class="ajax-loader slide-ajax"><img src="'+ website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
	var action = "get_form";
	var dataString = "action=" + action + "&page=" + page;
	$.ajax({
	  type: "POST",
	  url: index_local_url,
	  data: dataString,
	  cache: false,
	  success: function (html) {
		$("#get-more-div").html(html);
	  },
	});
}


function _get_page(page) {
	$("#page-content").html('<div class="ajax-loader"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
	var action = "get_page";
	var dataString = "action=" + action + "&page=" + page;
	$.ajax({
	  type: "POST",
	  url: index_local_url,
	  data: dataString,
	  cache: false,
	  success: function (html) {
		$("#page-content").html(html);
	  },
	});
}

function _get_page_with_id(page, ids) {
	$("#page-content")
	  .html('<div class="ajax-loader"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
	var action = "get_page_with_id";
	var dataString = "action=" + action + "&page=" + page + "&ids=" + ids;
	$.ajax({
	  type: "POST",
	  url: index_local_url,
	  data: dataString,
	  cache: false,
	  success: function (html) {
		$("#page-content").html(html);
	  },
	});
}
  
  function _request_for_loan() {
	var full_name = $('#full_name').val();
	var loan_amount = $('#loan_amount').val();
	var repayment_duration = $('#repayment_duration').val();
	
	$('#full_name, #loan_amount, #repayment_duration').removeClass('complain');
  
	if (full_name == '') {
	  $('#full_name').addClass('complain');
	  $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> FULL NAME ERROR!<br /><span>Check Full Name And Try Again</span>').fadeIn(500).delay(3000).fadeOut(100);
	
	} else if (loan_amount == '') {
	  $('#loan_amount').addClass('complain');
	  $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> LOAN AMOUNT ERROR!<br /><span>Check Loan Amount And Try Again</span>').fadeIn(500).delay(3000).fadeOut(100);
	
	} else if (repayment_duration == '') {
	  $('#repayment_duration').addClass('complain');
	  $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> REPAYMENT AMOUNT ERROR!<br /><span>Check Seo Keywords And Try Again</span>').fadeIn(500).delay(3000).fadeOut(100);
	
	} else {
		$('#full_name, #loan_amount, #repayment_duration').removeClass('complain');
  
	  if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
		var btn_text = $("#submit_btn").html();
		$("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> Authenticating...');
		document.getElementById("submit_btn").disabled = true;
  
		var form_data = new FormData();
		form_data.append('full_name', full_name);
		form_data.append('loan_amount', loan_amount);
		form_data.append('repayment_duration', repayment_duration);
		
		$.ajax({
		  type: "POST",
		  url: 'https://afootechglobal.com/webliststudio/request-for-loan',
		  data: form_data,
		  dataType: "json",
		  contentType: false,
		  cache: false,
		  processData: false,
		  cache: false,
		  success: function (info) {
			var result = info.result;
			var message = info.message;
	
			if (result == true) {
				$("#success-div").html('<div><i class="bi-check"></i></div> ' + message +" <br>" ).fadeIn(500).delay(5000).fadeOut(100);
				_alert_close();
				_get_page('view-loan-request');
			} else {
			  $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' +message +" <br /><span>").fadeIn(500).delay(5000).fadeOut(100);
				$("#submit_btn").html(btn_text);
				document.getElementById("submit_btn").disabled = false;
			}
		  },
		});
	  }
	}
  }




  function _get_fetch_all_loan_request() {
	$('#fetch_all_loan_request').html('<div class="ajax-loader slide-ajax1"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast")
		$.ajax({
			type: "GET",
			url: 'https://afootechglobal.com/webliststudio/loan-request?transaction_id=',
			dataType: 'json',
			cache: false,
			success: function (info) {
				var fetch = info.data;
				var result = info.result;
				
				var text = '';

				if (result == true) {
					for (var i = 0; i < fetch.length; i++) {
						var TRANSACTION_ID = fetch[i].TRANSACTION_ID;
						var FULL_NAME = fetch[i].FULL_NAME;
						var LOAN_AMOUNT = fetch[i].LOAN_AMOUNT;
						var REPAYMENT_DURATION  = fetch[i].REPAYMENT_DURATION;

						text += 
							'<div class="loan-request-div">'+
								'<div class="inner">'+
									'<h2>FULL NAME: <span>' + FULL_NAME + '</span></h2>'+
									'<h2>TRANSACTION ID: <span> ' + TRANSACTION_ID + '</span></h2>'+
									'<h2>LOAN AMOUNT: <span>' + LOAN_AMOUNT + '</span></h2>'+
									'<h2>LOAN DURATION: <span>' + REPAYMENT_DURATION + '</span></h2>'+
								'</div> '+                      
							'</div>';
						}
						$('#fetch_all_loan_request').html(text);
				} else {
					text +=
						'<div class="false-notification-div">' +
							'<p> ' + message + ' </p>' +
						'</div>';
					$('#fetch_all_loan_request').html(text);
				}

			}
	});
}


function _get_fetch_repayment_schedule(transaction_id) {
	var transaction_id = $('#transaction_id').val();
	$('#transaction_id').removeClass('complain');
	
	if (transaction_id == '') {
	  $('#transaction_id').addClass('complain');
	  $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> TRANSACTION ID ERROR!<br /><span>Enter Transaction Id And Try Again</span>').fadeIn(500).delay(3000).fadeOut(100);
		
	} else {
		$('#transaction_id').removeClass('complain');
  
	  if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
		var btn_text = $("#submit_btn").html();
		$("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> Authenticating...');
		document.getElementById("submit_btn").disabled = true;
  
		var form_data = new FormData();
		form_data.append('transaction_id', transaction_id);
	 
		$.ajax({
			type: "POST",
			url: 'https://afootechglobal.com/webliststudio/repayment-schedule',
			data: form_data,
			dataType: "json",
			contentType: false,
			cache: false,
			processData: false,
			cache: false,
			success: function (info) {
			  var result = info.result;
			  var message = info.message;

			  if (result == false) {
				   $("#success-div").html('<div><i class="bi-check"></i></div> ' + message +" <br>" ).fadeIn(500).delay(5000).fadeOut(100);
					_alert_close();
					_get_page_with_id('repayment-schedule', transaction_id);
			} else {
			  	$("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' + message +" <br /><span>").fadeIn(500).delay(5000).fadeOut(100);
				$("#submit_btn").html(btn_text);
				document.getElementById("submit_btn").disabled = false;
			}
			},
		  });
		}
	  }
}

function _get_sub_repayment_detail(transaction_id) {
	var dataString = "transaction_id=" + transaction_id;
	$.ajax({
	  type: "POST",
	  url: 'https://afootechglobal.com/webliststudio/repayment-schedule',
	  data: dataString,
	  dataType: "json",
	  cache: false,
	  success: function (info) {
		var fetch = info.data;
		var result = info.result;
		var TRANSACTION_ID = info.TRANSACTION_ID;
		var FULL_NAME = info.FULL_NAME;
		var LOAN_AMOUNT = info.LOAN_AMOUNT;
		var REPAYMENT_DURATION = info.REPAYMENT_DURATION;
		var CUMULATIVE_REPAYMENT_AMOUNT = info.CUMULATIVE_REPAYMENT_AMOUNT;
		var DATE = info.DATE;

		var no = 0;
		var text = '';

		text =
			'<tr class="tb-col">'+
			'<td>SN</td>'+
			'<td>ID</td>'+
			'<td>TRANSACTION ID</td>'+
			'<td>MONTH COUNT</td> '+                    
			'<td>EXPECTED REPAYMENT AMOUNT</td>'+
			'<td>INTEREST</td>'+
			'<td>TOTAL REPAYMENT AMOUNT</td>'+
			'<td>LOAN BALANCE</td>'+
			'</tr>';

		if (result == false) {
			$('#transaction_id').html(TRANSACTION_ID);
			$('#fullname').html(FULL_NAME);
			$('#loan_amount').html(LOAN_AMOUNT);
			$('#repayment_duration').html(REPAYMENT_DURATION);
			$('#cumulative_repaymment_amount').html(CUMULATIVE_REPAYMENT_AMOUNT);
			$('#date').html(DATE);

			for (var i = 0; i < fetch.length; i++) {
				no++;

				var ID = fetch[i].ID;
				var TRANSACTION_ID = fetch[i].TRANSACTION_ID;
				var MONTH_COUNT = fetch[i].MONTH_COUNT;
				var EXPECTED_REPAYMENT_AMOUNT = fetch[i].EXPECTED_REPAYMENT_AMOUNT;
				var INTEREST = fetch[i].INTEREST;
				var TOTAL_REPAYMENT_AMOUNT = fetch[i].TOTAL_REPAYMENT_AMOUNT;
				var LOAN_BALANCE = fetch[i].LOAN_BALANCE;
				
				text +=
					'<tr>'+
						'<td>'+ no +'</td>'+
						'<td>'+ ID +'</td>'+
						'<td>'+ TRANSACTION_ID +'</td>'+
						'<td>'+ MONTH_COUNT +'</td>'+
						'<td><span>₦</span> '+ EXPECTED_REPAYMENT_AMOUNT +'</td>'+
						'<td><span>₦</span> '+ INTEREST +'</td>'+
						'<td><span>₦</span>'+ TOTAL_REPAYMENT_AMOUNT +'</td>'+
						'<td><span>₦</span>'+ LOAN_BALANCE +'</td>'+
					'</tr>';
			}
			$('#fetch_all_repayment').html(text);	
	 } else {
		// do nothing //
	 }
	 
	  },
	});
  }





