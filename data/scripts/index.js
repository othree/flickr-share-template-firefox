
var currentURL = '';

var render = function (data) {
  var tmpl = document.getElementById('tmpl-textarea').innerHTML;
  document.getElementById('result-textarea').innerHTML = JSON.stringify(data);
};

self.port.emit("ready", "1");

self.port.on("ready", function (url) {
  currentURL = url;
});

self.port.on("template", function (tmpl) {

  document.getElementById('tmpl-textarea').innerHTML = tmpl;

  var urlobj = document.createElement('a');
  urlobj.href = currentURL;
  var frags = urlobj.pathname.split('/');
  flickr.get(frags[3]).then(render);

});
