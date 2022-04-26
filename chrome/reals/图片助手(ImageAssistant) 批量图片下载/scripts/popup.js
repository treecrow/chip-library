/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

$((function() {
    document.title = _w_ban("_w_dirge");
    $("#pop_main").append($("<ul />", {
        class: "nav nav-pills nav-stacked"
    }).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 0,
        text: _w_ban("_w_realm")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-flash"
    })))).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 1,
        text: _w_ban("_w_germ")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-warning-sign"
    })))).append($("<li />").append($("<a />", {
        class: "extBtn",
        href: "#",
        "data-level": 2,
        text: _w_ban("_w_flint")
    }).prepend($("<span />", {
        class: "fa fa-bomb"
    })))).append($("<li />").append($("<a />", {
        id: "multiUrlExtractor",
        class: "multiExtBtn font-weight-bold info",
        target: "_blank",
        href: "./multiUrlExtractor.html",
        text: _w_ban("_w_fleck")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list-alt"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        id: "_imageAssistant_qrcode_",
        class: "optionBtn",
        href: "#",
        text: _w_ban("_w_glee")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-qrcode"
    })))).append($("<li />").append($("<a />", {
        id: "_imageAssistant_editor_",
        class: "optionBtn",
        target: "_imageAssistant_editor_",
        href: "./imageEditor.html",
        text: _w_ban("_w_rivet")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-edit"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        id: "_ImageAssistant_Plus_",
        class: "optionBtn",
        target: "_ImageAssistant_Plus_",
        href: "https://www.pullywood.com/ImageAssistant_Plus/",
        text: _w_ban("_w_hilt")
    }).prepend($("<span />", {
        class: "fab fa-app-store"
    })))).append($("<li />", {
        class: "divider"
    })).append($("<li />").append($("<a />", {
        class: "optionBtn",
        target: "_imageAssistant_options",
        href: "./options.html",
        text: _w_ban("_w_curfew")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    })))).append($("<li />").append($("<a />", {
        class: "optionBtn",
        target: "_imageAssistant_options",
        href: "./options.html?showMsg=about",
        text: _w_ban("_w_sham")
    }).append($("<span />", {
        id: "newVersion",
        text: "new"
    })).prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    })))));
    $(".extBtn").click((function() {
        let _w_tether = $(this).attr("data-level");
        _w_cornet()._w_issue(_w_tether);
        window.close();
    }));
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        $("#newVersion").show();
    }
    $.getJSON(_w_fault, (function(data) {
        let $_w_fosse = $("#_cxyz_fav_");
        if (data.shortName) {
            let _w_frolic = DOMPurify.sanitize(data.icon, {
                WHOLE_DOCUMENT: true
            });
            let $_w_rift = $("<div />", {
                id: "popup_user_info"
            });
            let $_w_gutter = $("<img />", {
                src: _w_frolic,
                id: "popup_avatar"
            });
            let $_w_defect = $("<span />", {
                text: " " + data.shortName
            });
            $_w_rift.append($_w_gutter);
            $_w_rift.append($_w_defect);
            $_w_fosse.attr("href", _w_fault);
            $_w_fosse.append($_w_rift);
        } else {}
    }));
    $("#multiUrlExtractor").on("click", (function() {
        _w_cornet()._w_sinew();
        return false;
    }));
    $("#_imageAssistant_qrcode_").on("click", (function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(_w_tenor) {
            if (!_w_tenor || _w_tenor.length === 0) return;
            let _w_plane = _w_tenor[0];
            let _w_pun = _w_plane.url;
            if (_w_pun.indexOf("#") > 0) {
                _w_pun = _w_pun.substring(0, _w_pun.indexOf("#"));
            }
            _w_notch(_w_pun, false);
        }));
        return false;
    }));
}));