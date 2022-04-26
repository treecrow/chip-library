/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_twinge = [ "zh_CN", "zh", "en_US", "en" ];

window._w_elegy = "";

window._w_glaze = [];

window._w_banter = true;

window._w_knave = null;

window._w_simian = {};

window._w_tango = {};

window._w_scamp = 1;

window._w_ordeal = 1e11;

window._w_vendor = {
    _w_trowel: 99,
    _w_gnat: 98,
    _w_brooch: 97,
    _w_soil: 96,
    _w_bark: 95,
    _w_handle: 94,
    _w_tyro: 93,
    _w_group: 92,
    _w_chord: 91,
    _w_ginger: 90,
    _w_barn: 12,
    _w_lava: 10,
    _w_debate: 9,
    _w_pane: 8,
    _w_plaza: 7,
    _w_void: 5,
    _w_plank: 1
};

window._w_scad = _w_spruce(4);

window._w_leaven = _w_stitch(1);

window._w_leaven.ajaxGet(_w_buckle, null, null, (function(data) {
    localStorage["_pullywood_RegexpUrlRule"] = data;
    _w_agony();
}), null, null);

window._w_leaven.ajaxGet("/defaultRegexpUrlRule.properties", null, null, (function(data) {
    window._w_elegy = data;
    _w_agony();
}), null, null);

chrome.i18n.getAcceptLanguages((function(data) {
    window._w_twinge = data;
}));

chrome.runtime.onInstalled.addListener((function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            url: _w_lesion
        });
    } else if (details.reason == "update") {}
}));

function _w_loam() {
    return window._w_twinge;
}

function _w_domain(_w_pagan) {
    if (typeof _w_pagan == "undefined") console.trace("tabId is undefined.");
    window._w_tango[_w_pagan] = {
        tabId: _w_pagan
    };
    window._w_tango[_w_pagan]._w_bust = [];
    window._w_tango[_w_pagan]._w_court = {};
    window._w_tango[_w_pagan]._w_solo = {};
    window._w_tango[_w_pagan]._w_forger = {};
    window._w_tango[_w_pagan].extractorHash = _w_scale(32);
    window._w_tango[_w_pagan].url = window._w_simian[_w_pagan] ? window._w_simian[_w_pagan].url : "";
    let _w_flint = moment();
    window._w_tango[_w_pagan].timeStamp = _w_flint;
    window._w_tango[_w_pagan].timeStamp.YYYYMMDD = _w_flint.format("YYYY-MM-DD");
    window._w_tango[_w_pagan].timeStamp.HHmmss = _w_flint.format("HH-mm-ss");
}

function _w_timbre(_w_pagan) {
    window._w_simian[_w_pagan] && !window._w_tango[_w_pagan] && _w_domain(_w_pagan);
    return window._w_tango[_w_pagan];
}

function _w_credit(_w_pagan, _w_balm) {
    let _w_forum = window._w_tango[_w_pagan];
    if (_w_forum) {
        _w_forum["extractorHash_2"] = _w_balm;
        let _w_hermit = _w_moat(_w_pagan);
        let _w_wile = {};
        _w_hermit.forEach((item => _w_wile[item] = _w_hermit[item]));
        _w_ewer(_w_wile, _w_balm);
    }
}

function _w_moat(_w_pagan) {
    let _w_wile = null;
    if (_w_timbre(_w_pagan)) {
        _w_wile = window._w_tango[_w_pagan]._w_bust;
    }
    return _w_wile;
}

function _w_goggle(_w_wont) {
    for (let _w_pagan in window._w_tango) {
        if (window._w_tango[_w_pagan].extractorHash == _w_wont) {
            return window._w_tango[_w_pagan];
        }
    }
    return null;
}

function _w_strait(_w_wont) {
    let _w_wile = null;
    let _w_prime = _w_goggle(_w_wont);
    if (_w_prime) _w_wile = _w_prime._w_bust;
    return _w_wile;
}

function _w_fleece(_w_pagan) {
    let _w_havoc = null;
    if (_w_timbre(_w_pagan)) {
        _w_havoc = window._w_tango[_w_pagan]._w_forger;
    }
    return _w_havoc;
}

function _w_cabal(_w_wont) {
    let _w_havoc = null;
    let _w_prime = _w_goggle(_w_wont);
    if (_w_prime) _w_havoc = _w_prime._w_forger;
    return _w_havoc;
}

function _w_horn(_w_pagan) {
    let _w_foible = null;
    if (_w_timbre(_w_pagan)) {
        _w_foible = window._w_tango[_w_pagan]._w_court;
    }
    return _w_foible;
}

function _w_sloth(_w_pagan) {
    let _w_finery = null;
    if (_w_timbre(_w_pagan)) {
        _w_finery = window._w_tango[_w_pagan]._w_solo;
    }
    return _w_finery;
}

function _w_toll(_w_pagan) {
    let _w_ridge = null;
    if (_w_timbre(_w_pagan)) {
        _w_ridge = window._w_tango[_w_pagan].extractorHash;
    }
    return _w_ridge;
}

function _w_flora(_w_pagan) {
    let _w_ridge = null;
    if (_w_timbre(_w_pagan)) {
        _w_ridge = window._w_tango[_w_pagan].extractorHash_2;
    }
    return _w_ridge;
}

function _w_chisel(_w_wont) {
    let _w_pagan = null;
    let _w_prime = _w_goggle(_w_wont);
    if (_w_prime) _w_pagan = _w_prime.tabId;
    return _w_pagan;
}

