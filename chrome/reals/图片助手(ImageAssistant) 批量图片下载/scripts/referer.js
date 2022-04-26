/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

function _w_guffaw($_w_marsh) {
    let _w_court = {};
    $_w_marsh.each((function() {
        let _w_loop = $(this).attr("data-src");
        let _w_fume = $(this).attr("data-referer");
        if (_w_loop) {
            _w_court[_w_loop] = _w_fume;
            $(this).attr("data-src", _w_loop);
            _w_court[_w_loop] = _w_fume;
        }
    }));
    if (Object.keys(_w_court).length > 0) {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_cargo",
            refererMap: _w_court
        }, (function callback(data) {
            $_w_marsh.each((function() {
                $(this).on("error", (function() {
                    let _w_blush = $(this).attr("data-src");
                    let $_w_hoax = $(this);
                    $.ajax({
                        method: "get",
                        timeout: _w_votary,
                        url: _w_blush
                    }).fail((function(xhr) {
                        if (xhr.status === 404) {
                            _w_blush = _w_soot(_w_blush);
                            $_w_hoax.attr("data-src", _w_blush);
                        }
                    })).always((function() {
                        setTimeout((function() {
                            $_w_hoax.removeAttr("src").attr("src", _w_blush);
                        }), 2e3);
                    }));
                }));
                if ($(this).attr("src").indexOf("/static/gallery/favorite/image/loading.gif") >= 0 || $(this).attr("src").indexOf("/static/gallery/favorite/image/folder_02.png") >= 0) {
                    $(this).attr("src", $(this).attr("data-src"));
                } else {
                    (new Image).src = $(this).attr("data-src");
                }
            }));
        }));
    }
}

(function() {
    _w_guffaw($("img[data-src]"));
    let _w_freak = new MutationObserver((function(_w_facade) {
        _w_facade.map((function(record) {
            if (record.addedNodes) {
                let _w_wile = {};
                for (let i = 0; i < record.addedNodes.length; ++i) {
                    let _w_tenure = record.addedNodes.item(i);
                    let _w_marsh = $(_w_tenure).find("img").toArray();
                    $(_w_tenure).is("IMG") && _w_marsh.push(_w_tenure);
                    _w_guffaw($(_w_marsh));
                }
            }
        }));
    }));
    let _w_broker = document.body;
    let _w_wrist = {
        childList: true,
        subtree: true
    };
    _w_freak.observe(_w_broker, _w_wrist);
    if ($(".cxyz_btn_edit_folder").length > 0) {
        let $_w_maze = $(".callout_btn_menu");
        let $_w_germ = $("<button />", {
            class: "btn btn-success",
            title: " 标记收藏到此文件夹"
        }).prepend($("<span />", {
            class: "glyphicon glyphicon-map-marker"
        }));
        $_w_maze.append($_w_germ);
        $_w_germ.on("click", (function() {
            let _w_sledge = {};
            _w_sledge.markTime = parseInt((new Date).getTime() / 1e3);
            _w_sledge.categoryId = parseInt($(".cxyz_btn_edit_folder").attr("data-categoryId"));
            _w_sledge.folderId = parseInt($(".cxyz_btn_edit_folder").attr("value"));
            chrome.runtime.sendMessage(chrome.runtime.id, {
                type: "_w_tonic",
                folderMark: JSON.stringify(_w_sledge)
            });
            let $_w_facet = $("<span>(标记成功！)</span>");
            $(this).append($_w_facet);
            setTimeout((function() {
                $_w_facet.remove();
            }), 2e3);
        }));
    }
    if ($("#rs_lt_list").length > 0 || $("#rs_eq_list").length > 0) {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_hulk"
        }, (function(_w_ferry) {
            let $_w_log = $("#rs_lt_list");
            let $_w_pistol = $("#rs_eq_list");
            if (_w_ferry.length > 0) {
                if ($_w_log) $_w_log.append($("<li />", {
                    class: "divider",
                    role: "separator"
                }));
                if ($_w_pistol) $_w_pistol.append($("<li />", {
                    class: "divider",
                    role: "separator"
                }));
            }
            for (let i = 0; i < _w_ferry.length; ++i) {
                let _w_flax = _w_ferry[i];
                let _w_artery = _w_flax.split("x");
                let _w_feint = parseInt(_w_artery[0]);
                let _w_hymn = parseInt(_w_artery[1]);
                if ($_w_log) {
                    let $_w_glut = $("<a />", {
                        class: "rs_lt_item",
                        text: _w_flax,
                        "data-width": _w_feint,
                        "data-height": _w_hymn
                    });
                    $_w_log.append($("<li />").append($_w_glut));
                }
                if ($_w_pistol) {
                    let $_w_flight = $("<a />", {
                        class: "rs_eq_item",
                        text: _w_flax,
                        "data-width": _w_feint,
                        "data-height": _w_hymn
                    });
                    $_w_pistol.append($("<li />").append($_w_flight));
                }
            }
        }));
    }
})();