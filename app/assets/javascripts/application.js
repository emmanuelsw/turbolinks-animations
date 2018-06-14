// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

localStorage.setItem('animation', 'fadeout,fadein');

function changeAnim(option) {
	localStorage.setItem('animation', option.value);
}

document.addEventListener('turbolinks:request-start', function(){
	var animation_out = localStorage.getItem('animation');
	document.querySelector('.main').classList.add(animation_out.split(",")[0]);
})

document.addEventListener('turbolinks:render', function(){
	var animation_in = localStorage.getItem('animation');
	document.querySelector('.main').classList.add(animation_in.split(",")[1]);
	document.querySelector(`[value="${animation_in}"]`).checked = true;
})