window._w_hoard = function() {
    let _w_shuck = {};
    window._w_shuck = _w_shuck;
    let _w_urchin = {};
    window._w_urchin = _w_urchin;
    let _w_swine = {
        urls: [ "<all_urls>" ]
    };
    let _w_brute = function(details) {
        let _w_dearth = function(error, statusCode) {
            let _w_seam = _w_shuck[details.requestId] ? parseInt(details.timeStamp - _w_shuck[details.requestId].timeStamp) : -1;
            let _w_pariah = _w_urchin[details.tabId];
            if (_w_pariah) {
                let _w_rent = _w_pariah["extractorTabId"];
                let _w_pack = _w_pariah["tabId"];
                let _w_despot = _w_horn(_w_rent);
                let _w_nadir = _w_horn(_w_pack);
                let _w_knoll = _w_despot && _w_despot[details.url] ? _w_despot[details.url] : _w_nadir && _w_nadir[details.url] ? _w_nadir[details.url] : null;
                if (typeof _w_pariah["lastRequest"] != "undefined") {
                    _w_pariah["lastRequest"] = (new Date).getTime();
                    _w_pariah["invalidRequestCount"]++;
                }
                if (_w_pariah["requestLog"]) {
                    _w_pariah["requestLog"][details.url] = {
                        referer: _w_knoll,
                        error: error,
                        statusCode: statusCode,
                        timeCost: _w_seam
                    };
                }
            }
            delete _w_shuck[details.requestId];
        };
        if (details.error) {
            _w_dearth(details.error, null);
        } else if (details.statusCode) {
            _w_dearth(null, details.statusCode);
        } else {
            if (!/^https?:\/\/.*$/gi.test(details.url)) return;
            _w_shuck[details.requestId] = {
                requestId: details.requestId,
                timeStamp: details.timeStamp,
                tabId: details.tabId,
                url: details.url,
                type: details.type
            };
        }
    };
    chrome.webRequest.onBeforeRequest.addListener(_w_brute, _w_swine, []);
    chrome.webRequest.onCompleted.addListener(_w_brute, _w_swine);
    chrome.webRequest.onErrorOccurred.addListener(_w_brute, _w_swine);
    let _w_margin = function(tabIds) {
        if (Number.isInteger(tabIds)) {
            tabIds = [ tabIds ];
        }
        if (Array.isArray(tabIds)) {
            return Object.values(_w_shuck).map((function(item) {
                return item.tabId;
            })).filter((function(item) {
                return tabIds.indexOf(item) >= 0;
            })).length;
        } else {
            Object.keys(_w_shuck).length;
        }
    };
    let _w_sprout = function(tabId) {
        delete _w_urchin[tabId];
    };
    let _w_fidget = function(tabId) {
        let _w_pariah = _w_urchin[tabId];
        if (_w_pariah) {
            if (typeof _w_pariah["lastPushImage"] != "undefined") {
                _w_pariah["lastPushImage"] = (new Date).getTime();
            }
        }
    };
    let _w_sheaf = function(tabId) {
        let _w_pariah = _w_urchin[tabId];
        if (_w_pariah) {
            if (typeof _w_pariah["lastFullScroll"] != "undefined") {
                _w_pariah["lastFullScroll"] = (new Date).getTime();
            }
        }
    };
    let _w_bud = function(tabId) {
        _w_sprout(tabId);
        Object.keys(_w_shuck).forEach((function(requestId) {
            if (_w_shuck[requestId].tabId == tabId) {
                delete _w_shuck[requestId];
            }
        }));
    };
    return {
        requestNum: _w_margin,
        registerTab: function(tabId, item) {
            item["requestNum"] = function(tabIds) {
                if (typeof tabIds == "undefined") {
                    return _w_margin([ tabId ]);
                } else {
                    return _w_margin(tabIds);
                }
            };
            _w_urchin[tabId] = item;
        },
        unRegisterTab: _w_sprout,
        notifyPushImage: _w_fidget,
        notifyFullScroll: _w_sheaf,
        notifyRemoveTab: _w_bud
    };
}();

function _w_wink(tab) {
    if (chrome.runtime.lastError) return;
    window._w_simian[tab.id] = tab;
    _w_timbre(tab.id);
}

function _w_alcove(_w_pagan, changeInfo, tab) {
    window._w_simian[tab.id] = tab;
    _w_timbre(tab.id);
    if (changeInfo.url) {
        let _w_maxim = _w_cull(changeInfo.url);
        if (_w_maxim != window._w_tango[_w_pagan].url) {
            _w_domain(_w_pagan);
            window._w_tango[_w_pagan].url = _w_maxim;
        }
    }
}

function _w_levity(_w_pagan) {
    _w_hoard.notifyRemoveTab(_w_pagan);
    delete window._w_simian[_w_pagan];
    delete window._w_tango[_w_pagan];
}

chrome.tabs.onCreated.addListener(_w_wink);

chrome.tabs.onUpdated.addListener(_w_alcove);

chrome.tabs.onRemoved.addListener(_w_levity);

(function() {
    function _w_mulct() {
        chrome.tabs.query({}, (function(results) {
            results.forEach((function(tab) {
                if (!window._w_simian[tab.id]) {
                    window._w_simian[tab.id] = tab;
                    _w_timbre(tab.id);
                }
            }));
        }));
    }
    function _w_canopy() {
        let _w_comic = Object.keys(window._w_simian);
        let _w_mask = Object.keys(window._w_tango);
        for (let idx in _w_mask) if (_w_comic.indexOf(_w_mask[idx]) < 0) _w_comic.push(_w_mask[idx]);
        _w_comic.forEach((function(tabId) {
            tabId = parseInt(tabId);
            chrome.tabs.get(tabId, (function(tab) {
                if (chrome.runtime.lastError) {
                    _w_levity(tabId);
                }
            }));
        }));
    }
    setInterval(_w_mulct, 4e3);
    setInterval(_w_canopy, 4e3);
    _w_sliver();
    _w_agony();
})();

