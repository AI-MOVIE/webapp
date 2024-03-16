<?php
    require_once('./includes/header.php');
?>
    <main>
        <img src="login/public_html/ressources/img/image (1).png" width="200px" height="200px">
        <hr>
        <h2 class="white">Your profile information</h2>
        <hr>
        <section class="white">
            <p>Your email is <?php echo $_SESSION['email'];?> </p>
            <p>We have recovered this information using the sessions</p>
        </section>
    </main>
</body>
</html>
