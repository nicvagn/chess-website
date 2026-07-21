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
require_once './modules/library-dbh.php';
?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content=
    "min-width=1200px, initial-scale=1.0">
    <title>SHC Library</title>
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

    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
</head>
<body>
    <!-- Navbar Section -->
    <nav class="navbar">
        <div class="navbar__container">
            <a href="index.html" class="navbar__logo"><img src=
            "./images/shcc-logo-notxt.png" alt="SHCC Logo"></a>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="index.html" class="navbar__links">HOME</a>
                </li>
                <li class="navbar__item">
                    <a href="library.php" class=
                    "navbar__links">FULL INVENTORY</a>
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
        function pretty_tags($data) {
            //make pretty tags for David
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return str_replace(" ", ", ", $data);
        }

        // if request is a post set vars
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $title = $authors = $img_URL = "";
            $title = test_input($_POST['Title']);
            $authors = test_input($_POST['Authors']);
            $img_URL = test_input($_POST['Img_URL']);
            $description = test_input($_POST['Description']);
            $tags = pretty_tags($_POST['Tags']);
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

    <form id="book-form" method="post"
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
                <h3 class="book-page">Book pick up organized via email.</h3>
                <h4 class="book-page">We hope you enjoy the library, and give value for value.</h4>
                <h6 class="book-page"><small>If you loose it, we will come for you.</small></h6>
            </div>
            <p id="form-status"></p>
        </section>
        <div class="side-by-side">
            <input class="form-btn" type="submit" value="Request book">
            <input class="form-btn" type="button" value="Return"
            onclick="window.location='/library.php';">
        </div>
    </form>
  </div>
  <script>
  emailjs.init("kZnzd2kA-xeoP6GvE");


  document.getElementById('book-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = 'Sending…';

      emailjs.sendForm('service_3x21fhh', 'template_m4hl57h', this)
          .then(() => {
              status.textContent = '✓ Message sent!';
              this.reset();
          })
          .catch(() => {
              status.textContent = '✗ Something went wrong. Please try again.';
          });
  });
  </script>
</body>
</html>
