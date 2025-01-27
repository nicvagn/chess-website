<!DOCTYPE HTML>

<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="min-width=1200px, initial-scale=1.0" />
  <title>SK Horizon Chess Club</title>
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

  <main>
  <h2 class="library-title"><?php echo $_POST["book"]; ?></h2>
  <?php
    //Book specific vars
    $b = $_POST["book"];
    $t = $b['Title']; 
    $a = $b['Authors'];
    $i = $b['Img_URL'];

    //book html
    echo "<div class='library-book'>";
      echo "<div class='cover-wrapper'>";
        echo "<img src=" . $i . " alt=$t>";
      echo "</div>";
      echo "<div class='library-book-title'>" . $t . "</div>";
      echo "<div class='library-book-author'>" . $a . "</div>";
    echo "</div>"; // end book
  ?>

  </main>

  </body>
</html>

