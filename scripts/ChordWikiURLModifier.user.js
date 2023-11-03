// ==UserScript==
// @name         ChordWiki accidental url modifier
// @namespace    https://github.com/fflughiraeth/userjs/
// @version      0.1.1
// @description  Modify ChordWiki URLs as needed
// @author       fflughiraeth
// @match        https://ja.chordwiki.org/wiki/*
// @match        https://ja.chordwiki.org/wiki.cgi*
// @grant        none
// @updateURL    https://github.com/fflughiraeth/userjs/raw/main/scripts/ChordWikiURLModifier.user.js
// @downloadURL  https://github.com/fflughiraeth/userjs/raw/main/scripts/ChordWikiURLModifier.user.js
// @noframes
// ==/UserScript==

/**
Chordwiki の曲ページを開いたタイミングで、自動的に臨時記号 flat を選んでリロードします。
(Chordwiki Plus などの) Chordwiki の曲ページをいじるような拡張やスクリプトとは衝突するかもです。

臨時記号に # を好む方は、下の your_preferred_symbol, your_weak_symbol を入れ替えてください。

**/

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
