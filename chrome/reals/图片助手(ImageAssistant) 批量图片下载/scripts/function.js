/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_bulge = "0123456789";

window._w_toxin = "0123456789abcdef";

window._w_brat = "0123456789abcdefghijklmnopqrstuvwxyz";

window._w_votary = 8e3;

window._w_augury = "https://www.pullywood.com/ImageAssistant/blank.html";

window._w_snob = _w_lark(window._w_augury);

window._w_flux = _w_lark(window._w_augury);

window._w_lout = "https://www.pullywood.com/ImageAssistant/images/IAnalytic.png";

window._w_lesion = "https://www.pullywood.com/publish/imageassistant-resource-list";

window._w_buckle = _w_lark("https://www.pullywood.com/ImageAssistant/defaultRegexpUrlRule.properties");

window._w_fault = _w_lark("http://localhost:61257/check");

window._w_whiff = _w_lark("http://localhost:61257/collection/save");

window._w_canary = _w_lark("https://www.pullywood.com/ImageAssistant/dynamic_config.json");

window._w_swamp = false;

window._w_minnow = {};

window._w_albino = false;

window._w_pleat = 512;

window._w_uproar = "./images/loading.gif";

const _w_mogul = {
    _w_sack: [ "{page.title}", "{page.host}/{page.title}", "{YYYY-MM-DD}/{page.title}", "{page.host}/{YYYY-MM-DD}_{HH-mm-ss}/{page.title}" ],
    _w_mayhem: [ "{filename}", "{no.10001}", "{origin_serial}" ]
};

window._w_pique = {
    _keyStr: "bFf2YMpEZLT6OBqN/DCtJlnc9G154W=wP+h3Rrk8xadIzjQoHmv7sAS0yeUiKVugX",
    encode: function(e) {
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = _w_pique._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            } else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    },
    decode: function(e) {
        let t = "";
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = _w_pique._utf8_decode(t);
        return t;
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        let t = "";
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    },
    _utf8_decode: function(e) {
        let t = "";
        let n = 0;
        let r = 0, c1 = 0, c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            } else {
                c2 = e.charCodeAt(n + 1);
                var c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    }
};

if (!Object.entries) {
    Object.entries = function(obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--) {
            resArray[i] = [ ownProps[i], obj[ownProps[i]] ];
        }
        return resArray;
    };
}

if (!Object.values) {
    Object.values = function(obj) {
        return Object.keys(obj).map((function(key) {
            return obj[key];
        }));
    };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        let _w_nuance = this.toString();
        if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > _w_nuance.length) {
            position = _w_nuance.length;
        }
        position -= searchString.length;
        let _w_grease = _w_nuance.indexOf(searchString, position);
        return _w_grease !== -1 && _w_grease === position;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

if (!Number.parseInt) Number.parseInt = parseInt;

if (!window.URL) {
    window.URL = function(url) {
        if (url.indexOf("://") < 0) throw new TypeError("Invalid URL");
        this.url = url;
        this.link = document.createElement("a");
        this.link.href = url;
        this.href = this.link.href;
        this.protocol = this.link.protocol;
        this.host = this.link.host;
        this.hostname = this.link.hostname;
        this.port = this.link.port;
        this.pathname = this.link.pathname;
        this.search = this.link.search;
        this.hash = this.link.hash;
        this.username = this.link.username;
        this.password = this.link.password;
        this.origin = this.link.origin;
    };
}

const _w_gnome = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;

const _w_vogue = function(_w_gaggle) {
    let _w_grave = [];
    _w_gaggle && _w_gaggle.forEach((function(item) {
        let _w_dike = item.replace(/[\\'"\s\n\r]+/gi, "");
        _w_grave.push(_w_dike);
    }));
    return _w_grave;
};

$.ajaxSetup({
    timeout: window._w_votary,
    headers: {
        Accept: "*/*; charset=UTF-8",
        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
        Pragma: "no-cache",
        Expires: "0"
    }
});

(function($) {
    let _w_prune = [];
    $(document).ajaxSend((function(e, jqXHR, options) {
        _w_prune.push(jqXHR);
    }));
    $(document).ajaxComplete((function(e, jqXHR, options) {
        _w_prune = $.grep(_w_prune, (function(x) {
            return x != jqXHR;
        }));
    }));
    let _w_wig = function() {
        $.each(_w_prune, (function(idx, jqXHR) {
            jqXHR.abort();
        }));
    };
    let _w_torso = window.onbeforeunload;
    window.abortAjaxRequest = function() {
        _w_wig();
    };
    window.onbeforeunload = function() {
        let _w_flail = _w_torso ? _w_torso() : undefined;
        if (_w_flail == undefined) {
            _w_wig();
        }
        return _w_flail;
    };
})(jQuery);

function _w_lark(url) {
    if (typeof url != "string") return url;
    let _w_breed = "version=".concat(chrome.runtime.getManifest().version).concat("&finger=").concat(localStorage[chrome.runtime.id]);
    if (url.indexOf("?") >= 0) {
        return url.concat("&").concat(_w_breed);
    } else {
        return url.concat("?").concat(_w_breed);
    }
}

function _w_savant(url) {
    let _w_ruse = /^https?:(\/\/.*?)$/;
    let _w_fetter = window.location.href ? window.location.href.match(_w_ruse) : null;
    let _w_patch = url ? url.match(_w_ruse) : null;
    if (_w_fetter && _w_patch) {
        return _w_patch[1];
    }
    return url;
}

function _w_boor(taskFun) {
    return taskFun && typeof taskFun === "function";
}

function _w_scion(e) {
    if (e.target && [ "INPUT", "TEXTAREA" ].indexOf(e.target.tagName) >= 0 || e.target.contentEditable == "true") return true;
    return false;
}

function _w_spruce(_w_throne) {
    let _w_waffle = [];
    let _w_fusion = 0;
    let _w_cavern = 0;
    let _w_duet = _w_throne;
    setInterval((function fetchAndExecTask() {
        if (_w_fusion < _w_duet && _w_cavern < _w_duet && _w_waffle.length > 0) {
            _w_cavern++;
            let _w_maroon = _w_waffle.shift();
            if (_w_boor(_w_maroon)) {
                _w_maroon((function() {
                    _w_fusion++;
                }), (function() {
                    _w_fusion--;
                }), (function() {
                    return [ _w_fusion, _w_waffle.length ];
                }));
            }
            _w_cavern--;
        }
    }), 10);
    return {
        setMax: function(max) {
            _w_duet = max;
        },
        getProcessingNum: function() {
            return _w_fusion;
        },
        getTaskNum: function() {
            return _w_waffle.length;
        },
        addTaskToLast: function(taskFun) {
            _w_waffle.push(taskFun);
        },
        addTaskToFirst: function(taskFun) {
            _w_waffle.unshift(taskFun);
        },
        addTask: function(taskFun) {
            _w_waffle.push(taskFun);
        }
    };
}

function _w_rhyme(hex) {
    let _w_parley = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(_w_parley, (function(m, r, g, b) {
        return r + r + g + g + b + b;
    }));
    let _w_cement = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return _w_cement ? {
        r: parseInt(_w_cement[1], 16),
        g: parseInt(_w_cement[2], 16),
        b: parseInt(_w_cement[3], 16)
    } : null;
}

function _w_puddle() {
    chrome.downloads.showDefaultFolder();
}

function _w_grotto() {
    if (window._w_eddy) {
        return;
    } else {
        window._w_eddy = true;
    }
    new MutationObserver((function(_w_polish) {
        _w_polish.forEach((function(_w_hike) {
            for (let i = 0; i < _w_hike.addedNodes.length; ++i) {
                let _w_turret = _w_hike.addedNodes.item(i);
                if (_w_turret.tagName == "IMG") {
                    _w_turret.removeAttribute("src");
                } else if (typeof _w_turret.getElementsByTagName !== "function") {
                    return;
                } else {
                    let _w_gentry = _w_turret.getElementsByTagName("img");
                    for (let j = 0; j < _w_gentry.length; ++j) _w_gentry[j].removeAttribute("src");
                }
            }
        }));
    })).observe(document.body, {
        childList: true,
        subtree: true
    });
}

function _w_ban(key) {
    return chrome.i18n.getMessage(key);
}

function _w_dent(url) {
    url || (url = "");
    try {
        url = decodeURIComponent(url);
    } catch (e) {}
    return url;
}

function _w_cornet() {
    if (typeof chrome != "undefined" && typeof chrome.extension != "undefined" && typeof chrome.extension.getBackgroundPage != "undefined") {
        return chrome.extension.getBackgroundPage();
    }
    return null;
}

function _w_trophy(_w_fender, _w_tripod) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_fender, (function(_w_logjam) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("No tab with id") > 0) {
                    return;
                }
                if (!_w_logjam || !_w_logjam.pendingUrl) {
                    _w_boor(_w_tripod) && _w_tripod(_w_logjam);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_quill(_w_fender, _w_tripod) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.get(_w_fender, (function(_w_logjam) {
                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("No tab with id") > 0) {
                    return;
                }
                if (_w_logjam && _w_logjam.status && _w_logjam.status == "complete") {
                    _w_boor(_w_tripod) && _w_tripod(_w_logjam);
                } else {
                    observeStatus();
                }
            }));
        }), 250);
    })();
}

