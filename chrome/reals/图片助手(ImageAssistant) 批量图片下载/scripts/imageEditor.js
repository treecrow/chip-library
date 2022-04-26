/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_plague = null;

window._w_kiosk = "";

window._w_belch = null;

window._w_gum = null;

window._w_flare = null;

window._w_rein = [];

window._w_clown = null;

window._w_ritual = null;

window._w_rancor = null;

window._w_pauper = null;

window._w_gravel = null;

chrome.tabs.getCurrent((function(tab) {
    window._w_clown = tab.id;
    $(initEditor);
}));

window._w_armory = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

window._w_crack = {
    timeout: 2048,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

function _w_sage(_w_valor, _w_knoll) {
    let _w_leash = "";
    if (!_w_valor.startsWith("data:image")) {
        let _w_skein = {};
        _w_skein[_w_valor] = _w_knoll;
        _w_cornet()._w_pastor(_w_skein, _w_clown, true);
        _w_leash = _w_valor.substring(_w_valor.lastIndexOf("/") + 1);
    } else {
        _w_leash = "ia_" + _w_myopia(16) + ".png";
    }
    _w_avowal(_w_valor, _w_leash, false, false);
}

function _w_mural(_w_valor, _w_knoll) {
    if (!_w_valor.startsWith("data:image")) {
        let _w_skein = {};
        _w_skein[_w_valor] = _w_knoll;
        _w_cornet()._w_pastor(_w_skein, _w_clown, true);
        $("#watermarkImageUrl").prop("value", _w_valor).attr("data-referer", _w_knoll);
    }
    chrome.tabs.update(_w_clown, {
        active: true
    }, (function(tab) {
        chrome.windows.update(tab.windowId, {
            focused: true,
            drawAttention: false
        }, (function(window) {}));
    }));
    _w_grit(_w_valor, false);
}

function _w_avowal(_w_valor, _w_leash, _w_aorta, _w_clause) {
    if (!_w_plague) _w_plague = new Image;
    if (_w_aorta) {
        _w_gag(_w_plague, _w_leash, _w_clause);
    } else {
        _w_plague.onload = function() {
            if (!_w_aorta) {
                $("#scaleRate").prop("value", 1);
                $("#scWidth").prop("value", _w_plague.width);
                $("#scWidth").attr("max", _w_plague.width);
                $("#scHeight").prop("value", _w_plague.height);
                $("#scHeight").attr("max", _w_plague.height);
                window._w_kiosk = _w_leash;
            }
            _w_gag(this, _w_leash, _w_clause);
        };
        _w_plague.src = _w_valor;
    }
}

function _w_grit(_w_effigy, _w_aorta) {
    if (!_w_pauper) _w_pauper = new Image;
    if (_w_aorta) {
        _w_layman();
    } else {
        _w_pauper.onload = function() {
            if (!_w_aorta) {
                $("#wmImageCutUp").prop("value", null);
                $("#wmImageCutRight").prop("value", null);
                $("#wmImageCutDown").prop("value", null);
                $("#wmImageCutLeft").prop("value", null);
                $("#watermarkScaleRate").prop("value", 1);
                $("#wmScWidth").attr("max", _w_pauper.width).prop("value", _w_pauper.width);
                $("#wmScHeight").attr("max", _w_pauper.height).prop("value", _w_pauper.height);
                $("#brToAlpha").prop("checked", false);
                $("#brToAlphaReverse").prop("checked", false).prop("disabled", true);
                $("#pixelAlphaRateRange").prop("value", 1).prop("disabled", true);
                if (_w_effigy == window._w_ritual.watermarkImageUrl) {
                    $("#wmImageCutUp").prop("value", window._w_ritual.imageCutUp);
                    $("#wmImageCutRight").prop("value", window._w_ritual.imageCutRight);
                    $("#wmImageCutDown").prop("value", window._w_ritual.imageCutDown);
                    $("#wmImageCutLeft").prop("value", window._w_ritual.imageCutLeft);
                    $("#watermarkScaleRate").prop("value", window._w_ritual.watermarkImageWidth / _w_pauper.watermarkImageHeight);
                    $("#wmScWidth").prop("value", window._w_ritual.watermarkImageWidth);
                    $("#wmScHeight").prop("value", window._w_ritual.watermarkImageHeight);
                    $("#brToAlpha").prop("checked", window._w_ritual.brToAlpha);
                    $("#brToAlphaReverse").prop("checked", window._w_ritual.brToAlphaReverse).prop("disabled", window._w_ritual.brToAlpha ? false : true);
                    $("#pixelAlphaRateRange").prop("value", window._w_ritual.pixelAlphaRateRange).prop("disabled", window._w_ritual.brToAlpha ? false : true);
                }
            }
            _w_layman();
        };
        _w_pauper.src = _w_effigy;
    }
}

function _w_robe() {
    let _w_dither = $("#qrCodeFgColor").prop("value");
    let _w_chip = $("#qrCodeBgColor").prop("value");
    let _w_badge = _w_rhyme(_w_chip);
    let _w_peril = parseInt($("#qrCodeAlpha").prop("value")) / 100;
    _w_chip = "RGBA(" + _w_badge.r + ", " + _w_badge.g + ", " + _w_badge.b + ", " + _w_peril + ")";
    let _w_smart = $("#qrCodeSize").prop("value");
    let _w_goblet = $("#qrCodeText").prop("value");
    window._w_gravel = _w_crag(_w_goblet, _w_smart, _w_dither, _w_chip);
    setTimeout(_w_layman, 256);
}

function _w_wallow() {
    if (!window._w_ritual) window._w_ritual = {};
    let _w_sonata = window._w_ritual;
    _w_sonata.textWatermark = $(".typeMenuItem.textWatermark").is(".active");
    _w_sonata.imageWatermark = $(".typeMenuItem.imageWatermark").is(".active");
    _w_sonata.qrCodeWatermark = $(".typeMenuItem.qrCodeWatermark").is(".active");
    _w_sonata.font = $("select#fontSelecter option:selected").prop("value");
    _w_sonata.fontSize = parseInt($("#fontSize").prop("value"));
    _w_sonata.fontColor = $("#fontColor").prop("value");
    _w_sonata.fontAlpha = parseInt($("#fontAlpha").prop("value"));
    _w_sonata.borderFont = $("#borderFont:checkbox").is(":checked");
    _w_sonata.text = $("#watermarkText").prop("value");
    _w_sonata.imageAlpha = parseInt($("#imageAlpha").prop("value"));
    if (_w_pauper && _w_tack(_w_pauper.src)) {
        _w_sonata.watermarkImageUrl = $("#watermarkImageUrl").prop("value");
        _w_sonata.watermarkImageReferer = $("#watermarkImageReferer").attr("data-referer");
        _w_sonata.imageCutUp = $("#wmImageCutUp").prop("value");
        _w_sonata.imageCutRight = $("#wmImageCutRight").prop("value");
        _w_sonata.imageCutDown = $("#wmImageCutDown").prop("value");
        _w_sonata.imageCutLeft = $("#wmImageCutLeft").prop("value");
        _w_sonata.watermarkImageWidth = $("#wmScWidth").prop("value");
        _w_sonata.watermarkImageHeight = $("#wmScHeight").prop("value");
        _w_sonata.brToAlpha = $("#brToAlpha").prop("checked");
        _w_sonata.brToAlphaReverse = $("#brToAlphaReverse").prop("checked");
        _w_sonata.pixelAlphaRateRange = $("#pixelAlphaRateRange").prop("value");
    }
    _w_sonata.qrCodeFgolor = $("#qrCodeFgColor").prop("value");
    _w_sonata.qrCodeBgolor = $("#qrCodeBgColor").prop("value");
    _w_sonata.qrCodeSize = $("#qrCodeSize").prop("value");
    _w_sonata.qrCodeAlpha = parseInt($("#qrCodeAlpha").prop("value"));
    _w_sonata.qrCodeBorder = parseInt($("#qrCodeBorder").prop("value"));
    _w_sonata.qrCodeText = $("#qrCodeText").prop("value");
    _w_sonata.tileWatermark = $(".presentationMenuItem.tileWatermark").is(".active");
    _w_sonata.locationWatermark = $(".presentationMenuItem.locationWatermark").is(".active");
    _w_sonata.offsetX = parseInt($("#offsetX").prop("value"));
    _w_sonata.offsetY = parseInt($("#offsetY").prop("value"));
    _w_sonata.marginX = parseInt($("#marginX").prop("value"));
    _w_sonata.marginY = parseInt($("#marginY").prop("value"));
    _w_sonata.rotate = parseInt($("#rotation").prop("value"));
    _w_sonata.alignX = parseInt($("#alignX").prop("value"));
    _w_sonata.alignY = parseInt($("#alignY").prop("value"));
    _w_sonata.middleAlignX = $("#middleAlignX").is(":checked");
    _w_sonata.middleAlignY = $("#middleAlignY").is(":checked");
    localStorage["watermarkConfigure"] = JSON.stringify(_w_sonata);
    window._w_ritual = _w_sonata;
}

function _w_laity() {
    let _w_sonata = localStorage["watermarkConfigure"];
    if (_w_sonata && _w_sonata.length > 0) {
        _w_sonata = JSON.parse(_w_sonata);
        $("select#fontSelecter option[value='" + _w_sonata.font + "']").attr("selected", true);
        $("#fontSizeRange,#fontSize").prop("value", _w_sonata.fontSize);
        $("#fontColor").prop("value", _w_sonata.fontColor);
        $("#fontAlphaRange,#fontAlpha").prop("value", _w_sonata.fontAlpha);
        $("#borderFont:checkbox").prop("checked", _w_sonata.borderFont);
        $("#middleAlignX").prop("checked", _w_sonata.middleAlignX);
        $("#middleAlignY").prop("checked", _w_sonata.middleAlignY);
        $("#watermarkText").prop("value", _w_sonata.text);
        $("#imageAlphaRange,#imageAlpha").prop("value", _w_sonata.imageAlpha);
        if (_w_sonata.watermarkImageUrl && _w_tack(_w_sonata.watermarkImageUrl)) {
            $("#watermarkImageUrl").prop("value", _w_sonata.watermarkImageUrl);
            $("#watermarkImageReferer").attr("data-referer", _w_sonata.watermarkImageReferer);
            $("#wmImageCutUp").prop("value", _w_sonata.imageCutUp);
            $("#wmImageCutRight").prop("value", _w_sonata.imageCutRight);
            $("#wmImageCutDown").prop("value", _w_sonata.imageCutDown);
            $("#wmImageCutLeft").prop("value", _w_sonata.imageCutLeft);
            $("#wmScWidth").prop("value", _w_sonata.watermarkImageWidth);
            $("#wmScHeight").prop("value", _w_sonata.watermarkImageHeight);
            $("#brToAlpha").prop("checked", _w_sonata.brToAlpha);
            $("#brToAlphaReverse").prop("checked", _w_sonata.brToAlphaReverse).prop("disabled", _w_sonata.brToAlpha ? false : true);
            $("#pixelAlphaRateRange").prop("value", _w_sonata.pixelAlphaRateRange).prop("disabled", _w_sonata.brToAlpha ? false : true);
        }
        $("#qrCodeFgColor").prop("value", _w_sonata.qrCodeFgolor);
        $("#qrCodeBgColor").prop("value", _w_sonata.qrCodeBgolor);
        $("#qrCodeSizeRange,#qrCodeSize").prop("value", _w_sonata.qrCodeSize);
        $("#qrCodeAlphaRange,#qrCodeAlpha").prop("value", _w_sonata.qrCodeAlpha);
        $("#qrCodeBorderRange,#qrCodeBorder").prop("value", _w_sonata.qrCodeBorder);
        $("#qrCodeText").prop("value", _w_sonata.qrCodeText);
        $("#offsetXRange,#offsetX").prop("value", _w_sonata.offsetX);
        $("#offsetYRange,#offsetY").prop("value", _w_sonata.offsetY);
        $("#marginXRange,#marginX").prop("value", _w_sonata.marginX);
        $("#marginYRange,#marginY").prop("value", _w_sonata.marginY);
        $("#rotationRange,#rotation").prop("value", _w_sonata.rotate);
        $("#alignXRange,#alignX").prop("value", _w_sonata.alignX);
        $("#alignYRange,#alignY").prop("value", _w_sonata.alignY);
        if (_w_sonata.watermarkImageUrl && _w_sonata.watermarkImageUrl.length > 0) {
            if (!_w_sonata.watermarkImageUrl.startsWith("data:image")) {
                let _w_skein = {};
                _w_skein[_w_sonata.watermarkImageUrl] = _w_sonata.watermarkImageReferer;
                _w_cornet()._w_pastor(_w_skein, _w_clown, true);
            }
            _w_grit(_w_sonata.watermarkImageUrl, false);
        }
        if (_w_sonata.textWatermark) {
            $(".typeMenuItem.textWatermark").trigger("click");
        } else if (_w_sonata.imageWatermark) {
            $(".typeMenuItem.imageWatermark").trigger("click");
        } else if (_w_sonata.qrCodeWatermark) {
            $(".typeMenuItem.qrCodeWatermark").trigger("click");
        }
        if (_w_sonata.tileWatermark) {
            $(".presentationMenuItem.tileWatermark").trigger("click");
        } else if (_w_sonata.locationWatermark) {
            $(".presentationMenuItem.locationWatermark").trigger("click");
        }
        window._w_ritual = _w_sonata;
    } else {
        _w_curfew();
    }
}

function _w_curfew() {
    let _w_sonata = {
        textWatermark: true,
        imageWatermark: false,
        qrCodeWatermark: false,
        font: "微软雅黑",
        fontSize: 32,
        fontColor: "#000000",
        fontAlpha: 50,
        borderFont: false,
        text: _w_ban("_w_thorn"),
        imageAlpha: 50,
        watermarkImageUrl: "https://www.pullywood.com/ImageAssistant/images/logo.png",
        watermarkImageReferer: "https://www.pullywood.com/",
        imageCutUp: null,
        imageCutRight: null,
        imageCutDown: null,
        imageCutLeft: null,
        watermarkImageWidth: 128,
        watermarkImageHeight: 128,
        brToAlpha: true,
        brToAlphaReverse: false,
        pixelAlphaRateRange: 1,
        qrCodeFgolor: "#008000",
        qrCodeBgolor: "#ffffff",
        qrCodeSize: 128,
        qrCodeAlpha: 32,
        qrCodeBorder: 10,
        qrCodeText: "https://www.pullywood.com/ImageAssistant/",
        tileWatermark: true,
        locationWatermark: false,
        offsetX: 0,
        offsetY: 0,
        marginX: 32,
        marginY: 32,
        rotate: -30,
        alignX: -20,
        alignY: -20,
        middleAlignX: false,
        middleAlignY: false
    };
    localStorage["watermarkConfigure"] = JSON.stringify(_w_sonata);
    _w_laity();
}

function _w_layman() {
    if (!_w_plague) return;
    _w_cynic(window._w_armory, (function() {
        _w_avowal(_w_plague.src, _w_kiosk, true, false);
    }), false);
    _w_wallow();
}

function _w_squall() {
    if (!_w_pauper || !_w_plague) return;
    _w_cynic(window._w_armory, (function() {
        _w_grit(_w_plague.src, true);
    }), false);
    _w_wallow();
}

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_reed" && _w_sage(message._w_condor, message._w_panel);
    message && message.type == "_w_epic" && _w_mural(message._w_condor, message._w_panel);
}));

