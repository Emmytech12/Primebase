<?php if ($page=='home'){ ?>
    <div class="right-div">
        <img src="<?php echo $website_url?>/all-images/body-pix/land-images.png" alt="index-image"/>
    </div>

    <div class="left-div">
        <div class="inner animated fadeIn">
            <h1><span id="page-title">YOUR ONLINE LOAN TO ACHIEVE YOUR GOALS</span></h1>
            <p>Our streamlined system ensures that you can apply for your loan from the comfort of your home at any time that suits you.</p>
            <P>Get your loan in minutes in with easy online application process.</P>
            <div class="icon"><img src="<?php echo $website_url?>/all-images/images/facebook.png" alt="facebook"/></div>
            <div class="icon"><img src="<?php echo $website_url?>/all-images/images/instagram.png" alt="facebook"/></div>
            <div class="icon"><img src="<?php echo $website_url?>/all-images/images/youtube.png" alt="facebook"/></div>
            <div class="icon"><img src="<?php echo $website_url?>/all-images/images/twitter.webp" alt="facebook"/></div>
            <div class="icon"><img src="<?php echo $website_url?>/all-images/images/linkedin.png" alt="facebook"/></div>
        </div>
        <div class="footer-div">
            <div class="text">© 2022 - 2023  PrimeBase. All Rights Reserved.
        </div>
    </div>
    <script type="text/javascript">
// List of sentences
var _CONTENT = [ "YOUR ONLINE LOAN TO ACHIEVE YOUR GOALS","GET THE FINANCIAL SPPORT YOU NEED", "YOUR FINANCIAL SOLUTION AWAITS!"];
// Current sentence being processed
var _PART = 0;
// Character number of the current sentence being processed 
var _PART_INDEX = 0;
// Element that holds the text
var _ELEMENT = document.querySelector("#page-title");
// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 2);
		}, 5000);
	}
}
// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 50);
		}, 100);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 50);
</script>

<?php } ?>



<?php if ($page=='loan-request'){ ?>
    <div class="slide-form-container">
        <div class="slide-form-div animated zoomIn">
            <div class="fly-title-div">
                <div class="in">
                    <span id="panel-title"><i class="bi-plus-square"></i> REQUEST FOR NEW LOAN</span>
                    <div class="close" title="Close" onclick="_alert_close();">X</div>
                </div>
            </div>

            <div class="inner-div">
                <div class="alert">Kindly fill the form below to <span>REQUEST FOR NEW LOAN</span></div>

                <div class="title">FULL NAME: <span>*</span></div>
                <input id="full_name" type="text" class="text_field" placeholder="Type Full Name Here" title="FULL NAME" />

                <div class="title">LOAN AMOUNT (N): <span>*</span><div id="amount_info" style="float:right;font-size:12px;display:none;"><span>Loan Amount not accepted!</span></div></div>
                <input id="loan_amount" oninput="validatePositiveNumber2();" onkeypress="isNumber_Check();" type="number" class="text_field" placeholder="00.00" title="LOAN AMOUNT" />

                <div class="title">LOAN DURATION (Months): <span>*</span><div id="duration_info" style="float:right;font-size:12px;display:none;"><span>Loan Duration not accepted!</span></div></div>
                <input id="repayment_duration" oninput="validatePositiveNumber();" onkeypress="isNumber_Check2();" type="number" class="text_field" placeholder="0" title="Months" />
            
                <button class="btn" type="button" title="SUBMIT" id="submit_btn" onclick="_request_for_loan('');"> <i class="bi-check"></i> SUBMIT </button>
            </div>
        </div>
    </div>
<?php } ?>


<?php if ($page=='view-loan-request'){ ?>
    <div class="loan-request-back-div sb-container">
        <div class="div-in">
            <div class="scroll-div">   
                <h2>All Loan Request</h2>
                <div class="fetch" id="fetch_all_loan_request">
                    <script> _get_fetch_all_loan_request();</script>
                </div> 
            </div>
        </div>
    </div>
<?php } ?>


<?php if ($page=='loan-repayment'){ ?>
    <div class="slide-form-container">
        <div class="slide-form-div repayment-slide animated zoomIn">
            <div class="fly-title-div">
                <div class="in">
                    <span id="panel-title"><i class="bi-plus-square"></i> LOAN REPAYMENT SCHEDULE</span>
                    <div class="close" title="Close" onclick="_alert_close();">X</div>
                </div>
            </div>

            <div class="inner-div">
                <div class="alert">Kindly fill the field below for <span>LOAN REPAYMENT SCHEDULE</span></div>
                <div class="title">TRANSACTION ID: <span>*</span></div>
                <input id="transaction_id" type="text" class="text_field" placeholder="Enter Transaction ID Here" title="TRANSACTION ID" />    
                <button class="btn" type="button" title="SUBMIT" id="submit_btn" onclick="_get_fetch_repayment_schedule('<?php echo $ids?>');"> PROCEED <i class="bi-arrow-right"></i></button>
            </div>
        </div>
    </div>
<?php } ?>


<?php if ($page=='repayment-schedule'){ ?>
    <div class="loan-request-back-div sb-container">
        <div class="div-in">
            <div class="scroll-div">   
                <h2>Loan Repayment Schedule</h2>
                <div class="each-loan-schedule">
                    <div class="inner">
                        <h2 class="name">Transaction Id: <span id="transaction_id">XXX XXX</span></h2>  
                        <h2 class="name">Customer Full Name: <span id="fullname">XXX XXX</span></h2>                          
                        <h2 class="name">Loan Amount (N): <span id="loan_amount">XXX XXX</span></h2>
                        <h2 class="name">Repayment Duration (Months): <span id="repayment_duration">XXX XXX</span></h2>
                        <h2 class="name">Cumulative Repayment Amount (N): <span id="cumulative_repaymment_amount">XXX XXX</span></span>
                        <h2 class="name"> Date: <span id="date">XXX XXX</span></h2>
                    </div>  
                </div>

                <div class="table-div animated fadeIn">
                    <div class="div-in">
                        <table class="table" cellspacing="0" style="width:100%" id="fetch_all_repayment"></table>
                    </div> 
                </div>     
            </div>
        </div>
    </div>
<script>
    _get_sub_repayment_detail('<?php echo $ids?>');
</script>
<?php } ?>


<script type="text/javascript" src="js/scrollBar.js"></script>
<script type="text/javascript">$(".sb-container").scrollBox();</script>