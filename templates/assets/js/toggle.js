(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[59], {
    9306: function(e) {
        !function(t) {
            "use strict";
            var n = function() {
                return {
                    escape: function(e) {
                        return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                    },
                    parseExtension: e,
                    mimeType: function(t) {
                        var n = e(t).toLowerCase();
                        return function() {
                            var e = "application/font-woff"
                              , t = "image/jpeg";
                            return {
                                woff: e,
                                woff2: e,
                                ttf: "application/font-truetype",
                                eot: "application/vnd.ms-fontobject",
                                png: "image/png",
                                jpg: t,
                                jpeg: t,
                                gif: "image/gif",
                                tiff: "image/tiff",
                                svg: "image/svg+xml"
                            }
                        }()[n] || ""
                    },
                    dataAsUrl: function(e, t) {
                        return "data:" + t + ";base64," + e
                    },
                    isDataUrl: function(e) {
                        return -1 !== e.search(/^(data:)/)
                    },
                    canvasToBlob: function(e) {
                        return e.toBlob ? new Promise((function(t) {
                            e.toBlob(t)
                        }
                        )) : function(e) {
                            return new Promise((function(t) {
                                for (var n = window.atob(e.toDataURL().split(",")[1]), r = n.length, o = new Uint8Array(r), a = 0; a < r; a++)
                                    o[a] = n.charCodeAt(a);
                                t(new Blob([o],{
                                    type: "image/png"
                                }))
                            }
                            ))
                        }(e)
                    },
                    resolveUrl: function(e, t) {
                        var n = document.implementation.createHTMLDocument()
                          , r = n.createElement("base");
                        n.head.appendChild(r);
                        var o = n.createElement("a");
                        return n.body.appendChild(o),
                        r.href = t,
                        o.href = e,
                        o.href
                    },
                    getAndEncode: function(e) {
                        var t = 3e4;
                        u.impl.options.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
                        return new Promise((function(n) {
                            var r, o = new XMLHttpRequest;
                            if (o.onreadystatechange = l,
                            o.ontimeout = i,
                            o.responseType = "blob",
                            o.timeout = t,
                            o.open("GET", e, !0),
                            o.send(),
                            u.impl.options.imagePlaceholder) {
                                var a = u.impl.options.imagePlaceholder.split(/,/);
                                a && a[1] && (r = a[1])
                            }
                            function l() {
                                if (4 === o.readyState)
                                    if (200 === o.status) {
                                        var t = new FileReader;
                                        t.onloadend = function() {
                                            var e = t.result.split(/,/)[1];
                                            n(e)
                                        }
                                        ,
                                        t.readAsDataURL(o.response)
                                    } else
                                        r ? n(r) : s("cannot fetch resource: " + e + ", status: " + o.status)
                            }
                            function i() {
                                r ? n(r) : s("timeout of " + t + "ms occured while fetching resource: " + e)
                            }
                            function s(e) {
                                console.error(e),
                                n("")
                            }
                        }
                        ))
                    },
                    uid: function() {
                        var e = 0;
                        return function() {
                            return "u" + t() + e++;
                            function t() {
                                return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
                            }
                        }
                    }(),
                    delay: function(e) {
                        return function(t) {
                            return new Promise((function(n) {
                                setTimeout((function() {
                                    n(t)
                                }
                                ), e)
                            }
                            ))
                        }
                    },
                    asArray: function(e) {
                        for (var t = [], n = e.length, r = 0; r < n; r++)
                            t.push(e[r]);
                        return t
                    },
                    escapeXhtml: function(e) {
                        return e.replace(/#/g, "%23").replace(/\n/g, "%0A")
                    },
                    makeImage: function(e) {
                        return new Promise((function(t, n) {
                            var r = new Image;
                            r.onload = function() {
                                t(r)
                            }
                            ,
                            r.onerror = n,
                            r.src = e
                        }
                        ))
                    },
                    width: function(e) {
                        var n = t(e, "border-left-width")
                          , r = t(e, "border-right-width");
                        return e.scrollWidth + n + r
                    },
                    height: function(e) {
                        var n = t(e, "border-top-width")
                          , r = t(e, "border-bottom-width");
                        return e.scrollHeight + n + r
                    }
                };
                function e(e) {
                    var t = /\.([^\.\/]*?)$/g.exec(e);
                    return t ? t[1] : ""
                }
                function t(e, t) {
                    var n = window.getComputedStyle(e).getPropertyValue(t);
                    return parseFloat(n.replace("px", ""))
                }
            }()
              , r = function() {
                var e = /url\(['"]?([^'"]+?)['"]?\)/g;
                return {
                    inlineAll: function(e, n, a) {
                        return l() ? Promise.resolve(e) : Promise.resolve(e).then(r).then((function(t) {
                            var r = Promise.resolve(e);
                            return t.forEach((function(e) {
                                r = r.then((function(t) {
                                    return o(t, e, n, a)
                                }
                                ))
                            }
                            )),
                            r
                        }
                        ));
                        function l() {
                            return !t(e)
                        }
                    },
                    shouldProcess: t,
                    impl: {
                        readUrls: r,
                        inline: o
                    }
                };
                function t(t) {
                    return -1 !== t.search(e)
                }
                function r(t) {
                    for (var r, o = []; null !== (r = e.exec(t)); )
                        o.push(r[1]);
                    return o.filter((function(e) {
                        return !n.isDataUrl(e)
                    }
                    ))
                }
                function o(e, t, r, o) {
                    return Promise.resolve(t).then((function(e) {
                        return r ? n.resolveUrl(e, r) : e
                    }
                    )).then(o || n.getAndEncode).then((function(e) {
                        return n.dataAsUrl(e, n.mimeType(t))
                    }
                    )).then((function(r) {
                        return e.replace(function(e) {
                            return new RegExp("(url\\(['\"]?)(" + n.escape(e) + ")(['\"]?\\))","g")
                        }(t), "$1" + r + "$3")
                    }
                    ))
                }
            }()
              , o = function() {
                return {
                    resolveAll: function() {
                        return e(document).then((function(e) {
                            return Promise.all(e.map((function(e) {
                                return e.resolve()
                            }
                            )))
                        }
                        )).then((function(e) {
                            return e.join("\n")
                        }
                        ))
                    },
                    impl: {
                        readAll: e
                    }
                };
                function e() {
                    return Promise.resolve(n.asArray(document.styleSheets)).then((function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            try {
                                n.asArray(e.cssRules || []).forEach(t.push.bind(t))
                            } catch (r) {
                                console.log("Error while reading CSS rules from " + e.href, r.toString())
                            }
                        }
                        )),
                        t
                    }
                    )).then((function(e) {
                        return e.filter((function(e) {
                            return e.type === CSSRule.FONT_FACE_RULE
                        }
                        )).filter((function(e) {
                            return r.shouldProcess(e.style.getPropertyValue("src"))
                        }
                        ))
                    }
                    )).then((function(t) {
                        return t.map(e)
                    }
                    ));
                    function e(e) {
                        return {
                            resolve: function() {
                                var t = (e.parentStyleSheet || {}).href;
                                return r.inlineAll(e.cssText, t)
                            },
                            src: function() {
                                return e.style.getPropertyValue("src")
                            }
                        }
                    }
                }
            }()
              , a = function() {
                return {
                    inlineAll: function t(o) {
                        return o instanceof Element ? a(o).then((function() {
                            return o instanceof HTMLImageElement ? e(o).inline() : Promise.all(n.asArray(o.childNodes).map((function(e) {
                                return t(e)
                            }
                            )))
                        }
                        )) : Promise.resolve(o);
                        function a(e) {
                            var t = e.style.getPropertyValue("background");
                            return t ? r.inlineAll(t).then((function(t) {
                                e.style.setProperty("background", t, e.style.getPropertyPriority("background"))
                            }
                            )).then((function() {
                                return e
                            }
                            )) : Promise.resolve(e)
                        }
                    },
                    impl: {
                        newImage: e
                    }
                };
                function e(e) {
                    return {
                        inline: function(t) {
                            return n.isDataUrl(e.src) ? Promise.resolve() : Promise.resolve(e.src).then(t || n.getAndEncode).then((function(t) {
                                return n.dataAsUrl(t, n.mimeType(e.src))
                            }
                            )).then((function(t) {
                                return new Promise((function(n, r) {
                                    e.onload = n,
                                    e.onerror = r,
                                    e.src = t
                                }
                                ))
                            }
                            ))
                        }
                    }
                }
            }()
              , l = {
                imagePlaceholder: void 0,
                cacheBust: !1
            }
              , u = {
                toSvg: i,
                toPng: function(e, t) {
                    return s(e, t || {}).then((function(e) {
                        return e.toDataURL()
                    }
                    ))
                },
                toJpeg: function(e, t) {
                    return s(e, t = t || {}).then((function(e) {
                        return e.toDataURL("image/jpeg", t.quality || 1)
                    }
                    ))
                },
                toBlob: function(e, t) {
                    return s(e, t || {}).then(n.canvasToBlob)
                },
                toPixelData: function(e, t) {
                    return s(e, t || {}).then((function(t) {
                        return t.getContext("2d").getImageData(0, 0, n.width(e), n.height(e)).data
                    }
                    ))
                },
                impl: {
                    fontFaces: o,
                    images: a,
                    util: n,
                    inliner: r,
                    options: {}
                }
            };
            function i(e, t) {
                return function(e) {
                    "undefined" === typeof e.imagePlaceholder ? u.impl.options.imagePlaceholder = l.imagePlaceholder : u.impl.options.imagePlaceholder = e.imagePlaceholder;
                    "undefined" === typeof e.cacheBust ? u.impl.options.cacheBust = l.cacheBust : u.impl.options.cacheBust = e.cacheBust
                }(t = t || {}),
                Promise.resolve(e).then((function(e) {
                    return c(e, t.filter, !0)
                }
                )).then(d).then(p).then((function(e) {
                    t.bgcolor && (e.style.backgroundColor = t.bgcolor);
                    t.width && (e.style.width = t.width + "px");
                    t.height && (e.style.height = t.height + "px");
                    t.style && Object.keys(t.style).forEach((function(n) {
                        e.style[n] = t.style[n]
                    }
                    ));
                    return e
                }
                )).then((function(r) {
                    return function(e, t, r) {
                        return Promise.resolve(e).then((function(e) {
                            return e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
                            (new XMLSerializer).serializeToString(e)
                        }
                        )).then(n.escapeXhtml).then((function(e) {
                            return '<foreignObject x="0" y="0" width="100%" height="100%">' + e + "</foreignObject>"
                        }
                        )).then((function(e) {
                            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + r + '">' + e + "</svg>"
                        }
                        )).then((function(e) {
                            return "data:image/svg+xml;charset=utf-8," + e
                        }
                        ))
                    }(r, t.width || n.width(e), t.height || n.height(e))
                }
                ))
            }
            function s(e, t) {
                return i(e, t).then(n.makeImage).then(n.delay(100)).then((function(r) {
                    var o = function(e) {
                        var r = document.createElement("canvas");
                        if (r.width = t.width || n.width(e),
                        r.height = t.height || n.height(e),
                        t.bgcolor) {
                            var o = r.getContext("2d");
                            o.fillStyle = t.bgcolor,
                            o.fillRect(0, 0, r.width, r.height)
                        }
                        return r
                    }(e);
                    return o.getContext("2d").drawImage(r, 0, 0),
                    o
                }
                ))
            }
            function c(e, t, r) {
                return r || !t || t(e) ? Promise.resolve(e).then((function(e) {
                    return e instanceof HTMLCanvasElement ? n.makeImage(e.toDataURL()) : e.cloneNode(!1)
                }
                )).then((function(r) {
                    return function(e, t, r) {
                        var o = e.childNodes;
                        return 0 === o.length ? Promise.resolve(t) : a(t, n.asArray(o), r).then((function() {
                            return t
                        }
                        ));
                        function a(e, t, n) {
                            var r = Promise.resolve();
                            return t.forEach((function(t) {
                                r = r.then((function() {
                                    return c(t, n)
                                }
                                )).then((function(t) {
                                    t && e.appendChild(t)
                                }
                                ))
                            }
                            )),
                            r
                        }
                    }(e, r, t)
                }
                )).then((function(t) {
                    return function(e, t) {
                        return t instanceof Element ? Promise.resolve().then(r).then(o).then(a).then(l).then((function() {
                            return t
                        }
                        )) : t;
                        function r() {
                            function r(e, t) {
                                function r(e, t) {
                                    n.asArray(e).forEach((function(n) {
                                        t.setProperty(n, e.getPropertyValue(n), e.getPropertyPriority(n))
                                    }
                                    ))
                                }
                                e.cssText ? t.cssText = e.cssText : r(e, t)
                            }
                            r(window.getComputedStyle(e), t.style)
                        }
                        function o() {
                            function r(r) {
                                var o = window.getComputedStyle(e, r)
                                  , a = o.getPropertyValue("content");
                                if ("" !== a && "none" !== a) {
                                    var l = n.uid();
                                    t.className = t.className + " " + l;
                                    var u = document.createElement("style");
                                    u.appendChild(i(l, r, o)),
                                    t.appendChild(u)
                                }
                                function i(e, t, r) {
                                    var o = "." + e + ":" + t
                                      , a = r.cssText ? l(r) : u(r);
                                    return document.createTextNode(o + "{" + a + "}");
                                    function l(e) {
                                        var t = e.getPropertyValue("content");
                                        return e.cssText + " content: " + t + ";"
                                    }
                                    function u(e) {
                                        return n.asArray(e).map(t).join("; ") + ";";
                                        function t(t) {
                                            return t + ": " + e.getPropertyValue(t) + (e.getPropertyPriority(t) ? " !important" : "")
                                        }
                                    }
                                }
                            }
                            [":before", ":after"].forEach((function(e) {
                                r(e)
                            }
                            ))
                        }
                        function a() {
                            e instanceof HTMLTextAreaElement && (t.innerHTML = e.value),
                            e instanceof HTMLInputElement && t.setAttribute("value", e.value)
                        }
                        function l() {
                            t instanceof SVGElement && (t.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                            t instanceof SVGRectElement && ["width", "height"].forEach((function(e) {
                                var n = t.getAttribute(e);
                                n && t.style.setProperty(e, n)
                            }
                            )))
                        }
                    }(e, t)
                }
                )) : Promise.resolve()
            }
            function d(e) {
                return o.resolveAll().then((function(t) {
                    var n = document.createElement("style");
                    return e.appendChild(n),
                    n.appendChild(document.createTextNode(t)),
                    e
                }
                ))
            }
            function p(e) {
                return a.inlineAll(e).then((function() {
                    return e
                }
                ))
            }
            e.exports = u
        }()
    },
    6727: function(e, t, n) {
        "use strict";
        n.d(t, {
            Vq: function() {
                return be
            },
            uT: function() {
                return Mt
            }
        });
        var r = n(1720);
        function o() {
            let e = []
              , t = []
              , n = {
                enqueue(e) {
                    t.push(e)
                },
                requestAnimationFrame(...e) {
                    let t = requestAnimationFrame(...e);
                    n.add((()=>cancelAnimationFrame(t)))
                },
                nextFrame(...e) {
                    n.requestAnimationFrame((()=>{
                        n.requestAnimationFrame(...e)
                    }
                    ))
                },
                setTimeout(...e) {
                    let t = setTimeout(...e);
                    n.add((()=>clearTimeout(t)))
                },
                add(t) {
                    e.push(t)
                },
                dispose() {
                    for (let t of e.splice(0))
                        t()
                },
                async workQueue() {
                    for (let e of t.splice(0))
                        await e()
                }
            };
            return n
        }
        function a() {
            let[e] = (0,
            r.useState)(o);
            return (0,
            r.useEffect)((()=>()=>e.dispose()), [e]),
            e
        }
        var l = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
          , u = {
            serverHandoffComplete: !1
        };
        function i() {
            let[e,t] = (0,
            r.useState)(u.serverHandoffComplete);
            return (0,
            r.useEffect)((()=>{
                !0 !== e && t(!0)
            }
            ), [e]),
            (0,
            r.useEffect)((()=>{
                !1 === u.serverHandoffComplete && (u.serverHandoffComplete = !0)
            }
            ), []),
            e
        }
        var s = 0;
        function c() {
            return ++s
        }
        function d() {
            let e = i()
              , [t,n] = (0,
            r.useState)(e ? c : null);
            return l((()=>{
                null === t && n(c())
            }
            ), [t]),
            null != t ? "" + t : void 0
        }
        function p(e) {
            let t = (0,
            r.useRef)(e);
            return (0,
            r.useEffect)((()=>{
                t.current = e
            }
            ), [e]),
            t
        }
        function f(e, t) {
            let[n,o] = (0,
            r.useState)(e)
              , a = p(e);
            return l((()=>o(a.current)), [a, o, ...t]),
            n
        }
        function v(...e) {
            let t = (0,
            r.useRef)(e);
            return (0,
            r.useEffect)((()=>{
                t.current = e
            }
            ), [e]),
            (0,
            r.useCallback)((e=>{
                for (let n of t.current)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            }
            ), [t])
        }
        function m(e, t, ...n) {
            if (e in t) {
                let r = t[e];
                return "function" == typeof r ? r(...n) : r
            }
            let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);
            throw Error.captureStackTrace && Error.captureStackTrace(r, m),
            r
        }
        function b({props: e, slot: t, defaultTag: n, features: r, visible: o=!0, name: a}) {
            if (o)
                return h(e, t, n, a);
            let l = null != r ? r : 0;
            if (2 & l) {
                let {static: r=!1, ...o} = e;
                if (r)
                    return h(o, t, n, a)
            }
            if (1 & l) {
                let {unmount: r=!0, ...o} = e;
                return m(r ? 0 : 1, {
                    0: ()=>null,
                    1: ()=>h({
                        ...o,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, t, n, a)
                })
            }
            return h(e, t, n, a)
        }
        function h(e, t={}, n, o) {
            let {as: a=n, children: l, refName: u="ref", ...i} = g(e, ["unmount", "static"])
              , s = void 0 !== e.ref ? {
                [u]: e.ref
            } : {}
              , c = "function" == typeof l ? l(t) : l;
            if (i.className && "function" == typeof i.className && (i.className = i.className(t)),
            a === r.Fragment && Object.keys(i).length > 0) {
                if (!(0,
                r.isValidElement)(c) || Array.isArray(c) && c.length > 1)
                    throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map((e=>`  - ${e}`)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));
                return (0,
                r.cloneElement)(c, Object.assign({}, function(e, t, n) {
                    let r = Object.assign({}, e);
                    for (let o of n)
                        void 0 !== e[o] && void 0 !== t[o] && Object.assign(r, {
                            [o](n) {
                                n.defaultPrevented || e[o](n),
                                n.defaultPrevented || t[o](n)
                            }
                        });
                    return r
                }(function(e) {
                    let t = Object.assign({}, e);
                    for (let n in t)
                        void 0 === t[n] && delete t[n];
                    return t
                }(g(i, ["ref"])), c.props, ["onClick"]), s))
            }
            return (0,
            r.createElement)(a, Object.assign({}, g(i, ["ref"]), a !== r.Fragment && s), c)
        }
        function y(e) {
            var t;
            return Object.assign((0,
            r.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function g(e, t=[]) {
            let n = Object.assign({}, e);
            for (let r of t)
                r in n && delete n[r];
            return n
        }
        function x(e, t) {
            let n = t.resolveItems();
            if (n.length <= 0)
                return null;
            let r = t.resolveActiveIndex()
              , o = null != r ? r : -1
              , a = (()=>{
                switch (e.focus) {
                case 0:
                    return n.findIndex((e=>!t.resolveDisabled(e)));
                case 1:
                    {
                        let e = n.slice().reverse().findIndex(((e,n,r)=>!(-1 !== o && r.length - n - 1 >= o) && !t.resolveDisabled(e)));
                        return -1 === e ? e : n.length - 1 - e
                    }
                case 2:
                    return n.findIndex(((e,n)=>!(n <= o) && !t.resolveDisabled(e)));
                case 3:
                    {
                        let e = n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));
                        return -1 === e ? e : n.length - 1 - e
                    }
                case 4:
                    return n.findIndex((n=>t.resolveId(n) === e.id));
                case 5:
                    return null;
                default:
                    !function(e) {
                        throw new Error("Unexpected object: " + e)
                    }(e)
                }
            }
            )();
            return -1 === a ? r : a
        }
        function E(e) {
            let t = e.parentElement
              , n = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = "" === (null == t ? void 0 : t.getAttribute("disabled"));
            return (!r || !function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(n)) && r
        }
        function C(e, t, n) {
            let o = (0,
            r.useRef)(t);
            o.current = t,
            (0,
            r.useEffect)((()=>{
                function t(e) {
                    o.current.call(window, e)
                }
                return window.addEventListener(e, t, n),
                ()=>window.removeEventListener(e, t, n)
            }
            ), [e, n])
        }
        var w = (0,
        r.createContext)(null);
        function I() {
            return (0,
            r.useContext)(w)
        }
        function R({value: e, children: t}) {
            return r.default.createElement(w.Provider, {
                value: e
            }, t)
        }
        function k(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            return "string" == typeof n && "button" === n.toLowerCase() ? "button" : void 0
        }
        function P(e, t) {
            let[n,o] = (0,
            r.useState)((()=>k(e)));
            return l((()=>{
                o(k(e))
            }
            ), [e.type, e.as]),
            l((()=>{
                n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button")
            }
            ), [n, t]),
            n
        }
        function S({container: e, accept: t, walk: n, enabled: o=!0}) {
            let a = (0,
            r.useRef)(t)
              , u = (0,
            r.useRef)(n);
            (0,
            r.useEffect)((()=>{
                a.current = t,
                u.current = n
            }
            ), [t, n]),
            l((()=>{
                if (!e || !o)
                    return;
                let t = a.current
                  , n = u.current
                  , r = Object.assign((e=>t(e)), {
                    acceptNode: t
                })
                  , l = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, r, !1);
                for (; l.nextNode(); )
                    n(l.currentNode)
            }
            ), [e, o, a, u])
        }
        w.displayName = "OpenClosedContext";
        var T = {
            1: e=>e.disabled || 1 === e.comboboxState ? e : {
                ...e,
                activeOptionIndex: null,
                comboboxState: 1
            },
            0: e=>e.disabled || 0 === e.comboboxState ? e : {
                ...e,
                comboboxState: 0
            },
            2: (e,t)=>e.disabled === t.disabled ? e : {
                ...e,
                disabled: t.disabled
            },
            3(e, t) {
                if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && 1 === e.comboboxState)
                    return e;
                let n = x(t, {
                    resolveItems: ()=>e.options,
                    resolveActiveIndex: ()=>e.activeOptionIndex,
                    resolveId: e=>e.id,
                    resolveDisabled: e=>e.dataRef.current.disabled
                });
                return e.activeOptionIndex === n ? e : {
                    ...e,
                    activeOptionIndex: n
                }
            },
            4: (e,t)=>{
                var n;
                let r = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null
                  , o = Array.from(null == (n = e.optionsRef.current) ? void 0 : n.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce(((e,t,n)=>Object.assign(e, {
                    [t.id]: n
                })), {})
                  , a = [...e.options, {
                    id: t.id,
                    dataRef: t.dataRef
                }].sort(((e,t)=>o[e.id] - o[t.id]));
                return {
                    ...e,
                    options: a,
                    activeOptionIndex: null === r ? null : a.indexOf(r)
                }
            }
            ,
            5: (e,t)=>{
                let n = e.options.slice()
                  , r = null !== e.activeOptionIndex ? n[e.activeOptionIndex] : null
                  , o = n.findIndex((e=>e.id === t.id));
                return -1 !== o && n.splice(o, 1),
                {
                    ...e,
                    options: n,
                    activeOptionIndex: o === e.activeOptionIndex || null === r ? null : n.indexOf(r)
                }
            }
        }
          , D = (0,
        r.createContext)(null);
        function O(e) {
            let t = (0,
            r.useContext)(D);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, O),
                t
            }
            return t
        }
        D.displayName = "ComboboxContext";
        var A = (0,
        r.createContext)(null);
        function F() {
            let e = (0,
            r.useContext)(A);
            if (null === e) {
                let e = new Error("ComboboxActions is missing a parent <Combobox /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(e, F),
                e
            }
            return e
        }
        function M(e, t) {
            return m(t.type, T, e, t)
        }
        A.displayName = "ComboboxActions";
        var L = r.Fragment
          , N = y((function(e, t) {
            let {value: n, onChange: o, disabled: a=!1, ...u} = e
              , i = (0,
            r.useRef)({
                value: n,
                onChange: o
            })
              , s = (0,
            r.useRef)({
                static: !1,
                hold: !1
            })
              , c = (0,
            r.useRef)({
                displayValue: void 0
            })
              , d = (0,
            r.useReducer)(M, {
                comboboxState: 1,
                comboboxPropsRef: i,
                optionsPropsRef: s,
                inputPropsRef: c,
                labelRef: (0,
                r.createRef)(),
                inputRef: (0,
                r.createRef)(),
                buttonRef: (0,
                r.createRef)(),
                optionsRef: (0,
                r.createRef)(),
                disabled: a,
                options: [],
                activeOptionIndex: null
            })
              , [{comboboxState: p, options: f, activeOptionIndex: v, optionsRef: h, inputRef: y, buttonRef: g},x] = d;
            l((()=>{
                i.current.value = n
            }
            ), [n, i]),
            l((()=>{
                i.current.onChange = o
            }
            ), [o, i]),
            l((()=>x({
                type: 2,
                disabled: a
            })), [a]),
            C("mousedown", (e=>{
                var t, n, r;
                let o = e.target;
                0 === p && ((null == (t = g.current) ? void 0 : t.contains(o)) || (null == (n = y.current) ? void 0 : n.contains(o)) || (null == (r = h.current) ? void 0 : r.contains(o)) || x({
                    type: 1
                }))
            }
            ));
            let E = null === v ? null : f[v].dataRef.current.value
              , w = (0,
            r.useMemo)((()=>({
                open: 0 === p,
                disabled: a,
                activeIndex: v,
                activeOption: E
            })), [p, a, f, v])
              , I = (0,
            r.useCallback)((()=>{
                if (!y.current || void 0 === n)
                    return;
                let e = c.current.displayValue;
                "function" == typeof e ? y.current.value = e(n) : "string" == typeof n && (y.current.value = n)
            }
            ), [n, y, c])
              , k = (0,
            r.useCallback)((e=>{
                let t = f.find((t=>t.id === e));
                if (!t)
                    return;
                let {dataRef: n} = t;
                i.current.onChange(n.current.value),
                I()
            }
            ), [f, i, y])
              , P = (0,
            r.useCallback)((()=>{
                if (null !== v) {
                    let {dataRef: e} = f[v];
                    i.current.onChange(e.current.value),
                    I()
                }
            }
            ), [v, f, i, y])
              , S = (0,
            r.useMemo)((()=>({
                selectOption: k,
                selectActiveOption: P
            })), [k, P]);
            return l((()=>{
                1 === p && I()
            }
            ), [I, p]),
            l(I, [I]),
            r.default.createElement(A.Provider, {
                value: S
            }, r.default.createElement(D.Provider, {
                value: d
            }, r.default.createElement(R, {
                value: m(p, {
                    0: 0,
                    1: 1
                })
            }, b({
                props: null === t ? u : {
                    ...u,
                    ref: t
                },
                slot: w,
                defaultTag: L,
                name: "Combobox"
            }))))
        }
        ))
          , $ = y((function(e, t) {
            var n, o;
            let {value: u, onChange: i, displayValue: s, ...c} = e
              , [h,y] = O("Combobox.Input")
              , g = F()
              , x = v(h.inputRef, t)
              , E = h.inputPropsRef
              , C = `headlessui-combobox-input-${d()}`
              , w = a()
              , I = p(i);
            l((()=>{
                E.current.displayValue = s
            }
            ), [s, E]);
            let R = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case "Enter":
                    e.preventDefault(),
                    e.stopPropagation(),
                    g.selectActiveOption(),
                    y({
                        type: 1
                    });
                    break;
                case "ArrowDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    m(h.comboboxState, {
                        0: ()=>y({
                            type: 3,
                            focus: 2
                        }),
                        1: ()=>{
                            y({
                                type: 0
                            }),
                            w.nextFrame((()=>{
                                h.comboboxPropsRef.current.value || y({
                                    type: 3,
                                    focus: 0
                                })
                            }
                            ))
                        }
                    });
                case "ArrowUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    m(h.comboboxState, {
                        0: ()=>y({
                            type: 3,
                            focus: 1
                        }),
                        1: ()=>{
                            y({
                                type: 0
                            }),
                            w.nextFrame((()=>{
                                h.comboboxPropsRef.current.value || y({
                                    type: 3,
                                    focus: 3
                                })
                            }
                            ))
                        }
                    });
                case "Home":
                case "PageUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    y({
                        type: 3,
                        focus: 0
                    });
                case "End":
                case "PageDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    y({
                        type: 3,
                        focus: 3
                    });
                case "Escape":
                    return e.preventDefault(),
                    h.optionsRef.current && !h.optionsPropsRef.current.static && e.stopPropagation(),
                    y({
                        type: 1
                    });
                case "Tab":
                    g.selectActiveOption(),
                    y({
                        type: 1
                    })
                }
            }
            ), [w, y, h, g])
              , k = (0,
            r.useCallback)((e=>{
                var t;
                y({
                    type: 0
                }),
                null == (t = I.current) || t.call(I, e)
            }
            ), [y, I])
              , P = f((()=>{
                if (h.labelRef.current)
                    return [h.labelRef.current.id].join(" ")
            }
            ), [h.labelRef.current])
              , S = (0,
            r.useMemo)((()=>({
                open: 0 === h.comboboxState,
                disabled: h.disabled
            })), [h]);
            return b({
                props: {
                    ...c,
                    ...{
                        ref: x,
                        id: C,
                        role: "combobox",
                        type: "text",
                        "aria-controls": null == (n = h.optionsRef.current) ? void 0 : n.id,
                        "aria-expanded": h.disabled ? void 0 : 0 === h.comboboxState,
                        "aria-activedescendant": null === h.activeOptionIndex || null == (o = h.options[h.activeOptionIndex]) ? void 0 : o.id,
                        "aria-labelledby": P,
                        disabled: h.disabled,
                        onKeyDown: R,
                        onChange: k
                    }
                },
                slot: S,
                defaultTag: "input",
                name: "Combobox.Input"
            })
        }
        ))
          , B = y((function(e, t) {
            var n;
            let[o,l] = O("Combobox.Button")
              , u = F()
              , i = v(o.buttonRef, t)
              , s = `headlessui-combobox-button-${d()}`
              , c = a()
              , p = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case "ArrowDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    1 === o.comboboxState && (l({
                        type: 0
                    }),
                    c.nextFrame((()=>{
                        o.comboboxPropsRef.current.value || l({
                            type: 3,
                            focus: 0
                        })
                    }
                    ))),
                    c.nextFrame((()=>{
                        var e;
                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                case "ArrowUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    1 === o.comboboxState && (l({
                        type: 0
                    }),
                    c.nextFrame((()=>{
                        o.comboboxPropsRef.current.value || l({
                            type: 3,
                            focus: 3
                        })
                    }
                    ))),
                    c.nextFrame((()=>{
                        var e;
                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                case "Escape":
                    return e.preventDefault(),
                    o.optionsRef.current && !o.optionsPropsRef.current.static && e.stopPropagation(),
                    l({
                        type: 1
                    }),
                    c.nextFrame((()=>{
                        var e;
                        return null == (e = o.inputRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ))
                }
            }
            ), [c, l, o, u])
              , m = (0,
            r.useCallback)((e=>{
                if (E(e.currentTarget))
                    return e.preventDefault();
                0 === o.comboboxState ? l({
                    type: 1
                }) : (e.preventDefault(),
                l({
                    type: 0
                })),
                c.nextFrame((()=>{
                    var e;
                    return null == (e = o.inputRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))
            }
            ), [l, c, o])
              , h = f((()=>{
                if (o.labelRef.current)
                    return [o.labelRef.current.id, s].join(" ")
            }
            ), [o.labelRef.current, s])
              , y = (0,
            r.useMemo)((()=>({
                open: 0 === o.comboboxState,
                disabled: o.disabled
            })), [o]);
            return b({
                props: {
                    ...e,
                    ...{
                        ref: i,
                        id: s,
                        type: P(e, o.buttonRef),
                        tabIndex: -1,
                        "aria-haspopup": !0,
                        "aria-controls": null == (n = o.optionsRef.current) ? void 0 : n.id,
                        "aria-expanded": o.disabled ? void 0 : 0 === o.comboboxState,
                        "aria-labelledby": h,
                        disabled: o.disabled,
                        onClick: m,
                        onKeyDown: p
                    }
                },
                slot: y,
                defaultTag: "button",
                name: "Combobox.Button"
            })
        }
        ));
        var U = y((function(e, t) {
            var n;
            let {hold: o=!1, ...a} = e
              , [u] = O("Combobox.Options")
              , {optionsPropsRef: i} = u
              , s = v(u.optionsRef, t)
              , c = `headlessui-combobox-options-${d()}`
              , p = I()
              , m = null !== p ? 0 === p : 0 === u.comboboxState;
            l((()=>{
                var t;
                i.current.static = null != (t = e.static) && t
            }
            ), [i, e.static]),
            l((()=>{
                i.current.hold = o
            }
            ), [o, i]),
            S({
                container: u.optionsRef.current,
                enabled: 0 === u.comboboxState,
                accept: e=>"option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let h = f((()=>{
                var e, t, n;
                return null != (n = null == (e = u.labelRef.current) ? void 0 : e.id) ? n : null == (t = u.buttonRef.current) ? void 0 : t.id
            }
            ), [u.labelRef.current, u.buttonRef.current])
              , y = (0,
            r.useMemo)((()=>({
                open: 0 === u.comboboxState
            })), [u]);
            return b({
                props: {
                    ...a,
                    ...{
                        "aria-activedescendant": null === u.activeOptionIndex || null == (n = u.options[u.activeOptionIndex]) ? void 0 : n.id,
                        "aria-labelledby": h,
                        role: "listbox",
                        id: c,
                        ref: s
                    }
                },
                slot: y,
                defaultTag: "ul",
                features: 3,
                visible: m,
                name: "Combobox.Options"
            })
        }
        ));
        Object.assign(N, {
            Input: $,
            Button: B,
            Label: function(e) {
                let[t] = O("Combobox.Label")
                  , n = `headlessui-combobox-label-${d()}`
                  , o = (0,
                r.useCallback)((()=>{
                    var e;
                    return null == (e = t.inputRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ), [t.inputRef])
                  , a = (0,
                r.useMemo)((()=>({
                    open: 0 === t.comboboxState,
                    disabled: t.disabled
                })), [t]);
                return b({
                    props: {
                        ...e,
                        ...{
                            ref: t.labelRef,
                            id: n,
                            onClick: o
                        }
                    },
                    slot: a,
                    defaultTag: "label",
                    name: "Combobox.Label"
                })
            },
            Options: U,
            Option: function(e) {
                let {disabled: t=!1, value: n, ...a} = e
                  , [u,i] = O("Combobox.Option")
                  , s = F()
                  , c = `headlessui-combobox-option-${d()}`
                  , p = null !== u.activeOptionIndex && u.options[u.activeOptionIndex].id === c
                  , f = u.comboboxPropsRef.current.value === n
                  , v = (0,
                r.useRef)({
                    disabled: t,
                    value: n
                });
                l((()=>{
                    v.current.disabled = t
                }
                ), [v, t]),
                l((()=>{
                    v.current.value = n
                }
                ), [v, n]),
                l((()=>{
                    var e, t;
                    v.current.textValue = null == (t = null == (e = document.getElementById(c)) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                }
                ), [v, c]);
                let m = (0,
                r.useCallback)((()=>s.selectOption(c)), [s, c]);
                l((()=>(i({
                    type: 4,
                    id: c,
                    dataRef: v
                }),
                ()=>i({
                    type: 5,
                    id: c
                }))), [v, c]),
                l((()=>{
                    0 === u.comboboxState && (!f || i({
                        type: 3,
                        focus: 4,
                        id: c
                    }))
                }
                ), [u.comboboxState, f, c]),
                l((()=>{
                    if (0 !== u.comboboxState || !p)
                        return;
                    let e = o();
                    return e.requestAnimationFrame((()=>{
                        var e, t;
                        null == (t = null == (e = document.getElementById(c)) ? void 0 : e.scrollIntoView) || t.call(e, {
                            block: "nearest"
                        })
                    }
                    )),
                    e.dispose
                }
                ), [c, p, u.comboboxState, u.activeOptionIndex]);
                let h = (0,
                r.useCallback)((e=>{
                    if (t)
                        return e.preventDefault();
                    m(),
                    i({
                        type: 1
                    }),
                    o().nextFrame((()=>{
                        var e;
                        return null == (e = u.inputRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ))
                }
                ), [i, u.inputRef, t, m])
                  , y = (0,
                r.useCallback)((()=>{
                    if (t)
                        return i({
                            type: 3,
                            focus: 5
                        });
                    i({
                        type: 3,
                        focus: 4,
                        id: c
                    })
                }
                ), [t, c, i])
                  , g = (0,
                r.useCallback)((()=>{
                    t || p || i({
                        type: 3,
                        focus: 4,
                        id: c
                    })
                }
                ), [t, p, c, i])
                  , x = (0,
                r.useCallback)((()=>{
                    t || !p || u.optionsPropsRef.current.hold || i({
                        type: 3,
                        focus: 5
                    })
                }
                ), [t, p, i, u.comboboxState, u.comboboxPropsRef])
                  , E = (0,
                r.useMemo)((()=>({
                    active: p,
                    selected: f,
                    disabled: t
                })), [p, f, t]);
                return b({
                    props: {
                        ...a,
                        id: c,
                        role: "option",
                        tabIndex: !0 === t ? void 0 : -1,
                        "aria-disabled": !0 === t || void 0,
                        "aria-selected": !0 === f || void 0,
                        disabled: void 0,
                        onClick: h,
                        onFocus: y,
                        onPointerMove: g,
                        onMouseMove: g,
                        onPointerLeave: x,
                        onMouseLeave: x
                    },
                    slot: E,
                    defaultTag: "li",
                    name: "Combobox.Option"
                })
            }
        });
        var j = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");
        function H(e=document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(j))
        }
        function G(e, t=0) {
            return e !== document.body && m(t, {
                0: ()=>e.matches(j),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(j))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        function K(e) {
            null == e || e.focus({
                preventScroll: !0
            })
        }
        function V(e, t) {
            let n, r = Array.isArray(e) ? e.slice().sort(((e,t)=>{
                let n = e.compareDocumentPosition(t);
                return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
            }
            )) : H(e), o = document.activeElement, a = (()=>{
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), l = (()=>{
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, r.indexOf(o)) - 1;
                if (4 & t)
                    return Math.max(0, r.indexOf(o)) + 1;
                if (8 & t)
                    return r.length - 1;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), u = 32 & t ? {
                preventScroll: !0
            } : {}, i = 0, s = r.length;
            do {
                if (i >= s || i + s <= 0)
                    return 0;
                let e = l + i;
                if (16 & t)
                    e = (e + s) % s;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= s)
                        return 1
                }
                n = r[e],
                null == n || n.focus(u),
                i += a
            } while (n !== document.activeElement);
            return n.hasAttribute("tabindex") || n.setAttribute("tabindex", "0"),
            2
        }
        function Q() {
            let e = (0,
            r.useRef)(!1);
            return (0,
            r.useEffect)((()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            )), []),
            e
        }
        function _(e, t=30, {initialFocus: n, containers: o}={}) {
            let a = (0,
            r.useRef)("undefined" != typeof window ? document.activeElement : null)
              , l = (0,
            r.useRef)(null)
              , u = Q()
              , i = Boolean(16 & t)
              , s = Boolean(2 & t);
            (0,
            r.useEffect)((()=>{
                !i || (a.current = document.activeElement)
            }
            ), [i]),
            (0,
            r.useEffect)((()=>{
                if (i)
                    return ()=>{
                        K(a.current),
                        a.current = null
                    }
            }
            ), [i]),
            (0,
            r.useEffect)((()=>{
                if (!s || !e.current)
                    return;
                let t = document.activeElement;
                if (null == n ? void 0 : n.current) {
                    if ((null == n ? void 0 : n.current) === t)
                        return void (l.current = t)
                } else if (e.current.contains(t))
                    return void (l.current = t);
                (null == n ? void 0 : n.current) ? K(n.current) : 0 === V(e.current, 1) && console.warn("There are no focusable elements inside the <FocusTrap />"),
                l.current = document.activeElement
            }
            ), [e, n, s]),
            C("keydown", (n=>{
                !(4 & t) || !e.current || "Tab" === n.key && (n.preventDefault(),
                2 === V(e.current, 16 | (n.shiftKey ? 2 : 4)) && (l.current = document.activeElement))
            }
            )),
            C("focus", (n=>{
                if (!(8 & t))
                    return;
                let r = new Set(null == o ? void 0 : o.current);
                if (r.add(e),
                !r.size)
                    return;
                let a = l.current;
                if (!a || !u.current)
                    return;
                let i = n.target;
                i && i instanceof HTMLElement ? function(e, t) {
                    var n;
                    for (let r of e)
                        if (null == (n = r.current) ? void 0 : n.contains(t))
                            return !0;
                    return !1
                }(r, i) ? (l.current = i,
                K(i)) : (n.preventDefault(),
                n.stopPropagation(),
                K(a)) : K(l.current)
            }
            ), !0)
        }
        var q = new Set
          , z = new Map;
        function W(e) {
            e.setAttribute("aria-hidden", "true"),
            e.inert = !0
        }
        function Y(e) {
            let t = z.get(e);
            !t || (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]),
            e.inert = t.inert)
        }
        var J = (0,
        r.createContext)(!1);
        function X(e) {
            return r.default.createElement(J.Provider, {
                value: e.force
            }, e.children)
        }
        function Z() {
            let e = (0,
            r.useContext)(J)
              , t = (0,
            r.useContext)(re)
              , [n,o] = (0,
            r.useState)((()=>{
                if (!e && null !== t || "undefined" == typeof window)
                    return null;
                let n = document.getElementById("headlessui-portal-root");
                if (n)
                    return n;
                let r = document.createElement("div");
                return r.setAttribute("id", "headlessui-portal-root"),
                document.body.appendChild(r)
            }
            ));
            return (0,
            r.useEffect)((()=>{
                null !== n && (document.body.contains(n) || document.body.appendChild(n))
            }
            ), [n]),
            (0,
            r.useEffect)((()=>{
                e || null !== t && o(t.current)
            }
            ), [t, o, e]),
            n
        }
        var ee = r.Fragment;
        function te(e) {
            let t = e
              , n = Z()
              , [o] = (0,
            r.useState)((()=>"undefined" == typeof window ? null : document.createElement("div")))
              , a = i();
            return l((()=>{
                if (n && o)
                    return n.appendChild(o),
                    ()=>{
                        var e;
                        !n || !o || (n.removeChild(o),
                        n.childNodes.length <= 0 && (null == (e = n.parentElement) || e.removeChild(n)))
                    }
            }
            ), [n, o]),
            a && n && o ? (0,
            r.createPortal)(b({
                props: t,
                defaultTag: ee,
                name: "Portal"
            }), o) : null
        }
        var ne = r.Fragment
          , re = (0,
        r.createContext)(null);
        te.Group = function(e) {
            let {target: t, ...n} = e;
            return r.default.createElement(re.Provider, {
                value: t
            }, b({
                props: n,
                defaultTag: ne,
                name: "Popover.Group"
            }))
        }
        ;
        var oe = (0,
        r.createContext)(null);
        function ae() {
            let e = (0,
            r.useContext)(oe);
            if (null === e) {
                let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                throw Error.captureStackTrace && Error.captureStackTrace(e, ae),
                e
            }
            return e
        }
        function le() {
            let[e,t] = (0,
            r.useState)([]);
            return [e.length > 0 ? e.join(" ") : void 0, (0,
            r.useMemo)((()=>function(e) {
                let n = (0,
                r.useCallback)((e=>(t((t=>[...t, e])),
                ()=>t((t=>{
                    let n = t.slice()
                      , r = n.indexOf(e);
                    return -1 !== r && n.splice(r, 1),
                    n
                }
                )))), [])
                  , o = (0,
                r.useMemo)((()=>({
                    register: n,
                    slot: e.slot,
                    name: e.name,
                    props: e.props
                })), [n, e.slot, e.name, e.props]);
                return r.default.createElement(oe.Provider, {
                    value: o
                }, e.children)
            }
            ), [t])]
        }
        function ue(e) {
            let t = ae()
              , n = `headlessui-description-${d()}`;
            return l((()=>t.register(n)), [n, t.register]),
            b({
                props: {
                    ...e,
                    ...{
                        ...t.props,
                        id: n
                    }
                },
                slot: t.slot || {},
                defaultTag: "p",
                name: t.name || "Description"
            })
        }
        var ie = (0,
        r.createContext)((()=>{}
        ));
        function se({children: e, onUpdate: t, type: n, element: o}) {
            let a = (0,
            r.useContext)(ie)
              , u = (0,
            r.useCallback)(((...e)=>{
                null == t || t(...e),
                a(...e)
            }
            ), [a, t]);
            return l((()=>(u(0, n, o),
            ()=>u(1, n, o))), [u, n, o]),
            r.default.createElement(ie.Provider, {
                value: u
            }, e)
        }
        ie.displayName = "StackContext";
        var ce = {
            0: (e,t)=>e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            }
        }
          , de = (0,
        r.createContext)(null);
        function pe(e) {
            let t = (0,
            r.useContext)(de);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${be.displayName} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, pe),
                t
            }
            return t
        }
        function fe(e, t) {
            return m(t.type, ce, e, t)
        }
        de.displayName = "DialogContext";
        var ve = y((function(e, t) {
            let {open: n, onClose: o, initialFocus: a, ...u} = e
              , [s,c] = (0,
            r.useState)(0)
              , p = I();
            void 0 === n && null !== p && (n = m(p, {
                0: !0,
                1: !1
            }));
            let f = (0,
            r.useRef)(new Set)
              , h = (0,
            r.useRef)(null)
              , y = v(h, t)
              , g = e.hasOwnProperty("open") || null !== p
              , x = e.hasOwnProperty("onClose");
            if (!g && !x)
                throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
            if (!g)
                throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
            if (!x)
                throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
            if ("boolean" != typeof n)
                throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);
            if ("function" != typeof o)
                throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
            let E = n ? 0 : 1
              , w = null !== p ? 0 === p : 0 === E
              , [R,k] = (0,
            r.useReducer)(fe, {
                titleId: null,
                descriptionId: null
            })
              , P = (0,
            r.useCallback)((()=>o(!1)), [o])
              , S = (0,
            r.useCallback)((e=>k({
                type: 0,
                id: e
            })), [k])
              , T = i() && 0 === E
              , D = s > 1
              , O = null !== (0,
            r.useContext)(de);
            _(h, T ? m(D ? "parent" : "leaf", {
                parent: 16,
                leaf: 30
            }) : 1, {
                initialFocus: a,
                containers: f
            }),
            function(e, t=!0) {
                l((()=>{
                    if (!t || !e.current)
                        return;
                    let n = e.current;
                    q.add(n);
                    for (let e of z.keys())
                        e.contains(n) && (Y(e),
                        z.delete(e));
                    return document.querySelectorAll("body > *").forEach((e=>{
                        if (e instanceof HTMLElement) {
                            for (let t of q)
                                if (e.contains(t))
                                    return;
                            1 === q.size && (z.set(e, {
                                "aria-hidden": e.getAttribute("aria-hidden"),
                                inert: e.inert
                            }),
                            W(e))
                        }
                    }
                    )),
                    ()=>{
                        if (q.delete(n),
                        q.size > 0)
                            document.querySelectorAll("body > *").forEach((e=>{
                                if (e instanceof HTMLElement && !z.has(e)) {
                                    for (let t of q)
                                        if (e.contains(t))
                                            return;
                                    z.set(e, {
                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                        inert: e.inert
                                    }),
                                    W(e)
                                }
                            }
                            ));
                        else
                            for (let e of z.keys())
                                Y(e),
                                z.delete(e)
                    }
                }
                ), [t])
            }(h, !!D && T),
            C("mousedown", (e=>{
                var t;
                let n = e.target;
                0 === E && (D || (null == (t = h.current) ? void 0 : t.contains(n)) || P())
            }
            )),
            C("keydown", (e=>{
                "Escape" === e.key && 0 === E && (D || (e.preventDefault(),
                e.stopPropagation(),
                P()))
            }
            )),
            (0,
            r.useEffect)((()=>{
                if (0 !== E || O)
                    return;
                let e = document.documentElement.style.overflow
                  , t = document.documentElement.style.paddingRight
                  , n = window.innerWidth - document.documentElement.clientWidth;
                return document.documentElement.style.overflow = "hidden",
                document.documentElement.style.paddingRight = `${n}px`,
                ()=>{
                    document.documentElement.style.overflow = e,
                    document.documentElement.style.paddingRight = t
                }
            }
            ), [E, O]),
            (0,
            r.useEffect)((()=>{
                if (0 !== E || !h.current)
                    return;
                let e = new IntersectionObserver((e=>{
                    for (let t of e)
                        0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && P()
                }
                ));
                return e.observe(h.current),
                ()=>e.disconnect()
            }
            ), [E, h, P]);
            let[A,F] = le()
              , M = `headlessui-dialog-${d()}`
              , L = (0,
            r.useMemo)((()=>[{
                dialogState: E,
                close: P,
                setTitleId: S
            }, R]), [E, R, P, S])
              , N = (0,
            r.useMemo)((()=>({
                open: 0 === E
            })), [E])
              , $ = {
                ref: y,
                id: M,
                role: "dialog",
                "aria-modal": 0 === E || void 0,
                "aria-labelledby": R.titleId,
                "aria-describedby": A,
                onClick(e) {
                    e.stopPropagation()
                }
            }
              , B = u;
            return r.default.createElement(se, {
                type: "Dialog",
                element: h,
                onUpdate: (0,
                r.useCallback)(((e,t,n)=>{
                    "Dialog" === t && m(e, {
                        0() {
                            f.current.add(n),
                            c((e=>e + 1))
                        },
                        1() {
                            f.current.add(n),
                            c((e=>e - 1))
                        }
                    })
                }
                ), [])
            }, r.default.createElement(X, {
                force: !0
            }, r.default.createElement(te, null, r.default.createElement(de.Provider, {
                value: L
            }, r.default.createElement(te.Group, {
                target: h
            }, r.default.createElement(X, {
                force: !1
            }, r.default.createElement(F, {
                slot: N,
                name: "Dialog.Description"
            }, b({
                props: {
                    ...B,
                    ...$
                },
                slot: N,
                defaultTag: "div",
                features: 3,
                visible: w,
                name: "Dialog"
            }))))))))
        }
        ))
          , me = y((function(e, t) {
            let[{dialogState: n, close: o}] = pe("Dialog.Overlay");
            return b({
                props: {
                    ...e,
                    ref: v(t),
                    id: `headlessui-dialog-overlay-${d()}`,
                    "aria-hidden": !0,
                    onClick: (0,
                    r.useCallback)((e=>{
                        if (e.target === e.currentTarget) {
                            if (E(e.currentTarget))
                                return e.preventDefault();
                            e.preventDefault(),
                            e.stopPropagation(),
                            o()
                        }
                    }
                    ), [o])
                },
                slot: (0,
                r.useMemo)((()=>({
                    open: 0 === n
                })), [n]),
                defaultTag: "div",
                name: "Dialog.Overlay"
            })
        }
        ));
        var be = Object.assign(ve, {
            Overlay: me,
            Title: function(e) {
                let[{dialogState: t, setTitleId: n}] = pe("Dialog.Title")
                  , o = `headlessui-dialog-title-${d()}`;
                (0,
                r.useEffect)((()=>(n(o),
                ()=>n(null))), [o, n]);
                let a = (0,
                r.useMemo)((()=>({
                    open: 0 === t
                })), [t]);
                return b({
                    props: {
                        ...e,
                        id: o
                    },
                    slot: a,
                    defaultTag: "h2",
                    name: "Dialog.Title"
                })
            },
            Description: ue
        })
          , he = {
            0: e=>({
                ...e,
                disclosureState: m(e.disclosureState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e=>1 === e.disclosureState ? e : {
                ...e,
                disclosureState: 1
            },
            4: e=>!0 === e.linkedPanel ? e : {
                ...e,
                linkedPanel: !0
            },
            5: e=>!1 === e.linkedPanel ? e : {
                ...e,
                linkedPanel: !1
            },
            2: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            3: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , ye = (0,
        r.createContext)(null);
        function ge(e) {
            let t = (0,
            r.useContext)(ye);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${Re.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, ge),
                t
            }
            return t
        }
        ye.displayName = "DisclosureContext";
        var xe = (0,
        r.createContext)(null);
        function Ee(e) {
            let t = (0,
            r.useContext)(xe);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${Re.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, Ee),
                t
            }
            return t
        }
        xe.displayName = "DisclosureAPIContext";
        var Ce = (0,
        r.createContext)(null);
        function we(e, t) {
            return m(t.type, he, e, t)
        }
        Ce.displayName = "DisclosurePanelContext";
        var Ie = r.Fragment;
        function Re(e) {
            let {defaultOpen: t=!1, ...n} = e
              , o = `headlessui-disclosure-button-${d()}`
              , a = `headlessui-disclosure-panel-${d()}`
              , l = (0,
            r.useReducer)(we, {
                disclosureState: t ? 0 : 1,
                linkedPanel: !1,
                buttonId: o,
                panelId: a
            })
              , [{disclosureState: u},i] = l;
            (0,
            r.useEffect)((()=>i({
                type: 2,
                buttonId: o
            })), [o, i]),
            (0,
            r.useEffect)((()=>i({
                type: 3,
                panelId: a
            })), [a, i]);
            let s = (0,
            r.useCallback)((e=>{
                i({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : document.getElementById(o) : document.getElementById(o);
                null == t || t.focus()
            }
            ), [i, o])
              , c = (0,
            r.useMemo)((()=>({
                close: s
            })), [s])
              , p = (0,
            r.useMemo)((()=>({
                open: 0 === u,
                close: s
            })), [u, s]);
            return r.default.createElement(ye.Provider, {
                value: l
            }, r.default.createElement(xe.Provider, {
                value: c
            }, r.default.createElement(R, {
                value: m(u, {
                    0: 0,
                    1: 1
                })
            }, b({
                props: n,
                slot: p,
                defaultTag: Ie,
                name: "Disclosure"
            }))))
        }
        var ke = y((function(e, t) {
            let[n,o] = ge("Disclosure.Button")
              , a = (0,
            r.useRef)(null)
              , l = v(a, t)
              , u = (0,
            r.useContext)(Ce)
              , i = null !== u && u === n.panelId
              , s = (0,
            r.useCallback)((e=>{
                var t;
                if (i) {
                    if (1 === n.disclosureState)
                        return;
                    switch (e.key) {
                    case " ":
                    case "Enter":
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({
                            type: 0
                        }),
                        null == (t = document.getElementById(n.buttonId)) || t.focus()
                    }
                } else
                    switch (e.key) {
                    case " ":
                    case "Enter":
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({
                            type: 0
                        })
                    }
            }
            ), [o, i, n.disclosureState, n.buttonId])
              , c = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                    e.preventDefault()
                }
            }
            ), [])
              , d = (0,
            r.useCallback)((t=>{
                var r;
                E(t.currentTarget) || e.disabled || (i ? (o({
                    type: 0
                }),
                null == (r = document.getElementById(n.buttonId)) || r.focus()) : o({
                    type: 0
                }))
            }
            ), [o, e.disabled, n.buttonId, i])
              , p = (0,
            r.useMemo)((()=>({
                open: 0 === n.disclosureState
            })), [n])
              , f = P(e, a);
            return b({
                props: {
                    ...e,
                    ...i ? {
                        ref: l,
                        type: f,
                        onKeyDown: s,
                        onClick: d
                    } : {
                        ref: l,
                        id: n.buttonId,
                        type: f,
                        "aria-expanded": e.disabled ? void 0 : 0 === n.disclosureState,
                        "aria-controls": n.linkedPanel ? n.panelId : void 0,
                        onKeyDown: s,
                        onKeyUp: c,
                        onClick: d
                    }
                },
                slot: p,
                defaultTag: "button",
                name: "Disclosure.Button"
            })
        }
        ))
          , Pe = y((function(e, t) {
            let[n,o] = ge("Disclosure.Panel")
              , {close: a} = Ee("Disclosure.Panel")
              , l = v(t, (()=>{
                n.linkedPanel || o({
                    type: 4
                })
            }
            ))
              , u = I()
              , i = null !== u ? 0 === u : 0 === n.disclosureState;
            (0,
            r.useEffect)((()=>()=>o({
                type: 5
            })), [o]),
            (0,
            r.useEffect)((()=>{
                var t;
                1 === n.disclosureState && (null == (t = e.unmount) || t) && o({
                    type: 5
                })
            }
            ), [n.disclosureState, e.unmount, o]);
            let s = (0,
            r.useMemo)((()=>({
                open: 0 === n.disclosureState,
                close: a
            })), [n, a])
              , c = {
                ref: l,
                id: n.panelId
            }
              , d = e;
            return r.default.createElement(Ce.Provider, {
                value: n.panelId
            }, b({
                props: {
                    ...d,
                    ...c
                },
                slot: s,
                defaultTag: "div",
                features: 3,
                visible: i,
                name: "Disclosure.Panel"
            }))
        }
        ));
        Re.Button = ke,
        Re.Panel = Pe;
        var Se = {
            1: e=>e.disabled || 1 === e.listboxState ? e : {
                ...e,
                activeOptionIndex: null,
                listboxState: 1
            },
            0: e=>e.disabled || 0 === e.listboxState ? e : {
                ...e,
                listboxState: 0
            },
            2: (e,t)=>e.disabled === t.disabled ? e : {
                ...e,
                disabled: t.disabled
            },
            3: (e,t)=>e.orientation === t.orientation ? e : {
                ...e,
                orientation: t.orientation
            },
            4(e, t) {
                if (e.disabled || 1 === e.listboxState)
                    return e;
                let n = x(t, {
                    resolveItems: ()=>e.options,
                    resolveActiveIndex: ()=>e.activeOptionIndex,
                    resolveId: e=>e.id,
                    resolveDisabled: e=>e.dataRef.current.disabled
                });
                return "" === e.searchQuery && e.activeOptionIndex === n ? e : {
                    ...e,
                    searchQuery: "",
                    activeOptionIndex: n
                }
            },
            5: (e,t)=>{
                if (e.disabled || 1 === e.listboxState)
                    return e;
                let n = "" !== e.searchQuery ? 0 : 1
                  , r = e.searchQuery + t.value.toLowerCase()
                  , o = (null !== e.activeOptionIndex ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((e=>{
                    var t;
                    return !e.dataRef.current.disabled && (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r))
                }
                ))
                  , a = o ? e.options.indexOf(o) : -1;
                return -1 === a || a === e.activeOptionIndex ? {
                    ...e,
                    searchQuery: r
                } : {
                    ...e,
                    searchQuery: r,
                    activeOptionIndex: a
                }
            }
            ,
            6: e=>e.disabled || 1 === e.listboxState || "" === e.searchQuery ? e : {
                ...e,
                searchQuery: ""
            },
            7: (e,t)=>{
                var n;
                let r = Array.from(null == (n = e.optionsRef.current) ? void 0 : n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce(((e,t,n)=>Object.assign(e, {
                    [t.id]: n
                })), {})
                  , o = [...e.options, {
                    id: t.id,
                    dataRef: t.dataRef
                }].sort(((e,t)=>r[e.id] - r[t.id]));
                return {
                    ...e,
                    options: o
                }
            }
            ,
            8: (e,t)=>{
                let n = e.options.slice()
                  , r = null !== e.activeOptionIndex ? n[e.activeOptionIndex] : null
                  , o = n.findIndex((e=>e.id === t.id));
                return -1 !== o && n.splice(o, 1),
                {
                    ...e,
                    options: n,
                    activeOptionIndex: o === e.activeOptionIndex || null === r ? null : n.indexOf(r)
                }
            }
        }
          , Te = (0,
        r.createContext)(null);
        function De(e) {
            let t = (0,
            r.useContext)(Te);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${Fe.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, De),
                t
            }
            return t
        }
        function Oe(e, t) {
            return m(t.type, Se, e, t)
        }
        Te.displayName = "ListboxContext";
        var Ae = r.Fragment;
        function Fe(e) {
            let {value: t, onChange: n, disabled: o=!1, horizontal: a=!1, ...u} = e
              , i = a ? "horizontal" : "vertical"
              , s = (0,
            r.useReducer)(Oe, {
                listboxState: 1,
                propsRef: {
                    current: {
                        value: t,
                        onChange: n
                    }
                },
                labelRef: (0,
                r.createRef)(),
                buttonRef: (0,
                r.createRef)(),
                optionsRef: (0,
                r.createRef)(),
                disabled: o,
                orientation: i,
                options: [],
                searchQuery: "",
                activeOptionIndex: null
            })
              , [{listboxState: c, propsRef: d, optionsRef: p, buttonRef: f},v] = s;
            l((()=>{
                d.current.value = t
            }
            ), [t, d]),
            l((()=>{
                d.current.onChange = n
            }
            ), [n, d]),
            l((()=>v({
                type: 2,
                disabled: o
            })), [o]),
            l((()=>v({
                type: 3,
                orientation: i
            })), [i]),
            C("mousedown", (e=>{
                var t, n, r;
                let o = e.target;
                0 === c && ((null == (t = f.current) ? void 0 : t.contains(o)) || (null == (n = p.current) ? void 0 : n.contains(o)) || (v({
                    type: 1
                }),
                G(o, 1) || (e.preventDefault(),
                null == (r = f.current) || r.focus())))
            }
            ));
            let h = (0,
            r.useMemo)((()=>({
                open: 0 === c,
                disabled: o
            })), [c, o]);
            return r.default.createElement(Te.Provider, {
                value: s
            }, r.default.createElement(R, {
                value: m(c, {
                    0: 0,
                    1: 1
                })
            }, b({
                props: u,
                slot: h,
                defaultTag: Ae,
                name: "Listbox"
            })))
        }
        var Me = y((function(e, t) {
            var n;
            let[o,l] = De("Listbox.Button")
              , u = v(o.buttonRef, t)
              , i = `headlessui-listbox-button-${d()}`
              , s = a()
              , c = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowDown":
                    e.preventDefault(),
                    l({
                        type: 0
                    }),
                    s.nextFrame((()=>{
                        o.propsRef.current.value || l({
                            type: 4,
                            focus: 0
                        })
                    }
                    ));
                    break;
                case "ArrowUp":
                    e.preventDefault(),
                    l({
                        type: 0
                    }),
                    s.nextFrame((()=>{
                        o.propsRef.current.value || l({
                            type: 4,
                            focus: 3
                        })
                    }
                    ))
                }
            }
            ), [l, o, s])
              , p = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                    e.preventDefault()
                }
            }
            ), [])
              , m = (0,
            r.useCallback)((e=>{
                if (E(e.currentTarget))
                    return e.preventDefault();
                0 === o.listboxState ? (l({
                    type: 1
                }),
                s.nextFrame((()=>{
                    var e;
                    return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))) : (e.preventDefault(),
                l({
                    type: 0
                }))
            }
            ), [l, s, o])
              , h = f((()=>{
                if (o.labelRef.current)
                    return [o.labelRef.current.id, i].join(" ")
            }
            ), [o.labelRef.current, i])
              , y = (0,
            r.useMemo)((()=>({
                open: 0 === o.listboxState,
                disabled: o.disabled
            })), [o]);
            return b({
                props: {
                    ...e,
                    ...{
                        ref: u,
                        id: i,
                        type: P(e, o.buttonRef),
                        "aria-haspopup": !0,
                        "aria-controls": null == (n = o.optionsRef.current) ? void 0 : n.id,
                        "aria-expanded": o.disabled ? void 0 : 0 === o.listboxState,
                        "aria-labelledby": h,
                        disabled: o.disabled,
                        onKeyDown: c,
                        onKeyUp: p,
                        onClick: m
                    }
                },
                slot: y,
                defaultTag: "button",
                name: "Listbox.Button"
            })
        }
        ));
        var Le = y((function(e, t) {
            var n;
            let[u,i] = De("Listbox.Options")
              , s = v(u.optionsRef, t)
              , c = `headlessui-listbox-options-${d()}`
              , p = a()
              , h = a()
              , y = I()
              , g = null !== y ? 0 === y : 0 === u.listboxState;
            l((()=>{
                let e = u.optionsRef.current;
                !e || 0 === u.listboxState && e !== document.activeElement && e.focus({
                    preventScroll: !0
                })
            }
            ), [u.listboxState, u.optionsRef]);
            let x = (0,
            r.useCallback)((e=>{
                switch (h.dispose(),
                e.key) {
                case " ":
                    if ("" !== u.searchQuery)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        i({
                            type: 5,
                            value: e.key
                        });
                case "Enter":
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 1
                    }),
                    null !== u.activeOptionIndex) {
                        let {dataRef: e} = u.options[u.activeOptionIndex];
                        u.propsRef.current.onChange(e.current.value)
                    }
                    o().nextFrame((()=>{
                        var e;
                        return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case m(u.orientation, {
                    vertical: "ArrowDown",
                    horizontal: "ArrowRight"
                }):
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 4,
                        focus: 2
                    });
                case m(u.orientation, {
                    vertical: "ArrowUp",
                    horizontal: "ArrowLeft"
                }):
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 4,
                        focus: 1
                    });
                case "Home":
                case "PageUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 4,
                        focus: 0
                    });
                case "End":
                case "PageDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 4,
                        focus: 3
                    });
                case "Escape":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 1
                    }),
                    p.nextFrame((()=>{
                        var e;
                        return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                case "Tab":
                    e.preventDefault(),
                    e.stopPropagation();
                    break;
                default:
                    1 === e.key.length && (i({
                        type: 5,
                        value: e.key
                    }),
                    h.setTimeout((()=>i({
                        type: 6
                    })), 350))
                }
            }
            ), [p, i, h, u])
              , E = f((()=>{
                var e, t, n;
                return null != (n = null == (e = u.labelRef.current) ? void 0 : e.id) ? n : null == (t = u.buttonRef.current) ? void 0 : t.id
            }
            ), [u.labelRef.current, u.buttonRef.current])
              , C = (0,
            r.useMemo)((()=>({
                open: 0 === u.listboxState
            })), [u]);
            return b({
                props: {
                    ...e,
                    ...{
                        "aria-activedescendant": null === u.activeOptionIndex || null == (n = u.options[u.activeOptionIndex]) ? void 0 : n.id,
                        "aria-labelledby": E,
                        "aria-orientation": u.orientation,
                        id: c,
                        onKeyDown: x,
                        role: "listbox",
                        tabIndex: 0,
                        ref: s
                    }
                },
                slot: C,
                defaultTag: "ul",
                features: 3,
                visible: g,
                name: "Listbox.Options"
            })
        }
        ));
        Fe.Button = Me,
        Fe.Label = function(e) {
            let[t] = De("Listbox.Label")
              , n = `headlessui-listbox-label-${d()}`
              , o = (0,
            r.useCallback)((()=>{
                var e;
                return null == (e = t.buttonRef.current) ? void 0 : e.focus({
                    preventScroll: !0
                })
            }
            ), [t.buttonRef])
              , a = (0,
            r.useMemo)((()=>({
                open: 0 === t.listboxState,
                disabled: t.disabled
            })), [t]);
            return b({
                props: {
                    ...e,
                    ...{
                        ref: t.labelRef,
                        id: n,
                        onClick: o
                    }
                },
                slot: a,
                defaultTag: "label",
                name: "Listbox.Label"
            })
        }
        ,
        Fe.Options = Le,
        Fe.Option = function(e) {
            let {disabled: t=!1, value: n, ...a} = e
              , [u,i] = De("Listbox.Option")
              , s = `headlessui-listbox-option-${d()}`
              , c = null !== u.activeOptionIndex && u.options[u.activeOptionIndex].id === s
              , p = u.propsRef.current.value === n
              , f = (0,
            r.useRef)({
                disabled: t,
                value: n
            });
            l((()=>{
                f.current.disabled = t
            }
            ), [f, t]),
            l((()=>{
                f.current.value = n
            }
            ), [f, n]),
            l((()=>{
                var e, t;
                f.current.textValue = null == (t = null == (e = document.getElementById(s)) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
            }
            ), [f, s]);
            let v = (0,
            r.useCallback)((()=>u.propsRef.current.onChange(n)), [u.propsRef, n]);
            l((()=>(i({
                type: 7,
                id: s,
                dataRef: f
            }),
            ()=>i({
                type: 8,
                id: s
            }))), [f, s]),
            l((()=>{
                var e, t;
                0 === u.listboxState && (!p || (i({
                    type: 4,
                    focus: 4,
                    id: s
                }),
                null == (t = null == (e = document.getElementById(s)) ? void 0 : e.focus) || t.call(e)))
            }
            ), [u.listboxState]),
            l((()=>{
                if (0 !== u.listboxState || !c)
                    return;
                let e = o();
                return e.requestAnimationFrame((()=>{
                    var e, t;
                    null == (t = null == (e = document.getElementById(s)) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                }
                )),
                e.dispose
            }
            ), [s, c, u.listboxState, u.activeOptionIndex]);
            let m = (0,
            r.useCallback)((e=>{
                if (t)
                    return e.preventDefault();
                v(),
                i({
                    type: 1
                }),
                o().nextFrame((()=>{
                    var e;
                    return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))
            }
            ), [i, u.buttonRef, t, v])
              , h = (0,
            r.useCallback)((()=>{
                if (t)
                    return i({
                        type: 4,
                        focus: 5
                    });
                i({
                    type: 4,
                    focus: 4,
                    id: s
                })
            }
            ), [t, s, i])
              , y = (0,
            r.useCallback)((()=>{
                t || c || i({
                    type: 4,
                    focus: 4,
                    id: s
                })
            }
            ), [t, c, s, i])
              , g = (0,
            r.useCallback)((()=>{
                t || !c || i({
                    type: 4,
                    focus: 5
                })
            }
            ), [t, c, i])
              , x = (0,
            r.useMemo)((()=>({
                active: c,
                selected: p,
                disabled: t
            })), [c, p, t]);
            return b({
                props: {
                    ...a,
                    id: s,
                    role: "option",
                    tabIndex: !0 === t ? void 0 : -1,
                    "aria-disabled": !0 === t || void 0,
                    "aria-selected": !0 === p || void 0,
                    disabled: void 0,
                    onClick: m,
                    onFocus: h,
                    onPointerMove: y,
                    onMouseMove: y,
                    onPointerLeave: g,
                    onMouseLeave: g
                },
                slot: x,
                defaultTag: "li",
                name: "Listbox.Option"
            })
        }
        ;
        var Ne = {
            1: e=>1 === e.menuState ? e : {
                ...e,
                activeItemIndex: null,
                menuState: 1
            },
            0: e=>0 === e.menuState ? e : {
                ...e,
                menuState: 0
            },
            2: (e,t)=>{
                let n = x(t, {
                    resolveItems: ()=>e.items,
                    resolveActiveIndex: ()=>e.activeItemIndex,
                    resolveId: e=>e.id,
                    resolveDisabled: e=>e.dataRef.current.disabled
                });
                return "" === e.searchQuery && e.activeItemIndex === n ? e : {
                    ...e,
                    searchQuery: "",
                    activeItemIndex: n
                }
            }
            ,
            3: (e,t)=>{
                let n = "" !== e.searchQuery ? 0 : 1
                  , r = e.searchQuery + t.value.toLowerCase()
                  , o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((e=>{
                    var t;
                    return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                }
                ))
                  , a = o ? e.items.indexOf(o) : -1;
                return -1 === a || a === e.activeItemIndex ? {
                    ...e,
                    searchQuery: r
                } : {
                    ...e,
                    searchQuery: r,
                    activeItemIndex: a
                }
            }
            ,
            4: e=>"" === e.searchQuery ? e : {
                ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            },
            5: (e,t)=>{
                var n;
                let r = Array.from(null == (n = e.itemsRef.current) ? void 0 : n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce(((e,t,n)=>Object.assign(e, {
                    [t.id]: n
                })), {})
                  , o = [...e.items, {
                    id: t.id,
                    dataRef: t.dataRef
                }].sort(((e,t)=>r[e.id] - r[t.id]));
                return {
                    ...e,
                    items: o
                }
            }
            ,
            6: (e,t)=>{
                let n = e.items.slice()
                  , r = null !== e.activeItemIndex ? n[e.activeItemIndex] : null
                  , o = n.findIndex((e=>e.id === t.id));
                return -1 !== o && n.splice(o, 1),
                {
                    ...e,
                    items: n,
                    activeItemIndex: o === e.activeItemIndex || null === r ? null : n.indexOf(r)
                }
            }
        }
          , $e = (0,
        r.createContext)(null);
        function Be(e) {
            let t = (0,
            r.useContext)($e);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${He.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, Be),
                t
            }
            return t
        }
        function Ue(e, t) {
            return m(t.type, Ne, e, t)
        }
        $e.displayName = "MenuContext";
        var je = r.Fragment;
        function He(e) {
            let t = (0,
            r.useReducer)(Ue, {
                menuState: 1,
                buttonRef: (0,
                r.createRef)(),
                itemsRef: (0,
                r.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null
            })
              , [{menuState: n, itemsRef: o, buttonRef: a},l] = t;
            C("mousedown", (e=>{
                var t, r, u;
                let i = e.target;
                0 === n && ((null == (t = a.current) ? void 0 : t.contains(i)) || (null == (r = o.current) ? void 0 : r.contains(i)) || (l({
                    type: 1
                }),
                G(i, 1) || (e.preventDefault(),
                null == (u = a.current) || u.focus())))
            }
            ));
            let u = (0,
            r.useMemo)((()=>({
                open: 0 === n
            })), [n]);
            return r.default.createElement($e.Provider, {
                value: t
            }, r.default.createElement(R, {
                value: m(n, {
                    0: 0,
                    1: 1
                })
            }, b({
                props: e,
                slot: u,
                defaultTag: je,
                name: "Menu"
            })))
        }
        var Ge = y((function(e, t) {
            var n;
            let[o,l] = Be("Menu.Button")
              , u = v(o.buttonRef, t)
              , i = `headlessui-menu-button-${d()}`
              , s = a()
              , c = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowDown":
                    e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: 0
                    }),
                    s.nextFrame((()=>l({
                        type: 2,
                        focus: 0
                    })));
                    break;
                case "ArrowUp":
                    e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: 0
                    }),
                    s.nextFrame((()=>l({
                        type: 2,
                        focus: 3
                    })))
                }
            }
            ), [l, s])
              , p = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                    e.preventDefault()
                }
            }
            ), [])
              , f = (0,
            r.useCallback)((t=>{
                if (E(t.currentTarget))
                    return t.preventDefault();
                e.disabled || (0 === o.menuState ? (l({
                    type: 1
                }),
                s.nextFrame((()=>{
                    var e;
                    return null == (e = o.buttonRef.current) ? void 0 : e.focus({
                        preventScroll: !0
                    })
                }
                ))) : (t.preventDefault(),
                t.stopPropagation(),
                l({
                    type: 0
                })))
            }
            ), [l, s, o, e.disabled])
              , m = (0,
            r.useMemo)((()=>({
                open: 0 === o.menuState
            })), [o]);
            return b({
                props: {
                    ...e,
                    ...{
                        ref: u,
                        id: i,
                        type: P(e, o.buttonRef),
                        "aria-haspopup": !0,
                        "aria-controls": null == (n = o.itemsRef.current) ? void 0 : n.id,
                        "aria-expanded": e.disabled ? void 0 : 0 === o.menuState,
                        onKeyDown: c,
                        onKeyUp: p,
                        onClick: f
                    }
                },
                slot: m,
                defaultTag: "button",
                name: "Menu.Button"
            })
        }
        ))
          , Ke = y((function(e, t) {
            var n, l;
            let[u,i] = Be("Menu.Items")
              , s = v(u.itemsRef, t)
              , c = `headlessui-menu-items-${d()}`
              , p = a()
              , f = I()
              , m = null !== f ? 0 === f : 0 === u.menuState;
            (0,
            r.useEffect)((()=>{
                let e = u.itemsRef.current;
                !e || 0 === u.menuState && e !== document.activeElement && e.focus({
                    preventScroll: !0
                })
            }
            ), [u.menuState, u.itemsRef]),
            S({
                container: u.itemsRef.current,
                enabled: 0 === u.menuState,
                accept: e=>"menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let h = (0,
            r.useCallback)((e=>{
                var t;
                switch (p.dispose(),
                e.key) {
                case " ":
                    if ("" !== u.searchQuery)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        i({
                            type: 3,
                            value: e.key
                        });
                case "Enter":
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 1
                    }),
                    null !== u.activeItemIndex) {
                        let {id: e} = u.items[u.activeItemIndex];
                        null == (t = document.getElementById(e)) || t.click()
                    }
                    o().nextFrame((()=>{
                        var e;
                        return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case "ArrowDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 2,
                        focus: 2
                    });
                case "ArrowUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 2,
                        focus: 1
                    });
                case "Home":
                case "PageUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 2,
                        focus: 0
                    });
                case "End":
                case "PageDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 2,
                        focus: 3
                    });
                case "Escape":
                    e.preventDefault(),
                    e.stopPropagation(),
                    i({
                        type: 1
                    }),
                    o().nextFrame((()=>{
                        var e;
                        return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                            preventScroll: !0
                        })
                    }
                    ));
                    break;
                case "Tab":
                    e.preventDefault(),
                    e.stopPropagation();
                    break;
                default:
                    1 === e.key.length && (i({
                        type: 3,
                        value: e.key
                    }),
                    p.setTimeout((()=>i({
                        type: 4
                    })), 350))
                }
            }
            ), [i, p, u])
              , y = (0,
            r.useCallback)((e=>{
                switch (e.key) {
                case " ":
                    e.preventDefault()
                }
            }
            ), [])
              , g = (0,
            r.useMemo)((()=>({
                open: 0 === u.menuState
            })), [u]);
            return b({
                props: {
                    ...e,
                    ...{
                        "aria-activedescendant": null === u.activeItemIndex || null == (n = u.items[u.activeItemIndex]) ? void 0 : n.id,
                        "aria-labelledby": null == (l = u.buttonRef.current) ? void 0 : l.id,
                        id: c,
                        onKeyDown: h,
                        onKeyUp: y,
                        role: "menu",
                        tabIndex: 0,
                        ref: s
                    }
                },
                slot: g,
                defaultTag: "div",
                features: 3,
                visible: m,
                name: "Menu.Items"
            })
        }
        ))
          , Ve = r.Fragment;
        He.Button = Ge,
        He.Items = Ke,
        He.Item = function(e) {
            let {disabled: t=!1, onClick: n, ...a} = e
              , [u,i] = Be("Menu.Item")
              , s = `headlessui-menu-item-${d()}`
              , c = null !== u.activeItemIndex && u.items[u.activeItemIndex].id === s;
            l((()=>{
                if (0 !== u.menuState || !c)
                    return;
                let e = o();
                return e.requestAnimationFrame((()=>{
                    var e, t;
                    null == (t = null == (e = document.getElementById(s)) ? void 0 : e.scrollIntoView) || t.call(e, {
                        block: "nearest"
                    })
                }
                )),
                e.dispose
            }
            ), [s, c, u.menuState, u.activeItemIndex]);
            let p = (0,
            r.useRef)({
                disabled: t
            });
            l((()=>{
                p.current.disabled = t
            }
            ), [p, t]),
            l((()=>{
                var e, t;
                p.current.textValue = null == (t = null == (e = document.getElementById(s)) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
            }
            ), [p, s]),
            l((()=>(i({
                type: 5,
                id: s,
                dataRef: p
            }),
            ()=>i({
                type: 6,
                id: s
            }))), [p, s]);
            let f = (0,
            r.useCallback)((e=>t ? e.preventDefault() : (i({
                type: 1
            }),
            o().nextFrame((()=>{
                var e;
                return null == (e = u.buttonRef.current) ? void 0 : e.focus({
                    preventScroll: !0
                })
            }
            )),
            n ? n(e) : void 0)), [i, u.buttonRef, t, n])
              , v = (0,
            r.useCallback)((()=>{
                if (t)
                    return i({
                        type: 2,
                        focus: 5
                    });
                i({
                    type: 2,
                    focus: 4,
                    id: s
                })
            }
            ), [t, s, i])
              , m = (0,
            r.useCallback)((()=>{
                t || c || i({
                    type: 2,
                    focus: 4,
                    id: s
                })
            }
            ), [t, c, s, i])
              , h = (0,
            r.useCallback)((()=>{
                t || !c || i({
                    type: 2,
                    focus: 5
                })
            }
            ), [t, c, i])
              , y = (0,
            r.useMemo)((()=>({
                active: c,
                disabled: t
            })), [c, t]);
            return b({
                props: {
                    ...a,
                    id: s,
                    role: "menuitem",
                    tabIndex: !0 === t ? void 0 : -1,
                    "aria-disabled": !0 === t || void 0,
                    disabled: void 0,
                    onClick: f,
                    onFocus: v,
                    onPointerMove: m,
                    onMouseMove: m,
                    onPointerLeave: h,
                    onMouseLeave: h
                },
                slot: y,
                defaultTag: Ve,
                name: "Menu.Item"
            })
        }
        ;
        var Qe = {
            0: e=>({
                ...e,
                popoverState: m(e.popoverState, {
                    0: 1,
                    1: 0
                })
            }),
            1: e=>1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e,t)=>e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e,t)=>e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , _e = (0,
        r.createContext)(null);
        function qe(e) {
            let t = (0,
            r.useContext)(_e);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${et.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, qe),
                t
            }
            return t
        }
        _e.displayName = "PopoverContext";
        var ze = (0,
        r.createContext)(null);
        function We(e) {
            let t = (0,
            r.useContext)(ze);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${et.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, We),
                t
            }
            return t
        }
        ze.displayName = "PopoverAPIContext";
        var Ye = (0,
        r.createContext)(null);
        function Je() {
            return (0,
            r.useContext)(Ye)
        }
        Ye.displayName = "PopoverGroupContext";
        var Xe = (0,
        r.createContext)(null);
        function Ze(e, t) {
            return m(t.type, Qe, e, t)
        }
        Xe.displayName = "PopoverPanelContext";
        function et(e) {
            let t = `headlessui-popover-button-${d()}`
              , n = `headlessui-popover-panel-${d()}`
              , o = (0,
            r.useReducer)(Ze, {
                popoverState: 1,
                button: null,
                buttonId: t,
                panel: null,
                panelId: n
            })
              , [{popoverState: a, button: l, panel: u},i] = o;
            (0,
            r.useEffect)((()=>i({
                type: 3,
                buttonId: t
            })), [t, i]),
            (0,
            r.useEffect)((()=>i({
                type: 5,
                panelId: n
            })), [n, i]);
            let s = (0,
            r.useMemo)((()=>({
                buttonId: t,
                panelId: n,
                close: ()=>i({
                    type: 1
                })
            })), [t, n, i])
              , c = Je()
              , p = null == c ? void 0 : c.registerPopover
              , f = (0,
            r.useCallback)((()=>{
                var e;
                return null != (e = null == c ? void 0 : c.isFocusWithinPopoverGroup()) ? e : (null == l ? void 0 : l.contains(document.activeElement)) || (null == u ? void 0 : u.contains(document.activeElement))
            }
            ), [c, l, u]);
            (0,
            r.useEffect)((()=>null == p ? void 0 : p(s)), [p, s]),
            C("focus", (()=>{
                0 === a && (f() || !l || !u || i({
                    type: 1
                }))
            }
            ), !0),
            C("mousedown", (e=>{
                let t = e.target;
                0 === a && ((null == l ? void 0 : l.contains(t)) || (null == u ? void 0 : u.contains(t)) || (i({
                    type: 1
                }),
                G(t, 1) || (e.preventDefault(),
                null == l || l.focus())))
            }
            ));
            let v = (0,
            r.useCallback)((e=>{
                i({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : l : l;
                null == t || t.focus()
            }
            ), [i, l])
              , h = (0,
            r.useMemo)((()=>({
                close: v
            })), [v])
              , y = (0,
            r.useMemo)((()=>({
                open: 0 === a,
                close: v
            })), [a, v]);
            return r.default.createElement(_e.Provider, {
                value: o
            }, r.default.createElement(ze.Provider, {
                value: h
            }, r.default.createElement(R, {
                value: m(a, {
                    0: 0,
                    1: 1
                })
            }, b({
                props: e,
                slot: y,
                defaultTag: "div",
                name: "Popover"
            }))))
        }
        var tt = y((function(e, t) {
            let[n,o] = qe("Popover.Button")
              , a = (0,
            r.useRef)(null)
              , l = Je()
              , u = null == l ? void 0 : l.closeOthers
              , i = (0,
            r.useContext)(Xe)
              , s = null !== i && i === n.panelId
              , c = v(a, t, s ? null : e=>o({
                type: 2,
                button: e
            }))
              , d = v(a, t)
              , p = (0,
            r.useRef)(null)
              , f = (0,
            r.useRef)("undefined" == typeof window ? null : document.activeElement);
            C("focus", (()=>{
                f.current = p.current,
                p.current = document.activeElement
            }
            ), !0);
            let m = (0,
            r.useCallback)((e=>{
                var t, r;
                if (s) {
                    if (1 === n.popoverState)
                        return;
                    switch (e.key) {
                    case " ":
                    case "Enter":
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({
                            type: 1
                        }),
                        null == (t = n.button) || t.focus()
                    }
                } else
                    switch (e.key) {
                    case " ":
                    case "Enter":
                        e.preventDefault(),
                        e.stopPropagation(),
                        1 === n.popoverState && (null == u || u(n.buttonId)),
                        o({
                            type: 0
                        });
                        break;
                    case "Escape":
                        if (0 !== n.popoverState)
                            return null == u ? void 0 : u(n.buttonId);
                        if (!a.current || !a.current.contains(document.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({
                            type: 1
                        });
                        break;
                    case "Tab":
                        if (0 !== n.popoverState || !n.panel || !n.button)
                            return;
                        if (e.shiftKey) {
                            if (!f.current || (null == (r = n.button) ? void 0 : r.contains(f.current)) || n.panel.contains(f.current))
                                return;
                            let t = H()
                              , o = t.indexOf(f.current);
                            if (t.indexOf(n.button) > o)
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            V(n.panel, 8)
                        } else
                            e.preventDefault(),
                            e.stopPropagation(),
                            V(n.panel, 1)
                    }
            }
            ), [o, n.popoverState, n.buttonId, n.button, n.panel, a, u, s])
              , h = (0,
            r.useCallback)((e=>{
                var t;
                if (!s && (" " === e.key && e.preventDefault(),
                0 === n.popoverState && n.panel && n.button))
                    switch (e.key) {
                    case "Tab":
                        if (!f.current || (null == (t = n.button) ? void 0 : t.contains(f.current)) || n.panel.contains(f.current))
                            return;
                        let r = H()
                          , o = r.indexOf(f.current);
                        if (r.indexOf(n.button) > o)
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        V(n.panel, 8)
                    }
            }
            ), [n.popoverState, n.panel, n.button, s])
              , y = (0,
            r.useCallback)((t=>{
                var r, a;
                E(t.currentTarget) || e.disabled || (s ? (o({
                    type: 1
                }),
                null == (r = n.button) || r.focus()) : (1 === n.popoverState && (null == u || u(n.buttonId)),
                null == (a = n.button) || a.focus(),
                o({
                    type: 0
                })))
            }
            ), [o, n.button, n.popoverState, n.buttonId, e.disabled, u, s])
              , g = (0,
            r.useMemo)((()=>({
                open: 0 === n.popoverState
            })), [n])
              , x = P(e, a);
            return b({
                props: {
                    ...e,
                    ...s ? {
                        ref: d,
                        type: x,
                        onKeyDown: m,
                        onClick: y
                    } : {
                        ref: c,
                        id: n.buttonId,
                        type: x,
                        "aria-expanded": e.disabled ? void 0 : 0 === n.popoverState,
                        "aria-controls": n.panel ? n.panelId : void 0,
                        onKeyDown: m,
                        onKeyUp: h,
                        onClick: y
                    }
                },
                slot: g,
                defaultTag: "button",
                name: "Popover.Button"
            })
        }
        ))
          , nt = y((function(e, t) {
            let[{popoverState: n},o] = qe("Popover.Overlay")
              , a = v(t)
              , l = `headlessui-popover-overlay-${d()}`
              , u = I()
              , i = null !== u ? 0 === u : 0 === n;
            return b({
                props: {
                    ...e,
                    ref: a,
                    id: l,
                    "aria-hidden": !0,
                    onClick: (0,
                    r.useCallback)((e=>{
                        if (E(e.currentTarget))
                            return e.preventDefault();
                        o({
                            type: 1
                        })
                    }
                    ), [o])
                },
                slot: (0,
                r.useMemo)((()=>({
                    open: 0 === n
                })), [n]),
                defaultTag: "div",
                features: 3,
                visible: i,
                name: "Popover.Overlay"
            })
        }
        ))
          , rt = y((function(e, t) {
            let {focus: n=!1, ...o} = e
              , [a,l] = qe("Popover.Panel")
              , {close: u} = We("Popover.Panel")
              , i = (0,
            r.useRef)(null)
              , s = v(i, t, (e=>{
                l({
                    type: 4,
                    panel: e
                })
            }
            ))
              , c = I()
              , d = null !== c ? 0 === c : 0 === a.popoverState
              , p = (0,
            r.useCallback)((e=>{
                var t;
                switch (e.key) {
                case "Escape":
                    if (0 !== a.popoverState || !i.current || !i.current.contains(document.activeElement))
                        return;
                    e.preventDefault(),
                    e.stopPropagation(),
                    l({
                        type: 1
                    }),
                    null == (t = a.button) || t.focus()
                }
            }
            ), [a, i, l]);
            (0,
            r.useEffect)((()=>()=>l({
                type: 4,
                panel: null
            })), [l]),
            (0,
            r.useEffect)((()=>{
                var t;
                e.static || 1 === a.popoverState && (null == (t = e.unmount) || t) && l({
                    type: 4,
                    panel: null
                })
            }
            ), [a.popoverState, e.unmount, e.static, l]),
            (0,
            r.useEffect)((()=>{
                if (!n || 0 !== a.popoverState || !i.current)
                    return;
                let e = document.activeElement;
                i.current.contains(e) || V(i.current, 1)
            }
            ), [n, i, a.popoverState]),
            C("keydown", (e=>{
                var t;
                if (0 !== a.popoverState || !i.current || "Tab" !== e.key || !document.activeElement || !i.current || !i.current.contains(document.activeElement))
                    return;
                e.preventDefault();
                let n = V(i.current, e.shiftKey ? 2 : 4);
                if (3 === n)
                    return null == (t = a.button) ? void 0 : t.focus();
                if (1 === n) {
                    if (!a.button)
                        return;
                    let e = H()
                      , t = e.indexOf(a.button);
                    0 === V(e.splice(t + 1).filter((e=>{
                        var t;
                        return !(null == (t = i.current) ? void 0 : t.contains(e))
                    }
                    )), 1) && V(document.body, 1)
                }
            }
            )),
            C("focus", (()=>{
                var e;
                !n || 0 === a.popoverState && (!i.current || (null == (e = i.current) ? void 0 : e.contains(document.activeElement)) || l({
                    type: 1
                }))
            }
            ), !0);
            let f = (0,
            r.useMemo)((()=>({
                open: 0 === a.popoverState,
                close: u
            })), [a, u])
              , m = {
                ref: s,
                id: a.panelId,
                onKeyDown: p
            };
            return r.default.createElement(Xe.Provider, {
                value: a.panelId
            }, b({
                props: {
                    ...o,
                    ...m
                },
                slot: f,
                defaultTag: "div",
                features: 3,
                visible: d,
                name: "Popover.Panel"
            }))
        }
        ));
        et.Button = tt,
        et.Overlay = nt,
        et.Panel = rt,
        et.Group = function(e) {
            let t = (0,
            r.useRef)(null)
              , [n,o] = (0,
            r.useState)([])
              , a = (0,
            r.useCallback)((e=>{
                o((t=>{
                    let n = t.indexOf(e);
                    if (-1 !== n) {
                        let e = t.slice();
                        return e.splice(n, 1),
                        e
                    }
                    return t
                }
                ))
            }
            ), [o])
              , l = (0,
            r.useCallback)((e=>(o((t=>[...t, e])),
            ()=>a(e))), [o, a])
              , u = (0,
            r.useCallback)((()=>{
                var e;
                let r = document.activeElement;
                return !!(null == (e = t.current) ? void 0 : e.contains(r)) || n.some((e=>{
                    var t, n;
                    return (null == (t = document.getElementById(e.buttonId)) ? void 0 : t.contains(r)) || (null == (n = document.getElementById(e.panelId)) ? void 0 : n.contains(r))
                }
                ))
            }
            ), [t, n])
              , i = (0,
            r.useCallback)((e=>{
                for (let t of n)
                    t.buttonId !== e && t.close()
            }
            ), [n])
              , s = (0,
            r.useMemo)((()=>({
                registerPopover: l,
                unregisterPopover: a,
                isFocusWithinPopoverGroup: u,
                closeOthers: i
            })), [l, a, u, i])
              , c = (0,
            r.useMemo)((()=>({})), [])
              , d = {
                ref: t
            }
              , p = e;
            return r.default.createElement(Ye.Provider, {
                value: s
            }, b({
                props: {
                    ...p,
                    ...d
                },
                slot: c,
                defaultTag: "div",
                name: "Popover.Group"
            }))
        }
        ;
        var ot = (0,
        r.createContext)(null);
        function at() {
            let e = (0,
            r.useContext)(ot);
            if (null === e) {
                let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
                throw Error.captureStackTrace && Error.captureStackTrace(e, at),
                e
            }
            return e
        }
        function lt() {
            let[e,t] = (0,
            r.useState)([]);
            return [e.length > 0 ? e.join(" ") : void 0, (0,
            r.useMemo)((()=>function(e) {
                let n = (0,
                r.useCallback)((e=>(t((t=>[...t, e])),
                ()=>t((t=>{
                    let n = t.slice()
                      , r = n.indexOf(e);
                    return -1 !== r && n.splice(r, 1),
                    n
                }
                )))), [])
                  , o = (0,
                r.useMemo)((()=>({
                    register: n,
                    slot: e.slot,
                    name: e.name,
                    props: e.props
                })), [n, e.slot, e.name, e.props]);
                return r.default.createElement(ot.Provider, {
                    value: o
                }, e.children)
            }
            ), [t])]
        }
        function ut(e) {
            let {passive: t=!1, ...n} = e
              , r = at()
              , o = `headlessui-label-${d()}`;
            l((()=>r.register(o)), [o, r.register]);
            let a = {
                ...n,
                ...{
                    ...r.props,
                    id: o
                }
            };
            return t && delete a.onClick,
            b({
                props: a,
                slot: r.slot || {},
                defaultTag: "label",
                name: r.name || "Label"
            })
        }
        var it = {
            0: (e,t)=>({
                ...e,
                options: [...e.options, {
                    id: t.id,
                    element: t.element,
                    propsRef: t.propsRef
                }]
            }),
            1(e, t) {
                let n = e.options.slice()
                  , r = e.options.findIndex((e=>e.id === t.id));
                return -1 === r ? e : (n.splice(r, 1),
                {
                    ...e,
                    options: n
                })
            }
        }
          , st = (0,
        r.createContext)(null);
        function ct(e) {
            let t = (0,
            r.useContext)(st);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <${pt.name} /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, ct),
                t
            }
            return t
        }
        function dt(e, t) {
            return m(t.type, it, e, t)
        }
        st.displayName = "RadioGroupContext";
        function pt(e) {
            let {value: t, onChange: n, disabled: o=!1, ...a} = e
              , [{options: l},u] = (0,
            r.useReducer)(dt, {
                options: []
            })
              , [i,s] = lt()
              , [c,p] = le()
              , f = `headlessui-radiogroup-${d()}`
              , v = (0,
            r.useRef)(null)
              , m = (0,
            r.useMemo)((()=>l.find((e=>!e.propsRef.current.disabled))), [l])
              , h = (0,
            r.useMemo)((()=>l.some((e=>e.propsRef.current.value === t))), [l, t])
              , y = (0,
            r.useCallback)((e=>{
                var r;
                if (o || e === t)
                    return !1;
                let a = null == (r = l.find((t=>t.propsRef.current.value === e))) ? void 0 : r.propsRef.current;
                return !(null == a ? void 0 : a.disabled) && (n(e),
                !0)
            }
            ), [n, t, o, l]);
            S({
                container: v.current,
                accept: e=>"radio" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                walk(e) {
                    e.setAttribute("role", "none")
                }
            });
            let g = (0,
            r.useCallback)((e=>{
                if (!v.current)
                    return;
                let t = l.filter((e=>!1 === e.propsRef.current.disabled)).map((e=>e.element.current));
                switch (e.key) {
                case "ArrowLeft":
                case "ArrowUp":
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    2 === V(t, 18)) {
                        let e = l.find((e=>e.element.current === document.activeElement));
                        e && y(e.propsRef.current.value)
                    }
                    break;
                case "ArrowRight":
                case "ArrowDown":
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    2 === V(t, 20)) {
                        let e = l.find((e=>e.element.current === document.activeElement));
                        e && y(e.propsRef.current.value)
                    }
                    break;
                case " ":
                    {
                        e.preventDefault(),
                        e.stopPropagation();
                        let t = l.find((e=>e.element.current === document.activeElement));
                        t && y(t.propsRef.current.value)
                    }
                }
            }
            ), [v, l, y])
              , x = (0,
            r.useCallback)((e=>(u({
                type: 0,
                ...e
            }),
            ()=>u({
                type: 1,
                id: e.id
            }))), [u])
              , E = (0,
            r.useMemo)((()=>({
                registerOption: x,
                firstOption: m,
                containsCheckedOption: h,
                change: y,
                disabled: o,
                value: t
            })), [x, m, h, y, o, t])
              , C = {
                ref: v,
                id: f,
                role: "radiogroup",
                "aria-labelledby": i,
                "aria-describedby": c,
                onKeyDown: g
            };
            return r.default.createElement(p, {
                name: "RadioGroup.Description"
            }, r.default.createElement(s, {
                name: "RadioGroup.Label"
            }, r.default.createElement(st.Provider, {
                value: E
            }, b({
                props: {
                    ...a,
                    ...C
                },
                defaultTag: "div",
                name: "RadioGroup"
            }))))
        }
        pt.Option = function(e) {
            let t = (0,
            r.useRef)(null)
              , n = `headlessui-radiogroup-option-${d()}`
              , [o,a] = lt()
              , [u,i] = le()
              , {addFlag: s, removeFlag: c, hasFlag: p} = function(e=0) {
                let[t,n] = (0,
                r.useState)(e);
                return {
                    addFlag: (0,
                    r.useCallback)((e=>n((t=>t | e))), [n]),
                    hasFlag: (0,
                    r.useCallback)((e=>Boolean(t & e)), [t]),
                    removeFlag: (0,
                    r.useCallback)((e=>n((t=>t & ~e))), [n]),
                    toggleFlag: (0,
                    r.useCallback)((e=>n((t=>t ^ e))), [n])
                }
            }(1)
              , {value: f, disabled: v=!1, ...m} = e
              , h = (0,
            r.useRef)({
                value: f,
                disabled: v
            });
            l((()=>{
                h.current.value = f
            }
            ), [f, h]),
            l((()=>{
                h.current.disabled = v
            }
            ), [v, h]);
            let {registerOption: y, disabled: g, change: x, firstOption: E, containsCheckedOption: C, value: w} = ct("RadioGroup.Option");
            l((()=>y({
                id: n,
                element: t,
                propsRef: h
            })), [n, y, t, e]);
            let I = (0,
            r.useCallback)((()=>{
                var e;
                !x(f) || (s(2),
                null == (e = t.current) || e.focus())
            }
            ), [s, x, f])
              , R = (0,
            r.useCallback)((()=>s(2)), [s])
              , k = (0,
            r.useCallback)((()=>c(2)), [c])
              , P = (null == E ? void 0 : E.id) === n
              , S = g || v
              , T = w === f
              , D = {
                ref: t,
                id: n,
                role: "radio",
                "aria-checked": T ? "true" : "false",
                "aria-labelledby": o,
                "aria-describedby": u,
                "aria-disabled": !!S || void 0,
                tabIndex: S ? -1 : T || !C && P ? 0 : -1,
                onClick: S ? void 0 : I,
                onFocus: S ? void 0 : R,
                onBlur: S ? void 0 : k
            }
              , O = (0,
            r.useMemo)((()=>({
                checked: T,
                disabled: S,
                active: p(2)
            })), [T, S, p]);
            return r.default.createElement(i, {
                name: "RadioGroup.Description"
            }, r.default.createElement(a, {
                name: "RadioGroup.Label"
            }, b({
                props: {
                    ...m,
                    ...D
                },
                slot: O,
                defaultTag: "div",
                name: "RadioGroup.Option"
            })))
        }
        ,
        pt.Label = ut,
        pt.Description = ue;
        var ft = (0,
        r.createContext)(null);
        ft.displayName = "GroupContext";
        var vt = r.Fragment;
        function mt(e) {
            let {checked: t, onChange: n, ...o} = e
              , a = `headlessui-switch-${d()}`
              , l = (0,
            r.useContext)(ft)
              , u = (0,
            r.useRef)(null)
              , i = v(u, null === l ? null : l.setSwitch)
              , s = (0,
            r.useCallback)((()=>n(!t)), [n, t])
              , c = (0,
            r.useCallback)((e=>{
                if (E(e.currentTarget))
                    return e.preventDefault();
                e.preventDefault(),
                s()
            }
            ), [s])
              , p = (0,
            r.useCallback)((e=>{
                "Tab" !== e.key && e.preventDefault(),
                " " === e.key && s()
            }
            ), [s])
              , f = (0,
            r.useCallback)((e=>e.preventDefault()), [])
              , m = (0,
            r.useMemo)((()=>({
                checked: t
            })), [t]);
            return b({
                props: {
                    ...o,
                    ...{
                        id: a,
                        ref: i,
                        role: "switch",
                        type: P(e, u),
                        tabIndex: 0,
                        "aria-checked": t,
                        "aria-labelledby": null == l ? void 0 : l.labelledby,
                        "aria-describedby": null == l ? void 0 : l.describedby,
                        onClick: c,
                        onKeyUp: p,
                        onKeyPress: f
                    }
                },
                slot: m,
                defaultTag: "button",
                name: "Switch"
            })
        }
        mt.Group = function(e) {
            let[t,n] = (0,
            r.useState)(null)
              , [o,a] = lt()
              , [l,u] = le()
              , i = (0,
            r.useMemo)((()=>({
                switch: t,
                setSwitch: n,
                labelledby: o,
                describedby: l
            })), [t, n, o, l]);
            return r.default.createElement(u, {
                name: "Switch.Description"
            }, r.default.createElement(a, {
                name: "Switch.Label",
                props: {
                    onClick() {
                        !t || (t.click(),
                        t.focus({
                            preventScroll: !0
                        }))
                    }
                }
            }, r.default.createElement(ft.Provider, {
                value: i
            }, b({
                props: e,
                defaultTag: vt,
                name: "Switch.Group"
            }))))
        }
        ,
        mt.Label = ut,
        mt.Description = ue;
        var bt = {
            0: (e,t)=>e.selectedIndex === t.index ? e : {
                ...e,
                selectedIndex: t.index
            },
            1: (e,t)=>e.orientation === t.orientation ? e : {
                ...e,
                orientation: t.orientation
            },
            2: (e,t)=>e.activation === t.activation ? e : {
                ...e,
                activation: t.activation
            },
            3: (e,t)=>e.tabs.includes(t.tab) ? e : {
                ...e,
                tabs: [...e.tabs, t.tab]
            },
            4: (e,t)=>({
                ...e,
                tabs: e.tabs.filter((e=>e !== t.tab))
            }),
            5: (e,t)=>e.panels.includes(t.panel) ? e : {
                ...e,
                panels: [...e.panels, t.panel]
            },
            6: (e,t)=>({
                ...e,
                panels: e.panels.filter((e=>e !== t.panel))
            }),
            7: e=>({
                ...e
            })
        }
          , ht = (0,
        r.createContext)(null);
        function yt(e) {
            let t = (0,
            r.useContext)(ht);
            if (null === t) {
                let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, yt),
                t
            }
            return t
        }
        function gt(e, t) {
            return m(t.type, bt, e, t)
        }
        ht.displayName = "TabsContext";
        var xt = r.Fragment;
        function Et(e) {
            var t, n;
            let o = `headlessui-tabs-tab-${d()}`
              , [{selectedIndex: a, tabs: u, panels: i, orientation: s, activation: c},{dispatch: p, change: f}] = yt(Et.name)
              , h = (0,
            r.useRef)(null)
              , y = v(h, (e=>{
                !e || p({
                    type: 7
                })
            }
            ));
            l((()=>(p({
                type: 3,
                tab: h
            }),
            ()=>p({
                type: 4,
                tab: h
            }))), [p, h]);
            let g = u.indexOf(h)
              , x = g === a
              , E = (0,
            r.useCallback)((e=>{
                let t = u.map((e=>e.current)).filter(Boolean);
                if (" " === e.key || "Enter" === e.key)
                    return e.preventDefault(),
                    e.stopPropagation(),
                    void f(g);
                switch (e.key) {
                case "Home":
                case "PageUp":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    V(t, 1);
                case "End":
                case "PageDown":
                    return e.preventDefault(),
                    e.stopPropagation(),
                    V(t, 8)
                }
                return m(s, {
                    vertical: ()=>"ArrowUp" === e.key ? V(t, 18) : "ArrowDown" === e.key ? V(t, 20) : void 0,
                    horizontal: ()=>"ArrowLeft" === e.key ? V(t, 18) : "ArrowRight" === e.key ? V(t, 20) : void 0
                })
            }
            ), [u, s, g, f])
              , C = (0,
            r.useCallback)((()=>{
                var e;
                null == (e = h.current) || e.focus()
            }
            ), [h])
              , w = (0,
            r.useCallback)((()=>{
                var e;
                null == (e = h.current) || e.focus(),
                f(g)
            }
            ), [f, g, h])
              , I = (0,
            r.useMemo)((()=>({
                selected: x
            })), [x])
              , R = {
                ref: y,
                onKeyDown: E,
                onFocus: "manual" === c ? C : w,
                onClick: w,
                id: o,
                role: "tab",
                type: P(e, h),
                "aria-controls": null == (n = null == (t = i[g]) ? void 0 : t.current) ? void 0 : n.id,
                "aria-selected": x,
                tabIndex: x ? 0 : -1
            };
            return b({
                props: {
                    ...e,
                    ...R
                },
                slot: I,
                defaultTag: "button",
                name: "Tabs.Tab"
            })
        }
        function Ct(e, ...t) {
            e && t.length > 0 && e.classList.add(...t)
        }
        function wt(e, ...t) {
            e && t.length > 0 && e.classList.remove(...t)
        }
        function It(e, t, n, r, a, l) {
            let u = o()
              , i = void 0 !== l ? function(e) {
                let t = {
                    called: !1
                };
                return (...n)=>{
                    if (!t.called)
                        return t.called = !0,
                        e(...n)
                }
            }(l) : ()=>{}
            ;
            return wt(e, ...a),
            Ct(e, ...t, ...n),
            u.nextFrame((()=>{
                wt(e, ...n),
                Ct(e, ...r),
                u.add(function(e, t) {
                    let n = o();
                    if (!e)
                        return n.dispose;
                    let {transitionDuration: r, transitionDelay: a} = getComputedStyle(e)
                      , [l,u] = [r, a].map((e=>{
                        let[t=0] = e.split(",").filter(Boolean).map((e=>e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e))).sort(((e,t)=>t - e));
                        return t
                    }
                    ));
                    return 0 !== l ? n.setTimeout((()=>{
                        t("finished")
                    }
                    ), l + u) : t("finished"),
                    n.add((()=>t("cancelled"))),
                    n.dispose
                }(e, (n=>(wt(e, ...r, ...t),
                Ct(e, ...a),
                i(n)))))
            }
            )),
            u.add((()=>wt(e, ...t, ...n, ...r, ...a))),
            u.add((()=>i("cancelled"))),
            u.dispose
        }
        function Rt(e="") {
            return (0,
            r.useMemo)((()=>e.split(" ").filter((e=>e.trim().length > 1))), [e])
        }
        Et.Group = function(e) {
            let {defaultIndex: t=0, vertical: n=!1, manual: o=!1, onChange: a, selectedIndex: l=null, ...u} = e
              , i = n ? "vertical" : "horizontal"
              , s = o ? "manual" : "auto"
              , [c,d] = (0,
            r.useReducer)(gt, {
                selectedIndex: null,
                tabs: [],
                panels: [],
                orientation: i,
                activation: s
            })
              , p = (0,
            r.useMemo)((()=>({
                selectedIndex: c.selectedIndex
            })), [c.selectedIndex])
              , f = (0,
            r.useRef)((()=>{}
            ));
            (0,
            r.useEffect)((()=>{
                d({
                    type: 1,
                    orientation: i
                })
            }
            ), [i]),
            (0,
            r.useEffect)((()=>{
                d({
                    type: 2,
                    activation: s
                })
            }
            ), [s]),
            (0,
            r.useEffect)((()=>{
                "function" == typeof a && (f.current = a)
            }
            ), [a]),
            (0,
            r.useEffect)((()=>{
                if (c.tabs.length <= 0 || null === l && null !== c.selectedIndex)
                    return;
                let e = c.tabs.map((e=>e.current)).filter(Boolean)
                  , n = e.filter((e=>!e.hasAttribute("disabled")))
                  , r = null != l ? l : t;
                if (r < 0)
                    d({
                        type: 0,
                        index: e.indexOf(n[0])
                    });
                else if (r > c.tabs.length)
                    d({
                        type: 0,
                        index: e.indexOf(n[n.length - 1])
                    });
                else {
                    let t = e.slice(0, r)
                      , o = [...e.slice(r), ...t].find((e=>n.includes(e)));
                    if (!o)
                        return;
                    d({
                        type: 0,
                        index: e.indexOf(o)
                    })
                }
            }
            ), [t, l, c.tabs, c.selectedIndex]);
            let v = (0,
            r.useRef)(c.selectedIndex);
            (0,
            r.useEffect)((()=>{
                v.current = c.selectedIndex
            }
            ), [c.selectedIndex]);
            let m = (0,
            r.useMemo)((()=>[c, {
                dispatch: d,
                change(e) {
                    v.current !== e && f.current(e),
                    v.current = e,
                    d({
                        type: 0,
                        index: e
                    })
                }
            }]), [c, d]);
            return r.default.createElement(ht.Provider, {
                value: m
            }, b({
                props: {
                    ...u
                },
                slot: p,
                defaultTag: xt,
                name: "Tabs"
            }))
        }
        ,
        Et.List = function(e) {
            let[{selectedIndex: t, orientation: n}] = yt("Tab.List");
            return b({
                props: {
                    ...e,
                    role: "tablist",
                    "aria-orientation": n
                },
                slot: {
                    selectedIndex: t
                },
                defaultTag: "div",
                name: "Tabs.List"
            })
        }
        ,
        Et.Panels = function(e) {
            let[{selectedIndex: t}] = yt("Tab.Panels");
            return b({
                props: e,
                slot: (0,
                r.useMemo)((()=>({
                    selectedIndex: t
                })), [t]),
                defaultTag: "div",
                name: "Tabs.Panels"
            })
        }
        ,
        Et.Panel = function(e) {
            var t, n;
            let[{selectedIndex: o, tabs: a, panels: u},{dispatch: i}] = yt("Tab.Panel")
              , s = `headlessui-tabs-panel-${d()}`
              , c = (0,
            r.useRef)(null)
              , p = v(c, (e=>{
                !e || i({
                    type: 7
                })
            }
            ));
            l((()=>(i({
                type: 5,
                panel: c
            }),
            ()=>i({
                type: 6,
                panel: c
            }))), [i, c]);
            let f = u.indexOf(c)
              , m = f === o
              , h = (0,
            r.useMemo)((()=>({
                selected: m
            })), [m]);
            return b({
                props: {
                    ...e,
                    ...{
                        ref: p,
                        id: s,
                        role: "tabpanel",
                        "aria-labelledby": null == (n = null == (t = a[f]) ? void 0 : t.current) ? void 0 : n.id,
                        tabIndex: m ? 0 : -1
                    }
                },
                slot: h,
                defaultTag: "div",
                features: 3,
                visible: m,
                name: "Tabs.Panel"
            })
        }
        ;
        var kt = (0,
        r.createContext)(null);
        kt.displayName = "TransitionContext";
        var Pt = (0,
        r.createContext)(null);
        function St(e) {
            return "children"in e ? St(e.children) : e.current.filter((({state: e})=>"visible" === e)).length > 0
        }
        function Tt(e) {
            let t = (0,
            r.useRef)(e)
              , n = (0,
            r.useRef)([])
              , o = Q();
            (0,
            r.useEffect)((()=>{
                t.current = e
            }
            ), [e]);
            let a = (0,
            r.useCallback)(((e,r=1)=>{
                var a;
                let l = n.current.findIndex((({id: t})=>t === e));
                -1 !== l && (m(r, {
                    0() {
                        n.current.splice(l, 1)
                    },
                    1() {
                        n.current[l].state = "hidden"
                    }
                }),
                !St(n) && o.current && (null == (a = t.current) || a.call(t)))
            }
            ), [t, o, n])
              , l = (0,
            r.useCallback)((e=>{
                let t = n.current.find((({id: t})=>t === e));
                return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                    id: e,
                    state: "visible"
                }),
                ()=>a(e, 0)
            }
            ), [n, a]);
            return (0,
            r.useMemo)((()=>({
                children: n,
                register: l,
                unregister: a
            })), [l, a, n])
        }
        function Dt() {}
        Pt.displayName = "NestingContext";
        var Ot = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function At(e) {
            var t;
            let n = {};
            for (let r of Ot)
                n[r] = null != (t = e[r]) ? t : Dt;
            return n
        }
        function Ft(e) {
            let {beforeEnter: t, afterEnter: n, beforeLeave: o, afterLeave: a, enter: u, enterFrom: s, enterTo: c, entered: p, leave: f, leaveFrom: v, leaveTo: h, ...y} = e
              , g = (0,
            r.useRef)(null)
              , [x,E] = (0,
            r.useState)("visible")
              , C = y.unmount ? 0 : 1
              , {show: w, appear: I, initial: k} = function() {
                let e = (0,
                r.useContext)(kt);
                if (null === e)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , {register: P, unregister: S} = function() {
                let e = (0,
                r.useContext)(Pt);
                if (null === e)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , T = d()
              , D = (0,
            r.useRef)(!1)
              , O = Tt((()=>{
                D.current || (E("hidden"),
                S(T),
                U.current.afterLeave())
            }
            ));
            l((()=>{
                if (T)
                    return P(T)
            }
            ), [P, T]),
            l((()=>{
                if (1 === C && T) {
                    if (w && "visible" !== x)
                        return void E("visible");
                    m(x, {
                        hidden: ()=>S(T),
                        visible: ()=>P(T)
                    })
                }
            }
            ), [x, T, P, S, w, C]);
            let A = Rt(u)
              , F = Rt(s)
              , M = Rt(c)
              , L = Rt(p)
              , N = Rt(f)
              , $ = Rt(v)
              , B = Rt(h)
              , U = function(e) {
                let t = (0,
                r.useRef)(At(e));
                return (0,
                r.useEffect)((()=>{
                    t.current = At(e)
                }
                ), [e]),
                t
            }({
                beforeEnter: t,
                afterEnter: n,
                beforeLeave: o,
                afterLeave: a
            })
              , j = i();
            (0,
            r.useEffect)((()=>{
                if (j && "visible" === x && null === g.current)
                    throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            ), [g, x, j]);
            let H = k && !I;
            l((()=>{
                let e = g.current;
                if (e && !H)
                    return D.current = !0,
                    w && U.current.beforeEnter(),
                    w || U.current.beforeLeave(),
                    w ? It(e, A, F, M, L, (e=>{
                        D.current = !1,
                        "finished" === e && U.current.afterEnter()
                    }
                    )) : It(e, N, $, B, L, (e=>{
                        D.current = !1,
                        "finished" === e && (St(O) || (E("hidden"),
                        S(T),
                        U.current.afterLeave()))
                    }
                    ))
            }
            ), [U, T, D, S, O, g, H, w, A, F, M, N, $, B]);
            let G = {
                ref: g
            }
              , K = y;
            return r.default.createElement(Pt.Provider, {
                value: O
            }, r.default.createElement(R, {
                value: m(x, {
                    visible: 0,
                    hidden: 1
                })
            }, b({
                props: {
                    ...K,
                    ...G
                },
                defaultTag: "div",
                features: 1,
                visible: "visible" === x,
                name: "Transition.Child"
            })))
        }
        function Mt(e) {
            let {show: t, appear: n=!1, unmount: o, ...a} = e
              , l = I();
            if (void 0 === t && null !== l && (t = m(l, {
                0: !0,
                1: !1
            })),
            ![!0, !1].includes(t))
                throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let[u,i] = (0,
            r.useState)(t ? "visible" : "hidden")
              , s = Tt((()=>{
                i("hidden")
            }
            ))
              , c = function() {
                let e = (0,
                r.useRef)(!0);
                return (0,
                r.useEffect)((()=>{
                    e.current = !1
                }
                ), []),
                e.current
            }()
              , d = (0,
            r.useMemo)((()=>({
                show: t,
                appear: n || !c,
                initial: c
            })), [t, n, c]);
            (0,
            r.useEffect)((()=>{
                t ? i("visible") : St(s) || i("hidden")
            }
            ), [t, s]);
            let p = {
                unmount: o
            };
            return r.default.createElement(Pt.Provider, {
                value: s
            }, r.default.createElement(kt.Provider, {
                value: d
            }, b({
                props: {
                    ...p,
                    as: r.Fragment,
                    children: r.default.createElement(Ft, {
                        ...p,
                        ...a
                    })
                },
                defaultTag: r.Fragment,
                features: 1,
                visible: "visible" === u,
                name: "Transition"
            })))
        }
        Mt.Child = function(e) {
            let t = null !== (0,
            r.useContext)(kt)
              , n = null !== I();
            return !t && n ? r.default.createElement(Mt, {
                ...e
            }) : r.default.createElement(Ft, {
                ...e
            })
        }
        ,
        Mt.Root = Mt
    }
}]);
