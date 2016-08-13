DB = new PouchDB('RO');

APP = {loaded_tabs:0}

var tabloaded = function(f){ return function(){
    var tabs = Object.keys(TABS).length;
    APP.loaded_tabs = APP.loaded_tabs + 1;

    if(APP.loaded_tabs = tabs){
        $("#tabs").tabs({
            heightStyle: "fill"
        });
    }

    if(f != null) f();
}}

$(document).ready(function() {

$("#tab_racers").load("tab/racers.html", tabloaded(TABS.racers.ready));
$("#tab_score").load("tab/elo.html", tabloaded(TABS.elo.ready));


})