function _w_lace(_w_pagan, _w_parity) {
    (function observeStatus() {
        setTimeout((() => {
            chrome.tabs.remove(_w_pagan, (function() {
                if (chrome.runtime.lastError) {
                    if (chrome.runtime.lastError.message.indexOf("drag") > 0) {
                        observeStatus();
                    } else {
                        return;
                    }
                } else if (_w_boor(_w_parity)) {
                    _w_parity.apply(this, arguments);
                }
            }));
        }), 250);
    })();
}

function _w_span(_w_flax) {
    if (location.href.indexOf("?") == -1 || location.href.indexOf(_w_flax + "=") == -1) {
        return "";
    }
    let _w_lasso = location.href.substring(location.href.indexOf("?") + 1);
    if (_w_lasso.indexOf("#") > -1) {
        _w_lasso = _w_lasso.substring(0, _w_lasso.indexOf("#"));
    }
    let _w_ballad = _w_lasso.split("&");
    let _w_tackle, paraName, paraValue;
    for (let i = 0; i < _w_ballad.length; i++) {
        _w_tackle = _w_ballad[i].indexOf("=");
        if (_w_tackle == -1) {
            continue;
        }
        paraName = _w_ballad[i].substring(0, _w_tackle);
        paraValue = _w_ballad[i].substring(_w_tackle + 1);
        if (paraName == _w_flax) {
            return unescape(paraValue.replace(/\+/g, " "));
        }
    }
    return "";
}

function _w_lackey(url) {
    let _w_hem = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    if (_w_hem) {
        return _w_hem[1];
    }
    return "";
}

