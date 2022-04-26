/**
 * ImageAssistant
 * Project Home: http://www.pullywood.com/ImageAssistant/
 * Author: Joey
 * Copyright (C) 2013-2022 普利坞(Pullywood.com)
**/
"use strict";

importScripts("../libs/jimp/0.16.0/jimp.js");

function dct(mat, m, n) {
    let isqrt2 = 1 / Math.sqrt(2);
    let px = Math.PI / m;
    let py = Math.PI / n;
    let r = [];
    for (let ry = 0; ry < n; ry++) {
        for (let rx = 0; rx < m; rx++) {
            let c = Math.pow(isqrt2, (rx === 0) + (ry === 0));
            let t = 0;
            for (let y = 0; y < n; y++) {
                for (let x = 0; x < m; x++) {
                    let v = mat[y * m + x];
                    t += v * Math.cos(px * (x + .5) * rx) * Math.cos(py * (y + .5) * ry);
                }
            }
            r.push(c * t / 4);
        }
    }
    return r;
}

function phash(pixels, hashsize = 8, hfreq_fact = 4) {
    const OCTLEN = 8;
    let imgsize = hashsize * hfreq_fact;
    let midpoint = Math.floor(hashsize * hashsize / 2);
    let noctets = Math.floor(hashsize * hashsize / OCTLEN);
    let coef = dct(pixels, imgsize, imgsize);
    let lofreqcoef = coef.filter(((v, idx) => Math.floor(idx / imgsize) < hashsize && idx % imgsize < hashsize));
    let median = lofreqcoef.slice().sort(((a, b) => a - b))[midpoint];
    let bits = new Uint8Array(noctets);
    for (let i = 0; i < noctets; i++) {
        bits[i] = lofreqcoef.slice(i * OCTLEN, (i + 1) * OCTLEN).reduce(((acc, val, idx) => acc |= (val > median ? 1 : 0) << OCTLEN - idx - 1), 0);
    }
    return bits.reduce(((acc, val) => acc += val.toString(16).padStart(2, "0")), "");
}

onmessage = async function(oEvent) {
    let id = oEvent.data.id;
    let data = oEvent.data.data;
    const width = oEvent.data.width;
    const height = oEvent.data.height;
    const LUMASCALE = [ .2989, .587, .114 ];
    let hash = null;
    let pixels = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let idx = (width * y + x) * 4;
            pixels.push(data[idx] * LUMASCALE[0] + data[idx + 1] * LUMASCALE[1] + data[idx + 2] * LUMASCALE[2]);
        }
    }
    hash = phash(pixels);
    postMessage({
        id: id,
        hash: hash
    });
};