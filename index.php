<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-
  scalable=yes">
  <meta name="author" content="Bailey Pownell">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Three Beers Deep: Alt rock grunge band from Peru, Indiana</title>
  <link rel="icon" href="images/green-logo-transparent.png">
  <meta name="description" content="Alt rock grunge band from Peru, Indiana">
  <meta name="image" property="og:image" content="images/green-logo-transparent.jpg">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Text|Rubik+Mono+One&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/83f61b13a6.js" crossorigin="anonymous"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
</head>
<body>
  <nav>
    <img src="images/green-logo-transparent.png"/>
    <i class="fas fa-bars"></i>
    <ul>
      <i class="far fa-times-circle"></i>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#listen">LISTEN</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
  </nav>
  <div id="homepage" class="parallax">
    <div id="blackout">
      <h1><span id="3">3</span> <br/><span id="beers">BEERS</span> <br/><span id="deep"><span>DEE</span>P</span></h1>
    </div>
  </div>
  <main>
    <div id="message">
      <a name="message"></a>
      <h1 class="fade">We are a 4 members playing covers of your favorite 90's grunge and alt-rock hits, along with some originals of our own.</h1>
      <div class="grid">
        <div id="austin" class="hidden"></div>
        <div id="dave" class="hidden"></div>
        <div id="will" class="hidden"></div>
        <div id="quentin" class="hidden"></div>
        <div id="show2" class="hidden"></div>
      </div>
      <a name="listen"></a>
      <div id="spotify">
        <div>
          <h1 class="hidden">Check us out on <span>Spotify</span></h1>
          <a target="_blank" href="https://open.spotify.com/artist/3GZtZtRijc6GyLkNwAlixZ?si=UwvbtHtSQP6kw0FPW85AGw"><i class="fab fa-spotify"></i></a>
        </div>
        <iframe class="hidden" src="https://open.spotify.com/embed/artist/3GZtZtRijc6GyLkNwAlixZ" width="370" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    <div id="contact" class="fade">
      <a name="contact"></a>
      <h1>CONTACT US</h1>
      <h2>Book a show or just leave a message.</h2>
      <form method="POST">
        <label for="name">Name:</label>
        <input type="text" name="user_name" required maxlength="40">
        <label for="mail">E-mail:</label>
        <input type="email" name="user_email" required>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message" required maxlength="200"></textarea>
        <div class="button">
          <button type="submit" name="submit">SUBMIT</button>
        </div>
      </form>
      <div class="confirmation">Thanks! Your email has been sent.</div>
    </div>
  </main>
    <footer>
      <div id="whiteout" >
        <div id="social-media" class="fade">
          <img src="images/green-logo-transparent.png"/>
          <a href="https://www.instagram.com/3beersdeepband/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/3BeersDeepBand/" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://open.spotify.com/artist/3GZtZtRijc6GyLkNwAlixZ?si=UwvbtHtSQP6kw0FPW85AGw"><i class="fab fa-spotify"></i></a>
          <h3>Copyright 2019</h3>
          <h3><a target="_blank" href="https://baileypownell.com/">Made with <i class="fas fa-heart"></i> by Bailey</a></h3>
        </div>
        <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3GZtZtRijc6GyLkNwAlixZ&size=detail&theme=light" width="250" height="60" scrolling="no" frameborder="0" style="border:2px solid #18d860;"  allowtransparency="true"></iframe>
      </div>
    </footer>
    <!-- for using array.from() in IE11 -->
    <script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=Array.from"></script>
    <script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous">
    </script>
    <script type="text/javascript" src="public/bundle.js"></script>
</body>
</html>
