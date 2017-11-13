<?php
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$c = true;
if ( $method === 'POST' ) {
	$mark = trim($_POST["mark"]);
	$model = trim($_POST["model"]);
	$amount  = trim($_POST["amount"]);
	$detailsList = trim($_POST["detailsList"]);
	$VIN = trim($_POST["VIN"]);
	$name = trim($_POST["name"]);
	$number = trim($_POST["number"]);
	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "mark" && $key != "model" && $key != "amount" && $key != "detailsList" && $key != "VIN" && $key != "name" && $key != "number") {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}
$message = "<table style='width: 100%;'>$message</table>";
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}
$headers = "MIME-Version: 1.0" . PHP_EOL .
$admin_email = "romakrut333bk@gmail.com" .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
mail($admin_email, adopt($mark), $message, $headers );