<?php
if((isset($_POST['mark'])&&$_POST['mark']!="")&&(isset($_POST['model'])&&$_POST['model']!="")
	&&(isset($_POST['amount'])&&$_POST['amount']!="")&&(isset($_POST['year'])&&$_POST['year']!="")
	&&(isset($_POST['detailsList'])&&$_POST['detailsList']!="")&&(isset($_POST['VIN'])&&$_POST['VIN']!="")
	&&(isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['number'])&&$_POST['number']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'romakrut333bk@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ деталей'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
												<p>Имя: '.$_POST['mark'].'</p>
												<p>Имя: '.$_POST['model'].'</p>
												<p>Имя: '.$_POST['amount'].'</p>
												<p>Имя: '.$_POST['year'].'</p>
												<p>Имя: '.$_POST['detailsList'].'</p>
												<p>Имя: '.$_POST['VIN'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['number'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
				echo "string";
}
?>
