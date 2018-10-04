<?php
	$hostname = "localhost";
	$database = "test";
	$username = "root";
	$password = "password";

	try
	{
		$bdd = new PDO("mysql:host=$hostname; dbname=$database", $username, $password);
		$bdd->setAttribute(PDO::ERRMODE_EXCEPTION);
		echo "OK";
		$sql = $bdd->prepare("SELECT title FROM movies WHERE id = ?");
		$sql->execute(array(1));
		$db = $sql->fetch();
		var_dump($db);
	}
	catch(PDOException $e)
	{
		echo "ERROR" . $e->getMessage();
	}

?>