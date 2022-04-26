/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_clown = null;

window._w_addict = _w_spruce(4);

window.createDiv = function(className) {
    return $("<div />", {
        class: className
    });
};

chrome.tabs.getCurrent((function(tab) {
    window._w_clown = tab.id;
}));

function _w_torque(_w_candor) {
    let _w_wag = _w_candor.split("\n");
    let _w_spat = {};
    for (let idx in _w_wag) {
        let _w_vicar = _w_wag[idx].trim();
        if (_w_tack(_w_vicar)) {
            _w_spat[_w_vicar] = true;
        }
    }
    return Object.keys(_w_spat);
}

$((function() {
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
    let $_w_veil = $("#main");
    let $_w_genome = $("<form />", {
        class: "form-horizontal"
    });
    $_w_genome.on("submit", (function() {
        return false;
    }));
    $_w_veil.append($_w_genome);
    let $_w_sentry = $("<h4 />", {
        text: _w_ban("_w_jumble")
    });
    $_w_genome.append($_w_sentry);
    let $_w_thread = createDiv("form-group");
    let $_w_menace = $("<input />", {
        type: "text",
        class: "form-control",
        placeHolder: _w_ban("_w_laity")
    });
    let _w_pun = _w_span("originalUrl");
    if (_w_pun && _w_pun.length > 0) {
        try {
            _w_pun = decodeURIComponent(_w_pun);
        } catch (exception) {}
        $_w_menace.prop("value", _w_pun);
    }
    let $_w_bauble = createDiv("input-group");
    let $_w_witch = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_kiosk")
    });
    $_w_bauble.append($_w_witch);
    $_w_bauble.append($_w_menace);
    $_w_thread.append(createDiv("col-md-12 col-sm-12").append($_w_bauble));
    $_w_genome.append($_w_thread);
    let $_w_argot = createDiv("form-group");
    let $_w_nymph = $("<input />", {
        class: "form-control",
        type: "number",
        min: 0,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ban("_w_genre")
    });
    let $_w_gene = $("<input />", {
        class: "form-control",
        type: "number",
        min: 0,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ban("_w_genre")
    });
    let $_w_pine = $("<input />", {
        class: "form-control",
        type: "number",
        min: -99999999999,
        max: 99999999999,
        step: 1,
        value: 1,
        placeHolder: _w_ban("_w_midget")
    });
    let $_w_legend = $("<input />", {
        class: "form-control",
        type: "number",
        min: 1,
        max: 128,
        step: 1,
        value: 1,
        placeHolder: _w_ban("_w_amble")
    });
    let $_w_yoke = createDiv("input-group");
    let $_w_grind = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_bonnet")
    });
    $_w_yoke.append($_w_grind);
    $_w_yoke.append($_w_nymph);
    let $_w_bit = createDiv("input-group");
    let $_w_dainty = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_schism")
    });
    $_w_bit.append($_w_dainty);
    $_w_bit.append($_w_gene);
    let $_w_cachet = createDiv("input-group");
    let $_w_lair = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_rigor")
    });
    $_w_cachet.append($_w_lair);
    $_w_cachet.append($_w_pine);
    let $_w_adage = createDiv("input-group");
    let $_w_vista = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_slight")
    });
    $_w_adage.append($_w_vista);
    $_w_adage.append($_w_legend);
    let _w_climax = function(_w_corral) {
        let $_w_prose;
        if (_w_corral instanceof jQuery) {
            $_w_prose = _w_corral;
        } else {
            $_w_prose = $(_w_corral);
        }
        if ($_w_prose.prop("value") - $_w_prose.prop("min") < 0) {
            $_w_prose.prop("value", $_w_prose.prop("min"));
        } else if ($_w_prose.prop("value") - $_w_prose.prop("max") > 0) {
            $_w_prose.prop("value", $_w_prose.prop("max"));
        }
    };
    $_w_nymph.on("change", (function() {
        _w_climax($(this));
        if ($(this).prop("value") - $_w_gene.prop("value") > 0) {
            $_w_gene.prop("value", $(this).prop("value"));
        }
    }));
    $_w_gene.on("change", (function() {
        _w_climax($(this));
        if ($(this).prop("value") - $_w_nymph.prop("value") < 0) {
            $_w_nymph.prop("value", $(this).prop("value"));
        }
    }));
    $_w_legend.on("change", (function() {
        _w_climax($(this));
    }));
    let $_w_bore = $("<button />", {
        class: "form-control btn btn-pwd",
        text: _w_ban("_w_churl")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-flash"
    }));
    $_w_argot.append(createDiv("col-md-2 col-sm-2").append($_w_yoke));
    $_w_argot.append(createDiv("col-md-2 col-sm-2").append($_w_bit));
    $_w_argot.append(createDiv("col-md-2 col-sm-2").append($_w_cachet));
    $_w_argot.append(createDiv("col-md-3 col-sm-3").append($_w_adage));
    $_w_argot.append(createDiv("col-md-3 col-sm-3").append($_w_bore));
    $_w_genome.append($_w_argot);
    let $_w_veneer = $("<h4 />", {
        text: _w_ban("_w_lackey")
    });
    $_w_genome.append($_w_veneer);
    let $_w_guy = createDiv("form-group");
    let $_w_sprig = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ban("_w_bucket")
    });
    let $_w_fig = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ban("_w_pest")
    });
    let $_w_caste = $("<input />", {
        class: "form-control",
        type: "text",
        placeHolder: _w_ban("_w_fort")
    });
    let $_w_apogee = createDiv("input-group");
    let $_w_influx = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_flux")
    });
    $_w_apogee.append($_w_influx);
    $_w_apogee.append($_w_sprig);
    let $_w_hack = createDiv("input-group");
    let $_w_scowl = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_demise")
    });
    $_w_hack.append($_w_scowl);
    $_w_hack.append($_w_fig);
    let $_w_chef = createDiv("input-group");
    let $_w_wallop = $("<span />", {
        class: "input-group-addon",
        text: _w_ban("_w_nymph")
    });
    $_w_chef.append($_w_wallop);
    $_w_chef.append($_w_caste);
    let $_w_sow = $("<button />", {
        class: "form-control btn btn-pwd",
        text: _w_ban("_w_hull")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list"
    }));
    let $_w_folder = $("<span />");
    $_w_sow.append($_w_folder);
    $_w_guy.append(createDiv("col-md-3 col-sm-3").append($_w_apogee));
    $_w_guy.append(createDiv("col-md-3 col-sm-3").append($_w_hack));
    $_w_guy.append(createDiv("col-md-3 col-sm-3").append($_w_chef));
    $_w_guy.append(createDiv("col-md-3 col-sm-3").append($_w_sow));
    $_w_genome.append($_w_guy);
    let $_w_finale = createDiv("form-group");
    let $_w_oar = $("<h4 />", {
        text: _w_ban("_w_putter")
    });
    let $_w_clay = $("<span />");
    $_w_oar.append($_w_clay);
    $_w_genome.append($_w_oar);
    let $_w_fealty = $("<textarea />", {
        id: "url_area",
        class: "form-control",
        rows: 16,
        placeHolder: _w_ban("_w_sheen")
    });
    $_w_finale.append(createDiv("col-md-12 col-sm-12").append($_w_fealty));
    $_w_genome.append($_w_finale);
    let $_w_stroke = createDiv("form-group");
    let $_w_fetish = $("<button />", {
        id: "batch_ext_btn",
        class: "btn btn-pwd linkMode",
        text: _w_ban("_w_rein")
    }).prepend($("<span />", {
        class: "glyphicon glyphicon-list-alt"
    }));
    let $_w_attire = $("<button />", {
        id: "batch_new_tab_ext_btn",
        class: "btn btn-success",
        text: _w_ban("_w_script")
    }).prepend($("<span />", {
        class: "fa fa-bomb"
    }));
    $_w_stroke.append(createDiv("col-md-12 col-sm-12").append(createDiv("btn-group").append($_w_fetish).append($_w_attire)));
    $_w_genome.append($_w_stroke);
    $_w_bore.on("click", (function() {
        let _w_odium = $_w_menace.prop("value");
        let _w_nymph = parseInt($_w_nymph.prop("value"));
        let _w_gene = parseInt($_w_gene.prop("value"));
        let _w_pine = parseInt($_w_pine.prop("value"));
        let _w_legend = parseInt($_w_legend.prop("value"));
        if (!_w_tack(_w_odium) || _w_odium.indexOf("(*)") < 0) {
            $_w_witch.popover({
                title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ban("_w_shield"),
                content: _w_ban("_w_bazaar"),
                placement: "right",
                html: true
            }).popover("show").next().on("click", (function() {
                $(this).popover("destroy");
            })).next().on("click", (function() {
                $(this).prev().popover("destroy");
            }));
            return;
        }
        let _w_dotage = "";
        _w_nymph = Math.floor(_w_nymph);
        _w_gene = Math.floor(_w_gene);
        if (_w_pine >= 0 && _w_pine < 1) {
            _w_pine = 1;
        } else {
            _w_pine = Math.floor(_w_pine);
        }
        for (let idx = _w_nymph; idx <= _w_gene; idx += Math.abs(_w_pine)) {
            let _w_pith = _w_mote(idx, _w_legend);
            _w_pith = _w_odium.replace("(*)", _w_pith);
            if (_w_pine > 0) {
                _w_dotage += _w_pith + "\n";
            } else {
                _w_dotage = _w_pith + "\n" + _w_dotage;
            }
        }
        $_w_fealty.prop("value", $_w_fealty.prop("value") + "\n" + _w_dotage);
    }));
    $_w_sow.on("click", (function() {
        let _w_fodder = _w_torque($_w_fealty.prop("value"));
        if (_w_fodder.length == 0) {
            $_w_clay.popover({
                title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ban("_w_fodder"),
                content: _w_ban("_w_pore"),
                placement: "right",
                html: true
            }).popover("show").next().on("click", (function() {
                $(this).popover("destroy");
            }));
            return;
        }
        let _w_fringe = [];
        let _w_prig = $_w_sprig.prop("value");
        let _w_shack = $_w_fig.prop("value");
        let _w_eclat = $_w_caste.prop("value");
        if (_w_prig && _w_prig.trim().length > 0) _w_fringe.push(_w_prig);
        if (_w_shack && _w_shack.trim().length > 0) _w_fringe.push(_w_shack);
        if (_w_eclat && _w_eclat.trim().length > 0) _w_fringe.push(_w_eclat);
        $_w_fealty.prop("value", "");
        let _w_pylon = " {#^_^#}";
        let _w_fang = _w_prig + _w_pylon + _w_shack + _w_pylon + _w_eclat;
        if (!window._w_saddle || window._w_saddle != _w_fang) {
            window._w_saddle = _w_fang;
            window._w_vessel = {};
        }
        function _w_gamble(_w_ensign, _w_fringe) {
            for (let idx = 0; idx < _w_fringe.length; ++idx) {
                let _w_hush = _w_fringe[idx];
                if (_w_ensign.indexOf(_w_hush) < 0) {
                    return false;
                }
            }
            return true;
        }
        let _w_levy = {};
        let _w_sandal = _w_fodder.filter((function(item) {
            if (_w_gamble(item, _w_fringe)) {
                _w_levy[item] = true;
                return item;
            }
        }));
        while (_w_fodder.length > 0) {
            let _w_larder = _w_fodder.shift();
            if (window._w_vessel[_w_larder]) {
                Object.keys(window._w_vessel[_w_larder]).forEach((function(item) {
                    if (!_w_levy[item] && _w_gamble(item, _w_fringe)) {
                        _w_levy[item] = true;
                        _w_sandal.push(item);
                    }
                }));
                continue;
            }
            _w_addict.addTask((function(_w_barge, _w_roster, _w_rite) {
                let _w_maize = function(_w_lament) {
                    let _w_mutton = _w_rite();
                    $_w_folder.html("(" + _w_mutton[0] + "/" + _w_mutton[1] + " -> " + _w_sandal.length + ")");
                    if (_w_lament || _w_mutton[0] > 0 || _w_mutton[1] > 0) {
                        $_w_bore.attr("disabled", true);
                        $_w_sow.attr("disabled", true);
                        $_w_fetish.attr("disabled", true);
                        $_w_attire.attr("disabled", true);
                    } else {
                        $_w_folder.html("");
                        $_w_bore.attr("disabled", false);
                        $_w_sow.attr("disabled", false);
                        $_w_fetish.attr("disabled", false);
                        $_w_attire.attr("disabled", false);
                    }
                };
                _w_maize(true);
                _w_barge();
                $.ajax({
                    method: "get",
                    url: _w_larder,
                    timeout: _w_votary,
                    headers: {
                        Accept: "*/*; charset=UTF-8",
                        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                        Pragma: "no-cache",
                        Expires: "0",
                        "IA-Tag": "extractor_hash_temporarily_unavaiable"
                    }
                }).done((function(data) {
                    let _w_charm = document.implementation.createHTMLDocument("parseHTMLDocument");
                    let _w_jargon = _w_charm.createElement("html");
                    _w_jargon.innerHTML = DOMPurify.sanitize(data, {
                        WHOLE_DOCUMENT: true
                    });
                    let $_w_jargon = $(_w_jargon);
                    $_w_jargon.find("a").each((function() {
                        let _w_ensign = $(this).attr("href");
                        _w_ensign = _w_forge(_w_larder, _w_ensign);
                        if (_w_gamble(_w_ensign, _w_fringe)) {
                            if (!window._w_vessel[_w_larder]) window._w_vessel[_w_larder] = {};
                            window._w_vessel[_w_larder][_w_ensign] = true;
                            if (_w_ensign.indexOf("#") > 0) _w_ensign = _w_ensign.substring(0, _w_ensign.indexOf("#"));
                            if (!_w_levy[_w_ensign]) {
                                _w_levy[_w_ensign] = true;
                                _w_sandal.push(_w_ensign);
                            }
                        }
                    }));
                })).always((function() {
                    _w_roster();
                    _w_maize();
                }));
            }));
        }
        let _w_blurb = setInterval((function() {
            if (_w_addict.getTaskNum() > 0 || _w_addict.getProcessingNum() > 0) return;
            clearInterval(_w_blurb);
            $_w_fealty.prop("value", _w_sandal.reduce((function(a, b) {
                return a + "\n" + b;
            })));
            $_w_fealty.scrollTop($_w_fealty.get(0).scrollHeight);
        }), 250);
    }));
    $_w_fetish.on("click", (function() {
        $(".btn").attr("disabled", true);
        let _w_fodder = _w_torque($_w_fealty.prop("value"));
        if (_w_fodder.length > 0) {
            _w_buggy(_w_fodder);
        }
    }));
    $_w_attire.on("click", (function() {
        let _w_fodder = _w_torque($_w_fealty.prop("value"));
        if (_w_fodder.length > 0) {
            $_w_fealty.attr("disabled", true);
            $(".btn").attr("disabled", true);
            _w_pelf(_w_fodder, (function() {
                $_w_fealty.prop("value", "");
                $_w_fealty.attr("disabled", false);
                $(".btn").attr("disabled", false);
            }));
        }
    }));
    let _w_closet = _w_span("msgChannel");
    if (_w_closet && _w_closet.length > 0) {
        chrome.runtime.onMessage.addListener((function(message, sender, callback) {
            message && message.type == "_w_clam" && message.channel == _w_closet && _w_nicety(message.links, message.currentPageUrl) & _w_fray(message.collections);
        }));
    }
    $("#dialog_add_all").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
    }));
    $("#dialog_ext_all").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
        $("#batch_ext_btn").click();
    }));
    $("#dialog_ext_all_in_new_window").on("click", (function() {
        $(".btn.add_task_btn:visible").click();
        setTimeout((function() {
            $("#batch_new_tab_ext_btn").click();
        }), 0);
    }));
    document.title = _w_ban("_w_slouch");
    $("#i18n_charactistic_url_ext").text(_w_ban("_w_frisk"));
    $("#i18n_group_keyword_filter").text(_w_ban("_w_willow"));
    $("#dialog_add_all").text(_w_ban("_w_apron"));
    $("#dialog_ext_all").text(_w_ban("_w_clip"));
    $("#dialog_ext_all_in_new_window").text(_w_ban("_w_rancor"));
    $("#grp_keyword_filter").attr("placeHolder", _w_ban("_w_forage"));
    $("#dialog_close_btn").text(_w_ban("_w_wallow"));
}));

