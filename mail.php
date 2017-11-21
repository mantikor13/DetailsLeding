<?php
if((isset($_POST['amount'])&&$_POST['amount']!="")&&(isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['number'])&&$_POST['number']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@sv-auto.tech'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ деталей'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
												<p>Марка: '.$_POST['mark'].'</p>
												<p>Модель: '.$_POST['model'].'</p>
												<p>Объем: '.$_POST['amount'].'</p>
												<p>Год: '.$_POST['year'].'</p>
												<p>Список деталей: '.$_POST['detailsList'].'</p>
												<p>VIN: '.$_POST['VIN'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['number'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
if((isset($_POST['modal-name'])&&$_POST['modal-name']!="")&&(isset($_POST['modal-number'])&&$_POST['modal-number']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@sv-auto.tech'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Перезвоните мне'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['modal-name'].'</p>
                        <p>Телефон: '.$_POST['modal-number'].'</p>
												<p>VIN: '.$_POST['modal-subject'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8"; //Кодировка письма
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
