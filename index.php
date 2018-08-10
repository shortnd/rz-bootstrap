<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width">

	<title>Website name</title>
	<meta name="description" content="">
	<meta name="robots" content="index, follow">

	<link rel="stylesheet" href="_assets_/plugins/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="_assets_/fonts/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="_assets_/css/animate.min.css">
	<link rel="stylesheet" href="_assets_/plugins/owl.carousel/owl-carousel/owl.carousel.css">
	<link rel="stylesheet" href="_assets_/css/layout.css">

	<link rel="shortcut icon" href="_assets_/images/favicon.ico">
	<link rel="apple-touch-icon" href="_assets_/images/touch-icon-iphone.png">
	<link rel="apple-touch-icon" sizes="72x72" href="_assets_/images/touch-icon-ipad.png">
	<link rel="apple-touch-icon" sizes="114x114" href="_assets_/images/touch-icon-iphone4.png">
	<link rel="apple-touch-icon" sizes="144x144" href="_assets_/images/touch-icon-ipad2.png">

	<!--[if !IE]><!-->
	<link rel="stylesheet" href="_assets_/plugins/add-to-homescreen/style/addtohomescreen.css">
	<script src="_assets_/plugins/add-to-homescreen/src/addtohomescreen.min.js"></script>
	<script>addToHomescreen();</script>
	<!--<![endif]-->

	<!-- Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

</head>
<body id="homepage">
<header>
	<a href="#main" id="skip" tabindex="0">SKIP TO CONTENT</a>
	<div id="toggles" class="hidden-lg hidden-md">
		<div id="search-toggle" class="fa fa-search"></div>
		<div id="nav-toggle" class="fa fa-bars"></div>
	</div><!--/#toggles.hiddne-lg.hidden-md-->
	<div class="container">
		<div class="row">
			<nav class="col-md-8">

			<div class="col-md-4">
				<div id="search">
					<form class="search-form" method="get" action="search.php">
						<input name="q" class="form-control search-input" placeholder="Enter search terms..." type="search" id="search-input">
						<button>Go</button>
					</form>
				</div><!-- /#search -->
				<div id="google-translate" class="control hidden-sm hidden-xs">
					<script type="text/javascript">
						function googleTranslateElementInit() {
						  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google-translate');
						}
					</script>
					<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
				</div>
			</div>
		</div>
	</div>
</header>
<section id="slider">
	<ul class="bxslider">
		<li style="background:url('_assets_/images/slide-1.jpg') center no-repeat;background-size:cover"></li>
		<li style="background:url('_assets_/images/slide-2.jpg') center no-repeat;background-size:cover"></li>
	</ul>
</section>
<main id="main" tabindex="-1">
	<div class="container">
		<form class="signup submission" id="newletter-signup"  action="optin.php" enctype="application/x-www-form-urlencoded" method="post">
			<input type="email" name="femail" placeholder="Enter your email address" required>
			<button>Sign Up</button>
		</form>
		<form action="enotify/index.php" id="enotify-signup" class="signup clearfix">
			<input type="email" name="email" placeholder="Enter your email address" required>
			<button>Sign Up</button>
		</form>
	</div>
</main>
<footer>
	<div class="container">
		<div id="revize">
			Powered by <a href="http://www.revize.com" id="revize-link">Revize</a> | <a href="./" id="revize-login">Login</a>
		</div>
	</div>
</footer>

<div class="alert alert-dismissible floating-alert fade in os-animation" data-os-animation="fadeInUpBig" data-os-animation-delay="2s" role="alert">
	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	<h6>Alert Title 30 characters Max</h6>
	<p>Max 120 characters Max 120 characters Max 120 characters Max 120 characters Max 120 characters Max 120 characters Max 120</p>
	<p><a href="#" class="btn">Read More</a></p>
</div><!-- /.alert -->

<!-- Share widget make into an include file -->
<button type="button" class="share-btn floating-share-btn" data-toggle="modal" data-target="#shareModal">
	<i class="fa fa-share-alt"></i>
	<span>SHARE</span>
</button>

<div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="shareModal">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h6 class="modal-title" id="myModalLabel">Share this page</h6>
			</div>
			<div class="modal-body">
				<div class="copylink">
					<p>Copy and paste this code into your website.</p>
					<pre>&lt;a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>">Your Link Name&lt;/a&gt;</pre>
				</div><!-- /.copylink -->
				<div class="share-btns">
					<p>Share this page on your favorite Social network</p>
					<div class="row">
						<div class="col-md-3 col-xs-6">
							<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" class="btn-facebook" onclick="return !window.open(this.href, 'facebook ', 'width=500,height=500')"
							target="_blank">
								<i class="fa fa-facebook"></i> Facebook
							</a>
						</div>
						<div class="col-md-3 col-xs-6">
							<a href="https://www.twitter.com/home?status=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" class="btn-twitter" onclick="return !window.open(this.href, 'twitter ', 'width=500,height=500')"
							target="_blank">
								<i class="fa fa-twitter"></i> Twitter
							</a>
						</div>
						<div class="col-md-3 col-xs-6">
							<a href="https://www.plus.google.com/share?url=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" class="btn-google" onclick="return !window.open(this.href, 'google ', 'width=500,height=500')"
							target="_blank">
								<i class="fa fa-google-plus"></i> Google Plus
							</a>
						</div>
						<div class="col-md-3 col-xs-6">
							<a href="https://www.reddit.com/submit?url=<?php echo 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; ?>" class="btn-reddit" onclick="return !window.open(this.href, 'redit ', 'width=500,height=500')"
							target="_blank">
								<i class="fa fa-reddit"></i> Reddit
							</a>
						</div>
					</div><!-- /.row -->
				</div><!-- /.share-btns -->
				<button type="button" class="btn btn-success btn-lg" data-dismiss="modal">Close</button>
			</div><!-- /.modal-body -->
		</div>
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!-- Share widget make into an include file -->

<script src="_assets_/js/jquery.min.js"></script>
<script src="_assets_/plugins/social-feed/bower_components/codebird-js/codebird.js"></script>
<script src="_assets_/plugins/social-feed/bower_components/doT/doT.min.js"></script>
<script src="_assets_/plugins/social-feed/bower_components/moment/min/moment.min.js"></script>
<script src="_assets_/plugins/social-feed/bower_components/moment/locale/en-au.js"></script>
<script src="_assets_/plugins/social-feed/js/jquery.socialfeed.js"></script>
<script src="_assets_/plugins/modernizr/modernizr.custom.js"></script>
<script src="_assets_/plugins/owl.carousel/owl-carousel/owl.carousel.min.js"></script>
<script src="_assets_/plugins/jquery.bxslider/jquery.bxslider.min.js"></script>
<script src="_assets_/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="_assets_/plugins/sticky/jquery.sticky.js"></script>
<script src="_assets_/plugins/matchHeight/dist/jquery.matchHeight-min.js"></script>
<script src="_assets_/plugins/revizeWeather/js/revizeWeather.min.js"></script>
<script src="_assets_/plugins/waypoints/waypoints.min.js"></script>
<script src="_assets_/js/scripts.js"></script>

</body>
</html>