function _w_sliver() {
    let _w_tedium = /Chrome\/([0-9]+)/.exec(navigator.userAgent);
    let _w_die = _w_tedium ? parseInt(_w_tedium[1]) : -1;
    chrome.webRequest.onHeadersReceived.addListener((function(details) {
        if (details.tabId < 0) {
            return;
        }
        let _w_tread = details.responseHeaders;
        for (let i = 0; i < _w_tread.length; ++i) {
            _w_tread[_w_tread[i].name] = _w_tread[i].value;
        }
        let _w_heyday = _w_tread["Content-Type"];
        if (_w_heyday) _w_heyday = _w_heyday.toLowerCase();
        let _w_motto = parseInt(_w_tread["Content-Length"]);
        if ((details.type && details.type == "image" && !_w_heyday || _w_heyday && _w_heyday.startsWith("image/")) && (isNaN(_w_motto) || _w_motto > 0)) {
            let _w_prose = {};
            let _w_bog = window._w_simian[details.tabId];
            if ("undefined" == typeof curentTab) {
                chrome.tabs.get(details.tabId, _w_wink);
            } else {
                let _w_enmity = new URL(_w_bog.url);
                _w_prose.pageTitle = _w_bog.title;
                _w_prose.pageURL = _w_enmity.origin + _w_enmity.pathname + _w_enmity.search;
                _w_prose.pageDomain = _w_enmity.hostname;
                _w_prose.pageHash = _w_enmity.hash;
            }
            let _w_boon = new URL(details.url);
            _w_prose.url = _w_boon.origin + _w_boon.pathname + _w_boon.search;
            _w_prose.domain = _w_boon.hostname;
            _w_prose.contentType = details.type;
            _w_prose.size = null;
            _w_prose.resolution = null;
            _w_prose.filename = null;
            let _w_dunce = null;
            if (_w_tread["Content-Length"]) {
                if (_w_tread["Content-Length"] >= 1024 * 1024 * 1024) {
                    _w_dunce = (_w_tread["Content-Length"] / 1024 / 1024 / 1024).toFixed(2) + "GB";
                } else if (_w_tread["Content-Length"] >= 1024 * 1024) {
                    _w_dunce = (_w_tread["Content-Length"] / 1024 / 1024).toFixed(2) + "MB";
                } else {
                    _w_dunce = (_w_tread["Content-Length"] / 1024).toFixed(2) + "KB";
                }
                _w_prose.size = _w_dunce;
            }
            _w_prose.filename = _w_boon.pathname.substring(_w_boon.pathname.lastIndexOf("/") + 1);
            let _w_array = {};
            let _w_ranger = _w_horn(details.tabId);
            let _w_pore;
            let _w_solo = _w_sloth(details.tabId);
            let _w_jockey = details.url;
            if (_w_solo) {
                while (_w_solo[_w_jockey] && _w_jockey != _w_solo[_w_jockey]) {
                    _w_jockey = _w_solo[_w_jockey];
                    if (_w_jockey == details.url) {
                        break;
                    }
                }
            }
            _w_ranger && (_w_pore = _w_ranger[_w_jockey]);
            _w_array[_w_jockey] = {
                source: "_w_plank",
                title: "",
                alt: "",
                serial: _w_ordeal++,
                referer: _w_pore
            };
            let _w_tariff = _w_moat(details.tabId);
            if (_w_tariff && !_w_tariff[_w_jockey]) {
                let _w_egoism = _w_toll(details.tabId);
                _w_ewer(_w_array, _w_egoism);
            }
        } else if (details.type && details.type == "media" || _w_heyday && _w_heyday.indexOf("video/") > -1 || _w_heyday && _w_heyday.indexOf("audio/") > -1) {}
    }), {
        urls: [ "<all_urls>" ]
    }, [ "blocking", "responseHeaders" ]);
    chrome.webRequest.onBeforeRedirect.addListener((function(details) {
        if (details.redirectUrl == details.url) return;
        if (!window._w_simian[details.tabId]) {
            return;
        }
        let _w_fender = details.tabId;
        let _w_dirge = window._w_simian[_w_fender].url;
        if (_w_resort(_w_dirge) || /^[a-z]+-extension:\/\//gi.test(_w_dirge)) {
            let _w_court = _w_horn(_w_fender);
            if (_w_court && _w_court[details.url] && !_w_court[details.redirectUrl]) {
                _w_court[details.redirectUrl] = _w_court[details.url];
            }
        }
        let _w_solo = _w_sloth(_w_fender);
        if (_w_solo) {
            let _w_pun = details.url;
            let _w_digit = true;
            while (_w_solo[_w_pun] && _w_pun != _w_solo[_w_pun]) {
                _w_pun = _w_solo[_w_pun];
                if (_w_pun == details.redirectUrl) {
                    _w_digit = false;
                    break;
                }
            }
            if (_w_digit) _w_solo[details.redirectUrl] = details.url;
        }
    }), {
        urls: [ "<all_urls>" ]
    }, [ "responseHeaders" ]);
    let _w_curd = [ "blocking", "requestHeaders" ];
    if (_w_die >= 72) _w_curd.push("extraHeaders");
    chrome.webRequest.onBeforeSendHeaders.addListener((function(details) {
        let _w_inroad = false;
        let _w_gaiety = false;
        let _w_resin = [];
        if (details.tabId == -1) {
            return _w_linen(details);
        }
        for (let i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === "Referer") {
                _w_inroad = true;
                _w_resin.push(i);
                let _w_court = _w_horn(details.tabId);
                if (_w_court && _w_court[details.url]) {
                    details.requestHeaders[i].value = _w_court[details.url];
                } else if (_w_court) {
                    let _w_panel = details.requestHeaders[i].value;
                    let _w_tuxedo = _w_tango[details.tabId];
                    if (_w_tuxedo && _w_panel == _w_baton(_w_tuxedo.url)) {
                        _w_panel = _w_tuxedo.url;
                    }
                    _w_court[details.url] = _w_panel;
                }
                let _w_knoll = details.requestHeaders[i].value;
                if (_w_knoll == _w_snob || _w_knoll == _w_flux || _w_knoll == null) {
                    _w_gaiety = true;
                }
            } else if (details.requestHeaders[i].name === "IA-Tag") {
                _w_resin.push(i);
                _w_gaiety = true;
            }
        }
        if (_w_gaiety && _w_resin.length > 0) {
            _w_resin.reverse();
            for (let idx in _w_resin) {
                details.requestHeaders.splice(_w_resin[idx], 1);
            }
        }
        if (!_w_inroad) {
            let _w_court = _w_horn(details.tabId);
            if (_w_court && _w_court[details.url] && _w_court[details.url] != _w_snob && _w_court[details.url] != _w_flux) {
                details.requestHeaders.push({
                    name: "Referer",
                    value: _w_court[details.url]
                });
            }
        }
        return {
            requestHeaders: details.requestHeaders
        };
    }), {
        urls: [ "<all_urls>" ]
    }, _w_curd);
}

function _w_talon(_w_wont) {
    let _w_parody = {
        YYYYMMDD: "YYYY-MM-DD",
        HHmmss: "HH-mm-ss"
    };
    let _w_prime = _w_goggle(_w_wont);
    if (_w_prime) _w_parody = _w_prime.timeStamp;
    return _w_parody;
}

function _w_linen(details) {
    let _w_inroad = false;
    let _w_peel = false;
    let _w_poll = -1;
    let _w_slab = undefined;
    for (let i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === "Referer") {
            _w_inroad = true;
            _w_poll = i;
        }
    }
    Object.values(_w_tango).forEach((function(tab) {
        if (tab._w_court && tab._w_court[details.url] && tab._w_court[details.url] != _w_snob && tab._w_court[details.url] != _w_flux) {
            _w_slab = tab._w_court[details.url];
        }
    }));
    if (_w_slab && _w_inroad) {
        details.requestHeaders[_w_poll].value = _w_slab;
    } else if (_w_slab) {
        details.requestHeaders.push({
            name: "Referer",
            value: _w_slab
        });
    }
    return {
        requestHeaders: details.requestHeaders
    };
}

