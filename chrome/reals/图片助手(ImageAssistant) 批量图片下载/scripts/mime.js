/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

window._w_thrall = new Array;

window._w_entry = new Array;

window._w_paean = {
    apng: "image/apng",
    bmp: "image/bmp",
    gif: "image/gif",
    ico: "image/x-icon",
    cur: "image/x-icon",
    pjp: "image/jpeg",
    pjpeg: "image/jpeg",
    jfif: "image/jpeg",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    tiff: "image/tiff",
    tif: "image/tiff",
    webp: "image/webp"
};

for (let suffix in _w_paean) {
    _w_entry.push(suffix);
    _w_thrall.push(_w_paean[suffix]);
}

window._w_hone = {
    "image/apng": "apng",
    "image/bmp": "bmp",
    "image/gif": "gif",
    "image/x-icon": "ico",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/svg+xml": "svg",
    "image/tiff": "tiff",
    "image/webp": "webp"
};

window._w_intent = [ "apng", "bmp", "gif", "ico", "jpg", "png", "svg", "tiff", "webp", "_" ];

window._w_tyrant = [ "jpeg", "png", "apng", "bmp", "gif", "ico", "svg", "tiff", "webp", "apng" ];

window._w_abuse = {
    apng: "apng",
    bmp: "bmp",
    gif: "gif",
    ico: "ico",
    cur: "ico",
    pjp: "jpeg",
    pjpeg: "jpeg",
    jfif: "jpeg",
    jpeg: "jpeg",
    jpg: "jpeg",
    png: "png",
    svg: "svg",
    tiff: "tiff",
    tif: "tiff",
    webp: "webp"
};

window._w_comma = _w_malice([ "10x10", "50x50", "100x100", "200x200", "320x480", "400x400", "500x500", "600x600", "640x960", "640x1136", "750x1334", "768x1024", "800x800", "828x1792", "1080x1920", "1080x2340", "1125x2436", "1170x2532", "1242x2208", "1242x2688", "1280x720", "1280x800", "1280x1024", "1284x2778", "1366x768", "1440x900", "1488x2266", "1536x864", "1536x2048", "1600x900", "1620x2160", "1640x2360", "1668x2224", "1668x2388", "1680x1050", "1792x1120", "1920x1080", "2048x2732", "2560x1440", "3840x1080", "3840x2160" ], true);