function _w_baton(url) {
    let _w_hem = url.match(/^(https?\:\/\/[^\/?#]+\/)/i);
    if (_w_hem) {
        return _w_hem[1];
    }
    return "";
}

function _w_cull(url) {
    if (typeof url == "string") {
        return url.replace(/#.*$/gi, "");
    }
    return null;
}

function _w_chapel() {
    let _w_vicar = new URL(window.location.href);
    _w_vicar = _w_vicar.origin + _w_vicar.pathname;
    return _w_vicar;
}

function _w_rave(_w_hoax, _w_opiate, _w_skiff) {
    let _w_tiff = {
        width: 0,
        height: 0
    };
    if (_w_hoax && _w_opiate && _w_skiff) {
        try {
            let _w_feint = _w_hoax.width;
            let _w_hymn = _w_hoax.height;
            if (_w_feint <= _w_opiate && _w_hymn <= _w_skiff) {
                _w_tiff.width = _w_feint;
                _w_tiff.height = _w_hymn;
            } else if (_w_feint / _w_hymn >= _w_opiate / _w_skiff) {
                _w_tiff.width = _w_opiate;
                _w_tiff.height = _w_opiate / _w_feint * _w_hymn;
            } else {
                _w_tiff.width = _w_skiff / _w_hymn * _w_feint;
                _w_tiff.height = _w_skiff;
            }
        } catch (e) {}
    }
    return _w_tiff;
}

async function _w_temper(_w_gutter, resolutionLimit = {
    maxWidth: 256,
    maxHeight: 256
}) {
    let rect = _w_rave(_w_gutter, resolutionLimit.maxWidth, resolutionLimit.maxHeight);
    let canvas = document.createElement("canvas");
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.title = _w_gutter.title;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(_w_gutter, 0, 0, rect.width, rect.height);
    const blob = await new Promise((resolve => canvas.toBlob(resolve, "png")));
    const tmpUrl = URL.createObjectURL(blob);
    let blobSrc = await asyncUrlToBlobUrl(tmpUrl);
    URL.revokeObjectURL(tmpUrl);
    canvas = null;
    return blobSrc;
}

function _w_delta(_w_miasma) {
    if (!_w_miasma.getBoundingClientRect) return false;
    let _w_tiff = _w_miasma.getBoundingClientRect();
    if (_w_tiff.bottom < 0 - _w_pleat || _w_tiff.right < 0 - _w_pleat || _w_tiff.top > window.innerHeight + _w_pleat || _w_tiff.left > window.innerWidth + _w_pleat) {
        return false;
    } else {
        return true;
    }
}

window.loadParam = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: false
};

function _w_grouch() {
    return chrome.runtime.id;
}

function _w_lancet(_w_fop, _w_lump, _w_levee) {
    _w_lump && (loadParam.updateStatics = _w_lump);
    _w_cynic(loadParam, (function() {
        let _w_lump = false;
        loadParam.updateStatics && (_w_lump = loadParam.updateStatics, loadParam.updateStatics = false);
        if (_w_lump) {
            let _w_pullet = _w_cornet()._w_grill();
            if (_w_pullet & 1) {
                $("#filter_switch").addClass("btn-pwd active");
                $("#filter_menu").slideDown("fast", _w_cone);
            } else {
                $("#filter_switch").removeClass("btn-pwd active");
                $("#filter_menu").slideUp("fast", _w_cone);
            }
            if (_w_pullet & 2) {
                $("#select_menu_switch").addClass("btn-pwd active");
                $("#select_menu").slideDown("fast", _w_cone);
            } else {
                $("#select_menu_switch").removeClass("btn-pwd active");
                $("#select_menu").slideUp("fast", _w_cone);
            }
            const $sortBtn = $("#sort_switch");
            if (_w_pullet & 4 && $sortBtn.is(":not(.active)")) {
                $sortBtn.addClass("btn-pwd active");
                $sortBtn.trigger("funExec");
            } else if (!(_w_pullet & 4) && $sortBtn.is(".active")) {
                $sortBtn.removeClass("btn-pwd active");
                $sortBtn.trigger("funExec");
            }
            if (_w_pullet & 8) {
                $("#resolutionTle_switch").addClass("btn-pwd active");
                $(".imageItemResolution").show();
            } else {
                $("#resolutionTle_switch").removeClass("btn-pwd active");
                $(".imageItemResolution").hide();
            }
            const $dedupBtn = $("#imageDeduplication_switch");
            if (_w_pullet & 16 && $dedupBtn.is(":not(.active)")) {
                $dedupBtn.addClass("btn-pwd active");
                $("#dedup_menu").show();
                $dedupBtn.trigger("funExec");
            } else if (!(_w_pullet & 16) && $dedupBtn.is(".active")) {
                $dedupBtn.removeClass("btn-pwd active");
                $("#dedup_menu").hide();
            }
            if ((_w_pullet | 12) == 12) {
                $("#menu").hide();
            } else {
                $("#menu").show();
            }
            let _w_stench = new Array;
            let _w_mentor = new Array;
            $("#filter_menu_type .imageType[value!=all][value!=other].active").each((function() {
                _w_stench.push($(this).attr("value"));
            }));
            $("#filter_menu_type .imageType[value!=all][value!=other]:not(.active)").each((function() {
                _w_mentor.push($(this).attr("value"));
            }));
            $("#filter_menu_type .imageType[value=all]").hasClass("active") ? $(_w_fop).show() : $("#filter_menu_type .imageType[value=other]").hasClass("active") ? $(_w_fop).each((function() {
                _w_mentor.indexOf($(this).attr("data-type")) > -1 ? $(this).hide() : $(this).show();
            })) : $(_w_fop).each((function() {
                _w_stench.indexOf($(this).attr("data-type")) > -1 ? $(this).show() : $(this).hide();
            }));
            let _w_pledge = _w_tyrant.slice(0);
            _w_pledge.push("other");
            $("#counter_all").html($(_w_fop).length);
            for (let i = 0; i < _w_pledge.length; ++i) {
                let _w_patina = $(_w_fop + "[data-type=" + _w_pledge[i] + "]").length;
                $("#counter_" + _w_pledge[i]).html(_w_patina);
                _w_patina != 0 ? $("#counter_" + _w_pledge[i]).parent().show() : $("#counter_" + _w_pledge[i]).parent().hide();
            }
            if ($("#filter_menu_size .selectType[value=larger]").hasClass("active")) {
                $("#filter_menu_size .selectOption[value!=all]").each((function() {
                    $(_w_fop + "[data-max-range=" + $(this).attr("value") + "]").length > 0 ? $(this).show() : $(this).hide();
                }));
                if ($("#filter_menu_size .selectOption[value=all]").hasClass("active")) {} else if ($("#filter_menu_size .selectOption[value=other].active").length > 0) {
                    $(_w_fop + ":visible[data-max-range!=other]").hide();
                } else {
                    let _w_prose = $("#filter_menu_size .selectOption[value!=all][value!=other].active");
                    let _w_ferry = _w_cornet()._w_hulk();
                    let _w_studio = _w_ferry[_w_prose.attr("value")];
                    $(_w_fop + ":visible").each((function() {
                        $(this).attr("data-width") - _w_studio.width >= 0 && $(this).attr("data-height") - _w_studio.height >= 0 ? $(this).show() : $(this).hide();
                    }));
                }
            } else if ($("#filter_menu_size .selectType[value=exact]").hasClass("active")) {
                let _w_barb = 0;
                $("#filter_menu_size .selectOption[value!=all][value!=other]").each((function() {
                    let _w_braid = $(_w_fop + "[data-resolution=" + $(this).attr("value") + "]").length;
                    _w_braid > 0 ? $(this).show() : $(this).hide();
                    _w_barb += _w_braid;
                }));
                let $_w_amulet = $("#filter_menu_size .selectOption[value=other]");
                _w_barb < $(_w_fop).length ? $_w_amulet.show() : $_w_amulet.hide();
                let _w_crux = new Array;
                let _w_byline = new Array;
                $("#filter_menu_size .selectOption[value!=all][value!=other].active").each((function() {
                    _w_crux.push($(this).attr("value"));
                }));
                $("#filter_menu_size .selectOption[value!=all][value!=other]:not(.active)").each((function() {
                    _w_byline.push($(this).attr("value"));
                }));
                $("#filter_menu_size .selectOption[value=all]").hasClass("active") ? true : $("#filter_menu_size .selectOption[value=other]").hasClass("active") ? $(_w_fop + ":visible").each((function() {
                    _w_byline.indexOf($(this).attr("data-resolution")) > -1 ? $(this).hide() : $(this).show();
                })) : $(_w_fop + ":visible").each((function() {
                    _w_crux.indexOf($(this).attr("data-resolution")) > -1 ? $(this).show() : $(this).hide();
                }));
            } else {}
            let _w_realm = $("#urlRegexpFilter").prop("value").trim();
            if (_w_realm && _w_realm.length > 0) {
                try {
                    let _w_pucker = new RegExp(_w_realm);
                    $(_w_fop + ":visible").each((function() {
                        if (null != _w_pucker.exec($(this).attr("data-src"))) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }));
                    $("#urlRegexpFilter").removeClass("regexp_error");
                } catch (exception) {
                    $("#urlRegexpFilter").addClass("regexp_error");
                }
            } else {
                $("#urlRegexpFilter").removeClass("regexp_error");
            }
            $(_w_fop + ":visible").addClass("colorbox cboxElement");
            $(_w_fop + ":hidden").removeClass("colorbox cboxElement");
        }
        let _w_welter = $(_w_fop + ":visible").length;
        $(_w_fop).each((function() {
            let _w_oath = $(this).get(0);
            if (!_w_delta(_w_oath)) {
                if (_w_welter <= _w_cornet()._w_sanity()) return;
                let _w_hoax = $(this).find("img").get(0);
                _w_hoax && _w_hoax.src != _w_uproar && (_w_hoax.src = _w_uproar);
            } else if ($(this).is(":visible")) {
                let _w_hoax = $(this).find("img").get(0);
                _w_hoax && _w_hoax.src != _w_hoax.dataset.src && (_w_hoax.src = _w_hoax.dataset.src);
            } else {
                $(this).removeClass("selected");
            }
        }));
    }), _w_levee);
    if (_w_lump) {
        $("#image_amount").html($(_w_fop).length);
        $("#visible_amount").html($(_w_fop + ":visible").length);
        $("#select_amount").html($(_w_fop + ":visible.selected").length);
        if ($("#ext_main>.imageItem").length > 0) {
            $("#empty").remove();
            window._w_haunt = true;
        } else if (window._w_haunt) {
            $("#empty").length > 0 ? true : function() {
                $("<img />", {
                    id: "empty",
                    src: "./images/empty.svg"
                }).appendTo($("#ext_main"));
            }();
        }
        _w_cone();
        let $_w_medal = $("#ext_main");
        let _w_amble = window.innerHeight - $("#header").outerHeight();
        if ($_w_medal.outerHeight() < _w_amble) {
            let _w_timber = $_w_medal.outerHeight() - $_w_medal.height();
            $_w_medal.css("min-height", _w_amble - _w_timber);
        }
    }
}

function _w_cone() {
    $("#ext_main").css("margin-top", $("#header").height());
}

window.sortParam = {
    timeout: 512,
    lastExeTime: new Date,
    timer: null,
    updateStatics: false,
    delayAgain: true
};

function _w_dandy(_w_breed) {
    _w_cynic(sortParam, (function() {
        let _w_mull = null;
        if (typeof _w_breed == "string") {
            _w_mull = $(_w_breed).toArray();
        } else {
            _w_mull = _w_breed;
        }
        let _w_pullet = _w_cornet()._w_grill();
        let _w_salmon = (_w_pullet & 4) > 0;
        _w_mull.sort((function(a, b) {
            let _w_cement = 0;
            if (_w_salmon) {
                _w_cement = b.dataset.size - a.dataset.size;
            } else {
                let _w_streak = a.refererSplitArray;
                let _w_colony = b.refererSplitArray;
                if (a.dataset.serial && b.dataset.serial) {
                    _w_cement = a.dataset.serial - b.dataset.serial;
                } else if (_w_streak && _w_colony && _w_streak > _w_colony) {
                    _w_cement = -1;
                } else if (_w_streak && _w_colony && _w_streak < _w_colony) {
                    _w_cement = 1;
                }
            }
            if (_w_cement == 0) {
                return a.dataset.id - b.dataset.id;
            }
            return _w_cement;
        }));
        for (let i = 0; i < _w_mull.length; ++i) {
            _w_mull[i].parentNode.appendChild(_w_mull[i]);
        }
        _w_lancet(_w_breed, true, true);
    }), false);
}

function _w_pollen(_w_facet, _w_outlet) {
    if (_w_facet && _w_facet.data && _w_facet.data.id) {
        let _w_mill = document.querySelector("a[data-id='" + _w_facet.data.id + "']");
        if (!_w_mill) return;
        const _w_sheath = _w_facet.data.hash;
        _w_mill.dataset.phash = _w_sheath;
        if (!_w_outlet && _w_farrow) {
            _w_farrow.storePhash(_w_mill.dataset.src, _w_sheath);
        }
        const _w_fad = [];
        let _w_truce = false;
        const _w_fleck = _w_mill.dataset.serial;
        document.querySelectorAll("a.imageItem[data-phash]").forEach((_w_prose => {
            if (_w_truce) return;
            if (_w_prose == _w_mill) return;
            const _w_rabble = parseInt(_w_sheath, 16);
            const _w_rag = parseInt(_w_prose.dataset.phash, 16);
            let _w_lucre = ((_w_rabble >>> 0).toString(2).match(/1/g) || "").length;
            let _w_frisk = ((_w_rag >>> 0).toString(2).match(/1/g) || "").length;
            const _w_prey = ((_w_rabble ^ _w_rag) >>> 0).toString(2);
            const _w_psalm = (_w_prey.match(/1/g) || "").length;
            if (_w_psalm > window._w_collar) return;
            const _w_pod = parseInt(_w_mill.dataset.size);
            const _w_fag = _w_mill.dataset.src.length;
            const _w_riddle = parseInt(_w_prose.dataset.size);
            const _w_bout = _w_prose.dataset.src.length;
            if (_w_riddle > _w_pod || _w_riddle == _w_pod && (_w_lucre > _w_frisk || _w_fag > _w_bout)) {
                console.log("去重(本体)：" + _w_mill.dataset.src);
                _w_mill.remove();
                _w_fad.splice(0);
                if (_w_prose.dataset.serial > _w_fleck) {
                    _w_prose.dataset.serial = _w_fleck;
                }
                _w_truce = true;
                return;
            } else {
                _w_fad.push(_w_prose);
                if (_w_prose.dataset.serial < _w_mill.dataset.serial) {
                    _w_mill.dataset.serial = _w_prose.dataset.serial;
                }
            }
        }));
        if (!_w_truce) {
            _w_fad.forEach((item => {
                console.log("去重(元素)：" + item.dataset.src);
                item.remove();
            }));
        }
    }
}

function _w_denim(url) {
    if (!window.fileDownloadCounter) {
        window.fileDownloadCounter = 10001;
    }
    if (!window.urlSerialMapper) {
        window.urlSerialMapper = {};
    }
    if (!window.urlSerialMapper[url]) {
        window.urlSerialMapper[url] = window.fileDownloadCounter++;
    }
    return window.urlSerialMapper[url];
}

function _w_mantle(_w_dike, _w_lien) {
    let _w_lumber = _w_farrow.getFetchEntry(_w_dike);
    let _w_hazard = function(_w_vicar) {
        blobUtil.imgSrcToBlob(_w_vicar).then((function(_w_ruck) {
            if (_w_boor(_w_lien)) {
                let _w_filth = window.URL.createObjectURL(_w_ruck);
                if (_w_lumber) {
                    _w_lumber._w_glow = _w_filth;
                }
                _w_lien(_w_filth);
            }
        }));
    };
    if (_w_lumber && _w_lumber._w_glow) {
        _w_lien(_w_lumber._w_glow);
    } else if (_w_lumber && _w_lumber._w_shrub) {
        _w_hazard(_w_lumber._w_shrub);
    } else {
        _w_hazard(_w_dike);
    }
}

function _w_zest(_w_yokel) {
    if (_w_yokel) {
        return _w_yokel.replace(/^[_\s\.]+/gi, "").replace(/[_\s\.]+$/gi, "").replace(/([\/\\]+)[_\s\.]+/gi, "$1").replace(/[_\s\.]+([\/\\]+)/gi, "$1").replace(/[\\\/]+/gi, "/");
    }
    return _w_yokel;
}

function _w_spire(_w_leash, _w_oak = false) {
    if (_w_oak) {
        _w_leash = _w_leash.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\~|]+/gi, "_");
    } else {
        _w_leash = _w_leash.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F\x80-\x9F\n\r\f\s\t\v\\:\*\|\?'"<>%&^`\!\$\~|\/]+/gi, "_");
    }
    return _w_zest(_w_leash);
}

function _w_agenda(_w_ladle, _w_pelt, _w_icon, _w_spoof) {
    let _w_otter = function(_w_draft) {
        function _w_coward(_w_marble) {
            chrome.downloads.download({
                url: _w_marble,
                filename: _w_spire(_w_draft.filename, true),
                saveAs: false,
                conflictAction: "uniquify"
            });
        }
        if (_w_cornet()._w_rifle(_w_draft.suffix)) {
            _w_mantle(_w_draft.src, _w_coward);
        } else {
            _w_coward(_w_draft.url);
        }
    };
    if (_w_icon == null) _w_icon = _w_otter;
    let _w_canyon = _w_deceit;
    if (!_w_canyon || _w_canyon.length == 0) folder = (new Date).toJSON();
    _w_canyon = _w_spire(_w_canyon);
    let _w_hawser = _w_canyon.substr(0, 128);
    _w_ladle.forEach((item => {
        item.order_serial = _w_denim(item.url);
        if (!item.serial) {
            if (item.origin_serial) {
                item.serial = item.origin_serial;
            } else {
                item.serial = item.order_serial;
            }
        }
        let _w_writ = _w_pelt._w_writ;
        let _w_pier = _w_flick(item.referer, _w_hawser);
        let _w_fungi = _w_spire(_w_pier, false).substr(0, 128);
        let _w_pawn = _w_lackey(item.referer);
        _w_writ = _w_writ.replace(/\{page.title\}/gi, _w_fungi).replace(/\{page.host\}/gi, _w_pawn).replace(/\{origin.title\}/gi, _w_hawser).replace(/\{YYYY-MM-DD\}/gi, _w_hubbub.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_hubbub.HHmmss).replace(/\{extractor_hash\}/gi, _w_ridge);
        let _w_leash = item.filename;
        let _w_ravine = item.suffix;
        let _w_hedge = _w_pelt._w_hedge;
        _w_leash = _w_hedge.replace(/\{filename\}/gi, _w_leash).replace(/\{no.10001\}/gi, item.order_serial).replace(/\{origin_serial\}/gi, item.serial).replace(/\{page.title\}/gi, _w_fungi).replace(/\{origin.title\}/gi, _w_hawser).replace(/\{page.host\}/gi, _w_pawn).replace(/\{YYYY-MM-DD\}/gi, _w_hubbub.YYYYMMDD).replace(/\{HH-mm-ss\}/gi, _w_hubbub.HHmmss).replace(/\{extractor_hash\}/gi, _w_ridge);
        _w_leash = _w_spire(_w_leash) + _w_ravine;
        _w_icon({
            url: item.url,
            src: item.src,
            referer: item.referer,
            filename: _w_ban("manifest_ext_name") + "/" + _w_writ + "/" + _w_leash,
            suffix: item.suffix
        });
    }));
    if (_w_spoof) _w_spoof();
}

function _w_piazza(_w_kennel) {
    let _w_pelt = {
        _w_writ: localStorage["filePath_format"] ? localStorage["filePath_format"] : _w_mogul._w_sack[1],
        _w_hedge: localStorage["filename_format"] ? localStorage["filename_format"] : _w_mogul._w_mayhem[1]
    };
    _w_agenda(_w_kennel, _w_pelt, null, null);
}

function _w_gloom(_w_kennel, _w_crayon) {
    if ($(".modal").is(":visible") || $(".modal").length > 1) {
        return;
    } else if (_w_kennel == undefined || _w_kennel.length == 0) {
        alert(_w_ban("_w_cornet"));
        return;
    }
    let $_w_blotch = $("<div />", {
        id: "download_confirm_dlg",
        class: "modal fade",
        role: "dialog"
    });
    let $_w_sway = $("<div />", {
        class: "modal-dialog modal-xl"
    });
    let $_w_fascia = $("<div />", {
        class: "modal-content"
    });
    let $_w_heir = $("<div />", {
        class: "modal-header"
    });
    let $_w_outset = $("<h4 />", {
        class: "modal-title",
        text: _w_ban("_w_asylum")
    });
    $_w_heir.append($_w_outset);
    $_w_fascia.append($_w_heir);
    let $_w_gallon = $("<div />", {
        class: "modal-body"
    });
    $_w_gallon.append(_w_ban("_w_pagan"));
    let $_w_genome = $("<form />", {
        class: "form-horizontal"
    });
    $_w_genome.append($("<h4 />", {
        text: _w_ban("_w_slag")
    }));
    let $_w_scab = $("<div />", {
        class: "input-group"
    });
    let $_w_motif = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("manifest_ext_name") + " / "
    });
    $_w_scab.append($_w_motif);
    let _w_pelt = {
        _w_writ: "",
        _w_hedge: ""
    };
    let $_w_sewer = $("<input />", {
        class: "form-control",
        type: "text",
        value: localStorage["filePath_format"] ? localStorage["filePath_format"] : _w_mogul._w_sack[1]
    }).on("change input", (function() {
        localStorage["filePath_format"] = $(this).prop("value");
        _w_pelt["_w_writ"] = localStorage["filePath_format"];
    })).trigger("change");
    $_w_scab.append($_w_sewer);
    let $_w_biped = $("<div />", {
        class: "input-group-btn"
    });
    $_w_biped.append($("<button />", {
        type: "button",
        class: "btn btn-default dropdown-toggle",
        "data-toggle": "dropdown"
    }).append($("<span />", {
        class: "caret"
    })));
    let $_w_cameo = $("<ul />", {
        class: "dropdown-menu dropdown-menu-right"
    });
    _w_mogul._w_sack.forEach((_w_regent => {
        let $_w_con = $("<a />", {
            href: "#",
            text: _w_regent
        });
        $_w_con.on("click", (function() {
            $_w_sewer.prop("value", $(this).text()).trigger("change");
        }));
        $_w_cameo.append($("<li />").append($_w_con));
    }));
    $_w_biped.append($_w_cameo);
    $_w_scab.append($_w_biped);
    $_w_scab.append($("<span />", {
        class: "input-group-addon",
        text: "/"
    }));
    let $_w_saliva = $("<input />", {
        type: "text",
        class: "form-control",
        value: localStorage["filename_format"] ? localStorage["filename_format"] : _w_mogul._w_mayhem[1]
    }).on("change input", (function() {
        localStorage["filename_format"] = $(this).prop("value");
        _w_pelt["_w_hedge"] = localStorage["filename_format"];
    })).trigger("change");
    $_w_scab.append($_w_saliva);
    let $_w_lope = $("<div />", {
        class: "input-group-btn"
    });
    $_w_lope.append($("<button />", {
        type: "button",
        class: "btn btn-default dropdown-toggle",
        "data-toggle": "dropdown"
    }).append($("<span />", {
        class: "caret"
    })));
    let $_w_ram = $("<ul />", {
        class: "dropdown-menu dropdown-menu-right"
    });
    _w_mogul._w_mayhem.forEach((_w_escort => {
        let $_w_cereal = $("<a />", {
            href: "#",
            text: _w_escort
        });
        $_w_cereal.on("click", (function() {
            $_w_saliva.prop("value", $(this).text()).trigger("change");
        }));
        $_w_ram.append($("<li />").append($_w_cereal));
    }));
    $_w_lope.append($_w_ram);
    $_w_scab.append($_w_lope);
    $_w_scab.append($("<span />", {
        class: "input-group-addon",
        text: ".{suffix}"
    }));
    $_w_genome.append($("<div />", {
        class: "form-group"
    }).append($("<div />", {
        class: "col-md-12 col-sm-12"
    }).append($_w_scab)));
    $_w_gallon.append($_w_genome);
    $_w_fascia.append($_w_gallon);
    let $_w_clog = $("<div />", {
        class: "modal-footer"
    });
    let $_w_siege = $("<button />", {
        class: "btn btn-default unrelative_download",
        text: _w_ban("_w_wit")
    });
    $_w_siege.prepend($("<span />", {
        class: "fa fa-terminal fa-lg"
    }));
    $_w_clog.append($_w_siege);
    let $_w_warden = $("<button />", {
        class: "btn btn-default unrelative_download",
        text: _w_ban("_w_avowal")
    });
    $_w_warden.prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    }));
    $_w_clog.append($_w_warden);
    let $_w_coop = $("<input />", {
        type: "checkbox",
        name: "continuousSwitch"
    });
    $_w_clog.append($("<span />", {
        class: "continuousSwitchContainer"
    }).append($_w_coop));
    $_w_coop.bootstrapSwitch({
        labelText: _w_ban("_w_bulk"),
        labelWidth: 100,
        onSwitchChange: function(_, state) {
            if (state == true) {
                $(".unrelative_download").hide();
            } else {
                $(".unrelative_download").show();
            }
        }
    });
    let $_w_sheen = $("<button />", {
        class: "btn btn-default",
        text: _w_ban("_w_wile")
    });
    $_w_sheen.prepend($("<span />", {
        class: "glyphicon glyphicon-download"
    }));
    $_w_clog.append($_w_sheen);
    let $_w_alert = $("<button />", {
        class: "btn btn-default",
        "data-dismiss": "modal",
        text: _w_ban("_w_maze")
    });
    $_w_alert.prepend($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_clog.append($_w_alert);
    $_w_fascia.append($_w_clog);
    $_w_sway.append($_w_fascia);
    $_w_blotch.append($_w_sway);
    $_w_blotch.modal({
        backdrop: "static",
        keyboard: false
    }).on("hidden.bs.modal", (function() {
        $(this).remove();
    })).on("shown.bs.modal", (function() {
        if ($(".modal:visible").length > 1) {
            $(".modal:visible:not(:first)").modal("hide");
        }
    }));
    $_w_siege.on("click", (function() {
        let $_w_cellar = $_w_genome.find("#curlScriptContainer");
        let $_w_haft = $_w_genome.find("#scriptTypeOptionCMD");
        let $_w_hamper = $_w_genome.find("#scriptTypeOptionShell");
        let _w_haft = "";
        let _w_hamper = "";
        let _w_panic = navigator.platform.toLocaleLowerCase().indexOf("win") == 0;
        if ($_w_cellar.length == 0) {
            let $_w_vertex = $("<h4 />", {
                text: _w_ban("_w_mien")
            });
            $_w_haft = $("<div />", {
                id: "scriptTypeOptionCMD",
                class: "btn btn-default " + (_w_panic ? "btn-primary" : ""),
                text: "CMD"
            });
            $_w_hamper = $("<div />", {
                id: "scriptTypeOptionShell",
                class: "btn btn-default " + (_w_panic ? "" : "btn-primary"),
                text: "Shell"
            });
            $_w_vertex.append($("<div />", {
                class: "btn-group btn-group-xs btn-group-vertical",
                "data-toggle": "buttons"
            }).append($_w_haft).append($_w_hamper));
            $_w_cellar = $("<textarea />", {
                id: "curlScriptContainer",
                rows: 16,
                class: "form-control"
            });
            $_w_genome.append($("<div />", {
                class: "unrelative_download"
            }).append($_w_vertex).append($("<div />", {
                class: "form-group"
            }).append($("<div />", {
                class: "col-md-12 col-sm-12"
            }).append($_w_cellar))));
            $($_w_haft).on("click", (function() {
                $(this).addClass("btn-primary");
                $_w_hamper.removeClass("btn-primary");
                $_w_cellar.prop("value", _w_haft);
            }));
            $($_w_hamper).on("click", (function() {
                $(this).addClass("btn-primary");
                $_w_haft.removeClass("btn-primary");
                $_w_cellar.prop("value", _w_hamper);
            }));
        } else {
            _w_haft = "";
            _w_hamper = "";
            $_w_cellar.prop("value", "");
        }
        _w_agenda(_w_kennel, _w_pelt, (function(_w_draft) {
            if (!_w_tack(_w_draft.src)) return;
            let _w_clout = encodeURI(decodeURI(_w_draft.referer));
            let _w_plait = navigator.languages ? navigator.languages.toString() : navigator.language.toString();
            let _w_bubble = navigator.userAgent;
            _w_haft += "\n";
            _w_haft += 'curl -L "' + _w_draft.src + '" -o "' + _w_draft.filename.replace(/\//g, "\\") + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_clout + '" -H "Accept-Language: ' + _w_plait + ';q=0.8" -H "User-Agent: ' + _w_bubble + '" -k --retry 4';
            _w_haft += "\n";
            _w_hamper += "\n";
            _w_hamper += 'curl -L "' + _w_draft.src + '" -o "' + _w_draft.filename.replace(/\//g, "/") + '" --create-dirs -H "Accept: image/*,*/*;q=0.8" -H "Connection: keep-alive" -H "Accept-Encoding: gzip, deflate, sdch" -H "Referer: ' + _w_clout + '" -H "Accept-Language: ' + _w_plait + ';q=0.8" -H "User-Agent: ' + _w_bubble + '" -k --retry 4';
            _w_hamper += "\n";
            $_w_cellar.prop("value", $_w_haft.hasClass("btn-primary") ? _w_haft : _w_hamper);
        }), null);
    }));
    $_w_warden.on("click", (function() {
        chrome.tabs.create({
            url: "chrome://settings/?search=" + _w_ban("_w_loon")
        });
    }));
    $_w_sheen.on("click", (function() {
        let _w_gusto = $_w_coop.is(":checked");
        if (_w_gusto) {
            $(this).prop("disabled", true);
            $_w_genome.find("input,select, button").prop("disabled", true);
            $_w_coop.bootstrapSwitch("disabled", true);
        }
        if (_w_gusto) {
            (function continueDownloadFun(_w_kennel) {
                _w_agenda(_w_kennel, _w_pelt, null, (function() {
                    if ($_w_blotch.is(":visible")) {
                        let _w_clip = _w_crayon();
                        setTimeout((() => {
                            continueDownloadFun(_w_clip);
                        }), 2e3);
                    }
                }));
            })(_w_kennel);
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ban("_w_crease"),
                message: _w_ban("_w_flask")
            });
        } else {
            _w_agenda(_w_kennel, _w_pelt, null, null);
            $_w_blotch.modal("hide");
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ban("_w_gorge"),
                message: _w_ban("_w_deluge")
            });
        }
    }));
    $_w_alert.on("click", (function() {}));
    if (!chrome.downloads || !chrome.downloads.download) {
        $_w_warden.attr("disabled", true);
        $_w_sheen.attr("disabled", true);
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "./images/icon512.png",
            title: _w_ban("_w_polish"),
            message: _w_ban("_w_sprout")
        }, (function(notificationId) {}));
    }
}