_w_gusher();

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_helm" && _w_lace(sender.tab.id);
    message && message.type == "_w_lint" && _w_lint(message._w_pagan, message._w_tether);
    message && message.type == "_w_vim" && _w_vim(message._w_pagan, message._w_tether, message._w_bridle);
    message && message.type == "_w_ivory" && _w_ewer(message.images, message.extractorHash);
    message && message.type == "_w_fort" && window._w_hoard && window._w_hoard.notifyFullScroll(sender.tab.id);
    message && message.type == "_w_cargo" && _w_pastor(message._w_court, sender.tab.id, true);
    message && message.type == "_w_brand" && _w_cult(message.pageInfo, message.extractorHash);
    message && message.type == "_w_scope" && callback(_w_ruffle());
    message && message.type == "_w_podium" && _w_podium(message.url, message.action, sender.tab.id, message.createNewTab);
    message && message.type == "_w_pulp" && _w_pulp(sender.tab.id, message.fetchLevel);
    message && message.type == "_w_sop" && window._w_scad.addTask((function(beginFun, endFun) {
        _w_phobia(message.requestParam, message.requestHash, sender.tab.id, beginFun, endFun);
    }));
    message && message.type == "_w_tonic" && (localStorage["folderMark"] = message.folderMark);
    message && message.type == "_w_hulk" && callback(_w_hulk());
    message && message.type == "_w_revue" && callback(_w_hoard.requestNum(sender.tab.id));
}));

function _w_owl(_w_ridge, callback) {
    chrome.runtime.sendMessage(_w_grouch(), {
        type: "_w_owl",
        extractorHash: _w_ridge
    }, callback);
}

function _w_sinew(_w_rage, _w_kin) {
    !_w_kin && (_w_kin = false);
    let _w_hub = function(_w_prime) {
        _w_trophy(_w_prime.id, (function(observedTab) {
            let _w_pun = observedTab.url;
            let _w_closet = _w_myopia(32);
            let _w_groove = "multiUrlExtractor.html?msgChannel=" + _w_closet;
            if (_w_tack(_w_pun)) {
                _w_groove += "&originalUrl=" + encodeURIComponent(_w_pun);
            }
            chrome.tabs.create({
                url: _w_groove,
                active: true
            }, (function(newTab) {
                if (_w_tack(observedTab.url)) {
                    _w_trait(observedTab.id, newTab.id, _w_closet, _w_kin);
                }
            }));
        }));
    };
    if (_w_rage) {
        _w_hub(_w_rage);
    } else {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(tabArray) {
            if (!tabArray || tabArray.length === 0) return;
            let _w_plane = tabArray[0];
            _w_hub(_w_plane);
        }));
    }
}

function _w_issue(_w_tether) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (function(tabArray) {
        if (!tabArray || tabArray.length == 0) return;
        let _w_plane = tabArray[0];
        _w_pulp(_w_plane.id, _w_tether);
    }));
}

function _w_hide(url, _w_tether) {
    chrome.tabs.create({
        url: url,
        active: false
    }, (function(tab) {
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo, updatedTab) {
            if (tabId == tab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_pulp(tabId, _w_tether);
            }
        }));
    }));
}

function _w_poise(url) {
    chrome.tabs.create({
        url: url,
        active: true
    }, (function(tab) {
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo, updatedTab) {
            if (tabId == tab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_sinew(tab, true);
            }
        }));
    }));
}

function _w_pulp(_w_pagan, _w_tether) {
    _w_acumen(_w_pagan, _w_tether, true);
}

function _w_acumen(_w_pagan, _w_tether, _w_comity) {
    chrome.tabs.get(_w_pagan, (function(tab) {
        if (_w_tack(tab.url) || _w_fawn(tab.url)) {
            let _w_brook = setTimeout((function() {
                chrome.tabs.create({
                    index: tab.index + 1,
                    url: "imageExtractor.html?tabId=" + tab.id + "&fetchLevel=" + _w_tether,
                    active: _w_comity ? true : false
                });
            }), 512);
            _w_owl(_w_toll(tab.id), (function callback(data) {
                if (!chrome.runtime.lastError && data) {
                    clearTimeout(_w_brook);
                    chrome.tabs.update(data.tabId, {
                        active: true
                    }, (function(tab) {
                        chrome.windows.update(tab.windowId, {
                            focused: true,
                            drawAttention: false
                        });
                    }));
                }
            }));
        } else {
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ban("_w_gist"),
                message: _w_ban("_w_gamble")
            });
        }
    }));
}

function _w_lint(_w_pagan, _w_tether) {
    let _w_bridle = _w_toll(_w_pagan) + _w_gusher();
    _w_vim(_w_pagan, _w_tether, _w_bridle);
}

function _w_vim(_w_pagan, _w_tether, _w_bridle) {
    _w_sting(_w_pagan, [ {
        file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "libs/DOMPurify/2.0.8/purify.min.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/function.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/mime.js",
        runAt: "document_end",
        allFrames: true
    }, {
        file: "scripts/script.js",
        runAt: "document_end",
        allFrames: true
    }, {
        code: "_w_slag(" + _w_tether + ', "' + _w_bridle + '");',
        runAt: "document_end",
        allFrames: true
    } ]);
}

function _w_trait(_w_crate, _w_nude, _w_twig, _w_kin) {
    _w_sting(_w_crate, [ {
        file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/function.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/mime.js",
        runAt: "document_end",
        allFrames: false
    }, {
        file: "scripts/characteristicUrlExtract.js",
        runAt: "document_end",
        allFrames: false
    }, {
        code: '_w_harbor(_w_tundra, "' + _w_twig + '", ' + _w_kin + ");",
        runAt: "document_end",
        allFrames: false
    } ]);
}

function _w_podium(_w_vicar, _w_blur, _w_stunt, _w_canker) {
    let _w_weed = function(execTab) {
        if (!_w_blur || _w_blur.trim() == "") return;
        chrome.tabs.onUpdated.addListener((function updatedFun(tabId, changeInfo) {
            if (tabId == execTab.id && changeInfo.url) {
                chrome.tabs.onUpdated.removeListener(updatedFun);
                _w_sting(tabId, [ {
                    file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                    runAt: "document_end",
                    allFrames: true
                }, {
                    file: "scripts/function.js",
                    runAt: "document_start",
                    allFrames: true
                }, {
                    file: "scripts/scriptForthirdPartPage.js",
                    runAt: "document_start",
                    allFrames: true
                }, {
                    code: _w_blur + "();",
                    runAt: "document_start",
                    allFrames: true
                } ]);
            }
        }));
    };
    if (_w_canker) {
        chrome.tabs.create({
            url: _w_vicar,
            active: true
        }, _w_weed);
    } else {
        chrome.tabs.update(_w_stunt, {
            url: _w_vicar,
            active: true
        }, _w_weed);
    }
}

window._w_spate = true;

function _w_homage(url) {
    let _w_mimic = [];
    for (let idx in window._w_glaze) {
        let _w_torpor = window._w_glaze[idx]["urlRegexp"];
        if (_w_torpor.test(url)) {
            _w_mimic.push(window._w_glaze[idx]["urlRuleStr"]);
            if (!window._w_spate) break;
        }
    }
    return _w_mimic;
}

