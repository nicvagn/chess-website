<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="min-width=1200px, initial-scale=1.0" />
        <title>SHCC Library</title>
        <link rel="stylesheet" href="./css/styles.css" />
        <link rel="stylesheet" href="./css/library.css" />
        <link rel="icon" href="./images/shcc-logo-notxt.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
              integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Bebas Neue" rel="stylesheet" />
    </head>
    <body>
        <!-- Navbar Section -->
        <nav class="navbar">
            <div class="navbar__container">
                <a href="about.html" class="navbar__logo"><img src="./images/shcc-logo-notxt.png" alt="SHCC logo" /></a>
                <ul class="navbar__menu">
                    <li class="navbar__item">
                        <a href="index.html" class="navbar__links">HOME</a>
                    </li>
                    <li class="navbar__item">
                        <a href="tournaments.html" class="navbar__links">TOURNAMENTS</a>
                    </li>
                    <li class="navbar__item">
                        <a href="workshops.html" class="navbar__links">WORKSHOPS</a>
                    </li>
                    <li class="navbar__item">
                        <a href="activities.html" class="navbar__links">ACTIVITIES</a>
                    </li>
                    <li class="navbar__item">
                        <a href="calendar.html" class="navbar__links">CALENDAR</a>
                    </li>
                    <li class="navbar__item">
                        <a href="contact-us.html" class="navbar__links">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </nav>

        <?php
        function test_input($data) {
            // make sure we are getting good input
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        // if request is a post set vars
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $title = $authors = $img_URL = "";
            error_log("REQUEST POST!", 0);
            $title = test_input($_POST['Title']);
            $authors = test_input($_POST['Authors']);
            $img_URL = test_input($_POST['Img_URL']);
        } else {
            // else redirect
            header("Location: library.php");
            exit(); // do not run any more php from this script
        }
        //book html
        echo "<div class='book-page'>";
        echo "<div class='book-page'>";
        echo "<img class='book-page' src=" . $img_URL . " alt='" . $title . "'>";
        echo "</div>";
        echo "<h1 class='book-page-title'>" . $title . "</h1>";
        echo "<h3 class='book-page-author'>" . $authors . "</h3>";
        ?>


        <form id="book-form" action="https://formsubmit.co/skhorizonchessclub@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="<?php echo $title . " by " . $authors . " request " ?>">
            <section class="rental-info">
                <div class="field">
                    <label class="field" for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" />
                </div>
                <div class="field">
                    <label class="field" for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address" />
                </div>
                <h4>Rental term:</h4>
                <div class="book-radio">
                    <input type="radio" id="one-week" name="num-weeks" value="One Week" />
                    <label  for="one-week">One week</label>
                    <input type="radio" id="two-week" name="num-weeks" value="Two Week" />
                    <label for="two-week">Two weeks</label>
                    <input type="radio" id="three-weeks" name="num-weeks" value="Three Week" />
                    <label for="three-weeks">Three weeks</label>
                </div>

                <div id="payment-details">
                    <h3>Rental cost: $650 per week.</h3>
                    <h4>To be paid in advance.</h4>
                    <h5>If you loose it we will come for you.</h5>
                </div>
            </section>
            <div class="side-by-side">
                <input class="form-btn" type="submit" value="Request book">
                <input class="form-btn" type="button" value="Return" onclick="window.location='/library.php';">
                <input name="_formsubmit_id" type="text" style="display:none">
            </div>
        </form>
            </div>
    </body>
</html>
