<?php

ini_set('session.use_only_cookies', 1); // secure cookie
session_start(); // start session
session_regenerate_id(); // regenerating for security issues

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_WARNING);

$ip_address=$_SERVER['REMOTE_ADDR']; //ip used
$sysname=gethostname();//computer used


$thename='PrimeBase'; 
$website_auto_url =(isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$website_url='http://localhost/prime-based-loan-app';

?>

<script>
    var website_url='http://localhost/prime-based-loan-app'; /// website url
    var index_local_url=website_url+"/config/code";	/// For index local_url //
</script>