window.waterBasic = function() {
    function init() {
        $("#group_container").css("height", $(window).height() - 280);
        let _w_pony = $(".grp_item:visible").outerWidth(true), colNum = 3, colSumHeight = [];
        for (let i = 0; i < colNum; i++) {
            colSumHeight.push(0);
        }
        $(".grp_item:visible").each((function() {
            let $_w_breach = $(this), idx = 0, minSumHeight = colSumHeight[0];
            for (let i = 0; i < colSumHeight.length; i++) {
                if (minSumHeight > colSumHeight[i]) {
                    minSumHeight = colSumHeight[i];
                    idx = i;
                }
            }
            $_w_breach.css({
                left: _w_pony * idx,
                top: minSumHeight
            });
            colSumHeight[idx] = colSumHeight[idx] + $_w_breach.outerHeight(true);
        }));
    }
    $(window).on("resize", (function() {
        init();
    }));
    return {
        init: init
    };
}();

function _w_nicety(_w_clot, _w_glade) {
    if (_w_clot.length == 0) {
        return;
    }
    let $_w_wrath = $("#links_filter_container");
    let $_w_accord = $("#links_filter_item_container");
    let $_w_screw = $_w_wrath.find(".add_task_btn").text(_w_ban("_w_poll"));
    let $_w_bar = $_w_wrath.find(".ext_task_btn").text(_w_ban("_w_cavern"));
    let $_w_stupor = $_w_wrath.find(".new_window_ext_btn").text(_w_ban("_w_trifle"));
    let $_w_faucet = $_w_accord.find(".list-group-item#link_item_template").remove().removeAttr("id");
    $_w_wrath.find(".msg_links_filter_original_links").text(_w_ban("_w_harp"));
    let _w_squash = function() {
        let _w_mold = "";
        $_w_accord.find(".list-group-item:visible").remove().each((function() {
            _w_mold += $(this).attr("data-url") + "\n";
        }));
        return _w_mold;
    };
    $_w_screw.on("click", (function() {
        $("#url_area").prop("value", $("#url_area").prop("value") + _w_squash() + "\n");
        waterBasic.init();
        return false;
    }));
    $_w_bar.on("click", (function() {
        $("#url_area").prop("value", _w_squash());
        $("#batch_ext_btn").click();
    }));
    $_w_stupor.on("click", (function() {
        $("#url_area").prop("value", _w_squash());
        setTimeout((function() {
            $("#batch_new_tab_ext_btn").click();
        }), 0);
    }));
    for (let link in _w_clot) {
        let _w_lever = _w_clot[link];
        let $_w_slosh = $_w_faucet.clone();
        $_w_slosh.attr("data-url", link);
        $_w_slosh.find(".link_item_title").text(_w_lever).addClass(link == _w_glade ? "bold-text" : "");
        $_w_slosh.find(".link_item_url").text(link);
        $_w_slosh.appendTo($_w_accord);
        let _w_fillet = _w_lever + " " + link;
        $("#grp_keyword_filter").on("input change blur", (function() {
            let _w_carol = $(this).prop("value").match(/\S+/g);
            if (!_w_carol) {
                $_w_slosh.show();
            } else {
                let _w_tumult = true;
                for (let i in _w_carol) {
                    if (_w_fillet.indexOf(_w_carol[i]) < 0) {
                        _w_tumult = false;
                        break;
                    }
                }
                if (_w_tumult) {
                    $_w_slosh.show();
                } else {
                    $_w_slosh.hide();
                }
            }
        }));
    }
}

