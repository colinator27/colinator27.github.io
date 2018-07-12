// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();
   
    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
   
    res.length = c; // shrink down array to proper size
    return res;
  };
}

$(document).ready(function(){
  var pageName = window.location.pathname
        .split("/")
        .filter(function (c) { return c.length;})
        .pop();

  // In case the user is routed to index.html, or another page, for some reason...
  if (pageName.endsWith('.html')){
    pageName.replace('.html', '');
  }

  // Alternative loadPath implementation
  var path = '/' + name;
  if (name == 'index')
    path = '';

  $.ajax({
    url: '/page_data/' + name,
    dataType: 'application/json',
    complete: function(data){
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
      processPageData(data, path);
    },
    fail: function(xhr, textStatus, errorThrown){
      // Page not found, throw 404 error for real
      document.title = 'colinator27 - 404';
      document.body.innerHTML = `\
    <center>
      <h1>Wrong page!</h1>
      <br>
      <br>
      <p>Click <a href="https://colinator27.github.io/">here</a> to go back to the homepage.</p>
    </center>`;
    }
  });
});