function _w_apex(url, deepth) {
    let _w_rung = {};
    if (!_w_banter) {
        return Object.keys(_w_rung);
    } else if (!Number.isInteger(deepth)) {
        deepth = 4;
    } else if (deepth <= 0) {
        return Object.keys(_w_rung);
    } else {
        deepth--;
    }
    for (let idx in window._w_glaze) {
        let _w_torpor = window._w_glaze[idx]["urlRegexp"];
        let _w_plinth = window._w_glaze[idx]["urlReplace"];
        if (_w_torpor.test(url)) {
            let _w_dictum = url.replace(_w_torpor, _w_plinth);
            if (_w_dictum != url) {
                _w_rung[_w_dictum] = true;
                let _w_fold = _w_apex(_w_dictum, deepth);
                _w_fold.forEach((function(result_url) {
                    _w_rung[result_url] = true;
                }));
                if (!window._w_spate) break;
            }
        }
    }
    return Object.keys(_w_rung);
}

function _w_cult(_w_vault, _w_ridge) {
    let _w_fender = _w_chisel(_w_ridge);
    let _w_mint = _w_flora(_w_fender);
    if (_w_mint) {
        _w_brand(_w_vault, _w_chisel(_w_mint));
    }
    _w_brand(_w_vault, _w_chisel(_w_ridge));
}

function _w_brand(_w_vault, _w_pagan) {
    if (!_w_pagan) {
        return;
    }
    let _w_pedal = _w_fleece(_w_pagan);
    let _w_willow = _w_cull(_w_vault["url"]);
    _w_vault["url"] = _w_willow;
    let _w_hunch = _w_pedal[_w_willow];
    if (_w_hunch == null) {
        _w_pedal[_w_willow] = _w_vault;
    } else {
        for (let key in _w_vault) {
            _w_hunch[key] == null ? _w_hunch[key] = _w_vault[key] : _w_vault[key] == null ? "" : _w_vault[key].length > _w_hunch[key].length ? _w_hunch[key] = _w_vault[key] : "";
        }
    }
}

function _w_ewer(_w_wile, _w_ridge) {
    let _w_fender = _w_chisel(_w_ridge);
    let _w_mint = _w_flora(_w_fender);
    if (_w_mint) {
        _w_ivory(_w_wile, _w_chisel(_w_mint));
    }
    _w_ivory(_w_wile, _w_chisel(_w_ridge));
}

function _w_infant(_w_wile) {
    Object.keys(_w_wile).forEach((itemUrl => {
        if (/^https?:\/\/.*/i.test(itemUrl) || /^data:.*/i.test(itemUrl)) return;
        if (itemUrl.startsWith("//")) {
            let protocol = "https:";
            let referer = _w_wile[itemUrl] ? _w_wile[itemUrl].referer : null;
            if (referer && /^(https?:)\/\/.*/i.test(referer)) {
                protocol = /^(https?:)\/\/.*/i.exec(referer)[1];
            }
            let newItemUrl = protocol + itemUrl;
            if (!_w_wile[newItemUrl]) {
                _w_wile[newItemUrl] = _w_wile[itemUrl];
                delete _w_wile[itemUrl];
            }
        }
    }));
    return _w_wile;
}

function _w_ivory(_w_wile, _w_pagan) {
    _w_infant(_w_wile);
    if (!_w_pagan) {
        return;
    }
    if (window._w_hoard) {
        window._w_hoard.notifyPushImage(_w_pagan);
    }
    let _w_tariff = _w_moat(_w_pagan);
    let _w_drone = _w_resort(window._w_simian[_w_pagan].url);
    let _w_fast = function(item, _w_tussle, _w_dart) {
        if (_w_claim(item)) {} else if (!_w_tariff[item]) {
            _w_tariff[item] = _w_tussle;
            _w_tariff.push(item);
        } else {
            let _w_suture = 0;
            if (_w_tussle.title && _w_tussle.title.length > 0 && _w_tariff[item].title != _w_tussle.title) {
                _w_tariff[item].title = _w_tussle.title;
                _w_suture |= 1;
            }
            if (_w_tussle.alt && _w_tussle.alt.length > 0 && _w_tariff[item].alt != _w_tussle.alt) {
                _w_tariff[item].alt = _w_tussle.alt;
                _w_suture |= 2;
            }
            if (_w_tussle.referer && _w_tussle.referer.length > 0 && _w_tariff[item].referer != _w_tussle.referer) {
                let _w_grouse = _w_vendor[_w_tariff[item].source];
                let _w_edict = _w_vendor[_w_tussle.source];
                if (!_w_tariff[item].referer || _w_edict > _w_grouse) {
                    _w_tariff[item].referer = _w_tussle.referer;
                    _w_suture |= 4;
                }
            }
            if (_w_tussle.serial && _w_tussle.serial < _w_tariff[item].serial && _w_tariff[item].serial != _w_tussle.serial) {
                _w_tariff[item].serial = _w_tussle.serial;
                _w_suture |= 8;
            }
            if (_w_suture > 0) _w_dart[_w_tariff.indexOf(item)] = _w_suture;
        }
    };
    let _w_dart = {};
    for (let item in _w_wile) {
        try {
            let _w_tussle = _w_wile[item];
            item = _w_ditty(item);
            _w_tussle.referer = _w_ditty(_w_tussle.referer);
            if (_w_drone) item = _w_soot(item);
            try {
                let _w_splint = _w_apex(item);
                for (let ridx in _w_splint) {
                    _w_fast(_w_splint[ridx], _w_tussle, _w_dart);
                }
            } catch (exception) {}
            _w_fast(item, _w_tussle, _w_dart);
        } catch (exception) {}
    }
    chrome.runtime.sendMessage(_w_grouch(), {
        type: "_w_glance",
        extractorHash: _w_toll(_w_pagan)
    });
    if (Object.keys(_w_dart).length > 0) {
        chrome.runtime.sendMessage(_w_grouch(), {
            type: "_w_poseur",
            extractorHash: _w_toll(_w_pagan),
            ItemIdxMap: _w_dart
        });
    }
}

function _w_pastor(_w_ranger, _w_pagan, _w_fiat) {
    let _w_court = _w_horn(_w_pagan);
    for (let _w_noose in _w_ranger) {
        if (_w_noose.indexOf(_w_snob) == 0 || _w_noose.indexOf(_w_flux) == 0) {
            continue;
        }
        if (_w_court && (!_w_court[_w_noose] || _w_court[_w_noose].length == 0 || _w_fiat)) {
            _w_court[_w_noose] = _w_ranger[_w_noose];
        }
    }
}