function _w_fray(_w_merit) {
    if (_w_merit.length == 0) {
        return;
    }
    let $_w_decree = $("#group_container");
    for (let idx = 0; idx < _w_merit.length; ++idx) {
        let _w_tutor = _w_merit[idx];
        let _w_taboo = _w_tutor["fillUrlList"];
        let _w_tenant = _w_tutor["fillUrlText"];
        let _w_glade = _w_tutor["currentPageUrl"];
        let _w_fillet = _w_tutor["urlList"].reduce((function(a, b) {
            return a + " " + b;
        })) + Object.values(_w_tutor["urlText"]).reduce((function(a, b) {
            return a + " " + b;
        }));
        let $_w_nick = $("<div />", {
            class: "list-group"
        });
        let $_w_bluff = $("<div />", {
            class: "col-md-4 col-sm-4 grp_item"
        });
        $_w_bluff.append($_w_nick);
        $_w_decree.append($_w_bluff);
        let _w_tempo = function(_w_sermon, _w_candor, _w_hyphen) {
            return $("<a />", {
                class: "list-group-item"
            }).append($("<h4 />", {
                class: "list-group-item-heading break_all_word" + (_w_hyphen ? " bold-text" : ""),
                text: _w_sermon
            })).append($("<p />", {
                class: "list-group-item-text break_all_word",
                text: _w_candor
            }));
        };
        let _w_buck = 8;
        for (let i = 0; i < _w_taboo.length; ++i) {
            if (i < _w_buck - 1 || _w_buck == _w_taboo.length) {
                if (_w_glade == _w_taboo[i]) {
                    $_w_nick.append(_w_tempo(_w_tenant[_w_taboo[i]], _w_taboo[i], true));
                } else {
                    $_w_nick.append(_w_tempo(_w_tenant[_w_taboo[i]], _w_taboo[i]));
                }
            } else {
                $_w_nick.append(_w_tempo("......", _w_taboo.length - (_w_buck - 1) + _w_ban("_w_burial")));
                break;
            }
        }
        let _w_tint = function(_w_candor, _w_marrow) {
            return $("<button />", {
                class: "btn " + _w_marrow,
                text: _w_candor,
                "data-dismiss": "modal"
            });
        };
        let _w_brood = function($btn) {
            return $("<div />", {
                class: "btn-group"
            }).append($btn);
        };
        let $_w_whimsy = _w_tint(_w_ban("_w_poll"), "btn-primary add_task_btn");
        let $_w_bait = _w_tint(_w_ban("_w_cavern"), "btn-pwd");
        let $_w_score = _w_tint(_w_ban("_w_trifle"), "btn-success");
        let $_w_augur = $("<div />", {
            class: "btn-toolbar"
        });
        $_w_augur.append(_w_brood($_w_whimsy)).append(_w_brood($_w_bait)).append(_w_brood($_w_score));
        $_w_nick.prepend($("<a />", {
            class: "list-group-item"
        }).append($("<h4 />", {
            class: "list-group-item-heading break_all_word"
        }).append($_w_augur)));
        let _w_graft = function(a, b) {
            return a + "\n" + b;
        };
        $_w_whimsy.on("click", (function() {
            $("#url_area").prop("value", $("#url_area").prop("value") + _w_taboo.reduce(_w_graft) + "\n");
            $_w_bluff.remove();
            waterBasic.init();
            return false;
        }));
        $_w_bait.on("click", (function() {
            $("#url_area").prop("value", _w_taboo.reduce(_w_graft));
            $("#batch_ext_btn").click();
        }));
        $_w_score.on("click", (function() {
            $("#url_area").prop("value", _w_taboo.reduce(_w_graft));
            setTimeout((function() {
                $("#batch_new_tab_ext_btn").click();
            }), 0);
        }));
        $("#grp_keyword_filter").on("input change blur", (function() {
            let _w_carol = $(this).prop("value").match(/\S+/g);
            if (!_w_carol) {
                $_w_bluff.show();
            } else {
                let _w_tumult = true;
                for (let i in _w_carol) {
                    if (_w_fillet.indexOf(_w_carol[i]) < 0) {
                        _w_tumult = false;
                        break;
                    }
                }
                if (_w_tumult) {
                    $_w_bluff.show();
                } else {
                    $_w_bluff.hide();
                }
            }
            waterBasic.init();
        }));
    }
    $("#characteristic_ext").on("shown.bs.modal", (function() {
        waterBasic.init();
    })).modal();
}

