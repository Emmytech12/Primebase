<?php require_once 'config.php';?>
<?php
$action=$_POST['action'];
switch ($action){

	case 'get_form':
		$page=$_POST['page'];
		require_once 'page-content.php';
	break;

	case 'get_page':
		$page=$_POST['page'];
		require_once 'page-content.php';
	break;
	
	case 'get_page_with_id':
		$page=$_POST['page'];
		$ids=$_POST['ids'];
		require_once 'page-content.php';
	break;
}
?>
