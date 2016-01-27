
var currentURL = '';

var render = function () {
  var tmpl = document.getElementById('tmpl-textarea').innerHTML;
};




self.port.emit("ready", "1");

self.port.on("ready", function (url) {
  currentURL = url;
});

self.port.on("template", function (tmpl) {

  document.getElementById('tmpl-textarea').innerHTML = tmpl;

  render();

});
