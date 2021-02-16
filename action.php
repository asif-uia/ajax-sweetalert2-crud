<?php

include('connection.php');

if (!empty($_POST)) {
    $query = "
		INSERT INTO sampletable (first_name, last_name) VALUES ('" . $_POST["first_name"] . "', '" . $_POST["last_name"] . "')
		";

    $statement = $connect->prepare($query);
    $statement->execute();
}

?>