/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

!window._w_raid && (window._w_raid = 0);

!window.prefetchForImage && (window.prefetchForImage = false);

!window.prefetchForDomImage && (window.prefetchForDomImage = false);

!window.extractorHash && (window.extractorHash = "");

!window._w_sluice && (window._w_sluice = {});

!window._w_maven && (window._w_maven = _w_spruce(8));

function _w_goad(_w_panel) {
    if (_w_panel) {
        return _w_cull(_w_panel);
    } else {
        return _w_cull(window.location.href);
    }
}

function _w_bonnet(_w_corral) {
    let $_w_prose;
    if (_w_corral instanceof jQuery) {
        $_w_prose = _w_corral;
    } else {
        $_w_prose = $(_w_corral);
    }
    return $_w_prose.attr("data-referer");
}

function _w_hive() {
    let _w_brace = function() {
        let _w_wile = {};
        let _w_fraud = $(this).get(0);
        let _w_panel = _w_bonnet(_w_fraud) ? _w_bonnet(_w_fraud) : _w_goad();
        _w_wile[_w_fraud.src] = {
            source: "_w_tyro",
            title: _w_fraud.title,
            alt: _w_fraud.alt,
            serial: window._w_raid++,
            referer: _w_panel
        };
        _w_trench(_w_wile);
    };
    $("img").on("load", _w_brace);
    let _w_spoof = function(_w_cocoon) {
        _w_cocoon.map((function(_w_hike) {
            switch (_w_hike.type) {
              case "attributes":
                let _w_tact = _w_hike.target.closest("svg");
                if (_w_tact) {
                    let _w_wile = {};
                    let _w_panel = _w_goad();
                    _w_wile[_w_rubble(_w_tact.outerHTML)] = {
                        source: "_w_group",
                        title: _w_tact.title,
                        alt: _w_tact.alt,
                        serial: window._w_raid++,
                        referer: _w_panel
                    };
                    _w_trench(_w_wile);
                }
                break;

              case "childList":
              case "subtree":
                {
                    let _w_wile = {};
                    _w_hike.addedNodes.forEach((_w_tenure => {
                        if (!_w_tenure.querySelector) return;
                        let _w_locale = _w_tenure.querySelectorAll("svg");
                        let _w_jazz = 0;
                        window._w_raid = (_w_jazz = window._w_raid) + _w_locale.length;
                        _w_locale.forEach((_w_tact => {
                            let _w_panel = _w_goad();
                            _w_wile[_w_rubble(_w_tact.outerHTML)] = {
                                source: "_w_soil",
                                title: _w_tact.title,
                                alt: _w_tact.alt,
                                serial: _w_jazz++,
                                referer: _w_panel
                            };
                        }));
                        let _w_clot = $(_w_tenure).find("a").toArray();
                        $(_w_tenure).is("A") && _w_clot.push(_w_tenure);
                        _w_clot.forEach((_w_dowry => {
                            let _w_fluke = _w_coven(_w_dowry, _w_goad());
                            for (let imgUrl in _w_fluke) {
                                _w_wile[imgUrl] = _w_fluke[imgUrl];
                            }
                            _w_grief(_w_dowry, _w_goad());
                        }));
                        let _w_marsh = $(_w_tenure).find("img").toArray();
                        $(_w_tenure).is("IMG") && _w_marsh.push(_w_tenure);
                        let _w_shred = 0;
                        window._w_raid = (_w_shred = window._w_raid) + _w_marsh.length;
                        $(_w_marsh).on("load", _w_brace);
                        _w_marsh.forEach((_w_fraud => {
                            let _w_panel = null;
                            if (_w_fraud.src) {
                                _w_panel = _w_bonnet(_w_fraud) ? _w_bonnet(_w_fraud) : _w_goad();
                                _w_wile[_w_fraud.src] = {
                                    source: "_w_gnat",
                                    title: _w_fraud.title,
                                    alt: _w_fraud.alt,
                                    serial: _w_shred++,
                                    referer: _w_panel
                                };
                            }
                            _w_grief(_w_fraud, _w_panel);
                        }));
                        let _w_miser = $(_w_tenure).find("*").toArray();
                        _w_miser.push(_w_tenure);
                        let _w_gulch = 0;
                        window._w_raid = (_w_gulch = window._w_raid) + _w_miser.length;
                        _w_miser.forEach((_w_corral => {
                            let _w_crab = _w_stem(_w_corral);
                            if (_w_crab && _w_crab.length > 0) {
                                _w_wile[_w_crab] = {
                                    source: "_w_handle",
                                    title: "",
                                    alt: "",
                                    serial: _w_gulch++,
                                    referer: _w_goad()
                                };
                            }
                        }));
                        $(_w_miser).trigger("mouseover");
                        for (let j = 0; j < _w_clot.length; ++j) {
                            let _w_dowry = _w_clot[j];
                            _w_coma(_w_dowry);
                        }
                    }));
                    _w_trench(_w_wile);
                }
            }
        }));
    };
    let _w_freak = new MutationObserver(_w_spoof);
    let _w_broker = document.body;
    let _w_wrist = {
        childList: true,
        subtree: true,
        attributes: true
    };
    _w_freak.observe(_w_broker, _w_wrist);
    try {
        $("*").trigger("mouseover");
    } catch (e) {
        console.log(e);
    }
}

