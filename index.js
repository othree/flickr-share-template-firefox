var self = require('sdk/self');

var tabs = require("sdk/tabs");
var { ActionButton } = require("sdk/ui/button/action");

var button = ActionButton({
    id: "flickr-share-template",
    label: "share",
    icon: {
      "16": "./images/icons/16x16.png",
      "48": "./images/icons/48x48.png"
    },
    onClick: function(state) {
      console.log("button '" + state.label + "' was clicked");
      var panel = require("sdk/panel").Panel({
        width: 400,
        height: 400,
        contentURL: "./index.html",
        contentScriptFile: "./scripts/content.js"
      });

      panel.show({
        position: button
      });

      panel.port.on('ready', function () {
        panel.port.emit('ready', tabs.activeTab.url);
        panel.port.emit('template', '1234');
      });
    }
  });


// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;
