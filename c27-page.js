function getPageId() { 
   var metas = document.getElementsByTagName('meta'); 
   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("property") == "pageid") { 
         return metas[i].getAttribute("content"); 
      } 
   } 
   return undefined;
}
function loadPage(){
	var pageid = getPageId();
	var title = "colinator27";
	var bodyContent = "<center><p>An error occurred.</p></center>";
	switch(pageid){
		case "home":
			bodyContent = "<div class=\"col-xs-12\">  <center>   <br>    <h1>COLINATOR27</h1>    <br>    <p>A website with all of my projects and games in one place!</p>    <a id=\"custom_font\" href=\"https://colinator27.github.io/about/\">Info/Contact</a>    <br>    <br>    <a id=\"custom_font\" href=\"https://colinator27.github.io/credits/\">Credits</a>    <br>   <a id=\"custom_font\" href=\"https://colinator27.github.io/redirect?link=http://colinator27.tumblr.com/\">Blog?</a>    </center></div>";
		break;
		case "about":
			title = "About - colinator27";
			bodyContent = "<div class=\"row\"><div class=\"container\"><center>  <h1>ABOUT ME</h1></center><br><div class=\"col-sm-6\">      <p id=\"custom_font\">Simple Info</p>      <p>I'm an indie game developer, who works on many games and projects!</p>      <p>Many projects are hidden around, some unknown.</p>    </div><div class=\"col-sm-6\">      <p id=\"custom_font\">Where am I?</p>      <p>You can find me at <a href=\"https://colinator27.github.io/redirect/?link=http://gamejolt.com/@colinator27\" target=\"_blank\">GameJolt</a>, <a href=\"https://colinator27.github.io/redirect/?link=https://scratch.mit.edu/users/colinator27/\" target=\"_blank\">Scratch</a>, and <a href=\"https://colinator27.github.io/redirect/?link=https://github.com/colinator27/\" target=\"_blank\">GitHub</a>. (used to make page!)</p>      <p>I'm at other places on the internet too, but I don't usually use those accounts.</p>  </div><div class=\"col-sm-6\">      <p id=\"custom_font\">Suggestions?</p>      <p>If you want to suggest anything, you can contact me at my accounts shown above!</p>      <p>I accept constructive criticism, by the way.</p>  </div>  <div class=\"col-sm-6\">      <p id=\"custom_font\">Direct Contact</p>      <p>If you'd like to talk about something privately, email:</p>      <p><a target=\"_blank\" href=\"mailto:colinator27official+contact@gmail.com\">colinator27official+contact@gmail.com</a></p>  </div></div> </div>";
		break;
		case "music":
			title = "Music - colinator27";
			bodyContent = "<div class=\"col-xs-12\">  <center>   <h1>MUSIC</h1>    <br>    <br>    <br>    <a id=\"custom_font\" href=\"https://colinator27.github.io/msuics/\">...and more here!</a> <a id=\"custom_font\" href=\"https://soundcloud.com/colinator27\">...and here?</a> </center></div>";
		break;
		case "proj-projectdreamt":
			bodyContent = "<div class=\"col-xs-12\">    <center>      <h1>PROJECT DREAMT</h1>      <h3>In Development</h3>      <br>      <br>      <p>Information to be revealed...</p>      <h1>Links:</h1>      <a id=\"custom_font\" href=\"https://colinator27.github.io/redirect/?link=http://gamejolt.com/games/project-dreamt/136226\" target=\"_blank\">View on GameJolt</a>    </center>  </div> ";
		break;
		case "proj-ldgames":
			bodyContent = "<div class=\"col-xs-12\">  <center>    <h1>Ludum Dare Games</h1>    <br>    <p>A collection of my Ludum Dare games!</p>  </center></div><div class=\"row\">  <div class=\"container\" id=\"hash\">    <div class=\"col-sm-6\">      <h1 style=\"visibility:none;\"> </h1>      <p id=\"custom_font\">The Small Giant</p>      <p>A game where there is a small giant- yes. The giant also gets picked on by other normal giants. It is a short game with only a couple of minutes of gameplay.</p>      <p><a href=\"#asg\" onclick=\"location.reload();\">More info</a></p>    </div>    <div class=\"col-sm-6\">      <h1 style=\"visibility:none;\"> </h1>      <p id=\"custom_font\">Young Activities</p>      <p>A Mini-LD submission where the theme was Youth. It's basically some things that a young child may do in their young life.</p>      <p><a href=\"#ya\" onclick=\"location.reload();\">More info</a></p>    </div>  </div></div><script type=\"text/javascript\">  function hashChange(){    if(location.hash == \"#asg\") {      var htmlElement = document.getElementById(\"hash\");      htmlElement.innerHTML = \"<div class=\\\"col-sm-3\\\"></div><div class=\\\"col-sm-6\\\"><h1 style=\\\"visibility:none;\\\"> </h1><center><p id=\\\"custom_font\\\" style=\\\"text-align: center;\\\">The Small Giant</p><p>A game where there is a small giant- yes. The giant also gets picked on by other normal giants. It is a short game with only a couple of minutes of gameplay.</p><p><a href=\\\"#\\\" onclick=\\\"location.reload();\\\">Back</a></p><h1 style=\\\"visibility:none;\\\"> </h1><a id=\\\"custom_font\\\" target=\\\"_blank\\\" href=\\\"https://colinator27.github.io/redirect/?link=http://gamejolt.com/games/a-small-giant-ld-34/113551/\\\">View on GameJolt</a></center></div><div class=\\\"col-sm-3\\\"></div>\";    }    if(location.hash == \"#ya\") {      var htmlElement = document.getElementById(\"hash\");      htmlElement.innerHTML = \"<div class=\\\"col-sm-3\\\"></div><div class=\\\"col-sm-6\\\"><h1 style=\\\"visibility:none;\\\"> </h1><center><p id=\\\"custom_font\\\" style=\\\"text-align: center;\\\">Young Activities</p><p>A Mini-LD submission where the theme was Youth. It's basically some things that a young child may do in their young life.</p><p><a href=\\\"#\\\" onclick=\\\"location.reload();\\\">Back</a></p><h1 style=\\\"visibility:none;\\\"> </h1><a id=\\\"custom_font\\\" target=\\\"_blank\\\" href=\\\"https://colinator27.github.io/redirect/?link=http://gamejolt.com/games/young-activities-minild-65/127590\\\">View on GameJolt</a></center></div><div class=\\\"col-sm-3\\\"></div>\";    }  }  document.getElementsByTagName(\"BODY\")[0].onhashchange = function() {hashChange()};  hashChange();</script>";
		break;
		default:
		break;
	}
	var nav = "<nav class=\"navbar navbar-default\">  <div class=\"container-fluid\">    <!-- Brand and toggle get grouped for better mobile display -->    <div class=\"navbar-header\">      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">        <span class=\"sr-only\">Toggle navigation</span>        <span class=\"icon-bar\"></span>        <span class=\"icon-bar\"></span>        <span class=\"icon-bar\"></span>      </button>      <a class=\"navbar-brand\" href=\"https://colinator27.github.io/\">colinator27</a>    </div>    <!-- Collect the nav links, forms, and other content for toggling -->    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">      <ul class=\"nav navbar-nav\">        <!--li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li-->        <li><a href=\"https://colinator27.github.io/about\">About</a></li>        <li><a href=\"https://colinator27.github.io/music\">Music</a></li>        <li class=\"dropdown\">          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Projects <span class=\"caret\"></span></a>          <ul class=\"dropdown-menu\">            <li><a href=\"https://colinator27.github.io/projects/five-nights-at-fidos/\">Five Nights at Fido's</a></li>            <li><a href=\"https://colinator27.github.io/projects/project-dreamt/\">Project Dreamt</a></li>            <li><a href=\"https://colinator27.github.io/projects/ludum-dare-games/\">Ludum Dare Games</a></li>            <li><a href=\"https://colinator27.github.io/projects/undertale-going-back/\">Undertale: Going Back</a></li>          </ul>        </li>      </ul>      <!--ul class=\"nav navbar-nav navbar-right\">        <li><a href=\"#\">Link</a></li>        <li class=\"dropdown\">          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>          <ul class=\"dropdown-menu\">            <li><a href=\"#\">Action</a></li>            <li><a href=\"#\">Another action</a></li>            <li><a href=\"#\">Something else here</a></li>            <li role=\"separator\" class=\"divider\"></li>            <li><a href=\"#\">Separated link</a></li>          </ul>        </li>      </ul-->    </div><!-- /.navbar-collapse -->  </div><!-- /.container-fluid --></nav>";
	document.head.innerHTML += "<title>"+ title +"</title>";
	var final = nav + bodyContent;
	document.body.innerHTML += final;
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js";
	s.integrity = "sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS";
	s.crossorigin = "anonymous";
	$("body").append(s);
}
loadPage();