function _w_sting(_w_pagan, _w_furrow, _w_parity) {
    function createCallback(_w_pagan, injectDetails, innerCallback) {
        return function() {
            chrome.tabs.executeScript(_w_pagan, injectDetails, innerCallback);
        };
    }
    while (_w_furrow.length > 0) {
        _w_parity = createCallback(_w_pagan, _w_furrow.pop(), _w_parity);
    }
    if (_w_parity !== null) {
        _w_parity();
    }
}

function _w_peer(_w_pagan, _w_furrow, _w_parity) {
    function createCallback(_w_pagan, _w_prank, _w_script) {
        return function() {
            chrome.tabs.insertCSS(_w_pagan, _w_prank, _w_script);
        };
    }
    while (_w_furrow.length > 0) {
        _w_parity = createCallback(_w_pagan, _w_furrow.pop(), _w_parity);
    }
    if (_w_parity !== null) {
        _w_parity();
    }
}

chrome.commands.onCommand.addListener((function(command) {
    if (command == "command_extract_images") {
        _w_issue(0);
    } else if (command == "command_multi_extract_images") {
        _w_sinew();
    }
}));

function _w_bulk() {
    let _w_shale = {
        width: 10,
        height: 10
    };
    let _w_raisin = Number.parseInt(_w_hoe("defaultFunnelWidth"));
    let _w_spawn = Number.parseInt(_w_hoe("defaultFunnelHeight"));
    _w_raisin && _w_raisin > 0 && (_w_shale.width = _w_raisin);
    _w_spawn && _w_spawn > 0 && (_w_shale.height = _w_spawn);
    return _w_shale;
}

function _w_ramp(width, height) {
    let _w_raisin = Number.parseInt(width);
    let _w_spawn = Number.parseInt(height);
    _w_raisin && _w_tangle("defaultFunnelWidth", _w_raisin);
    _w_spawn && _w_tangle("defaultFunnelHeight", _w_spawn);
}

function _w_hulk() {
    let _w_ferry;
    let _w_elixir = _w_hoe("image_size");
    _w_elixir ? _w_ferry = _w_malice(_w_elixir.split(",")) : _w_ferry = _w_swarm();
    return _w_ferry;
}

function _w_swarm() {
    return _w_malice(_w_comma.slice(0));
}

function _w_coffer() {
    let _w_ferry = _w_swarm();
    _w_tangle("image_size", _w_ferry);
}

const _w_lot = (() => {
    const default_config = {};
    _w_intent.forEach((suffix => default_config[suffix] = false));
    delete default_config["png"];
    return default_config;
})();

function _w_rifle(_w_ravine) {
    if (!_w_ravine) return false;
    _w_ravine = _w_ravine.replace(/\./gi, "");
    let _w_cement = _w_stigma();
    if (_w_cement[_w_ravine] == true) {
        return true;
    } else if (typeof _w_cement[_w_ravine] == "undefined" && _w_cement["_"]) {
        return true;
    } else {
        return false;
    }
}

function _w_stigma() {
    let _w_cement = {
        ..._w_lot
    };
    const _w_shoot = localStorage["convert_format_when_downloading"];
    if (_w_shoot) {
        try {
            Object.assign(_w_cement, JSON.parse(_w_shoot));
        } catch (e) {}
    }
    if (_w_albino) {
        _w_cement = {
            ..._w_cement,
            svg: true,
            ico: true,
            webp: true
        };
    }
    return _w_cement;
}

function _w_adobe(_w_pilot) {
    let _w_cement = {
        ..._w_lot
    };
    if (_w_pilot) {
        Object.keys(_w_cement).forEach((key => {
            if (_w_pilot[key]) {
                _w_cement[key] = true;
            } else {
                _w_cement[key] = false;
            }
        }));
    }
    localStorage["convert_format_when_downloading"] = JSON.stringify(_w_cement);
}

function _w_yarn(width, height) {
    let _w_elite = Number.parseInt(width);
    let _w_axle = Number.parseInt(height);
    let _w_hassle = _w_elite && _w_axle ? _w_elite + "x" + _w_axle : null;
    let _w_ferry = _w_hulk();
    if (!_w_ferry[_w_hassle]) {
        _w_ferry.push(_w_hassle);
        _w_ferry = _w_malice(_w_ferry);
        _w_ferry[_w_hassle] = {
            width: _w_elite,
            height: _w_axle
        };
        _w_tangle("image_size", _w_ferry);
    }
}

function _w_acorn(width, height) {
    let _w_elite = Number.parseInt(width);
    let _w_axle = Number.parseInt(height);
    let _w_fret = _w_elite && _w_axle ? _w_elite + "x" + _w_axle : null;
    let _w_ferry = _w_hulk();
    if (_w_ferry[_w_fret]) {
        delete _w_ferry[_w_fret];
        let _w_ledger = _w_ferry.indexOf(_w_fret);
        _w_ledger > -1 && _w_ferry.splice(_w_ledger, 1);
        _w_tangle("image_size", _w_ferry);
    }
}

function _w_grill() {
    let _w_rue = 27;
    let _w_trio = 31;
    let _w_coda = Number.parseInt(_w_hoe("menu_status"));
    if (_w_coda >= 0) {
        _w_rue = _w_trio & _w_coda;
    }
    return _w_rue;
}

function _w_baron(status) {
    let _w_trio = 31;
    let _w_felon = Number.parseInt(status);
    if (_w_felon >= 0) {
        _w_felon = _w_felon & _w_trio;
        _w_tangle("menu_status", _w_felon);
    }
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_lancet"
    });
}

function _w_asthma() {
    let _w_gist = _w_grouch();
    let _w_deputy = _w_hoe(_w_gist);
    if (!_w_deputy || _w_deputy.length < 32) {
        _w_tangle(_w_gist, _w_myopia(32));
        _w_deputy = _w_hoe(_w_gist);
    }
    return _w_deputy;
}

function _w_sanity() {
    let _w_cant = Number.parseInt(localStorage["dyLoadSize"]);
    if (!_w_cant) {
        _w_cant = 256;
        _w_deed(_w_cant);
    }
    return _w_cant;
}

function _w_deed(_w_pulpit) {
    _w_pulpit = Number.parseInt(_w_pulpit);
    if (!_w_pulpit) _w_pulpit = 256; else if (_w_pulpit < 64) _w_pulpit = 64; else if (_w_pulpit > 2048) _w_pulpit = 2048;
    localStorage["dyLoadSize"] = _w_pulpit;
}

function _w_frond() {
    let _w_slot = Number.parseInt(localStorage["extMaxLoad"]);
    if (!_w_slot) {
        _w_slot = 1024;
        _w_intern(_w_slot);
    }
    return _w_slot;
}

