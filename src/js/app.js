import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/app.css';


import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


import {verticalCenter} from './utils/vertical-center.js';
import {wiggleElement} from './utils/wiggle-element.js';
import {notification} from './utils/notification.js';


$(document).ready(function(){

  verticalCenter();


  $('.btn-login').click(function(){
    $(this).parent().fadeOut(function(){
      $('.login-box').fadeIn();
    })
  });


  $('.btn-cancel-action').click(function(e){
    e.preventDefault();
    $(this).parent().parent().parent().fadeOut(function(){
      $('.welcome-text').fadeIn();
    })
  });


  $('.btn-login-submit').click(function(e){
    var element = $(this).parent().parent().parent();
    
    var usernameEmail = $('#username-email').val();
    var password = $('#password').val();
    
    if(usernameEmail == '' || password == ''){
      e.preventDefault();

      // wigle and show notification
      // Wiggle
      wiggleElement(element);
      // Notification
      notification('.notification.login-alert', 20000);
      
    }
  });


  $('.btn-logout').click(function(){
    $('.logged-in').fadeOut(function(){
      $('.welcome-text').fadeIn();

      // Notification
      notification('.notification.logged-out', 20000);
     });
  });


});


$(window).resize(function () {
  verticalCenter();
});