function initEditor() {
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
    $("#imageLoader,#multipleImageInput").attr("accept", "image/" + "*");
    document.onpaste = function(event) {
        let _w_ruck = event.clipboardData.items[0].getAsFile();
        if (!_w_ruck.type || !_w_ruck.type.startsWith("image")) return;
        let _w_belch = new FileReader;
        _w_belch.onload = function(event) {
            _w_avowal(event.target.result, _w_scale(16), false, false);
        };
        _w_belch.readAsDataURL(_w_ruck);
    };
    chrome.fontSettings && chrome.fontSettings.getFontList((function populateFontList(fontArr) {
        fontArr.sort().reverse();
        for (let key in fontArr) {
            let _w_shard = fontArr[key].displayName;
            _w_shard = _w_shard.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            if (_w_shard.match(/[_\-\s]Italic$/) || _w_shard.match(/[_\-\s](Demi)?[Bb]old$/) || _w_shard.match(/[_\-\s]Medium$/) || _w_shard.match(/[_\-\s](Ultra)?[Ll]ight$/) || _w_shard.match(/[_\-\s]Condensed$/)) _w_rein.push(_w_shard); else {
                _w_rein.push(_w_shard);
            }
        }
        let $_w_lore = $("#fontSelecter");
        for (let i = 0; i < _w_rein.length; ++i) {
            let _w_shard = _w_rein[i];
            $_w_lore.append($("<option />", {
                value: _w_shard,
                text: _w_shard,
                style: "font-family:" + _w_shard + ";",
                selected: window._w_ritual && window._w_ritual.font && window._w_ritual.font == _w_shard
            }));
        }
    }));
    $(window).on("resize", _w_layman);
    $("#imageLoader").on("change", (function(funEvent) {
        let _w_lapse = $(this).get(0).files;
        if (_w_lapse.length == 0) return;
        let _w_foul = _w_lapse[0];
        let $_w_foil = $(this);
        if (!_w_belch) _w_belch = new FileReader;
        _w_belch.onload = function(event) {
            _w_avowal(event.target.result, _w_foul.name, false, false);
        };
        _w_belch.readAsDataURL(_w_foul);
    }));
    $("#scaleRate,#scWidth,#scHeight").on("change", (function() {
        let _w_nil = parseFloat($("#scaleRate").prop("value"));
        let _w_swing = parseInt($("#scWidth").prop("value"));
        let _w_plight = parseInt($("#scHeight").prop("value"));
        let _w_opiate = parseInt($("#scWidth").prop("max"));
        let _w_skiff = parseInt($("#scHeight").prop("max"));
        if ($(this).is("#scaleRate")) {
            _w_swing = Math.round(_w_opiate * _w_nil);
            _w_plight = Math.round(_w_skiff * _w_nil);
        } else if ($(this).is("#scWidth")) {
            _w_nil = _w_swing / _w_opiate;
            _w_plight = Math.round(_w_skiff * _w_nil);
        } else if ($(this).is("#scHeight")) {
            _w_nil = _w_plight / _w_skiff;
            _w_swing = Math.round(_w_opiate * _w_nil);
        } else {
            return;
        }
        $("#scaleRate").prop("value", _w_nil);
        $("#scWidth").prop("value", _w_swing);
        $("#scHeight").prop("value", _w_plight);
        _w_layman();
    }));
    $(".typeMenuItem").on("click", (function() {
        $(".typeMenuItem").removeClass("active");
        $(this).addClass("active");
        $(".typeMenuTab").hide();
        if ($(this).is(".textWatermark")) {
            $(".typeMenuTab.textWatermark").show();
            _w_layman();
        } else if ($(this).is(".imageWatermark")) {
            $(".typeMenuTab.imageWatermark").show();
            _w_squall();
        } else if ($(this).is(".qrCodeWatermark")) {
            $(".typeMenuTab.qrCodeWatermark").show();
            _w_robe();
        }
    }));
    $("#fontSelecter").on("change", (function() {
        _w_layman();
    }));
    $("#fontSizeRange,#fontSize").on("change", (function() {
        if ($(this).is("#fontSizeRange")) {
            $("#fontSize").prop("value", $(this).prop("value"));
        } else if ($(this).is("#fontSize")) {
            $("#fontSizeRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#fontColor").on("input", (function() {
        _w_layman();
    }));
    $("#fontAlphaRange,#fontAlpha").on("change", (function() {
        if ($(this).is("#fontAlphaRange")) {
            $("#fontAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#fontAlpha")) {
            $("#fontAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#borderFont").on("change", (function() {
        _w_layman();
    }));
    $("#watermarkText").on("change", (function() {
        _w_layman();
    }));
    $("#watermarkImage").on("change", (function(funEvent) {
        let _w_lapse = $(this).get(0).files;
        if (_w_lapse.length == 0) return;
        let _w_foul = _w_lapse[0];
        let $_w_foil = $(this);
        if (!_w_rancor) _w_rancor = new FileReader;
        _w_rancor.onload = function(event) {
            _w_grit(event.target.result, false);
        };
        _w_rancor.readAsDataURL(_w_foul);
    }));
    $("#wmImageCutUp,#wmImageCutRight,#wmImageCutDown,#wmImageCutLeft").on("change", (function() {
        if (_w_pauper == null) return;
        let _w_errand = parseInt($("#wmImageCutUp").prop("value"));
        _w_errand = _w_errand ? _w_errand : 0;
        let _w_mirth = parseInt($("#wmImageCutRight").prop("value"));
        _w_mirth = _w_mirth ? _w_mirth : 0;
        let _w_verse = parseInt($("#wmImageCutDown").prop("value"));
        _w_verse = _w_verse ? _w_verse : 0;
        let _w_mesa = parseInt($("#wmImageCutLeft").prop("value"));
        _w_mesa = _w_mesa ? _w_mesa : 0;
        let _w_opiate = _w_pauper.width - _w_mesa - _w_mirth;
        let _w_skiff = _w_pauper.height - _w_errand - _w_verse;
        $("#wmScWidth").prop("max", _w_opiate);
        $("#wmScHeight").prop("max", _w_skiff);
        $("#watermarkScaleRate").trigger("change");
        _w_layman();
    }));
    $("#watermarkScaleRate,#wmScWidth,#wmScHeight").on("change", (function() {
        if (_w_pauper == null) return;
        let _w_detour = parseFloat($("#watermarkScaleRate").prop("value"));
        let _w_spoke = parseInt($("#wmScWidth").prop("value"));
        let _w_aplomb = parseInt($("#wmScHeight").prop("value"));
        let _w_opiate = parseInt($("#wmScWidth").prop("max"));
        let _w_skiff = parseInt($("#wmScHeight").prop("max"));
        if ($(this).is("#watermarkScaleRate")) {
            _w_spoke = Math.round(_w_opiate * _w_detour);
            _w_aplomb = Math.round(_w_skiff * _w_detour);
        } else if ($(this).is("#wmScWidth")) {
            _w_detour = _w_spoke / _w_opiate;
            _w_aplomb = Math.round(_w_skiff * _w_detour);
        } else if ($(this).is("#wmScHeight")) {
            _w_detour = _w_aplomb / _w_skiff;
            _w_spoke = Math.round(_w_opiate * _w_detour);
        } else {
            return;
        }
        $("#watermarkScaleRate").prop("value", _w_detour);
        $("#wmScWidth").prop("value", _w_spoke);
        $("#wmScHeight").prop("value", _w_aplomb);
        _w_squall();
    }));
    $("#brToAlpha,#brToAlphaReverse").on("change", (function() {
        if ($("#brToAlpha").is(":checked")) {
            $("#brToAlphaReverse,#pixelAlphaRateRange").attr("disabled", false);
        } else {
            $("#brToAlphaReverse,#pixelAlphaRateRange").attr("disabled", true);
        }
        _w_layman();
    }));
    $("#pixelAlphaRateRange").on("change", (function() {
        _w_layman();
    }));
    $("#imageAlphaRange,#imageAlpha").on("change", (function() {
        if ($(this).is("#imageAlphaRange")) {
            $("#imageAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#imageAlpha")) {
            $("#imageAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_squall();
    }));
    $("#qrCodeFgColor").on("input", (function() {
        _w_robe();
    }));
    $("#qrCodeBgColor").on("input", (function() {
        _w_robe();
    }));
    $("#qrCodeSizeRange,#qrCodeSize").on("change", (function() {
        if ($(this).is("#qrCodeSizeRange")) {
            $("#qrCodeSize").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeSize")) {
            $("#qrCodeSizeRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_robe();
    }));
    $("#qrCodeAlphaRange,#qrCodeAlpha").on("change", (function() {
        if ($(this).is("#qrCodeAlphaRange")) {
            $("#qrCodeAlpha").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeAlpha")) {
            $("#qrCodeAlphaRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_robe();
    }));
    $("#qrCodeBorderRange,#qrCodeBorder").on("change", (function() {
        if ($(this).is("#qrCodeBorderRange")) {
            $("#qrCodeBorder").prop("value", $(this).prop("value"));
        } else if ($(this).is("#qrCodeBorder")) {
            $("#qrCodeBorderRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_robe();
    }));
    $("#qrCodeText").on("input", (function() {
        _w_robe();
    }));
    $(".presentationMenuItem").on("click", (function() {
        $(".presentationMenuItem").removeClass("active");
        $(this).addClass("active");
        $(".presentationMenuTab").hide();
        if ($(this).is(".tileWatermark")) {
            $(".presentationMenuTab.tileWatermark").show();
        } else if ($(this).is(".locationWatermark")) {
            $(".presentationMenuTab.locationWatermark").show();
        }
        _w_layman();
    }));
    $("#offsetXRange,#offsetX").on("change", (function() {
        if ($(this).is("#offsetXRange")) {
            $("#offsetX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#offsetX")) {
            $("#offsetXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#offsetYRange,#offsetY").on("change", (function() {
        if ($(this).is("#offsetYRange")) {
            $("#offsetY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#offsetY")) {
            $("#offsetYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#marginXRange,#marginX").on("change", (function() {
        if ($(this).is("#marginXRange")) {
            $("#marginX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#marginX")) {
            $("#marginXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#marginYRange,#marginY").on("change", (function() {
        if ($(this).is("#marginYRange")) {
            $("#marginY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#marginY")) {
            $("#marginYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#rotationRange,#rotation").on("change", (function() {
        if ($(this).is("#rotationRange")) {
            $("#rotation").prop("value", $(this).prop("value"));
        } else if ($(this).is("#rotation")) {
            $("#rotationRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#alignXRange,#alignX").on("change", (function() {
        if ($(this).is("#alignXRange")) {
            $("#alignX").prop("value", $(this).prop("value"));
        } else if ($(this).is("#alignX")) {
            $("#alignXRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#alignYRange,#alignY").on("change", (function() {
        if ($(this).is("#alignYRange")) {
            $("#alignY").prop("value", $(this).prop("value"));
        } else if ($(this).is("#alignY")) {
            $("#alignYRange").prop("value", $(this).prop("value"));
        } else {
            return;
        }
        _w_layman();
    }));
    $("#middleAlignX").on("change", (function() {
        if ($(this).is(":checked")) {
            $("#alignXRange,#alignX").attr("disabled", true);
        } else {
            $("#alignXRange,#alignX").attr("disabled", false);
        }
        _w_layman();
    }));
    $("#middleAlignY").on("change", (function() {
        if ($(this).is(":checked")) {
            $("#alignYRange,#alignY").attr("disabled", true);
        } else {
            $("#alignYRange,#alignY").attr("disabled", false);
        }
        _w_layman();
    }));
    $("#downloadCanvasImage").on("click", (function() {
        _w_avowal(_w_plague.src, _w_kiosk, false, true);
    }));
    $("#batchImage").on("click", (function() {
        $("#multipleImageInput").get(0).click();
    }));
    $("#openDownloadFolderBtn").on("click", _w_puddle);
    $("#multipleImageInput").on("change", (function() {
        let _w_lapse = $(this).get(0).files;
        let $_w_foil = $(this);
        let _w_heresy = Object.keys(_w_lapse);
        let _w_bustle = _w_heresy.length;
        $(window).off("resize", _w_layman);
        let _w_muck = document.title;
        (function makeWM() {
            if (_w_heresy.length == 0) {
                document.title = _w_ban("_w_mimic") + _w_ban("_w_scorn");
                setTimeout((function() {
                    document.title = _w_muck;
                }), 2e3);
                $(window).on("resize", _w_layman);
                _w_layman();
            } else {
                document.title = _w_ban("_w_mimic") + (_w_bustle - _w_heresy.length) + "/" + _w_bustle;
                let _w_foul = _w_lapse[_w_heresy.shift()];
                if (!_w_belch) _w_belch = new FileReader;
                _w_belch.onload = function(event) {
                    let _w_list = (new Date).getTime();
                    _w_avowal(event.target.result, _w_foul.name, false, true);
                    let _w_cast = (new Date).getTime();
                    let _w_magpie = _w_cast - _w_list;
                    let _w_bin = _w_magpie > 256 ? _w_magpie * 2 : 256;
                    (function ctAction() {
                        chrome.downloads.search({
                            urlRegex: "^data:image/.*$",
                            state: "in_progress"
                        }, (function(data) {
                            if (data.length > 2) {
                                setTimeout(ctAction, _w_bin);
                            } else {
                                makeWM();
                            }
                        }));
                    })();
                };
                _w_belch.readAsDataURL(_w_foul);
            }
        })();
    }));
    $("#resetConfigure").on("click", (function() {
        _w_curfew();
        _w_layman();
    }));
    document.title = _w_ban("_w_molt");
    $("#editor_i18n_1001").html(_w_ban("_w_import"));
    $("#editor_i18n_1002").html(_w_ban("_w_spleen"));
    $("#editor_i18n_1003").html(_w_ban("_w_cereal"));
    $("#editor_i18n_1004").html(_w_ban("_w_vault"));
    $("#editor_i18n_1005").html(_w_ban("_w_group"));
    $("#editor_i18n_1006").html(_w_ban("_w_lathe"));
    $("#editor_i18n_1007").html(_w_ban("_w_coven"));
    $("#editor_i18n_1008").html(_w_ban("_w_patch"));
    $("#editor_i18n_1009").html(_w_ban("_w_pygmy"));
    $("#editor_i18n_1010").html(_w_ban("_w_stake"));
    $("#editor_i18n_1011").html(_w_ban("_w_lament"));
    $("#editor_i18n_1012").html(_w_ban("_w_scope"));
    $("#editor_i18n_1013").html(_w_ban("_w_squall"));
    $("#editor_i18n_1014").html(_w_ban("_w_fang"));
    $("#editor_i18n_1015").html(_w_ban("_w_hymn"));
    $("#wmImageCutUp").attr("placeHolder", _w_ban("_w_pith"));
    $("#wmImageCutRight").attr("placeHolder", _w_ban("_w_scarf"));
    $("#wmImageCutDown").attr("placeHolder", _w_ban("_w_cachet"));
    $("#wmImageCutLeft").attr("placeHolder", _w_ban("_w_cape"));
    $("#editor_i18n_1020").html(_w_ban("_w_frieze"));
    $("#editor_i18n_1021").html(_w_ban("_w_girder"));
    $("#editor_i18n_1022").html(_w_ban("_w_maize"));
    $("#editor_i18n_1023").html(_w_ban("_w_grave"));
    $("#editor_i18n_1024").html(_w_ban("_w_blight"));
    $("#editor_i18n_1025").html(_w_ban("_w_fern"));
    $("#editor_i18n_1026").html(_w_ban("_w_shell"));
    $("#editor_i18n_1027").html(_w_ban("_w_wag"));
    $("#editor_i18n_1028").html(_w_ban("_w_mate"));
    $("#editor_i18n_1029").html(_w_ban("_w_bench"));
    $("#editor_i18n_1030").html(_w_ban("_w_annex"));
    $("#editor_i18n_1031").html(_w_ban("_w_relic"));
    $("#editor_i18n_1032").html(_w_ban("_w_razor"));
    $("#editor_i18n_1033").html(_w_ban("_w_ensign"));
    $("#editor_i18n_1034").html(_w_ban("_w_slosh"));
    $("#editor_i18n_1035").html(_w_ban("_w_butt"));
    $("#editor_i18n_1036").html(_w_ban("_w_salute"));
    $("#editor_i18n_1037").html(_w_ban("_w_speck"));
    $("#editor_i18n_1038").html(_w_ban("_w_epic"));
    $("#editor_i18n_1039").html(_w_ban("_w_verse"));
    $("#editor_i18n_1040").html(_w_ban("_w_blurb"));
    $("#editor_i18n_1041").html(_w_ban("_w_skein"));
    $("#editor_i18n_1042").html(_w_ban("_w_slew"));
    $("#editor_i18n_1043").html(_w_ban("_w_relish"));
    $("#editor_i18n_1044").html(_w_ban("_w_eaglet"));
    $("#editor_i18n_1045").html(_w_ban("_w_biped"));
    $("#editor_i18n_1046").html(_w_ban("_w_bough"));
    $("#editor_i18n_1047").html(_w_ban("_w_candor"));
    _w_laity();
}

function _w_gag(_w_fraud, _w_leash, _w_clause) {
    if (!_w_gum) _w_gum = $("#canvas").get(0);
    let $_w_mettle = $(_w_gum).parent();
    _w_gum.width = $("#scWidth").prop("value");
    _w_gum.height = $("#scHeight").prop("value");
    let _w_opiate = _w_gum.parentElement.offsetWidth;
    if (_w_gum.width <= _w_opiate) {
        _w_gum.style.width = _w_gum.width + "px";
        _w_gum.style.height = _w_gum.height + "px";
        $("#displayRate").html(_w_ban("_w_gentry") + "100%");
    } else {
        _w_gum.style.width = _w_opiate + "px";
        _w_gum.style.height = _w_opiate / _w_gum.width * _w_gum.height + "px";
        $("#displayRate").html(_w_ban("_w_gentry") + (_w_opiate / _w_gum.width * 100).toFixed(1) + "%");
    }
    if (!_w_flare) _w_flare = _w_gum.getContext("2d");
    _w_flare.drawImage(_w_fraud, 0, 0, _w_gum.width, _w_gum.height);
    let _w_bale = function(_w_auger) {
        let _w_candor = $("#watermarkText").prop("value");
        if (_w_candor.length == 0) return;
        let _w_ballot = parseInt($("#fontSize").prop("value"));
        let _w_onset = _w_rhyme($("#fontColor").prop("value"));
        let _w_pang = parseInt($("#fontAlpha").prop("value")) / 100;
        let _w_assay = "rgba(" + _w_onset.r + ", " + _w_onset.g + ", " + _w_onset.b + ", " + _w_pang + ")";
        _w_flare.font = _w_ballot + "px " + $("select#fontSelecter option:selected").prop("value");
        _w_flare.strokeStyle = _w_assay;
        _w_flare.fillStyle = _w_assay;
        let _w_snatch = {};
        _w_snatch.width = _w_flare.measureText(_w_candor).width;
        _w_snatch.height = _w_ballot;
        _w_auger(_w_snatch, (function(x, y) {
            if ($("#borderFont:checkbox").is(":checked")) {
                _w_flare.strokeText(_w_candor, x, y + _w_snatch.height);
            } else {
                _w_flare.fillText(_w_candor, x, y + _w_snatch.height);
            }
        }));
    };
    let _w_lyric = null;
    let _w_stance = function(_w_auger) {
        if (_w_pauper == null) return;
        if (_w_lyric == null) {
            let _w_errand = parseInt($("#wmImageCutUp").prop("value"));
            _w_errand = _w_errand ? _w_errand : 0;
            let _w_mirth = parseInt($("#wmImageCutRight").prop("value"));
            _w_mirth = _w_mirth ? _w_mirth : 0;
            let _w_verse = parseInt($("#wmImageCutDown").prop("value"));
            _w_verse = _w_verse ? _w_verse : 0;
            let _w_mesa = parseInt($("#wmImageCutLeft").prop("value"));
            _w_mesa = _w_mesa ? _w_mesa : 0;
            let _w_shroud = _w_pauper.width - _w_mesa - _w_mirth;
            let _w_nib = _w_pauper.height - _w_errand - _w_verse;
            let _w_tinder = document.createElement("canvas");
            _w_tinder.width = _w_shroud;
            _w_tinder.height = _w_nib;
            let _w_snivel = _w_tinder.getContext("2d");
            _w_snivel.drawImage(_w_pauper, _w_mesa, _w_errand, _w_shroud, _w_nib, 0, 0, _w_shroud, _w_nib);
            if ($("#brToAlpha").is(":checked")) {
                let _w_slough = $("#brToAlphaReverse").is(":checked");
                let _w_pygmy = parseFloat($("#pixelAlphaRateRange").prop("value"));
                let _w_idiom = _w_snivel.getImageData(0, 0, _w_tinder.width, _w_tinder.height);
                let _w_gleam = _w_idiom.data.length;
                for (let i = 0; i < _w_gleam; i += 4) {
                    let _w_wick = .299 * _w_idiom.data[i] + .587 * _w_idiom.data[i + 1] + .114 * _w_idiom.data[i + 2];
                    let _w_aria = _w_wick;
                    if (_w_slough) {
                        _w_aria = 255 - _w_aria;
                    }
                    _w_aria = _w_aria * _w_pygmy;
                    if (_w_idiom.data[i + 3] > 0) _w_idiom.data[i + 3] = _w_aria;
                }
                _w_snivel.putImageData(_w_idiom, 0, 0);
            }
            _w_lyric = _w_tinder;
        }
        let _w_entre = parseInt($("#wmScWidth").prop("value"));
        let _w_quota = parseInt($("#wmScHeight").prop("value"));
        let _w_grain = parseInt($("#imageAlpha").prop("value")) / 100;
        let _w_snatch = {};
        _w_snatch.width = _w_entre;
        _w_snatch.height = _w_quota;
        _w_auger(_w_snatch, (function(x, y) {
            _w_flare.save();
            _w_flare.globalAlpha = _w_grain;
            _w_flare.drawImage(_w_lyric, 0, 0, _w_lyric.width, _w_lyric.height, x, y, _w_entre, _w_quota);
            _w_flare.restore();
        }));
    };
    let _w_tissue = function(_w_auger) {
        if (window._w_gravel == null) return;
        let _w_entre = window._w_gravel.width;
        let _w_quota = window._w_gravel.height;
        let _w_chip = $("#qrCodeBgColor").prop("value");
        let _w_badge = _w_rhyme(_w_chip);
        let _w_peril = parseInt($("#qrCodeAlpha").prop("value")) / 100;
        _w_chip = "RGBA(" + _w_badge.r + ", " + _w_badge.g + ", " + _w_badge.b + ", " + _w_peril + ")";
        let _w_ripple = parseInt($("#qrCodeBorderRange").prop("value"));
        let _w_snatch = {};
        _w_snatch.width = _w_entre + 2 * _w_ripple;
        _w_snatch.height = _w_quota + 2 * _w_ripple;
        _w_auger(_w_snatch, (function(x, y) {
            let _w_anvil = _w_flare.fillStyle;
            _w_flare.fillStyle = _w_chip;
            _w_flare.fillRect(x, y, _w_entre + 2 * _w_ripple, _w_quota + 2 * _w_ripple);
            _w_flare.fillStyle = _w_anvil;
            _w_flare.drawImage(window._w_gravel, 0, 0, window._w_gravel.width, window._w_gravel.height, x + _w_ripple, y + _w_ripple, _w_entre, _w_quota);
        }));
    };
    let _w_tract = function(_w_auger) {
        if ($(".typeMenuItem.textWatermark").is(".active")) {
            _w_bale(_w_auger);
        } else if ($(".typeMenuItem.imageWatermark").is(".active")) {
            _w_stance(_w_auger);
        } else if ($(".typeMenuItem.qrCodeWatermark").is(".active")) {
            _w_tissue(_w_auger);
        }
    };
    let _w_bail = function() {
        let _w_split = {};
        _w_split.width = parseInt($("#marginX").prop("value"));
        _w_split.height = parseInt($("#marginY").prop("value"));
        let _w_gem = parseInt($("#rotation").prop("value"));
        let _w_snarl = {};
        _w_snarl.x = parseInt($("#offsetX").prop("value"));
        _w_snarl.y = parseInt($("#offsetY").prop("value"));
        let _w_umpire = Math.sqrt(Math.pow(_w_gum.width + Math.abs(_w_snarl.x), 2) + Math.pow(_w_gum.height + Math.abs(_w_snarl.y), 2));
        let _w_auger = function(_w_snatch, _w_epoch) {
            _w_snatch.width += _w_split.width;
            _w_snatch.height += _w_split.height;
            _w_flare.rotate(_w_gem * Math.PI / 180);
            for (let x = 0; x < _w_umpire; x += _w_snatch.width) {
                for (let y = 0; y < _w_umpire; y += _w_snatch.height) {
                    _w_epoch(x + _w_split.width + _w_snarl.x, y + _w_snarl.y);
                }
            }
            for (let x = 0; x < _w_umpire; x += _w_snatch.width) {
                for (let y = -_w_snatch.height; y > -_w_umpire; y -= _w_snatch.height) {
                    _w_epoch(x + _w_split.width + _w_snarl.x, y + _w_snarl.y);
                }
            }
            for (let x = -_w_snatch.width; x > -_w_umpire; x -= _w_snatch.width) {
                for (let y = -_w_snatch.height; y > -_w_umpire; y -= _w_snatch.height) {
                    _w_epoch(x + _w_split.width + _w_snarl.x, y + _w_snarl.y);
                }
            }
            for (let x = -_w_snatch.width; x > -_w_umpire; x -= _w_snatch.width) {
                for (let y = 0; y < _w_umpire; y += _w_snatch.height) {
                    _w_epoch(x + _w_split.width + _w_snarl.x, y + _w_snarl.y);
                }
            }
        };
        _w_tract(_w_auger);
    };
    let _w_herd = function() {
        let _w_carafe = parseInt($("#alignX").prop("value"));
        let _w_hawk = parseInt($("#alignY").prop("value"));
        let _w_woe = $("#middleAlignX").is(":checked");
        let _w_psyche = $("#middleAlignY").is(":checked");
        let _w_auger = function(_w_snatch, _w_epoch) {
            let _w_caper = {
                x: 0,
                y: 0
            };
            if (_w_woe) {
                _w_caper.x = Math.round(_w_gum.width / 2 - _w_snatch.width / 2);
            } else if (_w_carafe > 0) {
                _w_caper.x = _w_carafe;
            } else if (_w_carafe < 0) {
                _w_caper.x = _w_gum.width - _w_snatch.width + _w_carafe + 1;
            }
            if (_w_psyche) {
                _w_caper.y = Math.round(_w_gum.height / 2 - _w_snatch.height / 2);
            } else if (_w_hawk > 0) {
                _w_caper.y = _w_hawk;
            } else if (_w_hawk < 0) {
                _w_caper.y = _w_gum.height - _w_snatch.height + _w_hawk + 1;
            }
            _w_epoch(_w_caper.x, _w_caper.y);
        };
        _w_tract(_w_auger);
    };
    if ($(".presentationMenuItem.tileWatermark").is(".active")) {
        _w_bail();
    } else if ($(".presentationMenuItem.locationWatermark").is(".active")) {
        _w_herd();
    }
    _w_leash = "watermark_" + _w_leash;
    _w_leash = _w_leash.replace(/^(.*?)(\.[\w]{3,4})?$/, "$1.png");
    let _w_nerve = function() {
        blobUtil.canvasToBlob(_w_gum).then((function(blob) {
            chrome.downloads.download({
                url: blobUtil.createObjectURL(blob),
                filename: _w_zest(_w_ban("manifest_ext_name") + "/" + _w_ban("_w_stance") + "/" + _w_leash),
                saveAs: false,
                conflictAction: "uniquify"
            });
        }));
    };
    if (_w_clause) {
        _w_nerve();
    }
    let _w_renown = parseInt(_w_gum.style.width.replace("px", ""));
    let _w_dose = parseInt(_w_gum.style.height.replace("px", ""));
    $(_w_gum).parent().off("mouseover mouseout mousemove");
    if (_w_renown < _w_gum.width) {
        let _w_siren = function(event) {
            let _w_mettle = $(_w_gum).parent().get(0);
            let _w_trunk = _w_mettle.offsetTop;
            let _w_scald = _w_mettle.offsetLeft;
            let _w_vanity = event.pageX - _w_scald;
            let _w_genre = event.pageY - _w_trunk;
            let _w_wax = -(_w_gum.width - _w_renown) * _w_vanity / _w_renown;
            let _w_crease = -(_w_gum.height - _w_dose) * _w_genre / _w_dose;
            $(_w_gum).css("margin-top", _w_crease);
            $(_w_gum).css("margin-left", _w_wax);
        };
        $(_w_gum).parent().on("mouseover", (function(event) {
            $(_w_gum).css("width", _w_gum.width);
            $(_w_gum).css("height", _w_gum.height);
            $(this).off("mousemove").on("mousemove", _w_siren);
        })).on("mouseout", (function() {
            $(_w_gum).css("width", _w_renown);
            $(_w_gum).css("height", _w_dose);
            $(_w_gum).css("margin", "0px auto");
            $(this).off("mousemove", _w_siren);
        }));
    }
}