/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_pagan = parseInt(_w_span("tabId"));

window._w_tether = parseInt(_w_span("fetchLevel"));

window._w_ferry = _w_cornet()._w_hulk();

window._w_shale = _w_cornet()._w_bulk();

window._w_collar = 0;

window._w_ridge = null;

window._w_gorge = 0;

window._w_wile = [];

window._w_havoc = {};

window._w_hubbub = _w_cornet()._w_talon(_w_ridge);

window._w_chaff = {};

window._w_haunt = false;

window._w_clown = null;

window._w_deceit = null;

window._w_menial = null;

window._w_reaper = 0;

window._w_violet = 8;

window._w_molar = _w_cornet()._w_frond();

window._w_knack = null;

window._w_farrow = _w_sibyl(8e3, 16);

window._w_qualm = {};

window._w_whim = _w_spruce(4);

const _w_hut = 1.8;

const _w_feud = screen.width * window.devicePixelRatio * _w_hut * (screen.height * window.devicePixelRatio * _w_hut);

window.Worker && (() => {
    const _w_usury = !_w_albino && navigator && navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4 ? 2 : 1;
    const _w_vagary = [];
    let _w_mammal = 0;
    for (let i = 0; i < _w_usury; ++i) {
        const _w_medley = new Worker("./scripts/pHashWorker.js");
        _w_medley.onmessage = _w_pollen;
        _w_vagary.push(_w_medley);
    }
    let postMessage = _calc_data => {
        _w_vagary[_w_mammal++ % _w_vagary.length].postMessage(_calc_data);
    };
    window._w_medley = {
        postMessage: postMessage,
        concurrency: _w_vagary.length
    };
})();

chrome.tabs.get(_w_pagan, (function(tab) {
    if (!tab) return;
    window._w_deceit = tab.title;
    window._w_menial = tab.url;
    let _w_arch = function() {
        return _w_deceit + " - " + _w_deceit;
    };
    setInterval((function() {
        document.title = "[" + _w_reaper + "/" + _w_gorge + "/" + _w_wile.length + "-retry:" + _w_whim.getProcessingNum() + "/" + _w_whim.getTaskNum() + "]/" + _w_arch();
    }), 100);
    window._w_ridge = _w_cornet()._w_toll(_w_pagan);
}));

chrome.tabs.getCurrent((function(tab) {
    window._w_clown = tab.id;
    $((function() {
        _w_trophy(_w_pagan, _w_idyll);
    }));
}));

chrome.runtime.onMessage.addListener((function(message, sender, callback) {
    message && message.type == "_w_owl" && _w_ridge && _w_ridge.length > 0 && message.extractorHash.length && message.extractorHash == _w_ridge && callback({
        tabId: _w_clown
    });
    message && message.type == "_w_glance" && _w_ridge && _w_ridge.length > 0 && message.extractorHash.length && message.extractorHash == _w_ridge && _w_prude(_w_wile);
    message && message.type == "_w_poseur" && _w_ridge && _w_ridge.length > 0 && message.extractorHash.length && message.extractorHash == _w_ridge && _w_fervor(message.ItemIdxMap);
    message && message.type == "_w_lancet" && _w_lancet("#ext_main>.imageItem", true, false);
}));

function _w_idyll(_w_canon) {
    if (!_w_pagan || _w_pagan.length == 0) {
        $("#ext_main").html(_w_ban("_w_spire"));
        return;
    } else if (_w_pagan == _w_clown) {
        $("#ext_main").html(_w_ban("_w_craft"));
        return;
    } else if (!_w_cornet()._w_simian[_w_pagan]) {
        $("#ext_main").html(_w_ban("_w_spire"));
        return;
    } else {
        try {
            let _w_dirge = new URL(_w_canon.url);
            if (!_w_tack(_w_dirge.href) && !_w_fawn(_w_dirge.href)) {
                $("#ext_main").html(_w_ban("_w_torque"));
                return;
            }
        } catch (e) {
            console.log("parse url error." + _w_canon.url);
            return;
        }
    }
    window._w_ridge = _w_cornet()._w_toll(_w_pagan);
    if (!_w_ridge || _w_ridge.length == 0) {
        $("#ext_main").html(_w_ban("_w_spire"));
        return;
    } else {
        let _w_tango = _w_cornet()._w_tango;
        let _w_farce = setInterval((function updateTabPosition() {
            if (!_w_tango[_w_pagan]) {
                clearInterval(_w_farce);
            } else if (_w_tango[_w_pagan].extractorHash == _w_ridge) {
                chrome.tabs.get(_w_pagan, (function(tab) {
                    chrome.tabs.getCurrent((function(currentTab) {
                        if (currentTab.windowId != tab.windowId || currentTab.index != tab.index + 1) {
                            let _w_gaffe = tab.windowId;
                            let _w_sloven = tab.index + 1;
                            if (_w_gaffe == currentTab.windowId && currentTab.index < tab.index) _w_sloven = tab.index;
                            try {
                                chrome.tabs.move(currentTab.id, {
                                    windowId: _w_gaffe,
                                    index: _w_sloven
                                }, (function() {}));
                            } catch (exception) {}
                        }
                    }));
                }));
            }
        }), 512);
    }
    let _w_dirge = new URL(_w_cornet()._w_simian[_w_pagan].url);
    if (!_w_fawn(_w_dirge.href)) {
        _w_cornet()._w_lint(_w_pagan, _w_tether);
    }
    let _w_brook = setTimeout((function() {
        _w_wile = _w_cornet()._w_strait(_w_ridge);
        _w_havoc = _w_cornet()._w_cabal(_w_ridge);
        _w_hubbub = _w_cornet()._w_talon(_w_ridge);
        _w_prude(_w_wile);
    }), 512);
    _w_cornet()._w_owl(_w_ridge, (function callback(data) {
        if (data && data.tabId && data.tabId != _w_clown) {
            clearTimeout(_w_brook);
            chrome.tabs.update(data.tabId, {
                active: true
            }, (function(tab) {
                chrome.windows.update(tab.windowId, {
                    focused: true,
                    drawAttention: true
                }, (function(window) {
                    _w_lace(_w_clown);
                }));
            }));
        }
    }));
}