function _w_buggy(_w_fodder) {
    let _w_tether = 2;
    _w_cornet()._w_domain(_w_clown);
    _w_cornet()._w_pulp(_w_clown, _w_tether);
    let _w_bridle = _w_cornet()._w_toll(_w_clown) + _w_gusher();
    let _w_spunk = {
        tabId: _w_clown,
        lastFullScroll: 1,
        lastRequest: 1,
        lastPushImage: 1
    };
    _w_cornet()._w_hoard.registerTab(_w_spunk.tabId, _w_spunk);
    _w_palate(_w_fodder, _w_spunk);
    _w_slag(_w_tether, _w_bridle);
}

function _w_pelf(_w_fodder, _w_parity) {
    let _w_tether = 0;
    let _w_beacon = _w_fodder.length;
    _w_cornet()._w_domain(_w_clown);
    _w_cornet()._w_pulp(_w_clown, _w_tether);
    let _w_bridle = _w_cornet()._w_toll(_w_clown) + _w_gusher();
    let _w_mope = document.title;
    (function doMultiExt(_w_fodder) {
        if (!_w_fodder || _w_fodder.length == 0) {
            if (_w_parity) {
                _w_parity();
            }
            document.title = _w_mope;
            return;
        }
        document.title = "Tasks: 0/" + _w_fodder.length + "/" + _w_beacon + " - " + _w_mope;
        let _w_vicar = _w_fodder.shift();
        chrome.tabs.create({
            url: _w_vicar,
            active: false
        }, (function(tab) {
            setTimeout((function() {
                if (!tab) {
                    doMultiExt(_w_fodder);
                    return;
                }
                let _w_pagan = tab.id;
                let _w_spunk = {
                    tabId: _w_pagan,
                    lastFullScroll: 1,
                    lastRequest: 1,
                    lastPushImage: 1
                };
                _w_cornet()._w_hoard.registerTab(_w_spunk.tabId, _w_spunk);
                let _w_scarp = 1500;
                let _w_omelet = 1500;
                let _w_trance = 2e3;
                let _w_scathe = null;
                _w_scathe = setInterval((function() {
                    document.title = "Tasks: " + _w_spunk.requestNum() + "/" + _w_fodder.length + "/" + _w_beacon + " - " + _w_mope;
                    let _w_typo = (new Date).getTime();
                    if (_w_spunk.requestNum() == 0 && _w_typo - _w_spunk["lastFullScroll"] > _w_scarp && _w_typo - _w_spunk["lastRequest"] > _w_omelet && _w_typo - _w_spunk["lastPushImage"] > _w_trance) {
                        (function _w_gander() {
                            _w_lace(tab.id, (function() {
                                if (chrome.runtime.lastError && chrome.runtime.lastError.message.indexOf("dragging") > 0) {
                                    console.log(chrome.runtime.lastError.message, "Retry in one second.");
                                    setTimeout(_w_gander, 1e3);
                                }
                            }));
                        })();
                        doMultiExt(_w_fodder);
                        clearInterval(_w_scathe);
                    }
                }), 100);
                _w_cornet()._w_vim(tab.id, _w_tether, _w_bridle);
                _w_cornet()._w_credit(tab.id, _w_cornet()._w_toll(_w_clown));
                _w_cornet()._w_sting(tab.id, [ {
                    file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    file: "scripts/function.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    code: "_w_melon();",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    code: "_w_salute();",
                    runAt: "document_end",
                    allFrames: true
                } ]);
            }), 512);
        }));
    })(_w_fodder);
}

