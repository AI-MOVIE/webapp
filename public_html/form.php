<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./ressources/css/styles.css"/>
    <title>AI MOVIE CLUB</title>
</head>
<body>
    <main>
        <img src="login/public_html/ressources/img/image (1).png" width="200px" height="200px">
        <hr>
        <form action="login.php" method="POST" id="login-form">
            <div class="input-form">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="email"/>
            </div>
            <div class="input-form">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter your password"/>
            </div>

            <button type="submit" form="login-form" value="Submit">Login</button>
            <p>
                Don't have a user? Then you can create an account <a href="register.php" class="white">Here</a>
            </p>
        </form>
    </main>
    
</body>
</html>