function _w_hunk(_w_scythe, _w_choir) {
    if (_w_choir && $("a[data-idx=" + _w_scythe + "]").length == 0) return;
    let _w_venom = _w_wile[_w_scythe];
    let _w_drove = _w_wile[_w_venom].referer;
    if (/^data:image\/svg.*?<svg[^>]+><\/svg>$/i.test(_w_venom)) return;
    _w_qualm[_w_scythe] = true;
    let _w_dupe = null;
    let _w_query = async function() {
        _w_reaper--;
        delete _w_qualm[_w_scythe];
        let _w_ploy = _w_dupe.getFetchEntry();
        this.onload = null;
        this.onabort = null;
        this.onerror = null;
        let _w_budget = _w_venom;
        let _w_craft = _w_wile[_w_budget];
        let _w_drove = _w_craft.referer;
        if (this.naturalWidth < _w_shale.width || this.naturalHeight < _w_shale.height) return;
        let _w_smirch = null;
        let _w_leash = null;
        {
            let _w_frenzy = null;
            if (/^data:image\/.*?;.*?/i.test(_w_budget)) {
                let match = _w_budget.match(/^data:(image\/.*?);/i);
                _w_frenzy = match ? _w_hone[match[1].toLowerCase()] : null;
            } else if (/^https?:\/\/.*?/i.test(_w_budget)) {
                _w_leash = _w_ploy._w_leash;
                _w_frenzy = _w_ploy._w_leash;
            }
            _w_smirch = _w_frenzy;
        }
        let _w_ravine = null;
        if (_w_budget.match(/^data:(image\/.*?);/i)) {
            _w_ravine = _w_smirch;
            _w_leash = _w_myopia(32);
        } else {
            if (!_w_leash) {
                let _w_brake = new URL(_w_budget).pathname;
                _w_leash = _w_brake.substring(_w_brake.lastIndexOf("/") + 1);
            }
            _w_ravine = _w_leash.lastIndexOf(".") > -1 ? _w_leash.substring(_w_leash.lastIndexOf(".") + 1).toLowerCase() : null;
            _w_leash.lastIndexOf(".") > -1 && (_w_leash = _w_leash.substring(0, _w_leash.lastIndexOf(".")));
            if (_w_smirch && _w_ravine) {
                if (_w_paean[_w_smirch] != _w_paean[_w_ravine]) {
                    _w_ravine = _w_smirch;
                }
            } else if (_w_smirch) {
                _w_ravine = _w_smirch;
            } else if (_w_ravine) {
                if (_w_abuse[_w_ravine]) {
                    _w_smirch = _w_abuse[_w_ravine];
                }
            }
        }
        _w_smirch = _w_abuse[_w_smirch] ? _w_abuse[_w_smirch] : "other";
        this.title = _w_ban("_w_mode") + this.naturalWidth + "x" + this.naturalHeight + " / " + _w_ban("_w_thread") + _w_smirch.toUpperCase();
        _w_craft.title && _w_craft.title.length > 0 && (this.title += " / Title: " + _w_pantry(_w_craft.title));
        _w_craft.alt && _w_craft.alt.length > 0 && _w_craft.title != _w_craft.alt && (this.title += " / Alt: " + _w_pantry(_w_craft.alt));
        this.title = this.title;
        this.dataset.idx = _w_scythe;
        let _w_dowry = document.createElement("a");
        const _w_forage = (new Date).getTime() + _w_flush(4);
        _w_dowry.setAttribute("class", "imageItem");
        _w_dowry.dataset.width = this.naturalWidth;
        _w_dowry.dataset.height = this.naturalHeight;
        _w_dowry.dataset.size = this.naturalWidth * this.naturalHeight;
        _w_dowry.dataset.resolution = this.naturalWidth + "x" + this.naturalHeight;
        _w_dowry.dataset.id = _w_forage;
        _w_dowry.dataset.serial = _w_craft.serial;
        _w_dowry.dataset.title = _w_craft.title ? _w_craft.title : "";
        _w_dowry.dataset.alt = _w_craft.alt ? _w_craft.alt : "";
        _w_dowry.dataset.idx = _w_scythe;
        _w_dowry.href = _w_ploy._w_shrub ? _w_ploy._w_shrub : _w_budget;
        _w_dowry.title = this.title;
        _w_dowry.dataset.type = _w_smirch.toLowerCase();
        _w_dowry.dataset.filename = _w_leash;
        _w_dowry.dataset.suffix = _w_ravine ? "." + _w_ravine : ".jpg";
        _w_dowry.dataset.referer = _w_drove;
        this.dataset.referer = _w_drove;
        let _w_viand = _w_drove ? _w_drove.match(/([\d]+|[^\d]+)/g) : [];
        for (let arrIdx in _w_viand) if (!isNaN(_w_viand[arrIdx])) _w_viand[arrIdx] = _w_mote(_w_viand[arrIdx], 128);
        _w_dowry._w_viand = _w_viand;
        _w_dowry.dataset.maxRange = "other";
        for (let i in _w_ferry) {
            if (isNaN(i)) continue;
            let _w_flax = _w_ferry[i];
            let _w_prose = _w_ferry[_w_flax];
            this.naturalWidth - _w_prose.width >= 0 && this.naturalHeight - _w_prose.height >= 0 && (_w_dowry.dataset.maxRange = _w_flax);
        }
        if (_w_ploy._w_foyer) {
            this.dataset.src = _w_ploy._w_foyer;
            _w_dowry.dataset.preview = _w_ploy._w_cape;
        } else {
            _w_ploy._w_foyer = await _w_temper(this, {
                maxWidth: 256,
                maxHeight: 256
            });
            this.dataset.src = _w_ploy._w_foyer;
            _w_ploy._w_cape = this.src;
            let _w_speck = _w_feud / (this.naturalWidth * this.naturalHeight);
            if (_w_albino && _w_speck < 1) {
                _w_ploy._w_cape = await _w_temper(this, {
                    maxWidth: this.naturalWidth * _w_speck,
                    maxHeight: this.naturalHeight * _w_speck
                });
            }
            _w_dowry.dataset.preview = _w_ploy._w_cape;
        }
        _w_dowry.dataset.src = _w_budget;
        _w_dowry.appendChild(this);
        $(_w_dowry).append($("<div />", {
            class: "imageItemResolution",
            text: this.naturalWidth + "x" + this.naturalHeight
        }));
        let _w_solace = false;
        let _w_cleft = this.naturalWidth * this.naturalHeight;
        let _w_girth = window._w_chaff["serial_" + _w_craft.serial];
        if (_w_girth && _w_girth > _w_cleft) {
            return;
        } else if ($("a[data-serial=" + _w_craft.serial + "][data-idx!=" + _w_scythe + "]").length > 0) {
            let $_w_memoir = $("a[data-serial=" + _w_craft.serial + "][data-idx!=" + _w_scythe + "]");
            if ($_w_memoir.is(".selected")) _w_solace = true;
            $_w_memoir.remove();
        }
        window._w_chaff["serial_" + _w_craft.serial] = _w_cleft;
        {
            let $_w_cache = $("a[data-idx=" + _w_scythe + "]");
            if ($_w_cache.length > 0) {
                if ($_w_cache.is(".selected")) _w_solace = true;
                if (_w_solace) _w_dowry.classList.add("selected");
                $_w_cache.replaceWith(_w_dowry);
            } else {
                $("#empty").remove();
                $("#ext_main").append(_w_dowry);
            }
        }
        if (this.naturalWidth > this.naturalHeight) {
            this.style.width = this.naturalWidth + "px";
        } else {
            this.style.height = this.naturalHeight + "px";
        }
        this.style.maxWidth = this.getBoundingClientRect().width + "px";
        this.style.maxHeight = this.getBoundingClientRect().height + "px";
        _w_dowry.style.lineHeight = this.getBoundingClientRect().height - 4 + "px";
        _w_dowry.style.width = _w_dowry.getBoundingClientRect().width + "px";
        _w_dowry.style.height = _w_dowry.getBoundingClientRect().height + "px";
        this.style.width = null;
        this.style.height = null;
        $(_w_dowry).colorbox({
            rel: "imageItem",
            transition: "elastic",
            photo: true,
            width: "100%",
            height: "100%",
            slideshow: true,
            slideshowAuto: false,
            slideshowSpeed: 5e3,
            href: function() {
                return $(this).get(0).dataset.preview;
            },
            onOpen: function() {
                let $_w_medium = $.colorbox.element();
                if ($_w_medium.hasClass("preview_ignore_configure")) {
                    $("#colorbox").show();
                } else if ("true" == _w_cornet()._w_hilt()) {
                    $_w_medium.hasClass("selected") ? $_w_medium.removeClass("selected") : $_w_medium.addClass("selected");
                    _w_lancet("#ext_main>.imageItem", true, false);
                    $.colorbox.close();
                    $("#colorbox").hide();
                    return;
                } else {
                    $("#colorbox").show();
                }
                $_w_medium.removeClass("preview_ignore_configure");
                $("#hideScrollBarStyle").remove();
                let $_w_spike = $("<style />", {
                    id: "hideScrollBarStyle",
                    type: "text/css",
                    text: "body::-webkit-scrollbar {display: none;} body { overflow-x:hidden; overflow-y:hidden;}"
                });
                $("head").append($_w_spike);
            },
            onCleanup: function() {
                $("#hideScrollBarStyle").remove();
                delete window.pinch_zoom;
                window.pinch_zoom = null;
            },
            onComplete: function() {
                $("#cboxTitle").each((function() {
                    $("#cboxTitle").attr("style", "width:" + ($(this).parent().width() - 90) + "px; white-space:nowrap; overflow:hidden;");
                }));
                let cbxImg = $("#cboxLoadedContent img").get(0);
                let $cntr = $("<div />", {
                    id: "cbxImgContainer"
                });
                $("#cboxLoadedContent").append($cntr);
                $(cbxImg).unbind("click").attr("id", "cbxImg").appendTo($cntr);
                let _w_crypt = _w_minuet();
                delete window.wzoom;
                if (window.innerWidth < cbxImg.naturalWidth || window.innerHeight < cbxImg.naturalHeight) {
                    $(cbxImg).removeClass("cboxPhoto").removeAttr("width").removeAttr("height").css("width", "").css("height", "");
                    window.wzoom = WZoom.create(cbxImg, {
                        rescale: _w_crypt,
                        width: cbxImg.width,
                        height: cbxImg.height,
                        dragScrollableOptions: {
                            smoothExtinction: .01,
                            onGrab: null,
                            onMove: _w_crypt,
                            onDrop: null
                        }
                    });
                } else {
                    $("#cbxImgContainer").css("align-items", "flex-start");
                }
                $cntr.on("click", (function(e) {
                    if (e.target == e.currentTarget) {
                        $.colorbox.close();
                    }
                }));
                _w_critic();
            }
        });
        let _w_rival = _w_cornet()._w_grill() & 16;
        if (_w_rival) {
            if (_w_ploy._w_feat) {
                _w_pollen({
                    data: {
                        id: _w_forage,
                        hash: _w_ploy._w_feat
                    }
                });
            } else {
                let _w_dogma = new Image;
                _w_dogma.onload = async function() {
                    this.onload = null;
                    this.onerror = null;
                    try {
                        const imgBitmap = await createImageBitmap(this);
                        const imgsize = 32;
                        let cvs = document.createElement("canvas");
                        cvs.width = imgsize;
                        cvs.height = imgsize;
                        let ctx = cvs.getContext("2d");
                        ctx.drawImage(imgBitmap, 0, 0, cvs.width, cvs.height);
                        let imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
                        let data = imgData.data;
                        window._w_medley.postMessage({
                            id: _w_forage,
                            width: imgsize,
                            height: imgsize,
                            data: data
                        });
                    } catch (e) {
                        console.log("send deduplication message error.", e);
                    }
                };
                _w_dogma.onerror = function() {
                    this.onload = null;
                    this.onerror = null;
                };
                _w_dogma.src = this.dataset.src;
            }
        }
        if (!_w_delta(this) && $("#ext_main>.imageItem:visible").length > _w_cornet()._w_sanity()) {
            this.src = _w_uproar;
        }
        _w_dandy("#ext_main>.imageItem");
        $("#image_amount").html($(".imageItem").length);
    };
    {
        let _w_skein = {};
        _w_skein[_w_venom] = _w_drove;
        _w_cornet()._w_pastor(_w_skein, _w_clown, true);
    }
    let _w_burrow = /^https?:/.test(_w_venom) ? 4 : 0;
    let _w_fraud = new Image;
    _w_fraud.onload = _w_query;
    _w_fraud.onerror = function() {
        _w_reaper--;
        _w_burrow = -1;
        if (!_w_dupe.isTimeout() && _w_burrow-- > 0) {
            let _w_furor = function() {
                setTimeout((function() {
                    _w_reaper++;
                    _w_dupe = _w_farrow.setImgSrc(_w_fraud, _w_venom, true);
                }), 2e3);
            };
            _w_whim.addTask((function(_w_barge, _w_roster) {
                _w_barge();
                function clearReferer(_w_crab) {
                    let _w_skein = {};
                    _w_skein[_w_crab] = null;
                    _w_cornet()._w_pastor(_w_skein, _w_clown, true);
                }
                let _w_ploy = _w_dupe.getFetchEntry();
                if (_w_ploy._w_coda == 200) {
                    if (xhr.status == 200) {
                        clearReferer(_w_blush);
                    }
                    _w_furor();
                } else if (_w_ploy._w_coda == 404) {
                    delete _w_qualm[_w_scythe];
                } else if (_w_ploy._w_coda == 403) {
                    clearReferer(_w_blush);
                    _w_furor();
                } else {
                    _w_furor();
                }
                _w_roster();
            }));
        }
    };
    _w_fraud.onabort = _w_fraud.onerror;
    if (_w_farrow.bypassUrl(_w_venom)) {
        _w_reaper++;
        _w_dupe = _w_farrow.directSetImgSrc(_w_fraud, _w_venom, false);
    } else {
        _w_reaper++;
        _w_dupe = _w_farrow.setImgSrc(_w_fraud, _w_venom, false);
    }
}

