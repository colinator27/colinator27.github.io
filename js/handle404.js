var _failCalledYet = false;
function callFail(){
  if (_failCalledYet) return;
  _failCalledYet = true;

  // Page not found, throw 404 error for real
  document.title = 'colinator27 - 404';
  document.body.innerHTML = `\
<center>
  <div class="vb"></div>
  <h1 class="dfont sdouble">Wrong page!</h1>
  <br>
  <br>
  <p class="dfont">Click <a href="https://colinator27.github.io/" style="color:#a00;">here</a> to go back to the homepage.</p>
</center>`;
}

$(document).ready(function(){
  var name = window.location.pathname
        .split("/")
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
    complete: function(data){
      if (data.statusText != "success")
        return callFail();

      // Load the default index.html stuff, that hasn't yet been loaded
      document.body.innerHTML = `\
    <div id="verytop">
      <div class="vb"></div>
      <p class="tc dfont sdouble">colinator27</p>
    </div>
    <div class="navbar">
      <div class="container">
        <div class="col-sm-12 wline"></div>
        <div class="col-sm-3 fullsize">
          <a class="tc dfont fullsize" href="https://gamejolt.com/@colinator27">GAMEJOLT</a>
        </div>
        <div class="col-sm-3 fullsize">
          <a class="tc dfont fullsize" href="https://github.com/colinator27">GITHUB</a>
        </div>
        <div class="col-sm-3 fullsize">
          <a class="tc dfont fullsize" href="https://www.youtube.com/user/colinator27/">YOUTUBE</a>
        </div>
        <div class="col-sm-3 fullsize">
          <a class="tc dfont fullsize" href="https://www.reddit.com/user/colinator27/">REDDIT</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="content-area">
        <p>Loading...</p>
      </div>
    </div>`;
      processPageData(data.responseJSON, path);
    },
    fail: function(xhr, textStatus, errorThrown){
      callFail();
    }
  });
});