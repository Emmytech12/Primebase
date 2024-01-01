
<header> 
    <div class="header-div-in">
        <div class="logo-div">
            <a href="<?php echo $website_url ?>"><img src="<?php echo $website_url?>/all-images/images/logo.jpg" alt="<?php echo $thename?> Logo"  class="animated zoomIn"/></a>  
        </div>

        <ul data-aos="fade-right" data-aos-duration="1000">                          
            <a href="#" title="Home Page"><li onClick="_get_page('home');" id="dashboard">HOME</li></a>        
            <a href="#" title="Request for Loan"><li onClick="_get_form('loan-request');"c>REQUEST FOR LOAN</li></a>  
            <a href="#" title="View Loan Request"><li onClick="_get_page('view-loan-request');">VIEW LOAN REQUEST</li></a>                                                        
            <a href="#" title="Repayment Schedule"><li onClick="_get_form('loan-repayment');">REPAYMENT SCHEDULE</li></a>  
        </ul>
    </div>
</header>