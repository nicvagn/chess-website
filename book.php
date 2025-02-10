<!DOCTYPE html>
<!--
     Site skeleton created by Brian Design on youtube @ www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber
     Created for Saskatchewan Horizon Chess Club by Nicolas Vaagen
     This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
     This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
     You should have received a copy of the GNU General Public License along with this program. If not, see
     <https://www.gnu.org/licenses/>.
-->
<?php
require_once './modules/dbh.php';
?>
<html lang="en">
<head>
    <meta name="generator" content=
    "HTML Tidy for HTML5 for Linux version 5.8.0">
    <meta charset="utf-8">
    <meta name="viewport" content=
    "min-width=1200px, initial-scale=1.0">
    <title>SHCC Library</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/library.css">
    <link rel="icon" type="image/png" href="/images/favicon-96x96.png"
    sizes="96x96">
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href=
    "/images/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-title" content="MyWebSite">
    <link rel="manifest" href="/images/site.webmanifest">
    <link rel="stylesheet" href=
    "https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity=
    "sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
    crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Bebas Neue"
    rel="stylesheet">
</head>
<body>
    <!-- Navbar Section -->
    <nav class="navbar">
        <div class="navbar__container">
            <a href="index.html" class="navbar__logo"><img src=
            "./images/shcc-logo-notxt.png" alt="SHCC logo"></a>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="index.html" class="navbar__links">HOME</a>
                </li>
                <li class="navbar__item">
                    <a href="tournaments.html" class=
                    "navbar__links">TOURNAMENTS</a>
                </li>
                <li class="navbar__item">
                    <a href="workshops.html" class=
                    "navbar__links">WORKSHOPS</a>
                </li>
                <li class="navbar__item">
                    <a href="activities.html" class=
                    "navbar__links">ACTIVITIES</a>
                </li>
                <li class="navbar__item">
                    <a href="calendar.html" class=
                    "navbar__links">CALENDAR</a>
                </li>
                <li class="navbar__item">
                    <a href="contact-us.html" class=
                    "navbar__links">CONTACT US</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="search-bar">
        <form class="search-container" action="/library-search.php">
            <input class="search-container" type="text" placeholder=
            "Search..." name="search"> <button class="search-container"
            type="submit">🔎</button>
        </form>
    </div><?php
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
            $description = test_input($_POST['Description']);
            $tags = test_input($_POST['Tags']);
        } else {
            // else redirect
            header("Location: library.php");
            exit(); // do not run any more php from this script
        }
        //book html
        echo "<div class='book-page'>";
        echo "<div class='book-page-cover-wrapper'>";
        echo "<img class='book-page' src=" . $img_URL . " alt='" . $title . "'>";
        echo "</div>";
        echo "<h1 class='book-page-title'>" . $title . "</h1>";
        echo "<h3 class='book-page-author'>" . $authors . "</h3>";
        echo "<h4 class='book-page-description'>Tags: " . $tags . "</h4>";
        echo "<p class='book-page-description'>" . $description . "</p>";
        ?>
    <form id="book-form" action=
    "https://formsubmit.co/davidallansteer@gmail.com" method="post"
    name="book-form">
        <input type="hidden" name="_subject"
               value="<?php echo $title . " by " . $authors . " request " ?>">

        <section class="rental-info">
            <div class="field">
                <label for="name">Name:</label>
                <BR>
                <input type="text" id="name" name="name" placeholder=
                "Enter your full name">
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <BR>
                <input type="text" id="email" name="email" placeholder=
                "Enter your email address" size="30">
            </div>
            <h4 class="book-page">Rental term:</h4>
            <div class="book-radio">
                <input type="radio" id="one-week" name="num-weeks"
                value="One Week"> <label for="one-week">One
                week</label> <input type="radio" id="two-week" name=
                "num-weeks" value="Two Week"> <label for="two-week">Two
                weeks</label> <input type="radio" id="three-weeks"
                name="num-weeks" value="Three Week"> <label for=
                "three-weeks">Three weeks</label>
            </div>
            <div id="payment-details">
                <h3 class="book-page">Rental cost: by donation. Our librarian will contact you to orgaize recipt. </h3>
                <h4 class="book-page">We hope you enjoy the library, and give walue for value.</h4>
                <h6 class="book-page"><small>If you loose it, we will come for you.</small></h6>
            </div>
        </section>
        <div class="side-by-side">
            <input class="form-btn" type="submit" value="Request book">
            <input class="form-btn" type="button" value="Return"
            onclick="window.location='/library.php';"> <input name=
            "_formsubmit_id" type="text" style="display:none">
        </div>
    </form>
  </div>
</body>
</html>