function _w_stem(_w_limbo) {
    let _w_schism = [];
    try {
        let _w_halo = $(_w_limbo).css("background-image");
        if (_w_halo && _w_halo.match(/url\((['"]?)(.*?)\1\)/gi)) {
            let _w_hem = _w_halo.match(/url\((['"]?)(.*?)\1\)/gi);
            for (let idx in _w_hem) {
                let _w_lug = /url\((['"]?)(.*?)\1\)/gi.exec(_w_hem[idx]);
                _w_schism.push(_w_lug[2]);
            }
        }
    } catch (exception) {}
    return _w_schism;
}

function _w_coven(_w_dowry, _w_panel) {
    let _w_wile = {};
    if (!_w_dowry || !_w_dowry.href) {
        return _w_wile;
    }
    let _w_ensign = _w_forge(_w_panel, _w_dowry.getAttribute("href"));
    let _w_mirage = _w_bonnet(_w_dowry) ? _w_bonnet(_w_dowry) : _w_panel;
    if (_w_entry.indexOf(_w_dowry.pathname.substring(_w_dowry.pathname.lastIndexOf(".") + 1).toLowerCase()) != -1) {
        _w_wile[_w_ensign] = {
            source: "_w_ginger",
            title: _w_dowry.title,
            alt: "",
            serial: window._w_raid++,
            referer: _w_mirage
        };
    }
    let _w_bane = _w_bonnet(_w_dowry) ? _w_bonnet(_w_dowry) : _w_ensign;
    let _w_steer = _w_ream(_w_dowry.search);
    if (_w_steer && _w_steer.length > 0) {
        let _w_gamut = 0;
        window._w_raid = (_w_gamut = window._w_raid) + _w_steer.length;
        let _w_gavel = function(_w_fathom) {
            let _w_wraith = {};
            for (let idx in _w_steer) {
                let _w_eulogy = _w_steer[idx];
                if (_w_wile[_w_eulogy]) continue;
                _w_wraith[_w_eulogy] = {
                    source: "_w_void",
                    title: "",
                    alt: "",
                    serial: _w_gamut++,
                    referer: _w_fathom
                };
            }
            _w_trench(_w_wraith);
        };
        let _w_purity = function(_w_dynamo, _w_coda, _w_legion) {
            if (_w_coda == "success") {
                let _w_heyday = _w_legion.getResponseHeader("Content-Type");
                if (_w_heyday && _w_heyday.indexOf("html") < 0) {
                    _w_gavel(_w_panel);
                } else {
                    let _w_charm = document.implementation.createHTMLDocument("parseHTMLDocument");
                    let _w_jargon = _w_charm.createElement("html");
                    _w_jargon.innerHTML = DOMPurify.sanitize(_w_dynamo, {
                        WHOLE_DOCUMENT: true
                    });
                    let $_w_cue = $(_w_jargon);
                    _w_rescue(_w_bane, $_w_cue);
                    if ($_w_cue.find("a").length > 0 || $_w_cue.find("img").length > 0) {
                        _w_gavel(_w_bane);
                    } else {
                        _w_gavel(_w_panel);
                    }
                }
            } else {
                _w_gavel(_w_panel);
            }
        };
        let _w_hail = {
            method: "get",
            url: _w_bane,
            headers: {
                Accept: "*/*; charset=UTF-8",
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                Pragma: "no-cache",
                Expires: "0",
                "IA-Tag": window.extractorHash
            }
        };
        _w_prick(_w_hail, _w_purity);
    }
    return _w_wile;
}

function _w_ream(_w_eaglet) {
    let _w_pinch = [];
    if (_w_eaglet && _w_eaglet.length > 4) {
        let _w_irony = _w_eaglet.substring(1).split("&");
        for (let j = 0; j < _w_irony.length; ++j) {
            if (_w_irony[j].length > 0 && _w_irony[j].split("=").length == 2) {
                let _w_truant = _w_irony[j].split("=")[1];
                _w_truant = _w_dent(_w_truant);
                if (_w_tack(_w_truant)) {
                    let _w_mute = new URL(_w_truant);
                    if (_w_entry.indexOf(_w_mute.pathname.substring(_w_mute.pathname.lastIndexOf(".") + 1).toLowerCase()) != -1) {
                        if (_w_pinch.indexOf(_w_mute.href) < 0) _w_pinch.push(_w_mute.href);
                    }
                }
            }
        }
    }
    return _w_pinch;
}

function _w_slag(_w_tether, _w_luxury) {
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_scope"
    }, (function callback(_w_harp) {
        window._w_raid = _w_harp * 1e8;
        _w_rivet(_w_tether, _w_luxury);
    }));
}

function _w_rescue(_w_vicar, $_w_riffle) {
    let _w_vault = {};
    _w_vault["url"] = _w_vicar;
    _w_vault["title"] = $_w_riffle.find("title").text();
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_brand",
        extractorHash: extractorHash,
        pageInfo: _w_vault
    });
}

function _w_cub() {
    let _w_dismay = () => {
        let $_w_riffle = $("html");
        _w_rescue(window.location.href, $_w_riffle);
    };
    setInterval(_w_dismay, 2e3);
    _w_dismay();
}

function _w_rivet(_w_tether, _w_luxury) {
    if (window._w_smudge) return;
    window._w_smudge = (new Date).getTime();
    _w_luxury = _w_luxury.substr(0, 32);
    if ((_w_tether & 1) > 0) {
        window.prefetchForImage = true;
    }
    if ((_w_tether & 2) > 0) {
        window.prefetchForDomImage = true;
    }
    (!window.extractorHash || window.extractorHash.length == 0) && (window.extractorHash = _w_luxury);
    _w_cub();
    _w_hive();
    let _w_wile = {};
    let _w_locale = document.querySelectorAll("svg");
    let _w_jazz = 0;
    window._w_raid = (_w_jazz = window._w_raid) + _w_locale.length;
    for (let i = 0; i < _w_locale.length; ++i) {
        let _w_tact = _w_locale[i];
        let _w_panel = _w_goad();
        _w_wile[_w_rubble(_w_tact.outerHTML)] = {
            source: "_w_brooch",
            title: _w_tact.title,
            alt: _w_tact.alt,
            serial: _w_jazz++,
            referer: _w_panel
        };
    }
    let _w_marsh = document.images;
    let _w_pestle = 0;
    window._w_raid = (_w_pestle = window._w_raid) + _w_marsh.length;
    for (let i = 0; i < _w_marsh.length; ++i) {
        let _w_fraud = _w_marsh[i];
        if (_w_fraud.src) {
            let _w_panel = _w_bonnet(_w_fraud) ? _w_bonnet(_w_fraud) : _w_goad();
            _w_wile[_w_fraud.src] = {
                source: "_w_trowel",
                title: _w_fraud.title,
                alt: _w_fraud.alt,
                serial: _w_pestle++,
                referer: _w_panel
            };
        }
        _w_grief(_w_fraud, _w_goad());
    }
    let _w_miser = [];
    try {
        _w_miser = $("*");
    } catch (e) {
        console.log(e);
    }
    let _w_melody = 0;
    window._w_raid = (_w_melody = window._w_raid) + _w_miser.length;
    for (let i = 0; i < _w_miser.length; ++i) {
        let _w_schism = _w_stem(_w_miser[i]);
        for (let idx in _w_schism) {
            let _w_crab = _w_schism[idx];
            if (_w_crab && _w_crab.length > 0) {
                _w_wile[_w_crab] = {
                    source: "_w_bark",
                    title: "",
                    alt: "",
                    serial: _w_melody++,
                    referer: _w_goad()
                };
            }
        }
    }
    let _w_needle = new Array;
    let _w_clot = document.links;
    for (let i = 0; i < _w_clot.length; ++i) {
        let _w_dowry = _w_clot[i];
        if (_w_dowry && _w_dowry.href && _w_needle.indexOf(_w_dowry.href) == -1) {
            _w_needle.push(_w_dowry);
        }
    }
    for (let i = 0; i < _w_needle.length; ++i) {
        let _w_dowry = _w_needle[i];
        let _w_fluke = _w_coven(_w_dowry, _w_goad());
        for (let imgUrl in _w_fluke) {
            _w_wile[imgUrl] = _w_fluke[imgUrl];
        }
        _w_grief(_w_dowry, _w_goad());
    }
    _w_trench(_w_wile);
    for (let i = 0; i < _w_needle.length; ++i) {
        let _w_dowry = _w_needle[i];
        _w_coma(_w_dowry);
    }
}

function _w_coma(_w_dowry) {
    let _w_vicar;
    try {
        _w_vicar = new URL(_w_dowry);
    } catch (exception) {
        return;
    }
    let _w_panel = _w_bonnet(_w_dowry) ? _w_bonnet(_w_dowry) : _w_goad();
    if (_w_vicar.protocol != "http:" && _w_vicar.protocol != "https:") return;
    if (_w_resort(window.location.href)) {
        return;
    }
    let _w_fraud = new Image;
    let _w_tuber = _w_vicar.href;
    let _w_plot = function() {
        let _w_wile = {};
        _w_wile[this.src] = {
            source: "_w_chord",
            title: "",
            alt: "",
            serial: window._w_raid++,
            referer: _w_goad()
        };
        _w_trench(_w_wile);
    };
    let _w_slaver = function() {
        let _w_purity = function(_w_dynamo, _w_coda, _w_legion) {
            if (_w_coda != "success") return;
            let _w_charm = document.implementation.createHTMLDocument("parseHTMLDocument");
            let _w_jargon = _w_charm.createElement("html");
            _w_jargon.innerHTML = DOMPurify.sanitize(_w_dynamo, {
                WHOLE_DOCUMENT: true
            });
            let $_w_bump = $(_w_jargon);
            _w_rescue(_w_tuber, $_w_bump);
            let $_w_marsh = $_w_bump.find("img");
            let $_w_clot = $_w_bump.find("a");
            if (_w_resort(_w_tuber)) {
                $_w_marsh.each((function() {
                    if ($(this).attr("data-src")) $(this).attr("src", $(this).attr("data-src"));
                }));
                $_w_clot.each((function() {
                    if ($(this).attr("data-src")) $(this).attr("href", $(this).attr("data-src"));
                }));
            }
            let _w_wile = {};
            let _w_tremor = 0;
            window._w_raid = (_w_tremor = window._w_raid) + $_w_marsh.length;
            for (let i = 0; i < $_w_marsh.length; ++i) {
                let _w_fraud = $_w_marsh[i];
                let _w_crab = _w_fraud.getAttribute("src");
                if (_w_crab) {
                    _w_crab = _w_forge(_w_tuber, _w_crab);
                    _w_wile[_w_crab] = {
                        source: "_w_pane",
                        title: _w_fraud.title,
                        alt: _w_fraud.alt,
                        serial: _w_tremor++,
                        referer: _w_goad(_w_tuber)
                    };
                }
                _w_grief(_w_fraud, _w_tuber);
            }
            for (let j = 0; j < $_w_clot.length; ++j) {
                let _w_dowry = $_w_clot[j];
                let _w_fluke = _w_coven(_w_dowry, _w_tuber);
                for (let imgUrl in _w_fluke) {
                    _w_wile[imgUrl] = _w_fluke[imgUrl];
                }
                _w_grief(_w_dowry, _w_tuber);
            }
            _w_trench(_w_wile);
        };
        let _w_hail = {
            method: "get",
            url: _w_tuber,
            headers: {
                Accept: "*/*; charset=UTF-8",
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0",
                Pragma: "no-cache",
                Expires: "0",
                "IA-Tag": window.extractorHash
            }
        };
        _w_prick(_w_hail, _w_purity);
        _w_boor(window._w_scheme) && window._w_scheme(_w_dowry);
    };
    if (prefetchForImage) {
        _w_fraud.onload = _w_plot;
        if (prefetchForDomImage) {
            _w_fraud.onerror = _w_slaver;
            _w_fraud.onabort = _w_fraud.onerror;
        }
        _w_fraud.src = _w_tuber;
    } else if (prefetchForDomImage) {
        _w_slaver();
    }
}

function _w_trench(_w_wile) {
    if (!_w_wile || Object.keys(_w_wile).length == 0) return;
    for (let imgSrc in _w_wile) {
        if (_w_resort(window.location.href)) {
            continue;
        } else if (imgSrc.startsWith("data:")) {
            continue;
        }
        try {
            let _w_vicar = new URL(imgSrc);
            let _w_brake = decodeURIComponent(_w_vicar.pathname);
            if (_w_brake.indexOf("http://") >= 0 || _w_brake.indexOf("https://") >= 0) {
                let _w_wag = /https?:\/\/.*/.exec(_w_brake);
                if (_w_wag && _w_wag.length > 0 && !_w_wile[_w_wag[0]]) {
                    let _w_lease = {};
                    let _w_galaxy = _w_wile[imgSrc];
                    let _w_rail = Object.keys(_w_galaxy);
                    for (let oIdx in _w_rail) {
                        let _w_pecan = _w_rail[oIdx];
                        if (typeof _w_pecan != "undefined" && _w_pecan != null) {
                            _w_lease[_w_pecan] = _w_galaxy[_w_pecan];
                        }
                    }
                    _w_lease["source"] = "_w_lava";
                    _w_wile[_w_wag[0]] = _w_lease;
                }
            }
            let _w_steer = _w_ream(_w_vicar.search);
            let _w_grace = 0;
            window._w_raid = (_w_grace = window._w_raid) + _w_steer.length;
            for (let idx in _w_steer) {
                let _w_eulogy = _w_steer[idx];
                if (!_w_wile[_w_eulogy]) {
                    let _w_lease = {};
                    let _w_galaxy = _w_wile[imgSrc];
                    let _w_rail = Object.keys(_w_galaxy);
                    for (let oIdx in _w_rail) {
                        let _w_pecan = _w_rail[oIdx];
                        if (typeof _w_pecan != "undefined" && _w_pecan != null) {
                            _w_lease[_w_pecan] = _w_galaxy[_w_pecan];
                        }
                    }
                    _w_lease["source"] = "_w_debate";
                    _w_wile[_w_eulogy] = _w_lease;
                }
            }
        } catch (exception) {}
    }
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_ivory",
        extractorHash: extractorHash,
        images: _w_wile
    });
}

function _w_grief(_w_corral, _w_pyre) {
    if (_w_resort(window.location.href) || _w_resort(_w_pyre)) {
        return;
    }
    let _w_panel = _w_bonnet(_w_corral) ? _w_bonnet(_w_corral) : _w_goad(_w_pyre);
    let _w_marvel = _w_corral.attributes;
    let _w_ken = _w_marvel.length;
    for (let idx = 0; idx < _w_ken; ++idx) {
        let _w_gab = _w_marvel[idx];
        if (_w_gab.specified && _w_gab.name != "href" && _w_gab.name != "src") {
            let _w_bent = /^[^'"\s]+?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?.+)?$/i;
            let _w_sham = /^https?:\/\/[^'"\s]+\/[^'"\s]+$/i;
            let _w_crust = /(https?:\/\/[^'"\s]+\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp))(\?[^'"\s]+)?/gi;
            if (_w_bent.test(_w_gab.value) || _w_sham.test(_w_gab.value)) {
                let _w_dimple = _w_forge(_w_pyre, _w_gab.value);
                if (_w_sluice[_w_dimple]) {
                    continue;
                } else {
                    _w_sluice[_w_dimple] = true;
                }
                _w_maven.addTask((function(_w_barge, _w_roster) {
                    let _w_trivia = function() {
                        let _w_wile = {};
                        _w_wile[_w_dimple] = {
                            source: "_w_plaza",
                            title: _w_corral.title,
                            alt: _w_corral.alt,
                            serial: window._w_raid++,
                            referer: _w_panel
                        };
                        _w_trench(_w_wile);
                    };
                    let _w_fraud = new Image;
                    _w_fraud.onerror = _w_roster;
                    _w_fraud.onabort = _w_fraud.onerror;
                    _w_fraud.onload = function() {
                        _w_roster();
                        _w_trivia();
                    };
                    _w_barge();
                    _w_fraud.src = _w_dimple;
                }));
            } else {
                let _w_wile = {};
                let _w_lash = _w_gab.value.match(_w_crust);
                _w_lash && _w_lash.forEach((function(_w_dimple) {
                    _w_wile[_w_dimple] = {
                        source: "_w_plaza",
                        title: _w_corral.title,
                        alt: _w_corral.alt,
                        serial: window._w_raid++,
                        referer: _w_panel
                    };
                }));
                if (Object.keys(_w_wile).length > 0) {
                    _w_trench(_w_wile);
                }
            }
        }
    }
}

!window._w_spin && (window._w_spin = function() {
    let _w_grave = [];
    let _w_flask = {};
    let _w_fury = function(_w_school) {
        if (_w_school && _w_school.length && _w_school.length > 0) {
            _w_school.forEach((function(_w_dike) {
                if (!_w_flask[_w_dike]) {
                    _w_flask[_w_dike] = true;
                    _w_grave.push(_w_dike);
                }
            }));
        }
    };
    setInterval((function() {
        if (!window._w_smudge) return;
        try {
            let _w_attic = "_w_pedant";
            let _w_purse = document.getElementById(_w_attic);
            if (_w_purse) {
                if (_w_purse.value && _w_purse.value.length > 0 && _w_purse.value != _w_attic) {
                    let _w_school = JSON.parse(_w_purse.value);
                    _w_fury(_w_school);
                }
                _w_purse.value = _w_attic;
            }
        } catch (ex) {}
        while (_w_grave.length > 0) {
            let _w_panel = _w_goad();
            let _w_dimple = _w_grave.pop();
            _w_dimple = _w_forge(_w_panel, _w_dimple);
            _w_maven.addTask((function(_w_barge, _w_roster) {
                let _w_trivia = function() {
                    let _w_wile = {};
                    _w_wile[_w_dimple] = {
                        source: "_w_barn",
                        title: null,
                        alt: null,
                        serial: window._w_raid++,
                        referer: _w_panel
                    };
                    _w_trench(_w_wile);
                };
                let _w_fraud = new Image;
                _w_fraud.onerror = _w_roster;
                _w_fraud.onabort = _w_fraud.onerror;
                _w_fraud.onload = function() {
                    _w_roster();
                    _w_trivia();
                };
                _w_barge();
                _w_fraud.src = _w_dimple;
            }));
        }
    }), 512);
    try {
        let _w_gaggle = document.documentElement.innerHTML.replace(/[<>]/gi, '"').match(_w_gnome);
        _w_fury(_w_vogue(_w_gaggle));
    } catch (e) {
        console.log(e);
    }
    return {
        _w_fern: function() {
            return _w_grave.length;
        }
    };
}());