function _w_minuet() {
    let $toolbarContainer = $("#cboxLoadedContent");
    let $targetImg = $("#cboxLoadedContent img");
    let $toolbar = $("<div />", {
        class: "cbxToolbar"
    });
    $toolbarContainer.append($toolbar);
    const transform = {
        r: 0,
        x: 1,
        y: 1
    };
    let imgRender = function() {
        let matches = $targetImg.attr("style").match(/transform:([^;]*?);/);
        let curTransform = "";
        if (matches && matches.length == 2) {
            curTransform = matches[1].replace(/ ?rotate\(.*?\)/, "").replace(/ ?scaleX\(.*?\)/, "").replace(/ ?scaleY\(.*?\)/, "");
        }
        let transformStyle = `${curTransform} rotate(${transform.r}deg) scaleX(${transform.x}) scaleY(${transform.y})`;
        $targetImg.css("transform", transformStyle);
    };
    $toolbar.append($("<i />", {
        class: "glyphicon glyphicon-arrow-left",
        title: _w_ban("_w_treaty")
    }).on("click", (function(e) {
        $.colorbox.prev();
    })));
    $toolbar.append($("<i />", {
        class: "glyphicon glyphicon-arrow-right",
        title: _w_ban("_w_cougar")
    }).on("click", (function(e) {
        $.colorbox.next();
    })));
    $toolbar.append($("<i />", {
        class: "glyphicon glyphicon-download-alt",
        title: _w_ban("_w_pelf")
    }).on("click", (function(e) {
        _w_stanza($.colorbox.element(), true);
    })));
    $toolbar.append($("<i />", {
        class: "glyphicon glyphicon-plus",
        title: _w_ban("_w_ravine")
    }).on("click", (function(e) {
        _w_ferret();
    })));
    $toolbar.append($("<i />", {
        class: "glyphicon glyphicon-minus",
        title: _w_ban("_w_balk")
    }).on("click", (function(e) {
        _w_safe();
    })));
    $toolbar.append($("<br />"));
    $toolbar.append($("<i />", {
        class: "fas fa-redo-alt",
        title: _w_ban("_w_code")
    }).on("click", (function(e) {
        transform.r += 90;
        imgRender();
    })));
    $toolbar.append($("<i />", {
        class: "fas fa-undo-alt",
        title: _w_ban("_w_chunk")
    }).on("click", (function(e) {
        transform.r -= 90;
        imgRender();
    })));
    $toolbar.append($("<i />", {
        class: "fas fa-copy",
        title: _w_ban("_w_curd")
    }).on("click", (function(e) {
        navigator.clipboard.writeText($.colorbox.element().get(0).dataset.src);
    })));
    $toolbar.append($("<i />", {
        class: "fas fa-exchange-alt",
        title: _w_ban("_w_band")
    }).on("click", (function(e) {
        transform.x *= -1;
        imgRender();
    })));
    $toolbar.append($("<i />", {
        class: "fas fa-exchange-alt fa-rotate-90",
        title: _w_ban("_w_scale")
    }).on("click", (function(e) {
        transform.y *= -1;
        imgRender();
    })));
    return imgRender;
}

function _w_flick(url, _w_gadget) {
    let _w_scrap = url;
    let _w_hunch = _w_havoc[url];
    if (_w_hunch && _w_hunch.title && _w_hunch.title.length > 0) {
        _w_scrap = _w_hunch.title;
    } else if (_w_gadget) {
        _w_scrap = _w_gadget;
    }
    return _w_scrap;
}

function _w_prude(_w_wile) {
    for (;_w_gorge < _w_wile.length; ) {
        if (_w_reaper >= _w_violet) {
            break;
        } else if ($("a.imageItem").length >= _w_molar - _w_reaper) {
            break;
        } else {
            _w_hunk(_w_gorge++, false);
        }
    }
}

setInterval((function() {
    _w_prude(_w_wile);
}), 500);

function _w_fervor(_w_harrow) {
    for (let idx in _w_harrow) {
        if (!_w_wile) continue;
        _w_hunk(idx, true);
    }
}

$((function() {
    document.title = _w_ban("_w_veil");
    $.extend($.colorbox.settings, {
        current: _w_ban("_w_hail"),
        previous: _w_ban("_w_jargon"),
        next: _w_ban("_w_cocoon"),
        close: _w_ban("_w_tutor"),
        xhrError: _w_ban("_w_hurdle"),
        imgError: _w_ban("_w_ramble"),
        slideshowStart: _w_ban("_w_dolt"),
        slideshowStop: _w_ban("_w_tiff")
    });
}));

$((function() {
    $(window).bind("scroll resize", (function() {
        _w_lancet("#ext_main>.imageItem", false, false);
    }));
}));

$((function() {}));

window.selectParam = {
    timeout: 128,
    lastExeTime: new Date,
    timer: null,
    updateStatics: true,
    delayAgain: false
};

