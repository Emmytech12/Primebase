

<header> 
    <div class="header-div-in">
        <div class="logo-div">
            <a href="<?php echo $website_url ?>"><img src="<?php echo $website_url?>/all-images/images/logo.jpg" alt="<?php echo $thename?> Logo"  class="animated zoomIn"/></a>  
        </div>

        <ul data-aos="fade-right" data-aos-duration="1000">                          
            <li><a href="#" onClick="_get_page('home')" title="Home Page"><li>HOME</a></li>        
            <li><a href="#" id="loan-request-link" title="Request for Loan">REQUEST FOR LOAN</a></li>  
            <li><a href="#" onClick="_get_page('view_loan_request')" title="View Loan Request"><li>VIEW LOAN REQUEST</a></li>                                                        
            <li><a href="#" id="repayment-schedule-link" title="Repayment Schedule">REPAYMENT SCHEDULE</a></li>  
        </ul>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loan-request-link').addEventListener('click', function() {
            _get_form('loan-request');
        });
        document.getElementById('repayment-schedule-link').addEventListener('click', function() {
            _get_form_with_id('loan-repayment','<?php echo $ids?>');
        });
        
    });
    </script>
</header>