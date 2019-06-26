<?php
header("Access-Control-Allow-Origin: *");
$config = include_once('config.php');


//подключаемся к ВКшной базе
$db_vk = new mysqli($config['host'], $config['user'], $config['pass'], $config['base_vk']);
$db_vk->set_charset("utf8");

switch($_GET['api']){
	case 'getOrderId':

		$id = $_GET['user_id'];
		$status = 0;
		$time = time();
		$mail = $_GET['mail'];
		$cource_id = $_GET['cource_id'];
		$amount = $_GET['amount'];
		
		//------- ВРЕМЕННО ДЛЯ ТЕСТА -------
		//$amount = 1;
		
		$db_vk->query("INSERT IGNORE INTO orders 
		(vk_id, time, status, cource_id, price, mail) VALUES
		('$id', '$time', '$status', '$cource_id', '$amount', '$mail')");
		
		//id заявки
		$order_id = $db_vk->insert_id;
		$transaction_id = "hedu-".$order_id; //hedu можно заменить на другое слово
		
		$response = array("amount" => $amount, "order_id" => $transaction_id);
	
	break;
	case 'getVKpaySign':
		$merchant_data = $_GET['data'];
		$merchant_private_key = $config['merchant_private_key'];
		$merchant_sign = sha1($merchant_data.$merchant_private_key);
		$response = array("merchant_sign" => $merchant_sign, "merchant_data" => $merchant_data);
		
	break;
	case 'getVKpayAppSign':
		$app_data = $_GET['data'];
		$app_key = $config["secret_key"];
		$app_sign = md5($app_data.$app_key);
		$response = array("app_sign" => $app_sign);
	break;
}

//вывод в json
echo json_encode($response);
?>