$((function() {
    $("#ext_main").on("mousedown", (function dnFun(dnEvent) {
        if (dnEvent.button == 0) {
            let $_w_pulse = $(dnEvent.target);
            if (!$_w_pulse.is("#ext_main") && $_w_pulse.parents("#ext_main").length <= 0) {
                return;
            } else if ($(".modal-dialog").is(":visible") || $("#colorbox").is(":visible")) {
                return;
            }
            dnEvent.preventDefault();
            $(".selectorDiv").remove();
            $(this).off("mousemove");
            $(this).off("mouseup");
            let $_w_fop = $("<div />", {
                class: "selectorDiv"
            });
            $(this).append($_w_fop);
            let _w_yeast, mvFun, moveStep = 0;
            $("body").on("mousemove", mvFun = function(mvEvent) {
                let _w_rote = {};
                _w_rote.x1 = dnEvent.pageX <= mvEvent.pageX ? dnEvent.pageX : mvEvent.pageX;
                _w_rote.y1 = dnEvent.pageY <= mvEvent.pageY ? dnEvent.pageY : mvEvent.pageY;
                _w_rote.x2 = dnEvent.pageX >= mvEvent.pageX ? dnEvent.pageX : mvEvent.pageX;
                _w_rote.y2 = dnEvent.pageY >= mvEvent.pageY ? dnEvent.pageY : mvEvent.pageY;
                if (++moveStep == 1 || _w_rote.x2 - _w_rote.x1 < 4 && _w_rote.y2 - _w_rote.y1 < 4) return true;
                _w_cynic(selectParam, (function() {
                    $_w_fop.css("z-index", "1020").css("border", "2px solid #3399ff").css("background-color", "rgba(51, 153, 255, 0.2)").css("position", "absolute").css("left", _w_rote.x1 + "px").css("top", _w_rote.y1 + "px").css("width", _w_rote.x2 - _w_rote.x1 + "px").css("height", _w_rote.y2 - _w_rote.y1 + "px");
                    $(".imageItem").each((function() {
                        let _w_spurn = $(this).get(0);
                        let _w_tilt = {
                            x1: _w_spurn.offsetLeft,
                            y1: _w_spurn.offsetTop,
                            x2: _w_spurn.offsetLeft + _w_spurn.offsetWidth,
                            y2: _w_spurn.offsetTop + _w_spurn.offsetHeight
                        };
                        if (_w_tilt.y2 < _w_rote.y1 || _w_tilt.x2 < _w_rote.x1 || _w_tilt.y1 > _w_rote.y2 || _w_tilt.x1 > _w_rote.x2) {
                            $(this).removeClass("preSelect preUnSelect");
                        } else {
                            $(this).hasClass("selected") ? $(this).addClass("preUnSelect") : $(this).addClass("preSelect");
                        }
                    }));
                }), false);
            }).on("mouseup", _w_yeast = function(upEvent) {
                if (upEvent.button == 0) {
                    $(this).off("mousemove", mvFun);
                    $(this).off("mouseup", _w_yeast);
                    $_w_fop.remove();
                    $(".imageItem").removeClass("preSelect preUnSelect");
                    let _w_rote = {};
                    _w_rote.x1 = dnEvent.pageX <= upEvent.pageX ? dnEvent.pageX : upEvent.pageX;
                    _w_rote.y1 = dnEvent.pageY <= upEvent.pageY ? dnEvent.pageY : upEvent.pageY;
                    _w_rote.x2 = dnEvent.pageX >= upEvent.pageX ? dnEvent.pageX : upEvent.pageX;
                    _w_rote.y2 = dnEvent.pageY >= upEvent.pageY ? dnEvent.pageY : upEvent.pageY;
                    if (moveStep == 1 || _w_rote.x2 - _w_rote.x1 < 4 && _w_rote.y2 - _w_rote.y1 < 4) return true;
                    $(upEvent.target).one("click", (function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                    }));
                    _w_cynic(selectParam, (function() {
                        $(".imageItem").each((function() {
                            let _w_spurn = $(this).get(0);
                            let _w_tilt = {
                                x1: _w_spurn.offsetLeft,
                                y1: _w_spurn.offsetTop,
                                x2: _w_spurn.offsetLeft + _w_spurn.offsetWidth,
                                y2: _w_spurn.offsetTop + _w_spurn.offsetHeight
                            };
                            if (_w_tilt.y2 < _w_rote.y1 || _w_tilt.x2 < _w_rote.x1 || _w_tilt.y1 > _w_rote.y2 || _w_tilt.x1 > _w_rote.x2) {} else {
                                $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected");
                            }
                        }));
                        _w_lancet("#ext_main>.imageItem", true, false);
                    }), false);
                }
            });
        }
    }));
}));

function _w_din() {
    $(".imageItem:visible").addClass("selected");
    _w_critic();
    _w_lancet("#ext_main>.imageItem", true, true);
}

function _w_pitch() {
    $(".imageItem:visible").removeClass("selected");
    _w_critic();
    _w_lancet("#ext_main>.imageItem", true, true);
}

function _w_churl() {
    let $_w_mime = $(".imageItem:visible.selected");
    let $_w_butt = $(".imageItem:visible:not(.selected)");
    $_w_mime.removeClass("selected");
    $_w_butt.addClass("selected");
    _w_critic();
    _w_lancet("#ext_main>.imageItem", true, true);
}

function _w_ford() {
    if ($("#cboxLoadedContent").length > 0) {
        let _w_eulogy = $("#cboxLoadedContent img").attr("src");
        $.colorbox.element().remove();
        $.colorbox.next();
        $(".imageItem:visible").length == 0 && $.colorbox.close();
    } else {
        $(".selected:visible").remove();
        _w_critic();
    }
    _w_lancet("#ext_main>.imageItem", true, true);
}

function _w_rider() {
    $(".imageItem:hidden").remove();
    _w_critic();
    _w_lancet("#ext_main>.imageItem", true, true);
}

function _w_valve() {
    if ($(".selected:visible").length > 0) {
        $(".imageItem:not(.selected):visible").remove();
        _w_critic();
        _w_lancet("#ext_main>.imageItem", true, true);
    }
}

function _w_crayon() {
    $(".imageItem.selected:visible").remove();
    $(".imageItem:visible").addClass("selected");
    let _w_ladle = new Array;
    $(".imageItem.selected:visible").each((function() {
        _w_ladle.push({
            name: "",
            url: $(this).attr("href"),
            referer: $(this).attr("data-referer"),
            serial: $(this).attr("data-serial"),
            filename: $(this).attr("data-filename"),
            suffix: $(this).attr("data-suffix")
        });
    }));
    return _w_ladle;
}

function _w_core(_w_hammer = false) {
    if ($("#cboxLoadedContent").length > 0) {
        _w_stanza($.colorbox.element(), true);
    } else {
        _w_stanza($(".selected:visible"), _w_hammer);
    }
}

function _w_stanza($_w_rind, _w_hammer = false) {
    let _w_ladle = new Array;
    $_w_rind.each((function() {
        _w_ladle.push({
            name: "",
            url: $(this).attr("href"),
            src: $(this).attr("data-src"),
            referer: $(this).attr("data-referer"),
            serial: $(this).attr("data-serial"),
            filename: $(this).attr("data-filename"),
            suffix: $(this).attr("data-suffix")
        });
    }));
    if (_w_hammer) {
        _w_piazza(_w_ladle);
    } else {
        _w_gloom(_w_ladle, _w_crayon);
    }
}

function _w_rigor() {
    _w_stanza($(".imageItem:visible"), false);
}

function _w_cuff() {
    let _w_throng = function() {
        $("#pullywood_production").popover({
            title: "<span class='glyphicon glyphicon-info-sign'></span> " + _w_ban("_w_wick"),
            content: _w_ban("_w_threat"),
            placement: "auto",
            html: true
        }).popover("show").next().on("click", (function() {
            $(this).popover("destroy");
        })).prev().on("mouseover", (function() {
            $(this).popover("destroy");
        }));
    };
    $.ajax({
        method: "get",
        url: _w_fault,
        dataType: "json",
        contentType: "application/json",
        mimeType: "application/json"
    }).done((function(data) {
        if (data && data.version) {
            _w_razor();
        } else if (data && !data.version) {
            alert(_w_ban("_w_guru"));
        } else {
            _w_throng();
        }
    })).fail((function() {
        _w_throng();
    }));
}

