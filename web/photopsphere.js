/**
 * Minified by jsDelivr using Terser v5.17.1.
 * Original file: /npm/@photo-sphere-viewer/core@5.1.7/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

var wubbalubbadubdub;

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("three")) : "function" == typeof define && define.amd ? define(["exports", "three"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).PhotoSphereViewer = {}, t.THREE)
}(this, (function(t, e) {
    /*!
 * PhotoSphereViewer 5.1.7
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2023 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */
    "use strict";
    var s = Object.defineProperty
      , i = Object.getOwnPropertyDescriptor
      , o = Object.getOwnPropertyNames
      , n = Object.prototype.hasOwnProperty
      , r = (t,e)=>{
        for (var i in e)
            s(t, i, {
                get: e[i],
                enumerable: !0
            })
    }
      , a = ()=>e
      , h = {};
    r(h, {
        AbstractAdapter: ()=>Fe,
        AbstractButton: ()=>Ge,
        AbstractComponent: ()=>Ze,
        AbstractConfigurablePlugin: ()=>ps,
        AbstractPlugin: ()=>us,
        CONSTANTS: ()=>l,
        DEFAULTS: ()=>ms,
        EquirectangularAdapter: ()=>Xe,
        PSVError: ()=>ot,
        SYSTEM: ()=>Ye,
        TypedEvent: ()=>zt,
        Viewer: ()=>Zs,
        events: ()=>Rt,
        registerButton: ()=>Es,
        utils: ()=>L
    });
    var c = a()
      , l = {};
    r(l, {
        ACTIONS: ()=>E,
        ANIMATION_MIN_DURATION: ()=>u,
        CAPTURE_EVENTS_CLASS: ()=>_,
        CTRLZOOM_TIMEOUT: ()=>f,
        DBLCLICK_DELAY: ()=>v,
        DEFAULT_TRANSITION: ()=>d,
        EASINGS: ()=>O,
        ICONS: ()=>M,
        IDS: ()=>T,
        INERTIA_WINDOW: ()=>g,
        KEY_CODES: ()=>x,
        LONGTOUCH_DELAY: ()=>m,
        MOVE_THRESHOLD: ()=>p,
        SPHERE_RADIUS: ()=>y,
        TWOFINGERSOVERLAY_DELAY: ()=>w,
        VIEWER_DATA: ()=>b
    });
    var d = 1500
      , u = 500
      , p = 4
      , v = 300
      , m = 500
      , w = 100
      , f = 2e3
      , g = 300
      , y = 10
      , b = "photoSphereViewer"
      , _ = "psv--capture-event"
      , E = (t=>(t.ROTATE_UP = "ROTATE_UP",
    t.ROTATE_DOWN = "ROTATE_DOWN",
    t.ROTATE_RIGHT = "ROTATE_RIGHT",
    t.ROTATE_LEFT = "ROTATE_LEFT",
    t.ZOOM_IN = "ZOOM_IN",
    t.ZOOM_OUT = "ZOOM_OUT",
    t))(E || {})
      , T = {
        MENU: "menu",
        TWO_FINGERS: "twoFingers",
        CTRL_ZOOM: "ctrlZoom",
        ERROR: "error",
        DESCRIPTION: "description"
    }
      , x = {
        Enter: "Enter",
        Control: "Control",
        Escape: "Escape",
        Space: " ",
        PageUp: "PageUp",
        PageDown: "PageDown",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        ArrowDown: "ArrowDown",
        Delete: "Delete",
        Plus: "+",
        Minus: "-"
    }
      , M = {
        arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g>\x3c!-- Created by Flatart from the Noun Project --\x3e</svg>\n',
        close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',
        download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/>\x3c!--Created by Michael Zenaty from the Noun Project--\x3e</svg>\n',
        fullscreenIn: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/>\x3c!--Created by Garrett Knoll from the Noun Project--\x3e</svg>\n',
        fullscreenOut: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/>\x3c!--Created by Garrett Knoll from the Noun Project--\x3e</svg>\n',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/>\x3c!--Created by Arafat Uddin from the Noun Project--\x3e</svg>\n',
        menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g>\x3c!-- Created by Richard Kunák from the Noun Project--\x3e</svg>\n',
        zoomIn: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/>\x3c!--Created by Ryan Canning from the Noun Project--\x3e</svg>\n',
        zoomOut: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/>\x3c!--Created by Ryan Canning from the Noun Project--\x3e</svg>\n'
    }
      , O = {
        linear: t=>t,
        inQuad: t=>t * t,
        outQuad: t=>t * (2 - t),
        inOutQuad: t=>t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1,
        inCubic: t=>t * t * t,
        outCubic: t=>--t * t * t + 1,
        inOutCubic: t=>t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        inQuart: t=>t * t * t * t,
        outQuart: t=>1 - --t * t * t * t,
        inOutQuart: t=>t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
        inQuint: t=>t * t * t * t * t,
        outQuint: t=>1 + --t * t * t * t * t,
        inOutQuint: t=>t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
        inSine: t=>1 - Math.cos(t * (Math.PI / 2)),
        outSine: t=>Math.sin(t * (Math.PI / 2)),
        inOutSine: t=>.5 - .5 * Math.cos(Math.PI * t),
        inExpo: t=>Math.pow(2, 10 * (t - 1)),
        outExpo: t=>1 - Math.pow(2, -10 * t),
        inOutExpo: t=>(t = 2 * t - 1) < 0 ? .5 * Math.pow(2, 10 * t) : 1 - .5 * Math.pow(2, -10 * t),
        inCirc: t=>1 - Math.sqrt(1 - t * t),
        outCirc: t=>Math.sqrt(1 - (t - 1) * (t - 1)),
        inOutCirc: t=>(t *= 2) < 1 ? .5 - .5 * Math.sqrt(1 - t * t) : .5 + .5 * Math.sqrt(1 - (t -= 2) * t)
    }
      , L = {};
    function C(t, e) {
        let s = t % e;
        return s < 0 && (s += e),
        s
    }
    function k(t) {
        return t.reduce(((t,e)=>t + e), 0)
    }
    function I(t, e) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }
    function S(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }
    function P(t, e) {
        return [0, 2 * Math.PI, 2 * -Math.PI].reduce(((s,i)=>{
            const o = e - t + i;
            return Math.abs(o) < Math.abs(s) ? o : s
        }
        ), 1 / 0)
    }
    function R(t, e) {
        return Math.acos(Math.cos(t.pitch) * Math.cos(e.pitch) * Math.cos(t.yaw - e.yaw) + Math.sin(t.pitch) * Math.sin(e.pitch))
    }
    function z([t,e], [s,i]) {
        const o = (s - t) * Math.cos((e + i) / 2)
          , n = i - e;
        return Math.sqrt(o * o + n * n)
    }
    function H(t) {
        return "string" == typeof t ? t.match(/^[a-z]/i) ? document.getElementById(t) : document.querySelector(t) : t
    }
    function A(t, e, s) {
        void 0 === s ? t.classList.toggle(e) : s ? t.classList.add(e) : s || t.classList.remove(e)
    }
    function N(t, e) {
        t.classList.add(...e.split(" "))
    }
    function U(t, e) {
        t.classList.remove(...e.split(" "))
    }
    function D(t, e) {
        let s = t;
        do {
            if (s === e)
                return !0;
            s = s.parentElement
        } while (s);
        return !1
    }
    function F(t, e) {
        if (!t?.matches)
            return null;
        let s = t;
        do {
            if (s.matches(e))
                return s;
            s = s.parentElement
        } while (s);
        return null
    }
    function V(t) {
        let e = 0
          , s = 0
          , i = t;
        for (; i; )
            e += i.offsetLeft - i.scrollLeft + i.clientLeft,
            s += i.offsetTop - i.scrollTop + i.clientTop,
            i = i.offsetParent;
        return {
            x: e,
            y: s
        }
    }
    function j(t, e) {
        return window.getComputedStyle(t, null)[e]
    }
    function W(t) {
        if (t.touches.length < 2)
            return null;
        const e = {
            x: t.touches[0].clientX,
            y: t.touches[0].clientY
        }
          , s = {
            x: t.touches[1].clientX,
            y: t.touches[1].clientY
        };
        return {
            distance: I(e, s),
            angle: S(e, s),
            center: {
                x: (e.x + s.x) / 2,
                y: (e.y + s.y) / 2
            }
        }
    }
    function Y(t) {
        return (document.fullscreenElement || document.webkitFullscreenElement) === t
    }
    function $(t) {
        (t.requestFullscreen || t.webkitRequestFullscreen).call(t)
    }
    function X() {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document)
    }
    function Z(t) {
        return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g, ((t,e)=>(e > 0 ? "-" : "") + t.toLowerCase()))
    }
    function B(t, e) {
        let s = !1;
        return function(...i) {
            s || (s = !0,
            setTimeout((()=>{
                t.apply(this, i),
                s = !1
            }
            ), e))
        }
    }
    function G(t) {
        if ("object" != typeof t || null === t || "[object Object]" !== Object.prototype.toString.call(t))
            return !1;
        if (null === Object.getPrototypeOf(t))
            return !0;
        let e = t;
        for (; null !== Object.getPrototypeOf(e); )
            e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e
    }
    function K(t, e) {
        const s = e;
        return function t(e, i) {
            return Array.isArray(i) ? (e && Array.isArray(e) ? e.length = 0 : e = [],
            i.forEach(((s,i)=>{
                e[i] = t(null, s)
            }
            ))) : "object" == typeof i ? (e && !Array.isArray(e) || (e = {}),
            Object.keys(i).forEach((o=>{
                "object" == typeof i[o] && i[o] && G(i[o]) ? i[o] !== s && (e[o] ? t(e[o], i[o]) : e[o] = t(null, i[o])) : e[o] = i[o]
            }
            ))) : e = i,
            e
        }(t, e)
    }
    function q(t) {
        return K(null, t)
    }
    function Q(t) {
        return !t || 0 === Object.keys(t).length && t.constructor === Object
    }
    function J(t) {
        return null == t
    }
    function tt(...t) {
        for (const e of t)
            if (!J(e))
                return e;
        return null
    }
    function et(t, e) {
        if (t === e)
            return !0;
        if (st(t) && st(e)) {
            if (Object.keys(t).length !== Object.keys(e).length)
                return !1;
            for (const s of Object.keys(t))
                if (!et(t[s], e[s]))
                    return !1;
            return !0
        }
        return !1
    }
    function st(t) {
        return "object" == typeof t && null !== t
    }
    r(L, {
        Animation: ()=>Ot,
        Dynamic: ()=>Ct,
        MultiDynamic: ()=>kt,
        PressHandler: ()=>It,
        Slider: ()=>Pt,
        SliderDirection: ()=>St,
        addClasses: ()=>N,
        angle: ()=>S,
        applyEulerInverse: ()=>xt,
        cleanCssPosition: ()=>gt,
        clone: ()=>q,
        createTexture: ()=>Et,
        cssPositionIsOrdered: ()=>yt,
        dasherize: ()=>Z,
        deepEqual: ()=>et,
        deepmerge: ()=>K,
        distance: ()=>I,
        exitFullscreen: ()=>X,
        firstNonNull: ()=>tt,
        getAbortError: ()=>at,
        getAngle: ()=>R,
        getClosest: ()=>F,
        getConfigParser: ()=>Mt,
        getElement: ()=>H,
        getPosition: ()=>V,
        getShortestArc: ()=>P,
        getStyle: ()=>j,
        getTouchData: ()=>W,
        getXMPValue: ()=>dt,
        greatArcDistance: ()=>z,
        hasParent: ()=>D,
        invertResolvableBoolean: ()=>rt,
        isAbortError: ()=>ht,
        isEmpty: ()=>Q,
        isExtendedPosition: ()=>lt,
        isFullscreenEnabled: ()=>Y,
        isNil: ()=>J,
        isPlainObject: ()=>G,
        logWarn: ()=>ct,
        parseAngle: ()=>_t,
        parsePoint: ()=>ft,
        parseSpeed: ()=>bt,
        removeClasses: ()=>U,
        requestFullscreen: ()=>$,
        resolveBoolean: ()=>nt,
        sum: ()=>k,
        throttle: ()=>B,
        toggleClass: ()=>A,
        wrap: ()=>C
    });
    var it = a()
      , ot = class t extends Error {
        constructor(e) {
            super(e),
            this.name = "PSVError",
            Error.captureStackTrace?.(this, t)
        }
    }
    ;
    function nt(t, e) {
        G(t) ? (e(t.initial, !0),
        t.promise.then((t=>e(t, !1)))) : e(t, !0)
    }
    function rt(t) {
        return {
            initial: !t.initial,
            promise: t.promise.then((t=>!t))
        }
    }
    function at() {
        const t = new Error("Loading was aborted.");
        return t.name = "AbortError",
        t
    }
    function ht(t) {
        return "AbortError" === t?.name
    }
    function ct(t) {
        console.warn(`PhotoSphereViewer: ${t}`)
    }
    function lt(t) {
        return !!t && [["textureX", "textureY"], ["yaw", "pitch"]].some((([e,s])=>void 0 !== t[e] && void 0 !== t[s]))
    }
    function dt(t, e) {
        let s = t.match("<GPano:" + e + ">(.*)</GPano:" + e + ">");
        if (null !== s) {
            const t = parseInt(s[1], 10);
            return isNaN(t) ? null : t
        }
        if (s = t.match("GPano:" + e + '="(.*?)"'),
        null !== s) {
            const t = parseInt(s[1], 10);
            return isNaN(t) ? null : t
        }
        return null
    }
    var ut = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }
      , pt = ["left", "center", "right"]
      , vt = ["top", "center", "bottom"]
      , mt = [...pt, ...vt]
      , wt = "center";
    function ft(t) {
        if (!t)
            return {
                x: .5,
                y: .5
            };
        if ("object" == typeof t)
            return t;
        let e = t.toLocaleLowerCase().split(" ").slice(0, 2);
        1 === e.length && (e = ut[e[0]] ? [e[0], wt] : [e[0], e[0]]);
        const s = "left" !== e[1] && "right" !== e[1] && "top" !== e[0] && "bottom" !== e[0];
        e = e.map((t=>ut[t] || t)),
        s || e.reverse();
        const i = e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);
        return i ? {
            x: parseFloat(i[1]) / 100,
            y: parseFloat(i[2]) / 100
        } : {
            x: .5,
            y: .5
        }
    }
    function gt(t, {allowCenter: e, cssOrder: s}={
        allowCenter: !0,
        cssOrder: !0
    }) {
        return t ? ("string" == typeof t && (t = t.split(" ")),
        1 === t.length && (t[0] === wt ? t = [wt, wt] : -1 !== pt.indexOf(t[0]) ? t = [wt, t[0]] : -1 !== vt.indexOf(t[0]) && (t = [t[0], wt])),
        2 !== t.length || -1 === mt.indexOf(t[0]) || -1 === mt.indexOf(t[1]) ? (ct(`Unparsable position ${t}`),
        null) : e || t[0] !== wt || t[1] !== wt ? (s && !yt(t) && (t = [t[1], t[0]]),
        t[1] === wt && -1 !== pt.indexOf(t[0]) && (t = [wt, t[0]]),
        t[0] === wt && -1 !== vt.indexOf(t[1]) && (t = [t[1], wt]),
        t) : (ct("Invalid position center center"),
        null)) : null
    }
    function yt(t) {
        return -1 !== vt.indexOf(t[0]) && -1 !== pt.indexOf(t[1])
    }
    function bt(t) {
        let e;
        if ("string" == typeof t) {
            const s = t.toString().trim();
            let i = parseFloat(s.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/, "$1"));
            const o = s.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/, "$1").trim();
            switch (o.match(/(pm|per minute)$/) && (i /= 60),
            o) {
            case "dpm":
            case "degrees per minute":
            case "dps":
            case "degrees per second":
                e = it.MathUtils.degToRad(i);
                break;
            case "rdpm":
            case "radians per minute":
            case "rdps":
            case "radians per second":
                e = i;
                break;
            case "rpm":
            case "revolutions per minute":
            case "rps":
            case "revolutions per second":
                e = i * Math.PI * 2;
                break;
            default:
                throw new ot(`Unknown speed unit "${o}"`)
            }
        } else
            e = t;
        return e
    }
    function _t(t, e=!1, s=e) {
        let i;
        if ("string" == typeof t) {
            const e = t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);
            if (!e)
                throw new ot(`Unknown angle "${t}"`);
            const s = parseFloat(e[1])
              , o = e[2];
            if (o)
                switch (o) {
                case "deg":
                case "degs":
                    i = it.MathUtils.degToRad(s);
                    break;
                case "rad":
                case "rads":
                    i = s;
                    break;
                default:
                    throw new ot(`Unknown angle unit "${o}"`)
                }
            else
                i = s
        } else {
            if ("number" != typeof t || isNaN(t))
                throw new ot(`Unknown angle "${t}"`);
            i = t
        }
        return i = C(e ? i + Math.PI : i, 2 * Math.PI),
        e ? it.MathUtils.clamp(i - Math.PI, -Math.PI / (s ? 2 : 1), Math.PI / (s ? 2 : 1)) : i
    }
    function Et(t) {
        const e = new it.Texture(t);
        return e.needsUpdate = !0,
        e.minFilter = it.LinearFilter,
        e.generateMipmaps = !1,
        e
    }
    var Tt = new it.Quaternion;
    function xt(t, e) {
        Tt.setFromEuler(e).invert(),
        t.applyQuaternion(Tt)
    }
    function Mt(t, e) {
        const s = function(s) {
            if (!s)
                return q(t);
            const i = q({
                ...t,
                ...s
            })
              , o = {};
            for (let[s,n] of Object.entries(i)) {
                if (e && s in e)
                    n = e[s](n, {
                        rawConfig: i,
                        defValue: t[s]
                    });
                else if (!(s in t)) {
                    ct(`Unknown option ${s}`);
                    continue
                }
                o[s] = n
            }
            return o
        };
        return s.defaults = t,
        s.parsers = e || {},
        s
    }
    var Ot = class {
        constructor(t) {
            this.easing = O.linear,
            this.callbacks = [],
            this.resolved = !1,
            this.cancelled = !1,
            this.options = t,
            t ? (t.easing && (this.easing = "function" == typeof t.easing ? t.easing : O[t.easing] || O.linear),
            this.delayTimeout = setTimeout((()=>{
                this.delayTimeout = void 0,
                this.animationFrame = window.requestAnimationFrame((t=>this.__run(t)))
            }
            ), t.delay || 0)) : this.resolved = !0
        }
        __run(t) {
            if (this.cancelled)
                return;
            this.start || (this.start = t);
            const e = (t - this.start) / this.options.duration
              , s = {};
            if (e < 1) {
                for (const [t,i] of Object.entries(this.options.properties))
                    if (i) {
                        const o = i.start + (i.end - i.start) * this.easing(e);
                        s[t] = o
                    }
                this.options.onTick(s, e),
                this.animationFrame = window.requestAnimationFrame((t=>this.__run(t)))
            } else {
                for (const [t,e] of Object.entries(this.options.properties))
                    e && (s[t] = e.end);
                this.options.onTick(s, 1),
                this.__resolve(!0),
                this.animationFrame = void 0
            }
        }
        __resolve(t) {
            t ? this.resolved = !0 : this.cancelled = !0,
            this.callbacks.forEach((e=>e(t))),
            this.callbacks.length = 0
        }
        then(t) {
            return this.resolved || this.cancelled ? Promise.resolve(this.resolved).then(t) : new Promise((t=>{
                this.callbacks.push(t)
            }
            )).then(t)
        }
        cancel() {
            this.cancelled || this.resolved || (this.__resolve(!1),
            this.delayTimeout && (window.clearTimeout(this.delayTimeout),
            this.delayTimeout = void 0),
            this.animationFrame && (window.cancelAnimationFrame(this.animationFrame),
            this.animationFrame = void 0))
        }
    }
      , Lt = a()
      , Ct = class {
        constructor(t, e) {
            if (this.fn = t,
            this.mode = 0,
            this.speed = 0,
            this.speedMult = 0,
            this.currentSpeed = 0,
            this.target = 0,
            this.__current = 0,
            this.min = e.min,
            this.max = e.max,
            this.wrap = e.wrap,
            this.current = e.defaultValue,
            this.wrap && 0 !== this.min)
                throw new ot("invalid config");
            this.fn && this.fn(this.current)
        }
        get current() {
            return this.__current
        }
        set current(t) {
            this.__current = t
        }
        setSpeed(t) {
            this.speed = t
        }
        goto(t, e=1) {
            this.mode = 2,
            this.target = this.wrap ? C(t, this.max) : Lt.MathUtils.clamp(t, this.min, this.max),
            this.speedMult = e
        }
        step(t, e=1) {
            0 === e ? this.setValue(this.current + t) : (2 !== this.mode && (this.target = this.current),
            this.goto(this.target + t, e))
        }
        roll(t=!1, e=1) {
            this.mode = 1,
            this.target = t ? -1 / 0 : 1 / 0,
            this.speedMult = e
        }
        stop() {
            this.mode = 0
        }
        setValue(t) {
            return this.target = this.wrap ? C(t, this.max) : Lt.MathUtils.clamp(t, this.min, this.max),
            this.mode = 0,
            this.currentSpeed = 0,
            this.target !== this.current && (this.current = this.target,
            this.fn && this.fn(this.current),
            !0)
        }
        update(t) {
            if (2 === this.mode) {
                this.wrap && Math.abs(this.target - this.current) > this.max / 2 && (this.current = this.current < this.target ? this.current + this.max : this.current - this.max);
                const t = this.currentSpeed * this.currentSpeed / (this.speed * this.speedMult * 4);
                Math.abs(this.target - this.current) <= t && (this.mode = 0)
            }
            let e = 0 === this.mode ? 0 : this.speed * this.speedMult;
            this.target < this.current && (e = -e),
            this.currentSpeed < e ? this.currentSpeed = Math.min(e, this.currentSpeed + t / 1e3 * this.speed * this.speedMult * 2) : this.currentSpeed > e && (this.currentSpeed = Math.max(e, this.currentSpeed - t / 1e3 * this.speed * this.speedMult * 2));
            let s = null;
            return this.current > this.target && this.currentSpeed ? s = Math.max(this.target, this.current + this.currentSpeed * t / 1e3) : this.current < this.target && this.currentSpeed && (s = Math.min(this.target, this.current + this.currentSpeed * t / 1e3)),
            null !== s && (s = this.wrap ? C(s, this.max) : Lt.MathUtils.clamp(s, this.min, this.max),
            s !== this.current) && (this.current = s,
            this.fn && this.fn(this.current),
            !0)
        }
    }
      , kt = class {
        constructor(t, e) {
            this.fn = t,
            this.dynamics = e,
            this.fn && this.fn(this.current)
        }
        get current() {
            return Object.entries(this.dynamics).reduce(((t,[e,s])=>(t[e] = s.current,
            t)), {})
        }
        setSpeed(t) {
            for (const e of Object.values(this.dynamics))
                e.setSpeed(t)
        }
        goto(t, e=1) {
            for (const [s,i] of Object.entries(t))
                this.dynamics[s].goto(i, e)
        }
        step(t, e=1) {
            if (0 === e)
                this.setValue(Object.keys(t).reduce(((e,s)=>(e[s] = t[s] + this.dynamics[s].current,
                e)), {}));
            else
                for (const [s,i] of Object.entries(t))
                    this.dynamics[s].step(i, e)
        }
        roll(t, e=1) {
            for (const [s,i] of Object.entries(t))
                this.dynamics[s].roll(i, e)
        }
        stop() {
            for (const t of Object.values(this.dynamics))
                t.stop()
        }
        setValue(t) {
            let e = !1;
            for (const [s,i] of Object.entries(t))
                e = this.dynamics[s].setValue(i) || e;
            return e && this.fn && this.fn(this.current),
            e
        }
        update(t) {
            let e = !1;
            for (const s of Object.values(this.dynamics))
                e = s.update(t) || e;
            return e && this.fn && this.fn(this.current),
            e
        }
    }
      , It = class {
        constructor(t=200) {
            this.delay = t,
            this.time = 0,
            this.delay = t
        }
        get pending() {
            return 0 !== this.time
        }
        down() {
            this.timeout && (clearTimeout(this.timeout),
            this.timeout = void 0),
            this.time = (new Date).getTime()
        }
        up(t) {
            if (!this.time)
                return;
            Date.now() - this.time < this.delay ? this.timeout = setTimeout((()=>{
                t(),
                this.timeout = void 0,
                this.time = 0
            }
            ), this.delay) : (t(),
            this.time = 0)
        }
    }
      , St = (t=>(t.VERTICAL = "VERTICAL",
    t.HORIZONTAL = "HORIZONTAL",
    t))(St || {})
      , Pt = class {
        constructor(t, e, s) {
            this.container = t,
            this.direction = e,
            this.listener = s,
            this.mousedown = !1,
            this.mouseover = !1,
            this.container.addEventListener("click", this),
            this.container.addEventListener("mousedown", this),
            this.container.addEventListener("mouseenter", this),
            this.container.addEventListener("mouseleave", this),
            this.container.addEventListener("touchstart", this),
            this.container.addEventListener("mousemove", this, !0),
            this.container.addEventListener("touchmove", this, !0),
            window.addEventListener("mouseup", this),
            window.addEventListener("touchend", this)
        }
        get isVertical() {
            return "VERTICAL" === this.direction
        }
        get isHorizontal() {
            return "HORIZONTAL" === this.direction
        }
        destroy() {
            window.removeEventListener("mouseup", this),
            window.removeEventListener("touchend", this)
        }
        handleEvent(t) {
            switch (t.type) {
            case "click":
                t.stopPropagation();
                break;
            case "mousedown":
                this.__onMouseDown(t);
                break;
            case "mouseenter":
                this.__onMouseEnter(t);
                break;
            case "mouseleave":
                this.__onMouseLeave(t);
                break;
            case "touchstart":
                this.__onTouchStart(t);
                break;
            case "mousemove":
                this.__onMouseMove(t);
                break;
            case "touchmove":
                this.__onTouchMove(t);
                break;
            case "mouseup":
                this.__onMouseUp(t);
                break;
            case "touchend":
                this.__onTouchEnd(t)
            }
        }
        __onMouseDown(t) {
            this.mousedown = !0,
            this.__update(t.clientX, t.clientY, !0)
        }
        __onMouseEnter(t) {
            this.mouseover = !0,
            this.__update(t.clientX, t.clientY, !0)
        }
        __onTouchStart(t) {
            this.mouseover = !0,
            this.mousedown = !0;
            const e = t.changedTouches[0];
            this.__update(e.clientX, e.clientY, !0)
        }
        __onMouseMove(t) {
            (this.mousedown || this.mouseover) && (t.stopPropagation(),
            this.__update(t.clientX, t.clientY, !0))
        }
        __onTouchMove(t) {
            if (this.mousedown || this.mouseover) {
                t.stopPropagation();
                const e = t.changedTouches[0];
                this.__update(e.clientX, e.clientY, !0)
            }
        }
        __onMouseUp(t) {
            this.mousedown && (this.mousedown = !1,
            this.__update(t.clientX, t.clientY, !1))
        }
        __onMouseLeave(t) {
            this.mouseover && (this.mouseover = !1,
            this.__update(t.clientX, t.clientY, !0))
        }
        __onTouchEnd(t) {
            if (this.mousedown) {
                this.mouseover = !1,
                this.mousedown = !1;
                const e = t.changedTouches[0];
                this.__update(e.clientX, e.clientY, !1)
            }
        }
        __update(t, e, s) {
            const i = this.container.getBoundingClientRect()
              , o = this.isVertical ? e : t
              , n = i[this.isVertical ? "bottom" : "left"]
              , r = i[this.isVertical ? "height" : "width"]
              , a = Math.abs((n - o) / r);
            this.listener({
                value: a,
                click: !s,
                mousedown: this.mousedown,
                mouseover: this.mouseover,
                cursor: {
                    clientX: t,
                    clientY: e
                }
            })
        }
    }
      , Rt = {};
    r(Rt, {
        BeforeAnimateEvent: ()=>Ut,
        BeforeRenderEvent: ()=>Ft,
        BeforeRotateEvent: ()=>jt,
        ClickEvent: ()=>Yt,
        ConfigChangedEvent: ()=>Xt,
        DoubleClickEvent: ()=>Bt,
        FullscreenEvent: ()=>Kt,
        HideNotificationEvent: ()=>Qt,
        HideOverlayEvent: ()=>te,
        HidePanelEvent: ()=>se,
        HideTooltipEvent: ()=>oe,
        KeypressEvent: ()=>re,
        LoadProgressEvent: ()=>he,
        ObjectEnterEvent: ()=>Re,
        ObjectEvent: ()=>Se,
        ObjectHoverEvent: ()=>Ne,
        ObjectLeaveEvent: ()=>He,
        PanoramaLoadedEvent: ()=>le,
        PositionUpdatedEvent: ()=>ue,
        ReadyEvent: ()=>ve,
        RenderEvent: ()=>we,
        ShowNotificationEvent: ()=>ge,
        ShowOverlayEvent: ()=>be,
        ShowPanelEvent: ()=>Ee,
        ShowTooltipEvent: ()=>xe,
        SizeUpdatedEvent: ()=>Oe,
        StopAllEvent: ()=>Ce,
        ViewerEvent: ()=>At,
        ZoomUpdatedEvent: ()=>Ie
    });
    var zt = class extends Event {
        constructor(t, e=!1) {
            super(t, {
                cancelable: e
            })
        }
    }
      , Ht = class extends EventTarget {
        dispatchEvent(t) {
            return super.dispatchEvent(t)
        }
        addEventListener(t, e, s) {
            super.addEventListener(t, e, s)
        }
        removeEventListener(t, e, s) {
            super.removeEventListener(t, e, s)
        }
    }
      , At = class extends zt {
    }
      , Nt = class t extends At {
        constructor(e, s) {
            super(t.type, !0),
            this.position = e,
            this.zoomLevel = s
        }
    }
    ;
    Nt.type = "before-animate";
    var Ut = Nt
      , Dt = class t extends At {
        constructor(e, s) {
            super(t.type),
            this.timestamp = e,
            this.elapsed = s
        }
    }
    ;
    Dt.type = "before-render";
    var Ft = Dt
      , Vt = class t extends At {
        constructor(e) {
            super(t.type, !0),
            this.position = e
        }
    }
    ;
    Vt.type = "before-rotate";
    var jt = Vt
      , Wt = class t extends At {
        constructor(e) {
            super(t.type),
            this.data = e
        }
    }
    ;
    Wt.type = "click";
    var Yt = Wt
      , $t = class t extends At {
        constructor(e) {
            super(t.type),
            this.options = e
        }
        containsOptions(...t) {
            return t.some((t=>this.options.includes(t)))
        }
    }
    ;
    $t.type = "config-changed";
    var Xt = $t
      , Zt = class t extends At {
        constructor(e) {
            super(t.type),
            this.data = e
        }
    }
    ;
    Zt.type = "dblclick";
    var Bt = Zt
      , Gt = class t extends At {
        constructor(e) {
            super(t.type),
            this.fullscreenEnabled = e
        }
    }
    ;
    Gt.type = "fullscreen";
    var Kt = Gt
      , qt = class t extends At {
        constructor(e) {
            super(t.type),
            this.notificationId = e
        }
    }
    ;
    qt.type = "hide-notification";
    var Qt = qt
      , Jt = class t extends At {
        constructor(e) {
            super(t.type),
            this.overlayId = e
        }
    }
    ;
    Jt.type = "hide-overlay";
    var te = Jt
      , ee = class t extends At {
        constructor(e) {
            super(t.type),
            this.panelId = e
        }
    }
    ;
    ee.type = "hide-panel";
    var se = ee
      , ie = class t extends At {
        constructor(e) {
            super(t.type),
            this.tooltipData = e
        }
    }
    ;
    ie.type = "hide-tooltip";
    var oe = ie
      , ne = class t extends At {
        constructor(e) {
            super(t.type, !0),
            this.key = e
        }
    }
    ;
    ne.type = "key-press";
    var re = ne
      , ae = class t extends At {
        constructor(e) {
            super(t.type),
            this.progress = e
        }
    }
    ;
    ae.type = "load-progress";
    var he = ae
      , ce = class t extends At {
        constructor(e) {
            super(t.type),
            this.data = e
        }
    }
    ;
    ce.type = "panorama-loaded";
    var le = ce
      , de = class t extends At {
        constructor(e) {
            super(t.type),
            this.position = e
        }
    }
    ;
    de.type = "position-updated";
    var ue = de
      , pe = class t extends At {
        constructor() {
            super(t.type)
        }
    }
    ;
    pe.type = "ready";
    var ve = pe
      , me = class t extends At {
        constructor() {
            super(t.type)
        }
    }
    ;
    me.type = "render";
    var we = me
      , fe = class t extends At {
        constructor(e) {
            super(t.type),
            this.notificationId = e
        }
    }
    ;
    fe.type = "show-notification";
    var ge = fe
      , ye = class t extends At {
        constructor(e) {
            super(t.type),
            this.overlayId = e
        }
    }
    ;
    ye.type = "show-overlay";
    var be = ye
      , _e = class t extends At {
        constructor(e) {
            super(t.type),
            this.panelId = e
        }
    }
    ;
    _e.type = "show-panel";
    var Ee = _e
      , Te = class t extends At {
        constructor(e, s) {
            super(t.type),
            this.tooltip = e,
            this.tooltipData = s
        }
    }
    ;
    Te.type = "show-tooltip";
    var xe = Te
      , Me = class t extends At {
        constructor(e) {
            super(t.type),
            this.size = e
        }
    }
    ;
    Me.type = "size-updated";
    var Oe = Me
      , Le = class t extends At {
        constructor() {
            super(t.type)
        }
    }
    ;
    Le.type = "stop-all";
    var Ce = Le
      , ke = class t extends At {
        constructor(e) {
            super(t.type),
            this.zoomLevel = e
        }
    }
    ;
    ke.type = "zoom-updated";
    var Ie = ke
      , Se = class extends At {
        constructor(t, e, s, i, o) {
            super(t),
            this.originalEvent = e,
            this.object = s,
            this.viewerPoint = i,
            this.userDataKey = o
        }
    }
      , Pe = class t extends Se {
        constructor(e, s, i, o) {
            super(t.type, e, s, i, o)
        }
    }
    ;
    Pe.type = "enter-object";
    var Re = Pe
      , ze = class t extends Se {
        constructor(e, s, i, o) {
            super(t.type, e, s, i, o)
        }
    }
    ;
    ze.type = "leave-object";
    var He = ze
      , Ae = class t extends Se {
        constructor(e, s, i, o) {
            super(t.type, e, s, i, o)
        }
    }
    ;
    Ae.type = "hover-object";
    var Ne = Ae
      , Ue = a()
      , De = class t {
        constructor(t) {
            this.viewer = t
        }
        destroy() {}
        supportsTransition(t) {
            return !1
        }
        supportsPreload(t) {
            return !1
        }
        static createOverlayMaterial({additionalUniforms: e, overrideVertexShader: s}={}) {
            return new Ue.ShaderMaterial({
                uniforms: {
                    ...e,
                    [t.OVERLAY_UNIFORMS.panorama]: {
                        value: new Ue.Texture
                    },
                    [t.OVERLAY_UNIFORMS.overlay]: {
                        value: new Ue.Texture
                    },
                    [t.OVERLAY_UNIFORMS.globalOpacity]: {
                        value: 1
                    },
                    [t.OVERLAY_UNIFORMS.overlayOpacity]: {
                        value: 1
                    }
                },
                vertexShader: s || "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );\n}",
                fragmentShader: `\nuniform sampler2D ${t.OVERLAY_UNIFORMS.panorama};\nuniform sampler2D ${t.OVERLAY_UNIFORMS.overlay};\nuniform float ${t.OVERLAY_UNIFORMS.globalOpacity};\nuniform float ${t.OVERLAY_UNIFORMS.overlayOpacity};\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 tColor1 = texture2D( ${t.OVERLAY_UNIFORMS.panorama}, vUv );\n  vec4 tColor2 = texture2D( ${t.OVERLAY_UNIFORMS.overlay}, vUv );\n  gl_FragColor = vec4(\n    mix( tColor1.rgb, tColor2.rgb, tColor2.a * ${t.OVERLAY_UNIFORMS.overlayOpacity} ),\n    ${t.OVERLAY_UNIFORMS.globalOpacity}\n  );\n}`
            })
        }
    }
    ;
    De.supportsDownload = !1,
    De.supportsOverlay = !1,
    De.OVERLAY_UNIFORMS = {
        panorama: "panorama",
        overlay: "overlay",
        globalOpacity: "globalOpacity",
        overlayOpacity: "overlayOpacity"
    };
    var Fe = De;
    function Ve(t) {
        if (t)
            for (const [,e] of [["_", t], ...Object.entries(t)])
                if (e.prototype instanceof Fe)
                    return e;
        return null
    }
    var je = a()
      , We = `${b}_touchSupport`
      , Ye = {
        loaded: !1,
        pixelRatio: 1,
        isWebGLSupported: !1,
        maxTextureWidth: 0,
        isTouchEnabled: null,
        fullscreenEvent: null,
        __maxCanvasWidth: null,
        get maxCanvasWidth() {
            return null === this.__maxCanvasWidth && (this.__maxCanvasWidth = function(t) {
                const e = document.createElement("canvas")
                  , s = e.getContext("2d");
                e.width = t,
                e.height = t / 2;
                for (; e.width > 1024; ) {
                    s.fillStyle = "white",
                    s.fillRect(0, 0, 1, 1);
                    try {
                        if (s.getImageData(0, 0, 1, 1).data[0] > 0)
                            return e.width
                    } catch (t) {}
                    e.width /= 2,
                    e.height /= 2
                }
                throw new ot("Unable to detect system capabilities")
            }(this.maxTextureWidth)),
            this.__maxCanvasWidth
        },
        load() {
            if (!this.loaded) {
                const t = function() {
                    const t = document.createElement("canvas")
                      , e = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                    let s = null;
                    if (!t.getContext)
                        return null;
                    return e.some((e=>{
                        try {
                            return s = t.getContext(e),
                            null !== s
                        } catch (t) {
                            return !1
                        }
                    }
                    )) ? s : null
                }();
                this.pixelRatio = window.devicePixelRatio || 1,
                this.isWebGLSupported = null !== t,
                this.maxTextureWidth = t ? t.getParameter(t.MAX_TEXTURE_SIZE) : 0,
                this.isTouchEnabled = function() {
                    let t = "ontouchstart"in window || navigator.maxTouchPoints > 0;
                    We in localStorage && (t = "true" === localStorage[We]);
                    const e = new Promise((e=>{
                        const s = ()=>{
                            window.removeEventListener("mousedown", i),
                            window.removeEventListener("touchstart", o),
                            clearTimeout(r)
                        }
                          , i = ()=>{
                            s(),
                            localStorage[We] = !1,
                            e(!1)
                        }
                          , o = ()=>{
                            s(),
                            localStorage[We] = !0,
                            e(!0)
                        }
                          , n = ()=>{
                            s(),
                            localStorage[We] = t,
                            e(t)
                        }
                        ;
                        window.addEventListener("mousedown", i, !1),
                        window.addEventListener("touchstart", o, !1);
                        const r = setTimeout(n, 1e4)
                    }
                    ));
                    return {
                        initial: t,
                        promise: e
                    }
                }(),
                this.fullscreenEvent = function() {
                    if ("exitFullscreen"in document)
                        return "fullscreenchange";
                    if ("webkitExitFullscreen"in document)
                        return "webkitfullscreenchange";
                    return null
                }(),
                this.loaded = !0
            }
            if (!Ye.isWebGLSupported)
                throw new ot("WebGL is not supported.");
            if (0 === Ye.maxTextureWidth)
                throw new ot("Unable to detect system capabilities")
        }
    };
    var $e = Mt({
        resolution: 64,
        blur: !1
    }, {
        resolution: t=>{
            if (!t || !je.MathUtils.isPowerOfTwo(t))
                throw new ot("EquirectangularAdapter resolution must be power of two");
            return t
        }
    })
      , Xe = class extends Fe {
        constructor(t, e) {
            super(t),
            this.config = $e(e),
            this.SPHERE_SEGMENTS = this.config.resolution,
            this.SPHERE_HORIZONTAL_SEGMENTS = this.SPHERE_SEGMENTS / 2
        }
        supportsTransition() {
            return !0
        }
        supportsPreload() {
            return !0
        }
        async loadTexture(t, e, s=this.viewer.config.useXmpData) {
            if ("string" != typeof t)
                return Promise.reject(new ot("Invalid panorama url, are you using the right adapter?"));
            const i = await this.viewer.textureLoader.loadFile(t, (t=>this.viewer.loader.setProgress(t)))
              , o = s ? await this.loadXMP(i) : null
              , n = await this.viewer.textureLoader.blobToImage(i);
            "function" == typeof e && (e = e(n));
            const r = {
                fullWidth: tt(e?.fullWidth, o?.fullWidth, n.width),
                fullHeight: tt(e?.fullHeight, o?.fullHeight, n.height),
                croppedWidth: tt(e?.croppedWidth, o?.croppedWidth, n.width),
                croppedHeight: tt(e?.croppedHeight, o?.croppedHeight, n.height),
                croppedX: tt(e?.croppedX, o?.croppedX, 0),
                croppedY: tt(e?.croppedY, o?.croppedY, 0),
                poseHeading: tt(e?.poseHeading, o?.poseHeading, 0),
                posePitch: tt(e?.posePitch, o?.posePitch, 0),
                poseRoll: tt(e?.poseRoll, o?.poseRoll, 0)
            };
            r.croppedWidth === n.width && r.croppedHeight === n.height || ct(`Invalid panoData, croppedWidth and/or croppedHeight is not coherent with loaded image.\n              panoData: ${r.croppedWidth}x ${r.croppedHeight}, image: ${n.width}x ${n.height}`),
            (e || o) && r.fullWidth !== 2 * r.fullHeight && ct("Invalid panoData, fullWidth should be twice fullHeight");
            return {
                panorama: t,
                texture: this.createEquirectangularTexture(n, r),
                panoData: r
            }
        }
        async loadXMP(t) {
            const e = await this.loadBlobAsString(t)
              , s = e.indexOf("<x:xmpmeta")
              , i = e.indexOf("</x:xmpmeta>")
              , o = e.substring(s, i);
            return -1 !== s && -1 !== i && o.includes("GPano:") ? {
                fullWidth: dt(o, "FullPanoWidthPixels"),
                fullHeight: dt(o, "FullPanoHeightPixels"),
                croppedWidth: dt(o, "CroppedAreaImageWidthPixels"),
                croppedHeight: dt(o, "CroppedAreaImageHeightPixels"),
                croppedX: dt(o, "CroppedAreaLeftPixels"),
                croppedY: dt(o, "CroppedAreaTopPixels"),
                poseHeading: dt(o, "PoseHeadingDegrees"),
                posePitch: dt(o, "PosePitchDegrees"),
                poseRoll: dt(o, "PoseRollDegrees")
            } : null
        }
        loadBlobAsString(t) {
            return new Promise(((e,s)=>{
                const i = new FileReader;
                i.onload = ()=>e(i.result),
                i.onerror = s,
                i.readAsText(t)
            }
            ))
        }
        createEquirectangularTexture(t, e) {
            if (this.config.blur || e.fullWidth > Ye.maxTextureWidth || e.croppedWidth !== e.fullWidth || e.croppedHeight !== e.fullHeight) {
                const s = Math.min(1, Ye.maxCanvasWidth / e.fullWidth)
                  , i = {
                    fullWidth: e.fullWidth * s,
                    fullHeight: e.fullHeight * s,
                    croppedWidth: e.croppedWidth * s,
                    croppedHeight: e.croppedHeight * s,
                    croppedX: e.croppedX * s,
                    croppedY: e.croppedY * s
                }
                  , o = document.createElement("canvas");
                o.width = i.fullWidth,
                o.height = i.fullHeight;
                const n = o.getContext("2d");
                return this.config.blur && (n.filter = `blur(${o.width / 2048}px)`),
                n.drawImage(t, i.croppedX, i.croppedY, i.croppedWidth, i.croppedHeight),
                Et(o)
            }
            return Et(t)
        }
        createMesh(t=1) {
            const e = new je.SphereGeometry(y * t,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI / 2).scale(-1, 1, 1)
              , s = Fe.createOverlayMaterial();
            return new je.Mesh(e,s)
        }
        setTexture(t, e) {
            this.__setUniform(t, Fe.OVERLAY_UNIFORMS.panorama, e.texture),
            this.setOverlay(t, null, 1)
        }
        setOverlay(t, e, s) {
            this.__setUniform(t, Fe.OVERLAY_UNIFORMS.overlayOpacity, s),
            e ? this.__setUniform(t, Fe.OVERLAY_UNIFORMS.overlay, e.texture) : this.__setUniform(t, Fe.OVERLAY_UNIFORMS.overlay, new je.Texture)
        }
        setTextureOpacity(t, e) {
            this.__setUniform(t, Fe.OVERLAY_UNIFORMS.globalOpacity, e),
            t.material.transparent = e < 1
        }
        disposeTexture(t) {
            t.texture?.dispose()
        }
        __setUniform(t, e, s) {
            t.material.uniforms[e].value instanceof je.Texture && t.material.uniforms[e].value.dispose(),
            t.material.uniforms[e].value = s
        }
    }
    ;
    Xe.id = "equirectangular",
    Xe.supportsDownload = !0,
    Xe.supportsOverlay = !0;
    var Ze = class t {
        constructor(e, s) {
            this.parent = e,
            this.children = [],
            this.container = document.createElement("div"),
            this.state = {
                visible: !0
            },
            this.viewer = e instanceof t ? e.viewer : e,
            this.container.className = s.className || "",
            this.parent.children.push(this),
            this.parent.container.appendChild(this.container)
        }
        destroy() {
            this.parent.container.removeChild(this.container);
            const t = this.parent.children.indexOf(this);
            -1 !== t && this.parent.children.splice(t, 1),
            this.children.slice().forEach((t=>t.destroy())),
            this.children.length = 0
        }
        toggle(t=!this.isVisible()) {
            t ? this.show() : this.hide()
        }
        hide(t) {
            this.container.style.display = "none",
            this.state.visible = !1
        }
        show(t) {
            this.container.style.display = "",
            this.state.visible = !0
        }
        isVisible() {
            return this.state.visible
        }
    }
      , Be = Mt({
        id: null,
        className: null,
        title: null,
        hoverScale: !1,
        collapsable: !1,
        tabbable: !0,
        icon: null,
        iconActive: null
    })
      , Ge = class extends Ze {
        constructor(t, e) {
            super(t, {
                className: `psv-button ${e.hoverScale ? "psv-button--hover-scale" : ""} ${e.className || ""}`
            }),
            this.state = {
                visible: !0,
                enabled: !0,
                supported: !0,
                collapsed: !1,
                active: !1,
                width: 0
            },
            this.config = Be(e),
            this.config.id = this.constructor.id,
            e.icon && this.__setIcon(e.icon),
            this.state.width = this.container.offsetWidth,
            this.config.title ? this.container.title = this.config.title : this.id && this.id in this.viewer.config.lang && (this.container.title = this.viewer.config.lang[this.id]),
            e.tabbable && (this.container.tabIndex = 0),
            this.container.addEventListener("click", (t=>{
                this.state.enabled && this.onClick(),
                t.stopPropagation()
            }
            )),
            this.container.addEventListener("keydown", (t=>{
                t.key === x.Enter && this.state.enabled && (this.onClick(),
                t.stopPropagation())
            }
            ))
        }
        get id() {
            return this.config.id
        }
        get title() {
            return this.container.title
        }
        get content() {
            return this.container.innerHTML
        }
        get width() {
            return this.state.width
        }
        get collapsable() {
            return this.config.collapsable
        }
        show(t=!0) {
            this.isVisible() || (this.state.visible = !0,
            this.state.collapsed || (this.container.style.display = ""),
            t && this.viewer.navbar.autoSize())
        }
        hide(t=!0) {
            this.isVisible() && (this.state.visible = !1,
            this.container.style.display = "none",
            t && this.viewer.navbar.autoSize())
        }
        checkSupported() {
            nt(this.isSupported(), ((t,e)=>{
                this.state && (this.state.supported = t,
                e ? t || this.hide() : this.toggle(t))
            }
            ))
        }
        autoSize() {}
        isSupported() {
            return !0
        }
        toggleActive(t=!this.state.active) {
            t !== this.state.active && (this.state.active = t,
            A(this.container, "psv-button--active", this.state.active),
            this.config.iconActive && this.__setIcon(this.state.active ? this.config.iconActive : this.config.icon))
        }
        disable() {
            this.container.classList.add("psv-button--disabled"),
            this.state.enabled = !1
        }
        enable() {
            this.container.classList.remove("psv-button--disabled"),
            this.state.enabled = !0
        }
        collapse() {
            this.state.collapsed = !0,
            this.container.style.display = "none"
        }
        uncollapse() {
            this.state.collapsed = !1,
            this.state.visible && (this.container.style.display = "")
        }
        __setIcon(t) {
            this.container.innerHTML = t,
            N(this.container.querySelector("svg"), "psv-button-svg")
        }
    }
      , Ke = class extends Ge {
        constructor(t, e) {
            super(t, {
                className: `psv-custom-button ${e.className || ""}`,
                hoverScale: !1,
                collapsable: !1 !== e.collapsable,
                tabbable: !1 !== e.tabbable,
                title: e.title
            }),
            this.customOnClick = e.onClick,
            e.id ? this.config.id = e.id : this.config.id = "psvButton-" + Math.random().toString(36).substring(2),
            e.content && (this.container.innerHTML = e.content),
            this.state.width = this.container.offsetWidth,
            e.disabled && this.disable(),
            !1 === e.visible && this.hide()
        }
        onClick() {
            this.customOnClick?.(this.viewer)
        }
    }
      , qe = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-description-button",
                hoverScale: !0,
                collapsable: !1,
                tabbable: !0,
                icon: M.info
            }),
            this.mode = 0,
            this.viewer.addEventListener(Qt.type, this),
            this.viewer.addEventListener(ge.type, this),
            this.viewer.addEventListener(se.type, this),
            this.viewer.addEventListener(Ee.type, this),
            this.viewer.addEventListener(Xt.type, this)
        }
        destroy() {
            this.viewer.removeEventListener(Qt.type, this),
            this.viewer.removeEventListener(ge.type, this),
            this.viewer.removeEventListener(se.type, this),
            this.viewer.removeEventListener(Ee.type, this),
            this.viewer.removeEventListener(Xt.type, this),
            super.destroy()
        }
        handleEvent(t) {
            if (t instanceof Xt)
                return void (t.containsOptions("description") && this.autoSize(!0));
            if (!this.mode)
                return;
            let e = !1;
            t instanceof Qt ? e = 1 === this.mode : t instanceof ge ? e = 1 === this.mode && t.notificationId !== T.DESCRIPTION : t instanceof se ? e = 2 === this.mode : t instanceof Ee && (e = 2 === this.mode && t.panelId !== T.DESCRIPTION),
            e && (this.toggleActive(!1),
            this.mode = 0)
        }
        onClick() {
            this.mode ? this.__close() : this.__open()
        }
        hide(t) {
            super.hide(t),
            this.mode && this.__close()
        }
        autoSize(t=!1) {
            if (t) {
                const t = this.viewer.navbar.getButton("caption", !1)
                  , e = t && !t.isVisible()
                  , s = !!this.viewer.config.description;
                e || s ? this.show(!1) : this.hide(!1)
            }
        }
        __close() {
            switch (this.mode) {
            case 1:
                this.viewer.notification.hide(T.DESCRIPTION);
                break;
            case 2:
                this.viewer.panel.hide(T.DESCRIPTION)
            }
        }
        __open() {
            this.toggleActive(!0),
            this.viewer.config.description ? (this.mode = 2,
            this.viewer.panel.show({
                id: T.DESCRIPTION,
                content: (this.viewer.config.caption ? `<p>${this.viewer.config.caption}</p>` : "") + this.viewer.config.description
            })) : (this.mode = 1,
            this.viewer.notification.show({
                id: T.DESCRIPTION,
                content: this.viewer.config.caption
            }))
        }
    }
    ;
    qe.id = "description";
    var Qe = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-download-button",
                hoverScale: !0,
                collapsable: !0,
                tabbable: !0,
                icon: M.download
            }),
            this.viewer.addEventListener(Xt.type, this)
        }
        destroy() {
            this.viewer.removeEventListener(Xt.type, this),
            super.destroy()
        }
        handleEvent(t) {
            t instanceof Xt && t.containsOptions("downloadUrl") && this.checkSupported()
        }
        onClick() {
            const t = document.createElement("a");
            t.href = this.viewer.config.downloadUrl || this.viewer.config.panorama,
            t.href.startsWith("data:") && !this.viewer.config.downloadName ? t.download = "panorama." + t.href.substring(0, t.href.indexOf(";")).split("/").pop() : t.download = this.viewer.config.downloadName || t.href.split("/").pop(),
            t.target = "_blank",
            this.viewer.container.appendChild(t),
            t.click(),
            setTimeout((()=>{
                this.viewer.container.removeChild(t)
            }
            ), 100)
        }
        checkSupported() {
            this.viewer.adapter.constructor.supportsDownload || this.viewer.config.downloadUrl ? this.show() : this.hide()
        }
    }
    ;
    Qe.id = "download";
    var Je = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-fullscreen-button",
                hoverScale: !0,
                collapsable: !1,
                tabbable: !0,
                icon: M.fullscreenIn,
                iconActive: M.fullscreenOut
            }),
            this.viewer.addEventListener(Kt.type, this)
        }
        destroy() {
            this.viewer.removeEventListener(Kt.type, this),
            super.destroy()
        }
        handleEvent(t) {
            t instanceof Kt && this.toggleActive(t.fullscreenEnabled)
        }
        onClick() {
            this.viewer.toggleFullscreen()
        }
    }
    ;
    Je.id = "fullscreen";
    var ts = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-menu-button",
                hoverScale: !0,
                collapsable: !1,
                tabbable: !0,
                icon: M.menu
            }),
            this.viewer.addEventListener(Ee.type, this),
            this.viewer.addEventListener(se.type, this),
            super.hide()
        }
        destroy() {
            this.viewer.removeEventListener(Ee.type, this),
            this.viewer.removeEventListener(se.type, this),
            super.destroy()
        }
        handleEvent(t) {
            t instanceof Ee ? this.toggleActive(t.panelId === T.MENU) : t instanceof se && this.toggleActive(!1)
        }
        onClick() {
            this.state.active ? this.__hideMenu() : this.__showMenu()
        }
        hide(t) {
            super.hide(t),
            this.__hideMenu()
        }
        show(t) {
            super.show(t),
            this.state.active && this.__showMenu()
        }
        __showMenu() {
            var t, e;
            this.viewer.panel.show({
                id: T.MENU,
                content: (t = this.viewer.navbar.collapsed,
                e = this.viewer.config.lang.menu,
                `\n<div class="psv-panel-menu psv-panel-menu--stripped">\n  <h1 class="psv-panel-menu-title">${M.menu} ${e}</h1>\n  <ul class="psv-panel-menu-list">\n    ${t.map((t=>`\n    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">\n      <span class="psv-panel-menu-item-icon">${t.content}</span>\n      <span class="psv-panel-menu-item-label">${t.title}</span>\n    </li>\n    `)).join("")}\n  </ul>\n</div>\n`),
                noMargin: !0,
                clickHandler: t=>{
                    const e = t ? F(t, "li") : void 0
                      , s = e ? e.dataset.psvButton : void 0;
                    s && (this.viewer.navbar.getButton(s).onClick(),
                    this.__hideMenu())
                }
            })
        }
        __hideMenu() {
            this.viewer.panel.hide(T.MENU)
        }
    }
    ;
    function es(t) {
        let e = 0;
        switch (t) {
        case 0:
            e = 90;
            break;
        case 1:
            e = -90;
            break;
        case 3:
            e = 180;
            break;
        default:
            e = 0
        }
        return M.arrow.replace("rotate(0", `rotate(${e}`)
    }
    ts.id = "menu";
    var ss = class extends Ge {
        constructor(t, e) {
            super(t, {
                className: "psv-move-button",
                hoverScale: !0,
                collapsable: !1,
                tabbable: !0,
                icon: es(e)
            }),
            this.direction = e,
            this.handler = new It,
            this.container.addEventListener("mousedown", this),
            this.container.addEventListener("keydown", this),
            this.container.addEventListener("keyup", this),
            this.viewer.container.addEventListener("mouseup", this),
            this.viewer.container.addEventListener("touchend", this)
        }
        destroy() {
            this.__onMouseUp(),
            this.viewer.container.removeEventListener("mouseup", this),
            this.viewer.container.removeEventListener("touchend", this),
            super.destroy()
        }
        handleEvent(t) {
            switch (t.type) {
            case "mousedown":
                this.__onMouseDown();
                break;
            case "mouseup":
            case "touchend":
                this.__onMouseUp();
                break;
            case "keydown":
                t.key === x.Enter && this.__onMouseDown();
                break;
            case "keyup":
                t.key === x.Enter && this.__onMouseUp()
            }
        }
        onClick() {}
        isSupported() {
            return rt(Ye.isTouchEnabled)
        }
        __onMouseDown() {
            if (!this.state.enabled)
                return;
            const t = {};
            switch (this.direction) {
            case 0:
                t.pitch = !1;
                break;
            case 1:
                t.pitch = !0;
                break;
            case 3:
                t.yaw = !1;
                break;
            default:
                t.yaw = !0
            }
            this.viewer.stopAll(),
            this.viewer.dynamics.position.roll(t),
            this.handler.down()
        }
        __onMouseUp() {
            this.state.enabled && this.handler.up((()=>{
                this.viewer.dynamics.position.stop(),
                this.viewer.resetIdleTimer()
            }
            ))
        }
    }
    ;
    ss.groupId = "move";
    var is = class extends ss {
        constructor(t) {
            super(t, 1)
        }
    }
    ;
    is.id = "moveDown";
    var os = class extends ss {
        constructor(t) {
            super(t, 2)
        }
    }
    ;
    os.id = "moveLeft";
    var ns = class extends ss {
        constructor(t) {
            super(t, 3)
        }
    }
    ;
    ns.id = "moveRight";
    var rs = class extends ss {
        constructor(t) {
            super(t, 0)
        }
    }
    ;
    rs.id = "moveUp";
    var as = class extends Ge {
        constructor(t, e, s) {
            super(t, {
                className: "psv-zoom-button",
                hoverScale: !0,
                collapsable: !1,
                tabbable: !0,
                icon: s
            }),
            this.direction = e,
            this.handler = new It,
            this.container.addEventListener("mousedown", this),
            this.container.addEventListener("keydown", this),
            this.container.addEventListener("keyup", this),
            this.viewer.container.addEventListener("mouseup", this),
            this.viewer.container.addEventListener("touchend", this)
        }
        destroy() {
            this.__onMouseUp(),
            this.viewer.container.removeEventListener("mouseup", this),
            this.viewer.container.removeEventListener("touchend", this),
            super.destroy()
        }
        handleEvent(t) {
            switch (t.type) {
            case "mousedown":
                this.__onMouseDown();
                break;
            case "mouseup":
            case "touchend":
                this.__onMouseUp();
                break;
            case "keydown":
                t.key === x.Enter && this.__onMouseDown();
                break;
            case "keyup":
                t.key === x.Enter && this.__onMouseUp()
            }
        }
        onClick() {}
        isSupported() {
            return rt(Ye.isTouchEnabled)
        }
        __onMouseDown() {
            this.state.enabled && (this.viewer.dynamics.zoom.roll(1 === this.direction),
            this.handler.down())
        }
        __onMouseUp() {
            this.state.enabled && this.handler.up((()=>this.viewer.dynamics.zoom.stop()))
        }
    }
    ;
    as.groupId = "zoom";
    var hs = class extends as {
        constructor(t) {
            super(t, 0, M.zoomIn)
        }
    }
    ;
    hs.id = "zoomIn";
    var cs = class extends as {
        constructor(t) {
            super(t, 1, M.zoomOut)
        }
    }
    ;
    cs.id = "zoomOut";
    var ls = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-zoom-range",
                hoverScale: !1,
                collapsable: !1,
                tabbable: !1
            }),
            this.zoomRange = document.createElement("div"),
            this.zoomRange.className = "psv-zoom-range-line",
            this.container.appendChild(this.zoomRange),
            this.zoomValue = document.createElement("div"),
            this.zoomValue.className = "psv-zoom-range-handle",
            this.zoomRange.appendChild(this.zoomValue),
            this.slider = new Pt(this.container,"HORIZONTAL",(t=>this.__onSliderUpdate(t))),
            this.mediaMinWidth = parseInt(j(this.container, "maxWidth"), 10),
            this.viewer.addEventListener(Ie.type, this),
            this.viewer.state.ready ? this.__moveZoomValue(this.viewer.getZoomLevel()) : this.viewer.addEventListener(ve.type, this)
        }
        destroy() {
            this.slider.destroy(),
            this.viewer.removeEventListener(Ie.type, this),
            this.viewer.removeEventListener(ve.type, this),
            super.destroy()
        }
        handleEvent(t) {
            t instanceof Ie ? this.__moveZoomValue(t.zoomLevel) : t instanceof ve && this.__moveZoomValue(this.viewer.getZoomLevel())
        }
        onClick() {}
        isSupported() {
            return rt(Ye.isTouchEnabled)
        }
        autoSize() {
            this.state.supported && (this.viewer.state.size.width <= this.mediaMinWidth && this.state.visible ? this.hide(!1) : this.viewer.state.size.width > this.mediaMinWidth && !this.state.visible && this.show(!1))
        }
        __moveZoomValue(t) {
            this.zoomValue.style.left = t / 100 * this.zoomRange.offsetWidth - this.zoomValue.offsetWidth / 2 + "px"
        }
        __onSliderUpdate(t) {
            t.mousedown && this.viewer.zoom(100 * t.value)
        }
    }
    ;
    ls.id = "zoomRange",
    ls.groupId = "zoom";
    var ds = a()
      , us = class extends Ht {
        constructor(t) {
            super(),
            this.viewer = t
        }
        init() {}
        destroy() {}
    }
      , ps = class extends us {
        constructor(t, e) {
            super(t),
            this.config = this.constructor.configParser(e)
        }
        setOption(t, e) {
            this.setOptions({
                [t]: e
            })
        }
        setOptions(t) {
            const e = {
                ...this.config,
                ...t
            }
              , s = this.constructor
              , i = s.configParser
              , o = s.readonlyOptions
              , n = s.id;
            for (let[s,r] of Object.entries(t))
                s in i.defaults ? o.includes(s) ? ct(`${n}: Option "${s}" cannot be updated`) : (s in i.parsers && (r = i.parsers[s](r, {
                    rawConfig: e,
                    defValue: i.defaults[s]
                })),
                this.config[s] = r) : ct(`${n}: Unknown option "${s}"`)
        }
    }
    ;
    function vs(t) {
        if (t)
            for (const [,e] of [["_", t], ...Object.entries(t)])
                if (e.prototype instanceof us)
                    return e;
        return null
    }
    ps.readonlyOptions = [];
    var ms = {
        panorama: null,
        overlay: null,
        overlayOpacity: 1,
        container: null,
        adapter: [Xe, null],
        plugins: [],
        caption: null,
        description: null,
        downloadUrl: null,
        downloadName: null,
        loadingImg: null,
        loadingTxt: "Loading...",
        size: null,
        fisheye: 0,
        minFov: 30,
        maxFov: 90,
        defaultZoomLvl: 50,
        defaultYaw: 0,
        defaultPitch: 0,
        sphereCorrection: null,
        moveSpeed: 1,
        zoomSpeed: 1,
        moveInertia: !0,
        mousewheel: !0,
        mousemove: !0,
        mousewheelCtrlKey: !1,
        touchmoveTwoFingers: !1,
        useXmpData: !0,
        panoData: null,
        requestHeaders: null,
        canvasBackground: "#000",
        withCredentials: !1,
        navbar: ["zoom", "move", "download", "description", "caption", "fullscreen"],
        lang: {
            zoom: "Zoom",
            zoomOut: "Zoom out",
            zoomIn: "Zoom in",
            moveUp: "Move up",
            moveDown: "Move down",
            moveLeft: "Move left",
            moveRight: "Move right",
            download: "Download",
            fullscreen: "Fullscreen",
            menu: "Menu",
            close: "Close",
            twoFingers: "Use two fingers to navigate",
            ctrlZoom: "Use ctrl + scroll to zoom the image",
            loadError: "The panorama can't be loaded"
        },
        keyboard: "fullscreen",
        keyboardActions: {
            [x.ArrowUp]: "ROTATE_UP",
            [x.ArrowDown]: "ROTATE_DOWN",
            [x.ArrowRight]: "ROTATE_RIGHT",
            [x.ArrowLeft]: "ROTATE_LEFT",
            [x.PageUp]: "ZOOM_IN",
            [x.PageDown]: "ZOOM_OUT",
            [x.Plus]: "ZOOM_IN",
            [x.Minus]: "ZOOM_OUT"
        }
    }
      , ws = {
        panorama: "Use setPanorama method to change the panorama",
        panoData: "Use setPanorama method to change the panorama",
        overlay: "Use setOverlay method to changer the overlay",
        overlayOpacity: "Use setOverlay method to changer the overlay",
        container: "Cannot change viewer container",
        adapter: "Cannot change adapter",
        plugins: "Cannot change plugins"
    }
      , fs = {
        container: t=>{
            if (!t)
                throw new ot("No value given for container.");
            return t
        }
        ,
        adapter: (t,{defValue: e})=>{
            if (!(t = t ? Array.isArray(t) ? [Ve(t[0]), t[1]] : [Ve(t), null] : e)[0])
                throw new ot("An undefined value was given for adapter.");
            if (!t[0].id)
                throw new ot("Adapter has no id.");
            return t
        }
        ,
        overlayOpacity: t=>ds.MathUtils.clamp(t, 0, 1),
        defaultYaw: t=>_t(t),
        defaultPitch: t=>_t(t, !0),
        defaultZoomLvl: t=>ds.MathUtils.clamp(t, 0, 100),
        minFov: (t,{rawConfig: e})=>(e.maxFov < t && (ct("maxFov cannot be lower than minFov"),
        t = e.maxFov),
        ds.MathUtils.clamp(t, 1, 179)),
        maxFov: (t,{rawConfig: e})=>(t < e.minFov && (t = e.minFov),
        ds.MathUtils.clamp(t, 1, 179)),
        lang: t=>(Array.isArray(t.twoFingers) && (ct("lang.twoFingers must not be an array"),
        t.twoFingers = t.twoFingers[0]),
        {
            ...ms.lang,
            ...t
        }),
        keyboard: t=>!!t && ("object" == typeof t ? (ct("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),
        "fullscreen") : "always" === t ? "always" : "fullscreen"),
        keyboardActions: (t,{rawConfig: e})=>e.keyboard && "object" == typeof e.keyboard ? e.keyboard : t,
        fisheye: t=>!0 === t ? 1 : !1 === t ? 0 : t,
        requestHeaders: t=>t && "object" == typeof t ? ()=>t : "function" == typeof t ? t : null,
        plugins: t=>t.map(((t,e)=>{
            if (!(t = Array.isArray(t) ? [vs(t[0]), t[1]] : [vs(t), null])[0])
                throw new ot(`An undefined value was given for plugin ${e}.`);
            if (!t[0].id)
                throw new ot(`Plugin ${e} has no id.`);
            return t
        }
        )),
        navbar: t=>!1 === t ? null : !0 === t ? q(ms.navbar) : "string" == typeof t ? t.split(/[ ,]/) : t
    }
      , gs = Mt(ms, fs)
      , ys = class extends Ge {
        constructor(t) {
            super(t, {
                className: "psv-caption",
                hoverScale: !1,
                collapsable: !1,
                tabbable: !0
            }),
            this.contentWidth = 0,
            this.state.width = 0,
            this.contentElt = document.createElement("div"),
            this.contentElt.className = "psv-caption-content",
            this.container.appendChild(this.contentElt),
            this.setCaption(this.viewer.config.caption)
        }
        hide() {
            this.contentElt.style.display = "none",
            this.state.visible = !1
        }
        show() {
            this.contentElt.style.display = "",
            this.state.visible = !0
        }
        onClick() {}
        setCaption(t) {
            this.show(),
            this.contentElt.innerHTML = t ?? "",
            this.contentElt.innerHTML ? this.contentWidth = this.contentElt.offsetWidth : this.contentWidth = 0,
            this.autoSize()
        }
        autoSize() {
            this.toggle(this.container.offsetWidth >= this.contentWidth),
            this.__refreshButton()
        }
        __refreshButton() {
            this.viewer.navbar.getButton(qe.id, !1)?.autoSize(!0)
        }
    }
    ;
    ys.id = "caption";
    var bs = {}
      , _s = {};
    function Es(t, e) {
        if (!t.id)
            throw new ot("Button id is required");
        if (bs[t.id] = t,
        t.groupId && (_s[t.groupId] = _s[t.groupId] || []).push(t),
        e) {
            const s = ms.navbar;
            switch (e) {
            case "start":
                s.unshift(t.id);
                break;
            case "end":
                s.push(t.id);
                break;
            default:
                {
                    const [i,o] = e.split(":")
                      , n = s.indexOf(i);
                    if (!i || !o || -1 === n)
                        throw new ot(`Invalid defaultPosition ${e}`);
                    s.splice(n + ("right" === o ? 1 : 0), 0, t.id)
                }
            }
        }
    }
    [cs, ls, hs, qe, ys, Qe, Je, os, ns, rs, is].forEach((t=>Es(t)));
    var Ts = class extends Ze {
        constructor(t) {
            super(t, {
                className: `psv-navbar ${_}`
            }),
            this.collapsed = [],
            this.state.visible = !1
        }
        show() {
            this.container.classList.add("psv-navbar--open"),
            this.state.visible = !0
        }
        hide() {
            this.container.classList.remove("psv-navbar--open"),
            this.state.visible = !1
        }
        setButtons(t) {
            this.children.slice().forEach((t=>t.destroy())),
            this.children.length = 0,
            -1 !== t.indexOf(ys.id) && -1 === t.indexOf(qe.id) && t.splice(t.indexOf(ys.id), 0, qe.id),
            t.forEach((t=>{
                "object" == typeof t ? new Ke(this,t) : bs[t] ? new bs[t](this) : _s[t] ? _s[t].forEach((t=>{
                    new t(this)
                }
                )) : ct(`Unknown button ${t}`)
            }
            )),
            new ts(this),
            this.children.forEach((t=>{
                t instanceof Ge && t.checkSupported()
            }
            )),
            this.autoSize()
        }
        setCaption(t) {
            this.children.some((e=>e instanceof ys && (e.setCaption(t),
            !0)))
        }
        getButton(t, e=!0) {
            const s = this.children.find((e=>e instanceof Ge && e.id === t));
            return !s && e && ct(`button "${t}" not found in the navbar`),
            s
        }
        autoSize() {
            this.children.forEach((t=>{
                t instanceof Ge && t.autoSize()
            }
            ));
            const t = this.container.offsetWidth;
            let e = 0;
            const s = [];
            this.children.forEach((t=>{
                t.isVisible() && t instanceof Ge && (e += t.width,
                t.collapsable && s.push(t))
            }
            )),
            0 !== e && (t < e && s.length > 0 ? (s.forEach((t=>t.collapse())),
            this.collapsed = s,
            this.getButton(ts.id).show(!1)) : t >= e && this.collapsed.length > 0 && (this.collapsed.forEach((t=>t.uncollapse())),
            this.collapsed = [],
            this.getButton(ts.id).hide(!1)),
            this.getButton(ys.id, !1)?.autoSize())
        }
    }
      , xs = class extends Ze {
        constructor(t) {
            super(t, {
                className: "psv-loader-container"
            }),
            this.loader = document.createElement("div"),
            this.loader.className = "psv-loader",
            this.container.appendChild(this.loader),
            this.size = this.loader.offsetWidth,
            this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            this.canvas.setAttribute("class", "psv-loader-canvas"),
            this.canvas.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`),
            this.loader.appendChild(this.canvas),
            this.textColor = j(this.loader, "color"),
            this.color = j(this.canvas, "color"),
            this.border = parseInt(j(this.loader, "outlineWidth"), 10),
            this.thickness = parseInt(j(this.canvas, "outlineWidth"), 10),
            this.viewer.addEventListener(Xt.type, this),
            this.__updateContent(),
            this.hide()
        }
        destroy() {
            this.viewer.removeEventListener(Xt.type, this),
            super.destroy()
        }
        handleEvent(t) {
            t instanceof Xt && t.containsOptions("loadingImg", "loadingTxt") && this.__updateContent()
        }
        setProgress(t) {
            const e = Math.min(t, 99.999) / 100 * Math.PI * 2
              , s = this.size / 2
              , i = s
              , o = this.thickness / 2 + this.border
              , n = (this.size - this.thickness) / 2 - this.border
              , r = Math.sin(e) * n + s
              , a = -Math.cos(e) * n + s
              , h = t > 50 ? "1" : "0";
            this.canvas.innerHTML = `\n            <circle cx="${s}" cy="${s}" r="${s}" fill="${this.color}"/>\n            <path d="M ${i} ${o} A ${n} ${n} 0 ${h} 1 ${r} ${a}" \n                  fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>\n        `,
            this.viewer.dispatchEvent(new he(Math.round(t)))
        }
        __updateContent() {
            const t = this.loader.querySelector(".psv-loader-image, .psv-loader-text");
            let e;
            if (t && this.loader.removeChild(t),
            this.viewer.config.loadingImg ? (e = document.createElement("img"),
            e.className = "psv-loader-image",
            e.src = this.viewer.config.loadingImg) : this.viewer.config.loadingTxt && (e = document.createElement("div"),
            e.className = "psv-loader-text",
            e.innerHTML = this.viewer.config.loadingTxt),
            e) {
                const t = Math.round(Math.sqrt(2 * Math.pow(this.size / 2 - this.thickness / 2 - this.border, 2)));
                e.style.maxWidth = t + "px",
                e.style.maxHeight = t + "px",
                this.loader.appendChild(e)
            }
        }
    }
      , Ms = class extends Ze {
        constructor(t) {
            super(t, {
                className: "psv-notification"
            }),
            this.state = {
                visible: !1,
                contentId: null,
                timeout: null
            },
            this.content = document.createElement("div"),
            this.content.className = "psv-notification-content",
            this.container.appendChild(this.content),
            this.content.addEventListener("click", (()=>this.hide()))
        }
        isVisible(t) {
            return this.state.visible && (!t || !this.state.contentId || this.state.contentId === t)
        }
        toggle() {
            throw new ot("Notification cannot be toggled")
        }
        show(t) {
            this.state.timeout && (clearTimeout(this.state.timeout),
            this.state.timeout = null),
            "string" == typeof t && (t = {
                content: t
            }),
            this.state.contentId = t.id || null,
            this.content.innerHTML = t.content,
            this.container.classList.add("psv-notification--visible"),
            this.state.visible = !0,
            this.viewer.dispatchEvent(new ge(t.id)),
            t.timeout && (this.state.timeout = setTimeout((()=>this.hide(this.state.contentId)), t.timeout))
        }
        hide(t) {
            if (this.isVisible(t)) {
                const t = this.state.contentId;
                this.container.classList.remove("psv-notification--visible"),
                this.state.visible = !1,
                this.state.contentId = null,
                this.viewer.dispatchEvent(new Qt(t))
            }
        }
    }
      , Os = class extends Ze {
        constructor(t) {
            super(t, {
                className: `psv-overlay ${_}`
            }),
            this.state = {
                visible: !1,
                contentId: null,
                dissmisable: !0
            },
            this.image = document.createElement("div"),
            this.image.className = "psv-overlay-image",
            this.container.appendChild(this.image),
            this.title = document.createElement("div"),
            this.title.className = "psv-overlay-title",
            this.container.appendChild(this.title),
            this.text = document.createElement("div"),
            this.text.className = "psv-overlay-text",
            this.container.appendChild(this.text),
            this.container.addEventListener("click", this),
            this.viewer.addEventListener(re.type, this),
            super.hide()
        }
        destroy() {
            this.viewer.removeEventListener(re.type, this),
            super.destroy()
        }
        handleEvent(t) {
            "click" === t.type ? this.isVisible() && this.state.dissmisable && (this.hide(),
            t.stopPropagation()) : t instanceof re && this.isVisible() && this.state.dissmisable && t.key === x.Escape && (this.hide(),
            t.preventDefault())
        }
        isVisible(t) {
            return this.state.visible && (!t || !this.state.contentId || this.state.contentId === t)
        }
        toggle() {
            throw new ot("Overlay cannot be toggled")
        }
        show(t) {
            "string" == typeof t && (t = {
                title: t
            }),
            this.state.contentId = t.id || null,
            this.state.dissmisable = !1 !== t.dissmisable,
            this.image.innerHTML = t.image || "",
            this.title.innerHTML = t.title || "",
            this.text.innerHTML = t.text || "",
            super.show(),
            this.viewer.dispatchEvent(new be(t.id))
        }
        hide(t) {
            if (this.isVisible(t)) {
                const t = this.state.contentId;
                super.hide(),
                this.state.contentId = null,
                this.viewer.dispatchEvent(new te(t))
            }
        }
    }
      , Ls = "psv-panel-content--no-interaction"
      , Cs = class extends Ze {
        constructor(t) {
            super(t, {
                className: `psv-panel ${_}`
            }),
            this.state = {
                visible: !1,
                contentId: null,
                mouseX: 0,
                mouseY: 0,
                mousedown: !1,
                clickHandler: null,
                keyHandler: null,
                width: {}
            };
            const e = document.createElement("div");
            e.className = "psv-panel-resizer",
            this.container.appendChild(e);
            const s = document.createElement("div");
            s.className = "psv-panel-close-button",
            s.innerHTML = M.close,
            s.title = t.config.lang.close,
            this.container.appendChild(s),
            this.content = document.createElement("div"),
            this.content.className = "psv-panel-content",
            this.container.appendChild(this.content),
            this.container.addEventListener("wheel", (t=>t.stopPropagation())),
            s.addEventListener("click", (()=>this.hide())),
            e.addEventListener("mousedown", this),
            e.addEventListener("touchstart", this),
            this.viewer.container.addEventListener("mouseup", this),
            this.viewer.container.addEventListener("touchend", this),
            this.viewer.container.addEventListener("mousemove", this),
            this.viewer.container.addEventListener("touchmove", this),
            this.viewer.addEventListener(re.type, this)
        }
        destroy() {
            this.viewer.removeEventListener(re.type, this),
            this.viewer.container.removeEventListener("mousemove", this),
            this.viewer.container.removeEventListener("touchmove", this),
            this.viewer.container.removeEventListener("mouseup", this),
            this.viewer.container.removeEventListener("touchend", this),
            super.destroy()
        }
        handleEvent(t) {
            switch (t.type) {
            case "mousedown":
                this.__onMouseDown(t);
                break;
            case "touchstart":
                this.__onTouchStart(t);
                break;
            case "mousemove":
                this.__onMouseMove(t);
                break;
            case "touchmove":
                this.__onTouchMove(t);
                break;
            case "mouseup":
                this.__onMouseUp(t);
                break;
            case "touchend":
                this.__onTouchEnd(t);
                break;
            case re.type:
                this.__onKeyPress(t)
            }
        }
        isVisible(t) {
            return this.state.visible && (!t || !this.state.contentId || this.state.contentId === t)
        }
        toggle() {
            throw new ot("Panel cannot be toggled")
        }
        show(t) {
            "string" == typeof t && (t = {
                content: t
            });
            const e = this.isVisible(t.id);
            this.state.contentId = t.id || null,
            this.state.visible = !0,
            this.state.clickHandler && (this.content.removeEventListener("click", this.state.clickHandler),
            this.content.removeEventListener("keydown", this.state.keyHandler),
            this.state.clickHandler = null,
            this.state.keyHandler = null),
            t.id && this.state.width[t.id] ? this.container.style.width = this.state.width[t.id] : t.width ? this.container.style.width = t.width : this.container.style.width = null,
            this.content.innerHTML = t.content,
            this.content.scrollTop = 0,
            this.container.classList.add("psv-panel--open"),
            A(this.content, "psv-panel-content--no-margin", !0 === t.noMargin),
            t.clickHandler && (this.state.clickHandler = e=>{
                t.clickHandler(e.target)
            }
            ,
            this.state.keyHandler = e=>{
                e.key === x.Enter && t.clickHandler(e.target)
            }
            ,
            this.content.addEventListener("click", this.state.clickHandler),
            this.content.addEventListener("keydown", this.state.keyHandler),
            e || setTimeout((()=>{
                this.content.querySelector("a,button,[tabindex]")?.focus()
            }
            ), 300)),
            this.viewer.dispatchEvent(new Ee(t.id))
        }
        hide(t) {
            if (this.isVisible(t)) {
                const t = this.state.contentId;
                this.state.visible = !1,
                this.state.contentId = null,
                this.content.innerHTML = null,
                this.container.classList.remove("psv-panel--open"),
                this.state.clickHandler && (this.content.removeEventListener("click", this.state.clickHandler),
                this.state.clickHandler = null),
                this.viewer.dispatchEvent(new se(t))
            }
        }
        __onMouseDown(t) {
            t.stopPropagation(),
            this.__startResize(t.clientX, t.clientY)
        }
        __onTouchStart(t) {
            if (t.stopPropagation(),
            1 === t.touches.length) {
                const e = t.touches[0];
                this.__startResize(e.clientX, e.clientY)
            }
        }
        __onMouseUp(t) {
            this.state.mousedown && (t.stopPropagation(),
            this.state.mousedown = !1,
            this.content.classList.remove(Ls))
        }
        __onTouchEnd(t) {
            this.state.mousedown && (t.stopPropagation(),
            0 === t.touches.length && (this.state.mousedown = !1,
            this.content.classList.remove(Ls)))
        }
        __onMouseMove(t) {
            this.state.mousedown && (t.stopPropagation(),
            this.__resize(t.clientX, t.clientY))
        }
        __onTouchMove(t) {
            if (this.state.mousedown) {
                const e = t.touches[0];
                this.__resize(e.clientX, e.clientY)
            }
        }
        __onKeyPress(t) {
            this.isVisible() && t.key === x.Escape && (this.hide(),
            t.preventDefault())
        }
        __startResize(t, e) {
            this.state.mouseX = t,
            this.state.mouseY = e,
            this.state.mousedown = !0,
            this.content.classList.add(Ls)
        }
        __resize(t, e) {
            const s = t
              , i = e
              , o = Math.max(200, this.container.offsetWidth - (s - this.state.mouseX)) + "px";
            this.state.contentId && (this.state.width[this.state.contentId] = o),
            this.container.style.width = o,
            this.state.mouseX = s,
            this.state.mouseY = i
        }
    }
      , ks = class extends Ze {
        constructor(t, e) {
            super(t, {
                className: "psv-tooltip"
            }),
            this.state = {
                visible: !0,
                arrow: 0,
                border: 0,
                state: 0,
                width: 0,
                height: 0,
                pos: "",
                config: null,
                data: null
            },
            this.content = document.createElement("div"),
            this.content.className = "psv-tooltip-content",
            this.container.appendChild(this.content),
            this.arrow = document.createElement("div"),
            this.arrow.className = "psv-tooltip-arrow",
            this.container.appendChild(this.arrow),
            this.container.addEventListener("transitionend", this),
            this.container.style.top = "-1000px",
            this.container.style.left = "-1000px",
            this.show(e)
        }
        handleEvent(t) {
            "transitionend" === t.type && this.__onTransitionEnd(t)
        }
        destroy() {
            delete this.state.data,
            super.destroy()
        }
        toggle() {
            throw new ot("Tooltip cannot be toggled")
        }
        show(t) {
            if (0 !== this.state.state)
                throw new ot("Initialized tooltip cannot be re-initialized");
            t.className && N(this.container, t.className),
            this.state.state = 3,
            this.update(t.content, t),
            this.state.data = t.data,
            this.state.state = 1,
            this.viewer.dispatchEvent(new xe(this,this.state.data)),
            this.__waitImages()
        }
        update(t, e) {
            this.content.innerHTML = t;
            const s = this.container.getBoundingClientRect();
            this.state.width = s.right - s.left,
            this.state.height = s.bottom - s.top,
            this.state.arrow = parseInt(j(this.arrow, "borderTopWidth"), 10),
            this.state.border = parseInt(j(this.container, "borderTopLeftRadius"), 10),
            this.move(e ?? this.state.config)
        }
        move(t) {
            if (1 !== this.state.state && 3 !== this.state.state)
                throw new ot("Uninitialized tooltip cannot be moved");
            t.box || (t.box = {
                width: 0,
                height: 0
            }),
            this.state.config = t;
            const e = this.container
              , s = this.arrow
              , i = {
                posClass: gt(t.position, {
                    allowCenter: !1,
                    cssOrder: !1
                }) || ["top", "center"],
                width: this.state.width,
                height: this.state.height,
                top: 0,
                left: 0,
                arrowTop: 0,
                arrowLeft: 0
            };
            this.__computeTooltipPosition(i, t);
            let o = null
              , n = null;
            if (i.top < 0 ? o = "bottom" : i.top + i.height > this.viewer.state.size.height && (o = "top"),
            i.left < 0 ? n = "right" : i.left + i.width > this.viewer.state.size.width && (n = "left"),
            n || o) {
                const e = yt(i.posClass);
                o && (i.posClass[e ? 0 : 1] = o),
                n && (i.posClass[e ? 1 : 0] = n),
                this.__computeTooltipPosition(i, t)
            }
            e.style.top = i.top + "px",
            e.style.left = i.left + "px",
            s.style.top = i.arrowTop + "px",
            s.style.left = i.arrowLeft + "px";
            const r = i.posClass.join("-");
            r !== this.state.pos && (e.classList.remove(`psv-tooltip--${this.state.pos}`),
            this.state.pos = r,
            e.classList.add(`psv-tooltip--${this.state.pos}`))
        }
        hide() {
            this.container.classList.remove("psv-tooltip--visible"),
            this.state.state = 2,
            this.viewer.dispatchEvent(new oe(this.state.data))
        }
        __onTransitionEnd(t) {
            if ("transform" === t.propertyName)
                switch (this.state.state) {
                case 1:
                    this.container.classList.add("psv-tooltip--visible"),
                    this.state.state = 3;
                    break;
                case 2:
                    this.state.state = 0,
                    this.destroy()
                }
        }
        __computeTooltipPosition(t, e) {
            const s = this.state.arrow
              , i = e.top
              , o = t.height
              , n = e.left
              , r = t.width
              , a = s + this.state.border
              , h = e.box.width / 2 + 2 * s
              , c = e.box.height / 2 + 2 * s;
            switch (t.posClass.join("-")) {
            case "top-left":
                t.top = i - c - o,
                t.left = n + a - r,
                t.arrowTop = o,
                t.arrowLeft = r - a - s;
                break;
            case "top-center":
                t.top = i - c - o,
                t.left = n - r / 2,
                t.arrowTop = o,
                t.arrowLeft = r / 2 - s;
                break;
            case "top-right":
                t.top = i - c - o,
                t.left = n - a,
                t.arrowTop = o,
                t.arrowLeft = s;
                break;
            case "bottom-left":
                t.top = i + c,
                t.left = n + a - r,
                t.arrowTop = 2 * -s,
                t.arrowLeft = r - a - s;
                break;
            case "bottom-center":
                t.top = i + c,
                t.left = n - r / 2,
                t.arrowTop = 2 * -s,
                t.arrowLeft = r / 2 - s;
                break;
            case "bottom-right":
                t.top = i + c,
                t.left = n - a,
                t.arrowTop = 2 * -s,
                t.arrowLeft = s;
                break;
            case "left-top":
                t.top = i + a - o,
                t.left = n - h - r,
                t.arrowTop = o - a - s,
                t.arrowLeft = r;
                break;
            case "center-left":
                t.top = i - o / 2,
                t.left = n - h - r,
                t.arrowTop = o / 2 - s,
                t.arrowLeft = r;
                break;
            case "left-bottom":
                t.top = i - a,
                t.left = n - h - r,
                t.arrowTop = s,
                t.arrowLeft = r;
                break;
            case "right-top":
                t.top = i + a - o,
                t.left = n + h,
                t.arrowTop = o - a - s,
                t.arrowLeft = 2 * -s;
                break;
            case "center-right":
                t.top = i - o / 2,
                t.left = n + h,
                t.arrowTop = o / 2 - s,
                t.arrowLeft = 2 * -s;
                break;
            case "right-bottom":
                t.top = i - a,
                t.left = n + h,
                t.arrowTop = s,
                t.arrowLeft = 2 * -s
            }
        }
        __waitImages() {
            const t = this.content.querySelectorAll("img");
            if (t.length > 0) {
                const e = [];
                t.forEach((t=>{
                    e.push(new Promise((e=>{
                        t.onload = e,
                        t.onerror = e
                    }
                    )))
                }
                )),
                Promise.all(e).then((()=>{
                    if (1 === this.state.state || 3 === this.state.state) {
                        const t = this.container.getBoundingClientRect();
                        this.state.width = t.right - t.left,
                        this.state.height = t.bottom - t.top,
                        this.move(this.state.config)
                    }
                }
                ))
            }
        }
    }
      , Is = a()
      , Ss = class {
        constructor(t) {
            this.viewer = t,
            this.config = t.config,
            this.state = t.state
        }
        destroy() {}
    }
      , Ps = new Is.Vector3
      , Rs = new Is.Euler(0,0,0,"ZXY")
      , zs = class extends Ss {
        constructor(t) {
            super(t)
        }
        fovToZoomLevel(t) {
            const e = Math.round((t - this.config.minFov) / (this.config.maxFov - this.config.minFov) * 100);
            return e - 2 * (e - 50)
        }
        zoomLevelToFov(t) {
            return this.config.maxFov + t / 100 * (this.config.minFov - this.config.maxFov)
        }
        vFovToHFov(t) {
            return Is.MathUtils.radToDeg(2 * Math.atan(Math.tan(Is.MathUtils.degToRad(t) / 2) * this.state.aspect))
        }
        speedToDuration(t, e) {
            if ("number" != typeof t) {
                const s = bt(t);
                return e / Math.abs(s) * 1e3
            }
            return Math.abs(t)
        }
        textureCoordsToSphericalCoords(t) {
            const e = this.state.panoData;
            if (!e)
                throw new ot("Current adapter does not support texture coordinates.");
            const s = (t.textureX + e.croppedX) / e.fullWidth * Math.PI * 2
              , i = (t.textureY + e.croppedY) / e.fullHeight * Math.PI
              , o = {
                yaw: s >= Math.PI ? s - Math.PI : s + Math.PI,
                pitch: Math.PI / 2 - i
            };
            return Rs.equals(this.viewer.renderer.panoramaPose) && Rs.equals(this.viewer.renderer.sphereCorrection) ? o : (this.sphericalCoordsToVector3(o, Ps),
            Ps.applyEuler(this.viewer.renderer.panoramaPose),
            Ps.applyEuler(this.viewer.renderer.sphereCorrection),
            this.vector3ToSphericalCoords(Ps))
        }
        sphericalCoordsToTextureCoords(t) {
            const e = this.state.panoData;
            if (!e)
                throw new ot("Current adapter does not support texture coordinates.");
            Rs.equals(this.viewer.renderer.panoramaPose) && Rs.equals(this.viewer.renderer.sphereCorrection) || (this.sphericalCoordsToVector3(t, Ps),
            xt(Ps, this.viewer.renderer.sphereCorrection),
            xt(Ps, this.viewer.renderer.panoramaPose),
            t = this.vector3ToSphericalCoords(Ps));
            const s = t.yaw / Math.PI / 2 * e.fullWidth
              , i = t.pitch / Math.PI * e.fullHeight;
            return {
                textureX: Math.round(t.yaw < Math.PI ? s + e.fullWidth / 2 : s - e.fullWidth / 2) - e.croppedX,
                textureY: Math.round(e.fullHeight / 2 - i) - e.croppedY
            }
        }
        sphericalCoordsToVector3(t, e) {
            return e || (e = new Is.Vector3),
            e.x = y * -Math.cos(t.pitch) * Math.sin(t.yaw),
            e.y = y * Math.sin(t.pitch),
            e.z = y * Math.cos(t.pitch) * Math.cos(t.yaw),
            e
        }
        vector3ToSphericalCoords(t) {
            const e = Math.acos(t.y / Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z))
              , s = Math.atan2(t.x, t.z);
            return {
                yaw: s < 0 ? -s : 2 * Math.PI - s,
                pitch: Math.PI / 2 - e
            }
        }
        viewerCoordsToVector3(t) {
            const e = this.viewer.renderer.getIntersections(t).filter((t=>t.object.userData[b]));
            return e.length ? e[0].point : null
        }
        viewerCoordsToSphericalCoords(t) {
            const e = this.viewerCoordsToVector3(t);
            return e ? this.vector3ToSphericalCoords(e) : null
        }
        vector3ToViewerCoords(t) {
            const e = t.clone();
            return e.project(this.viewer.renderer.camera),
            {
                x: Math.round((e.x + 1) / 2 * this.state.size.width),
                y: Math.round((1 - e.y) / 2 * this.state.size.height)
            }
        }
        sphericalCoordsToViewerCoords(t) {
            return this.sphericalCoordsToVector3(t, Ps),
            this.vector3ToViewerCoords(Ps)
        }
        cleanPosition(t) {
            return void 0 !== t.textureX && void 0 !== t.textureY ? this.textureCoordsToSphericalCoords(t) : {
                yaw: _t(t.yaw),
                pitch: _t(t.pitch, !this.state.littlePlanet)
            }
        }
        cleanSphereCorrection(t) {
            return {
                pan: _t(t?.pan || 0),
                tilt: _t(t?.tilt || 0, !0),
                roll: _t(t?.roll || 0, !0, !1)
            }
        }
        cleanPanoramaPose(t) {
            return {
                pan: Is.MathUtils.degToRad(t?.poseHeading || 0),
                tilt: Is.MathUtils.degToRad(t?.posePitch || 0),
                roll: Is.MathUtils.degToRad(t?.poseRoll || 0)
            }
        }
    }
      , Hs = a()
      , As = class t {
        constructor() {
            this.$ = t.IDLE
        }
        is(...t) {
            return t.some((t=>this.$ & t))
        }
        set(t) {
            this.$ = t
        }
        add(t) {
            this.$ |= t
        }
        remove(t) {
            this.$ &= ~t
        }
    }
    ;
    As.IDLE = 0,
    As.CLICK = 1,
    As.MOVING = 2,
    As.INERTIA = 4;
    var Ns = As
      , Us = class extends Ss {
        constructor(t) {
            super(t),
            this.data = {
                startMouseX: 0,
                startMouseY: 0,
                mouseX: 0,
                mouseY: 0,
                mouseHistory: [],
                pinchDist: 0,
                ctrlKeyDown: !1,
                dblclickData: null,
                dblclickTimeout: null,
                longtouchTimeout: null,
                twofingersTimeout: null,
                ctrlZoomTimeout: null
            },
            this.step = new Ns,
            this.keyHandler = new It,
            this.resizeObserver = new ResizeObserver(B((()=>this.viewer.autoSize()), 50)),
            this.moveThreshold = p * Ye.pixelRatio,
            window.wubbalubbadubdub = this
        }
        init() {
            window.addEventListener("keydown", this, {
                passive: !1
            }),
            window.addEventListener("keyup", this),
            this.viewer.container.addEventListener("mousedown", this),
            window.addEventListener("mousemove", this, {
                passive: !1
            }),
            window.addEventListener("mouseup", this),
            this.viewer.container.addEventListener("touchstart", this, {
                passive: !1
            }),
            window.addEventListener("touchmove", this, {
                passive: !1
            }),
            window.addEventListener("touchend", this, {
                passive: !1
            }),
            this.viewer.container.addEventListener("wheel", this, {
                passive: !1
            }),
            document.addEventListener(Ye.fullscreenEvent, this),
            this.resizeObserver.observe(this.viewer.container)
        }
        destroy() {
            window.removeEventListener("keydown", this),
            window.removeEventListener("keyup", this),
            this.viewer.container.removeEventListener("mousedown", this),
            window.removeEventListener("mousemove", this),
            window.removeEventListener("mouseup", this),
            this.viewer.container.removeEventListener("touchstart", this),
            window.removeEventListener("touchmove", this),
            window.removeEventListener("touchend", this),
            this.viewer.container.removeEventListener("wheel", this),
            document.removeEventListener(Ye.fullscreenEvent, this),
            this.resizeObserver.disconnect(),
            clearTimeout(this.data.dblclickTimeout),
            clearTimeout(this.data.longtouchTimeout),
            clearTimeout(this.data.twofingersTimeout),
            clearTimeout(this.data.ctrlZoomTimeout),
            super.destroy()
        }
        handleEvent(t) {
            switch (t.type) {
            case "keydown":
                this.__onKeyDown(t);
                break;
            case "keyup":
                this.__onKeyUp();
                break;
            case "mousemove":
                this.__onMouseMove(t);
                break;
            case "mouseup":
                this.__onMouseUp(t);
                break;
            case "touchmove":
                this.__onTouchMove(t);
                break;
            case "touchend":
                this.__onTouchEnd(t);
                break;
            case Ye.fullscreenEvent:
                this.__onFullscreenChange()
            }
            if (!F(t.target, "." + _))
                switch (t.type) {
                case "mousedown":
                    this.__onMouseDown(t);
                    break;
                case "touchstart":
                    this.__onTouchStart(t);
                    break;
                case "wheel":
                    this.__onMouseWheel(t)
                }
        }
        __onKeyDown(t) {
            if (this.config.mousewheelCtrlKey && (this.data.ctrlKeyDown = t.key === x.Control,
            this.data.ctrlKeyDown && (clearTimeout(this.data.ctrlZoomTimeout),
            this.viewer.overlay.hide(T.CTRL_ZOOM))),
            !this.viewer.dispatchEvent(new re(t.key)))
                return;
            if (!this.state.keyboardEnabled)
                return;
            const e = this.config.keyboardActions?.[t.key];
            if ("function" == typeof e)
                e(this.viewer),
                t.preventDefault();
            else if (e && !this.keyHandler.pending) {
                switch ("ZOOM_IN" !== e && "ZOOM_OUT" !== e && this.viewer.stopAll(),
                e) {
                case "ROTATE_UP":
                    this.viewer.dynamics.position.roll({
                        pitch: !1
                    });
                    break;
                case "ROTATE_DOWN":
                    this.viewer.dynamics.position.roll({
                        pitch: !0
                    });
                    break;
                case "ROTATE_RIGHT":
                    this.viewer.dynamics.position.roll({
                        yaw: !1
                    });
                    break;
                case "ROTATE_LEFT":
                    this.viewer.dynamics.position.roll({
                        yaw: !0
                    });
                    break;
                case "ZOOM_IN":
                    this.viewer.dynamics.zoom.roll(!1);
                    break;
                case "ZOOM_OUT":
                    this.viewer.dynamics.zoom.roll(!0)
                }
                this.keyHandler.down(),
                t.preventDefault()
            }
        }
        __onKeyUp() {
            this.data.ctrlKeyDown = !1,
            this.state.keyboardEnabled && this.keyHandler.up((()=>{
                this.viewer.dynamics.position.stop(),
                this.viewer.dynamics.zoom.stop(),
                this.viewer.resetIdleTimer()
            }
            ))
        }
        __onMouseDown(t) {
            this.step.add(Ns.CLICK),
            this.data.startMouseX = t.clientX,
            this.data.startMouseY = t.clientY
        }
        __onMouseUp(t) {
            this.step.is(Ns.CLICK, Ns.MOVING) && this.__stopMove(t.clientX, t.clientY, t.target, 2 === t.button)
        }
        __onMouseMove(t) {
            this.config.mousemove && this.step.is(Ns.CLICK, Ns.MOVING) && (t.preventDefault(),
            this.__doMove(t.clientX, t.clientY)),
            this.__handleObjectsEvents(t)
        }
        __onTouchStart(t) {
            1 === t.touches.length ? (this.step.add(Ns.CLICK),
            this.data.startMouseX = t.touches[0].clientX,
            this.data.startMouseY = t.touches[0].clientY,
            this.data.longtouchTimeout || (this.data.longtouchTimeout = setTimeout((()=>{
                const e = t.touches[0];
                this.__stopMove(e.clientX, e.clientY, e.target, !0),
                this.data.longtouchTimeout = null
            }
            ), m))) : 2 === t.touches.length && (this.step.set(Ns.IDLE),
            this.__cancelLongTouch(),
            this.config.mousemove && (this.__cancelTwoFingersOverlay(),
            this.__startMoveZoom(t),
            t.preventDefault()))
        }
        __onTouchEnd(t) {
            if (this.__cancelLongTouch(),
            this.step.is(Ns.CLICK, Ns.MOVING))
                if (t.preventDefault(),
                this.__cancelTwoFingersOverlay(),
                1 === t.touches.length)
                    this.__stopMove(this.data.mouseX, this.data.mouseY);
                else if (0 === t.touches.length) {
                    const e = t.changedTouches[0];
                    this.__stopMove(e.clientX, e.clientY, e.target)
                }
        }
        __onTouchMove(t) {
            if (this.__cancelLongTouch(),
            this.config.mousemove)
                if (1 === t.touches.length) {
                    if (this.config.touchmoveTwoFingers)
                        this.step.is(Ns.CLICK) && !this.data.twofingersTimeout && (this.data.twofingersTimeout = setTimeout((()=>{
                            this.viewer.overlay.show({
                                id: T.TWO_FINGERS,
                                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/>\x3c!--Created by AomAm from the Noun Project--\x3e</svg>\n',
                                title: this.config.lang.twoFingers
                            })
                        }
                        ), w));
                    else if (this.step.is(Ns.CLICK, Ns.MOVING)) {
                        t.preventDefault();
                        const e = t.touches[0];
                        this.__doMove(e.clientX, e.clientY)
                    }
                } else
                    this.__doMoveZoom(t),
                    this.__cancelTwoFingersOverlay()
        }
        __cancelLongTouch() {
            this.data.longtouchTimeout && (clearTimeout(this.data.longtouchTimeout),
            this.data.longtouchTimeout = null)
        }
        __cancelTwoFingersOverlay() {
            this.config.touchmoveTwoFingers && (this.data.twofingersTimeout && (clearTimeout(this.data.twofingersTimeout),
            this.data.twofingersTimeout = null),
            this.viewer.overlay.hide(T.TWO_FINGERS))
        }
        __onMouseWheel(t) {
            if (!this.config.mousewheel || !t.deltaY)
                return;
            if (this.config.mousewheelCtrlKey && !this.data.ctrlKeyDown)
                return this.viewer.overlay.show({
                    id: T.CTRL_ZOOM,
                    image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/>\x3c!-- Created by Icon Island from the Noun Project --\x3e</svg>\n',
                    title: this.config.lang.ctrlZoom
                }),
                clearTimeout(this.data.ctrlZoomTimeout),
                void (this.data.ctrlZoomTimeout = setTimeout((()=>this.viewer.overlay.hide(T.CTRL_ZOOM)), f));
            t.preventDefault(),
            t.stopPropagation();
            const e = t.deltaY / Math.abs(t.deltaY) * 5 * this.config.zoomSpeed;
            0 !== e && this.viewer.dynamics.zoom.step(-e, 5)
        }
        __onFullscreenChange() {
            const t = this.viewer.isFullscreenEnabled();
            "fullscreen" === this.config.keyboard && (t ? this.viewer.startKeyboardControl() : this.viewer.stopKeyboardControl()),
            this.viewer.dispatchEvent(new Kt(t))
        }
        __resetMove() {
            this.step.set(Ns.IDLE),
            this.data.mouseX = 0,
            this.data.mouseY = 0,
            this.data.startMouseX = 0,
            this.data.startMouseY = 0,
            this.data.mouseHistory.length = 0
        }
        __startMoveZoom(t) {
            this.viewer.stopAll(),
            this.__resetMove();
            const e = W(t);
            this.step.set(Ns.MOVING),
            ({distance: this.data.pinchDist, center: {x: this.data.mouseX, y: this.data.mouseY}} = e),
            this.__logMouseMove(this.data.mouseX, this.data.mouseY)
        }
        __stopMove(t, e, s, i=!1) {
            this.step.is(Ns.MOVING) ? this.config.moveInertia ? (this.__logMouseMove(t, e),
            this.__stopMoveInertia(t, e)) : (this.__resetMove(),
            this.viewer.resetIdleTimer()) : (this.step.is(Ns.CLICK) && !this.__moveThresholdReached(t, e) && this.__doClick(t, e, s, i),
            this.step.remove(Ns.CLICK),
            this.step.is(Ns.INERTIA) || (this.__resetMove(),
            this.viewer.resetIdleTimer()))
        }
        __stopMoveInertia(t, e) {
            const s = new Hs.SplineCurve(this.data.mouseHistory.map((([,t,e])=>new Hs.Vector2(t,e)))).getTangent(1)
              , i = this.data.mouseHistory.reduce((({total: t, prev: e},s)=>({
                total: e ? t + I({
                    x: e[1],
                    y: e[2]
                }, {
                    x: s[1],
                    y: s[2]
                }) / (s[0] - e[0]) : 0,
                prev: s
            })), {
                total: 0,
                prev: null
            }).total / this.data.mouseHistory.length;
            if (!i)
                return this.__resetMove(),
                void this.viewer.resetIdleTimer();
            this.step.set(Ns.INERTIA);
            let o = t
              , n = e;
            this.state.animation = new Ot({
                properties: {
                    speed: {
                        start: i,
                        end: 0
                    }
                },
                duration: 1e3,
                easing: "outQuad",
                onTick: t=>{
                    o += t.speed * s.x * 3 * Ye.pixelRatio,
                    n += t.speed * s.y * 3 * Ye.pixelRatio,
                    this.__applyMove(o, n)
                }
            }),
            this.state.animation.then((t=>{
                this.state.animation = null,
                t && (this.__resetMove(),
                this.viewer.resetIdleTimer())
            }
            ))
        }
        __doClick(t, e, s, i=!1) {
            const o = this.viewer.container.getBoundingClientRect()
              , n = t - o.left
              , r = e - o.top
              , a = this.viewer.renderer.getIntersections({
                x: n,
                y: r
            })
              , h = a.find((t=>t.object.userData[b]));
            if (h) {
                const o = this.viewer.dataHelper.vector3ToSphericalCoords(h.point)
                  , c = {
                    rightclick: i,
                    target: s,
                    clientX: t,
                    clientY: e,
                    viewerX: n,
                    viewerY: r,
                    yaw: o.yaw,
                    pitch: o.pitch,
                    objects: a.map((t=>t.object)).filter((t=>!t.userData[b]))
                };
                try {
                    const t = this.viewer.dataHelper.sphericalCoordsToTextureCoords(c);
                    c.textureX = t.textureX,
                    c.textureY = t.textureY
                } catch (t) {
                    c.textureX = NaN,
                    c.textureY = NaN
                }
                this.data.dblclickTimeout ? (Math.abs(this.data.dblclickData.clientX - c.clientX) < this.moveThreshold && Math.abs(this.data.dblclickData.clientY - c.clientY) < this.moveThreshold && this.viewer.dispatchEvent(new Bt(this.data.dblclickData)),
                clearTimeout(this.data.dblclickTimeout),
                this.data.dblclickTimeout = null,
                this.data.dblclickData = null) : (this.viewer.dispatchEvent(new Yt(c)),
                this.data.dblclickData = q(c),
                this.data.dblclickTimeout = setTimeout((()=>{
                    this.data.dblclickTimeout = null,
                    this.data.dblclickData = null
                }
                ), v))
            }
        }
        __handleObjectsEvents(t) {
            if (!Q(this.state.objectsObservers) && D(t.target, this.viewer.container)) {
                const e = V(this.viewer.container)
                  , s = {
                    x: t.clientX - e.x,
                    y: t.clientY - e.y
                }
                  , i = this.viewer.renderer.getIntersections(s)
                  , o = (e,i,o)=>{
                    this.viewer.dispatchEvent(new o(t,e,s,i))
                }
                ;
                for (const [t,e] of Object.entries(this.state.objectsObservers)) {
                    const s = i.find((e=>e.object.userData[t]));
                    s ? (e && s.object !== e && (o(e, t, He),
                    this.state.objectsObservers[t] = null),
                    e ? o(s.object, t, Ne) : (this.state.objectsObservers[t] = s.object,
                    o(s.object, t, Re))) : e && (o(e, t, He),
                    this.state.objectsObservers[t] = null)
                }
            }
        }
        __doMove(t, e) {
            this.step.is(Ns.CLICK) && this.__moveThresholdReached(t, e) ? (this.viewer.stopAll(),
            this.__resetMove(),
            this.step.set(Ns.MOVING),
            this.data.mouseX = t,
            this.data.mouseY = e,
            this.__logMouseMove(t, e)) : this.step.is(Ns.MOVING) && (this.__applyMove(t, e),
            this.__logMouseMove(t, e))
        }
        __moveThresholdReached(t, e) {
            return Math.abs(t - this.data.startMouseX) >= this.moveThreshold || Math.abs(e - this.data.startMouseY) >= this.moveThreshold
        }
        __applyMove(t, e) {
            const s = this.config.moveSpeed * ((t - this.data.mouseX) / this.state.size.width) * Hs.MathUtils.degToRad(this.state.littlePlanet ? 90 : this.state.hFov)
              , i = this.config.moveSpeed * ((e - this.data.mouseY) / this.state.size.height) * Hs.MathUtils.degToRad(this.state.littlePlanet ? 90 : this.state.vFov)
              , o = this.viewer.getPosition();
            this.viewer.rotate({
                yaw: o.yaw - s,
                pitch: o.pitch + i
            }),
            this.data.mouseX = t,
            this.data.mouseY = e
        }
        __doMoveZoom(t) {
            if (this.step.is(Ns.MOVING)) {
                t.preventDefault();
                const e = W(t)
                  , s = (e.distance - this.data.pinchDist) / Ye.pixelRatio * this.config.zoomSpeed;
                this.viewer.zoom(this.viewer.getZoomLevel() + s),
                this.__doMove(e.center.x, e.center.y),
                this.data.pinchDist = e.distance
            }
        }
        __logMouseMove(t, e) {
            const s = Date.now()
              , i = this.data.mouseHistory.length ? this.data.mouseHistory[this.data.mouseHistory.length - 1] : [0, -1, -1];
            i[1] === t && i[2] === e ? i[0] = s : s === i[0] ? (i[1] = t,
            i[2] = e) : this.data.mouseHistory.push([s, t, e]);
            let o = null;
            for (let t = 0; t < this.data.mouseHistory.length; )
                this.data.mouseHistory[t][0] < s - g ? this.data.mouseHistory.splice(t, 1) : o && this.data.mouseHistory[t][0] - o > g / 10 ? (this.data.mouseHistory.splice(0, t),
                t = 0,
                o = this.data.mouseHistory[t][0]) : (o = this.data.mouseHistory[t][0],
                t++)
        }
    }
      , Ds = a()
      , Fs = new Ds.Vector2
      , Vs = class extends Ss {
        constructor(t) {
            super(t),
            this.renderer = new Ds.WebGLRenderer({
                alpha: !0,
                antialias: !0
            }),
            this.renderer.setPixelRatio(Ye.pixelRatio),
            this.renderer.outputColorSpace = Ds.LinearSRGBColorSpace,
            this.renderer.domElement.className = "psv-canvas",
            this.scene = new Ds.Scene,
            this.camera = new Ds.PerspectiveCamera(50,16 / 9,.1,2 * y),
            this.mesh = this.viewer.adapter.createMesh(),
            this.mesh.userData = {
                [b]: !0
            },
            this.meshContainer = new Ds.Group,
            this.meshContainer.add(this.mesh),
            this.scene.add(this.meshContainer),
            this.raycaster = new Ds.Raycaster,
            this.container = document.createElement("div"),
            this.container.className = "psv-canvas-container",
            this.container.style.background = this.config.canvasBackground,
            this.container.appendChild(this.renderer.domElement),
            this.viewer.container.appendChild(this.container),
            this.viewer.addEventListener(Oe.type, this),
            this.viewer.addEventListener(Ie.type, this),
            this.viewer.addEventListener(ue.type, this),
            this.viewer.addEventListener(Xt.type, this),
            this.hide()
        }
        get panoramaPose() {
            return this.mesh.rotation
        }
        get sphereCorrection() {
            return this.meshContainer.rotation
        }
        init() {
            this.config.mousemove && (this.container.style.cursor = "move"),
            this.show(),
            this.renderer.setAnimationLoop((t=>this.__renderLoop(t)))
        }
        destroy() {
            this.renderer.setAnimationLoop(null),
            this.cleanScene(this.scene),
            this.viewer.container.removeChild(this.container),
            this.viewer.removeEventListener(Oe.type, this),
            this.viewer.removeEventListener(Ie.type, this),
            this.viewer.removeEventListener(ue.type, this),
            this.viewer.removeEventListener(Xt.type, this),
            super.destroy()
        }
        handleEvent(t) {
            switch (t.type) {
            case Oe.type:
                this.__onSizeUpdated();
                break;
            case Ie.type:
                this.__onZoomUpdated();
                break;
            case ue.type:
                this.__onPositionUpdated();
                break;
            case Xt.type:
                t.containsOptions("fisheye") && this.__onPositionUpdated(),
                t.containsOptions("mousemove") && (this.container.style.cursor = this.config.mousemove ? "move" : "default"),
                t.containsOptions("canvasBackground") && (this.container.style.background = this.config.canvasBackground)
            }
        }
        hide() {
            this.container.style.opacity = "0"
        }
        show() {
            this.container.style.opacity = "1"
        }
        setCustomRenderer(t) {
            this.customRenderer = t ? t(this.renderer) : null,
            this.viewer.needsUpdate()
        }
        __onSizeUpdated() {
            this.renderer.setSize(this.state.size.width, this.state.size.height),
            this.camera.aspect = this.state.aspect,
            this.camera.updateProjectionMatrix(),
            this.viewer.needsUpdate()
        }
        __onZoomUpdated() {
            this.camera.fov = this.state.vFov,
            this.camera.updateProjectionMatrix(),
            this.viewer.needsUpdate()
        }
        __onPositionUpdated() {
            this.camera.position.set(0, 0, 0),
            this.camera.lookAt(this.state.direction),
            this.config.fisheye && this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye / 2).negate(),
            this.viewer.needsUpdate()
        }
        __renderLoop(t) {
            const e = this.timestamp ? t - this.timestamp : 0;
            this.timestamp = t,
            this.viewer.dispatchEvent(new Ft(t,e)),
            this.viewer.dynamics.update(e),
            this.state.needsUpdate && ((this.customRenderer || this.renderer).render(this.scene, this.camera),
            this.viewer.dispatchEvent(new we),
            this.state.needsUpdate = !1)
        }
        setTexture(t) {
            this.state.panoData = t.panoData,
            this.viewer.adapter.setTexture(this.mesh, t),
            this.viewer.needsUpdate()
        }
        setOverlay(t, e) {
            this.viewer.adapter.setOverlay(this.mesh, t, e),
            this.viewer.needsUpdate()
        }
        setPanoramaPose(t, e=this.mesh) {
            const s = this.viewer.dataHelper.cleanPanoramaPose(t);
            e.rotation.set(-s.tilt, -s.pan, -s.roll, "ZXY")
        }
        setSphereCorrection(t, e=this.meshContainer) {
            const s = this.viewer.dataHelper.cleanSphereCorrection(t);
            e.rotation.set(s.tilt, s.pan, s.roll, "ZXY")
        }
        transition(t, e) {
            const s = lt(e)
              , i = "zoom"in e
              , o = new Ds.Group
              , n = this.viewer.adapter.createMesh(.5);
            if (this.viewer.adapter.setTexture(n, t, !0),
            this.viewer.adapter.setTextureOpacity(n, 0),
            this.setPanoramaPose(t.panoData, n),
            this.setSphereCorrection(e.sphereCorrection, o),
            s) {
                const t = this.viewer.dataHelper.cleanPosition(e)
                  , s = this.viewer.getPosition()
                  , i = new Ds.Vector3(0,1,0);
                o.rotateOnWorldAxis(i, t.yaw - s.yaw);
                const n = new Ds.Vector3(0,1,0).cross(this.camera.getWorldDirection(new Ds.Vector3)).normalize();
                o.rotateOnWorldAxis(n, t.pitch - s.pitch)
            }
            o.add(n),
            this.scene.add(o),
            this.renderer.setRenderTarget(new Ds.WebGLRenderTarget),
            this.renderer.render(this.scene, this.camera),
            this.renderer.setRenderTarget(null);
            const r = new Ot({
                properties: {
                    opacity: {
                        start: 0,
                        end: 1
                    },
                    zoom: i ? {
                        start: this.viewer.getZoomLevel(),
                        end: e.zoom
                    } : void 0
                },
                duration: e.transition,
                easing: "outCubic",
                onTick: t=>{
                    this.viewer.adapter.setTextureOpacity(n, t.opacity),
                    this.viewer.adapter.setTextureOpacity(this.mesh, 1 - t.opacity),
                    i && this.viewer.zoom(t.zoom),
                    this.viewer.needsUpdate()
                }
            });
            return r.then((i=>{
                i ? (this.setTexture(t),
                this.viewer.adapter.setTextureOpacity(this.mesh, 1),
                this.setPanoramaPose(t.panoData),
                this.setSphereCorrection(e.sphereCorrection),
                s && this.viewer.rotate(e)) : this.viewer.adapter.disposeTexture(t),
                this.scene.remove(o),
                n.geometry.dispose(),
                n.geometry = null
            }
            )),
            r
        }
        getIntersections(t) {
            return Fs.x = 2 * t.x / this.state.size.width - 1,
            Fs.y = -2 * t.y / this.state.size.height + 1,
            this.raycaster.setFromCamera(Fs, this.camera),
            this.raycaster.intersectObjects(this.scene.children, !0).filter((t=>t.object.isMesh && !!t.object.userData))
        }
        addObject(t) {
            this.scene.add(t)
        }
        removeObject(t) {
            this.scene.remove(t)
        }
        cleanScene(t) {
            t.traverse((e=>{
                e.geometry && e.geometry.dispose(),
                e.material && (Array.isArray(e.material) ? e.material.forEach((t=>{
                    t.map && t.map.dispose(),
                    t.dispose()
                }
                )) : (e.material.map && e.material.map.dispose(),
                e.material.dispose())),
                !e.dispose || e instanceof Ds.Scene || e.dispose(),
                e !== t && this.cleanScene(e)
            }
            ))
        }
    }
      , js = a()
      , Ws = class extends Ss {
        constructor(t) {
            super(t),
            this.loader = new js.FileLoader,
            this.loader.setResponseType("blob"),
            this.config.withCredentials && (this.loader.setWithCredentials(!0),
            this.loader.setCrossOrigin("use-credentials"))
        }
        destroy() {
            this.abortLoading(),
            super.destroy()
        }
        abortLoading() {}
        loadFile(t, e) {
            return this.config.requestHeaders && this.loader.setRequestHeader(this.config.requestHeaders(t)),
            new Promise(((s,i)=>{
                let o = 0;
                e?.(o),
                this.loader.load(t, (t=>{
                    o = 100,
                    e?.(o),
                    s(t)
                }
                ), (t=>{
                    if (t.lengthComputable) {
                        const s = t.loaded / t.total * 100;
                        s > o && (o = s,
                        e?.(o))
                    }
                }
                ), (t=>{
                    i(t)
                }
                ))
            }
            ))
        }
        loadImage(t, e) {
            return this.loadFile(t, e).then((t=>this.blobToImage(t)))
        }
        blobToImage(t) {
            return new Promise(((e,s)=>{
                const i = document.createElement("img");
                i.onload = ()=>{
                    URL.revokeObjectURL(i.src),
                    e(i)
                }
                ,
                i.onerror = s,
                i.src = URL.createObjectURL(t)
            }
            ))
        }
        preloadPanorama(t) {
            return this.viewer.adapter.supportsPreload(t) ? this.viewer.adapter.loadTexture(t) : Promise.reject(new ot("Current adapter does not support preload"))
        }
    }
      , Ys = a()
      , $s = class extends Ss {
        constructor(t) {
            super(t),
            this.zoom = new Ct((t=>{
                this.viewer.state.vFov = this.viewer.dataHelper.zoomLevelToFov(t),
                this.viewer.state.hFov = this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),
                this.viewer.dispatchEvent(new Ie(t))
            }
            ),{
                defaultValue: this.viewer.config.defaultZoomLvl,
                min: 0,
                max: 100,
                wrap: !1
            }),
            this.position = new kt((t=>{
                this.viewer.dataHelper.sphericalCoordsToVector3(t, this.viewer.state.direction),
                this.viewer.dispatchEvent(new ue(t))
            }
            ),{
                yaw: new Ct(null,{
                    defaultValue: this.config.defaultYaw,
                    min: 0,
                    max: 2 * Math.PI,
                    wrap: !0
                }),
                pitch: new Ct(null,{
                    defaultValue: this.config.defaultPitch,
                    min: this.viewer.state.littlePlanet ? 0 : -Math.PI / 2,
                    max: this.viewer.state.littlePlanet ? 2 * Math.PI : Math.PI / 2,
                    wrap: this.viewer.state.littlePlanet
                })
            }),
            this.updateSpeeds()
        }
        updateSpeeds() {
            this.zoom.setSpeed(50 * this.config.zoomSpeed),
            this.position.setSpeed(Ys.MathUtils.degToRad(50 * this.config.moveSpeed))
        }
        update(t) {
            this.zoom.update(t),
            this.position.update(t)
        }
    }
      , Xs = a()
      , Zs = class extends Ht {
        constructor(t) {
            super(),
            this.plugins = {},
            this.children = [],
            this.onResize = B((()=>this.navbar.autoSize()), 500),
            Ye.load(),
            this.state = new class {
                constructor() {
                    this.ready = !1,
                    this.needsUpdate = !1,
                    this.keyboardEnabled = !1,
                    this.direction = new Xs.Vector3(0,0,y),
                    this.vFov = 60,
                    this.hFov = 60,
                    this.aspect = 1,
                    this.animation = null,
                    this.transitionAnimation = null,
                    this.loadingPromise = null,
                    this.littlePlanet = !1,
                    this.idleTime = -1,
                    this.objectsObservers = {},
                    this.size = {
                        width: 0,
                        height: 0
                    },
                    this.panoData = {
                        fullWidth: 0,
                        fullHeight: 0,
                        croppedWidth: 0,
                        croppedHeight: 0,
                        croppedX: 0,
                        croppedY: 0,
                        poseHeading: 0,
                        posePitch: 0,
                        poseRoll: 0
                    }
                }
            }
            ,
            this.config = gs(t),
            this.parent = H(t.container),
            this.parent[b] = this,
            this.container = document.createElement("div"),
            this.container.classList.add("psv-container"),
            this.parent.appendChild(this.container),
            this.adapter = new this.config.adapter[0](this,this.config.adapter[1]),
            this.renderer = new Vs(this),
            this.textureLoader = new Ws(this),
            this.eventsHandler = new Us(this),
            this.dataHelper = new zs(this),
            this.dynamics = new $s(this),
            this.loader = new xs(this),
            this.navbar = new Ts(this),
            this.panel = new Cs(this),
            this.notification = new Ms(this),
            this.overlay = new Os(this),
            this.resize(this.config.size),
            nt(Ye.isTouchEnabled, (t=>{
                A(this.container, "psv--is-touch", t)
            }
            )),
            this.config.plugins.forEach((([t,e])=>{
                this.plugins[t.id] = new t(this,e)
            }
            ));
            for (const t of Object.values(this.plugins))
                t.init?.();
            this.config.navbar && this.navbar.setButtons(this.config.navbar),
            this.config.panorama ? this.setPanorama(this.config.panorama) : this.loader.show()
        }
        destroy() {
            this.stopAll(),
            this.stopKeyboardControl(),
            this.exitFullscreen();
            for (const [t,e] of Object.entries(this.plugins))
                e.destroy(),
                delete this.plugins[t];
            this.children.slice().forEach((t=>t.destroy())),
            this.children.length = 0,
            this.eventsHandler.destroy(),
            this.renderer.destroy(),
            this.textureLoader.destroy(),
            this.dataHelper.destroy(),
            this.adapter.destroy(),
            this.dynamics.destroy(),
            this.parent.removeChild(this.container),
            delete this.parent[b]
        }
        init() {
            this.eventsHandler.init(),
            this.renderer.init(),
            this.config.navbar && (this.container.classList.add("psv--has-navbar"),
            this.navbar.show()),
            "always" === this.config.keyboard && this.startKeyboardControl(),
            this.resetIdleTimer(),
            this.state.ready = !0,
            this.dispatchEvent(new ve)
        }
        resetIdleTimer() {
            this.state.idleTime = performance.now()
        }
        disableIdleTimer() {
            this.state.idleTime = -1
        }
        getPlugin(t) {
            if ("string" == typeof t)
                return this.plugins[t];
            {
                const e = vs(t);
                return e ? this.plugins[e.id] : null
            }
        }
        getPosition() {
            return this.dataHelper.cleanPosition(this.dynamics.position.current)
        }
        getZoomLevel() {
            return this.dynamics.zoom.current
        }
        getSize() {
            return {
                ...this.state.size
            }
        }
        isFullscreenEnabled() {
            return Y(this.container)
        }
        needsUpdate() {
            this.state.needsUpdate = !0
        }
        autoSize() {
            this.container.clientWidth === this.state.size.width && this.container.clientHeight === this.state.size.height || (this.state.size.width = Math.round(this.container.clientWidth),
            this.state.size.height = Math.round(this.container.clientHeight),
            this.state.aspect = this.state.size.width / this.state.size.height,
            this.state.hFov = this.dataHelper.vFovToHFov(this.state.vFov),
            this.dispatchEvent(new Oe(this.getSize())),
            this.onResize())
        }
        setPanorama(t, e={}) {
            this.textureLoader.abortLoading(),
            this.state.transitionAnimation?.cancel(),
            this.state.ready || ["sphereCorrection", "panoData", "overlay", "overlayOpacity"].forEach((t=>{
                t in e || (e[t] = this.config[t])
            }
            )),
            void 0 !== e.transition && !0 !== e.transition || (e.transition = d),
            void 0 === e.showLoader && (e.showLoader = !0),
            void 0 === e.caption && (e.caption = this.config.caption),
            void 0 === e.description && (e.description = this.config.description),
            e.panoData || "function" != typeof this.config.panoData || (e.panoData = this.config.panoData);
            const s = lt(e)
              , i = "zoom"in e;
            (s || i) && this.stopAll(),
            this.hideError(),
            this.resetIdleTimer(),
            this.config.panorama = t,
            this.config.caption = e.caption,
            this.config.description = e.description;
            const o = t=>{
                if (this.loader.hide(),
                this.state.loadingPromise = null,
                ht(t))
                    return !1;
                if (t)
                    throw this.navbar.setCaption(""),
                    this.showError(this.config.lang.loadError),
                    console.error(t),
                    t;
                return this.setOverlay(e.overlay, e.overlayOpacity),
                this.navbar.setCaption(this.config.caption),
                !0
            }
            ;
            this.navbar.setCaption(`<em>${this.config.loadingTxt || ""}</em>`),
            !e.showLoader && this.state.ready || this.loader.show();
            const n = this.adapter.loadTexture(this.config.panorama, e.panoData).then((t=>{
                if (t.panorama !== this.config.panorama)
                    throw this.adapter.disposeTexture(t),
                    at();
                return t
            }
            ));
            return e.transition && this.state.ready && this.adapter.supportsTransition(this.config.panorama) ? this.state.loadingPromise = n.then((t=>(this.loader.hide(),
            this.dispatchEvent(new le(t)),
            this.state.transitionAnimation = this.renderer.transition(t, e),
            this.state.transitionAnimation))).then((t=>{
                if (this.state.transitionAnimation = null,
                !t)
                    throw at()
            }
            )).then((()=>o()), (t=>o(t))) : this.state.loadingPromise = n.then((t=>{
                this.renderer.show(),
                this.renderer.setTexture(t),
                this.renderer.setPanoramaPose(t.panoData),
                this.renderer.setSphereCorrection(e.sphereCorrection),
                this.state.ready || this.init(),
                this.dispatchEvent(new le(t)),
                i && this.zoom(e.zoom),
                s && this.rotate(e)
            }
            )).then((()=>o()), (t=>o(t))),
            this.state.loadingPromise
        }
        setOverlay(t, e=this.config.overlayOpacity) {
            const s = this.adapter.constructor.supportsOverlay;
            return t ? s ? this.adapter.loadTexture(t, (t=>{
                const e = this.state.panoData
                  , s = t.width / e.croppedWidth;
                return {
                    fullWidth: s * e.fullWidth,
                    fullHeight: s * e.fullHeight,
                    croppedWidth: s * e.croppedWidth,
                    croppedHeight: s * e.croppedHeight,
                    croppedX: s * e.croppedX,
                    croppedY: s * e.croppedY
                }
            }
            ), !1).then((t=>{
                this.renderer.setOverlay(t, e)
            }
            )) : Promise.reject(new ot("Current adapter does not supports overlay")) : (s && this.renderer.setOverlay(null, 0),
            Promise.resolve())
        }
        setOptions(t) {
            const e = {
                ...this.config,
                ...t
            };
            for (let[s,i] of Object.entries(t))
                if (s in ms)
                    if (s in ws)
                        ct(ws[s]);
                    else
                        switch (s in fs && (i = fs[s](i, {
                            rawConfig: e,
                            defValue: ms[s]
                        })),
                        this.config[s] = i,
                        s) {
                        case "caption":
                            this.navbar.setCaption(this.config.caption);
                            break;
                        case "size":
                            this.resize(this.config.size);
                            break;
                        case "sphereCorrection":
                            this.renderer.setSphereCorrection(this.config.sphereCorrection);
                            break;
                        case "navbar":
                        case "lang":
                            this.navbar.setButtons(this.config.navbar);
                            break;
                        case "moveSpeed":
                        case "zoomSpeed":
                            this.dynamics.updateSpeeds();
                            break;
                        case "minFov":
                        case "maxFov":
                            this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),
                            this.dispatchEvent(new Ie(this.getZoomLevel()));
                            break;
                        case "keyboard":
                            "always" === this.config.keyboard ? this.startKeyboardControl() : this.stopKeyboardControl()
                        }
                else
                    ct(`Unknown option ${s}`);
            this.needsUpdate(),
            this.dispatchEvent(new Xt(Object.keys(t)))
        }
        setOption(t, e) {
            this.setOptions({
                [t]: e
            })
        }
        showError(t) {
            this.overlay.show({
                id: T.ERROR,
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/>\x3c!--Created by Shastry from the Noun Project--\x3e</svg>\n',
                title: t,
                dissmisable: !1
            })
        }
        hideError() {
            this.overlay.hide(T.ERROR)
        }
        rotate(t) {
            const e = new jt(this.dataHelper.cleanPosition(t));
            this.dispatchEvent(e),
            e.defaultPrevented || this.dynamics.position.setValue(e.position)
        }
        zoom(t) {
            this.dynamics.zoom.setValue(t)
        }
        zoomIn(t=1) {
            this.dynamics.zoom.step(t)
        }
        zoomOut(t=1) {
            this.dynamics.zoom.step(-t)
        }
        animate(t) {
            const e = lt(t)
              , s = void 0 !== t.zoom
              , i = new Ut(e ? this.dataHelper.cleanPosition(t) : void 0,t.zoom);
            if (this.dispatchEvent(i),
            i.defaultPrevented)
                return;
            const o = i.position
              , n = i.zoomLevel;
            this.stopAll();
            const r = {};
            let a;
            if (e) {
                const e = this.getPosition()
                  , s = P(e.yaw, o.yaw);
                r.yaw = {
                    start: e.yaw,
                    end: e.yaw + s
                },
                r.pitch = {
                    start: e.pitch,
                    end: o.pitch
                },
                a = this.dataHelper.speedToDuration(t.speed, R(e, o))
            }
            if (s) {
                const e = Math.abs(n - this.getZoomLevel());
                r.zoom = {
                    start: this.getZoomLevel(),
                    end: n
                },
                a || (a = this.dataHelper.speedToDuration(t.speed, Math.PI / 4 * e / 100))
            }
            return a ? (this.state.animation = new Ot({
                properties: r,
                duration: Math.max(u, a),
                easing: "inOutSine",
                onTick: t=>{
                    e && this.dynamics.position.setValue({
                        yaw: t.yaw,
                        pitch: t.pitch
                    }),
                    s && this.dynamics.zoom.setValue(t.zoom)
                }
            }),
            this.state.animation.then((()=>{
                this.state.animation = null,
                this.resetIdleTimer()
            }
            )),
            this.state.animation) : (e && this.rotate(o),
            s && this.zoom(n),
            new Ot(null))
        }
        stopAnimation() {
            return this.state.animation ? (this.state.animation.cancel(),
            this.state.animation) : Promise.resolve()
        }
        resize(t) {
            const e = t;
            ["width", "height"].forEach((s=>{
                t && e[s] && (/^[0-9.]+$/.test(e[s]) && (e[s] += "px"),
                this.parent.style[s] = e[s])
            }
            )),
            this.autoSize()
        }
        enterFullscreen() {
            this.isFullscreenEnabled() || $(this.container)
        }
        exitFullscreen() {
            this.isFullscreenEnabled() && X()
        }
        toggleFullscreen() {
            this.isFullscreenEnabled() ? this.exitFullscreen() : this.enterFullscreen()
        }
        startKeyboardControl() {
            this.state.keyboardEnabled = !0
        }
        stopKeyboardControl() {
            this.state.keyboardEnabled = !1
        }
        createTooltip(t) {
            return new ks(this,t)
        }
        observeObjects(t) {
            this.state.objectsObservers[t] = null
        }
        unobserveObjects(t) {
            delete this.state.objectsObservers[t]
        }
        stopAll() {
            return this.dispatchEvent(new Ce),
            this.disableIdleTimer(),
            this.stopAnimation()
        }
    }
    ;
    c.Cache.enabled = !0,
    c.ColorManagement.enabled = !1,
    ((t,e,r,a)=>{
        if (e && "object" == typeof e || "function" == typeof e)
            for (let h of o(e))
                n.call(t, h) || h === r || s(t, h, {
                    get: ()=>e[h],
                    enumerable: !(a = i(e, h)) || a.enumerable
                })
    }
    )(s(t, "__esModule", {
        value: !0
    }), h)
}
));
//# sourceMappingURL=/sm/036134705dae7da1d015e67b2aa5d1aac8e444adbfc56ce73c26af56c2bbd3c9.map
