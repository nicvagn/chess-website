<!doctype html>
<!--
     Created for Saskatchewan Horizon Chess Club by Nicolas Vaagen
     This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
     This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
     You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-->
<?php
require_once './modules/dbh.php';
?>
<html lang="en">
    <head>
        <title>results for: <?php echo $_REQUEST["search"] ?></title>
        <!-- Come bots, come. -->
        <script type="application/ld+json">
         {
             "@context": "https://schema.org/",
             "@type": "Organization",
             "name": "Saskatchewan Horizon Chess Club",
             "image": "https://www.skhorizonchess.ca/images/shcc-logo.png",
             "description": "A chess club from Saskatchewan. We have meetups and tournaments. See www.skhorizonchess.ca for more info."
         }
        </script>
        <meta property="og:image" content="https://www.skhorizonchess.ca/images/shcc-logo-notxt.png" />
        <meta name="viewport" content="min-width=1200px, initial-scale=1.0" />
        <meta charset="UTF-8" />
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
                <a href="about.html" class="navbar__logo"><img src="./images/shcc-logo-notxt.png" alt="SHCC Logo" /></a>
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

        <div class="search-bar">
            <form class="search-container" action="/library-search.php">
                <input class="search-container" type="text" placeholder="Search..." name="search" />
                <button class="search-container" type="submit">🔍</button>
            </form>
        </div>
        <?php
        // Get our search term from GET request.
        $search = $_REQUEST["search"];
        // replace the quotes that muck up our sql
        $cleansearch = str_replace("'","\'", $search);
        $cleansearch = str_replace('"','\"', $cleansearch);
        $sqlstmt = "SELECT * FROM BOOK
            WHERE Title LIKE '%$cleansearch%'
            OR (Authors LIKE '%$cleansearch%'
            OR tags LIKE '%$cleansearch%')";

        // get the search result by asking the db
        $search_results = $dbh->query($sqlstmt);
        // build html from here
        echo "<h1>Search results for: <i>$search</i></h1>";
        echo "<table class='library-book-table'>";
        echo "<tr>"; // all books on one row
        foreach ($search_results as $b) {
            //Book specific vars
            $t = $b['Title'];
            $a = $b['Authors'];
            $i = $b['Img_URL'];
            $description = $b['Description'];
            $tags = $b['tags'];
            //book html
            echo "<td class='library-book'>";
            //form for the POST request
            echo "<form class='select_book' action='book.php' method='post'>";
            echo "<a href='#' class='select_book' onclick=\"this.parentNode.submit() \" >";
            echo "<div class='cover-wrapper'>";
            echo "<img src=" . $i . " class='library-book' alt='$t'>";
            echo "</div>";
            echo "<div class='library-book-title'>" . $t . "</div>";
            echo "<div class='library-book-author'>" . $a . "</div>";
            echo "</a>";
            // hidden inputs in the form we submit. Classic.
            echo "<input type='hidden' value=\"$t\" name='Title' />";
            echo "<input type='hidden' value=\"$a\" name='Authors' />";
            echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
            echo "<input type='hidden' value=\"$tags\" name='Tags' />";
            echo "<input type='hidden' value=\"$description\" name='Description' />";
            echo "<noscript><input type='submit' value='select'></noscript>";
            echo '</form>';
            echo "</td>"; // end book
        }
        //finish out the table of search results
        echo "</tr>";
        echo "</table>";
        ?>
        <!-- Footer Section -->
        <div class="footer__container">
            <div class="footer__links">
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>About Us</h2>
                        <a href="about.html">About the Club</a>
                        <a href="calendar.html">Calendar</a>
                        <a href="contact-us.html">Contact Us</a>
                    </div>
                </div>
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>Resources</h2>
                        <a href="library.php">Library</a>
                    </div>
                </div>
                <div class="footer__link--wrapper">
                    <div class="footer__link--items">
                        <h2>Social Media</h2>
                        <a href="https://www.facebook.com/skhorizonchess/">Facebook</a>
                        <a href="https://www.youtube.com/channel/UCW5Xgnst9kg3CsbSJbXYThw">Youtube channel</a>
                    </div>
                </div>
            </div>
            <section class="social__media">
                <div class="social__media--wrap">
                    <div class="footer__logo promo">
                        <a href="about.html"><img alt="shcc logo" src="./images/shcc-logo-notxt.png" />
                            <br>
                            <small>Website made by: Nicolas Vaagen</small></a>
                    </div>
                    <div id="quadrant" class="footer__logo promo">
                        <a href="https://www.quadrant.net/">
                            <img src="images/quadrant.svg" alt="quadrant logo">
                            <br>
                            <small>Hosting and Web services</small>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </body>
</html>
