// ==UserScript==
// @name         ChordWiki accidental url modifier
// @namespace    https://github.com/fflughiraeth/userjs/
// @version      0.1
// @description  Modify ChordWiki URLs as needed
// @author       fflughiraeth
// @match        https://ja.chordwiki.org/wiki/*
// @match        https://ja.chordwiki.org/wiki.cgi*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    /**
     e.g. you prefer flat (b)
    **/
    let your_preferred_symbol = 'flat';
    let your_weak_symbol = 'sharp';

    let url = new URL(window.location.href);
    if(url.searchParams.get('symbol') != your_weak_symbol && url.searchParams.get('symbol') != your_preferred_symbol){
        url.searchParams.set('symbol', your_preferred_symbol);
        location.href = url;
        console.log("accidental: " + your_preferred_symbol);
    }
})();