function _w_cynic(_w_brim, _w_canto, _w_levee) {
    function execMe() {
        _w_brim.lastExeTime = new Date;
        _w_canto();
    }
    _w_brim.timer && clearTimeout(_w_brim.timer);
    if ((new Date).getTime() - _w_brim.lastExeTime.getTime() > _w_brim.timeout) {
        execMe();
    } else {
        _w_brim.timer = setTimeout(execMe, _w_brim.timeout);
        (_w_brim.delayAgain || _w_levee) && (_w_brim.lastExeTime = new Date);
    }
}

function _w_malice(_w_ferry, _w_helve) {
    for (let i = 0; i < _w_ferry.length; ++i) {
        let _w_flax = _w_ferry[i];
        let _w_shrine = _w_flax.split("x");
        _w_ferry[_w_flax] = {
            width: _w_shrine[0],
            height: _w_shrine[1]
        };
        let _w_anchor = _w_ferry[_w_flax].height + "x" + _w_ferry[_w_flax].width;
        if (_w_helve && _w_ferry.indexOf(_w_anchor) == -1) {
            _w_ferry.push(_w_anchor);
            _w_ferry[_w_anchor] = {
                width: _w_ferry[_w_flax].height,
                height: _w_ferry[_w_flax].width
            };
        }
    }
    return _w_tusk(_w_ferry);
}

