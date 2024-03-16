<?php
    ob_start();
    session_start();

    if(!isset($_SESSION['valid'])){
        header('Location: form.php');
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./ressources/css/styles.css"/>
    <title>AI MOVIE CLUB</title>
</head>
<body>
    <header>
        <img src="login/public_html/ressources/img/image (1).png" width="100px" height="100px">
        <div id="menu-user">
            <p>Hola <?php echo $_SESSION['email'];?> !</p>
            <a href="logout.php" id="logout-link">Sign out/a>
        </div>
    </header>
