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
    <meta property="og:image" content=
    "https://www.skhorizonchess.ca/images/shcc-logo-notxt.png">
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="/images/favicon-96x96.png"
    sizes="96x96">
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href=
    "/images/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-title" content="MyWebSite">
    <link rel="manifest" href="/images/site.webmanifest">
    <meta name="viewport" content=
    "min-width=1200px, initial-scale=1.0">
    <title>SHCC: Library</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/library.css">
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
                        <a href="library.php" id="navbar__links_current" class="navbar__links">LIBRARY</a>
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
            <input class="search-container" type="text" placeholder=
            "Search..." name="search"> <button class="search-container"
            type="submit">🔎</button>
        </form>
    </div>
    <main id="library-inventory">
        <h3 class="letter-break">#</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[1234567890]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">A</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[aA]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">B</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[bB]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">C</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[cC]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">D</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[dD]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">E</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[eE]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
                // build html from here
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">F</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[fF]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
                // build html from here
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">G</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[gG]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">H</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[hH]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">I</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[iI]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">K</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[kK]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">L</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[lL]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">M</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[mM]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">N</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[nN]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">O</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[oO]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">P</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[pP]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<form class='select_book' action='book.php' method='POST'>";
                    echo "<a href='#' class='select_book' onclick=\"this.parentNode.submit() \" >";
                    echo "<div class='cover-wrapper'>";
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">Q</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[qQ]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">R</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[rR]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">S</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[sS]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">T</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[tT]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">U</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[uU]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">V</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[vV]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">W</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[wW]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
        <h3 class="letter-break">Z</h3>
        <section class="library-row">
            <?php
                //Get all books starting with a number
                $sqlstmt = "SELECT * FROM BOOK
            WHERE Title REGEXP '^[zZ]'";
                // get the search result by asking the db
                $search_results = $dbh->query($sqlstmt);
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
                    echo "<img src=" . $i . " alt='$t' class='library-book'>";
                    echo "</div>";
                    echo "<div class='library-book-title'>" . $t . "</div>";
                    echo "<div class='library-book-author'>" . $a . "</div>";
                    echo "</a>";
                    // hidden inputs in the form we submit. Classic.
                    echo "<input type='hidden' value=\"$t\" name='Title' />";
                    echo "<input type='hidden' value=\"$a\" name='Authors' />";
                    echo "<input type='hidden' value=\"$i\" name='Img_URL' />";
                    echo "<input type='hidden' value=\"$description\" name='Description' />";
                    echo "<input type='hidden' value=\"$tags\" name='Tags' />";
                    echo "<noscript><input type='submit' value='select'></noscript>";
                    echo '</form>';
                    echo "</td>"; // end book
                }
                //finish out the table of search results
                echo "</tr>";
                echo "</table>";
                ?>
        </section>
    </main><!-- Footer Section -->
    <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>About Us</h2><a href="about.html">About the
                    Club</a> <a href="calendar.html">Calendar</a>
                    <a href="contact-us.html">Contact Us</a>
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
                    "./images/shcc-logo-notxt.png" alt="SHCC logo"><br>
                    <small>Website made by: Nicolas Vaagen</small></a>
                </div>
                <div id="quadrant" class="footer__logo promo">
                    <a href="https://www.quadrant.net/"><img src=
                    "images/quadrant.svg" alt="quadrant"><br>
                    <small>Hosting and Web services</small></a>
                </div>
            </div>
        </section>
    </div>
</body>
</html>
