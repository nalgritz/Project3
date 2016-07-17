// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require jquery <---- without equal sign it would not include
//= require jquery/dist/jquery
//= require jquery-cookie/jquery.cookie
//= require jquery-deparam/jquery-deparam
//= require pubsub-js/src/pubsub
//= require j-toker/dist/jquery.j-toker
//= require_tree .
//= require jquery-ui

$.auth.configure({
  // By default, you only need to configure apiUrl
  // Note that if you put a '/' at the end of the link, there will be errors when calling the api
  apiUrl: location.origin
})