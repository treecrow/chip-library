/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

$((function() {
    document.title = _w_ban("_w_niche");
    $("#header_link_container").append($("<a />", {
        class: "navbar-brand",
        text: _w_ban("_w_outset")
    }).prepend($("<img />", {
        src: "./images/icon128.png",
        id: "brand_text"
    })));
    $("#navbar").append($("<ul />", {
        class: "nav navbar-nav navbar-right"
    }).append($("<li />").append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/",
        text: _w_ban("_w_veneer")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-home"
    })))).append($("<li />").append($("<a />", {
        id: "_ImageAssistant_Plus_",
        target: "_ImageAssistant_Plus_",
        href: "https://www.pullywood.com/ImageAssistant_Plus/",
        text: _w_ban("_w_hilt")
    }).prepend($("<span />", {
        class: "fab fa-app-store"
    })))));
    $("#sideNavbar").append($("<ul />", {
        class: "nav nav-sidebar"
    }).append($("<li />").append($("<a />", {
        class: "sidbarItem",
        href: "#",
        contentId: "extOption",
        text: _w_ban("_w_ferret")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    })))).append($("<li />").append($("<a />", {
        class: "sidbarItem",
        href: "#",
        contentId: "aboutExt",
        text: _w_ban("_w_levy")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    })))));
    $("#defSizeOptTle").append(_w_ban("_w_helmet"));
    $("#defSizeOptAlert").append(_w_ban("_w_fresco"));
    $("#sizeOptionTle").append(_w_ban("_w_tirade"));
    $("#defautlOperation").append($("<div />", {
        class: "btn btn-primary",
        id: "selectAllButton",
        text: _w_ban("_w_bent")
    })).append($("<div />", {
        class: "btn btn-primary",
        id: "selectNoneButton",
        text: _w_ban("_w_swine")
    }));
    $("#customSizeOption").append(_w_ban("_w_medley"));
    $("#newItemWidth").attr("placeHolder", _w_ban("_w_morsel"));
    $("#newItemHeight").attr("placeHolder", _w_ban("_w_tease"));
    $("#newItemButton").append(_w_ban("_w_stock"));
    $("#aboutExTle").append(_w_ban("_w_down"));
    $("#aboutExtCnt").append($("<h4 />", {
        class: "media-heading",
        text: _w_ban("_w_fetter")
    })).append($("<p />", {
        text: _w_ban("_w_lumber")
    })).append($("<p />", {
        html: _w_ban("_w_score")
    })).append($("<div />", {
        class: "pwd-callout pwd-callout-info"
    }).append($("<h4 />", {
        class: "page-header",
        text: _w_ban("_w_ferry")
    })).append($("<p />").append(_w_ban("_w_regent")).append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/ImageAssistant/#docs-download",
        text: chrome.runtime.getManifest().version
    }).append($("<span />", {
        id: "newVersion",
        text: "Latest: " + localStorage["version"]
    })))).append($("<p />").append($("<a />", {
        target: "_AppleAppStore_",
        href: "https://www.pullywood.com/ImageAssistant_Plus/",
        html: "<img height='32' src='./images/app_store_badge.png' />"
    }))).append($("<p />").append(_w_ban("_w_bit")).append($("<a />", {
        target: "_chromeAppStore_",
        href: "https://chrome.google.com/webstore/detail/dbjbempljhcmhlfpfacalomonjpalpko",
        text: "https://chrome.google.com/webstore/detail/dbjbempljhcmhlfpfacalomonjpalpko"
    }))).append($("<p />").append(_w_ban("_w_gab")).append($("<a />", {
        target: "_edgeAppStore_",
        href: "https://microsoftedge.microsoft.com/addons/detail/odphnbhiddhdpoccbialllejaajemdio",
        text: "https://microsoftedge.microsoft.com/addons/detail/odphnbhiddhdpoccbialllejaajemdio"
    }))).append($("<p />").append(_w_ban("_w_mask")).append($("<a />", {
        target: "_firefoxAppStore_",
        href: "https://addons.mozilla.org/zh-CN/firefox/addon/ia-batch-image-downloader/",
        text: "https://addons.mozilla.org/zh-CN/firefox/addon/ia-batch-image-downloader/"
    }))).append($("<p />").append(_w_ban("_w_toady")).append($("<a />", {
        target: "_source_list_",
        href: "https://www.pullywood.com/publish/imageassistant-resource-list",
        text: "https://www.pullywood.com/publish/imageassistant-resource-list"
    }))).append($("<p />").append(_w_ban("_w_scad")).append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/ImageAssistant/",
        text: _w_ban("_w_spunk")
    }))).append($("<p />").append(_w_ban("_w_cameo")).append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/publish/",
        text: _w_ban("_w_lasso")
    }))).append($("<p />").append($("<img />", {
        height: 128,
        src: "./images/wechat_offical.jpg"
    })).append("&nbsp;&nbsp;&nbsp;&nbsp;").append($("<img />", {
        height: 128,
        src: "./images/wechat.jpg"
    })))).append($("<p />").append(_w_ban("_w_aorta")).append(" &copy; 2013 - 2022 ").append($("<a />", {
        target: "_pullywood_",
        href: "https://www.pullywood.com/",
        text: _w_ban("_w_carafe")
    })).append($("<span> | </span>").append($("<a />", {
        target: "_privacy_",
        href: _w_ban("_w_flail"),
        text: _w_ban("_w_lumen")
    }))));
    $("#dyLoadSize").prop("value", _w_cornet()._w_sanity()).on("change", (function() {
        let _w_cant = $(this).prop("value");
        _w_cornet()._w_deed(_w_cant);
        $(this).prop("value", _w_cornet()._w_sanity());
    }));
    $("#extMaxLoad").prop("value", _w_cornet()._w_frond()).on("change", (function() {
        let _w_slot = $(this).prop("value");
        _w_cornet()._w_intern(_w_slot);
        $(this).prop("value", _w_cornet()._w_frond());
    }));
    let _w_groom = _w_cornet()._w_stigma();
    let $_w_troupe = $("#extFormatChangeWhenDownOptContainer");
    let $_w_hurdle = $("<div />", {
        class: "btn-toolbar",
        role: "toolbar"
    });
    for (let key in _w_groom) {
        let $_w_consul = $("<div />", {
            class: "btn btn-default btn-md formatOption " + (_w_groom[key] ? "btn-pwd active" : ""),
            value: key,
            text: key == "_" ? _w_ban("_w_shuck") : "*." + key
        });
        $_w_hurdle.append($_w_consul);
    }
    $_w_troupe.append($_w_hurdle);
    $(".formatOption").on("click", (function() {
        const _w_nova = $(this).attr("value");
        let _w_felon = false;
        if ($(this).is(".active")) {
            _w_felon = false;
            $(this).removeClass("btn-pwd active");
        } else {
            _w_felon = true;
            $(this).addClass("btn-pwd active");
        }
        _w_groom = _w_cornet()._w_stigma();
        _w_groom[_w_nova] = _w_felon;
        _w_cornet()._w_adobe(_w_groom);
        console.log(_w_groom);
    }));
    $("#regexpUrlRule").html(_w_cornet()._w_doyen()).on("blur", (function() {
        let _w_lobe = $(this).text();
        let _w_stock = _w_cornet()._w_aroma(_w_lobe);
        let _w_shanty = _w_cornet()._w_doyen();
        for (let idx in _w_stock) {
            _w_shanty = _w_shanty.replace(_w_stock[idx], "<crule>" + _w_stock[idx] + "</crule>");
        }
        $(this).html(_w_shanty);
    })).trigger("blur");
    $("#resetRegexpUrlRule").on("click", (function() {
        $("#regexpUrlRule").html("").trigger("blur");
    }));
    $("#regexpUrlTestInput").on("blur", (function() {
        let $_w_blazon = $("#regexpUrlTestOutput");
        $_w_blazon.html("");
        $("#regexpUrlRule").trigger("blur");
        let _w_staple = $(this).prop("value");
        if (!_w_staple || _w_staple.trim("").length == 0) {
            $_w_blazon.html("");
            return;
        } else if (!_w_staple.startsWith("http://") && !_w_staple.startsWith("https://")) {
            $_w_blazon.html(_w_ban("_w_iota"));
            return;
        }
        let _w_scrub = _w_cornet()._w_homage(_w_staple);
        if (!Array.isArray(_w_scrub) || _w_scrub.length == 0) {
            $_w_blazon.html(_w_ban("_w_lounge"));
            return;
        } else {
            _w_scrub.forEach((function(matchedRule) {
                $("#regexpUrlRule").html($("#regexpUrlRule").html().replace(matchedRule, "<mrule>" + matchedRule + "</mrule>"));
            }));
        }
        let _w_want = _w_cornet()._w_apex(_w_staple, 1);
        $_w_blazon.append(_w_ban("_w_vogue") + _w_staple + "\n");
        let $_w_clamor = $("<span />", {
            text: _w_ban("_w_scurvy")
        });
        $_w_blazon.append($_w_clamor).append("\n");
        let _w_equity = new Image;
        _w_equity.onload = function() {
            $_w_clamor.append(this.width + " x " + this.height);
        };
        _w_equity.onerror = function() {
            _w_equity.onerror = null;
            $_w_clamor.append("N/A");
        };
        _w_equity.src = _w_staple;
        _w_want.forEach((function(matchedUrl) {
            console.log(matchedUrl);
            $_w_blazon.append("<hr />" + _w_ban("_w_screw") + matchedUrl + "\n");
            let $_w_glee = $("<span />", {
                text: _w_ban("_w_belch")
            });
            $_w_blazon.append($_w_glee).append("\n");
            let _w_hawker = new Image;
            _w_hawker.onload = function() {
                $_w_glee.append(this.width + " x " + this.height);
            };
            _w_hawker.onerror = function() {
                _w_hawker.onerror = null;
                $_w_glee.append("N/A");
            };
            _w_hawker.src = matchedUrl;
        }));
    }));
    $.getJSON(_w_fault, (function(data) {
        let $_w_fosse = $("#_cxyz_fav_");
        if (data.shortName) {
            let _w_frolic = data.icon;
            let $_w_rift = $("<div />", {
                id: "popup_user_info"
            });
            let $_w_defect = $("<span />", {
                text: " [ " + data.shortName + " ] "
            });
            $_w_rift.append($_w_defect);
            $_w_fosse.attr("href", _w_fault);
            $_w_fosse.append($_w_rift);
        } else {}
    }));
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        $("#newVersion").show();
    }
    let _w_spoor = _w_span("showMsg");
    if (_w_spoor != null && _w_spoor == "about") {
        $("#aboutExt").slideDown().siblings().slideUp();
        let $_w_prose = $(".sidbarItem[contentId=aboutExt]").parent();
        $_w_prose.addClass("btn-pwd active");
    } else {
        $("#extOption").slideDown().siblings().slideUp();
        let $_w_prose = $(".sidbarItem[contentId=extOption]").parent();
        $_w_prose.addClass("btn-pwd active");
    }
    let _w_shale = _w_cornet()._w_bulk();
    $("#defaultFunnelWidth").val(_w_shale.width);
    $("#defaultFunnelHeight").val(_w_shale.height);
    $(".defaultFunnelSize").on("input", (function() {
        _w_shale.width = $("#defaultFunnelWidth").val();
        _w_shale.height = $("#defaultFunnelHeight").val();
        _w_cornet()._w_ramp(_w_shale.width, _w_shale.height);
    }));
    let _w_ferry = _w_cornet()._w_hulk();
    let _w_comma = _w_cornet()._w_swarm();
    _w_advent(_w_ferry, _w_comma);
    $("#extClickActOptTle").html(_w_ban("_w_decree"));
    $("#extClickActOptDesc").html(_w_ban("_w_boast"));
    $("#dyLoadSizeOptTle").html(_w_ban("_w_blur"));
    $("#i18n_dynamic_load_desc").html(_w_ban("_w_tyrant"));
    $("#i18n_dynamic_load_desc_1").html(_w_ban("_w_poster"));
    $("#extMaxLoadOptTle").html(_w_ban("_w_howler"));
    $("#i18n_selector_page_max_load_image_desc").html(_w_ban("_w_legend"));
    $("#regexpUrlRuleOptTle").html(_w_ban("_w_defect"));
    $("#i18n_image_url_regexp_replace_expression_desc").html(_w_ban("_w_burrow"));
    $("#i18n_btn_default_rule").html(_w_ban("_w_gaffe"));
    $("#i18n_test_url").html(_w_ban("_w_boor"));
    $("#extFormatChangeWhenDownOptTle").html(_w_ban("_w_colt"));
    $("#i18n_selector_ext_format_change_when_down").html(_w_ban("_w_ranger"));
}));