function _w_tusk(_w_ferry) {
    _w_ferry.sort((function(a, b) {
        let _w_manure = _w_ferry[a];
        let _w_crutch = _w_ferry[b];
        return _w_manure.width - _w_crutch.width > 0 ? 1 : _w_manure.width - _w_crutch.width < 0 ? -1 : _w_manure.height - _w_crutch.height > 0 ? 1 : _w_manure.height - _w_crutch.height < 0 ? -1 : 0;
    }));
    return _w_ferry;
}

function _w_gusher() {
    let _w_deputy = _w_cornet()._w_asthma();
    let _w_aspen = _w_icicle();
    _w_deputy = _w_aspen + _w_beam(_w_aspen, _w_grouch() + _w_deputy);
    return _w_deputy;
}

function _w_beam(_w_aspen, _w_archer) {
    let _w_gash = _w_aspen.indexOf("0") % 16 + 1;
    for (;_w_gash > 0; --_w_gash) {
        _w_archer = _w_clique(_w_aspen, _w_archer);
    }
    return _w_archer;
}

function _w_jaunt(_w_aspen, _w_archer) {
    let _w_gash = _w_aspen.indexOf("0") % 16 + 1;
    for (;_w_gash > 0; --_w_gash) {
        _w_archer = _w_veto(_w_aspen, _w_archer);
    }
    return _w_archer;
}