function _w_palate(_w_rung, _w_spunk) {
    document.title = _w_ban("_w_sock") + "(" + (new Date).getTime() + ")";
    let $_w_riffle = $("body");
    $_w_riffle.html("");
    $_w_riffle.append(_w_ban("_w_tipple") + "<br />\n");
    $_w_riffle.append($("<div />", {
        id: "linkCounter"
    }));
    $_w_riffle.append($("<div />", {
        id: "attrSniffCounter"
    }));
    $_w_riffle.append($("<div />", {
        id: "ajaxTaskCounter"
    }));
    let _w_ledger = 0;
    setInterval((function() {
        $("#linkCounter").html(_w_ban("_w_tackle") + _w_ledger + "/" + _w_rung.length);
        $("#attrSniffCounter").html(_w_ban("_w_warden") + _w_addict.getProcessingNum() + "/" + _w_addict.getTaskNum() + "/" + Object.keys(_w_sluice).length);
        if (window.funExecutePool) {
            $("#ajaxTaskCounter").html(_w_ban("_w_lug") + window.funExecutePool.getProcessingNum() + "/" + window.funExecutePool.getTaskNum() + " - " + _w_spunk.requestNum());
        }
        let _w_scarp = 1500;
        let _w_omelet = 1500;
        let _w_trance = 2e3;
        let _w_typo = (new Date).getTime();
        if (_w_spunk.requestNum() == 0 && _w_typo - _w_spunk["lastFullScroll"] > _w_scarp && _w_typo - _w_spunk["lastRequest"] > _w_omelet && _w_typo - _w_spunk["lastPushImage"] > _w_trance) {
            if (_w_ledger >= _w_rung.length) return;
            if ($(".prefetch_link").length > 0) return;
            if (_w_addict && _w_addict.getTaskNum() > 64) return;
            if (window.funExecutePool && window.funExecutePool.getTaskNum() > 4) return;
            let _w_vicar = _w_rung[_w_ledger++];
            $_w_riffle.append($("<a />", {
                class: "prefetch_link",
                href: _w_vicar
            }));
        }
    }), 100);
}

function _w_scheme(link) {
    $(link).remove();
}