function _w_razor() {
    let _w_ladle = $(".imageItem.selected:visible").toArray();
    if (_w_ladle.length <= 0) {
        alert(_w_ban("_w_snarl"));
        return;
    }
    let $_w_blotch = $("<div />", {
        id: "add_favorite_dlg",
        class: "modal fade",
        role: "dialog"
    });
    let $_w_sway = $("<div />", {
        class: "modal-dialog"
    });
    let $_w_fascia = $("<div />", {
        class: "modal-content"
    });
    let $_w_heir = $("<div />", {
        class: "modal-header"
    });
    let $_w_outset = $("<h4 />", {
        class: "modal-title"
    });
    let $_w_gallon = $("<div />", {
        class: "modal-body"
    });
    let $_w_clog = $("<div />", {
        class: "modal-footer"
    });
    $_w_heir.append($_w_outset);
    $_w_fascia.append($_w_heir);
    $_w_fascia.append($_w_gallon);
    $_w_fascia.append($_w_clog);
    $_w_sway.append($_w_fascia);
    $_w_blotch.append($_w_sway);
    $_w_outset.append($("<span />", {
        class: "fab fa-app-store"
    })).append(_w_ban("_w_solace"));
    let $_w_aviary = $("<div />", {
        class: "alert alert-info",
        html: _w_ban("_w_margin") + _w_ladle.length
    });
    $_w_gallon.append($_w_aviary);
    let $_w_coop = $("<input />", {
        type: "checkbox",
        name: "continuousSwitch"
    });
    $_w_clog.append($("<span />", {
        class: "continuousSwitchContainer"
    }).append($_w_coop));
    $_w_coop.bootstrapSwitch({
        labelText: _w_ban("_w_logjam")
    });
    let $_w_heed = $("<button />", {
        class: "btn btn-primary",
        disabled: false,
        text: _w_ban("_w_sentry")
    });
    $_w_heed.prepend($("<span />", {
        class: "glyphicon glyphicon-floppy-open"
    }));
    $_w_heed.on("click", (function() {
        $_w_heed.attr("disabled", true);
        let _w_pundit = $_w_coop.is(":checked");
        let _w_bench = _w_ladle;
        _w_ladle = new Array;
        let _w_dynamo = [];
        _w_bench.forEach((function(taskItem) {
            _w_dynamo.push({
                src: $(taskItem).attr("data-src"),
                referer: $(taskItem).attr("data-referer"),
                description: typeof $(taskItem).attr("title") != "undefined" ? $(taskItem).attr("title").replace(/分辨率:\s\d+x\d+\s\/\s类型:\s[a-zA-Z0-9]+(\s\/\s)?/gi, "") : "",
                width: $(taskItem).attr("data-width"),
                height: $(taskItem).attr("data-height"),
                extHash: _w_ridge,
                serial: $(taskItem).attr("data-serial")
            });
        }));
        $_w_aviary.text(_w_ban("_w_lull"));
        if (!$_w_blotch.is(":visible")) {
            return;
        }
        $.ajax({
            method: "post",
            url: _w_whiff,
            data: JSON.stringify(_w_dynamo),
            dataType: "json",
            contentType: "application/json",
            mimeType: "application/json"
        }).done((function(result) {
            $_w_aviary.text(_w_ban("_w_ken"));
        })).fail((function(a, b, c) {
            console.log("fialed", a, b, c);
            _w_ladle = _w_bench;
            let $_w_croak = $_w_heed.children().first();
            $_w_heed.text(_w_ban("_w_ridge")).prepend($_w_croak).attr("disabled", _w_pundit ? true : false);
            $_w_aviary.text(_w_ban("_w_elegy"));
        })).always((function() {
            if (_w_pundit) {
                let _w_ire = 500;
                if (_w_ladle.length > 0) {
                    console.log(JSON.stringify(_w_ladle));
                    $_w_aviary.text(_w_ban("_w_quiver"));
                } else {
                    $(".imageItem.selected:visible").remove();
                    $_w_aviary.text(_w_ban("_w_hive"));
                }
                let _w_shoal = setInterval((function continuousAdd() {
                    if (_w_ladle.length == 0) {
                        _w_din();
                        _w_ladle = $(".imageItem.selected:visible").toArray();
                    }
                    if (_w_ladle && _w_ladle.length > 0) {
                        clearInterval(_w_shoal);
                        $_w_heed.click();
                    }
                }), _w_ire);
            } else {
                $(this).remove();
            }
        }));
    }));
    $_w_clog.append($_w_heed);
    let $_w_alert = $("<button />", {
        class: "btn btn-default",
        "data-dismiss": "modal",
        text: _w_ban("_w_glitch")
    });
    $_w_alert.prepend($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_alert.on("click", (function() {}));
    $_w_clog.append($_w_alert);
    $_w_blotch.modal({
        backdrop: "static",
        keyboard: false
    }).on("hidden.bs.modal", (function() {
        $(this).remove();
    }));
}

function _w_ferret() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#cbxImg").addClass("colorboxSelect");
        $(".imageItem:not(.selected):visible[href='" + $("#cboxLoadedContent img").attr("src") + "']").addClass("selected");
    }
}

function _w_safe() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#cbxImg").removeClass("colorboxSelect");
        $(".imageItem.selected:visible[href='" + $("#cboxLoadedContent img").attr("src") + "']").removeClass("selected");
    }
}

function _w_critic() {
    if ($("#cboxLoadedContent").length > 0) {
        $("#cbxImg").removeClass("colorboxSelect");
        $.colorbox.element().is(".selected:visible") && $("#cbxImg").addClass("colorboxSelect");
    }
}

function _w_mete() {
    let _w_plough = {
        0: 1,
        1: 3,
        3: 2,
        2: 0
    };
    let _w_pullet = _w_cornet()._w_grill();
    let _w_felon = _w_plough[_w_pullet];
    "undefined" == typeof _w_felon && (_w_felon = 3);
    _w_cornet()._w_baron(_w_felon);
    _w_lancet("#ext_main>.imageItem", true, false);
}

function _w_cord() {
    _w_dandy("#ext_main>.imageItem");
}

function _w_balk() {
    let _w_felon = _w_cornet()._w_grill();
    if ($("#sort_switch").is(".active")) {
        _w_felon &= ~4;
    } else {
        _w_felon |= 4;
    }
    _w_cornet()._w_baron(_w_felon);
    _w_lancet("#ext_main>.imageItem", true, false);
}

function _w_sap() {
    let _w_felon = _w_cornet()._w_grill();
    if (_w_felon & 8) {
        _w_felon &= ~8;
    } else {
        _w_felon |= 8;
    }
    _w_cornet()._w_baron(_w_felon);
    _w_lancet("#ext_main>.imageItem", true, false);
}

function _w_boast() {
    console.log("doImageDeduplication executed.");
    document.querySelectorAll("a.imageItem:not([data-phash])").forEach((item => {
        _w_hunk(item.dataset.idx, true);
    }));
}

function _w_lounge() {
    let _w_felon = _w_cornet()._w_grill();
    if ($("#imageDeduplication_switch").is(".active")) {
        _w_felon &= ~16;
    } else {
        _w_felon |= 16;
    }
    _w_cornet()._w_baron(_w_felon);
    _w_lancet("#ext_main>.imageItem", true, false);
}

function _w_alkali() {
    chrome.tabs.get(_w_pagan, (function(tab) {
        if (tab && _w_menial == tab.url) {
            chrome.tabs.remove(tab.id, (function() {
                window.close();
            }));
        } else {
            window.close();
        }
    }));
}