function _w_clique(_w_aspen, _w_archer) {
    let _w_sod = _w_aspen.toLowerCase().split("");
    let _w_gibe = _w_archer.toLowerCase().split("");
    let _w_bucket = _w_brat.toLowerCase().split("");
    let _w_defile = new Array;
    for (let i = 0; i < _w_gibe.length; ++i) {
        _w_defile.push(_w_sod[_w_bucket.indexOf(_w_gibe[i])]);
    }
    return _w_defile.join("");
}

function _w_veto(_w_aspen, _w_archer) {
    let _w_sod = _w_aspen.toLowerCase().split("");
    let _w_gibe = _w_archer.toLowerCase().split("");
    let _w_bucket = _w_brat.toLowerCase().split("");
    let _w_defile = new Array;
    for (let i = 0; i < _w_gibe.length; ++i) {
        _w_defile.push(_w_bucket[_w_sod.indexOf(_w_gibe[i])]);
    }
    return _w_defile.join("");
}

function _w_lust(l) {
    if (isNaN(l)) {
        l = 0;
    }
    return parseInt(Math.random() * l);
}

function _w_myopia(l) {
    let _w_phial = _w_brat;
    let _w_taper = "";
    for (let i = 0; i < l; ++i) {
        _w_taper += _w_phial.charAt(Math.ceil(Math.random() * 1e8) % _w_phial.length);
    }
    return _w_taper;
}

function _w_icicle() {
    let _w_phial = _w_brat.split("");
    let _w_ulcer = "";
    while (_w_phial.length > 0) {
        let _w_crook = Math.ceil(Math.random() * 1e8) % _w_phial.length;
        _w_ulcer += _w_phial.splice(_w_crook, 1)[0];
    }
    return _w_ulcer;
}

function _w_scale(l) {
    let _w_phial = _w_toxin;
    let _w_taper = "";
    for (let i = 0; i < l; ++i) {
        _w_taper += _w_phial.charAt(Math.ceil(Math.random() * 1e8) % _w_phial.length);
    }
    return _w_taper;
}

function _w_flush(l) {
    let _w_phial = _w_bulge;
    let _w_taper = "";
    for (let i = 0; i < l; ++i) {
        _w_taper += _w_phial.charAt(Math.ceil(Math.random() * 1e8) % _w_phial.length);
    }
    return _w_taper;
}

Number.parseInt = function(data) {
    return parseInt(data);
};

function _w_forge(_w_swirl, _w_chant) {
    if (!_w_chant || _w_chant == "") {
        if (!_w_swirl || _w_swirl == "") {
            return "";
        } else {
            return _w_swirl;
        }
    } else if (_w_tack(_w_chant)) {
        let _w_vicar = new URL(_w_chant);
        return _w_vicar.href;
    }
    let _w_iodine = null;
    try {
        _w_iodine = new URL(_w_swirl);
    } catch (exception) {
        return _w_chant;
    }
    if (_w_chant.startsWith("//")) {
        return _w_iodine.protocol + _w_chant;
    }
    let _w_relic = "";
    let _w_pen = "";
    _w_relic += _w_iodine.protocol + "//";
    if (_w_iodine.username) {
        _w_relic += _w_iodine.username;
        if (_w_iodine.password) {
            _w_relic += ":" + _w_iodine.password;
        }
        _w_relic += "@";
    }
    _w_relic += _w_iodine.host;
    _w_pen = _w_relic + _w_iodine.pathname;
    if (_w_pen[_w_pen.length - 1] != "/") {
        _w_pen = _w_pen.substring(0, _w_pen.lastIndexOf("/") + 1);
    }
    if (_w_chant[0] == "/") {
        let _w_vicar = new URL(_w_relic + _w_chant);
        return _w_vicar.href;
    } else {
        let _w_vicar = new URL(_w_pen + _w_chant);
        return _w_vicar.href;
    }
}