function _w_intern(_w_ration) {
    _w_ration = Number.parseInt(_w_ration);
    if (!_w_ration) _w_ration = 1024; else if (_w_ration < 1024) _w_ration = 1024; else if (_w_ration > 4096) _w_ration = 4096;
    localStorage["extMaxLoad"] = _w_ration;
}

function _w_hilt() {
    let _w_elbow = localStorage["extClickAct"];
    if (typeof _w_elbow == "undefined") {
        _w_elbow = false;
        _w_muddle(_w_elbow);
    }
    return _w_elbow;
}

function _w_muddle(_w_shield) {
    if (_w_shield) {
        _w_shield = true;
    } else {
        _w_shield = false;
    }
    localStorage["extClickAct"] = _w_shield;
}

function _w_doyen() {
    let _w_lobe = localStorage["regexpUrlRule"];
    if (!_w_lobe || _w_lobe.trim().length == 0) {
        _w_lobe = window._w_elegy;
        setTimeout((function() {
            _w_aroma(_w_lobe);
        }), 2e3);
    }
    return _w_lobe;
}

function _w_aroma(_w_slouch) {
    localStorage["regexpUrlRule"] = _w_slouch;
    return _w_agony();
}

function _w_agony() {
    let _w_tease = [];
    let _w_hoof = [];
    let _w_hold = localStorage["_pullywood_RegexpUrlRule"];
    if (!_w_hold) {
        _w_hold = "";
    }
    let _w_pact = _w_doyen().concat("\n\r").concat(window._w_elegy).concat("\n\r").concat(_w_hold).split(/[\n\r]+/);
    window._w_donor = _w_treaty();
    for (let idx in _w_pact) {
        let _w_cavity = _w_pact[idx].trim();
        if (_w_cavity.length == 0 || _w_cavity.startsWith("//") || _w_cavity.split("{#^_^#}").length != 2) {
            continue;
        } else {
            if (window._w_donor.has(_w_cavity)) continue;
            window._w_donor.add(_w_cavity);
            let _w_pulley = _w_cavity.split("{#^_^#}");
            let _w_torpor = _w_pulley[0];
            let _w_plinth = _w_pulley[1];
            try {
                _w_torpor = new RegExp(_w_torpor);
                _w_tease.push({
                    urlRegexp: _w_torpor,
                    urlReplace: _w_plinth,
                    urlRuleStr: _w_cavity
                });
            } catch (exception) {
                _w_hoof.push(_w_torpor);
            }
        }
    }
    window._w_glaze = _w_tease;
    return _w_hoof;
}

function _w_hoe(_w_armada) {
    if (!_w_armada || _w_armada.length == 0) return;
    let _w_stream = localStorage[_w_armada];
    chrome.storage.sync.get(_w_armada, (function(data) {
        let _w_weasel = data[_w_armada];
        if ((!_w_weasel || _w_weasel.length == 0) && _w_stream && _w_stream.length > 0) {
            _w_tangle(_w_armada, _w_stream);
        } else if (_w_weasel && _w_stream != _w_weasel && _w_weasel.length > 0) {
            localStorage[_w_armada] = _w_weasel;
        }
    }));
    return _w_stream;
}

function _w_tangle(keyStr, valueStr) {
    valueStr = String(valueStr);
    if (!keyStr || keyStr.length == 0 || !valueStr || valueStr.length == 0) return;
    if (keyStr == _w_grouch()) {
        chrome.storage.sync.get(keyStr, (function(data) {
            let _w_weasel = data[keyStr];
            if ((!_w_weasel || _w_weasel.length != 32) && valueStr.length == 32) {
                let _w_lull = {};
                _w_lull[keyStr] = valueStr;
                chrome.storage.sync.set(_w_lull, (function() {}));
                localStorage[keyStr] = valueStr;
            } else {
                localStorage[keyStr] = _w_weasel;
            }
        }));
        return;
    }
    let _w_lull = {};
    _w_lull[keyStr] = valueStr;
    chrome.storage.sync.set(_w_lull, (function() {}));
    localStorage[keyStr] = valueStr;
}

chrome.storage.onChanged.addListener((function(changes, namespace) {
    for (let key in changes) {
        let _w_tare = changes[key];
        localStorage[key] = _w_tare.newValue;
    }
}));

$.ajax({
    method: "get",
    url: "https://www.pullywood.com/ImageAssistant/version.json?" + Math.random(),
    contentType: "application/json",
    mimeType: "application/json"
}).done((function(data) {
    let _w_cane = /Firefox/i.test(navigator.userAgent) ? "version_firefox" : /Edg/i.test(navigator.userAgent) ? "version_edge" : "version";
    data && data[_w_cane] && (localStorage["version"] = data[_w_cane]);
})).always((function() {
    if (localStorage["version"] && localStorage["version"] > chrome.runtime.getManifest().version) {
        chrome.browserAction.setBadgeText({
            text: "new"
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#FF3F3F"
        });
    } else {
        chrome.browserAction.setBadgeText({
            text: null
        });
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#4285F4"
        });
    }
}));

function _w_ruffle() {
    return window._w_scamp++;
}

function _w_phobia(_w_mallet, _w_screed, tabId, _w_filter, _w_threat) {
    _w_filter();
    _w_mallet["timeout"] = _w_votary;
    _w_mallet["headers"]["Accept"] = "*/*; charset=UTF-8";
    _w_mallet["headers"]["Cache-Control"] = "no-cache, no-store, must-revalidate, max-age=0, post-check=0, pre-check=0";
    _w_mallet["headers"]["Pragma"] = "no-cache";
    _w_mallet["headers"]["Expires"] = "0";
    $.ajax(_w_mallet).always((function(data, status, xhr) {
        _w_threat();
        if (status == "success") {
            let _w_frieze = {};
            if (xhr.getAllResponseHeaders) {
                let _w_hovel = xhr.getAllResponseHeaders().split("\n");
                for (let idx in _w_hovel) {
                    let _w_warp = _w_hovel[idx];
                    let _w_guilt = _w_warp.indexOf(":");
                    let _w_tatter = _w_warp.slice(0, _w_guilt).trim();
                    let _w_repose = _w_warp.slice(_w_guilt + 1).trim();
                    if (_w_tatter.length == 0 || _w_repose.length == 0) {
                        continue;
                    } else if (!_w_frieze[_w_tatter]) {
                        _w_frieze[_w_tatter] = _w_repose;
                    } else if (typeof _w_frieze[_w_tatter] == "string") {
                        let _w_posse = [];
                        _w_posse.push(_w_frieze[_w_tatter]);
                        _w_posse.push(_w_repose);
                        _w_frieze[_w_tatter] = _w_posse;
                    } else if (_w_frieze[_w_tatter].push) {
                        _w_frieze[_w_tatter].push(_w_repose);
                    }
                }
            }
            xhr["responseHeaders"] = _w_frieze;
        }
        chrome.tabs.sendMessage(tabId, {
            type: "_w_drivel",
            data: data,
            status: status,
            xhr: xhr,
            requestHash: _w_screed
        });
    }));
}

