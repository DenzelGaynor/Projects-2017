<?php 

session_start();

require_once 'libs/phpmailer/PHPMailerAutoload.php';

$errors = [];


if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
	
	$fields = [
		'name' => $_POST['name'],
		'email' => $_POST['email'],
		'message' => $_POST['message']
];

	foreach ($fields as $field => $data) {
		if (empty($data)) {
			$errors[] = 'The ' . $field . ' is required.';
		}	
	}

	if (empty($errors)) {
		
		$mail = new PHPMailer;

		$mail->isSMTP();
		$mail->SMTPAuth = true;
		$mail->Host = 'smtp.mail.yahoo.com';
		$mail->Username = 'Gaynordenzel@yahoo.com';
		$mail->Password = '147258Dj!';
		$mail->SMTPSecure = 'tls/ssl';
		$mail->Port = 465;

		$mail->isHTML();

		$mail->Subject = 'Contact form submitted';
		$mail->Body = 'From: ' . $fields['name'] . ' (' . $fields['email'] . ')<p>' . $fields['message'] . '</p>';

		$mail->FromName = 'Contact';

		$mail->addReplyTo($fields['email'], $fields['name']);

		$mail->addAddress('Gaynordenzel@yahoo.com', 'Denzel Gaynor');

		if ($mail->send()) {
			header('Location: thanks.php');
		} else {
			$errors[] = 'Sorry, could not send email. Try again later.';
		}


	}

} else {
	$errors[] = 'Something went wrong';
}

$_SESSION['errors'] = $errors;
$_SESSION['fields'] = $fields;


header('Location: index.php');