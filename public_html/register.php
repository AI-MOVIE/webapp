<?php

    require_once('./includes/Register.class.php');

    if(isset($_POST['email']) && isset($_POST['password'])){
        $registro = new Register($_POST['email'], $_POST['password']);
        $resultado = $registro->get_confirmation();
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./ressources/css/styles.css"/>
    <title>Register</title>
</head>
<body>
    <main>
        <img src="login/public_html/ressources/img/image (1).png" width="200px" height="200px">
        <hr>
        <form action="" method="POST" id="login-form">

        <?php
            if(isset($resultado)){
                echo $resultado;
            } else {
        ?>
            <div class="input-form">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="write your email"/>
            </div>
            <div class="input-form">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="password"/>
            </div>
                <button type="submit" form="login-form" value="Submit">Register</button>
                <?php
            }
        ?>
            <a href="form.php" class="go-back-button" >Back</a>
        </form>
    </main>
</body>
</html>
