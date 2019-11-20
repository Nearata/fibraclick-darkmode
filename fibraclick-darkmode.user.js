// ==UserScript==
// @name Modalità scura
// @namespace https://greasyfork.org/en/users/221935
// @match https://forum.fibra.click/*
// @grant none
// @version 1.0
// @author Nearata
// @description Modalità scura per il forum di FibraClick
// @license MIT
// ==/UserScript==

$(function() {
    "user strict";
    
    const urlCSS = "https://cdn.jsdelivr.net/gh/nearata/fibraclick-darkmode@master/tema-scuro.min.css"
  
    let span = $("<span />", {
      "id": "tema-scuro",
      "class": "Button",
      "title": "Attiva/Disattiva la modalità scura"
    }).css({
      "position": "absolute",
      "top": "50%",
      "right": "5px",
      "transform": "translateY(-50%)"
    });
    let i = $("<i />", {
      "class": "far fa-moon"
    }).css({
      "font-size": "1rem"
    });
    // Tema scuro 
    let temaScuro = $("<link />", {
      "rel": "stylesheet",
      "href": urlCSS,
      "disabled": "disabled"
    })
    $("head").append(temaScuro)
    
    i.appendTo(span)
    span.appendTo($("#header"))
    
    span.click(function() {
      $(this).toggleClass("active")
      $(this).children("i").toggleClass("fa-moon fa-sun")
      $(".TagLabel").toggleClass("colored")
      
      sessionStorage.setItem("temaScuro", $(this).hasClass("active"))
      
      if (sessionStorage.getItem("temaScuro") === "true") {
        temaScuro.removeAttr("disabled")
      } else {
        temaScuro.attr("disabled", "disabled")
      }
    })
    
    if (sessionStorage.getItem("temaScuro") && sessionStorage.getItem("temaScuro") === "true") {
      $("#tema-scuro").toggleClass("active")
      $("#tema-scuro>i").toggleClass("fa-moon fa-sun")
      $(".TagLabel").removeClass("colored")
      temaScuro.removeAttr("disabled")
    }
  })