<?php include 'config/config.php';?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http: //www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php include 'meta.php'?>
<title><?php echo $thename?> | Micro Finance Loan Lending Company</title>
<meta name="keywords" content="Loan app, Personal loans, Quick loans, Instant approval, Online lending, Borrow money, Financial assistance, Credit score, Loan calculator, Microfinance, Peer-to-peer lending, Emergency funds, Installment loans, Cash advance, Loan application, Loan approval" />
<meta name="description" content="Other Description goes here"/>

<meta property="og:title" content="<?php echo $thename?> |  Other Title goes here" />
<meta property="og:image" content="<?php echo $website_url?>/all-images/plugin-pix/connect-global-logistics.jpg"/>
<meta property="og:description" content="Other Description goes here"/>

<meta name="twitter:title" content="<?php echo $thename?> |  Other Title goes here"/> 
<meta name="twitter:card" content="<?php echo $thename?>"/> 
<meta name="twitter:image"  content="<?php echo $website_url?>/all-images/plugin-pix/connect-global-logistics.jpg"/> 
<meta name="twitter:description" content="Other Description goes here"/>

</head>
<body>

<?php include 'alert.php'?>

    <div class="body-container">
        <div class="inner-div">
            <?php include 'header.php'?>
            <div class="body-div">
                <div id="page-content">
                    <?php $page='home';?>
                    <?php require_once 'config/page-content.php'?>
                </div>    
            </div>
        </div>
    </div>

<?php include 'bottom-scripts.php'?>
</body>
</html>


