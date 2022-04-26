/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

function _w_retail() {
    chrome.runtime.sendMessage(_w_grouch(), {
        type: "_w_pulp",
        fetchLevel: 0
    });
}

function _w_easel(_w_gear) {
    if (!_w_gear) return;
    let _w_scar = window.setInterval((function() {
        for (let idx in _w_gear) {
            let $_w_memoir = $(_w_gear[idx]);
            if ($_w_memoir.length > 0) {
                window.clearInterval(_w_scar);
                let _w_duel = $_w_memoir.get(0).href;
                chrome.runtime.sendMessage(_w_grouch(), {
                    type: "_w_podium",
                    url: _w_duel,
                    action: "_w_retail",
                    createNewTab: false
                });
            }
        }
    }), 256);
}

function _w_gust() {
    _w_easel([ "a[href*='search']:contains('全部尺寸')", "a[href*='search']:contains('所有大小')", "a[href*='search']:contains('All sizes')" ]);
}

function _w_gauge() {
    _w_easel([ "a[href*='search']:contains('外观类似的图片')", "a[href*='search']:contains('看起來相似的圖片')", "a[href*='search']:contains('Visually similar images')" ]);
}