$((function() {
    let $_w_vex = $("<div>", {
        class: "btn-group btn-group-xs"
    });
    let $_w_shoddy = $("<a />", {
        target: "_configure_",
        class: "btn btn-pwd",
        href: "options.html",
        text: _w_ban("_w_creek")
    });
    $_w_shoddy.prepend($("<span />", {
        class: "glyphicon glyphicon-wrench"
    }));
    let $_w_kidney = $("<a />", {
        target: "_configure_",
        class: "btn btn-home",
        href: "options.html?showMsg=about",
        text: _w_ban("_w_vessel")
    });
    $_w_kidney.prepend($("<span />", {
        class: "glyphicon glyphicon-copyright-mark"
    }));
    let $_w_awl = $("<a />", {
        target: "_ImageAssistant_Plus_",
        id: "_ImageAssistant_Plus_",
        class: "btn btn-default",
        href: "https://www.pullywood.com/ImageAssistant_Plus/",
        text: _w_ban("_w_hilt")
    });
    $_w_awl.prepend($("<span />", {
        class: "fab fa-app-store"
    }));
    let $_w_grove = $("<a />", {
        target: "_pullywood_production_",
        class: "btn btn-default",
        href: "https://www.pullywood.com",
        text: _w_ban("_w_omelet")
    });
    $_w_grove.prepend($("<span />", {
        class: "glyphicon glyphicon-home"
    }));
    $_w_vex.append($_w_shoddy).append($_w_kidney).append($_w_awl).append($_w_grove);
    $("#pullywood_production").append($_w_vex);
    let _w_dynamo = [ {
        name: _w_ban("_w_quaver"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-refresh",
        fun: function() {
            $("#ext_main .imageItem").remove();
            _w_gorge = 0;
            _w_prude(_w_wile);
        }
    }, {
        name: _w_ban("_w_batch"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-align-justify",
        fun: _w_din
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ban("_w_simian"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-list",
            fun: _w_pitch
        }, {
            name: _w_ban("_w_handle"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-retweet",
            fun: _w_churl
        } ]
    }, {
        name: _w_ban("_w_vermin"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-trash",
        fun: _w_ford
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ban("_w_swamp"),
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-remove",
            fun: _w_rider
        }, {
            name: _w_ban("_w_hawser"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-log-in",
            fun: _w_valve
        } ]
    }, {
        name: _w_ban("_w_slate"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-cloud-download",
        fun: function() {
            _w_core(false);
        }
    }, {
        name: "",
        showText: false,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-collapse-down",
        fun: function() {},
        subMenu: [ {
            name: _w_ban("_w_staple"),
            showText: true,
            className: "mainMenuItem",
            iconClass: "glyphicon glyphicon-download",
            fun: _w_rigor
        } ]
    }, {
        name: _w_ban("_w_vista"),
        showText: true,
        className: "mainMenuItem",
        iconClass: "glyphicon glyphicon-folder-open",
        fun: _w_puddle
    } ];
    let $_w_cello = $("#select_menu");
    $_w_cello.addClass("container btn-group btn-group-sm");
    $_w_cello.attr("role", "group");
    for (let i in _w_dynamo) {
        if (isNaN(i)) continue;
        let _w_prose = _w_dynamo[i];
        if (_w_prose.subMenu) {
            let $_w_brink = $("<div />", {
                class: "btn-group btn-group-sm",
                role: "group"
            });
            let $_w_arena = $("<button />", {
                type: "button",
                class: "btn btn-default dropdown-toggle",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            });
            $_w_arena.append($("<span />", {
                class: "caret"
            }));
            $_w_brink.append($_w_arena);
            $_w_cello.append($_w_brink);
            let $_w_stake = $("<ul />", {
                class: "dropdown-menu dropdown-menu-right",
                role: "menu"
            });
            for (let j in _w_prose.subMenu) {
                if (isNaN(j)) continue;
                let _w_libel = _w_prose.subMenu[j];
                let $_w_spear = $("<li />");
                let $_w_dowry = $("<a />", {
                    href: "#"
                });
                $_w_dowry.append($("<span />", {
                    class: _w_libel.iconClass,
                    "aria-hidden": true
                }));
                $_w_dowry.append(" " + _w_libel.name);
                $_w_spear.append($_w_dowry);
                $_w_stake.append($_w_spear);
                $_w_dowry.on("click", _w_libel.fun);
            }
            $_w_brink.append($_w_stake);
            $_w_cello.append($_w_brink);
        } else {
            let $_w_arena = $("<button />", {
                class: "btn btn-default"
            });
            $_w_arena.append($("<span />", {
                class: _w_prose.iconClass,
                "aria-hidden": true
            }));
            _w_prose.showText && $_w_arena.append(" " + _w_prose.name);
            $_w_cello.append($_w_arena);
            $_w_arena.on("click", _w_prose.fun);
        }
    }
    let $_w_scurvy = $("<input />", {
        type: "checkbox"
    });
    $_w_cello.append($("<div />", {
        style: "float:right;text-align:right;"
    }).append($_w_scurvy));
    $_w_scurvy.bootstrapSwitch({
        size: "small",
        labelWidth: 50,
        labelText: _w_ban("_w_alibi"),
        onColor: "success",
        offColor: "none",
        onText: "",
        offText: "",
        state: "true" == _w_cornet()._w_hilt(),
        onSwitchChange: function(event, state) {
            _w_cornet()._w_muddle(state);
        }
    });
    $(document).on("keydown", (function(e) {
        if (_w_scion(e)) return;
        if ($("#download_confirm_dlg").length > 0) return true;
        e.which == 88 && e.shiftKey && e.altKey && _w_alkali();
        e.which == 68 && !e.ctrlKey && _w_core(true) & e.preventDefault();
        e.which == 68 && e.ctrlKey && _w_core(false) & e.preventDefault();
        e.which == 109 && !e.ctrlKey && _w_safe() & e.preventDefault();
        e.which == 107 && !e.ctrlKey && _w_ferret() & e.preventDefault();
        (e.which == 46 || e.which == 110) && _w_ford() & e.preventDefault();
        if ($("#cboxOverlay, .modal-dialog").is(":visible")) return true;
        e.which == 65 && e.ctrlKey && _w_din() & e.preventDefault();
        e.which == 90 && e.ctrlKey && _w_pitch() & e.preventDefault();
        e.which == 82 && e.ctrlKey && _w_churl() & e.preventDefault();
        e.which == 83 && e.ctrlKey && _w_valve() & e.preventDefault();
        e.which == 70 && e.ctrlKey && _w_cuff() & e.preventDefault();
        e.which == 77 && e.altKey && _w_mete() & e.preventDefault();
        e.which == 83 && e.altKey && _w_balk() & e.preventDefault();
        e.which == 84 && e.altKey && _w_sap() & e.preventDefault();
        e.which == 72 && e.altKey && _w_lounge() & e.preventDefault();
    }));
    let _w_hoist = [ {
        name: _w_ban("_w_pilot"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-picture",
        fun: function() {
            let _w_reign = $(this).attr("data-id");
            $(".imageItem[data-id='" + _w_reign + "']").addClass("preview_ignore_configure").trigger("click");
        }
    }, {
        name: _w_ban("_w_sod"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-download",
        fun: function(e) {
            _w_stanza($(".imageItem[data-id=" + e.target.dataset.id + "]"), true);
        }
    }, {
        name: _w_ban("_w_cargo"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "glyphicon glyphicon-qrcode",
        fun: function() {
            $(this).attr("data-src") && _w_notch($(this).attr("data-src"), true);
        }
    }, {
        name: _w_ban("_w_rebate"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-edit",
        fun: function() {
            $(this).attr("data-src") && _w_cornet()._w_reed($(this).attr("data-src"), $(this).attr("data-referer"), -1);
        }
    }, {
        name: _w_ban("_w_cuff"),
        showText: true,
        className: "imageContextMenuURLE",
        iconClass: "glyphicon glyphicon-picture",
        fun: function() {
            $(this).attr("data-src") && _w_cornet()._w_lode($(this).attr("data-src"), $(this).attr("data-referer"), -1);
        }
    }, {
        name: _w_ban("_w_diver"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_arroyo($(this).attr("data-src"));
        }
    }, {
        name: _w_ban("_w_ration"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_crest($(this).attr("data-src"));
        }
    }, {
        name: _w_ban("_w_alkali"),
        showText: true,
        className: "imageContextMenuURL",
        iconClass: "fab fa-google",
        fun: function() {
            $(this).attr("data-src") && _w_flair($(this).attr("data-src"));
        }
    } ];
    _w_dynamo = _w_dynamo.slice(0, 0).concat(_w_hoist).concat(_w_dynamo.slice(0));
    let $_w_lurch = $("<ul />", {
        class: "dropdown-menu",
        role: "menu",
        style: "z-index:9999;"
    });
    for (let i in _w_dynamo) {
        if (isNaN(i)) continue;
        let _w_prose = _w_dynamo[i];
        if (_w_prose.subMenu) {
            let _w_entity = _w_prose.subMenu;
            for (let j in _w_entity) {
                if (isNaN(j)) continue;
                let _w_libel = _w_entity[j];
                let $_w_mystic = $("<li />", {
                    role: "presentation"
                });
                let $_w_lumen = $("<a />", {
                    role: "menuitem",
                    class: _w_libel.className,
                    tabIndex: "-1",
                    href: "#"
                });
                $_w_lumen.append($("<span />", {
                    class: _w_libel.iconClass
                }));
                $_w_lumen.append(" " + _w_libel.name);
                $_w_mystic.append($_w_lumen);
                $_w_lurch.append($_w_mystic);
                $_w_lumen.on("click", _w_libel.fun);
            }
            continue;
        }
        let $_w_mystic = $("<li />", {
            role: "presentation"
        });
        let $_w_lumen = $("<a />", {
            role: "menuitem",
            class: _w_prose.className,
            tabIndex: "-1",
            href: "#"
        });
        $_w_lumen.append($("<span />", {
            class: _w_prose.iconClass
        }));
        $_w_lumen.append(" " + _w_prose.name);
        $_w_mystic.append($_w_lumen);
        $_w_lumen.on("click", _w_prose.fun);
        $_w_lurch.append($_w_mystic);
    }
    $_w_lurch.on("mousedown mousemove mouseup click", (function(e) {}));
    $("body").append($_w_lurch);
    $_w_lurch.dropdown();
    $_w_lurch.hide();
    $(document).on("keydown scroll", (function(e) {
        (e.which == 27 || e.type == "scroll") && $_w_lurch.fadeOut("fast");
    }));
    $("html").on("click", (function(e) {
        $_w_lurch.fadeOut("fast");
    }));
    $_w_lurch.on("click", (function(e) {
        $_w_lurch.fadeOut("fast");
    }));
    $(document).on("contextmenu", (function(e) {
        $(".context_menu").hide();
        $_w_lurch.hide();
        if ($(".modal-dialog").is(":visible") || $("#colorbox").is(":visible")) {
            return true;
        }
        let $_w_burial = $(e.target.parentElement);
        if ($_w_burial && $_w_burial.hasClass("imageItem")) {
            $(".imageContextMenuURLE").attr("data-src", $_w_burial.attr("data-src")).attr("data-filename", $_w_burial.attr("data-filename")).attr("data-suffix", $_w_burial.attr("data-suffix")).attr("data-id", $_w_burial.attr("data-id")).attr("data-referer", $_w_burial.attr("data-referer")).show();
            if ($_w_burial.attr("data-src").indexOf("data:") != 0) {
                $(".imageContextMenuURL").attr("data-src", $_w_burial.attr("data-src")).attr("data-filename", $_w_burial.attr("data-filename")).attr("data-suffix", $_w_burial.attr("data-suffix")).attr("data-id", $_w_burial.attr("data-id")).attr("data-referer", $_w_burial.attr("data-referer")).show();
            } else {
                $(".imageContextMenuURL").attr("data-src", "").hide();
            }
            $(".mainMenuItem").hide();
        } else {
            $(".imageContextMenuURLE").attr("data-src", "").hide();
            $(".imageContextMenuURL").attr("data-src", "").hide();
            $(".mainMenuItem").show();
        }
        $_w_lurch.css("left", e.pageX + "px").css("top", e.pageY + "px");
        $_w_lurch.fadeIn("fast");
        $_w_lurch.offset().left + $_w_lurch.outerWidth() >= window.scrollX + window.innerWidth && $_w_lurch.css("left", e.pageX - $_w_lurch.outerWidth() + "px");
        $_w_lurch.offset().top + $_w_lurch.outerHeight() >= window.scrollY + window.innerHeight && $_w_lurch.css("top", e.pageY - $_w_lurch.outerHeight() + "px");
        return false;
    }));
    let $_w_vermin = $("#image_summary");
    let $_w_anthem = $("<span />", {
        id: "image_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_nettle = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_nettle.append(_w_ban("_w_marvel"));
    $_w_nettle.append($_w_anthem);
    $_w_vermin.append($_w_nettle);
    let $_w_relish = $("<span />", {
        id: "visible_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_gait = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_gait.append(_w_ban("_w_cull"));
    $_w_gait.append($_w_relish);
    $_w_vermin.append($_w_gait);
    let $_w_axiom = $("<span />", {
        id: "select_amount",
        role: "presentation",
        class: "badge",
        text: "0"
    });
    let $_w_drawl = $("<label />", {
        class: "col-md-4 col-sm-4"
    });
    $_w_drawl.append(_w_ban("_w_sack"));
    $_w_drawl.append($_w_axiom);
    $_w_vermin.append($_w_drawl);
    let $_w_cuddle = $("#menu_switch");
    let $_w_bard = $("<div />", {
        class: "btn-group btn-group-xs"
    });
    $_w_cuddle.append($_w_bard);
    let $_w_tipple = $("<div />", {
        class: "btn btn-default",
        id: "filter_switch",
        title: _w_ban("_w_plaque")
    });
    let $_w_ennui = $("<span />", {
        class: "glyphicon glyphicon-filter"
    });
    $_w_tipple.append($_w_ennui);
    $_w_tipple.on("click", (function() {
        let _w_felon = _w_cornet()._w_grill();
        if ($(this).hasClass("active")) {
            _w_felon &= ~1;
        } else {
            _w_felon |= 1;
        }
        _w_cornet()._w_baron(_w_felon);
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    $_w_bard.append($_w_tipple);
    let $_w_musket = $("<div />", {
        class: "btn btn-default",
        id: "select_menu_switch",
        title: _w_ban("_w_icing")
    });
    let $_w_bazaar = $("<span />", {
        class: "glyphicon glyphicon-tasks"
    });
    $_w_musket.append($_w_bazaar);
    $_w_musket.on("click", (function() {
        let _w_felon = _w_cornet()._w_grill();
        if ($(this).hasClass("active")) {
            _w_felon &= ~2;
        } else {
            _w_felon |= 2;
        }
        _w_cornet()._w_baron(_w_felon);
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    $_w_bard.append($_w_musket);
    let $_w_jest = $("<div />", {
        class: "btn btn-default",
        id: "sort_switch",
        title: _w_ban("_w_scythe")
    });
    let $_w_impact = $("<span />", {
        class: "glyphicon glyphicon-sort-by-order-alt"
    });
    $_w_jest.append($_w_impact);
    $_w_jest.on("click", _w_balk);
    $_w_jest.on("funExec", _w_cord);
    $_w_bard.append($_w_jest);
    let $_w_quest = $("<div />", {
        class: "btn btn-default",
        id: "resolutionTle_switch",
        title: _w_ban("_w_signal")
    });
    let $_w_fiend = $("<span />", {
        class: "glyphicon glyphicon-text-background"
    });
    $_w_quest.append($_w_fiend);
    $_w_quest.on("click", _w_sap);
    $_w_bard.append($_w_quest);
    let $_w_browse = $("<div />", {
        class: "btn btn-default",
        id: "imageDeduplication_switch",
        title: _w_ban("_w_sanity")
    });
    let $_w_moron = $("<span />", {
        class: "glyphicon glyphicon-compressed"
    });
    $_w_browse.append($_w_moron);
    $_w_browse.on("click", _w_lounge);
    $_w_browse.on("funExec", _w_boast);
    $_w_bard.append($_w_browse);
    let $_w_stamp = $("<div />", {
        class: "btn btn-success",
        title: _w_ban("_w_trio")
    });
    $_w_stamp.on("click", (function() {
        chrome.tabs.get(_w_pagan, (function(tab) {
            if (tab && _w_menial == tab.url) {
                chrome.tabs.update(tab.id, {
                    active: true
                }, (function() {}));
            }
        }));
    }));
    $_w_stamp.append($("<span />", {
        class: "fa fa-exchange-alt"
    }));
    let $_w_colt = $("<div />", {
        class: "btn btn-primary",
        title: _w_ban("_w_pirate")
    });
    $_w_colt.on("click", (function() {
        chrome.tabs.get(_w_pagan, (function(tab) {
            if (tab && _w_menial == tab.url) {
                chrome.tabs.update(tab.id, {
                    active: true
                }, (function(tab) {
                    _w_cornet()._w_sting(tab.id, [ {
                        code: "_w_salute(50, true);",
                        runAt: "document_end",
                        allFrames: true
                    } ]);
                }));
            }
        }));
    }));
    $_w_colt.append($("<span />", {
        class: "glyphicon glyphicon-save-file"
    }));
    let $_w_down = $("<div />", {
        class: "btn btn-danger",
        title: _w_ban("_w_brink")
    });
    $_w_down.on("click", _w_alkali);
    $_w_down.append($("<span />", {
        class: "glyphicon glyphicon-remove"
    }));
    $_w_cuddle.append($("<div />", {
        class: "btn-group btn-group-xs"
    }).append($_w_stamp).append($_w_colt).append($_w_down));
    let $_w_hybrid = $("#filter_menu_type");
    $_w_hybrid.append($("<label />", {
        text: _w_ban("_w_strut"),
        class: "header_menu_label"
    }));
    let _w_pledge = _w_tyrant.slice(0);
    _w_pledge.unshift("all");
    _w_pledge.push("other");
    let $_w_fresco = $("<div />", {
        class: "header_menu_body btn-toolbar",
        role: "toolbar"
    });
    for (let i in _w_pledge) {
        if (isNaN(i)) continue;
        let $_w_stoic = $("<div />", {
            class: "btn btn-default btn-xs imageType btn-pwd active",
            value: _w_pledge[i],
            text: _w_pledge[i].toUpperCase()
        });
        let $_w_mammal = $("<span />", {
            id: "counter_" + _w_pledge[i],
            role: "presentation",
            class: "badge",
            text: "0"
        });
        $_w_stoic.append($_w_mammal);
        if (_w_pledge[i] != "all") $_w_stoic.hide();
        $_w_fresco.append($_w_stoic);
    }
    $_w_hybrid.append($_w_fresco);
    $("#filter_menu_type .imageType").click((function(e) {
        $(this).hasClass("active") ? $(this).removeClass("btn-pwd active") : $(this).addClass("btn-pwd active");
        if ($(this).attr("value") == "all") {
            $(this).hasClass("active") ? $(this).siblings().addClass("btn-pwd active") : $(this).siblings().removeClass("btn-pwd active");
        }
        $("#filter_menu_type .imageType[value!=all]:not(.active)").length > 0 ? $("#filter_menu_type .imageType[value=all]").removeClass("btn-pwd active") : $("#filter_menu_type .imageType[value=all]").addClass("btn-pwd active");
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    let _w_ore = [ {
        name: _w_ban("_w_groove"),
        value: "larger",
        active: true
    }, {
        name: _w_ban("_w_cord"),
        value: "exact"
    } ];
    let $_w_jade = $("#filter_menu_size");
    let $_w_spite = $("<div />", {
        id: "funnel_container"
    });
    $_w_spite.append($("<label />", {
        text: _w_ban("_w_ford"),
        class: "header_menu_label"
    }));
    let $_w_bough = $("<div />", {
        class: "header_menu_body"
    });
    let _w_guile = [];
    for (let item in _w_ferry) {
        _w_guile[item] = _w_ferry[item];
    }
    let _w_alibi = _w_shale.width + "x" + _w_shale.height + _w_ban("_w_crate");
    _w_guile.unshift(_w_alibi);
    _w_guile[_w_alibi] = {
        width: _w_shale.width,
        height: _w_shale.height
    };
    let _w_bulb = document.createElement("select");
    _w_bulb.setAttribute("id", "funnelOptionSelect");
    for (let i in _w_guile) {
        if (isNaN(i)) continue;
        let _w_ogle = document.createElement("option");
        _w_ogle.value = _w_guile[i];
        _w_ogle.text = _w_guile[i];
        _w_bulb.appendChild(_w_ogle);
        i == 0 && (_w_ogle.selected = true);
    }
    $_w_bough.append(_w_bulb);
    $_w_spite.append($_w_bough);
    $_w_jade.append($_w_spite);
    $(_w_bulb).on("change", (function() {
        let _w_poncho = _w_guile[_w_bulb.selectedOptions[0].value];
        _w_shale.width = _w_poncho.width;
        _w_shale.height = _w_poncho.height;
        let _w_badger = [];
        $("#ext_main .imageItem").each((function() {
            if ($(this).attr("data-width") - _w_poncho.width < 0 || $(this).attr("data-height") - _w_poncho.height < 0) {
                $(this).remove();
            }
        }));
        $(this).blur();
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    let $_w_plumb = $("<div />", {
        id: "line_option_container"
    });
    $_w_plumb.append($("<label />", {
        text: _w_ban("_w_grain"),
        class: "header_menu_label"
    }));
    let $_w_bile = $("<div />", {
        class: "header_menu_body btn-toolbar",
        role: "toolbar"
    });
    let _w_slit = [];
    for (let item in _w_ferry) {
        _w_slit[item] = _w_ferry[item];
    }
    _w_slit.unshift("all");
    _w_slit["all"] = {
        width: 0,
        height: 0
    };
    _w_slit.push("other");
    _w_slit["other"] = {
        width: 0,
        height: 0
    };
    let $_w_plain = $("<div />", {
        class: "btn-group"
    });
    for (let i in _w_ore) {
        if (isNaN(i)) continue;
        let $_w_helot = $("<div />", {
            class: "btn btn-default btn-xs selectType",
            value: _w_ore[i].value,
            text: _w_ore[i].name
        });
        _w_ore[i].active && $_w_helot.addClass("btn-pwd active");
        $_w_plain.append($_w_helot);
    }
    $_w_bile.append($_w_plain);
    $_w_plumb.append($_w_bile);
    $_w_jade.append($_w_plumb);
    let $_w_imp = $_w_bile;
    for (let i in _w_slit) {
        if (isNaN(i)) continue;
        let $_w_gale = $("<div />", {
            class: "btn btn-default btn-xs selectOption btn-pwd active",
            value: _w_slit[i],
            text: _w_slit[i].toUpperCase()
        });
        if (_w_slit[i] != "all") $_w_gale.hide();
        $_w_imp.append($_w_gale);
    }
    $("#filter_menu_size .selectType").click((function() {
        $("#filter_menu_size .selectType").removeClass("btn-pwd active");
        $("#filter_menu_size .selectOption").addClass("btn-pwd active");
        $(this).addClass("btn-pwd active");
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    $("#filter_menu_size .selectOption").click((function() {
        if ($("#filter_menu_size .selectType[value=larger]").hasClass("active")) {
            if ($(this).attr("value") == "all") {
                $("#filter_menu_size .selectOption").addClass("btn-pwd active");
            } else {
                $("#filter_menu_size .selectOption").removeClass("btn-pwd active");
                $(this).addClass("btn-pwd active");
            }
        } else if ($("#filter_menu_size .selectType[value=exact]").hasClass("active")) {
            $(this).hasClass("active") ? $(this).removeClass("btn-pwd active") : $(this).addClass("btn-pwd active");
            if ($(this).attr("value") == "all") {
                if ($(this).hasClass("active")) {
                    $("#filter_menu_size .selectOption").addClass("btn-pwd active");
                } else {
                    $("#filter_menu_size .selectOption").removeClass("btn-pwd active");
                }
            } else {
                $("#filter_menu_size .selectOption[value!=all]:not(.active)").length > 0 ? $("#filter_menu_size .selectOption[value=all]").removeClass("btn-pwd active") : $("#filter_menu_size .selectOption[value=all]").addClass("btn-pwd active");
            }
        }
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    let $_w_whit = $("#filter_menu_regexp");
    $_w_whit.append($("<label />", {
        text: _w_ban("_w_fold"),
        class: "header_menu_label"
    }));
    let $_w_galley = $("<div />", {
        class: "header_menu_body btn-toolbar",
        role: "toolbar"
    });
    let $_w_norm = $("<input />", {
        id: "urlRegexpFilter",
        class: "ext_page_input",
        size: 64,
        placeHolder: "Input Regexp Expression to part/full match URL address."
    });
    $_w_galley.append($_w_norm);
    $_w_whit.append($_w_galley);
    $_w_norm.on("change input", (function() {
        _w_lancet("#ext_main>.imageItem", true, false);
    })).on("keydown", (function(e) {
        if (e.which == 13 || e.which == 27) {
            $(this).blur();
        }
    }));
    let $_w_minion = $("#dedup_menu");
    $_w_minion.append($("<label />", {
        text: _w_ban("_w_timber"),
        class: "header_menu_label"
    }));
    let $_w_ewe = $("<div />", {
        class: "header_menu_body"
    });
    let _w_almond = document.createElement("select");
    _w_almond.setAttribute("id", "diffThresholdOptionSelect");
    Array(7).fill().forEach(((_, idx) => {
        let _w_rib = document.createElement("option");
        _w_rib.value = idx;
        _w_rib.text = idx == 4 ? `${idx} ☻` : idx;
        _w_almond.appendChild(_w_rib);
        if (idx == window._w_collar) {
            _w_almond.selected = true;
        }
    }));
    $_w_ewe.append(_w_almond);
    $_w_minion.append($_w_ewe);
    _w_almond.value = window._w_collar;
    $(_w_almond).on("change", (function() {
        window._w_collar = parseInt(_w_almond.selectedOptions[0].value);
        document.querySelectorAll("a.imageItem[data-phash]").forEach((item => {
            _w_pollen({
                data: {
                    id: item.dataset.id,
                    hash: item.dataset.phash
                }
            }, true);
        }));
        _w_lancet("#ext_main>.imageItem", true, false);
    }));
    $_w_minion.hide();
    _w_lancet("#ext_main>.imageItem", true, true);
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
}));

function _w_cygnet() {
    let _w_girdle = new Date;
    let _w_leash = "".concat(_w_girdle.getFullYear()).concat(_w_girdle.getDate()).concat(_w_girdle.getMonth() + 1).concat(_w_girdle.getHours()).concat(_w_girdle.getMinutes()).concat(_w_girdle.getSeconds()).concat(".js");
    let _w_spell = "let _w_gorge = ".concat(_w_gorge).concat(";\nlet _w_violet = 0;\n").concat("let entityData = ").concat(JSON.stringify(Object.entries(_w_wile).filter((function(item) {
        if (isNaN(item[0])) {
            return item;
        }
    })))).concat(";\n");
    _w_botany(_w_leash, _w_spell);
}

function _w_chunk(_w_guru) {
    let _w_bust = [];
    _w_guru.forEach((function(item) {
        if (typeof item[0] != "number") {
            _w_bust.push(item[0]);
            _w_bust[item[0]] = item[1];
        }
    }));
    _w_wile = _w_bust;
}

function _w_helmet(_w_damper) {
    if (!_w_qualm) return;
    let _w_mire = Object.keys(_w_qualm);
    let _w_scar = null;
    _w_scar = setInterval((function() {
        if (_w_reaper >= _w_violet || $("a.imageItem").length >= _w_molar - _w_reaper) {
            return;
        } else {
            if (_w_mire.length <= 0) {
                clearInterval(_w_scar);
                return;
            }
            let _w_matrix = _w_mire.shift();
            if (_w_boor(_w_damper) && _w_damper(_w_wile[_w_matrix])) {
                delete _w_qualm[_w_matrix];
                return;
            }
            _w_hunk(_w_matrix, false);
        }
    }), 50);
}

