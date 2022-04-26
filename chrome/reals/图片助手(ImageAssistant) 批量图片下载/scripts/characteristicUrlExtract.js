/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

function _w_geyser(_w_pillar) {
    let _w_totem = [];
    for (let idx in _w_pillar) {
        let _w_vicar = _w_pillar[idx];
        if ("string" != typeof _w_vicar || !_w_vicar.startsWith("http")) continue;
        let _w_moor = _w_vicar.split(/([0-9]+)/);
        _w_totem.push(_w_moor);
    }
    return _w_totem;
}

function _w_tundra(_w_pillar) {
    let _w_totem = [];
    for (let idx in _w_pillar) {
        let _w_vicar = _w_pillar[idx];
        if ("string" != typeof _w_vicar || !_w_vicar.startsWith("http")) continue;
        let _w_moor = _w_vicar.split(/([^0-9a-zA-Z%]+|\d+(?=[\/_\?#]))/);
        let _w_revise = _w_vicar.split(/([^0-9a-zA-Z%\-_]+)/);
        _w_totem.push(_w_moor);
        if (JSON.stringify(_w_moor) != JSON.stringify(_w_revise)) {
            _w_totem.push(_w_revise);
        }
    }
    return _w_totem;
}

function _w_harbor(_w_quirk, _w_closet, _w_herald) {
    let _w_clot = [ ...document.links ];
    let frames = window.frames;
    for (let i = 0; i < frames.length; ++i) {
        try {
            _w_clot = _w_clot.concat([ ...frames[i].document.links ]);
        } catch (e) {}
    }
    let _w_pillar = [];
    let _w_buoy = {};
    let _w_muscle = window.location.href;
    if (_w_muscle.indexOf("#") > 0) _w_muscle = _w_muscle.substring(0, _w_muscle.indexOf("#"));
    for (let idx in _w_clot) {
        let _w_dowry = _w_clot[idx];
        if (_w_dowry.protocol && (_w_dowry.protocol == "http:" || _w_dowry.protocol == "https:")) {
            let _w_recall = _w_dowry.href.trim();
            if (_w_recall.indexOf("#") > 0) _w_recall = _w_recall.substring(0, _w_recall.indexOf("#"));
            if (_w_pillar.indexOf(_w_recall) < 0) {
                _w_pillar.push(_w_recall);
                _w_buoy[_w_recall] = _w_dowry;
            } else if (_w_dowry.text.trim().length > _w_buoy[_w_recall].text.trim().length) {
                _w_buoy[_w_recall] = _w_dowry;
            }
        }
    }
    if (_w_pillar.indexOf(_w_muscle) < 0) {
        _w_pillar.push(_w_muscle);
    }
    _w_buoy[_w_muscle] = $("<a />", {
        href: _w_muscle,
        title: document.title,
        text: document.title
    })[0];
    let _w_totem = _w_quirk(_w_pillar);
    let _w_affix = {};
    for (let i = 0; i < _w_totem.length; ++i) {
        for (let j = i + 1; j < _w_totem.length; ++j) {
            let _w_nausea = _w_totem[i];
            let _w_canard = _w_totem[j];
            if (_w_nausea.length != _w_canard.length) continue;
            let _w_larva = 0;
            let _w_clasp = _w_nausea.length;
            let _w_iota = "";
            let _w_loaf = "";
            let _w_gull = "";
            let _w_drill = 0;
            let _w_oracle = [];
            for (let cnt = 0; cnt < _w_clasp; ++cnt) {
                if (_w_nausea[cnt] != _w_canard[cnt]) {
                    if (_w_larva != 0) {
                        _w_larva = Number.MAX_SAFE_INTEGER;
                        break;
                    }
                    _w_loaf = _w_iota;
                    _w_iota = "";
                    _w_drill = cnt;
                    _w_oracle.push(_w_nausea[cnt]);
                    _w_oracle.push(_w_canard[cnt]);
                    _w_larva++;
                } else {
                    _w_iota += _w_nausea[cnt];
                }
            }
            _w_gull = _w_iota;
            _w_iota = _w_loaf + "*" + _w_gull;
            if (_w_larva != 1) {
                continue;
            }
            let _w_skewer = function(a, b) {
                return a + b;
            };
            let _w_taboo = [ _w_nausea.reduce(_w_skewer), _w_canard.reduce(_w_skewer) ];
            let _w_bluff = _w_affix[_w_iota];
            if (_w_bluff == null) {
                _w_bluff = {};
                _w_bluff["joinedStrBeforeDiff"] = _w_loaf;
                _w_bluff["joinedStrAfterDiff"] = _w_gull;
                _w_bluff["joinedStrPattern"] = _w_iota;
                _w_bluff["diffIndex"] = _w_drill;
                _w_bluff["diffIsNumeric"] = true;
                _w_bluff["diffBreakCount"] = 0;
                _w_bluff["diffList"] = _w_oracle;
                _w_bluff["urlList"] = _w_taboo;
                _w_bluff["containCurrentPageUrl"] = false;
                _w_bluff["currentPageUrl"] = _w_muscle;
                _w_affix[_w_iota] = _w_bluff;
            } else {
                for (let idx in _w_oracle) {
                    if (_w_bluff["diffList"].indexOf(_w_oracle[idx]) < 0) {
                        _w_bluff["diffList"].push(_w_oracle[idx]);
                    }
                }
                for (let idx in _w_taboo) {
                    if (_w_bluff["urlList"].indexOf(_w_taboo[idx]) < 0) {
                        _w_bluff["urlList"].push(_w_taboo[idx]);
                    }
                }
            }
            if (_w_muscle == _w_taboo[0] || _w_muscle == _w_taboo[1]) {
                _w_bluff["containCurrentPageUrl"] = true;
            }
        }
    }
    let _w_slice = [];
    for (let pattern in _w_affix) {
        _w_slice.push(_w_affix[pattern]);
    }
    for (let idx in _w_slice) {
        let _w_slight = _w_slice[idx];
        _w_slight["diffList"].sort((function(a, b) {
            if (jQuery.isNumeric(a) && jQuery.isNumeric(b)) {
                return parseInt(a) - parseInt(b);
            } else {
                return a - b;
            }
        }));
        let _w_brawl = 0;
        let _w_recipe = 5;
        let _w_oracle = _w_slight["diffList"];
        for (let idx = 0; idx < _w_oracle.length - 1; ++idx) {
            if (idx == 0 && _w_oracle[idx] == "") {
                continue;
            } else if (!jQuery.isNumeric(_w_oracle[idx]) || !jQuery.isNumeric(_w_oracle[idx + 1])) {
                _w_brawl = Number.MAX_VALUE;
                _w_slight["diffIsNumeric"] = false;
            } else if (_w_oracle[idx + 1] - _w_oracle[idx] > 1) {
                _w_brawl += 1;
            }
        }
        _w_slight["diffBreakCount"] = _w_brawl;
        if (_w_brawl > _w_recipe) {
            _w_slight["fillList"] = _w_slight["diffList"];
        } else if (_w_oracle[_w_oracle.length - 1] - _w_oracle.length > 1024) {
            _w_slight["fillList"] = _w_slight["diffList"];
        } else {
            let _w_saga = _w_oracle[0].toString()[0] == "0" && _w_oracle[0].toString().length > 1 ? _w_oracle[0].toString().length : 1;
            _w_slight["fillList"] = [];
            for (let i = 0; i <= _w_oracle[_w_oracle.length - 1]; ++i) {
                _w_slight["fillList"].push(_w_mote(i, _w_saga));
            }
        }
        let _w_loaf = _w_slight["joinedStrBeforeDiff"];
        let _w_gull = _w_slight["joinedStrAfterDiff"];
        _w_slight["urlList"] = [];
        _w_slight["urlText"] = {};
        _w_oracle = _w_slight["diffList"];
        for (let itemIdx in _w_oracle) {
            let _w_foray = _w_oracle[itemIdx];
            let _w_vicar = _w_loaf + _w_foray + _w_gull;
            let _w_howler = _w_buoy[_w_vicar] ? _w_buoy[_w_vicar].text : "无文字链接[" + _w_foray + "]";
            _w_howler = _w_howler.trim().length > 0 ? _w_howler.trim() : _w_vicar;
            _w_slight["urlList"].push(_w_vicar);
            _w_slight["urlText"][_w_vicar] = _w_howler;
        }
        _w_slight["fillUrlList"] = [];
        _w_slight["fillUrlText"] = {};
        let _w_toil = _w_slight["fillList"];
        let _w_limb = false;
        for (let itemIdx in _w_toil) {
            let _w_visage = _w_toil[itemIdx];
            let _w_vicar = _w_loaf + _w_visage + _w_gull;
            let _w_howler = _w_buoy[_w_vicar] ? _w_buoy[_w_vicar].text : "智能填充链接[" + _w_visage + "]";
            _w_howler = _w_howler.trim().length > 0 ? _w_howler.trim() : _w_vicar;
            let _w_gambol = _w_loaf.substr(-1);
            if (!_w_limb && (_w_gambol == "-" || _w_gambol == "_" || _w_gambol == "/") && (_w_gull.length == 0 || _w_gull[0] == ".") && (_w_visage == 0 || _w_visage == 1)) {
                let _w_beet;
                if (_w_gambol == "/") {
                    _w_beet = _w_loaf;
                } else {
                    _w_beet = _w_loaf.slice(0, -1) + _w_gull;
                }
                let _w_verge = _w_buoy[_w_beet] ? _w_buoy[_w_beet].text : "智能填充链接[ ]";
                _w_slight["fillUrlList"].push(_w_beet);
                _w_slight["fillUrlText"][_w_beet] = _w_verge;
                _w_limb = true;
                if (_w_slight["currentPageUrl"] == _w_beet) {
                    _w_slight["containCurrentPageUrl"] = true;
                    _w_slight["urlList"].push(_w_beet);
                    _w_slight["urlText"][_w_beet] = _w_verge;
                }
            }
            _w_slight["fillUrlList"].push(_w_vicar);
            _w_slight["fillUrlText"][_w_vicar] = _w_howler;
        }
    }
    _w_slice.sort((function(a, b) {
        let _w_cement = 0;
        if (a["containCurrentPageUrl"] && !b["containCurrentPageUrl"]) {
            _w_cement = -1;
        } else if (!a["containCurrentPageUrl"] && b["containCurrentPageUrl"]) {
            _w_cement = 1;
        }
        if (_w_cement == 0) {
            if (a["diffIsNumeric"] && !b["diffIsNumeric"]) {
                _w_cement = -1;
            } else if (!a["diffIsNumeric"] && b["diffIsNumeric"]) {
                _w_cement = 1;
            }
        }
        if (_w_cement == 0) {
            _w_cement = a["diffBreakCount"] - b["diffBreakCount"];
        }
        if (_w_cement == 0) {
            if (a["diffList"] && b["diffList"]) {
                _w_cement = b["diffList"].length - a["diffList"].length;
            } else {
                _w_cement = a - b;
            }
        }
        if (_w_cement == 0 && a.diffIndex != null && b.diffIndex != null) {
            _w_cement = a.diffIndex - b.diffIndex;
        }
        return _w_cement;
    }));
    let _w_utopia = {};
    Object.entries(_w_buoy).forEach((arr => {
        _w_utopia[arr[0]] = arr[1].text;
    }));
    let _w_rookie = function() {
        chrome.runtime.sendMessage(chrome.runtime.id, {
            type: "_w_clam",
            collections: _w_slice,
            links: _w_utopia,
            currentPageUrl: _w_muscle,
            currentPageTitle: document.title,
            channel: _w_closet
        });
    };
    setTimeout((() => {
        _w_rookie();
        _w_herald && _w_pastry();
    }), 500);
}