function _w_rubble(svgTag) {
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgTag)}`;
}

function _w_sonnet() {
    return "0." + ((new Date).getTime() / 1e3 / 3600 / 24 / 7).toFixed(0);
}

function _w_mien(_w_vicar, _w_enamel) {
    if (!_w_vicar) {
        return "";
    } else if (_w_vicar.indexOf("data:") == 0) {
        return _w_vicar;
    }
    if (_w_vicar.indexOf("#") > 0) {
        _w_vicar = _w_vicar.substring(0, _w_vicar.indexOf("#"));
    }
    if (!_w_enamel || _w_enamel.trim() == "") _w_enamel = Math.random();
    if (_w_vicar.indexOf("?") > 0) {
        _w_vicar += "&" + _w_enamel;
    } else {
        _w_vicar += "?" + _w_enamel;
    }
    return _w_vicar;
}

function _w_duct(url, action) {
    let _w_raffle = {
        type: "_w_podium",
        url: url,
        action: action,
        createNewTab: true
    };
    chrome.runtime.sendMessage(_w_grouch(), _w_raffle);
    return _w_raffle;
}

function _w_pastry() {
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_helm"
    });
}

function _w_pastel() {
    let _w_lure = [ "en-US", "zh-CN", "zh-TW" ];
    let _w_acme = navigator.language;
    if (_w_lure.indexOf(_w_acme) < 0) _w_acme = _w_lure[0];
    return _w_acme;
}

function _w_flair(url) {
    let _w_cob = "https://www.google.com/searchbyimage?hl=" + _w_pastel() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_duct(_w_cob);
}

function _w_arroyo(url) {
    let _w_cob = "https://www.google.com/searchbyimage?hl=" + _w_pastel() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_duct(_w_cob, "_w_gust");
}

function _w_crest(url) {
    let _w_cob = "https://www.google.com/searchbyimage?hl=" + _w_pastel() + "&image_url=" + encodeURIComponent(decodeURI(url));
    return _w_duct(_w_cob, "_w_gauge");
}

function _w_credo(keyword) {
    let _w_cob = "https://www.google.com/search?tbm=isch&hl=" + navigator.language + "&q=" + encodeURIComponent(keyword);
    return _w_duct(_w_cob, "_w_retail");
}

function _w_asset(keword) {
    let _w_shawl = "http://image.baidu.com/search/index?tn=baiduimage&word=" + encodeURIComponent(keword);
    return _w_duct(_w_shawl, "_w_retail");
}

function _w_prick(ajaxParam, _w_purity) {
    let _w_diver = function(data, status, xhr) {
        _w_purity(data, status, xhr);
    };
    if (window.location.protocol == "http:" || window.location.protocol == "https:") {
        _w_cougar(ajaxParam, _w_diver);
    } else {
        if (!window.funExecutePool) {
            window.funExecutePool = _w_spruce(4);
        }
        window.funExecutePool.addTask((function(beginFun, endFun) {
            beginFun();
            $.ajax(ajaxParam).always(endFun).always(_w_diver);
        }));
    }
}

function _w_cougar(requestParam, callbackFun) {
    if (!requestParam || !requestParam.url) {
        callbackFun();
        return;
    }
    requestParam.url = _w_forge(window.location.href, requestParam.url);
    let _w_signal = _w_myopia(64);
    if (!window._w_swamp) {
        chrome.runtime.onMessage.addListener((function _w_quarry(message, sender, callback) {
            if (message && message.type == "_w_drivel") {
                if (message.status == "success") {
                    message.xhr.getResponseHeader = function(headerName) {
                        return message.xhr.responseHeaders[headerName];
                    };
                }
                if (_w_minnow[message.requestHash]) {
                    let _w_flak = _w_minnow[message.requestHash];
                    delete _w_minnow[message.requestHash];
                    _w_flak = _w_flak(message.data, message.status, message.xhr);
                }
            }
        }));
        window._w_swamp = true;
    }
    _w_minnow[_w_signal] = callbackFun;
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_sop",
        requestParam: requestParam,
        requestHash: _w_signal
    });
}

function _w_resort(url) {
    try {
        let _w_vicar = new URL(_w_vicar);
        if (_w_vicar.href.startsWith(_w_snob)) {
            return false;
        } else if (_w_vicar.hostname.endsWith("cxyz.info") || _w_vicar.hostname.endsWith("pullywood.com")) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_scoop(url) {
    try {
        let _w_vicar = new URL(_w_vicar);
        if (_w_vicar.host == chrome.runtime.id) {
            return true;
        } else {
            return false;
        }
    } catch (exception) {
        return false;
    }
}

function _w_soot(url) {
    if (url.indexOf("#") > 0) url = url.substring(0, url.indexOf("#"));
    if (/^.*?([\?&]0\.\d{4,6})+$/.test(url)) {
        return url.replace(/([\?&]0\.\d{4,6})+$/, "");
    } else {
        return url;
    }
}

window._w_loon = function() {
    let _w_husk = false;
    if (typeof chrome != "undefined" && typeof chrome.extension != "undefined" && typeof chrome.extension.isAllowedFileSchemeAccess != "undefined") {
        chrome.extension.isAllowedFileSchemeAccess((function(isAllowed) {
            _w_husk = isAllowed;
        }));
    }
    return function() {
        return _w_husk;
    };
}();

function _w_fawn(url) {
    return new URL(url).pathname == "/multiUrlExtractor.html" || new URL(url).pathname == "/blank.html";
}

function _w_tack(url) {
    let _w_trawl = [ "http:", "https:", "ftp:", "data:", "about:" ];
    let _w_boom = "file:";
    if (_w_loon() || _w_cornet && _w_cornet() && _w_cornet()._w_loon()) {
        _w_trawl.push(_w_boom);
    }
    try {
        url = new URL(url);
        return _w_trawl.indexOf(url.protocol) >= 0;
    } catch (exception) {
        return false;
    }
}

function _w_ditty(url) {
    if (!url || url == "" || url.startsWith("data:")) return url;
    if (url.indexOf("#") >= 0) url = url.substring(0, url.indexOf("#"));
    return url.trim();
}

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    if (message && message.type == "_w_notch") {
        _w_notch(message.text, true);
    }
}));

function _w_notch(text, showTitle) {
    let _w_blight = "_w_blight";
    let _w_skit = {};
    _w_skit.scrollX = window.scrollX;
    _w_skit.scrollY = window.scrollY;
    let $_w_kernel = $("<link />", {
        rel: "stylesheet",
        type: "text/css",
        href: chrome.extension.getURL("libs/bootstrap/3.4.1/css/bootstrap.min.css")
    });
    $("head").append($_w_kernel);
    let $_w_scorn = $("#" + _w_blight);
    if ($_w_scorn.length > 0) $_w_scorn.modal("hide");
    $_w_scorn = $("<div />", {
        id: _w_blight,
        class: "modal fade",
        style: "z-index:999999999",
        role: "dialog"
    });
    let $_w_sway = $("<div />", {
        class: "modal-dialog"
    });
    let $_w_fascia = $("<div />", {
        class: "modal-content"
    });
    let $_w_heir = $("<div />", {
        class: "modal-header",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    let $_w_snare = $("<button />", {
        class: "close",
        "data-dismiss": "modal",
        text: "x"
    });
    $_w_heir.append($_w_snare);
    if (showTitle) {
        let $_w_outset = $("<h4 />", {
            class: "modal-title",
            style: "overflow:hidden; word-wrap: break-word; word-break: break-all;",
            text: text.trim()
        });
        $_w_heir.append($_w_outset);
    }
    $_w_fascia.append($_w_heir);
    let $_w_gallon = $("<div />", {
        class: "modal-body",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    $_w_fascia.append($_w_gallon);
    let $_w_clog = $("<div />", {
        class: "modal-footer",
        style: "overflow:hidden; word-wrap: break-word; word-break: break-all;"
    });
    $_w_clog.append('Generated By <a target="_pullywood_" href="https://www.pullywood.com/ImageAssistant/">' + _w_ban("_w_outset") + "</a>");
    $_w_fascia.append($_w_clog);
    $_w_sway.append($_w_fascia);
    $_w_scorn.append($_w_sway);
    $_w_scorn.modal({
        keyboard: true
    }).on("shown.bs.modal", (function(e) {
        function dynamicSizeQRCode(qrCodeSize) {
            $_w_gallon.html("");
            if (!qrCodeSize) {
                let _w_opiate = $_w_gallon.width() - 30;
                let _w_skiff = $_w_gallon[0].getBoundingClientRect ? window.innerHeight - $_w_gallon[0].getBoundingClientRect().top - 30 : _w_opiate;
                qrCodeSize = _w_opiate > _w_skiff ? _w_skiff : _w_opiate;
            }
            let _w_tag = null;
            let _w_sling = [ QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H ];
            while (!_w_tag && _w_sling.length > 0) {
                try {
                    let _w_volley = _w_sling.pop();
                    _w_tag = new QRCode($_w_gallon.get(0), {
                        text: text.trim(),
                        width: qrCodeSize,
                        height: qrCodeSize,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: _w_volley
                    });
                } catch (exception) {
                    $_w_gallon.html("");
                }
            }
            _w_tag = undefined;
        }
        $(window).on("resize", (function() {
            dynamicSizeQRCode();
        })).resize();
    })).on("hidden.bs.modal", (function(e) {
        $_w_kernel.remove();
        $(this).remove();
        window.scrollTo(_w_skit.scrollX, _w_skit.scrollY);
    }));
}

function _w_crag(_w_candor, _w_smart, _w_falcon, _w_quack) {
    let _w_bluff = document.createElement("div");
    let _w_tag = null;
    let _w_sling = [ QRCode.CorrectLevel.L, QRCode.CorrectLevel.M, QRCode.CorrectLevel.Q, QRCode.CorrectLevel.H ];
    while (!_w_tag && _w_sling.length > 0) {
        try {
            let _w_volley = _w_sling.pop();
            _w_tag = new QRCode(_w_bluff, {
                text: _w_candor.trim(),
                width: _w_smart,
                height: _w_smart,
                colorDark: _w_falcon,
                colorLight: _w_quack,
                correctLevel: _w_volley
            });
        } catch (exception) {}
    }
    _w_tag = undefined;
    let _w_marsh = _w_bluff.getElementsByTagName("img");
    if (_w_marsh && _w_marsh.length > 0) {
        return _w_marsh[0];
    }
}

function _w_mote(_w_quiver, _w_ken) {
    let _w_awning = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    if (typeof _w_quiver == "undefined" || typeof _w_ken == "undefined" || isNaN(_w_ken)) return "";
    _w_ken = Number.parseInt(_w_ken);
    if (_w_ken > 128) _w_ken = 128;
    _w_quiver = _w_quiver.toString();
    if (_w_quiver.length < _w_ken) {
        _w_ken -= _w_quiver.length;
        _w_quiver = _w_awning.substr(0, _w_ken) + _w_quiver;
    }
    return _w_quiver;
}

function _w_pantry(_w_curb) {
    return String(_w_curb).replace(/[&<>"'\/]/g, (function(s) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }[s];
    }));
}

function _w_fallow(string) {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function _w_claim(url) {
    if (!url) {
        return true;
    } else if (url.indexOf(_w_lout) == 0 || url.indexOf(_w_lout.replace("http://", "https://")) == 0) {
        return true;
    } else if (url.match(/^https?:\/\/(img|image|)\d*\.cxyz\.info\/.*/i)) {
        return true;
    }
    return false;
}

function _w_melon() {
    window.alert = function(alert) {
        console.log("window.alert: " + alert);
    };
    window.confirm = function(confirm) {
        console.log("window.confirm: " + confirm, ", return true");
        return true;
    };
    window.prompt = function(prompt) {
        console.log("window.prompt: " + prompt, ', return ""');
        return "";
    };
}

function _w_salute(_w_pluck = 100, checkVisible = false) {
    if (typeof window._w_creek == "undefined") {
        window._w_creek = true;
        setInterval((function() {
            if (!window._w_gong) {
                window._w_gong = 0;
            }
            let _w_verve = window.innerHeight > 100 ? window.innerHeight : 100;
            if (window.pageYOffset - window._w_gong >= _w_verve / 2) {
                chrome.runtime.sendMessage(_w_grouch(), {
                    type: "_w_fort"
                });
            }
            window._w_gong = window.pageYOffset;
        }), 50);
        let _w_glitch = 8;
        setInterval((function() {
            if (checkVisible && document.hidden) return;
            chrome.runtime.sendMessage(_w_grouch(), {
                type: "_w_revue"
            }, (function(reqNum) {
                if (reqNum < _w_glitch) {
                    window.scrollBy(0, window.innerHeight);
                }
            }));
        }), _w_pluck);
    }
}

function _w_treaty() {
    let _w_planet = {};
    return {
        add: function(item) {
            _w_planet[item] = true;
        },
        has: function(item) {
            if (_w_planet[item]) {
                return true;
            } else {
                return false;
            }
        },
        size: function() {
            return Object.keys(_w_planet).length;
        }
    };
}

function _w_lackey(url) {
    let _w_tinker = "";
    try {
        _w_tinker = new URL(url).host;
    } catch (exception) {}
    return _w_tinker;
}

function _w_sibyl(_w_pluck, _w_patina) {
    let _w_sash = {};
    let _w_pirate = _w_patina;
    let _w_cramp = {};
    let _w_vent = function(host, inTime, outOfTime) {
        if (typeof _w_cramp[host] == "undefined") {
            _w_cramp[host] = [ 0, 0 ];
        }
        inTime && _w_cramp[host][0]++;
        outOfTime && _w_cramp[host][1]++;
    };
    let _w_band = function(host) {
        if (_w_cramp[host] && _w_cramp[host][0] == 0 && _w_cramp[host][1] >= _w_pirate) {
            return true;
        } else {
            return false;
        }
    };
    return {
        setImgSrc: function(img, src, forceFetch = false) {
            let _w_tinker = _w_lackey(src);
            let _w_mosque = false;
            if (!_w_sash[src]) _w_sash[src] = {};
            let _w_lumber = _w_sash[src];
            let _w_shrub = _w_lumber._w_shrub;
            if (src && (forceFetch || !_w_shrub)) {
                let _w_girder = new AbortController;
                let _w_silt = _w_girder.signal;
                let _w_brook = setTimeout((function() {
                    _w_vent(false, true);
                    _w_mosque = true;
                    _w_girder.abort();
                }), _w_pluck);
                (_w_albino ? _w_cornet().fetch : fetch)(src, {
                    _w_silt: _w_silt
                }).then((resp => {
                    _w_lumber._w_coda = resp.status;
                    if (resp.headers) {
                        let _w_peep = resp.headers.get("content-disposition");
                        if (_w_peep) {
                            let match = _w_peep.match(/filename\=['"]?([^'"]+)['"]?;/i);
                            let _w_leash = match ? decodeURIComponent(match[1]) : null;
                            _w_lumber._w_leash = _w_leash;
                        }
                    }
                    return resp.blob();
                })).then((function(blob) {
                    let match = blob.type.match(/^(image\/.*?)$/i);
                    let _w_frenzy = match ? _w_hone[match[1].toLowerCase()] : null;
                    let _w_shrub = URL.createObjectURL(blob);
                    URL.revokeObjectURL(_w_lumber._w_shrub);
                    URL.revokeObjectURL(_w_lumber._w_cape);
                    URL.revokeObjectURL(_w_lumber._w_foyer);
                    URL.revokeObjectURL(_w_lumber._w_glow);
                    delete _w_lumber._w_shrub;
                    delete _w_lumber._w_cape;
                    delete _w_lumber._w_foyer;
                    delete _w_lumber._w_glow;
                    _w_lumber._w_frenzy = _w_frenzy;
                    _w_lumber._w_shrub = _w_shrub;
                    img.src = _w_shrub;
                    _w_vent(_w_tinker, true, false);
                })).catch((function(e) {
                    img.src = null;
                })).finally((function() {
                    clearTimeout(_w_brook);
                }));
            } else {
                img.src = _w_shrub;
            }
            return {
                isTimeout: function() {
                    return _w_mosque;
                },
                getFetchEntry: function() {
                    return _w_lumber;
                }
            };
        },
        directSetImgSrc: function(img, src) {
            img.src = src;
            return {
                isTimeout: function() {
                    return false;
                },
                getFetchEntry: function() {
                    return {};
                }
            };
        },
        bypassUrl: function(url) {
            if (typeof url == "undefined") {
                return true;
            }
            let _w_tinker = _w_lackey(url);
            if (_w_tinker == "") {
                return true;
            }
            return _w_band(_w_tinker);
        },
        getStatus: function() {
            return JSON.stringify(_w_cramp);
        },
        getBypassSite: function() {
            let _w_combat = [];
            Object.keys(_w_cramp).forEach((function(host) {
                if (_w_band(host)) {
                    _w_combat.push(host);
                }
            }));
            return _w_combat;
        },
        storePhash: function(src, phash) {
            if (_w_sash[src]) {
                _w_sash[src]._w_feat = phash;
            }
        },
        getFetchEntry: function(src) {
            return _w_sash[src];
        }
    };
}

function _w_botany(_w_leash, _w_spell) {
    let _w_jolt = document.createElement("a");
    let _w_ruck = new Blob([ _w_spell ], {
        type: "text/plain;charset=UTF-8"
    });
    _w_jolt.href = window.URL.createObjectURL(_w_ruck);
    _w_jolt.download = _w_leash;
    _w_jolt.style.display = "none";
    document.body.appendChild(_w_jolt);
    _w_jolt.click();
    _w_jolt = undefined;
}

function _w_stitch(_w_fiasco) {
    let _w_hangar = null;
    if (typeof _w_fiasco == "number") {
        _w_hangar = _w_spruce(_w_fiasco);
    } else if (_w_boor(_w_fiasco.addTask) && _w_boor(_w_fiasco.setMax)) {
        _w_hangar = _w_fiasco;
    } else {
        _w_hangar = _w_spruce(8);
    }
    let _w_mare = function(_w_simile, _w_vicar, _w_tread, _w_dynamo, _w_maple, _w_gaze, _w_pest) {
        _w_hangar.addTask((function(beginFun, endFun) {
            let _w_quay = null;
            try {
                _w_quay = JSON.stringify(_w_dynamo);
            } catch (exception) {}
            beginFun();
            $.ajax({
                method: _w_simile,
                url: _w_vicar,
                timeout: _w_votary,
                headers: _w_tread,
                data: _w_quay,
                contentType: "application/json"
            }).always(endFun).done(_w_maple).fail(_w_gaze).always(_w_pest);
        }));
    };
    return {
        ajaxGet: function(_w_vicar, _w_tread, _w_dynamo, _w_maple, _w_gaze, _w_pest) {
            _w_mare("GET", _w_vicar, _w_tread, _w_dynamo, _w_maple, _w_gaze, _w_pest);
        },
        ajaxPost: function(_w_vicar, _w_tread, _w_dynamo, _w_maple, _w_gaze, _w_pest) {
            _w_mare("POST", _w_vicar, _w_tread, _w_dynamo, _w_maple, _w_gaze, _w_pest);
        },
        setMax: function(max) {
            _w_hangar.setMax(max);
        },
        getProcessingNum: function() {
            return _w_hangar.getProcessingNum();
        },
        getTaskNum: function() {
            return _w_hangar.getTaskNum();
        }
    };
}

function _w_enzyme(_w_rung, _w_cinder, _w_garret, _w_arson) {
    let _w_salve = [];
    let _w_strife = null;
    let _w_smut = false;
    _w_rung.forEach((function(url) {
        let _w_tureen = _w_cinder.exec(url);
        if (_w_tureen) {
            _w_strife = _w_tureen;
            _w_salve.push([ _w_strife[_w_garret], parseInt(_w_strife[_w_arson] ? _w_strife[_w_arson] : 1) ]);
            if (_w_strife[_w_arson] == "") {
                _w_smut = true;
            }
        }
    }));
    _w_salve.sort((function(a, b) {
        let _w_cement = a[0].localeCompare(b[0]);
        if (_w_cement == 0) {
            _w_cement = a[1] - b[1];
        }
        return _w_cement;
    }));
    let _w_billow = Array.from(_w_rung);
    let _w_spleen = [];
    function createUrlByCharacteristic(_w_strife, _w_garret, _w_arson, _w_nomad, _w_import, _w_smut) {
        let _w_maxim = "";
        if (_w_smut && _w_import == 1) {
            _w_import = "";
        }
        for (let k = 1; k < _w_strife.length; ++k) {
            if (k == _w_garret) {
                _w_maxim = _w_maxim.concat(_w_nomad);
            } else if (k == _w_arson) {
                _w_maxim = _w_maxim.concat(_w_import);
            } else if (k == _w_arson - 1 && _w_import == "" && _w_strife[k].length > 0 && (_w_strife[k].substr(-1) == "_" || _w_strife[k].substr(-1) == "_")) {
                _w_maxim.concat(_w_strife[k].slice(0, -1));
            } else {
                _w_maxim = _w_maxim.concat(_w_strife[k]);
            }
        }
        return _w_maxim;
    }
    for (let i = 0; i < _w_salve.length; ++i) {
        let _w_blast = _w_salve.length - 1;
        let _w_whelp = function() {
            _w_spleen.push(createUrlByCharacteristic(_w_strife, _w_garret, _w_arson, _w_salve[i][0], _w_salve[i][1], _w_smut));
        };
        if (_w_salve.length == 1) {
            _w_whelp();
        } else if (i == 0) {
            item.serial;
            if (_w_salve[i][0] != _w_salve[i + 1][0]) {
                _w_whelp();
            }
        } else if (i == _w_blast) {
            if (_w_salve[i - 1][0] != _w_salve[i][0]) {
                _w_whelp();
            }
        } else if (_w_salve[i - 1][0] != _w_salve[i][0] && _w_salve[i][0] != _w_salve[i + 1][0]) {
            _w_whelp();
        }
        if (i == _w_blast) {
            continue;
        }
        if (_w_salve[i][0] == _w_salve[i + 1][0] && _w_salve[i + 1][1] - _w_salve[i][1] > 1) {
            for (let j = _w_salve[i][1] + 1; j < _w_salve[i + 1][1]; ++j) {
                let _w_maxim = createUrlByCharacteristic(_w_strife, _w_garret, _w_arson, _w_salve[i][0], j);
                _w_billow.push(_w_maxim);
            }
        }
    }
    console.log("old urls length: " + _w_rung.length + ", new Urls length: " + _w_billow.length + ", single Urls length: " + _w_spleen.length);
    return [ Array.from(new Set(_w_billow)), Array.from(new Set(_w_spleen)) ];
}

async function asyncUrlToBlobUrl(url) {
    return await (_w_albino ? _w_cornet().fetch : fetch)(url, {
        mode: "cors",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then((response => response.blob())).then((function(blob) {
        return URL.createObjectURL(blob);
    }));
}