chrome.contextMenus.create({
    title: _w_ban("_w_outset"),
    id: "_w_demise",
    contexts: [ "all" ]
}, (function() {
    chrome.contextMenus.create({
        title: _w_ban("_w_muck"),
        id: "_w_famine",
        parentId: "_w_demise",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_comic"),
        id: "_w_cadet",
        parentId: "_w_demise",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_diver"),
        id: "_w_arroyo",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_ration"),
        id: "_w_crest",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_alkali"),
        id: "_w_flair",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_tussle"),
        id: "_w_tenet",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_dose"),
        id: "_w_novice",
        parentId: "_w_demise",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_luxury"),
        id: "_w_track",
        parentId: "_w_demise",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_typo"),
        id: "_w_regime",
        parentId: "_w_demise",
        contexts: [ "selection" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_realm").trim(),
        id: "_w_truism",
        parentId: "_w_demise",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_germ").trim(),
        id: "_w_blade",
        parentId: "_w_demise",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_flint").trim(),
        id: "_w_swipe",
        parentId: "_w_demise",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_cello").trim(),
        id: "_w_carp",
        parentId: "_w_demise",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_hyphen"),
        id: "_w_seine",
        parentId: "_w_demise",
        contexts: [ "page", "frame" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_hatch"),
        id: "_w_dummy",
        parentId: "_w_demise",
        contexts: [ "link" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_rebate"),
        id: "_w_reed",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
    chrome.contextMenus.create({
        title: _w_ban("_w_cuff"),
        id: "_w_lode",
        parentId: "_w_demise",
        contexts: [ "image" ]
    }, (function() {}));
}));

chrome.contextMenus.onClicked.addListener((function(info, tab) {
    let _w_raffle = null;
    if (info.menuItemId == "_w_reed") {
        _w_raffle = _w_reed(info.srcUrl, info.pageUrl, tab.id);
    } else if (info.menuItemId == "_w_lode") {
        _w_raffle = _w_lode(info.srcUrl, info.pageUrl, tab.id);
    } else if (info.menuItemId == "_w_arroyo") {
        _w_raffle = _w_arroyo(info.srcUrl);
    } else if (info.menuItemId == "_w_crest") {
        _w_raffle = _w_crest(info.srcUrl);
    } else if (info.menuItemId == "_w_flair") {
        _w_raffle = _w_flair(info.srcUrl);
    } else if (info.menuItemId == "_w_novice") {
        _w_raffle = _w_credo(info.selectionText);
    } else if (info.menuItemId == "_w_track") {
        _w_raffle = _w_asset(info.selectionText);
    } else if (info.menuItemId == "_w_famine") {
        _w_hide(info.linkUrl, 0);
    } else if (info.menuItemId == "_w_cadet") {
        _w_poise(info.linkUrl);
    } else if (info.menuItemId == "_w_truism") {
        _w_pulp(tab.id, 0);
    } else if (info.menuItemId == "_w_blade") {
        _w_pulp(tab.id, 1);
    } else if (info.menuItemId == "_w_swipe") {
        _w_pulp(tab.id, 3);
    } else if (info.menuItemId == "_w_carp") {
        _w_sinew();
    } else if (info.menuItemId == "_w_regime") {
        _w_unison(tab.id, info.selectionText);
    } else if (info.menuItemId == "_w_tenet") {
        _w_unison(tab.id, info.srcUrl);
    } else if (info.menuItemId == "_w_dummy") {
        _w_unison(tab.id, info.linkUrl);
    } else if (info.menuItemId == "_w_seine") {
        _w_unison(tab.id, info.pageUrl);
    } else {
        return;
    }
    if (_w_raffle) {
        if (_w_resort(info.pageUrl)) _w_raffle.url = _w_soot(_w_raffle.url);
        _w_podium(_w_raffle.url, _w_raffle.action, tab.id, _w_raffle.createNewTab);
    }
}));

function _w_reed(_w_noose, _w_panel, _w_pagan) {
    if (!_w_noose) {
        return;
    } else if (!_w_noose.startsWith("data:image") && _w_resort(_w_panel)) {
        let _w_court = _w_horn(_w_pagan);
        if (_w_court[_w_noose]) {
            _w_panel = _w_court[_w_noose];
        }
    }
    chrome.tabs.create({
        url: "imageEditor.html",
        active: true
    }, (function(tab) {
        _w_quill(tab.id, (function(_w_leak) {
            chrome.tabs.sendMessage(_w_leak.id, {
                type: "_w_reed",
                _w_condor: _w_noose,
                _w_panel: _w_panel
            });
        }));
    }));
}

function _w_lode(_w_noose, _w_panel, _w_pagan) {
    if (!_w_noose.startsWith("data:image") && _w_resort(_w_panel)) {
        let _w_court = _w_horn(_w_pagan);
        if (_w_court[_w_noose]) {
            _w_panel = _w_court[_w_noose];
        }
    }
    chrome.runtime.sendMessage(chrome.runtime.id, {
        type: "_w_epic",
        _w_condor: _w_noose,
        _w_panel: _w_panel
    });
}

function _w_unison(_w_pagan, _w_bather) {
    if (!_w_pagan) return;
    chrome.tabs.get(_w_pagan, (function(tab) {
        let _w_vicar = new URL(tab.url);
        if (_w_scoop(_w_vicar.href)) {
            chrome.runtime.sendMessage(_w_grouch(), {
                type: "_w_notch",
                text: _w_bather
            });
        } else if (_w_vicar.protocol == "http:" || _w_vicar.protocol == "https:") {
            _w_sting(_w_pagan, [ {
                file: "libs/jquery/3.4.1/jquery-3.4.1.min.js",
                allFrames: false
            }, {
                file: "libs/qrcode/dist/qrcode.js",
                allFrames: false
            }, {
                file: "libs/bootstrap/3.4.1/js/bootstrap.min.js",
                allFrames: false
            }, {
                file: "scripts/function.js",
                allFrames: false
            }, {
                code: "_w_notch(" + JSON.stringify(_w_bather) + ", true);",
                allFrames: false
            } ]);
        } else {
            chrome.notifications.create("", {
                type: "basic",
                iconUrl: "./images/icon512.png",
                title: _w_ban("_w_gist"),
                message: _w_ban("_w_icicle")
            });
        }
    }));
}