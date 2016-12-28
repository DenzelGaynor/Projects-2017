<?php 

session_start();

require_once 'helpers/security.php';

$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
$fields = isset($_SESSION['fields']) ? $_SESSION['fields'] : [];

 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Contact Me!</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>
<body>

<header>
	<nav>
		<ul>
			<a href="index.php"><li>Home</li></a>
			<a href="#"><li>Placeholder</li></a>
			<a href="#"><li>Placeholder</li></a>
		</ul>
	</nav>
</header>

<div class="contact">
	
	<?php if (!empty($errors)): ?>
		<div class="panel">
			<ul><li><?php echo implode('</li><li>', $errors); ?></li></ul>
		</div>
	<?php endif ?>


	<form class="form" action="contact.php" method="POST">
		<label>
			<span>Name *</span><br>
			<input type="text" name="name" autocomplete="off" placeholder="Full Name" 
			<?php echo isset($fields['name']) ? ' value="' . e($fields['name']) . '"' : '' ?>><br>
		</label>

		<label>
			<span>Email *</span><br>
			<input type="text" name="email" autocomplete="off" placeholder="Enter Your Email"
			<?php echo isset($fields['email']) ? ' value="' . e($fields['email']) . '"' : '' ?>><br>
		</label>

		<label>
			<span>Messege *</span><br>
			<textarea name="message" rows="6"
			<?php echo isset($fields['message']) ? e($fields['message']) : '' ?>></textarea><br>
		</label>

		<input type="submit" name="submit">	

		<p class="muted">* means required</p>
	</form>



</div>

<footer>
	<p>December 2016</p>
</footer>

</body>
</html>

<?php 
unset($_SESSION['errors']);
unset($_SESSION['fields']);

 ?>