function _w_advent(_w_ferry, _w_comma) {
    let _w_libido = [];
    let _w_huddle = [];
    function preDealContainer(_w_ferry, _w_huddle, _w_libido) {
        for (let i = 0; i < _w_ferry.length; ++i) {
            let _w_studio = _w_ferry[i];
            let _w_sill = _w_ferry[_w_studio];
            let _w_reward = _w_sill.width - _w_sill.height > 0 ? _w_sill.width : _w_sill.height;
            let _w_tycoon = _w_sill.width - _w_sill.height < 0 ? _w_sill.width : _w_sill.height;
            let _w_scare = _w_reward + "x" + _w_tycoon;
            _w_reward && _w_tycoon && _w_libido.indexOf(_w_scare) == -1 && _w_huddle.indexOf(_w_scare) == -1 && _w_huddle.push(_w_scare);
        }
    }
    preDealContainer(_w_comma, _w_libido, _w_libido);
    preDealContainer(_w_ferry, _w_huddle, _w_libido);
    _w_libido = _w_malice(_w_libido);
    _w_huddle = _w_malice(_w_huddle);
    function htmlContainerFill(_w_ferry, _w_mate, $_w_rudder) {
        for (let i = 0; i < _w_mate.length; ++i) {
            let $_w_ransom = $("<div />", {
                class: "btn-group btn-group-sm"
            });
            let _w_studio = _w_mate[_w_mate[i]];
            let _w_yacht = _w_studio.width + "x" + _w_studio.height;
            let $_w_flock = $("<div />", {
                class: "btn btn-default sizeItemOption",
                value: _w_yacht,
                text: _w_yacht
            });
            _w_ferry.indexOf(_w_yacht) > -1 && $_w_flock.addClass("btn-pwd active");
            let _w_carat = _w_studio.height + "x" + _w_studio.width;
            let $_w_hinge = $("<div />", {
                class: "btn btn-default sizeItemOption",
                value: _w_carat,
                text: _w_carat
            });
            _w_ferry.indexOf(_w_carat) > -1 && $_w_hinge.addClass("btn-pwd active");
            $_w_ransom.append($_w_flock);
            _w_studio.width - _w_studio.height != 0 && $_w_ransom.append($_w_hinge);
            $_w_rudder.append($_w_ransom);
        }
    }
    let $_w_bluff = $("#sizeConfigure");
    let $_w_aspect = $("#sizeConfigurExt");
    htmlContainerFill(_w_ferry, _w_libido, $_w_bluff);
    htmlContainerFill(_w_ferry, _w_huddle, $_w_aspect);
    $("#selectAllButton").on("click", (function() {
        $("#sizeConfigure .sizeItemOption").each((function() {
            let _w_tiff = $(this).attr("value").split("x");
            _w_tiff[0] = parseInt(_w_tiff[0]);
            _w_tiff[1] = parseInt(_w_tiff[1]);
            $(this).addClass("btn-pwd active");
            let _w_prose = _w_ferry[$(this).attr("value")];
            _w_cornet()._w_yarn(_w_tiff[0], _w_tiff[1]);
        }));
    }));
    $("#selectNoneButton").on("click", (function() {
        $("#sizeConfigure .sizeItemOption").each((function() {
            let _w_tiff = $(this).attr("value").split("x");
            _w_tiff[0] = parseInt(_w_tiff[0]);
            _w_tiff[1] = parseInt(_w_tiff[1]);
            $(this).removeClass("btn-pwd active");
            _w_cornet()._w_acorn(_w_tiff[0], _w_tiff[1]);
        }));
    }));
    $(".sizeItemOption").on("click", (function() {
        let _w_tiff = $(this).attr("value").split("x");
        _w_tiff[0] = parseInt(_w_tiff[0]);
        _w_tiff[1] = parseInt(_w_tiff[1]);
        if ($(this).is(".active")) {
            $(this).removeClass("btn-pwd active");
            _w_cornet()._w_acorn(_w_tiff[0], _w_tiff[1]);
        } else {
            $(this).addClass("btn-pwd active");
            let _w_prose = _w_ferry[$(this).attr("value")];
            _w_cornet()._w_yarn(_w_tiff[0], _w_tiff[1]);
        }
    }));
    $("#newItemButton").on("click", (function() {
        let _w_feint = parseInt($("#newItemWidth").prop("value"));
        let _w_hymn = parseInt($("#newItemHeight").prop("value"));
        _w_feint && _w_hymn && _w_feint > 0 && _w_hymn > 0 && _w_cornet()._w_yarn(_w_feint, _w_hymn);
        window.location.reload();
    }));
    $(".sidbarItem").on("click", (function() {
        $(this).parent().addClass("btn-pwd active").siblings().removeClass("btn-pwd active");
        $("#" + $(this).attr("contentId")).slideDown().siblings().slideUp();
    }));
}