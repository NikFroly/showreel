<?php

$public_key = file_get_contents("public_key");
$data = json_decode(base64_decode($_POST["data"]));
$verify_res = openssl_verify($_POST['data'], base64_decode($_POST['signature']), $public_key);


$answer = array();
$answer["body"] = array(
	"transaction_id" => $data->body->transaction_id,
	"notify_type" => "TRANSACTION_STATUS",
);
$answer["header"] = array(
	"status" => "OK",
	"ts" => $data->header->ts,
	"client_id" => 999999,
);

$id_hedu = $data->body->issuer_id;
$order_id = str_replace('hedu-', '', $id_hedu);

//$order_id - номер заказа, который записали раннее в базу

echo json_encode($answer);
?>