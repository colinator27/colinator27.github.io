// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

$(document).ready(function(){
  var name = window.location.pathname
        .split('/')
        .filter(function (c) { return c.length;})
        .pop();

  // In case the user is routed to index.html, or another page, for some reason...
  if (name.endsWith('.html')){
    name.replace('.html', '');
  }

  // Alternative loadPath implementation
  var path = '/' + name;
  if (name == 'index')
    path = '/';

  $.ajax({
    url: '/page_data/' + name + '.json',
    dataType: 'json',
    success: function(data){
      // Load the default index.html stuff, that hasn't yet been loaded
      document.body.innerHTML = '\
    <header role="banner">\
      <div id="verytop">\
        <div class="vb"></div>\
        <p class="tc dfont sdouble">colinator27</p>\
      </div>\
      <div class="navbar">\
        <div class="container">\
          <div class="col-sm-12 wline"></div>\
          <div class="col-sm-3 fullsize">\
            <a class="tc dfont fullsize" href="https://gamejolt.com/@colinator27">GAMEJOLT</a>\
          </div>\
          <div class="col-sm-3 fullsize">\
            <a class="tc dfont fullsize" href="https://github.com/colinator27">GITHUB</a>\
          </div>\
          <div class="col-sm-3 fullsize">\
            <a class="tc dfont fullsize" href="https://www.youtube.com/user/colinator27/">YOUTUBE</a>\
          </div>\
          <div class="col-sm-3 fullsize">\
            <a class="tc dfont fullsize" href="https://www.reddit.com/user/colinator27/">REDDIT</a>\
          </div>\
        </div>\
      </div>\
    </header>\
    <div class="container">\
      <main tabindex="-1">\
        <div id="content-area">\
          <p>Loading...</p>\
        </div>\
      </main>\
    </div>\
    <footer role="contentinfo">\
      <p class="dfont center" style="color:#999;">Copyright © 2019 colinator27</p>\
    </footer>\
    <script src="./js/main.js" type="text/javascript"></script>';
      processPageData(data, path);
    },
    error: function(xhr, textStatus, errorThrown){
      // Page not found, throw 404 error for real
      document.title = 'colinator27 - 404';
      document.body.innerHTML = '\
    <center>\
      <div class="vb"></div>\
      <h1 class="dfont sdouble">Wrong page!</h1>\
      <br>\
      <br>\
      <p class="dfont">Click <a href="https://colinator27.github.io/" style="color:#a00;">here</a> to go back to the homepage.</p>\
    </center>';
    }
  });
});
