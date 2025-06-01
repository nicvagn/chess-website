<!DOCTYPE html>
<!--
    Made by Nicolas Vaagen for Horizon Chess Club

    This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
  -->
<html lang="en">
<head>
  <!-- set title and viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css?family=Bebas Neue"
  rel="stylesheet">
  <link href="https://fonts.cdnfonts.com/css/georgia" rel=
  "stylesheet">
  <link rel="stylesheet" href="./css/styles.css">
  <link rel="stylesheet" href="./css/tournaments.css">
  <link rel="icon" type="image/png" href=
  "/images/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
  <link rel="shortcut icon" href="/images/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href=
  "/images/apple-touch-icon.png">
  <meta name="apple-mobile-web-app-title" content=
  "SHC Tournaments">
  <link rel="manifest" href="/images/site.webmanifest">
  <title>SHC: Tournaments</title>
<body>
  <!-- Navbar Section -->
  <nav class="navbar">
    <div class="navbar__container">
      <a href="index.html" class="navbar__logo"><img src=
      "./images/shcc-logo-notxt.png" alt="SHC Logo"></a>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="index.html" class="navbar__links">HOME</a>
        </li>
        <li class="navbar__item">
          <a href="tournaments.html" id="navbar__links_current"
          class="navbar__links">TOURNAMENTS</a>
        </li>
        <li class="navbar__item">
          <a href="workshops.html" class=
          "navbar__links">WORKSHOPS</a>
        </li>
        <li class="navbar__item">
          <a href="library.php" class="navbar__links">LIBRARY</a>
        </li>
        <li class="navbar__item">
          <a href="calendar.html" class=
          "navbar__links">CALENDAR</a>
        </li>
        <li class="navbar__item">
          <a href="contact-us.html" class="navbar__links">CONTACT
          US</a>
        </li>
      </ul>
    </div>
  </nav>
  <h1 class="heading" id="tournament-title">Chess Tournament
  Schedule</h1>
  <h4 class="page-heading">tournaments at the Saskatoon Bridge
  Club</h4>
  <div id="page-content">
  <?php

    require_once './modules/tournament-dbh.php';
    //Get all books starting with a number
    $sqlstmt = "SELECT * FROM tournament_table";
    // get the search result by asking the db
    $tournaments = $dbh->query($sqlstmt);
    echo "<table class='tournaments-table'>";
    foreach($tournaments as $t) {
      echo "<tr>";
        echo "<td>";
          echo "<h3>" . $t["name"] . "</h3>";
        echo "</td>";

        echo "<td>";
          echo "<p>" . $t["start_date"] . " to " . $t["end_date"] . "</p>";
        echo "</td>";
      echo "</tr>";
    }
    echo "</table>";
    ?>
  </div>
  <div class="footer__container">
    <div class="footer__links">
      <div class="footer__link--wrapper">
        <div class="footer__link--items">
          <h2>About Us</h2><a href="about.html">About the Club</a>
          <a href="calendar.html">Calendar</a> <a href=
          "contact-us.html">Contact Us</a>
        </div>
      </div>
      <div class="footer__link--wrapper">
        <div class="footer__link--items">
          <h2>Resources</h2><a href="library.php">Library</a>
        </div>
      </div>
      <div class="footer__link--wrapper">
        <div class="footer__link--items">
          <h2>Social Media</h2><a href=
          "https://www.facebook.com/skhorizonchess/">Facebook</a>
          <a href=
          "https://www.youtube.com/channel/UCW5Xgnst9kg3CsbSJbXYThw">
          Youtube channel</a>
        </div>
      </div>
    </div>
    <section class="social__media">
      <div class="social__media--wrap">
        <div class="footer__logo promo">
          <a href="about.html"><img src=
          "./images/shcc-logo-notxt.png"><br>
          <small>Website made by: Nicolas Vaagen</small></a>
        </div>
        <div id="quadrant" class="footer__logo promo">
          <a href="https://www.quadrant.net/"><img src=
          "images/quadrant.svg"><br>
          <small>Hosting and Web services</small></a>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
