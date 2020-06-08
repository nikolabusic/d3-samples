(function(C, T) {
    typeof module === "object" && module.exports ? module.exports = C.document ? T(C) : T : C.Worldcharts = T(C)
})(typeof window !== "undefined" ? window : this, function(C) {
    function T(a, b) {
        var c = "Worldcharts error #" + a + ": errors/" + a;
        if (b) throw Error(c);
        C.console && console.log(c)
    }

    function mb(a, b, c) {
        this.options = b;
        this.elem = a;
        this.prop = c
    }

    function B() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                typeof a !== "object" && (a = {});
                for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" &&
                    Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
                return a
            };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function D(a, b) {
        return parseInt(a, b || 10)
    }

    function ta(a) {
        return typeof a === "string"
    }

    function ba(a) {
        return a && typeof a === "object"
    }

    function Fa(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function ma(a) {
        return typeof a === "number"
    }

    function Ua(a) {
        return N.log(a) /
            N.LN10
    }

    function na(a) {
        return N.pow(10, a)
    }

    function ua(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function r(a) {
        return a !== w && a !== null
    }

    function K(a, b, c) {
        var d, e;
        if (ta(b)) r(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (r(b) && ba(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function qa(a) {
        return Fa(a) ? a : [a]
    }

    function Ma(a, b, c) {
        if (b) return setTimeout(a, b, c);
        a.call(0, c)
    }

    function F(a, b) {
        if (va && !ea && b && b.opacity !== w) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        q(a.style, b)
    }

    function ca(a, b, c, d, e) {
        a = A.createElement(a);
        b && q(a, b);
        e && F(a, {
            padding: 0,
            border: "none",
            margin: 0
        });
        c && F(a, c);
        d && d.appendChild(a);
        return a
    }

    function aa(a, b) {
        var c = function() {};
        c.prototype = new a;
        q(c.prototype, b);
        return c
    }

    function Ga(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function Na(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, j = [];
            (c = a.indexOf(c)) !== -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++) e = e[g[h]];
                if (f.length) f = f.join(":"), g = /\.([0-9])/,
                    h = H.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = t.numberFormat(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = Oa(f, e)
            }
            j.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        j.push(a);
        return j.join("")
    }

    function vb(a, b, c, d, e) {
        var f, g = a,
            c = p(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)
            if (g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        g *= c;
        return g
    }

    function eb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].safeI = e;
        a.sort(function(a,
            c) {
            d = b(a, c);
            return d === 0 ? a.safeI - c.safeI : d
        });
        for (e = 0; e < c; e++) delete a[e].safeI
    }

    function Va(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Ha(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function fb(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Pa(a) {
        gb || (gb = ca(Ia));
        a && gb.appendChild(a);
        gb.innerHTML = ""
    }

    function wa(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }

    function Wa(a, b) {
        b.renderer.globalAnimation = p(a, b.animation)
    }

    function wb() {
        var a =
            H.global,
            b = a.useUTC,
            c = b ? "getUTC" : "get",
            d = b ? "setUTC" : "set";
        xa = a.Date || C.Date;
        xb = b && a.timezoneOffset;
        nb = b && a.getTimezoneOffset;
        yb = c + "Minutes";
        zb = c + "Hours";
        Ab = c + "Day";
        Bb = c + "Date";
        ob = c + "Month";
        pb = c + "FullYear";
        Cb = d + "Month";
        Db = d + "FullYear"
    }

    function P(a) {
        if (!(this instanceof P)) return new P(a);
        this.init(a)
    }

    function J() {}

    function Qa(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function Eb(a, b) {
        var c, d, e, f, g = !1,
            h = a.x,
            i = a.y;
        for (c = 0, d = b.length - 1; c < b.length; d = c++) e = b[c][1] >
            i, f = b[d][1] > i, e !== f && h < (b[d][0] - b[c][0]) * (i - b[c][1]) / (b[d][1] - b[c][1]) + b[c][0] && (g = !g);
        return g
    }

    function Fb(a, b, c, d, e, f, g, h) {
        return ["M", a + e, b, "L", a + c - f, b, "C", a + c - f / 2, b, a + c, b + f / 2, a + c, b + f, "L", a + c, b + d - g, "C", a + c, b + d - g / 2, a + c - g / 2, b + d, a + c - g, b + d, "L", a + h, b + d, "C", a + h / 2, b + d, a, b + d - h / 2, a, b + d - h, "L", a, b + e, "C", a, b + e / 2, a + e / 2, b, a + e, b, "Z"]
    }
    var w, A = C.document,
        N = Math,
        x = N.round,
        fa = N.floor,
        ra = N.ceil,
        v = N.max,
        I = N.min,
        Q = N.abs,
        ia = N.cos,
        oa = N.sin,
        qb = N.PI,
        ja = qb * 2 / 360,
        ya = C.navigator && C.navigator.userAgent || "",
        Gb = C.opera,
        va = /(msie|trident|edge)/i.test(ya) &&
        !Gb,
        hb = A && A.documentMode === 8,
        ib = !va && /AppleWebKit/.test(ya),
        Ja = /Firefox/.test(ya),
        Hb = /(Mobile|Android|Windows Phone)/.test(ya),
        Ba = "http://www.w3.org/2000/svg",
        ea = A && A.createElementNS && !!A.createElementNS(Ba, "svg").createSVGRect,
        Nb = Ja && parseInt(ya.split("Firefox/")[1], 10) < 4,
        ka = A && !ea && !va && !!A.createElement("canvas").getContext,
        Ra, Xa, Ib = {},
        rb = 0,
        gb, H, Oa, jb, U = function() {},
        Y = [],
        Ya = 0,
        Ia = "div",
        Ob = /^[0-9]+$/,
        kb = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
        xa, xb, nb, yb, zb, Ab, Bb, ob, pb, Cb, Db, z = {},
        t;
    t =
        C.Worldcharts ? T(16, !0) : {
            win: C
        };
    t.seriesTypes = z;
    var Ca = [],
        Da, za, n, Sa, sb, Ea, G, W, M, Ta, Ka;
    mb.prototype = {
        dSetter: function() {
            var a = this.paths[0],
                b = this.paths[1],
                c = [],
                d = this.now,
                e = a.length,
                f;
            if (d === 1) c = this.toD;
            else if (e === b.length && d < 1)
                for (; e--;) f = parseFloat(a[e]), c[e] = isNaN(f) ? a[e] : d * parseFloat(b[e] - f) + f;
            else c = b;
            this.elem.attr("d", c)
        },
        update: function() {
            var a = this.elem,
                b = this.prop,
                c = this.now,
                d = this.options.step;
            if (this[b + "Setter"]) this[b + "Setter"]();
            else a.attr ? a.element && a.attr(b, c) : a.style[b] = c + this.unit;
            d && d.call(a, c, this)
        },
        run: function(a, b, c) {
            var d = this,
                e = function(a) {
                    return e.stopped ? !1 : d.step(a)
                },
                f;
            this.startTime = +new xa;
            this.start = a;
            this.end = b;
            this.unit = c;
            this.now = this.start;
            this.pos = 0;
            e.elem = this.elem;
            if (e() && Ca.push(e) === 1) e.timerId = setInterval(function() {
                for (f = 0; f < Ca.length; f++) Ca[f]() || Ca.splice(f--, 1);
                Ca.length || clearInterval(e.timerId)
            }, 13)
        },
        step: function(a) {
            var b = +new xa,
                c, d = this.options;
            c = this.elem;
            var e = d.complete,
                f = d.duration,
                g = d.curAnim,
                h;
            if (c.attr && !c.element) c = !1;
            else if (a || b >= f +
                this.startTime) {
                this.now = this.end;
                this.pos = 1;
                this.update();
                a = g[this.prop] = !0;
                for (h in g) g[h] !== !0 && (a = !1);
                a && e && e.call(c);
                c = !1
            } else this.pos = d.easing((b - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0;
            return c
        },
        initPath: function(a, b, c) {
            var b = b || "",
                d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g, b = b.split(" "),
                c = [].concat(c),
                h, i, j = function(a) {
                    for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6,
                6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        }
    };
    var q = t.extend = function(a, b) {
            var c;
            a || (a = {});
            for (c in b) a[c] = b[c];
            return a
        },
        p = t.pick = function() {
            var a = arguments,
                b, c, d = a.length;
            for (b = 0; b < d; b++)
                if (c = a[b], c !== w && c !== null) return c
        },
        ga = t.wrap = function(a, b, c) {
            var d =
                a[b];
            a[b] = function() {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(d);
                return c.apply(this, a)
            }
        };
    Oa = function(a, b, c) {
        if (!r(b) || isNaN(b)) return H.lang.invalidDate || "";
        var a = p(a, "%Y-%m-%d %H:%M:%S"),
            d = new xa(b - (nb && nb(b) || xb || 0) * 6E4),
            e, f = d[zb](),
            g = d[Ab](),
            h = d[Bb](),
            i = d[ob](),
            j = d[pb](),
            k = H.lang,
            l = k.weekdays,
            d = q({
                a: l[g].substr(0, 3),
                A: l[g],
                d: Ga(h),
                e: h,
                w: g,
                b: k.shortMonths[i],
                B: k.months[i],
                m: Ga(i + 1),
                y: j.toString().substr(2, 2),
                Y: j,
                H: Ga(f),
                k: f,
                I: Ga(f % 12 || 12),
                l: f % 12 || 12,
                M: Ga(d[yb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Ga(d.getSeconds()),
                L: Ga(x(b % 1E3), 3)
            }, t.dateFormats);
        for (e in d)
            for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    jb = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
    };
    t.numberFormat = function(a, b, c, d) {
        var e = H.lang,
            a = +a || 0,
            f = b === -1 ? Math.min((a.toString().split(".")[1] || "").length, 20) : isNaN(b = Math.abs(b)) ? 2 : b,
            b = c === void 0 ? e.decimalPoint : c,
            d = d === void 0 ?
            e.thousandsSep : d,
            e = a < 0 ? "-" : "",
            c = String(D(a = Q(a).toFixed(f))),
            g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Q(a - c).toFixed(f).slice(2) : "")
    };
    Math.easeInOutSine = function(a) {
        return -0.5 * (Math.cos(Math.PI * a) - 1)
    };
    Da = function(a, b) {
        var c = C.getComputedStyle(a, void 0);
        return c && D(c.getPropertyValue(b))
    };
    za = function(a, b) {
        return b.indexOf ? b.indexOf(a) : [].indexOf.call(b, a)
    };
    Sa = function(a, b) {
        return [].filter.call(a, b)
    };
    Ea = function(a, b) {
        for (var c = [], d =
                0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a);
        return c
    };
    sb = function(a) {
        var b = A.documentElement,
            a = a.getBoundingClientRect();
        return {
            top: a.top + (C.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: a.left + (C.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        }
    };
    Ka = function(a) {
        for (var b = Ca.length; b--;)
            if (Ca[b].elem === a) Ca[b].stopped = !0
    };
    n = function(a, b) {
        return Array.prototype.forEach.call(a, b)
    };
    G = function(a, b, c) {
        function d(b) {
            b.target = b.srcElement || C;
            c.call(a, b)
        }
        var e = a.hcEvents = a.hcEvents || {};
        if (a.addEventListener) a.addEventListener(b,
            c, !1);
        else if (a.attachEvent) {
            if (!a.hcEventsIE) a.hcEventsIE = {};
            a.hcEventsIE[c.toString()] = d;
            a.attachEvent("on" + b, d)
        }
        e[b] || (e[b] = []);
        e[b].push(c)
    };
    W = function(a, b, c) {
        function d(b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && (c = a.hcEventsIE[c.toString()], a.detachEvent("on" + b, c))
        }

        function e() {
            var c, e, f;
            if (a.nodeName)
                for (f in b ? (c = {}, c[b] = !0) : c = g, c)
                    if (g[f])
                        for (e = g[f].length; e--;) d(f, g[f][e])
        }
        var f, g = a.hcEvents,
            h;
        if (g) b ? (f = g[b] || [], c ? (h = za(c, f), h > -1 && (f.splice(h, 1), g[b] = f), d(b, c)) :
            (e(), g[b] = [])) : (e(), a.hcEvents = {})
    };
    M = function(a, b, c, d) {
        var e;
        e = a.hcEvents;
        var f, g, h, i, c = c || {};
        if (A.createEvent && (a.dispatchEvent || a.fireEvent)) e = A.createEvent("Events"), e.initEvent(b, !0, !0), e.target = a, q(e, c), a.dispatchEvent ? a.dispatchEvent(e) : a.fireEvent(b, e);
        else if (e) {
            e = e[b] || [];
            f = e.length;
            h = function() {
                c.defaultPrevented = !0
            };
            for (g = 0; g < f; g++) {
                i = e[g];
                if (c.stopped) return;
                c.preventDefault = h;
                c.target = a;
                if (!c.type) c.type = b;
                i.call(a, c) === !1 && c.preventDefault()
            }
        }
        d && !c.defaultPrevented && d(c)
    };
    Ta = function(a,
        b, c) {
        var d, e = "",
            f, g, h;
        ba(c) || (d = arguments, c = {
            duration: d[2],
            easing: d[3],
            complete: d[4]
        });
        if (!ma(c.duration)) c.duration = 400;
        c.easing = Math[c.easing] || Math.easeInOutSine;
        c.curAnim = B(b);
        for (h in b) g = new mb(a, c, h), f = null, h === "d" ? (g.paths = g.initPath(a, a.d, b.d), g.toD = b.d, d = 0, f = 1) : a.attr ? d = a.attr(h) : (d = parseFloat(Da(a, h)) || 0, h !== "opacity" && (e = "px")), f || (f = b[h]), f.match && f.match("px") && (f = f.replace(/px/g, "")), g.run(d, f, e)
    };
    if (C.jQuery) C.jQuery.fn.worldcharts = function() {
        var a = [].slice.call(arguments);
        if (this[0]) return a[0] ?
            (new(t[ta(a[0]) ? a.shift() : "Chart"])(this[0], a[0], a[1]), this) : Y[K(this[0], "data-worldcharts-chart")]
    };
    A && !A.defaultView && (Da = function(a, b) {
        var c;
        c = {
            width: "clientWidth",
            height: "clientHeight"
        }[b];
        if (a.style[b]) return D(a.style[b]);
        b === "opacity" && (b = "filter");
        if (c) return a.style.zoom = 1, a[c] - 2 * Da(a, "padding");
        c = a.currentStyle[b.replace(/\-(\w)/g, function(a, b) {
            return b.toUpperCase()
        })];
        b === "filter" && (c = c.replace(/alpha\(opacity=([0-9]+)\)/, function(a, b) {
            return b / 100
        }));
        return c === "" ? 1 : D(c)
    });
    Array.prototype.forEach ||
        (n = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (b.call(a[c], a[c], c, a) === !1) return c
        });
    Array.prototype.indexOf || (za = function(a, b) {
        var c, d = 0;
        if (b)
            for (c = b.length; d < c; d++)
                if (b[d] === a) return d;
        return -1
    });
    Array.prototype.filter || (Sa = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
        return c
    });
    t.Fx = mb;
    t.inArray = za;
    t.each = n;
    t.grep = Sa;
    t.offset = sb;
    t.map = Ea;
    t.addEvent = G;
    t.removeEvent = W;
    t.fireEvent = M;
    t.animate = Ta;
    t.stop = Ka;
    H = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "js/canvas-tools.js",
            VMLRadialGradientURL: "img/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    align: "center",
                    formatter: function() {
                        return this.y === null ? "" : t.numberFormat(this.y, -1)
                    },
                    style: {
                        color: "contrast",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textShadow: "0 0 6px contrast, 0 0 3px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    padding: 5
                },
                cropThreshold: 300,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: 0.25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ea,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            footerFormat: "",
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Hb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                pointerEvents: "none",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "",
            href: "",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var X = H.plotOptions,
        Za = X.line;
    wb();
    P.prototype = {
        parsers: [{
            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
            parse: function(a) {
                return [D(a[1]), D(a[2]), D(a[3]), parseFloat(a[4], 10)]
            }
        }, {
            regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function(a) {
                return [D(a[1], 16), D(a[2], 16), D(a[3], 16), 1]
            }
        }, {
            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            parse: function(a) {
                return [D(a[1]), D(a[2]), D(a[3]), 1]
            }
        }],
        init: function(a) {
            var b, c, d, e;
            if ((this.input = a) && a.stops) this.stops = Ea(a.stops, function(a) {
                return new P(a[1])
            });
            else
                for (d = this.parsers.length; d-- && !c;) e = this.parsers[d], (b = e.regex.exec(a)) && (c = e.parse(b));
            this.rgba = c || []
        },
        get: function(a) {
            var b = this.input,
                c = this.rgba,
                d;
            this.stops ? (d = B(b), d.stops = [].concat(d.stops), n(this.stops, function(b, c) {
                    d.stops[c] = [d.stops[c][0], b.get(a)]
                })) :
                d = c && !isNaN(c[0]) ? a === "rgb" || !a && c[3] === 1 ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")" : a === "a" ? c[3] : "rgba(" + c.join(",") + ")" : b;
            return d
        },
        brighten: function(a) {
            var b, c = this.rgba;
            if (this.stops) n(this.stops, function(b) {
                b.brighten(a)
            });
            else if (ma(a) && a !== 0)
                for (b = 0; b < 3; b++) c[b] += D(a * 255), c[b] < 0 && (c[b] = 0), c[b] > 255 && (c[b] = 255);
            return this
        },
        setOpacity: function(a) {
            this.rgba[3] = a;
            return this
        }
    };
    J.prototype = {
        opacity: 1,
        textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
        init: function(a, b) {
            this.element = b === "span" ? ca(b) : A.createElementNS(Ba, b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = p(b, this.renderer.globalAnimation, !0);
            Ka(this);
            if (b) {
                b = B(b, {});
                if (c) b.complete = c;
                Ta(this, a, b)
            } else this.attr(a, null, c);
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, i, j, k, l, m, o, u, s = [],
                p;
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                i = d.gradients;
                k = a.stops;
                o = c.radialReference;
                Fa(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                f === "radialGradient" && o && !r(g.gradientUnits) && (h = g, g = B(g, d.getRadialAttr(o, h), {
                    gradientUnits: "userSpaceOnUse"
                }));
                for (u in g) u !== "id" && s.push(u, g[u]);
                for (u in k) s.push(k[u]);
                s = s.join(",");
                i[s] ? o = i[s].attr("id") : (g.id = o = "worldcharts-" + rb++, i[s] = j = d.createElement(f).attr(g).add(d.defs), j.radAttr = h, j.stops = [], n(k, function(a) {
                    a[1].indexOf("rgba") === 0 ? (e = P(a[1]), l = e.get("rgb"), m = e.get("a")) : (l = a[1], m = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": l,
                        "stop-opacity": m
                    }).add(j);
                    j.stops.push(a)
                }));
                p = "url(" + d.url + "#" + o + ")";
                c.setAttribute(b, p);
                c.gradient = s;
                a.toString = function() {
                    return p
                }
            }
        },
        applyTextShadow: function(a) {
            var b = this.element,
                c, d = a.indexOf("contrast") !== -1,
                e = {},
                f = this.renderer.forExport,
                g = f || b.style.textShadow !== w && !va;
            if (d) e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill));
            if (ib || f) e.textRendering = "geometricPrecision";
            g ? this.css(e) : (this.fakeTS = !0, this.ySetter = this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), n(a.split(/\s?,\s?/g),
                function(a) {
                    var d = b.firstChild,
                        e, f, a = a.split(" ");
                    e = a[a.length - 1];
                    (f = a[a.length - 2]) && n(c, function(a, c) {
                        var g;
                        c === 0 && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), c === null && b.setAttribute("y", 0));
                        g = a.cloneNode(1);
                        K(g, {
                            "class": "worldcharts-text-shadow",
                            fill: e,
                            stroke: e,
                            "stroke-opacity": 1 / v(D(f), 3),
                            "stroke-width": f,
                            "stroke-linejoin": "round"
                        });
                        b.insertBefore(g, d)
                    })
                }))
        },
        attr: function(a, b, c) {
            var d, e = this.element,
                f, g = this,
                h;
            typeof a === "string" && b !== w && (d = a, a = {}, a[d] =
                b);
            if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a) {
                    b = a[d];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0);
                    if (this.rotation && (d === "x" || d === "y")) this.doTransform = !0;
                    h || (this[d + "Setter"] || this._defaultSetter).call(this, b, d, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b)
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1
            }
            c && c();
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, a === "height" ? Math.max(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = K(b, "class") || "";
            c.indexOf(a) === -1 && K(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = p(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path",
                a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        },
        crisp: function(a) {
            var b, c = {},
                d, e = a.strokeWidth || this.strokeWidth || 0;
            d = x(e) % 2 / 2;
            a.x = fa(a.x || this.x || 0) + d;
            a.y = fa(a.y || this.y || 0) + d;
            a.width = fa((a.width || this.width || 0) - 2 * d);
            a.height = fa((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            if (a && a.color) a.fill = a.color;
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth =
                    a && a.width && d.nodeName.toLowerCase() === "text" && D(a.width) || this.textWidth;
                b && (a = q(b, c));
                this.styles = a;
                e && (ka || !ea && this.renderer.forExport) && delete a.width;
                if (va && !ea) F(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    K(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            Xa && a === "click" ? (d.ontouchstart = function(a) {
                    c.touchEventFired = xa.now();
                    a.preventDefault();
                    b.call(d, a)
                }, d.onclick =
                function(a) {
                    (ya.indexOf("Android") === -1 || xa.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
                }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            var b = this.renderer.gradients[this.element.gradient];
            this.element.radialReference = a;
            b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX ||
                0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (r(c) || r(d)) && a.push("scale(" + p(c, 1) + " " + p(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d,
                e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || ta(c)) this.alignTo = d = c || "renderer", ua(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = p(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = x(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({
                    bottom: 1,
                    middle: 2
                }[e] ||
                1);
            h[b ? "translateY" : "y"] = x(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function(a, b) {
            var c, d = this.renderer,
                e, f, g, h = this.element,
                i = this.styles;
            e = this.textStr;
            var j, k = h.style,
                l, m = d.cache,
                o = d.cacheKeys,
                u;
            f = p(b, this.rotation);
            g = f * ja;
            e !== w && (u = ["", f || 0, i && i.fontSize, h.style.width].join(","), u = e === "" || Ob.test(e) ? "num:" + e.toString().length + u : e + u);
            u && !a && (c = m[u]);
            if (!c) {
                if (h.namespaceURI === Ba || d.forExport) {
                    try {
                        l = this.fakeTS && function(a) {
                            n(h.querySelectorAll(".worldcharts-text-shadow"),
                                function(b) {
                                    b.style.display = a
                                })
                        }, Ja && k.textShadow ? (j = k.textShadow, k.textShadow = "") : l && l("none"), c = h.getBBox ? q({}, h.getBBox()) : {
                            width: h.offsetWidth,
                            height: h.offsetHeight
                        }, j ? k.textShadow = j : l && l("")
                    } catch (s) {}
                    if (!c || c.width < 0) c = {
                        width: 0,
                        height: 0
                    }
                } else c = this.htmlGetBBox();
                if (d.isSVG) {
                    d = c.width;
                    e = c.height;
                    if (va && i && i.fontSize === "11px" && e.toPrecision(3) === "16.9") c.height = e = 14;
                    if (f) c.width = Q(e * oa(g)) + Q(d * ia(g)), c.height = Q(e * ia(g)) + Q(d * oa(g))
                }
                if (u) {
                    for (; o.length > 250;) delete m[o.shift()];
                    m[u] || o.push(u);
                    m[u] = c
                }
            }
            return c
        },
        show: function(a) {
            return this.attr({
                visibility: a ? "inherit" : "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d;
            if (a) this.parentGroup = a;
            this.parentInverted = a && a.inverted;

            this.textStr !== void 0 && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex) d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            Ka(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && n(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div &&
                d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && ua(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, i, j, k;
            if (a) {
                i = p(a.width, 3);
                j = (a.opacity || 0.15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + p(a.offsetX, 1) + ", " + p(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f = g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    K(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j * e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: "none"
                    });
                    if (c) K(f, "height", v(K(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            this.element.nodeName === "circle" && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = p(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b,
                a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = D(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = A.createElementNS(Ba, "title"), this.element.appendChild(b));
            b.appendChild(A.createTextNode(String(p(a), "").replace(/<[^>]*>/g, "")))
        },
        textSetter: function(a) {
            // if (a !== this.textStr) delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)
            if (a !== this.textStr) { 
                delete this.bBox;
                this.textStr = a;
                this.added && this.renderer.buildText(this);
            }
        },
        fillSetter: function(a, b, c) {
            typeof a === "string" ? c.setAttribute(b,
                a) : a && this.colorGradient(a, b, c)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" ? c.removeAttribute(b) : c.setAttribute(b, a)
        },
        zIndexSetter: function(a, b) {
            var c = this.renderer,
                d = this.parentGroup,
                c = (d || c).element || c.box,
                e, f, g = this.element,
                h;
            e = this.added;
            var i;
            r(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                if ((a = this.zIndex) && d) d.handleZ = !0;
                d = c.childNodes;
                for (i = 0; i < d.length && !h; i++)
                    if (e = d[i], f = K(e, "zIndex"), e !== g && (D(f) > a || !r(a) && r(f))) c.insertBefore(g, e), h = !0;
                h || c.appendChild(g)
            }
            return h
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    J.prototype.yGetter = J.prototype.xGetter;
    J.prototype.translateXSetter = J.prototype.translateYSetter = J.prototype.rotationSetter = J.prototype.verticalAlignSetter = J.prototype.scaleXSetter = J.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    J.prototype["stroke-widthSetter"] = J.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], J.prototype.fillSetter.call(this, this.stroke,
            "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;
        else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var la = function() {
        this.init.apply(this, arguments)
    };
    la.prototype = {
        Element: J,
        init: function(a, b, c, d, e, f) {
            var g, d = this.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            a.innerHTML.indexOf("xmlns") === -1 && K(g, "xmlns", Ba);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Ja || ib) && A.getElementsByTagName("base").length ? C.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Worldmaps 4.2.1"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = f;
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.setSize(b, c, !1);
            var h;
            if (Ja && a.getBoundingClientRect) this.subPixelFix = b = function() {
                F(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                F(a, {
                    left: ra(h.left) - h.left + "px",
                    top: ra(h.top) - h.top + "px"
                })
            }, b(), G(C, "resize", b)
        },
        getStyle: function(a) {
            return this.style = q({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            fb(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && W(C, "resize", this.subPixelFix);
            return this.alignedObjects =
                null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        getRadialAttr: function(a, b) {
            return {
                cx: a[0] - a[2] / 2 + b.cx * a[2],
                cy: a[1] - a[2] / 2 + b.cy * a[2],
                r: b.r * a[2]
            }
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = p(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j = K(b, "x"), k = a.styles, l = a.textWidth, m = k && k.lineHeight, o = k && k.textShadow, u = k && k.textOverflow === "ellipsis", s = g.length, R = l && !a.added && this.box, y = function(a) {
                    return m ? D(m) : c.fontMetrics(/(px|em)$/.test(a &&
                        a.style.fontSize) ? a.style.fontSize : k && k.fontSize || c.style.fontSize || 12, a).h
                }, E = function(a) {
                    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }; s--;) b.removeChild(g[s]);
            // !f && !o && !u && e.indexOf(" ") === -1 ? b.appendChild(A.createTextNode(E(e))) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, R && R.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), n(e, function(e, f) {
            !f && !o && !u && e.indexOf(" ") === -1 ? 
                b.appendChild(A.createTextNode(E(e))) 
                : (h = /<.*style="([^"]+)".*>/, 
                    i = /<.*href="(http[^"]+)".*>/, 
                    R && R.appendChild(b), 
                    e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), 
                    n(e, function(e, f) {
                var g, m = 0,
                    e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                n(g, function(e) {
                    if (e !== "" || g.length === 1) {
                        var o = {},
                            s = A.createElementNS(Ba, "tspan"),
                            n;
                        h.test(e) && (n = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), K(s, "style", n));
                        i.test(e) && !d && (K(s, "onclick", 'location.href="' + e.match(i)[1] + '"'), F(s, {
                            cursor: "pointer"
                        }));
                        e = E(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (e !== " ") {
                            s.appendChild(A.createTextNode(e));
                            if (m) o.dx = 0;
                            else if (f && j !== null) o.x = j;
                            K(s, o);
                            b.appendChild(s);
                            !m && f && (!ea && d && F(s, {
                                display: "block"
                            }), K(s, "dy", y(s)));
                            if (l) {
                                for (var o = e.replace(/([^\^])-/g, "$1- ").split(" "), p = g.length > 1 || f || o.length > 1 && k.whiteSpace !== "nowrap", R, V, r, q = [], w = y(s), v = 1, t = a.rotation, x = e, B = x.length;
                                    (p || u) && (o.length || q.length);) a.rotation = 0, R = a.getBBox(!0), r = R.width, !ea && c.forExport && (r = c.measureSpanWidth(s.firstChild.data, a.styles)), R = r > l, V === void 0 && (V = R), u && V ? (B /= 2, x === "" || !R && B < 0.5 ? o = [] : (R && (V = !0), x = e.substring(0, x.length + (R ? -1 :
                                    1) * ra(B)), o = [x + (l > 3 ? "\u2026" : "")], s.removeChild(s.firstChild))) : !R || o.length === 1 ? (o = q, q = [], o.length && (v++, s = A.createElementNS(Ba, "tspan"), K(s, {
                                    dy: w,
                                    x: j
                                }), n && K(s, "style", n), b.appendChild(s)), r > l && (l = r)) : (s.removeChild(s.firstChild), q.unshift(o.pop())), o.length && s.appendChild(A.createTextNode(o.join(" ").replace(/- /g, "-")));
                                V && a.attr("title", a.textStr);
                                a.rotation = t
                            }
                            m++
                        }
                    }
                })
            }), R && R.removeChild(b), o && a.applyTextShadow && a.applyTextShadow(o))
        },
        getContrast: function(a) {
            a = P(a).rgba;
            return a[0] + a[1] + a[2] > 384 ?
                "#000000" : "#FFFFFF"
        },
        button: function(a, b, c, d, e, f, g, h, i) {
            var j = this.label(a, b, c, i, null, null, null, null, "button"),
                k = 0,
                l, m, o, u, s, n, a = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                e = B({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: a,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, e);
            o = e.style;
            delete e.style;
            f = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            u = f.style;
            delete f.style;
            g = B(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            s = g.style;
            delete g.style;
            h = B(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            n = h.style;
            delete h.style;
            G(j.element, va ? "mouseover" : "mouseenter", function() {
                k !== 3 && j.attr(f).css(u)
            });
            G(j.element, va ? "mouseout" : "mouseleave", function() {
                k !== 3 && (l = [e, f, g][k], m = [o, u, s][k], j.attr(l).css(m))
            });
            j.setState = function(a) {
                (j.state = k = a) ? a === 2 ? j.attr(g).css(s) : a === 3 && j.attr(h).css(n): j.attr(e).css(o)
            };
            return j.on("click", function(a) {
                k !== 3 && d.call(j, a)
            }).attr(e).css(q({
                cursor: "default"
            }, o))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = x(a[1]) -
                b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = x(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: "none"
            };
            Fa(a) ? b.d = a : ba(a) && q(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ba(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            if (ba(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d ||
                    0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            var e = ba(a) ? a.r : e,
                g = this.createElement("rect"),
                a = ba(a) ? a : a === w ? {} : {
                    x: a,
                    y: b,
                    width: v(c, 0),
                    height: v(d, 0)
                };
            if (f !== w) a.strokeWidth = f, a = g.crisp(a);
            if (e) a.r = e;
            g.rSetter = function(a) {
                K(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[p(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return r(a) ? b.attr({
                "class": "worldcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: "none"
            };
            arguments.length > 1 && q(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(x(b), x(c), d, e, f),
                i = /^url\((.*?)\)$/,
                j, k;
            if (h) g = this.path(h), q(g, {
                    symbolName: a,
                    x: b,
                    y: c,
                    width: d,
                    height: e
                }),
                f && q(g, f);
            else if (i.test(a)) k = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(x((d - b[0]) / 2), x((e - b[1]) / 2)))
            }, j = a.match(i)[1], a = Ib[j] || f && f.width && f.height && [f.width, f.height], g = this.image(j).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? k(g, a) : (g.attr({
                width: 0,
                height: 0
            }), ca("img", {
                onload: function() {
                    this.width === 0 && (F(this, {
                        position: "absolute",
                        top: "-999em"
                    }), A.body.appendChild(this));
                    k(g, Ib[j] = [this.width, this.height]);
                    this.parentNode && this.parentNode.removeChild(this)
                },
                src: j
            }));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    c = e.r || c || d,
                    g = e.end - 0.001,
                    d = e.innerR,
                    h = e.open,
                    i = ia(f),
                    j = oa(f),
                    k = ia(g),
                    g = oa(g),
                    e = e.end - f < qb ? 0 : 1;
                return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = I(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    e = e && e.anchorY,
                    i;
                i = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && e > b + g && e < b + d - g ? i.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h &&
                    h < 0 && e > b + g && e < b + d - g ? i.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? i.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && e < 0 && h > a + g && h < a + c - g && i.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return i
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "worldcharts-" + rb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs),
                a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        },
        text: function(a, b, c, d) {
            var e = ka || !ea && this.forExport,
                f = {};
            if (d && (this.allowHTML || !this.forExport)) return this.html(a,
                b, c);
            f.x = Math.round(b || 0);
            if (c) f.y = Math.round(c);
            if (a || a === 0) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            if (!d) a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    m;
                for (m = 0; m < d.length; m++) e = d[m], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        },
        fontMetrics: function(a, b) {
            var c, d, a = a || this.style.fontSize;
            !a && b && C.getComputedStyle && (b = b.element || b, a = (c = C.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? D(a) :
                /em/.test(a) ? parseFloat(a) * 12 : 12;
            c = a < 24 ? a + 3 : x(a * 1.2);
            d = x(c * 0.8);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = v(d * ia(b * ja), 4));
            return {
                x: -a / 3 * oa(b * ja),
                y: d
            }
        },
        label: function(a, b, c, d, e, f, g, h, i) {
            var j = this,
                k = j.g(i),
                l = j.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                m, o, u = 0,
                s = 3,
                p = 0,
                y, E, V, v, da = 0,
                $a = {},
                t, A, z, C, D;
            z = function() {
                var a, b;
                a = l.element.style;
                o = (y === void 0 || E === void 0 || k.styles.textAlign) && r(l.textStr) && l.getBBox();
                k.width = (y || o.width || 0) + 2 * s + p;
                k.height = (E || o.height || 0) + 2 * s;
                t = s + j.fontMetrics(a &&
                    a.fontSize, l).b;
                if (A) {
                    if (!m) a = da, b = (h ? -t : 0) + da, k.box = m = d ? j.symbol(d, a, b, k.width, k.height, $a) : j.rect(a, b, k.width, k.height, 0, $a["stroke-width"]), m.isImg || m.attr("fill", "none"), m.add(k);
                    m.isImg || m.attr(q({
                        width: x(k.width),
                        height: x(k.height)
                    }, $a));
                    $a = null
                }
            };
            C = function() {
                var a = k.styles,
                    a = a && a.textAlign,
                    b = p + s,
                    c;
                c = h ? 0 : t;
                if (r(y) && o && (a === "center" || a === "right")) b += {
                    center: 0.5,
                    right: 1
                }[a] * (y - o.width);
                if (b !== l.x || c !== l.y) l.attr("x", b), c !== w && l.attr("y", c);
                l.x = b;
                l.y = c
            };
            D = function(a, b) {
                m ? m.attr(a, b) : $a[a] = b
            };
            k.onAdd = function() {
                l.add(k);
                k.attr({
                    text: a || a === 0 ? a : "",
                    x: b,
                    y: c
                });
                m && r(e) && k.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            k.widthSetter = function(a) {
                y = a
            };
            k.heightSetter = function(a) {
                E = a
            };
            k.paddingSetter = function(a) {
                if (r(a) && a !== s) s = k.padding = a, C()
            };
            k.paddingLeftSetter = function(a) {
                r(a) && a !== p && (p = a, C())
            };
            k.alignSetter = function(a) {
                a = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[a];
                a !== u && (u = a, o && k.attr({
                    x: b
                }))
            };
            k.textSetter = function(a) {
                a !== w && l.textSetter(a);
                z();
                C()
            };
            k["stroke-widthSetter"] = function(a, b) {
                a && (A = !0);
                da = a % 2 / 2;
                D(b, a)
            };
            k.strokeSetter =
                k.fillSetter = k.rSetter = function(a, b) {
                    b === "fill" && a && (A = !0);
                    D(b, a)
                };
            k.anchorXSetter = function(a, b) {
                e = a;
                D(b, x(a) - da - V)
            };
            k.anchorYSetter = function(a, b) {
                f = a;
                D(b, a - v)
            };
            k.xSetter = function(a) {
                k.x = a;
                u && (a -= u * ((y || o.width) + 2 * s));
                V = x(a);
                k.attr("translateX", V)
            };
            k.ySetter = function(a) {
                v = k.y = x(a);
                k.attr("translateY", v)
            };
            var I = k.css;
            return q(k, {
                css: function(a) {
                    if (a) {
                        var b = {},
                            a = B(a);
                        n(k.textProps, function(c) {
                            a[c] !== w && (b[c] = a[c], delete a[c])
                        });
                        l.css(b)
                    }
                    return I.call(k, a)
                },
                getBBox: function() {
                    return {
                        width: o.width + 2 *
                            s,
                        height: o.height + 2 * s,
                        x: o.x - s,
                        y: o.y - s
                    }
                },
                shadow: function(a) {
                    m && m.shadow(a);
                    return k
                },
                destroy: function() {
                    W(k.element, "mouseenter");
                    W(k.element, "mouseleave");
                    l && (l = l.destroy());
                    m && (m = m.destroy());
                    J.prototype.destroy.call(k);
                    k = j = z = C = D = null
                }
            })
        }
    };
    Ra = la;
    q(J.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            if (a && a.textOverflow === "ellipsis") a.whiteSpace = "nowrap", a.overflow = "hidden";
            this.styles = q(this.styles, a);
            F(this.element,
                a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element;
            if (a.nodeName === "text") a.style.position = "absolute";
            return {
                x: a.offsetLeft,
                y: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            }
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[g],
                    i = this.shadows,
                    j = this.styles;
                F(b, {
                    marginLeft: c,
                    marginTop: d
                });
                i && n(i, function(a) {
                    F(a, {
                        marginLeft: c + 1,
                        marginTop: d +
                            1
                    })
                });
                this.inverted && n(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var k = this.rotation,
                        l, m = D(this.textWidth),
                        o = [k, g, b.innerHTML, this.textWidth, this.textAlign].join(",");
                    if (o !== this.cTT) {
                        l = a.fontMetrics(b.style.fontSize).b;
                        r(k) && this.setSpanRotation(k, h, l);
                        i = p(this.elemWidth, b.offsetWidth);
                        if (i > m && /[ \-]/.test(b.textContent || b.innerText)) F(b, {
                            width: m + "px",
                            display: "block",
                            whiteSpace: j && j.whiteSpace || "normal"
                        }), i = m;
                        this.getSpanCorrection(i, l, h, k, g)
                    }
                    F(b, {
                        left: e + (this.xCorr || 0) +
                            "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    if (ib) l = b.offsetHeight;
                    this.cTT = o
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a, b, c) {
            var d = {},
                e = va ? "-ms-transform" : ib ? "-webkit-transform" : Ja ? "MozTransform" : Gb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Ja ? "Origin" : "-origin")] = d.transformOrigin = b * 100 + "% " + c + "px";
            F(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    q(la.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer;
            d.textSetter =
                function(a) {
                    a !== e.innerHTML && delete this.bBox;
                    e.innerHTML = this.textStr = a;
                    d.htmlUpdateTransform()
                };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                b === "align" && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({
                text: a,
                x: x(b),
                y: x(c)
            }).css({
                position: "absolute",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            if (f.isSVG) d.add = function(a) {
                var b, c = f.box.parentNode,
                    j = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) j.push(a),
                            a = a.parentGroup;
                        n(j.reverse(), function(a) {
                            var d, e = K(a.element, "class");
                            e && (e = {
                                className: e
                            });
                            b = a.div = a.div || ca(Ia, e, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            q(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }
                            });
                            n(["opacity", "visibility"], function(b) {
                                ga(a, b + "Setter", function(a, b, c, e) {
                                    a.call(this, b, c, e);
                                    d[c] = b
                                })
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd &&
                    d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    var ab, O;
    if (!ea && !ka) O = {
        init: function(a, b) {
            var c = ["<", b, ' filled="f" stroked="f"'],
                d = ["position: ", "absolute", ";"],
                e = b === Ia;
            (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
            d.push("visibility: ", e ? "hidden" : "visible");
            c.push(' style="', d.join(""), '"/>');
            if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = ca(c);
            this.renderer = a
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d = b.box,
                e = a && a.inverted,
                d = a ? a.element || a : d;
            if (a) this.parentGroup =
                a;
            e && b.invertChild(c, d);
            d.appendChild(c);
            this.added = !0;
            this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
            if (this.onAdd) this.onAdd();
            return this
        },
        updateTransform: J.prototype.htmlUpdateTransform,
        setSpanRotation: function() {
            var a = this.rotation,
                b = ia(a * ja),
                c = oa(a * ja);
            F(this.element, {
                filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none"
            })
        },
        getSpanCorrection: function(a, b, c, d, e) {
            var f = d ? ia(d * ja) : 1,
                g =
                d ? oa(d * ja) : 0,
                h = p(this.elemHeight, this.element.offsetHeight),
                i;
            this.xCorr = f < 0 && -a;
            this.yCorr = g < 0 && -h;
            i = f * g < 0;
            this.xCorr += g * b * (i ? 1 - c : c);
            this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
            e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), F(this.element, {
                textAlign: e
            }))
        },
        pathToVML: function(a) {
            for (var b = a.length, c = []; b--;)
                if (ma(a[b])) c[b] = x(a[b] * 10) - 5;
                else if (a[b] === "Z") c[b] = "x";
            else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b +
                8] += a[b + 8] > a[b + 6] ? 1 : -1);
            return c.join(" ") || "x"
        },
        clip: function(a) {
            var b = this,
                c;
            a ? (c = a.members, ua(c, b), c.push(b), b.destroyClip = function() {
                ua(c, b)
            }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                clip: hb ? "inherit" : "rect(auto)"
            });
            return b.css(a)
        },
        css: J.prototype.htmlCss,
        safeRemoveChild: function(a) {
            a.parentNode && Pa(a)
        },
        destroy: function() {
            this.destroyClip && this.destroyClip();
            return J.prototype.destroy.apply(this)
        },
        on: function(a, b) {
            this.element["on" + a] = function() {
                var a = C.event;
                a.target = a.srcElement;
                b(a)
            };
            return this
        },
        cutOffPath: function(a, b) {
            var c, a = a.split(/[ ,]/);
            c = a.length;
            if (c === 9 || c === 11) a[c - 4] = a[c - 2] = D(a[c - 2]) - 10 * b;
            return a.join(" ")
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f = this.element,
                g = this.renderer,
                h, i = f.style,
                j, k = f.path,
                l, m, o, u;
            k && typeof k.value !== "string" && (k = "x");
            m = k;
            if (a) {
                o = p(a.width, 3);
                u = (a.opacity || 0.15) / o;
                for (e = 1; e <= 3; e++) {
                    l = o * 2 + 1 - 2 * e;
                    c && (m = this.cutOffPath(k.value, l + 0.5));
                    j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText,
                        '" />'
                    ];
                    h = ca(g.prepVML(j), null, {
                        left: D(i.left) + p(a.offsetX, 1),
                        top: D(i.top) + p(a.offsetY, 1)
                    });
                    if (c) h.cutOff = l + 1;
                    j = ['<stroke color="', a.color || "black", '" opacity="', u * e, '"/>'];
                    ca(g.prepVML(j), null, null, h);
                    b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                    d.push(h)
                }
                this.shadows = d
            }
            return this
        },
        updateShadows: U,
        setAttr: function(a, b) {
            hb ? this.element[a] = b : this.element.setAttribute(a, b)
        },
        classSetter: function(a) {
            this.element.className = a
        },
        dashstyleSetter: function(a, b, c) {
            (c.getElementsByTagName("stroke")[0] ||
                ca(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
            this[b] = a
        },
        dSetter: function(a, b, c) {
            var d = this.shadows,
                a = a || [];
            this.d = a.join && a.join(" ");
            c.path = a = this.pathToVML(a);
            if (d)
                for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
            this.setAttr(b, a)
        },
        fillSetter: function(a, b, c) {
            var d = c.nodeName;
            if (d === "SPAN") c.style.color = a;
            else if (d !== "IMG") c.filled = a !== "none", this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
        },
        "fill-opacitySetter": function(a, b, c) {
            ca(this.renderer.prepVML(["<",
                b.split("-")[0], ' opacity="', a, '"/>'
            ]), null, null, c)
        },
        opacitySetter: U,
        rotationSetter: function(a, b, c) {
            c = c.style;
            this[b] = c[b] = a;
            c.left = -x(oa(a * ja) + 1) + "px";
            c.top = x(ia(a * ja)) + "px"
        },
        strokeSetter: function(a, b, c) {
            this.setAttr("strokecolor", this.renderer.color(a, c, b, this))
        },
        "stroke-widthSetter": function(a, b, c) {
            c.stroked = !!a;
            this[b] = a;
            ma(a) && (a += "px");
            this.setAttr("strokeweight", a)
        },
        titleSetter: function(a, b) {
            this.setAttr(b, a)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" && (a = "visible");
            this.shadows && n(this.shadows,
                function(c) {
                    c.style[b] = a
                });
            c.nodeName === "DIV" && (a = a === "hidden" ? "-999em" : 0, hb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
            c.style[b] = a
        },
        xSetter: function(a, b, c) {
            this[b] = a;
            b === "x" ? b = "left" : b === "y" && (b = "top");
            this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
        },
        zIndexSetter: function(a, b, c) {
            c.style[b] = a
        }
    }, O["stroke-opacitySetter"] = O["fill-opacitySetter"], t.VMLElement = O = aa(J, O), O.prototype.ySetter = O.prototype.widthSetter = O.prototype.heightSetter = O.prototype.xSetter, O = {
        Element: O,
        isIE8: ya.indexOf("MSIE 8.0") >
            -1,
        init: function(a, b, c, d) {
            var e;
            this.alignedObjects = [];
            d = this.createElement(Ia).css(q(this.getStyle(d), {
                position: "relative"
            }));
            e = d.element;
            a.appendChild(d.element);
            this.isVML = !0;
            this.box = e;
            this.boxWrapper = d;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.setSize(b, c, !1);
            if (!A.namespaces.hcv) {
                A.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                try {
                    A.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                } catch (f) {
                    A.styleSheets[0].cssText +=
                        "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            }
        },
        isHidden: function() {
            return !this.box.offsetWidth
        },
        clipRect: function(a, b, c, d) {
            var e = this.createElement(),
                f = ba(a);
            return q(e, {
                members: [],
                count: 0,
                left: (f ? a.x : a) + 1,
                top: (f ? a.y : b) + 1,
                width: (f ? a.width : c) - 1,
                height: (f ? a.height : d) - 1,
                getCSS: function(a) {
                    var b = a.element,
                        c = b.nodeName,
                        a = a.inverted,
                        d = this.top - (c === "shape" ? b.offsetTop : 0),
                        e = this.left,
                        b = e + this.width,
                        f = d + this.height,
                        d = {
                            clip: "rect(" + x(a ? e : d) + "px," +
                                x(a ? f : b) + "px," + x(a ? b : f) + "px," + x(a ? d : e) + "px)"
                        };
                    !a && hb && c === "DIV" && q(d, {
                        width: b + "px",
                        height: f + "px"
                    });
                    return d
                },
                updateClipping: function() {
                    n(e.members, function(a) {
                        a.element && a.css(e.getCSS(a))
                    })
                }
            })
        },
        color: function(a, b, c, d) {
            var e = this,
                f, g = /^rgba/,
                h, i, j = "none";
            a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
            if (i) {
                var k, l, m = a.linearGradient || a.radialGradient,
                    o, u, s, p, y, E = "",
                    a = a.stops,
                    V, r = [],
                    da = function() {
                        h = ['<fill colors="' + r.join(",") + '" opacity="', s, '" o:opacity2="', u, '" type="', i, '" ',
                            E, 'focus="100%" method="any" />'
                        ];
                        ca(e.prepVML(h), null, null, b)
                    };
                o = a[0];
                V = a[a.length - 1];
                o[0] > 0 && a.unshift([0, o[1]]);
                V[0] < 1 && a.push([1, V[1]]);
                n(a, function(a, b) {
                    g.test(a[1]) ? (f = P(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);
                    r.push(a[0] * 100 + "% " + k);
                    b ? (s = l, p = k) : (u = l, y = k)
                });
                if (c === "fill")
                    if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, o = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, E = 'angle="' + (90 - N.atan((m - a) / (o - c)) * 180 / qb) + '"', da();
                    else {
                        var j = m.r,
                            q = j * 2,
                            v = j * 2,
                            w = m.cx,
                            t = m.cy,
                            x = b.radialReference,
                            B, j = function() {
                                x && (B =
                                    d.getBBox(), w += (x[0] - B.x) / B.width - 0.5, t += (x[1] - B.y) / B.height - 0.5, q *= x[2] / B.width, v *= x[2] / B.height);
                                E = 'src="' + H.global.VMLRadialGradientURL + '" size="' + q + "," + v + '" origin="0.5,0.5" position="' + w + "," + t + '" color2="' + y + '" ';
                                da()
                            };
                        d.added ? j() : d.onAdd = j;
                        j = p
                    }
                else j = k
            } else if (g.test(a) && b.tagName !== "IMG") f = P(a), d[c + "-opacitySetter"](f.get("a"), c, b), j = f.get("rgb");
            else {
                j = b.getElementsByTagName(c);
                if (j.length) j[0].opacity = 1, j[0].type = "solid";
                j = a
            }
            return j
        },
        prepVML: function(a) {
            var b = this.isIE8,
                a = a.join("");
            b ? (a =
                a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
            return a
        },
        text: la.prototype.html,
        path: function(a) {
            var b = {
                coordsize: "10 10"
            };
            Fa(a) ? b.d = a : ba(a) && q(b, a);
            return this.createElement("shape").attr(b)
        },
        circle: function(a, b, c) {
            var d = this.symbol("circle");
            if (ba(a)) c = a.r, b = a.y, a = a.x;
            d.isCircle = !0;
            d.r = c;
            return d.attr({
                x: a,
                y: b
            })
        },
        g: function(a) {
            var b;
            a && (b = {
                className: "worldcharts-" + a,
                "class": "worldcharts-" + a
            });
            return this.createElement(Ia).attr(b)
        },
        image: function(a, b, c, d, e) {
            var f = this.createElement("img").attr({
                src: a
            });
            arguments.length > 1 && f.attr({
                x: b,
                y: c,
                width: d,
                height: e
            });
            return f
        },
        createElement: function(a) {
            return a === "rect" ? this.symbol(a) : la.prototype.createElement.call(this, a)
        },
        invertChild: function(a, b) {
            var c = this,
                d = b.style,
                e = a.tagName === "IMG" && a.style;
            F(a, {
                flip: "x",
                left: D(d.width) - (e ? D(e.top) :
                    1),
                top: D(d.height) - (e ? D(e.left) : 1),
                rotation: -90
            });
            n(a.childNodes, function(b) {
                c.invertChild(b, a)
            })
        },
        symbols: {
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    g = e.end,
                    h = e.r || c || d,
                    c = e.innerR,
                    d = ia(f),
                    i = oa(f),
                    j = ia(g),
                    k = oa(g);
                if (g - f === 0) return ["x"];
                f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
                e.open && !c && f.push("e", "M", a, b);
                f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
                f.isArc = !0;
                return f
            },
            circle: function(a, b, c, d, e) {
                e && (c = d = 2 * e.r);
                e && e.isCircle && (a -= c / 2, b -= d / 2);
                return ["wa", a, b, a + c, b + d, a + c, b + d / 2,
                    a + c, b + d / 2, "e"
                ]
            },
            rect: function(a, b, c, d, e) {
                return la.prototype.symbols[!r(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
            }
        }
    }, t.VMLRenderer = ab = function() {
        this.init.apply(this, arguments)
    }, ab.prototype = B(la.prototype, O), Ra = ab;
    la.prototype.measureSpanWidth = function(a, b) {
        var c = A.createElement("span"),
            d;
        d = A.createTextNode(a);
        c.appendChild(d);
        F(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Pa(c);
        return d
    };
    var Jb;
    if (ka) t.CanVGRenderer = O = function() {
            Ba = "http://www.w3.org/1999/xhtml"
        }, O.prototype.symbols = {}, Jb =
        function() {
            function a() {
                var a = b.length,
                    d;
                for (d = 0; d < a; d++) b[d]();
                b = []
            }
            var b = [];
            return {
                push: function(c, d) {
                    if (b.length === 0) {
                        var e = A.getElementsByTagName("head")[0],
                            f = A.createElement("script");
                        f.type = "text/javascript";
                        f.src = d;
                        f.onload = a;
                        e.appendChild(f)
                    }
                    b.push(c)
                }
            }
        }(), Ra = O;
    Qa.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.categories,
                e = a.names,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                i = f === h[0],
                j = f === h[h.length - 1],
                e = d ? p(d[f], e[f], f) : f,
                d = this.label,
                h = h.info,
                k;
            a.isDatetimeAxis &&
                h && (k = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = j;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: j,
                dateTimeLabelFormat: k,
                value: a.isLog ? wa(na(e)) : e
            });
            r(d) ? d && d.attr({
                text: b
            }) : (this.labelLength = (this.label = d = r(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(B(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation = 0)
        },
        getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        },
        handleOverflow: function(a) {
            var b =
                this.axis,
                c = a.x,
                d = b.chart.chartWidth,
                e = b.chart.spacing,
                f = p(b.labelLeft, I(b.pos, e[3])),
                e = p(b.labelRight, v(b.pos + b.len, d - e[1])),
                g = this.label,
                h = this.rotation,
                i = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[b.labelAlign],
                j = g.getBBox().width,
                k = b.slotWidth,
                l = 1,
                m, o = {};
            if (h) h < 0 && c - i * j < f ? m = x(c / ia(h * ja) - f) : h > 0 && c + i * j > e && (m = x((d - c) / ia(h * ja)));
            else if (d = c + (1 - i) * j, c - i * j < f ? k = a.x + k * (1 - i) - f : d > e && (k = e - a.x + k * i, l = -1), k = I(b.slotWidth, k), k < b.slotWidth && b.labelAlign === "center" && (a.x += l * (b.slotWidth - k - i * (b.slotWidth - I(j, k)))), j > k || b.autoRotation &&
                g.styles.width) m = k;
            if (m) {
                o.width = m;
                if (!b.options.labels.style.textOverflow) o.textOverflow = "ellipsis";
                g.css(o)
            }
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis,
                j = i.transA,
                k = i.reversed,
                l = i.staggerLines,
                m = i.tickRotCorr || {
                    x: 0,
                    y: 0
                },
                o = e.y;
            r(o) || (o = i.side === 2 ? m.y + 8 : o = ia(c.rotation * ja) * (m.y - c.getBBox(!1, 0).height / 2));
            a = a + e.x + m.x - (f && d ? f * j * (k ? -1 : 1) : 0);
            b = b + o - (f && !d ? f * j * (k ? 1 : -1) : 0);
            l && (c = g / (h || 1) % l, i.opposite && (c = l - c - 1), b += c * (i.labelOffset / l));
            return {
                x: a,
                y: x(b)
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                i = this.label,
                j = this.pos,
                k = e.labels,
                l = this.gridLine,
                m = h ? h + "Grid" : "grid",
                o = h ? h + "Tick" : "tick",
                u = e[m + "LineWidth"],
                s = e[m + "LineColor"],
                n = e[m + "LineDashStyle"],
                y = e[o + "Length"],
                m = p(e[o + "Width"], !h && d.isXAxis ? 1 : 0),
                E = e[o + "Color"],
                V = e[o + "Position"],
                o = this.mark,
                r = k.step,
                da = !0,
                q = d.tickmarkOffset,
                v = this.getPosition(g, j, q, b),
                t = v.x,
                v = v.y,
                x = g && t === d.pos + d.len || !g && v === d.pos ? -1 : 1,
                c = p(c, 1);
            this.isActive = !0;
            if (u) {
                j = d.getPlotLinePath(j + q, u * x, b, !0);
                if (l === w) {
                    l = {
                        stroke: s,
                        "stroke-width": u
                    };
                    if (n) l.dashstyle = n;
                    if (!h) l.zIndex = 1;
                    if (b) l.opacity = 0;
                    this.gridLine = l = u ? f.path(j).attr(l).add(d.gridGroup) :
                        null
                }
                if (!b && l && j) l[this.isNew ? "attr" : "animate"]({
                    d: j,
                    opacity: c
                })
            }
            if (m && y) V === "inside" && (y = -y), d.opposite && (y = -y), h = this.getMarkPath(t, v, y, m * x, g, f), o ? o.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: E,
                "stroke-width": m,
                opacity: c
            }).add(d.axisGroup);
            if (i && !isNaN(t)) i.xy = v = this.getLabelPosition(t, v, i, g, k, q, a, r), this.isFirst && !this.isLast && !p(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !p(e.showLastLabel, 1) ? da = !1 : g && !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && this.handleOverflow(v), r &&
                a % r && (da = !1), da && !isNaN(v.y) ? (v.opacity = c, i[this.isNew ? "attr" : "animate"](v), this.isNew = !1) : i.attr("y", -9999)
        },
        destroy: function() {
            fb(this, this.axis)
        }
    };
    var Z = t.Axis = function() {
        this.init.apply(this, arguments)
    };
    Z.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#D8D8D8",
            labels: {
                enabled: !0,
                style: {
                    color: "#606060",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0,
                y: 15
            },
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return t.numberFormat(this.total, -1)
                },
                style: B(X.line.dataLabels.style, {
                    color: "#000000"
                })
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.visible = d.visible !== !1;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names =
                this.names || [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = r(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = p(d.crosshair, qa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            za(this,
                a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed === w) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) G(this, f, d[f]);
            if (this.isLog) this.val2lin = Ua, this.lin2val = na
        },
        setOptions: function(a) {
            this.options = B(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions,
                this.defaultLeftAxisOptions
            ][this.side], B(H[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = H.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = Na(h, this);
            else if (c) g = b;
            else if (d) g = Oa(d, b);
            else if (f && a >= 1E3)
                for (; f-- && g === w;) c = Math.pow(1E3, f + 1), a >= c && b * 10 % c === 0 && e[f] !== null && (g = t.numberFormat(b / c, -1) + e[f]);
            g === w && (g = Q(b) >= 1E4 ? t.numberFormat(b, -1) : t.numberFormat(b, -1, w, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.threshold = null;
            a.softThreshold = !a.isXAxis;
            a.buildStacks && a.buildStacks();
            n(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d = c.options,
                        e = d.threshold,
                        f;
                    a.hasVisibleSeries = !0;
                    a.isLog && e <= 0 && (e = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length) a.dataMin = I(p(a.dataMin, d[0]), Va(d)), a.dataMax = v(p(a.dataMax, d[0]), Ha(d))
                    } else {
                        c.getExtremes();
                        f = c.dataMax;
                        c = c.dataMin;
                        if (r(c) && r(f)) a.dataMin = I(p(a.dataMin,
                            c), c), a.dataMax = v(p(a.dataMax, f), f);
                        if (r(e)) a.threshold = e;
                        if (!d.softThreshold || a.isLog) a.softThreshold = !1
                    }
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this,
                h = 1,
                i = 0,
                j = d ? g.oldTransA : g.transA,
                d = d ? g.oldMin : g.min,
                k = g.minPixelPadding,
                e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            if (!j) j = g.transA;
            if (c) h *= -1, i = g.len;
            g.reversed && (h *= -1, i -= h * (g.sector || g.len));
            b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (ma(f) ? j * f * g.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                i, j, k = c && f.oldChartHeight || f.chartHeight,
                l = c && f.oldChartWidth || f.chartWidth,
                m;
            i = this.transB;
            var o = function(a, b, c) {
                    if (a < b || a > c) d ? a = I(v(b, a), c) : m = !0;
                    return a
                },
                e = p(e, this.translate(a, null, null, c)),
                a = c = x(e + i);
            i = j = x(k - e - i);
            isNaN(e) ? m = !0 : this.horiz ?
                (i = h, j = k - this.bottom, a = c = o(a, g, g + this.width)) : (a = g, c = l - this.right, i = j = o(i, h, h + this.height));
            return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = wa(fa(b / a) * a),
                f = wa(ra(c / a) * a),
                g = [];
            if (b === c && ma(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = wa(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f,
                g = f - e;
            if (g &&
                g / c < this.len / 3)
                if (this.isLog) {
                    f = b.length;
                    for (e = 1; e < f; e++) d = d.concat(this.getLogTickPositions(c, b[e - 1], b[e], !0))
                } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
            else
                for (b = e + (b[0] - e) % c; b <= f; b += c) d.push(b);
            d.length !== 0 && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, i, j, k;
            if (this.isXAxis &&
                this.minRange === w && !this.isLog) r(a.min) || r(a.max) ? this.minRange = null : (n(this.series, function(a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                    if (h = i[g] - i[g - 1], f === w || h < f) f = h
            }), this.minRange = I(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                k = this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, p(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = Ha(d);
                c = [b + k, p(a.max, b + k)];
                if (e) c[2] = this.dataMax;
                c = Va(c);
                c - b < k && (d[0] = c - k, d[1] = p(a.min, c - k), b = Ha(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max -
                b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                i = !!b.categories,
                j = b.transA,
                k = b.isXAxis;
            if (k || i || d)
                if (h ? (f = h.minPointOffset, g = h.pointRangePadding) : (n(b.series, function(a) {
                        var b = a.closestPointRange;
                        !a.noSharedTooltip && r(b) && (e = r(e) ? I(e, b) : b)
                    }), n(b.series, function(a) {
                        var c = i ? 1 : k ? p(a.options.pointRange, e, 0) : b.axisPointRange || 0,
                            a = a.options.pointPlacement;
                        d = v(d, c);
                        b.single || (f = v(f, ta(a) ? 0 : c / 2), g = v(g, a === "on" ? 0 : c))
                    })), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding =
                    g *= h, b.pointRange = I(d, c), k) b.closestPointRange = e;
            if (a) b.oldTransA = j;
            b.translationSlope = b.transA = j = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = j * f
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                i = d.maxPadding,
                j = d.minPadding,
                k = d.tickInterval,
                l = d.tickPixelInterval,
                m = b.categories,
                o = b.threshold,
                u = b.softThreshold,
                s, R, y, E;
            !f && !m && !h && this.getTickAmount();
            y = p(b.userMin,
                d.min);
            E = p(b.userMax, d.max);
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = p(c.min, c.dataMin), b.max = p(c.max, c.dataMax), d.type !== b.linkedParent.options.type && T(11, 1)) : (!u && r(o) && (b.dataMin >= o ? (s = o, j = 0) : b.dataMax <= o && (R = o, i = 0)), b.min = p(y, s, b.dataMin), b.max = p(E, R, b.dataMax));
            if (e) !a && I(b.min, p(b.dataMin, b.min)) <= 0 && T(10, 1), b.min = wa(Ua(b.min), 15), b.max = wa(Ua(b.max), 15);
            if (b.range && r(b.max)) b.userMin = b.min = y = v(b.min, b.minFromRange()), b.userMax = E = b.max, b.range = null;
            b.beforePadding &&
                b.beforePadding();
            b.adjustForMinRange();
            if (!m && !b.axisPointRange && !b.usePercentage && !h && r(b.min) && r(b.max) && (c = b.max - b.min)) !r(y) && j && (b.min -= c * j), !r(E) && i && (b.max += c * i);
            if (ma(d.floor)) b.min = v(b.min, d.floor);
            if (ma(d.ceiling)) b.max = I(b.max, d.ceiling);
            if (u && r(b.dataMin))
                if (o = o || 0, !r(y) && b.min < o && b.dataMin >= o) b.min = o;
                else if (!r(E) && b.max > o && b.dataMax <= o) b.max = o;
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !k && l === b.linkedParent.options.tickPixelInterval ? k = b.linkedParent.tickInterval :
                p(k, this.tickAmount ? (b.max - b.min) / v(this.tickAmount - 1, 1) : void 0, m ? 1 : (b.max - b.min) * l / v(b.len, l));
            g && !a && n(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange && !k) b.tickInterval = v(b.pointRange, b.tickInterval);
            a = p(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            if (!k && b.tickInterval < a) b.tickInterval =
                a;
            if (!f && !e && !k) b.tickInterval = vb(b.tickInterval, null, N.pow(10, fa(N.log(b.tickInterval) / N.LN10)), p(d.allowDecimals, !(b.tickInterval > 0.5 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)), !!this.tickAmount);
            if (!this.tickAmount && this.len) b.tickInterval = b.unsquish();
            this.setTickPositions()
        },
        setTickPositions: function() {
            var a = this.options,
                b, c = a.tickPositions,
                d = a.tickPositioner,
                e = a.startOnTick,
                f = a.endOnTick,
                g;
            this.tickmarkOffset = this.categories && a.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
            this.minorTickInterval =
                a.minorTickInterval === "auto" && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            if (!b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions =
                    b, d && (d = d.apply(this, [this.min, this.max])))) this.tickPositions = b = d;
            if (!this.isLinked) this.trimTicks(b, e, f), this.min === this.max && r(this.min) && !this.tickAmount && (g = !0, this.min -= 0.5, this.max += 0.5), this.single = g, !c && !d && this.adjustTickAmount()
        },
        trimTicks: function(a, b, c) {
            var d = a[0],
                e = a[a.length - 1],
                f = this.minPointOffset || 0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            a.length === 0 && r(d) && a.push((e + d) / 2)
        },
        alignToOthers: function() {
            var a = {},
                b, c = this.options;
            this.chart.options.chart.alignTicks !==
                !1 && c.alignTicks !== !1 && n(this.chart[this.coll], function(c) {
                    var e = c.options,
                        e = [c.horiz ? e.left : e.top, e.width, e.height, e.pane].join(",");
                    c.series.length && (a[e] ? b = !0 : a[e] = 1)
                });
            return b
        },
        getTickAmount: function() {
            var a = this.options,
                b = a.tickAmount,
                c = a.tickPixelInterval;
            !r(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
            !b && this.alignToOthers() && (b = ra(this.len / c) + 1);
            if (b < 4) this.finalTickAmt = b, b = 5;
            this.tickAmount = b
        },
        adjustTickAmount: function() {
            var a = this.tickInterval,
                b = this.tickPositions,
                c = this.tickAmount,
                d = this.finalTickAmt,
                e = b && b.length;
            if (e < c) {
                for (; b.length < c;) b.push(wa(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (r(d)) {
                for (a = c = b.length; a--;)(d === 3 && a % 2 === 1 || d <= 2 && a > 0 && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = w
            }
        },
        setScale: function() {
            var a, b;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            n(this.series, function(b) {
                if (b.isDirtyData ||
                    b.isDirty || b.xAxis.isDirty) a = !0
            });
            if (b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers()) {
                if (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax
            } else this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart,
                c = p(c, !0);
            n(f.series, function(a) {
                delete a.kdTree
            });
            e = q(e, {
                min: a,
                max: b
            });
            M(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options,
                f = I(c, p(e.min, c)),
                e = v(d, p(e.max, d));
            this.allowZoomOutside || (r(c) && a <= f && (a = f), r(d) && b >= e && (b = e));
            this.displayBtn = a !== w || b !== w;
            this.setExtremes(a, b, !1, w, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = p(b.width,
                    a.plotWidth - c + (b.offsetRight || 0)),
                f = p(b.height, a.plotHeight),
                g = p(b.top, a.plotTop),
                b = p(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = v(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? wa(na(this.min)) : this.min,
                max: a ? wa(na(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? na(this.min) : this.min,
                b = b ? na(this.max) : this.max;
            a === null ? a = b < 0 ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (p(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        unsquish: function() {
            var a = this.ticks,
                b = this.options.labels,
                c = this.horiz,
                d = this.tickInterval,
                e = d,
                f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
                g, h = b.rotation,
                i = this.chart.renderer.fontMetrics(b.style.fontSize,
                    a[0] && a[0].label),
                j, k = Number.MAX_VALUE,
                l, m = function(a) {
                    a /= f || 1;
                    a = a > 1 ? ra(a) : 1;
                    return a * d
                };
            c ? (l = !b.staggerLines && !b.step && (r(h) ? [h] : f < p(b.autoRotationLimit, 80) && b.autoRotation)) && n(l, function(a) {
                var b;
                if (a === h || a && a >= -90 && a <= 90) j = m(Q(i.h / oa(ja * a))), b = j + Q(a / 360), b < k && (k = b, g = a, e = j)
            }) : b.step || (e = m(i.h));
            this.autoRotation = l;
            this.labelRotation = p(g, h);
            return e
        },
        renderUnsquish: function() {
            var a = this.chart,
                b = a.renderer,
                c = this.tickPositions,
                d = this.ticks,
                e = this.options.labels,
                f = this.horiz,
                g = a.margin,
                h = this.categories ?
                c.length : c.length - 1,
                g = this.slotWidth = f && (e.step || 0) < 2 && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || a.chartWidth * 0.33),
                i = v(1, x(g - 2 * (e.padding || 5))),
                j = {},
                h = b.fontMetrics(e.style.fontSize, d[0] && d[0].label),
                k = e.style.textOverflow,
                l, m = 0,
                o, u;
            if (!ta(e.rotation)) j.rotation = e.rotation || 0;
            if (this.autoRotation) n(c, function(a) {
                if ((a = d[a]) && a.labelLength > m) m = a.labelLength
            }), m > i && m > h.h ? j.rotation = this.labelRotation : this.labelRotation = 0;
            else if (g && (l = {
                    width: i + "px"
                }, !k)) {
                l.textOverflow =
                    "clip";
                for (o = c.length; !f && o--;)
                    if (u = c[o], i = d[u].label)
                        if (i.styles.textOverflow === "ellipsis" && i.css({
                                textOverflow: "clip"
                            }), i.getBBox().height > this.len / c.length - (h.h - h.f) || d[u].labelLength > g) i.specCss = {
                            textOverflow: "ellipsis"
                        }
            }
            if (j.rotation && (l = {
                    width: (m > a.chartHeight * 0.5 ? a.chartHeight * 0.33 : a.chartHeight) + "px"
                }, !k)) l.textOverflow = "ellipsis";
            this.labelAlign = j.align = e.align || this.autoLabelAlign(this.labelRotation);
            n(c, function(a) {
                var b = (a = d[a]) && a.label;
                if (b) b.attr(j), l && b.css(B(l, b.specCss)), delete b.specCss,
                    a.rotation = j.rotation
            });
            this.tickRotCorr = b.rotCorr(h.b, this.labelRotation || 0, this.side !== 0)
        },
        hasData: function() {
            return this.hasVisibleSeries || r(this.min) && r(this.max) && !!this.tickPositions
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                i = b.inverted ? [1, 0, 3, 2][h] : h,
                j, k, l = 0,
                m, o = 0,
                u = d.title,
                s = d.labels,
                R = 0,
                y = a.opposite,
                E = b.axisOffset,
                b = b.clipOffset,
                V = [-1, 1, 1, -1][h],
                q, da = a.axisParent;
            j = a.hasData();
            a.showAxis = k = j || p(d.showEmpty, !0);
            a.staggerLines =
                a.horiz && s.staggerLines;
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(da), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(da), a.labelGroup = c.g("axis-labels").attr({
                zIndex: s.zIndex || 7
            }).addClass("worldcharts-" + a.coll.toLowerCase() + "-labels").add(da);
            if (j || a.isLinked) {
                if (n(e, function(b) {
                        f[b] ? f[b].addLabel() : f[b] = new Qa(a, b)
                    }), a.renderUnsquish(), s.reserveSpace !== !1 && (h === 0 || h === 2 || {
                        1: "left",
                        3: "right"
                    }[h] === a.labelAlign || a.labelAlign === "center") && n(e, function(a) {
                        R = v(f[a].getLabelSize(),
                            R)
                    }), a.staggerLines) R *= a.staggerLines, a.labelOffset = R * (a.opposite ? -1 : 1)
            } else
                for (q in f) f[q].destroy(), delete f[q];
            if (u && u.text && u.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle = c.text(u.text, 0, 0, u.useHTML).attr({
                    zIndex: 7,
                    rotation: u.rotation || 0,
                    align: u.textAlign || {
                        low: y ? "right" : "left",
                        middle: "center",
                        high: y ? "left" : "right"
                    }[u.align]
                }).addClass("worldcharts-" + this.coll.toLowerCase() + "-title").css(u.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (k) l = a.axisTitle.getBBox()[g ? "height" : "width"], m = u.offset, o =
                    r(m) ? 0 : p(u.margin, g ? 5 : 10);
                a.axisTitle[k ? "show" : "hide"](!0)
            }
            a.offset = V * p(d.offset, E[h]);
            a.tickRotCorr = a.tickRotCorr || {
                x: 0,
                y: 0
            };
            c = h === 2 ? a.tickRotCorr.y : 0;
            g = Math.abs(R) + o + (R && V * (g ? p(s.y, a.tickRotCorr.y + 8) : s.x) - c);
            a.axisTitleMargin = p(m, g);
            E[h] = v(E[h], a.axisTitleMargin + l + V * a.offset, g);
            d = d.offset ? 0 : fa(d.lineWidth / 2) * 2;
            b[i] = v(b[i], d)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                i = e.x || 0,
                j = e.y || 0,
                k = D(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? k : 0);
            return {
                x: a ? d + i : b + (g ? this.width : 0) + h + i,
                y: a ? b + j - (g ? this.height :
                    0) + h : d + j
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.isLinked,
                g = a.tickPositions,
                h = a.axisTitle,
                i = a.ticks,
                j = a.minorTicks,
                k = a.alternateBands,
                l = d.stackLabels,
                m = d.alternateGridColor,
                o = a.tickmarkOffset,
                u = d.lineWidth,
                s, p = b.hasRendered && r(a.oldMin) && !isNaN(a.oldMin),
                y = a.showAxis,
                E = c.globalAnimation,
                v, q;
            a.labelEdge.length = 0;
            a.overlap = !1;
            n([i, j, k], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (a.hasData() || f) {
                a.minorTickInterval && !a.categories && n(a.getMinorTickPositions(),
                    function(b) {
                        j[b] || (j[b] = new Qa(a, b, "minor"));
                        p && j[b].isNew && j[b].render(null, !0);
                        j[b].render(null, !1, 1)
                    });
                if (g.length && (n(g, function(b, c) {
                        if (!f || b >= a.min && b <= a.max) i[b] || (i[b] = new Qa(a, b)), p && i[b].isNew && i[b].render(c, !0, 0.1), i[b].render(c)
                    }), o && (a.min === 0 || a.single))) i[-1] || (i[-1] = new Qa(a, -1, null, !0)), i[-1].render(-1);
                m && n(g, function(c, d) {
                    q = g[d + 1] !== w ? g[d + 1] + o : a.max - o;
                    if (d % 2 === 0 && c < a.max && q <= a.max + (b.polar ? -o : o)) k[c] || (k[c] = new t.PlotLineOrBand(a)), v = c + o, k[c].options = {
                        from: e ? na(v) : v,
                        to: e ? na(q) : q,
                        color: m
                    }, k[c].render(), k[c].isActive = !0
                });
                if (!a._addedPlotLB) n((d.plotLines || []).concat(d.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0
            }
            n([i, j, k], function(a) {
                var c, d, e = [],
                    f = E ? E.duration || 500 : 0;
                for (c in a)
                    if (!a[c].isActive) a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c);
                Ma(function() {
                    for (d = e.length; d--;) a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                }, a === k || !b.hasRendered || !f ? 0 : f)
            });
            if (u) s = a.getLinePath(u), a.axisLine ? a.axisLine.animate({
                d: s
            }) : a.axisLine = c.path(s).attr({
                stroke: d.lineColor,
                "stroke-width": u,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[y ? "show" : "hide"](!0);
            if (h && y) h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1;
            l && l.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), n(this.plotLinesAndBands, function(a) {
                a.render()
            }));
            n(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || W(b);
            for (d in c) fb(c[d]), c[d] = null;
            n([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                fb(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            n("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            var c, d = this.crosshair,
                e, f;
            if (!this.crosshair || (r(b) || !p(d.snap, !0)) === !1 || b && b.series && b.series[this.coll] !== this) this.hideCrosshair();
            else if (p(d.snap, !0) ? r(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ?
                this.getPlotLinePath(this.isXAxis ? b.x : p(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null, null, c) || null, c === null) this.hideCrosshair();
            else if (e = this.categories && !this.isRadial, f = p(d.width, e ? this.transA : 1), this.cross) this.cross.attr({
                d: c,
                visibility: "visible",
                "stroke-width": f
            });
            else {
                e = {
                    "stroke-width": f,
                    stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
                    zIndex: p(d.zIndex, 2)
                };
                if (d.dashStyle) e.dashstyle = d.dashStyle;
                this.cross = this.chart.renderer.path(c).attr(e).add()
            }
        },
        hideCrosshair: function() {
            this.cross &&
                this.cross.hide()
        }
    };
    q(Z.prototype, void 0);
    Z.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options,
            f = this.len,
            g = [];
        if (!d) this._minorAutoInterval = null;
        if (a >= 0.5) a = x(a), g = this.getLinearTickPositions(a, b, c);
        else if (a >= 0.08)
            for (var f = fa(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
                i = e.length;
                for (h = 0; h < i && !l; h++) j = Ua(na(f) * e[h]), j > b && (!d || k <= c) && k !== w && g.push(k), k > c && (l = !0), k = j
            } else if (b = na(b), c = na(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = p(a === "auto" ?
                    null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = vb(a, null, N.pow(10, fa(N.log(a) / N.LN10))), g = Ea(this.getLinearTickPositions(a, b, c), Ua), !d) this._minorAutoInterval = a / 5;
        if (!d) this.tickInterval = a;
        return g
    };
    var Kb = t.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Kb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = D(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("",
                0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            ka || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = e.options.animation !== !1 && !e.isHidden && (Q(a - f.x) > 1 || Q(b - f.y) > 1),
                h = e.followPointer || e.len >
                1;
            q(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? w : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? w : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32)
        },
        hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            a = p(a, this.options.hideDelay, 500);
            if (!this.isHidden) this.hideTimer = Ma(function() {
                b.label[a ? "fadeOut" : "hide"]();
                b.isHidden = !0
            }, a)
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = d.plotLeft,
                h =
                0,
                i = 0,
                j, k, a = qa(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === w && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (n(a, function(a) {
                j = a.series.yAxis;
                k = a.series.xAxis;
                h += a.plotX + (!e && k ? k.left - g : 0);
                i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && j ? j.top - f : 0)
            }), h /= a.length, i /= a.length, c = [e ? d.plotWidth - i : h, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - h : i]);
            return Ea(c, x)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g = c.h || 0,
                h, i = ["y", d.chartHeight,
                    b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight
                ],
                j = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth],
                k = p(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative),
                l = function(a, b, c, d, h, i) {
                    var j = c < d - e,
                        l = d + e + c < b,
                        m = d - e - c;
                    d += e;
                    if (k && l) f[a] = d;
                    else if (!k && j) f[a] = m;
                    else if (j) f[a] = I(i - c, m - g < 0 ? m : m - g);
                    else if (l) f[a] = v(h, d + g + c > b ? d : d + g);
                    else return !1
                },
                m = function(a, b, c, d) {
                    var g;
                    d < e || d > b - e ? g = !1 : f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2;
                    return g
                },
                o = function(a) {
                    var b = i;
                    i = j;
                    j = b;
                    h = a
                },
                u = function() {
                    l.apply(0,
                        i) !== !1 ? m.apply(0, j) === !1 && !h && (o(!0), u()) : h ? f.x = f.y = 0 : (o(!0), u())
                };
            (d.inverted || this.len > 1) && o();
            u();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || qa(this),
                c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h, i = {},
                j, k = [];
            j = e.formatter || this.defaultFormatter;
            var i = c.hoverPoints,
                l, m = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer =
                qa(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            m && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, i && n(i, function(a) {
                a.setState()
            }), n(a, function(a) {
                a.setState("hover");
                k.push(a.getLabelConfig())
            }), i = {
                x: a[0].category,
                y: a[0].y
            }, i.points = k, this.len = k.length, a = a[0]) : i = a.getLabelConfig();
            j = j.call(i, this);
            i = a.series;
            this.distance = p(i.tooltipOptions.distance, 16);
            j === !1 ? this.hide() : (this.isHidden && (Ka(d), d.attr("opacity", 1).show()), d.attr({
                    text: j
                }), l = e.borderColor ||
                a.color || i.color || "#606060", d.attr({
                    stroke: l
                }), this.updatePosition({
                    plotX: f,
                    plotY: g,
                    negative: a.negative,
                    ttBelow: a.ttBelow,
                    h: h[2] || 0
                }), this.isHidden = !1);
            M(c, "tooltipRefresh", {
                text: j,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: l
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(x(c.x), x(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        getXDateFormat: function(a, b, c) {
            var d, b = b.dateTimeLabelFormats,
                e = c && c.closestPointRange,
                f, g = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                },
                h, i = "millisecond";
            if (e) {
                h = Oa("%m-%d %H:%M:%S.%L", a.x);
                for (f in jb) {
                    if (e === jb.week && +Oa("%w", a.x) === c.options.startOfWeek && h.substr(6) === "00:00:00.000") {
                        f = "week";
                        break
                    }
                    if (jb[f] > e) {
                        f = i;
                        break
                    }
                    if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f])) break;
                    f !== "week" && (i = f)
                }
                f && (d = b[f])
            } else d = b.day;
            return d || b.year
        },
        tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" : "header",
                d = a.series,
                e = d.tooltipOptions,
                f = e.xDateFormat,
                g = d.xAxis,
                h = g && g.options.type ===
                "datetime" && ma(a.key),
                c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return Na(c, {
                point: a,
                series: d
            })
        },
        bodyFormatter: function(a) {
            return Ea(a, function(a) {
                var c = a.series.tooltipOptions;
                return (c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }
    };
    var pa;
    Xa = A && A.documentElement.ontouchstart !== w;
    var Aa = t.Pointer = function(a, b) {
        this.init(a, b)
    };
    Aa.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = ka ? "" : c.zoomType,
                c =
                a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (t.Tooltip && b.tooltip.enabled) a.tooltip = new Kb(a, b.tooltip), this.followTouchMove = p(b.tooltip.followTouchMove, !0);
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d, a = a || C.event;
            if (!a.target) a.target = a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] :
                a;
            if (!b) this.chartPosition = b = sb(this.chart.container);
            d.pageX === w ? (c = v(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return q(a, {
                chartX: x(c),
                chartY: x(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            n(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e = d ? d.shared : !1,
                f = b.hoverPoint,
                g = b.hoverSeries,
                h, i = Number.MAX_VALUE,
                j, k, l,
                m = [],
                o, u;
            if (!e && !g)
                for (h = 0; h < c.length; h++)
                    if (c[h].directTouch || !c[h].options.stickyTracking) c = [];
            g && (e ? g.noSharedTooltip : g.directTouch) && f ? o = f : (n(c, function(b) {
                j = b.noSharedTooltip && e;
                k = !e && b.directTouch;
                b.visible && !j && !k && p(b.options.enableMouseTracking, !0) && (u = b.searchPoint(a, !j && b.kdDimensions === 1)) && m.push(u)
            }), n(m, function(a) {
                l = !e && a.series.kdDimensions === 1 ? a.dist : a.distX;
                a && typeof l === "number" && l < i && (i = l, o = a)
            }));
            if (o && (o !== this.prevKDPoint || d && d.isHidden)) {
                if (e && !o.series.noSharedTooltip) {
                    for (h =
                        m.length; h--;)(m[h].clientX !== o.clientX || m[h].series.noSharedTooltip) && m.splice(h, 1);
                    m.length && d && d.refresh(m, a);
                    n(m, function(b) {
                        b.onMouseOver(a, b !== (g && g.directTouch && f || o))
                    })
                } else if (d && d.refresh(o, a), !g || !g.directTouch) o.onMouseOver(a);
                this.prevKDPoint = o
            } else c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({
                plotX: c[0],
                plotY: c[1]
            }));
            if (!this._onDocumentMouseMove) this._onDocumentMouseMove = function(a) {
                if (Y[pa]) Y[pa].pointer.onDocumentMouseMove(a)
            }, G(A,
                "mousemove", this._onDocumentMouseMove);
            n(b.axes, function(b) {
                b.drawCrosshair(a, p(o, f))
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.hoverPoints,
                g = c.tooltip,
                h = g && g.shared ? f : e;
            (a = a && g && h) && n(qa(h), function(b) {
                b.plotX === void 0 && (a = !1)
            });
            if (a) g.refresh(h), e && (e.setState(e.state, !0), n(c.axes, function(a) {
                p(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
            }));
            else {
                if (e) e.onMouseOut();
                f && n(f, function(a) {
                    a.setState()
                });
                if (d) d.onMouseOut();
                g && g.hide(b);
                if (this._onDocumentMouseMove) W(A, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null;
                n(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            n(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b =
                this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                i = b.plotTop,
                j = b.plotWidth,
                k = b.plotHeight,
                l, m = this.selectionMarker,
                o = this.mouseDownX,
                u = this.mouseDownY,
                s = c.panKey && a[c.panKey + "Key"];
            if (!m || !m.touch)
                if (d < h ? d = h : d > h + j && (d = h + j), e < i ? e = i : e > i + k && (e = i + k), this.hasDragged = Math.sqrt(Math.pow(o - d, 2) + Math.pow(u - e, 2)), this.hasDragged >
                    10) {
                    l = b.isInsidePlot(o - h, u - i);
                    if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !s && !m) this.selectionMarker = m = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({
                        fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                        zIndex: 7
                    }).add();
                    m && f && (d -= o, m.attr({
                        width: Q(d),
                        x: (d > 0 ? 0 : d) + o
                    }));
                    m && g && (d = e - u, m.attr({
                        height: Q(d),
                        y: (d > 0 ? 0 : d) + u
                    }));
                    l && !m && c.panning && b.pan(a, c.panning)
                }
        },
        drop: function(a) {
            var b = this,
                c = this.chart,
                d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {
                        xAxis: [],
                        yAxis: []
                    },
                    f = this.selectionMarker,
                    g = f.attr ?
                    f.attr("x") : f.x,
                    h = f.attr ? f.attr("y") : f.y,
                    i = f.attr ? f.attr("width") : f.width,
                    j = f.attr ? f.attr("height") : f.height,
                    k;
                if (this.hasDragged || d) n(c.axes, function(c) {
                    if (c.zoomEnabled && r(c.min) && (d || b[{
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        }[c.coll]])) {
                        var f = c.horiz,
                            o = a.type === "touchend" ? c.minPixelPadding : 0,
                            u = c.toValue((f ? g : h) + o),
                            f = c.toValue((f ? g + i : h + j) - o);
                        e[c.coll].push({
                            axis: c,
                            min: I(u, f),
                            max: v(u, f)
                        });
                        k = !0
                    }
                }), k && M(c, "selection", e, function(a) {
                    c.zoom(q(a, d ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            if (c) F(c.container, {
                cursor: c._cursor
            }), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            Y[pa] && Y[pa].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition,
                a = this.normalize(a, c);
            c && !this.inClass(a.target, "worldcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft,
                a.chartY - b.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            var a = Y[pa];
            if (a) a.pointer.reset(), a.pointer.chartPosition = null
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            pa = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "worldcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = K(a, "class")) {
                    if (c.indexOf(b) !== -1) return !0;
                    if (c.indexOf("worldcharts-container") !==
                        -1) return !1
                }
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries,
                a = a.relatedTarget || a.toElement;
            if (b && !b.options.stickyTracking && !this.inClass(a, "worldcharts-tooltip") && !this.inClass(a, "worldcharts-series-" + b.index)) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop,
                a = this.normalize(a);
            b.cancelClick || (c && this.inClass(a.target, "worldcharts-tracker") ? (M(c.series, "click", q(a, {
                    point: c
                })), b.hoverPoint && c.firePointEvent("click", a)) :
                (q(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && M(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            G(b, "mouseleave", a.onContainerMouseLeave);
            Ya === 1 && G(A, "mouseup", a.onDocumentMouseUp);
            if (Xa) b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, Ya === 1 && G(A,
                "touchend", a.onDocumentTouchEnd)
        },
        destroy: function() {
            var a;
            W(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            Ya || (W(A, "mouseup", this.onDocumentMouseUp), W(A, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    q(t.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a,
            b, c, d, e, f, g, h) {
            var i = this.chart,
                j = a ? "x" : "y",
                k = a ? "X" : "Y",
                l = "chart" + k,
                m = a ? "width" : "height",
                o = i["plot" + (a ? "Left" : "Top")],
                u, s, n = h || 1,
                p = i.inverted,
                E = i.bounds[a ? "h" : "v"],
                v = b.length === 1,
                q = b[0][l],
                r = c[0][l],
                w = !v && b[1][l],
                t = !v && c[1][l],
                x, c = function() {
                    !v && Q(q - w) > 20 && (n = h || Q(r - t) / Q(q - w));
                    s = (o - r) / n + q;
                    u = i["plot" + (a ? "Width" : "Height")] / n
                };
            c();
            b = s;
            b < E.min ? (b = E.min, x = !0) : b + u > E.max && (b = E.max - u, x = !0);
            x ? (r -= 0.8 * (r - g[j][0]), v || (t -= 0.8 * (t - g[j][1])), c()) : g[j] = [r, t];
            p || (f[j] = s - o, f[m] = u);
            f = p ? 1 / n : n;
            e[m] = u;
            e[j] = b;
            d[p ? a ? "scaleY" :
                "scaleX" : "scale" + k] = n;
            d["translate" + k] = f * o + (r - f * q)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = a.touches,
                f = e.length,
                g = b.lastValidTouch,
                h = b.hasZoom,
                i = b.selectionMarker,
                j = {},
                k = f === 1 && (b.inClass(a.target, "worldcharts-tracker") && c.runTrackerClick || b.runChartClick),
                l = {};
            if (f > 1) b.initiated = !0;
            h && b.initiated && !k && a.preventDefault();
            Ea(e, function(a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart") n(e, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], n(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"],
                        d = a.minPixelPadding,
                        e = a.toPixels(p(a.options.min, a.dataMin)),
                        f = a.toPixels(p(a.options.max, a.dataMax)),
                        g = I(e, f),
                        e = v(e, f);
                    b.min = I(a.pos, g - d);
                    b.max = v(a.pos + a.len, e + d)
                }
            }), b.res = !0;
            else if (d.length) {
                if (!i) b.selectionMarker = i = q({
                    destroy: U,
                    touch: !0
                }, c.plotBox);
                b.pinchTranslate(d, e, j, i, l, g);
                b.hasPinched = h;
                b.scaleGroups(j, l);
                if (!h && b.followTouchMove && f === 1) this.runPointActions(b.normalize(a));
                else if (b.res) b.res = !1, this.reset(!1, 0)
            }
        },
        touch: function(a, b) {
            var c = this.chart;
            pa = c.index;
            a.touches.length === 1 ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : a.touches.length === 2 && this.pinch(a)
        },
        onContainerTouchStart: function(a) {
            this.touch(a, !0)
        },
        onContainerTouchMove: function(a) {
            this.touch(a)
        },
        onDocumentTouchEnd: function(a) {
            Y[pa] && Y[pa].pointer.drop(a)
        }
    });
    if (C.PointerEvent || C.MSPointerEvent) {
        var sa = {},
            tb = !!C.PointerEvent,
            Pb = function() {
                var a, b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in sa) sa.hasOwnProperty(a) && b.push({
                    pageX: sa[a].pageX,
                    pageY: sa[a].pageY,
                    target: sa[a].target
                });
                return b
            },
            ub = function(a, b, c, d) {
                if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && Y[pa]) d(a), d = Y[pa].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: U,
                    touches: Pb()
                })
            };
        q(Aa.prototype, {
            onContainerPointerDown: function(a) {
                ub(a, "onContainerTouchStart", "touchstart", function(a) {
                    sa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(a) {
                ub(a, "onContainerTouchMove", "touchmove", function(a) {
                    sa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    };
                    if (!sa[a.pointerId].target) sa[a.pointerId].target = a.currentTarget
                })
            },
            onDocumentPointerUp: function(a) {
                ub(a, "onDocumentTouchEnd", "touchend", function(a) {
                    delete sa[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, tb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, tb ? "pointermove" : "MSPointerMove",
                    this.onContainerPointerMove);
                a(A, tb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        ga(Aa.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            this.hasZoom && F(b.container, {
                "-ms-touch-action": "none",
                "touch-action": "none"
            })
        });
        ga(Aa.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(G)
        });
        ga(Aa.prototype, "destroy", function(a) {
            this.batchMSEvents(W);
            a.call(this)
        })
    }
    var bb = t.Legend = function(a, b) {
        this.init(a, b)
    };
    bb.prototype = {
        init: function(a, b) {
            var c =
                this,
                d = b.itemStyle,
                e = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled) c.itemStyle = d, c.itemHiddenStyle = B(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = p(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = p(b.symbolWidth, 16), c.pages = [], c.render(), G(c.chart, "endResize", function() {
                c.positionCheckboxes()
            })
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color :
                g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                i = {
                    fill: h
                },
                j;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (j in i.stroke = h, g = a.convertAttribs(g), g) d = g[j], d !== w && (i[j] = d);
                f.attr(i)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f) f.x = e, f.y = d
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            n(["legendItem", "legendLine",
                "legendSymbol", "legendGroup"
            ], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Pa(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight,
                e = this.titleHeight;
            if (b) c = b.translateY, n(this.allItems, function(f) {
                var g = f.checkbox,
                    h;
                g && (h = c + e + g.y + (a || 0) + 3, F(g, {
                    left: b.translateX + f.checkboxOffset + g.x - 20 + "px",
                    top: h + "px",
                    display: h > c - 6 && h < c + d - 6 ? "" : "none"
                }))
            })
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            if (b.text) {
                if (!this.title) this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                    zIndex: 1
                }).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({
                    translateY: c
                })
            }
            this.titleHeight = c
        },
        setText: function(a) {
            var b = this.options;
            a.legendItem.attr({
                text: b.labelFormat ? Na(b.labelFormat, a) : b.labelFormatter.call(a)
            })
        },
        renderItem: function(a) {
            var b =
                this.chart,
                c = b.renderer,
                d = this.options,
                e = d.layout === "horizontal",
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                i = this.itemHiddenStyle,
                j = this.padding,
                k = e ? p(d.itemDistance, 20) : 0,
                l = !d.rtl,
                m = d.width,
                o = d.itemMarginBottom || 0,
                u = this.itemMarginTop,
                s = this.initialItemX,
                n = a.legendItem,
                y = a.series && a.series.drawLegendSymbol ? a.series : a,
                E = y.options,
                E = this.createCheckboxForItem && E && E.showCheckbox,
                q = d.useHTML;
            if (!n) {
                a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                a.legendItem = n = c.text("",
                    l ? f + g : -g, this.baseline || 0, q).css(B(a.visible ? h : i)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline) this.fontMetrics = c.fontMetrics(h.fontSize, n), this.baseline = this.fontMetrics.f + 3 + u, n.attr("y", this.baseline);
                y.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, n, q, h, i);
                this.colorizeItem(a, a.visible);
                E && this.createCheckboxForItem(a)
            }
            this.setText(a);
            c = n.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (E ? 20 : 0);
            this.itemHeight = g = x(a.legendItemHeight ||
                c.height);
            if (e && this.itemX - s + f > (m || b.chartWidth - 2 * j - s - d.x)) this.itemX = s, this.itemY += u + this.lastLineHeight + o, this.lastLineHeight = 0;
            this.maxItemWidth = v(this.maxItemWidth, f);
            this.lastItemY = u + this.itemY + o;
            this.lastLineHeight = v(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += u + g + o, this.lastLineHeight = g);
            this.offsetWidth = m || v((e ? this.itemX - s - k : f) + j, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            n(this.chart.series, function(b) {
                var c = b.options;
                if (p(c.showInLegend, !r(c.linkedTo) ? w : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
            });
            return a
        },
        adjustMargins: function(a, b) {
            var c = this.chart,
                d = this.options,
                e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && n([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !r(a[g]) && (c[kb[g]] = v(c[kb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + p(d.margin, 12) + b[g]))
            })
        },
        render: function() {
            var a = this,
                b =
                a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, i = a.box,
                j = a.options,
                k = a.padding,
                l = j.borderWidth,
                m = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            eb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display =
                f = !!e.length;
            a.lastLineHeight = 0;
            n(e, function(b) {
                a.renderItem(b)
            });
            g = (j.width || a.offsetWidth) + k;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += k;
            if (l || m) {
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({
                        width: g,
                        height: h
                    })), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": l || 0,
                    fill: m || "none"
                }).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            n(e, function(b) {
                a.positionItem(b)
            });
            f &&
                d.align(q({
                    width: g,
                    height: h
                }, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
                g = e.maxHeight,
                h, i = this.clipRect,
                j = e.navigation,
                k = p(j.animation, !0),
                l = j.arrowSize || 12,
                m = this.nav,
                o = this.pages,
                u = this.padding,
                s, q = this.allItems,
                y = function(a) {
                    i.attr({
                        height: a
                    });
                    if (b.contentGroup.div) b.contentGroup.div.style.clip = "rect(" + u + "px,9999px," + (u + a) + "px,0)"
                };
            e.layout === "horizontal" && (f /= 2);
            g && (f = I(f, g));
            o.length = 0;
            if (a > f) {
                this.clipHeight = h = v(f - 20 - this.titleHeight - u, 0);
                this.currentPage = p(this.currentPage, 1);
                this.fullHeight = a;
                n(q, function(a, b) {
                    var c = a._legendItemPos[1],
                        d = x(a.legendItem.getBBox().height),
                        e = o.length;
                    if (!e || c - o[e - 1] > h && (s || c) !== o[e - 1]) o.push(s || c), e++;
                    b === q.length - 1 && c + d - o[e - 1] > h && o.push(c);
                    c !== s && (s = c)
                });
                if (!i) i = b.clipRect = d.clipRect(0, u, 9999, 0), b.contentGroup.clip(i);
                y(h);
                if (!m) this.nav = m = d.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = d.symbol("triangle",
                    0, 0, l, l).on("click", function() {
                    b.scroll(-1, k)
                }).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                    b.scroll(1, k)
                }).add(m);
                b.scroll(0);
                a = f
            } else if (m) y(c.chartHeight), m.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0;
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                i = this.pager,
                j = this.padding;
            e > d && (e = d);
            if (e >
                0) b !== w && Wa(b, this.chart), this.nav.attr({
                translateX: j,
                translateY: f + this.padding + 7 + this.titleHeight,
                visibility: "visible"
            }), this.up.attr({
                fill: e === 1 ? g : h
            }).css({
                cursor: e === 1 ? "default" : "pointer"
            }), i.attr({
                text: e + "/" + d
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: e === d ? g : h
            }).css({
                cursor: e === d ? "default" : "pointer"
            }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: c
            }), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    var cb = t.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight ||
                a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b = this.options,
                c = b.marker,
                d = a.symbolWidth,
                e = this.chart.renderer,
                f = this.legendGroup,
                a = a.baseline - x(a.fontMetrics.b * 0.3),
                g;
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !== !1) b = c.radius, this.legendSymbol = c = e.symbol(this.symbol,
                d / 2 - b, a - b, 2 * b, 2 * b, c).add(f), c.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(ya) || Ja) && ga(bb.prototype, "positionItem", function(a, b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    var ha = t.Chart = function() {
        this.getArgs.apply(this, arguments)
    };
    t.chart = function(a, b, c) {
        return new ha(a, b, c)
    };
    ha.prototype = {
        callbacks: [],
        getArgs: function() {
            var a = [].slice.call(arguments);
            if (ta(a[0]) || a[0].nodeName) this.renderTo = a.shift();
            this.init(a[0], a[1])
        },
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = B(H, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = Y.length;
            Y.push(f);
            Ya++;
            d.reflow !== !1 && G(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e) G(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ka ? !1 : p(d.animation, !0);
            f.pointCount = f.colorCounter =
                f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = z[a.type || b.type || b.defaultSeriesType]) || T(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a,
                a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, i = this.hasCartesianSeries,
                j = this.isDirtyBox,
                k = c.length,
                l = k,
                m = this.renderer,
                o = m.isHidden(),
                u = [];
            Wa(a, this);
            o && this.cloneRenderTo();
            for (this.layOutTitles(); l--;)
                if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (l = k; l--;)
                    if (a = c[l], a.options.stacking) a.isDirty = !0;
            n(c, function(a) {
                a.isDirty && a.options.legendType === "point" && (a.updateTotals && a.updateTotals(), f = !0)
            });
            if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i && !this.isResizing) this.maxTicks = null, n(b, function(a) {
                a.setScale()
            });
            this.getMargins();
            i && (n(b, function(a) {
                a.isDirty && (j = !0)
            }), n(b, function(a) {
                var b = a.min + "," + a.max;
                if (a.extKey !==
                    b) a.extKey = b, u.push(function() {
                    M(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (j || g) && a.redraw()
            }));
            j && this.drawChartBox();
            n(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            m.draw();
            M(this, "redraw");
            o && this.cloneRenderTo(!0);
            n(u, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d <
                c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b]
            }
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = qa(b.xAxis || {}),
                b = b.yAxis = qa(b.yAxis || {});
            n(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            n(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            n(c, function(b) {
                new Z(a, b)
            })
        },
        getSelectedPoints: function() {
            var a = [];
            n(this.series, function(b) {
                a = a.concat(Sa(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return Sa(this.series, function(a) {
                return a.selected
            })
        },
        setTitle: function(a, b, c) {
            var g;
            var d = this,
                e = d.options,
                f;
            f = e.title = B(e.title, a);
            g = e.subtitle = B(e.subtitle, b), e = g;
            n([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1],
                    a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "worldcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h =
                this.spacingBox.width - 44;
            if (c && (c.css({
                    width: (f.width || h) + "px"
                }).align(q({
                    y: g.fontMetrics(f.style.fontSize, c).b - 3
                }, f), !1, "spacingBox"), !f.floating && !f.verticalAlign)) b = c.getBBox().height;
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(q({
                y: b + (f.margin - 13) + g.fontMetrics(e.style.fontSize, c).b
            }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign && (b = ra(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered && p(a, !0) && this.isDirtyBox && this.redraw()
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            if (!r(b)) this.containerWidth = Da(c, "width");
            if (!r(a)) this.containerHeight = Da(c, "height");
            this.chartWidth = v(0, b || this.containerWidth || 600);
            this.chartHeight = v(0, p(a, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Pa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c),
                this.renderToClone = b = this.renderTo.cloneNode(0), F(b, {
                    position: "absolute",
                    top: "-9999px",
                    display: "block"
                }), b.style.setProperty && b.style.setProperty("display", "block", "important"), A.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options,
                c = b.chart,
                d, e;
            a = this.renderTo;
            var f = "worldcharts-" + rb++;
            if (!a) this.renderTo = a = c.renderTo;
            if (ta(a)) this.renderTo = a = A.getElementById(a);
            a || T(13, !0);
            d = D(K(a, "data-worldcharts-chart"));
            !isNaN(d) && Y[d] && Y[d].hasRendered && Y[d].destroy();
            K(a, "data-worldcharts-chart",
                this.index);
            a.innerHTML = "";
            !c.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            d = this.chartWidth;
            e = this.chartHeight;
            this.container = a = ca(Ia, {
                className: "worldcharts-container" + (c.className ? " " + c.className : ""),
                id: f
            }, q({
                position: "relative",
                overflow: "hidden",
                width: d + "px",
                height: e + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, c.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = new(t[c.renderer] || Ra)(a, d, e, c.style,
                c.forExport, b.exporting && b.exporting.allowHTML);
            ka && this.renderer.create(this, a, d, e);
            this.renderer.chartIndex = this.index
        },
        getMargins: function(a) {
            var b = this.spacing,
                c = this.margin,
                d = this.titleOffset;
            this.resetMargins();
            if (d && !r(c[0])) this.plotTop = v(this.plotTop, d + this.options.title.margin + b[0]);
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        },
        getAxisMargins: function() {
            var a =
                this,
                b = a.axisOffset = [0, 0, 0, 0],
                c = a.margin;
            a.hasCartesianSeries && n(a.axes, function(a) {
                a.visible && a.getOffset()
            });
            n(kb, function(d, e) {
                r(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || Da(d, "width"),
                f = c.height || Da(d, "height"),
                c = a ? a.target : C;
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === C || c === A)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = Ma(function() {
                    if (b.container) b.setSize(e, f, !1), b.hasUserSize =
                        null
                }, a ? 100 : 0);
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a = this,
                b = function(b) {
                    a.reflow(b)
                };
            G(C, "resize", b);
            G(a, "destroy", function() {
                W(C, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g = d.renderer;
            d.isResizing += 1;
            Wa(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (r(a)) d.chartWidth = e = v(0, x(a)), d.hasUserSize = !!e;
            if (r(b)) d.chartHeight = f = v(0, x(b));
            a = g.globalAnimation;
            (a ? Ta : F)(d.container, {
                width: e + "px",
                height: f + "px"
            }, a);
            d.setChartSize(!0);
            g.setSize(e,
                f, c);
            d.maxTicks = null;
            n(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            n(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            M(d, "resize");
            a = g.globalAnimation;
            Ma(function() {
                d && M(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            }, a === !1 ? 0 : a && a.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                i, j, k, l;
            this.plotLeft = i = x(this.plotLeft);
            this.plotTop = j = x(this.plotTop);
            this.plotWidth = k = v(0, x(d - i - this.marginRight));
            this.plotHeight = l = v(0, x(e - j - this.marginBottom));
            this.plotSizeX = b ? l : k;
            this.plotSizeY = b ? k : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: i,
                y: j,
                width: k,
                height: l
            };
            d = 2 * fa(this.plotBorderWidth / 2);
            b = ra(v(d, h[3]) / 2);
            c = ra(v(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: fa(this.plotSizeX - v(d, h[1]) / 2 - b),
                height: v(0, fa(this.plotSizeY - v(d, h[2]) / 2 - c))
            };
            a || n(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this;
            n(kb, function(b, c) {
                a[b] = p(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                i = a.borderWidth || 0,
                j = a.backgroundColor,
                k = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                m = a.plotBorderWidth || 0,
                o, n = this.plotLeft,
                p = this.plotTop,
                q = this.plotWidth,
                y = this.plotHeight,
                E = this.plotBox,
                v = this.clipRect,
                r = this.clipBox;
            o = i + (a.shadow ? 8 : 0);
            if (i || j)
                if (e) e.animate(e.crisp({
                    width: c - o,
                    height: d - o
                }));
                else {
                    e = {
                        fill: j || "none"
                    };
                    if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                    this.chartBackground = b.rect(o / 2, o / 2, c - o, d - o, a.borderRadius, i).attr(e).addClass("worldcharts-background").add().shadow(a.shadow)
                }
            if (k) f ? f.animate(E) : this.plotBackground = b.rect(n, p, q, y, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow);
            if (l) h ? h.animate(E) : this.plotBGImage = b.image(l, n, p, q, y).add();
            v ? v.animate({
                width: r.width,
                height: r.height
            }) : this.clipRect = b.clipRect(r);
            if (m) g ? g.animate(g.crisp({
                x: n,
                y: p,
                width: q,
                height: y,
                strokeWidth: -m
            })) : this.plotBorder = b.rect(n, p, q, y, 0, -m).attr({
                stroke: a.plotBorderColor,
                "stroke-width": m,
                fill: "none",
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            n(["inverted", "angular", "polar"], function(g) {
                c = z[b.type || b.defaultSeriesType];
                f = a[g] ||
                    b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = z[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            n(b, function(a) {
                a.linkedSeries.length = 0
            });
            n(b, function(b) {
                var d = b.options.linkedTo;
                if (ta(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent = d, b.visible = p(b.options.visible, d.options.visible, b.visible)
            })
        },
        renderSeries: function() {
            n(this.series, function(a) {
                a.translate();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && n(b.items, function(c) {
                var d = q(b.style, c.style),
                    e = D(d.left) + a.plotLeft,
                    f = D(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options,
                d, e, f, g;
            this.setTitle();
            this.legend = new bb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 21;
            n(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = d /
                this.plotWidth > 1.1;
            g = e / this.plotHeight > 1.05;
            if (f || g) this.maxTicks = null, n(a, function(a) {
                (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && n(a, function(a) {
                a.visible && a.render()
            });
            if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text,
                0, 0).on("click", function() {
                if (a.href) C.location.href = a.href
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position)
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            M(a, "destroy");
            Y[a.index] = w;
            Ya--;
            a.renderTo.removeAttribute("data-worldcharts-chart");
            W(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            n("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
                function(b) {
                    var c = a[b];
                    c && c.destroy && (a[b] = c.destroy())
                });
            if (d) d.innerHTML = "", W(d), f && Pa(d);
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !ea && C == C.top && A.readyState !== "complete" || ka && !C.canvg ? (ka ? Jb.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : A.attachEvent("onreadystatechange", function() {
                A.detachEvent("onreadystatechange", a.firstRender);
                A.readyState === "complete" && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                M(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                n(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                M(a, "beforeRender");
                if (t.Pointer) a.pointer = new Aa(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                n(a.callbacks, function(b) {
                    a.index !== w && b.apply(a, [a])
                });
                M(a, "load");
                a.cloneRenderTo(!0)
            }
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = ba(c) ? c : [c, c, c, c];
            return [p(b[a + "Top"], c[0]), p(b[a + "Right"], c[1]), p(b[a + "Bottom"], c[2]), p(b[a + "Left"], c[3])]
        }
    };
    var $ = function() {};
    $.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey,
                a = $.prototype.optionsToObject.call(this, a);
            q(this, a);
            this.options = this.options ? q(this.options, a) : a;
            if (d) this.y = this[d];
            if (this.x ===
                w && c) this.x = b === w ? c.autoIncrement() : b;
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.options.keys,
                e = d || c.pointArrayMap || ["y"],
                f = e.length,
                g = 0,
                h = 0;
            if (typeof a === "number" || a === null) b[e[0]] = a;
            else if (Fa(a)) {
                if (!d && a.length > f) {
                    c = typeof a[0];
                    if (c === "string") b.name = a[0];
                    else if (c === "number") b.x = a[0];
                    g++
                }
                for (; h < f;) {
                    if (!d || a[g] !== void 0) b[e[h]] = a[g];
                    g++;
                    h++
                }
            } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            }
            return b
        },
        destroy: function() {
            var a =
                this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            if (b && (this.setState(), ua(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) W(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                color: this.color,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = p(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            n(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Na(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            M(this, a, b, c)
        },
        visible: !0
    };
    var S = t.Series = function() {};
    S.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: $,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        directTouch: !1,
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x",
            "y"
        ],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return p(a.options.index, a._i) - p(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            q(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected === !0
            });
            if (ka) b.animation = !1;
            e = b.events;
            for (d in e) G(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            n(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian) a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            eb(f, g);
            this.yAxis && eb(this.yAxis.series, g);
            n(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            n(a.axisTypes || [], function(e) {
                n(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== w && b[e] === d.id || b[e] === w && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && T(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            n(c.parallelArrays, typeof b === "number" ? function(d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                c, d = a.pointIntervalUnit,
                b = p(b, a.pointStart, 0);
            this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
            if (d === "month" || d === "year") a = new xa(b), a = d === "month" ? +a[Cb](a[ob]() + c) : +a[Db](a[pb]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                    d.length && (b = [d])
                } else n(d, function(c, g) {
                    c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = B(e, c.series, a);
            this.tooltipOptions = B(H.tooltip, H.plotOptions[this.type].tooltip,
                b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            if ((c.negativeColor || c.negativeFillColor) && !c.zones) a.push({
                value: c[this.zoneAxis + "Threshold"] || c.threshold || 0,
                color: c.negativeColor,
                fillColor: c.negativeFillColor
            });
            a.length && r(a[a.length - 1].value) && a.push({
                color: this.color,
                fillColor: this.fillColor
            });
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (r(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || X[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) a.radius = 0
        },
        drawLegendSymbol: cb.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length ||
                0,
                h, i = e.options,
                j = e.chart,
                k = null,
                l = e.xAxis,
                m = l && !!l.categories,
                o = i.turboThreshold,
                u = this.xData,
                s = this.yData,
                q = (h = e.pointArrayMap) && h.length,
                a = a || [];
            h = a.length;
            b = p(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData && e.visible) n(a, function(a, b) {
                f[b].update && a !== i.data[b] && f[b].update(a, !1, null, !1)
            });
            else {
                e.xIncrement = null;
                e.colorCounter = 0;
                n(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (o && h > o) {
                    for (c = 0; k === null && c < h;) k = a[c], c++;
                    if (ma(k)) {
                        m = p(i.pointStart, 0);
                        k = p(i.pointInterval, 1);
                        for (c =
                            0; c < h; c++) u[c] = m, s[c] = a[c], m += k;
                        e.xIncrement = m
                    } else if (Fa(k))
                        if (q)
                            for (c = 0; c < h; c++) k = a[c], u[c] = k[0], s[c] = k.slice(1, q + 1);
                        else
                            for (c = 0; c < h; c++) k = a[c], u[c] = k[0], s[c] = k[1];
                    else T(12)
                } else
                    for (c = 0; c < h; c++)
                        if (a[c] !== w && (k = {
                                series: e
                            }, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), m && r(k.name))) l.names[k.x] = k.name;
                ta(s[0]) && T(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] && f[c].destroy && f[c].destroy();
                if (l) l.minRange = l.userMinRange;
                e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
                c = !1
            }
            i.legendType === "point" && (this.processData(), this.generatePoints());
            b && j.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                i, j = this.options;
            i = j.cropThreshold;
            var j = this.getExtremesFromAll || j.getExtremesFromAll,
                k = this.isCartesian,
                l, m;
            if (k && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (h) a = h.getExtremes(), l = a.min, m = a.max;
            if (k && this.sorted && !j && (!i || d > i || this.forceCrop))
                if (b[d - 1] < l || b[0] > m) b = [], c = [];
                else if (b[0] < l || b[d - 1] > m) e =
                this.cropData(this.xData, this.yData, l, m), b = e.xData, c = e.yData, e = e.start, f = !0;
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], d > 0 && (g === w || d < g) ? g = d : d < 0 && this.requireSorting && T(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = p(this.cropShoulder, 1),
                i;
            for (i = 0; i < e; i++)
                if (a[i] >= c) {
                    f = v(0, i - h);
                    break
                }
            for (c = i; c < e; c++)
                if (a[c] > d) {
                    g = c + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a =
                this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                i, j = this.hasGroupedData,
                k, l = [],
                m;
            if (!b && !j) b = [], b.length = a.length, b = this.data = b;
            for (m = 0; m < g; m++) i = h + m, j ? l[m] = (new f).init(this, [d[m]].concat(qa(e[m]))) : (b[i] ? k = b[i] : a[i] !== w && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k), l[m].index = i;
            if (b && (g !== (c = b.length) || j))
                for (m = 0; m < c; m++)
                    if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = w;
            this.data = b;
            this.points = l
        },
        getExtremes: function(a) {
            var b =
                this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                i, j, k, l, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (l = 0; l < d; l++)
                if (j = c[l], k = a[l], i = k !== null && k !== w && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j)
                    if (i = k.length)
                        for (; i--;) k[i] !== null && (e[f++] = k[i]);
                    else e[f++] = k;
            this.dataMin = Va(e);
            this.dataMax = Ha(e)
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || ma(i), k = a.threshold, l = a.startFromThreshold ? k : 0, m, o, n, s, q = Number.MAX_VALUE, a = 0; a < g; a++) {
                var y = f[a],
                    E = y.x,
                    t = y.y;
                o = y.low;
                var x = b && e.stacks[(this.negStacks && t < (l ? 0 : k) ? "-" : "") + this.stackKey];
                if (e.isLog && t !== null && t <= 0) y.y = t = null, T(10);
                y.plotX = m = I(v(-1E5, c.translate(E, 0, 0, 0, 1, i, this.type === "flags")), 1E5);
                if (b && this.visible &&
                    x && x[E]) s = this.getStackIndicator(s, E, this.index), x = x[E], t = x.points[s.key], o = t[0], t = t[1], o === l && (o = p(k, e.min)), e.isLog && o <= 0 && (o = null), y.total = y.stackTotal = x.total, y.percentage = x.total && y.y / x.total * 100, y.stackY = t, x.setOffset(this.pointXOffset || 0, this.barW || 0);
                y.yBottom = r(o) ? e.translate(o, 0, 1, 0, 1) : null;
                h && (t = this.modifyValue(t, y));
                y.plotY = o = typeof t === "number" && t !== Infinity ? I(v(-1E5, e.translate(t, 0, 1, 0, 1)), 1E5) : w;
                y.isInside = o !== w && o >= 0 && o <= e.len && m >= 0 && m <= c.len;
                y.clientX = j ? c.translate(E, 0, 0, 0, 1) : m;
                y.negative = y.y < (k || 0);
                y.category = d && d[y.x] !== w ? d[y.x] : y.x;
                a && (q = I(q, Q(m - n)));
                n = m
            }
            this.closestPointRangePx = q;
            this.getSegments()
        },
        setClip: function(a) {
            var b = this.chart,
                c = this.options,
                d = b.renderer,
                e = b.inverted,
                f = this.clipBox,
                g = f || b.clipBox,
                h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, c.xAxis, c.yAxis].join(","),
                i = b[h],
                j = b[h + "m"];
            if (!i) {
                if (a) g.width = 0, b[h + "m"] = j = d.clipRect(-99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight);
                b[h] = i = d.clipRect(g)
            }
            a && (i.count += 1);
            if (c.clip !==
                !1) this.group.clip(a || f ? i : b.clipRect), this.markerGroup.clip(j), this.sharedClipKey = h;
            a || (i.count -= 1, i.count <= 0 && h && b[h] && (f || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())))
        },
        animate: function(a) {
            var b = this.chart,
                c = this.options.animation,
                d;
            if (c && !ba(c)) c = X[this.type].animation;
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                width: b.plotSizeX
            }, c), b[d + "m"] && b[d + "m"].animate({
                width: b.plotSizeX + 99
            }, c), this.animate = null)
        },
        afterAnimate: function() {
            this.setClip();
            M(this, "afterAnimate")
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, i, j, k, l = this.options.marker,
                m = this.pointAttr[""],
                o, n, s, v = this.markerGroup,
                y = p(l.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * l.radius);
            if (l.enabled !== !1 || this._hasPointMarkers)
                for (f = b.length; f--;)
                    if (g = b[f], d = fa(g.plotX), e = g.plotY, k = g.graphic, o = g.marker || {}, n = !!g.marker, a = y && o.enabled === w || o.enabled, s = g.isInside, a && e !== w && !isNaN(e) && g.y !== null)
                        if (a = g.pointAttr[g.selected ? "select" : ""] || m, h = a.r, i = p(o.symbol, this.symbol), j = i.indexOf("url") ===
                            0, k) k[s ? "show" : "hide"](!0).animate(q({
                            x: d - h,
                            y: e - h
                        }, k.symbolName ? {
                            width: 2 * h,
                            height: 2 * h
                        } : {}));
                        else {
                            if (s && (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, n ? o : l).attr(a).add(v)
                        }
            else if (k) g.graphic = k.destroy()
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {},
                a = a || {},
                b = b || {},
                c = c || {},
                d = d || {};
            for (f in e) g = e[f], h[f] = p(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = X[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color,
                h = a.options.negativeColor;
            f = {
                stroke: g,
                fill: g
            };
            var i = a.points || [],
                j, k, l = [],
                m = a.pointAttrToOptions;
            j = a.hasPointSpecificOptions;
            var o = c.lineColor,
                u = c.fillColor;
            k = b.turboThreshold;
            var s = a.zones,
                v = a.zoneAxis || "y",
                y;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || P(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || P(e.negativeColor || h).brighten(e.brightness).get());
            l[""] = a.convertAttribs(c, f);
            n(["hover", "select"], function(b) {
                l[b] =
                    a.convertAttribs(d[b], l[""])
            });
            a.pointAttr = l;
            g = i.length;
            if (!k || g < k || j)
                for (; g--;) {
                    k = i[g];
                    if ((c = k.options && k.options.marker || k.options) && c.enabled === !1) c.radius = 0;
                    if (s.length) {
                        j = 0;
                        for (f = s[j]; k[v] >= f.value;) f = s[++j];
                        k.color = k.fillColor = p(f.color, a.color)
                    }
                    j = b.colorByPoint || k.color;
                    if (k.options)
                        for (y in m) r(c[m[y]]) && (j = !0);
                    if (j) {
                        c = c || {};
                        j = [];
                        d = c.states || {};
                        f = d.hover = d.hover || {};
                        if (!b.marker || k.negative && !f.fillColor && !e.fillColor) f[a.pointAttrToOptions.fill] = f.color || !k.options.color && e[k.negative && h ?
                            "negativeColor" : "color"] || P(k.color).brighten(f.brightness || e.brightness).get();
                        f = {
                            color: k.color
                        };
                        if (!u) f.fillColor = k.color;
                        if (!o) f.lineColor = k.color;
                        c.hasOwnProperty("color") && !c.color && delete c.color;
                        j[""] = a.convertAttribs(q(f, c), l[""]);
                        j.hover = a.convertAttribs(d.hover, l.hover, j[""]);
                        j.select = a.convertAttribs(d.select, l.select, j[""])
                    } else j = l;
                    k.pointAttr = j
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(ya),
                d, e = a.data || [],
                f, g, h;
            M(a, "destroy");
            W(a);
            n(a.axisTypes || [], function(b) {
                if (h =
                    a[b]) ua(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--;)(f = e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a) a[g] instanceof J && !a[g].survive && (d = c && g === "group" ? "hide" : "destroy", a[g][d]());
            if (b.hoverSeries === a) b.hoverSeries = null;
            ua(b.series, a);
            for (g in a) delete a[g]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            n(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a,
                    e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h, "L") : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, "L", (i.plotX + g) / 2, h, "L") : c.push(g, i.plotY, "L")), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a = this,
                b = [],
                c, d = [];
            n(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color, b.dashStyle]
                ],
                d = b.lineWidth,
                e = b.linecap !== "square",
                f = this.getGraphPath(),
                g = this.fillGraph && this.color || "none";
            n(this.zones, function(d, e) {
                c.push(["zoneGraph" + e, d.color || a.color, d.dashStyle || b.dashStyle])
            });
            n(c, function(c, i) {
                var j = c[0],
                    k = a[j];
                if (k) k.animate({
                    d: f
                });
                else if ((d || g) && f.length) k = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: g,
                    zIndex: 1
                }, c[2] ? k.dashstyle = c[2] : e && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), a[j] = a.chart.renderer.path(f).attr(k).add(a.group).shadow(i < 2 && b.shadow)
            })
        },
        applyZones: function() {
            var a = this,
                b = this.chart,
                c = b.renderer,
                d = this.zones,
                e, f, g = this.clips || [],
                h, i = this.graph,
                j = this.area,
                k = v(b.chartWidth, b.chartHeight),
                l = this[(this.zoneAxis || "y") + "Axis"],
                m, o = l.reversed,
                u = b.inverted,
                s = l.horiz,
                q, y, r, t = !1;
            if (d.length && (i || j) && l.min !== w) i && i.hide(), j && j.hide(), m = l.getExtremes(), n(d, function(d, n) {
                e = o ? s ? b.plotWidth : 0 : s ? 0 : l.toPixels(m.min);
                e = I(v(p(f, e), 0), k);
                f = I(v(x(l.toPixels(p(d.value, m.max), !0)), 0), k);
                t && (e = f = l.toPixels(m.max));
                q = Math.abs(e - f);
                y = I(e, f);
                r = v(e, f);
                if (l.isXAxis) {
                    if (h = {
                            x: u ? r : y,
                            y: 0,
                            width: q,
                            height: k
                        }, !s) h.x = b.plotHeight - h.x
                } else if (h = {
                        x: 0,
                        y: u ? r : y,
                        width: k,
                        height: q
                    }, s) h.y = b.plotWidth - h.y;
                b.inverted && c.isVML && (h = l.isXAxis ? {
                    x: 0,
                    y: o ? y : r,
                    height: h.width,
                    width: b.chartWidth
                } : {
                    x: h.y - b.plotLeft - b.spacingBox.x,
                    y: 0,
                    width: h.height,
                    height: b.chartHeight
                });
                g[n] ? g[n].animate(h) : (g[n] = c.clipRect(h), i && a["zoneGraph" + n].clip(g[n]), j && a["zoneArea" + n].clip(g[n]));
                t = d.value > m.max
            }), this.clips = g
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                n(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b =
                this,
                c = b.chart;
            if (b.xAxis) G(c, "resize", a), G(b, "destroy", function() {
                W(c, "resize", a)
            }), a(), b.invertGroups = a
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({
                zIndex: d || 0.1
            }).add(e), f.addClass("worldcharts-series-" + this.index));
            f.attr({
                visibility: c
            })[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            if (a.inverted) b = c, c = this.xAxis;
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !!a.animate && b.renderer.isSVG && p(c.duration, 500) || 0,
                f = a.visible ? "inherit" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            n(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h) a.animationTimeout = Ma(function() {
                a.afterAnimate()
            }, e);
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.isDirty,
                d = this.group,
                e = this.xAxis,
                f = this.yAxis;
            d && (a.inverted && d.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), d.animate({
                translateX: p(e && e.left,
                    a.plotLeft),
                translateY: p(f && f.top, a.plotTop)
            }));
            this.translate();
            this.render();
            b && M(this, "updatedData");
            (c || b) && delete this.kdTree
        },
        kdDimensions: 1,
        kdAxisArray: ["clientX", "plotY"],
        searchPoint: function(a, b) {
            var c = this.xAxis,
                d = this.yAxis,
                e = this.chart.inverted;
            return this.searchKDTree({
                clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos
            }, b)
        },
        buildKDTree: function() {
            function a(c, e, f) {
                var g, h;
                if (h = c && c.length) return g = b.kdAxisArray[e % f], c.sort(function(a, b) {
                    return a[g] -
                        b[g]
                }), h = Math.floor(h / 2), {
                    point: c[h],
                    left: a(c.slice(0, h), e + 1, f),
                    right: a(c.slice(h + 1), e + 1, f)
                }
            }
            var b = this,
                c = b.kdDimensions;
            delete b.kdTree;
            Ma(function() {
                var d = Sa(b.points || [], function(a) {
                    return a.y !== null
                });
                b.kdTree = a(d, c, c)
            }, b.options.kdNow ? 0 : 1)
        },
        searchKDTree: function(a, b) {
            function c(a, b, j, k) {
                var l = b.point,
                    m = d.kdAxisArray[j % k],
                    o, n, p = l;
                n = r(a[e]) && r(l[e]) ? Math.pow(a[e] - l[e], 2) : null;
                o = r(a[f]) && r(l[f]) ? Math.pow(a[f] - l[f], 2) : null;
                o = (n || 0) + (o || 0);
                l.dist = r(o) ? Math.sqrt(o) : Number.MAX_VALUE;
                l.distX = r(n) ? Math.sqrt(n) :
                    Number.MAX_VALUE;
                m = a[m] - l[m];
                o = m < 0 ? "left" : "right";
                n = m < 0 ? "right" : "left";
                b[o] && (o = c(a, b[o], j + 1, k), p = o[g] < p[g] ? o : l);
                b[n] && Math.sqrt(m * m) < p[g] && (a = c(a, b[n], j + 1, k), p = a[g] < p[g] ? a : p);
                return p
            }
            var d = this,
                e = this.kdAxisArray[0],
                f = this.kdAxisArray[1],
                g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree) return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }
    };
    q(ha.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = p(b, !0), M(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis",
                f = this.options;
            new Z(this, B(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = qa(f[e] || {});
            f[e].push(a);
            p(c, !0) && this.redraw(d)
        },
        showLoading: function(a) {
            var b = this,
                c = b.options,
                d = b.loadingDiv,
                e = c.loading,
                f = function() {
                    d && F(d, {
                        left: b.plotLeft + "px",
                        top: b.plotTop + "px",
                        width: b.plotWidth + "px",
                        height: b.plotHeight + "px"
                    })
                };
            if (!d) b.loadingDiv = d = ca(Ia, {
                    className: "worldcharts-loading"
                }, q(e.style, {
                    zIndex: 10,
                    display: "none"
                }), b.container),
                b.loadingSpan = ca("span", null, e.labelStyle, d), G(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown) F(d, {
                opacity: 0,
                display: ""
            }), Ta(d, {
                opacity: e.style.opacity
            }, {
                duration: e.showDuration || 0
            }), b.loadingShown = !0;
            f()
        },
        hideLoading: function() {
            var a = this.options,
                b = this.loadingDiv;
            b && Ta(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    F(b, {
                        display: "none"
                    })
                }
            });
            this.loadingShown = !1
        }
    });
    q($.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                if (f.y ===
                    null && h) f.graphic = h.destroy();
                if (ba(a) && !Fa(a)) f.redraw = function() {
                    if (h && h.element && a && a.marker && a.marker.symbol) f.graphic = h.destroy();
                    if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                if (l && f.name) l[f.x] = f.name;
                k.data[i] = ba(k.data[i]) ? f.options : a;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries) j.isDirtyBox = !0;
                if (k.legendType === "point") j.isDirtyLegend = !0;
                b && j.redraw(c)
            }
            var f = this,
                g = f.series,
                h = f.graphic,
                i, j = g.chart,
                k = g.options,
                l = g.xAxis && g.xAxis.names,
                b = p(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {
                options: a
            }, e)
        },
        remove: function(a, b) {
            this.series.removePoint(za(this, this.series.data), a, b)
        }
    });
    q(S.prototype, {
        addPoint: function(a, b, c, d) {
            var e = this,
                f = e.options,
                g = e.data,
                h = e.graph,
                i = e.area,
                j = e.chart,
                k = e.xAxis && e.xAxis.names,
                l = h && h.shift || 0,
                m = ["graph", "area"],
                h = f.data,
                o, u = e.xData;
            Wa(d, j);
            if (c) {
                for (d = e.zones.length; d--;) m.push("zoneGraph" + d, "zoneArea" + d);
                n(m, function(a) {
                    if (e[a]) e[a].shift = l + (f.step ? 2 : 1)
                })
            }
            if (i) i.isArea = !0;
            b = p(b, !0);
            i = {
                series: e
            };
            e.pointClass.prototype.applyOptions.apply(i, [a]);
            m = i.x;
            d = u.length;
            if (e.requireSorting && m < u[d - 1])
                for (o = !0; d && u[d - 1] > m;) d--;
            e.updateParallelArrays(i, "splice", d, 0, 0);
            e.updateParallelArrays(i, d);
            if (k && i.name) k[m] = i.name;
            h.splice(d, 0, a);
            o && (e.data.splice(d, 0, null), e.processData());
            f.legendType === "point" && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(i, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), j.redraw())
        },
        removePoint: function(a, b, c) {
            var d = this,
                e = d.data,
                f = e[a],
                g = d.points,
                h = d.chart,
                i = function() {
                    e.length === g.length && g.splice(a, 1);
                    e.splice(a, 1);
                    d.options.data.splice(a, 1);
                    d.updateParallelArrays(f || {
                        series: d
                    }, "splice", a, 1);
                    f && f.destroy();
                    d.isDirty = !0;
                    d.isDirtyData = !0;
                    b && h.redraw()
                };
            Wa(c, h);
            b = p(b, !0);
            f ? f.firePointEvent("remove", null, i) : i()
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart;
            M(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                p(a, !0) && d.redraw(b)
            })
        },
        update: function(a,
            b) {
            var c = this,
                d = this.chart,
                e = this.userOptions,
                f = this.type,
                g = z[f].prototype,
                h = ["group", "markerGroup", "dataLabelsGroup"],
                i;
            if (a.type && a.type !== f || a.zIndex !== void 0) h.length = 0;
            n(h, function(a) {
                h[a] = c[a];
                delete c[a]
            });
            a = B(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (i in g) this[i] = w;
            q(this, z[a.type || f].prototype);
            n(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            p(b, !0) && d.redraw(!1)
        }
    });
    q(Z.prototype, {
        update: function(a, b) {
            var c = this.chart,
                a = c.options[this.coll][this.options.index] = B(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = w;
            this.init(c, q(a, {
                events: w
            }));
            c.isDirtyBox = !0;
            p(b, !0) && c.redraw()
        },
        remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            ua(b.axes, this);
            ua(b[c], this);
            b.options[c].splice(this.options.index, 1);
            n(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            p(a, !0) && b.redraw()
        },
        setTitle: function(a, b) {
            this.update({
                    title: a
                },
                b)
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b)
        }
    });
    O = aa(S);
    z.line = O;
    X.column = B(Za, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        softThreshold: !1,
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    O = aa(S, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            S.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && n(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e = c.reversed,
                f, g = {},
                h = 0;
            b.grouping === !1 ? h = 1 : n(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis,
                    i;
                if (b.type === a.type && b.visible &&
                    d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === w && (g[f] = h++), i = g[f]) : c.grouping !== !1 && (i = h++), b.columnIndex = i
            });
            var i = I(Q(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                j = i * b.groupPadding,
                k = (i - 2 * j) / h,
                b = I(b.maxPointWidth || c.len, p(b.pointWidth, k * (1 - 2 * b.pointPadding)));
            a.columnMetrics = {
                width: b,
                offset: (k - b) / 2 + (j + ((a.columnIndex || 0) + (e ? 1 : 0)) * k - i / 2) * (e ? -1 : 1)
            };
            return a.columnMetrics
        },
        crispCol: function(a, b, c, d) {
            var e = this.chart,
                f = this.borderWidth,
                g = -(f %
                    2 ? 0.5 : 0),
                f = f % 2 ? 0.5 : 1;
            e.inverted && e.renderer.isVML && (f += 1);
            c = Math.round(a + c) + g;
            a = Math.round(a) + g;
            c -= a;
            d = Math.round(b + d) + f;
            g = Q(b) <= 0.5 && d > 0.5;
            b = Math.round(b) + f;
            d -= b;
            g && (b -= 1, d += 1);
            return {
                x: a,
                y: b,
                width: c,
                height: d
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = p(c.borderWidth, a.closestPointRange * a.xAxis.transA < 2 ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = p(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                i = h.width,
                j = a.barW = v(i, 1 + 2 * d),
                k = a.pointXOffset = h.offset;
            b.inverted && (f -= 0.5);
            c.pointPadding && (j = ra(j));
            S.prototype.translate.apply(a);
            n(a.points, function(c) {
                var d = I(p(c.yBottom, f), 9E4),
                    h = 999 + Q(d),
                    h = I(v(-h, c.plotY), e.len + h),
                    n = c.plotX + k,
                    s = j,
                    q = I(h, d),
                    y, r = v(h, d) - q;
                Q(r) < g && g && (r = g, y = !e.reversed && !c.negative || e.reversed && c.negative, q = Q(q - f) > g ? d - g : f - (y ? g : 0));
                c.barX = n;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - n - s / 2, r] : [n + s / 2, h + e.pos - b.plotTop, r];
                c.shapeType = "rect";
                c.shapeArgs = a.crispCol(n, q, s, r)
            })
        },
        getSymbol: U,
        drawLegendSymbol: cb.drawRectangle,
        drawGraph: U,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            n(a.points, function(h) {
                var i = h.plotY,
                    j = h.graphic;
                if (i !== w && !isNaN(i) && h.y !== null) f = h.shapeArgs, i = r(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], j ? (Ka(j), j.attr(i).attr(g)[b.pointCount < e ? "animate" : "attr"](B(f))) : h.graphic = d[h.shapeType](f).attr(i).attr(g).add(h.group || a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);
                else if (j) h.graphic =
                    j.destroy()
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            if (ea) a ? (e.scaleY = 0.001, a = I(b.pos + b.len, v(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && n(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            });
            S.prototype.remove.apply(a, arguments)
        }
    });
    z.column =
        O;
    X.scatter = B(Za, {
        lineWidth: 0,
        marker: {
            enabled: !0
        },
        tooltip: {
            headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    Za = aa(S, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        kdDimensions: 2,
        drawGraph: function() {
            this.options.lineWidth && S.prototype.drawGraph.call(this)
        }
    });
    z.scatter =
        Za;
    S.prototype.drawDataLabels = function() {
        var a = this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            i, j, k = a.chart.renderer;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), p(d.defer, !0) && (j.attr({
            opacity: +h
        }), h || G(a, "afterAnimate", function() {
            a.visible && j.show();
            j[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, n(e, function(e) {
            var h, o = e.dataLabel,
                n,
                s, v = e.connector,
                y = !0,
                t, x = {};
            f = e.dlOptions || e.options && e.options.dataLabels;
            h = p(f && f.enabled, g.enabled) && e.y !== null;
            if (o && !h) e.dataLabel = o.destroy();
            else if (h) {
                d = B(g, f);
                t = d.style;
                h = d.rotation;
                n = e.getLabelConfig();
                i = d.format ? Na(d.format, n) : d.formatter.call(n, d);
                t.color = p(d.color, t.color, a.color, "black");
                if (o)
                    if (r(i)) o.attr({
                        text: i
                    }), y = !1;
                    else {
                        if (e.dataLabel = o = o.destroy(), v) e.connector = v.destroy()
                    }
                else if (r(i)) {
                    o = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius ||
                            0,
                        rotation: h,
                        padding: d.padding,
                        zIndex: 1
                    };
                    if (t.color === "contrast") x.color = d.inside || d.distance < 0 || b.stacking ? k.getContrast(e.color || a.color) : "#000000";
                    if (c) x.cursor = c;
                    for (s in o) o[s] === w && delete o[s];
                    o = e.dataLabel = k[h ? "text" : "label"](i, 0, -9999, d.shape, null, null, d.useHTML).attr(o).css(q(t, x)).add(j).shadow(d.shadow)
                }
                o && a.alignDataLabel(e, o, d, null, y)
            }
        })
    };
    S.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = p(a.plotX, -9999),
            i = p(a.plotY, -9999),
            j = b.getBBox(),
            k = f.renderer.fontMetrics(c.style.fontSize).b,
            l = this.visible && (a.series.forceDL || f.isInsidePlot(h, x(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g));
        if (l) d = q({
            x: g ? f.plotWidth - i : h,
            y: x(g ? f.plotHeight - h : i),
            width: 0,
            height: 0
        }, d), q(c, {
            width: j.width,
            height: j.height
        }), c.rotation ? (a = f.renderer.rotCorr(k, c.rotation), b[e ? "attr" : "animate"]({
            x: d.x + c.x + d.width / 2 + a.x,
            y: d.y + c.y + d.height / 2
        }).attr({
            align: c.align
        })) : (b.align(c, null, d), g = b.alignAttr, p(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, j, d, e) : p(c.crop, !0) && (l = f.isInsidePlot(g.x, g.y) &&
            f.isInsidePlot(g.x + j.width, g.y + j.height)), c.shape && b.attr({
            anchorX: a.plotX,
            anchorY: a.plotY
        }));
        if (!l) Ka(b), b.attr({
            y: -9999
        }), b.placed = !1
    };
    S.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            i = b.verticalAlign,
            j, k, l = a.box ? 0 : a.padding || 0;
        j = c.x + l;
        if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0;
        j = c.x + d.width - l;
        if (j > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0;
        j = c.y + l;
        if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;
        j = c.y + d.height - l;
        if (j > g.plotHeight) i === "top" ?
            b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;
        if (k) a.placed = !f, a.align(b, null, e)
    };
    if (z.pie) z.pie.prototype.drawDataLabels = function() {
            var a = this,
                b = a.data,
                c, d = a.chart,
                e = a.options.dataLabels,
                f = p(e.connectorPadding, 10),
                g = p(e.connectorWidth, 1),
                h = d.plotWidth,
                i = d.plotHeight,
                j, k, l = p(e.softConnector, !0),
                m = e.distance,
                o = a.center,
                u = o[2] / 2,
                s = o[1],
                q = m > 0,
                r, t, w, B = [
                    [],
                    []
                ],
                A, z, C, D, L, F = [0, 0, 0, 0],
                M = function(a, b) {
                    return b.y - a.y
                };
            if (a.visible && (e.enabled || a._hasPointLabels)) {
                S.prototype.drawDataLabels.apply(a);
                n(b,
                    function(a) {
                        a.dataLabel && a.visible && B[a.half].push(a)
                    });
                for (D = 2; D--;) {
                    var G = [],
                        N = [],
                        H = B[D],
                        K = H.length,
                        J;
                    if (K) {
                        a.sortByAngle(H, D - 0.5);
                        for (L = b = 0; !b && H[L];) b = H[L] && H[L].dataLabel && (H[L].dataLabel.getBBox().height || 21), L++;
                        if (m > 0) {
                            t = I(s + u + m, d.plotHeight);
                            for (L = v(0, s - u - m); L <= t; L += b) G.push(L);
                            t = G.length;
                            if (K > t) {
                                c = [].concat(H);
                                c.sort(M);
                                for (L = K; L--;) c[L].rank = L;
                                for (L = K; L--;) H[L].rank >= t && H.splice(L, 1);
                                K = H.length
                            }
                            for (L = 0; L < K; L++) {
                                c = H[L];
                                w = c.labelPos;
                                c = 9999;
                                var P, O;
                                for (O = 0; O < t; O++) P = Q(G[O] - w[1]), P < c && (c = P,
                                    J = O);
                                if (J < L && G[L] !== null) J = L;
                                else
                                    for (t < K - L + J && G[L] !== null && (J = t - K + L); G[J] === null;) J++;
                                N.push({
                                    i: J,
                                    y: G[J]
                                });
                                G[J] = null
                            }
                            N.sort(M)
                        }
                        for (L = 0; L < K; L++) {
                            c = H[L];
                            w = c.labelPos;
                            r = c.dataLabel;
                            C = c.visible === !1 ? "hidden" : "inherit";
                            c = w[1];
                            if (m > 0) {
                                if (t = N.pop(), J = t.i, z = t.y, c > z && G[J + 1] !== null || c < z && G[J - 1] !== null) z = I(v(0, c), d.plotHeight)
                            } else z = c;
                            A = e.justify ? o[0] + (D ? -1 : 1) * (u + m) : a.getX(z === s - u - m || z === s + u + m ? c : z, D);
                            r._attr = {
                                visibility: C,
                                align: w[6]
                            };
                            r._pos = {
                                x: A + e.x + ({
                                    left: f,
                                    right: -f
                                }[w[6]] || 0),
                                y: z + e.y - 10
                            };
                            r.connX = A;
                            r.connY =
                                z;
                            if (this.options.size === null) t = r.width, A - t < f ? F[3] = v(x(t - A + f), F[3]) : A + t > h - f && (F[1] = v(x(A + t - h + f), F[1])), z - b / 2 < 0 ? F[0] = v(x(-z + b / 2), F[0]) : z + b / 2 > i && (F[2] = v(x(z + b / 2 - i), F[2]))
                        }
                    }
                }
                if (Ha(F) === 0 || this.verifyDataLabelOverflow(F)) this.placeDataLabels(), q && g && n(this.points, function(b) {
                    j = b.connector;
                    w = b.labelPos;
                    if ((r = b.dataLabel) && r._pos && b.visible) C = r._attr.visibility, A = r.connX, z = r.connY, k = l ? ["M", A + (w[6] === "left" ? 5 : -5), z, "C", A, z, 2 * w[2] - w[4], 2 * w[3] - w[5], w[2], w[3], "L", w[4], w[5]] : ["M", A + (w[6] === "left" ? 5 : -5), z, "L",
                        w[2], w[3], "L", w[4], w[5]
                    ], j ? (j.animate({
                        d: k
                    }), j.attr("visibility", C)) : b.connector = j = a.chart.renderer.path(k).attr({
                        "stroke-width": g,
                        stroke: e.connectorColor || b.color || "#606060",
                        visibility: C
                    }).add(a.dataLabelsGroup);
                    else if (j) b.connector = j.destroy()
                })
            }
        }, z.pie.prototype.placeDataLabels = function() {
            n(this.points, function(a) {
                var b = a.dataLabel;
                if (b && a.visible)(a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                    y: -9999
                })
            })
        }, z.pie.prototype.alignDataLabel = U, z.pie.prototype.verifyDataLabelOverflow =
        function(a) {
            var b = this.center,
                c = this.options,
                d = c.center,
                e = c.minSize || 80,
                f = e,
                g;
            d[0] !== null ? f = v(b[2] - v(a[1], a[3]), e) : (f = v(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
            d[1] !== null ? f = v(I(f, b[2] - v(a[0], a[2])), e) : (f = v(I(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
            f < b[2] ? (b[2] = f, b[3] = Math.min(/%$/.test(c.innerSize || 0) ? f * parseFloat(c.innerSize || 0) / 100 : parseFloat(c.innerSize || 0), f), this.translate(b), n(this.points, function(a) {
                if (a.dataLabel) a.dataLabel._pos = null
            }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
            return g
        };
    if (z.column) z.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted,
            g = a.series,
            h = a.dlBox || a.shapeArgs,
            i = p(a.below, a.plotY > p(this.translatedThreshold, g.yAxis.len)),
            j = p(c.inside, !!this.options.stacking);
        if (h) {
            d = B(h);
            if (d.y < 0) d.height += d.y, d.y = 0;
            h = d.y + d.height - g.yAxis.len;
            h > 0 && (d.height -= h);
            f && (d = {
                x: g.yAxis.len - d.y - d.height,
                y: g.xAxis.len - d.x - d.width,
                width: d.height,
                height: d.width
            });
            if (!j) f ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0)
        }
        c.align = p(c.align, !f || j ? "center" :
            i ? "right" : "left");
        c.verticalAlign = p(c.verticalAlign, f || j ? "middle" : i ? "top" : "bottom");
        S.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    (function(a) {
        var b = a.Chart,
            c = a.each,
            d = a.pick,
            e = a.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var e = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function(b) {
                        c(a.points, function(a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height),
                                e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var b = a.length,
                d, e, j, k, l, m, o;
            for (e = 0; e < b; e++)
                if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                j = a[e];
                for (d = e + 1; d < b; ++d)
                    if (k = a[d], j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, m = k.alignAttr, o = 2 * (j.box ? 0 : j.padding), l = !(m.x > l.x + (j.width - o) || m.x + (k.width - o) < l.x || m.y > l.y + (j.height -
                            o) || m.y + (k.height - o) < l.y)))(j.labelrank < k.labelrank ? j : k).newOpacity = 0
            }
            c(a, function(a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function() {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(t);
    ga(Z.prototype, "getSeriesExtremes", function(a) {
        var b = this.isXAxis,
            c, d, e = [],
            f;
        b && n(this.series, function(a, b) {
            if (a.useMapGeometry) e[b] = a.xData, a.xData = []
        });
        a.call(this);
        if (b && (c = p(this.dataMin, Number.MAX_VALUE), d = p(this.dataMax, -Number.MAX_VALUE),
                n(this.series, function(a, b) {
                    if (a.useMapGeometry) c = Math.min(c, p(a.minX, c)), d = Math.max(d, p(a.maxX, c)), a.xData = e[b], f = !0
                }), f)) this.dataMin = c, this.dataMax = d
    });
    ga(Z.prototype, "setAxisTranslation", function(a) {
        var b = this.chart,
            c = b.plotWidth / b.plotHeight,
            b = b.xAxis[0],
            d;
        a.call(this);
        this.coll === "yAxis" && b.transA !== w && n(this.series, function(a) {
            a.preserveAspectRatio && (d = !0)
        });
        if (d && (this.transA = b.transA = Math.min(this.transA, b.transA), a = c / ((b.max - b.min) / (this.max - this.min)), a = a < 1 ? this : b, c = (a.max - a.min) * a.transA,
                a.pixelPadding = a.len - c, a.minPixelPadding = a.pixelPadding / 2, c = a.fixTo)) {
            c = c[1] - a.toValue(c[0], !0);
            c *= a.transA;
            if (Math.abs(c) > a.minPixelPadding || a.min === a.dataMin && a.max === a.dataMax) c = 0;
            a.minPixelPadding -= c
        }
    });
    ga(Z.prototype, "render", function(a) {
        a.call(this);
        this.fixTo = null
    });
    var db = t.ColorAxis = function() {
        this.isColorAxis = !0;
        this.init.apply(this, arguments)
    };
    q(db.prototype, Z.prototype);
    q(db.prototype, {
        defaultColorAxisOptions: {
            lineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            startOnTick: !0,
            endOnTick: !0,
            offset: 0,
            marker: {
                animation: {
                    duration: 50
                },
                color: "gray",
                width: 0.01
            },
            labels: {
                overflow: "justify"
            },
            minColor: "#EFEFFF",
            maxColor: "#003875",
            tickLength: 5
        },
        init: function(a, b) {
            var c = a.options.legend.layout !== "vertical",
                d;
            d = B(this.defaultColorAxisOptions, {
                side: c ? 2 : 1,
                reversed: !c
            }, b, {
                opposite: !c,
                showEmpty: !1,
                title: null,
                isColor: !0
            });
            Z.prototype.init.call(this, a, d);
            b.dataClasses && this.initDataClasses(b);
            this.initStops(b);
            this.horiz = c;
            this.zoomEnabled = !1
        },
        tweenColors: function(a, b, c) {
            var d;
            !b.rgba.length || !a.rgba.length ? a = b.input || "none" : (a = a.rgba, b = b.rgba, d = b[3] !== 1 || a[3] !== 1, a = (d ? "rgba(" : "rgb(") + Math.round(b[0] + (a[0] - b[0]) * (1 - c)) + "," + Math.round(b[1] + (a[1] - b[1]) * (1 - c)) + "," + Math.round(b[2] + (a[2] - b[2]) * (1 - c)) + (d ? "," + (b[3] + (a[3] - b[3]) * (1 - c)) : "") + ")");

            // console.log(a+":"+b+":"+c+":"+d);
            return a
        },
        initDataClasses: function(a) {
            var b = this,
                c = this.chart,
                d, e = 0,
                f = this.options,
                g = a.dataClasses.length;
            this.dataClasses = d = [];
            this.legendItems = [];
            n(a.dataClasses, function(a, i) {
                var j, a = B(a);
                d.push(a);
                if (!a.color) f.dataClassColor === "category" ?
                    (j = c.options.colors, a.color = j[e++], e === j.length && (e = 0)) : a.color = b.tweenColors(P(f.minColor), P(f.maxColor), g < 2 ? 0.5 : i / (g - 1))
            })
        },
        initStops: function(a) {
            this.stops = a.stops || [
                [0, this.options.minColor],
                [1, this.options.maxColor]
            ];
            n(this.stops, function(a) {
                a.color = P(a[1])
            })
        },
        setOptions: function(a) {
            Z.prototype.setOptions.call(this, a);
            this.options.crosshair = this.options.marker;
            this.coll = "colorAxis"
        },
        setAxisSize: function() {
            var a = this.legendSymbol,
                b = this.chart,
                c, d, e;
            if (a) this.left = c = a.attr("x"), this.top = d = a.attr("y"),
                this.width = e = a.attr("width"), this.height = a = a.attr("height"), this.right = b.chartWidth - c - e, this.bottom = b.chartHeight - d - a, this.len = this.horiz ? e : a, this.pos = this.horiz ? c : d
        },
        toColor: function(a, b) {
            var c, d = this.stops,
                e, f = this.dataClasses,
                g, h;
            if (f)
                for (h = f.length; h--;) {
                    if (g = f[h], e = g.from, d = g.to, (e === w || a >= e) && (d === w || a <= d)) {
                        c = g.color;
                        if (b) b.dataClass = h;
                        break
                    }
                } else {
                    this.isLog && (a = this.val2lin(a));
                    c = 1 - (this.max - a) / (this.max - this.min || 1);
                    for (h = d.length; h--;)
                        if (c > d[h][0]) break;
                    e = d[h] || d[h + 1];
                    d = d[h + 1] || e;
                    c = 1 - (d[0] - c) / (d[0] - e[0] || 1);
                    // console.log(b["key"]);
                    if(b["key"] == "us"){
                        c = "rgb(0,0,255)";
                    }else{
                        c = this.tweenColors(e.color, d.color, c);
                    }
                }
            return c
        },
        getOffset: function() {
            var a = this.legendGroup,
                b = this.chart.axisOffset[this.side];
            if (a) {
                this.axisParent = a;
                Z.prototype.getOffset.call(this);
                if (!this.added) this.added = !0, this.labelLeft = 0, this.labelRight = this.width;
                this.chart.axisOffset[this.side] = b
            }
        },
        setLegendColor: function() {
            var a, b = this.options,
                c = this.reversed;
            a = c ? 1 : 0;
            c = c ? 0 : 1;
            a = this.horiz ? [a, 0, c, 0] : [0, c, 0, a];
            this.legendColor = {
                linearGradient: {
                    x1: a[0],
                    y1: a[1],
                    x2: a[2],
                    y2: a[3]
                },
                stops: b.stops || [
                    [0, b.minColor],
                    [1, b.maxColor]
                ]
            }
        },
        drawLegendSymbol: function(a, b) {
            var c = a.padding,
                d = a.options,
                e = this.horiz,
                f = p(d.symbolWidth, e ? 200 : 12),
                g = p(d.symbolHeight, e ? 12 : 200),
                h = p(d.labelPadding, e ? 16 : 30),
                d = p(d.itemDistance, 10);
            this.setLegendColor();
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, f, g).attr({
                zIndex: 1
            }).add(b.legendGroup);
            this.legendItemWidth = f + c + (e ? d : h);
            this.legendItemHeight = g + c + (e ? h : 0)
        },
        setState: U,
        visible: !0,
        setVisible: U,
        getSeriesExtremes: function() {
            var a;
            if (this.series.length) a = this.series[0],
                this.dataMin = a.valueMin, this.dataMax = a.valueMax
        },
        drawCrosshair: function(a, b) {
            var c = b && b.plotX,
                d = b && b.plotY,
                e, f = this.pos,
                g = this.len;
            if (b) e = this.toPixels(b[b.series.colorKey]), e < f ? e = f - 2 : e > f + g && (e = f + g + 2), b.plotX = e, b.plotY = this.len - e, Z.prototype.drawCrosshair.call(this, a, b), b.plotX = c, b.plotY = d, this.cross && this.cross.attr({
                fill: this.crosshair.color
            }).add(this.legendGroup)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            return typeof e === "number" ? this.horiz ? ["M", e - 4, this.top - 6, "L", e + 4, this.top - 6, e, this.top, "Z"] : ["M",
                this.left, e, "L", this.left - 6, e + 6, this.left - 6, e - 6, "Z"
            ] : Z.prototype.getPlotLinePath.call(this, a, b, c, d)
        },
        update: function(a, b) {
            var c = this.chart,
                d = c.legend;
            n(this.series, function(a) {
                a.isDirtyData = !0
            });
            if (a.dataClasses && d.allItems) n(d.allItems, function(a) {
                a.isDataClass && a.legendGroup.destroy()
            }), c.isDirtyLegend = !0;
            c.options[this.coll] = B(this.userOptions, a);
            Z.prototype.update.call(this, a, b);
            this.legendItem && (this.setLegendColor(), d.colorizeItem(this, !0))
        },
        getDataClassLegendSymbols: function() {
            var a = this,
                b =
                this.chart,
                c = this.legendItems,
                d = b.options.legend,
                e = d.valueDecimals,
                f = d.valueSuffix || "",
                g;
            c.length || n(this.dataClasses, function(d, i) {
                var j = !0,
                    k = d.from,
                    l = d.to;
                g = "";
                k === w ? g = "< " : l === w && (g = "> ");
                k !== w && (g += t.numberFormat(k, e) + f);
                k !== w && l !== w && (g += " - ");
                l !== w && (g += t.numberFormat(l, e) + f);
                c.push(q({
                    chart: b,
                    name: g,
                    options: {},
                    drawLegendSymbol: cb.drawRectangle,
                    visible: !0,
                    setState: U,
                    isDataClass: !0,
                    setVisible: function() {
                        j = this.visible = !j;
                        n(a.series, function(a) {
                            n(a.points, function(a) {
                                a.dataClass === i && a.setVisible(j)
                            })
                        });
                        b.legend.colorizeItem(this, j)
                    }
                }, d))
            });
            return c
        },
        name: ""
    });
    n(["fill", "stroke"], function(a) {
        t.Fx.prototype[a + "Setter"] = function() {
            this.elem.attr(a, db.prototype.tweenColors(P(this.start), P(this.end), this.pos))
        }
    });
    ga(ha.prototype, "getAxes", function(a) {
        var b = this.options.colorAxis;
        a.call(this);
        this.colorAxis = [];
        b && new db(this, b)
    });
    ga(bb.prototype, "getAllItems", function(a) {
        var b = [],
            c = this.chart.colorAxis[0];
        c && (c.options.dataClasses ? b = b.concat(c.getDataClassLegendSymbols()) : b.push(c), n(c.series, function(a) {
            a.options.showInLegend = !1
        }));
        return b.concat(a.call(this))
    });
    var La = {
            setVisible: function(a) {
                var b = this,
                    c = a ? "show" : "hide";
                n(["graphic", "dataLabel"], function(a) {
                    if (b[a]) b[a][c]()
                })
            }
        },
        Lb = {
            //Stroke Changing My Code
            pointAttrToOptions: {
                stroke: "borderColor",
                "stroke-width": "borderWidth",
                fill: "color",
                dashstyle: "dashStyle"
            },
            pointArrayMap: ["value"],
            axisTypes: ["xAxis", "yAxis", "colorAxis"],
            optionalAxis: "colorAxis",
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            getSymbol: U,
            parallelArrays: ["x", "y", "value"],
            colorKey: "value",
            translateColors: function() {
                var a =
                    this,
                    b = this.options.nullColor,
                    c = this.colorAxis,
                    d = this.colorKey;
                n(this.data, function(e) {
                    var f = e[d];
                    if (f = e.options.color || (f === null ? b : c && f !== void 0 ? c.toColor(f, e) : e.color || a.color)) e.color = f;
                })
            }
        },
        lb = A.documentElement.style.vectorEffect !== void 0;
    X.map = B(X.scatter, {
        allAreas: !0,
        animation: !1,
        nullColor: "#F8F8F8",
        borderColor: "silver",
        borderWidth: 1,
        marker: null,
        stickyTracking: !1,
        dataLabels: {
            formatter: function() {
                return this.point.value
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
        },
        turboThreshold: 0,
        tooltip: {
            followPointer: !0,
            pointFormat: "{point.name}: {point.value}<br/>"
        },
        states: {
            normal: {
                animation: !0
            },
            hover: {
                brightness: 0.2,
                halo: null
            }
        }
    });
    var Mb = aa($, q({
        applyOptions: function(a, b) {
            var c = $.prototype.applyOptions.call(this, a, b),
                d = this.series,
                e = d.joinBy;
            if (d.mapData)
                if (e = c[e[1]] !== void 0 && d.mapMap[c[e[1]]]) {
                    if (d.xyFromShape) c.x = e._midX, c.y = e._midY;
                    q(c, e)
                } else c.value = c.value || null;
            return c
        },
        onMouseOver: function(a) {
            clearTimeout(this.colorInterval);
            if (this.value !== null) $.prototype.onMouseOver.call(this,
                a);
            else this.series.onMouseOut(a)
        },
        onMouseOut: function() {
            var a = this,
                b = +new xa,
                c = P(a.color),
                d = P(a.pointAttr.hover.fill),
                e = a.series.options.states.normal.animation,
                f = e && (e.duration || 500),
                g;
            if (f && c.rgba.length === 4 && d.rgba.length === 4 && a.state !== "select") g = a.pointAttr[""].fill, delete a.pointAttr[""].fill, clearTimeout(a.colorInterval), a.colorInterval = setInterval(function() {
                    var e = (new xa - b) / f,
                        g = a.graphic;
                    e > 1 && (e = 1);
                    g && g.attr("fill", db.prototype.tweenColors.call(0, d, c, e));
                    e >= 1 && clearTimeout(a.colorInterval)
                },
                13);
            $.prototype.onMouseOut.call(a);
            if (g) a.pointAttr[""].fill = g
        },
        zoomTo: function() {
            var a = this.series;
            a.xAxis.setExtremes(this._minX, this._maxX, !1);
            a.yAxis.setExtremes(this._minY, this._maxY, !1);
            a.chart.redraw()
        }
    }, La));
    z.map = aa(z.scatter, B(Lb, {
        type: "map",
        pointClass: Mb,
        supportsDrilldown: !0,
        getExtremesFromAll: !0,
        useMapGeometry: !0,
        forceDL: !0,
        searchPoint: U,
        directTouch: !0,
        preserveAspectRatio: !0,
        getBox: function(a) {
            var b = Number.MAX_VALUE,
                c = -b,
                d = b,
                e = -b,
                f = b,
                g = b,
                h = this.xAxis,
                i = this.yAxis,
                j;
            n(a || [], function(a) {
                if (a.path) {
                    if (typeof a.path ===
                        "string") a.path = t.splitPath(a.path);
                    var h = a.path || [],
                        i = h.length,
                        o = !1,
                        n = -b,
                        s = b,
                        q = -b,
                        r = b,
                        v = a.properties;
                    if (!a._foundBox) {
                        for (; i--;) typeof h[i] === "number" && !isNaN(h[i]) && (o ? (n = Math.max(n, h[i]), s = Math.min(s, h[i])) : (q = Math.max(q, h[i]), r = Math.min(r, h[i])), o = !o);
                        a._midX = s + (n - s) * (a.middleX || v && v["hc-middle-x"] || 0.5);
                        a._midY = r + (q - r) * (a.middleY || v && v["hc-middle-y"] || 0.5);
                        a._maxX = n;
                        a._minX = s;
                        a._maxY = q;
                        a._minY = r;
                        a.labelrank = p(a.labelrank, (n - s) * (q - r));
                        a._foundBox = !0
                    }
                    c = Math.max(c, a._maxX);
                    d = Math.min(d, a._minX);
                    e = Math.max(e, a._maxY);
                    f = Math.min(f, a._minY);
                    g = Math.min(a._maxX - a._minX, a._maxY - a._minY, g);
                    j = !0
                }
            });
            if (j) {
                this.minY = Math.min(f, p(this.minY, b));
                this.maxY = Math.max(e, p(this.maxY, -b));
                this.minX = Math.min(d, p(this.minX, b));
                this.maxX = Math.max(c, p(this.maxX, -b));
                if (h && h.options.minRange === void 0) h.minRange = Math.min(5 * g, (this.maxX - this.minX) / 5, h.minRange || b);
                if (i && i.options.minRange === void 0) i.minRange = Math.min(5 * g, (this.maxY - this.minY) / 5, i.minRange || b)
            }
        },
        getExtremes: function() {
            S.prototype.getExtremes.call(this,
                this.valueData);
            this.chart.hasRendered && this.isDirtyData && this.getBox(this.options.data);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            this.dataMin = this.minY;
            this.dataMax = this.maxY
        },
        translatePath: function(a) {
            var b = !1,
                c = this.xAxis,
                d = this.yAxis,
                e = c.min,
                f = c.transA,
                c = c.minPixelPadding,
                g = d.min,
                h = d.transA,
                d = d.minPixelPadding,
                i, j = [];
            if (a)
                for (i = a.length; i--;) typeof a[i] === "number" ? (j[i] = b ? (a[i] - e) * f + c : (a[i] - g) * h + d, b = !b) : j[i] = a[i];
            return j
        },
        setData: function(a, b) {
            var c = this.options,
                d = c.mapData,
                e = c.joinBy,
                f = e === null,
                g = [],
                h, i, j;
            f && (e = "_i");
            e = this.joinBy = t.splat(e);
            e[1] || (e[1] = e[0]);
            a && n(a, function(b, c) {
                typeof b === "number" && (a[c] = {
                    value: b
                });
                if (f) a[c]._i = c
            });
            this.getBox(a);
            if (d) {
                if (d.type === "FeatureCollection") {
                    if (d["hc-transform"])
                        for (h in this.chart.mapTransforms = i = d["hc-transform"], i)
                            if (i.hasOwnProperty(h) && h.rotation) h.cosAngle = Math.cos(h.rotation), h.sinAngle = Math.sin(h.rotation);
                    d = t.geojson(d, this.type, this)
                }
                this.getBox(d);
                this.mapData = d;
                this.mapMap = {};
                for (j = 0; j < d.length; j++) h = d[j], i = h.properties,
                    h._i = j, e[0] && i && i[e[0]] && (h[e[0]] = i[e[0]]), this.mapMap[h[e[0]]] = h;
                c.allAreas && (a = a || [], e[1] && n(a, function(a) {
                    g.push(a[e[1]])
                }), g = "|" + g.join("|") + "|", n(d, function(b) {
                    (!e[0] || g.indexOf("|" + b[e[0]] + "|") === -1) && a.push(B(b, {
                        value: null
                    }))
                }))
            }
            S.prototype.setData.call(this, a, b)
        },
        drawGraph: U,
        drawDataLabels: U,
        doFullTranslate: function() {
            return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans
        },
        translate: function() {
            var a = this,
                b = a.xAxis,
                c = a.yAxis,
                d = a.doFullTranslate();
            a.generatePoints();
            n(a.data, function(e) {
                e.plotX = b.toPixels(e._midX, !0);
                e.plotY = c.toPixels(e._midY, !0);
                if (d) e.shapeType = "path", e.shapeArgs = {
                    d: a.translatePath(e.path)
                }, lb && (e.shapeArgs["vector-effect"] = "non-scaling-stroke")
                // console.log(e.shapeArgs);
            });
            a.translateColors();
            // console.log();
        },
        drawPoints: function() {
            var a = this,
                b = a.xAxis,
                c = a.yAxis,
                d = a.group,
                e = a.chart,
                f = e.renderer,
                g, h = this.baseTrans;
            if (!a.transformGroup) a.transformGroup = f.g().attr({
                scaleX: 1,
                scaleY: 1
            }).add(d), a.transformGroup.survive = !0;
            a.doFullTranslate() ? (e.hasRendered && a.pointAttrToOptions.fill === "color" &&
                n(a.points, function(a) {
                    if (a.shapeArgs) a.shapeArgs.fill = a.pointAttr[p(a.state, "")].fill
                }), lb || n(a.points, function(b) {
                    b = b.pointAttr[""];
                    b["stroke-width"] === a.pointAttr[""]["stroke-width"] && (b["stroke-width"] = "inherit")
                }), a.group = a.transformGroup, z.column.prototype.drawPoints.apply(a), a.group = d, n(a.points, function(a) {
                    a.graphic && (a.name && a.graphic.addClass("worldcharts-name-" + a.name.replace(" ", "-").toLowerCase()), a.properties && a.properties["hc-key"] && a.graphic.addClass("worldcharts-key-" + a.properties["hc-key"].toLowerCase()),
                        lb || (a.graphic["stroke-widthSetter"] = U))
                    // console.log(a.graphic);
                }), this.baseTrans = {
                    originX: b.min - b.minPixelPadding / b.transA,
                    originY: c.min - c.minPixelPadding / c.transA + (c.reversed ? 0 : c.len / c.transA),
                    transAX: b.transA,
                    transAY: c.transA
                }, this.transformGroup.animate({
                    translateX: 0,
                    translateY: 0,
                    scaleX: 1,
                    scaleY: 1
                })) : (g = b.transA / h.transAX, d = c.transA / h.transAY, b = b.toPixels(h.originX, !0), c = c.toPixels(h.originY, !0), g > 0.99 && g < 1.01 && d > 0.99 && d < 1.01 && (d = g = 1, b = Math.round(b), c = Math.round(c)), this.transformGroup.animate({
                translateX: b,
                translateY: c,
                scaleX: g,
                scaleY: d
            }));
            lb || a.group.element.setAttribute("stroke-width", a.options.borderWidth / (g || 1))
            // console.log(a.group.element);
            this.drawMapDataLabels()
        },
        drawMapDataLabels: function() {
            //DrawDataLabel
            // console.log(this);
            S.prototype.drawDataLabels.call(this);
            // S.prototype.drawDataCircle.call(this);
            this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect)
        },
        render: function() {
            var a = this,
                b = S.prototype.render;
            a.chart.renderer.isVML && a.data.length > 3E3 ? setTimeout(function() {
                b.call(a)
            }) : b.call(a)
        },
        animate: function(a) {
            var b = this.options.animation,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis,
                f = d.pos,
                g = e.pos;
            if (this.chart.renderer.isSVG) b === !0 && (b = {
                duration: 1E3
            }), a ? c.attr({
                translateX: f + d.len / 2,
                translateY: g + e.len / 2,
                scaleX: 0.001,
                scaleY: 0.001
            }) : (c.animate({
                translateX: f,
                translateY: g,
                scaleX: 1,
                scaleY: 1
            }, b), this.animate = null)
        },
        animateDrilldown: function(a) {
            var b = this.chart.plotBox,
                c = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
                d = c.bBox,
                e = this.chart.options.drilldown.animation;
            if (!a) a = Math.min(d.width / b.width, d.height / b.height), c.shapeArgs = {
                scaleX: a,
                scaleY: a,
                translateX: d.x,
                translateY: d.y
            }, n(this.points,
                function(a) {
                    a.graphic && a.graphic.attr(c.shapeArgs).animate({
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0
                    }, e)
                }), this.animate = null
        },
        drawLegendSymbol: cb.drawRectangle,
        animateDrillupFrom: function(a) {
            z.column.prototype.animateDrillupFrom.call(this, a)
        },
        animateDrillupTo: function(a) {
            z.column.prototype.animateDrillupTo.call(this, a)
        }
    }));
    (function(a) {
        var b = a.Chart,
            c = a.each,
            d = a.pick,
            e = a.addEvent;
        b.prototype.callbacks.push(function(a) {
            function b() {
                var e = [];
                c(a.series, function(a) {
                    var b = a.options.dataLabels,
                        f = a.dataLabelCollections || ["dataLabel"];
                    (b.enabled || a._hasPointLabels) && !b.allowOverlap && a.visible && c(f, function(b) {
                        c(a.points, function(a) {
                            if (a[b]) a[b].labelrank = d(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[b])
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            b();
            e(a, "redraw", b)
        });
        b.prototype.hideOverlappingLabels = function(a) {
            var b = a.length,
                d, e, j, k, l, m, o;
            for (e = 0; e < b; e++)
                if (d = a[e]) d.oldOpacity = d.opacity, d.newOpacity = 1;
            a.sort(function(a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (e = 0; e < b; e++) {
                j = a[e];
                for (d = e + 1; d < b; ++d)
                    if (k = a[d],
                        j && k && j.placed && k.placed && j.newOpacity !== 0 && k.newOpacity !== 0 && (l = j.alignAttr, m = k.alignAttr, o = 2 * (j.box ? 0 : j.padding), l = !(m.x > l.x + (j.width - o) || m.x + (k.width - o) < l.x || m.y > l.y + (j.height - o) || m.y + (k.height - o) < l.y)))(j.labelrank < k.labelrank ? j : k).newOpacity = 0
            }
            c(a, function(a) {
                var b, c;
                if (a) {
                    c = a.newOpacity;
                    if (a.oldOpacity !== c && a.placed) c ? a.show(!0) : b = function() {
                        a.hide()
                    }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b);
                    a.isOld = !0
                }
            })
        }
    })(t);
    q(ha.prototype, {
        renderMapNavigation: function() {
            var a =
                this,
                b = this.options.mapNavigation,
                c = b.buttons,
                d, e, f, g, h = function(a) {
                    if (a) a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
                },
                i = function(b) {
                    this.handler.call(a, b);
                    h(b)
                };
            if (p(b.enableButtons, b.enabled) && !a.renderer.forExport)
                for (d in c)
                    if (c.hasOwnProperty(d)) f = B(b.buttonOptions, c[d]), e = f.theme, e.style = B(f.theme.style, f.style), g = e.states, e = a.renderer.button(f.text, 0, 0, i, e, g && g.hover, g && g.select, 0, d === "zoomIn" ? "topbutton" : "bottombutton").attr({
                        width: f.width,
                        height: f.height,
                        title: a.options.lang[d],
                        zIndex: 5
                    }).add(), e.handler = f.onclick, e.align(q(f, {
                        width: e.width,
                        height: 2 * e.height
                    }), null, f.alignTo), G(e.element, "dblclick", h)
        },
        fitToBox: function(a, b) {
            n([
                ["x", "width"],
                ["y", "height"]
            ], function(c) {
                var d = c[0],
                    c = c[1];
                a[d] + a[c] > b[d] + b[c] && (a[c] > b[c] ? (a[c] = b[c], a[d] = b[d]) : a[d] = b[d] + b[c] - a[c]);
                a[c] > b[c] && (a[c] = b[c]);
                a[d] < b[d] && (a[d] = b[d])
            });
            return a
        },
        mapZoom: function(a, b, c, d, e) {
            var f = this.xAxis[0],
                g = f.max - f.min,
                h = p(b, f.min + g / 2),
                i = g * a,
                g = this.yAxis[0],
                j = g.max - g.min,
                k = p(c, g.min + j / 2);
            j *= a;
            h = this.fitToBox({
                x: h - i * (d ? (d - f.pos) / f.len : 0.5),
                y: k - j * (e ? (e - g.pos) / g.len : 0.5),
                width: i,
                height: j
            }, {
                x: f.dataMin,
                y: g.dataMin,
                width: f.dataMax - f.dataMin,
                height: g.dataMax - g.dataMin
            });
            if (d) f.fixTo = [d - f.pos, b];
            if (e) g.fixTo = [e - g.pos, c];
            a !== void 0 ? (f.setExtremes(h.x, h.x + h.width, !1), g.setExtremes(h.y, h.y + h.height, !1)) : (f.setExtremes(void 0, void 0, !1), g.setExtremes(void 0, void 0, !1));
            this.redraw()
        }
    });
    ga(ha.prototype, "render", function(a) {
        var b = this,
            c = b.options.mapNavigation;
        b.renderMapNavigation();
        a.call(b);
        (p(c.enableDoubleClickZoom, c.enabled) || c.enableDoubleClickZoomTo) && G(b.container, "dblclick", function(a) {
            b.pointer.onContainerDblClick(a)
        });
        p(c.enableMouseWheelZoom, c.enabled) && G(b.container, A.onmousewheel === void 0 ? "DOMMouseScroll" : "mousewheel", function(a) {
            b.pointer.onContainerMouseWheel(a);
            return !1
        })
    });
    q(Aa.prototype, {
        onContainerDblClick: function(a) {
            var b = this.chart,
                a = this.normalize(a);
            b.options.mapNavigation.enableDoubleClickZoomTo ? b.pointer.inClass(a.target, "worldcharts-tracker") && b.hoverPoint.zoomTo() :
                b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && b.mapZoom(0.5, b.xAxis[0].toValue(a.chartX), b.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
        },
        onContainerMouseWheel: function(a) {
            var b = this.chart,
                c, a = this.normalize(a);
            c = a.detail || -(a.wheelDelta / 120);
            b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && b.mapZoom(Math.pow(2, c), b.xAxis[0].toValue(a.chartX), b.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
        }
    });
    ga(Aa.prototype, "init", function(a, b, c) {
        a.call(this, b, c);
        if (p(c.mapNavigation.enableTouchZoom,
                c.mapNavigation.enabled)) this.pinchX = this.pinchHor = this.pinchY = this.pinchVert = this.hasZoom = !0
    });
    ga(Aa.prototype, "pinchTranslate", function(a, b, c, d, e, f, g) {
        a.call(this, b, c, d, e, f, g);
        this.chart.options.chart.type === "map" && this.hasZoom && (a = d.scaleX > d.scaleY, this.pinchTranslateDirection(!a, b, c, d, e, f, g, a ? d.scaleX : d.scaleY))
    });
    X.mapline = B(X.map, {
        lineWidth: 1,
        fillColor: "none"
    });
    z.mapline = aa(z.map, {
        type: "mapline",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            dashstyle: "dashStyle"
        },
        drawLegendSymbol: z.line.prototype.drawLegendSymbol
    });
    X.mappoint = B(X.scatter, {
        dataLabels: {
            enabled: !0,
            formatter: function() {
                return this.point.name
            },
            crop: !1,
            defer: !1,
            overflow: !1,
            style: {
                color: "#000000"
            }
        }
    });
    z.mappoint = aa(z.scatter, {
        type: "mappoint",
        forceDL: !0,
        pointClass: aa($, {
            applyOptions: function(a, b) {
                var c = $.prototype.applyOptions.call(this, a, b);
                a.lat !== void 0 && a.lon !== void 0 && (c = q(c, this.series.chart.fromLatLonToPoint(c)));
                return c
            }
        })
    });
    X.bubble = B(X.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        softThreshold: !1,
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
    });
    var Qb = aa($, {
        haloPath: function() {
            return $.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        },
        ttBelow: !1
    });
    z.bubble = aa(z.scatter, {
        type: "bubble",
        pointClass: Qb,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        zoneAxis: "z",
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(a) {
            var b = this.options.marker,
                c = p(b.fillOpacity, 0.5),
                a = a || b.fillColor || this.color;
            c !== 1 && (a = P(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function() {
            var a = S.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function(a, b, c, d) {
            var e, f, g, h = this.zData,
                i = [],
                j = this.options,
                k = j.sizeBy !== "width",
                l = j.zThreshold,
                m = b - a;
            for (f = 0, e = h.length; f < e; f++) g = h[f], j.sizeByAbsoluteValue && g !== null && (g = Math.abs(g - l), b = Math.max(b - l, Math.abs(a - l)), a = 0), g === null ? g = null : g < a ? g = c / 2 - 1 : (g = m > 0 ? (g - a) / m : 0.5, k && g >= 0 && (g = Math.sqrt(g)), g = N.ceil(c + g * (d - c)) / 2), i.push(g);
            this.radii = i
        },
        animate: function(a) {
            var b = this.options.animation;
            if (!a) n(this.points, function(a) {
                var d = a.graphic,
                    a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({
                    r: a.r
                }, b))
            }), this.animate = null
        },
        translate: function() {
            var a, b = this.data,
                c, d, e =
                this.radii;
            z.scatter.prototype.translate.call(this);
            for (a = b.length; a--;) c = b[a], d = e ? e[a] : 0, typeof d === "number" && d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = w
        },
        drawLegendSymbol: function(a, b) {
            var c = this.chart.renderer,
                d = c.fontMetrics(a.itemStyle.fontSize).f / 2;
            b.legendSymbol = c.circle(d, a.baseline - d, d).attr({
                zIndex: 3
            }).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: z.column.prototype.drawPoints,
        alignDataLabel: z.column.prototype.alignDataLabel,
        buildKDTree: U,
        applyZones: U
    });
    Z.prototype.beforePadding = function() {
        var a = this,
            b = this.len,
            c = this.chart,
            d = 0,
            e = b,
            f = this.isXAxis,
            g = f ? "xData" : "yData",
            h = this.min,
            i = {},
            j = N.min(c.plotWidth, c.plotHeight),
            k = Number.MAX_VALUE,
            l = -Number.MAX_VALUE,
            m = this.max - h,
            o = b / m,
            q = [];
        n(this.series, function(b) {
            var d = b.options;
            if (b.bubblePadding && (b.visible || !c.options.chart.ignoreHiddenSeries))
                if (a.allowZoomOutside = !0, q.push(b), f) n(["minSize", "maxSize"], function(a) {
                    var b = d[a],
                        c = /%$/.test(b),
                        b = D(b);
                    i[a] = c ? j * b / 100 : b
                }), b.minPxSize = i.minSize, b.maxPxSize = i.maxSize, b = b.zData, b.length && (k = p(d.zMin, N.min(k, N.max(Va(b), d.displayNegative === !1 ? d.zThreshold : -Number.MAX_VALUE))), l = p(d.zMax, N.max(l, Ha(b))))
        });
        n(q, function(a) {
            var b = a[g],
                c = b.length,
                i;
            f && a.getRadii(k, l, a.minPxSize, a.maxPxSize);
            if (m > 0)
                for (; c--;) typeof b[c] === "number" && (i = a.radii[c], d = Math.min((b[c] - h) * o - i, d), e = Math.max((b[c] - h) * o + i, e))
        });
        q.length && m > 0 && !this.isLog && (e -= b, o *= (b + d - e) / b, n([
            ["min", "userMin", d],
            ["max", "userMax",
                e
            ]
        ], function(b) {
            p(a.options[b[0]], a[b[1]]) === w && (a[b[0]] += b[2] / o)
        }))
    };
    if (z.bubble) X.mapbubble = B(X.bubble, {
        animationLimit: 500,
        tooltip: {
            pointFormat: "{point.name}: {point.z}"
        }
    }), z.mapbubble = aa(z.bubble, {
        pointClass: aa($, {
            applyOptions: function(a, b) {
                var c;
                a && a.lat !== void 0 && a.lon !== void 0 ? (c = $.prototype.applyOptions.call(this, a, b), c = q(c, this.series.chart.fromLatLonToPoint(c))) : c = Mb.prototype.applyOptions.call(this, a, b);
                return c
            },
            ttBelow: !1
        }),
        xyFromShape: !0,
        type: "mapbubble",
        pointArrayMap: ["z"],
        getMapData: z.map.prototype.getMapData,
        getBox: z.map.prototype.getBox,
        setData: z.map.prototype.setData
    });
    ha.prototype.transformFromLatLon = function(a, b) {
        if (C.proj4 === void 0) return T(21), {
            x: 0,
            y: null
        };
        var c = C.proj4(b.crs, [a.lon, a.lat]),
            d = b.cosAngle || b.rotation && Math.cos(b.rotation),
            e = b.sinAngle || b.rotation && Math.sin(b.rotation),
            c = b.rotation ? [c[0] * d + c[1] * e, -c[0] * e + c[1] * d] : c;
        return {
            x: ((c[0] - (b.xoffset || 0)) * (b.scale || 1) + (b.xpan || 0)) * (b.jsonres || 1) + (b.jsonmarginX || 0),
            y: (((b.yoffset || 0) - c[1]) * (b.scale || 1) + (b.ypan || 0)) * (b.jsonres || 1) - (b.jsonmarginY ||
                0)
        }
    };
    ha.prototype.transformToLatLon = function(a, b) {
        if (C.proj4 === void 0) T(21);
        else {
            var c = {
                    x: ((a.x - (b.jsonmarginX || 0)) / (b.jsonres || 1) - (b.xpan || 0)) / (b.scale || 1) + (b.xoffset || 0),
                    y: ((-a.y - (b.jsonmarginY || 0)) / (b.jsonres || 1) + (b.ypan || 0)) / (b.scale || 1) + (b.yoffset || 0)
                },
                d = b.cosAngle || b.rotation && Math.cos(b.rotation),
                e = b.sinAngle || b.rotation && Math.sin(b.rotation),
                c = C.proj4(b.crs, "WGS84", b.rotation ? {
                    x: c.x * d + c.y * -e,
                    y: c.x * e + c.y * d
                } : c);
            return {
                lat: c.y,
                lon: c.x
            }
        }
    };
    ha.prototype.fromPointToLatLon = function(a) {
        var b = this.mapTransforms,
            c;
        if (b) {
            for (c in b)
                if (b.hasOwnProperty(c) && b[c].hitZone && Eb({
                        x: a.x,
                        y: -a.y
                    }, b[c].hitZone.coordinates[0])) return this.transformToLatLon(a, b[c]);
            return this.transformToLatLon(a, b["default"])
        } else T(22)
    };
    ha.prototype.fromLatLonToPoint = function(a) {
        var b = this.mapTransforms,
            c, d;
        if (!b) return T(22), {
            x: 0,
            y: null
        };
        for (c in b)
            if (b.hasOwnProperty(c) && b[c].hitZone && (d = this.transformFromLatLon(a, b[c]), Eb({
                    x: d.x,
                    y: -d.y
                }, b[c].hitZone.coordinates[0]))) return d;
        return this.transformFromLatLon(a, b["default"])
    };
    t.geojson =
        function(a, b, c) {
            var d = [],
                e = [],
                f = function(a) {
                    var b, c = a.length;
                    e.push("M");
                    for (b = 0; b < c; b++) b === 1 && e.push("L"), e.push(a[b][0], -a[b][1])
                },
                b = b || "map";
            n(a.features, function(a) {
                var c = a.geometry,
                    i = c.type,
                    c = c.coordinates,
                    a = a.properties,
                    j;
                e = [];
                b === "map" || b === "mapbubble" ? (i === "Polygon" ? (n(c, f), e.push("Z")) : i === "MultiPolygon" && (n(c, function(a) {
                    n(a, f)
                }), e.push("Z")), e.length && (j = {
                    path: e
                })) : b === "mapline" ? (i === "LineString" ? f(c) : i === "MultiLineString" && n(c, f), e.length && (j = {
                    path: e
                })) : b === "mappoint" && i === "Point" && (j = {
                    x: c[0],
                    y: -c[1]
                });
                j && d.push(q(j, {
                    name: a.name || a.NAME,
                    properties: a
                }))
            });
            return d
        };
    ga(ha.prototype, "showCredits", function(a, b) {
        if (H.credits.text === this.options.credits.text && this.mapCredits) b.text = this.mapCredits, b.href = null;
        a.call(this, b);
        this.credits && this.credits.attr({
            title: this.mapCreditsFull
        })
    });
    q(H.lang, {
        zoomIn: "Zoom in",
        zoomOut: "Zoom out"
    });
    H.mapNavigation = {
        buttonOptions: {
            alignTo: "plotBox",
            align: "left",
            verticalAlign: "top",
            x: 0,
            width: 18,
            height: 18,
            style: {
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center"
            },
            theme: {
                "stroke-width": 1
            }
        },
        buttons: {
            zoomIn: {
                onclick: function() {
                    this.mapZoom(0.5)
                },
                text: "+",
                y: 0
            },
            zoomOut: {
                onclick: function() {
                    this.mapZoom(2)
                },
                text: "-",
                y: 28
            }
        }
    };
    t.splitPath = function(a) {
        var b, a = a.replace(/([A-Za-z])/g, " $1 "),
            a = a.replace(/^\s*/, "").replace(/\s*$/, ""),
            a = a.split(/[ ,]+/);
        for (b = 0; b < a.length; b++) /[a-zA-Z]/.test(a[b]) ||
            (a[b] = parseFloat(a[b]));
        return a
    };
    t.maps = {};
    la.prototype.symbols.topbutton = function(a, b, c, d, e) {
        return Fb(a - 1, b - 1, c, d, e.r, e.r, 0, 0)
    };
    la.prototype.symbols.bottombutton = function(a, b, c, d, e) {
        return Fb(a - 1, b - 1, c, d, 0, 0, e.r, e.r)
    };
    Ra === ab && n(["topbutton", "bottombutton"], function(a) {
        ab.prototype.symbols[a] = la.prototype.symbols[a]
    });
    t.Map = t.mapChart = function(a, b, c) {
        var d = typeof a === "string" || a.nodeName,
            e = arguments[d ? 1 : 0],
            f = {
                endOnTick: !1,
                gridLineWidth: 0,
                lineWidth: 0,
                minPadding: 0,
                maxPadding: 0,
                startOnTick: !1,
                title: null,
                tickPositions: []
            },
            g;
        g = e.series;
        e.series = null;
        e = B({
            chart: {
                panning: "xy",
                type: "map"
            },
            xAxis: f,
            yAxis: B(f, {
                reversed: !0
            })
        }, e, {
            chart: {
                inverted: !1,
                alignTicks: !1
            }
        });
        e.series = g;
        return d ? new ha(a, e, c) : new ha(e, b)
    };
    H.plotOptions.heatmap = B(H.plotOptions.scatter, {
        animation: !1,
        borderWidth: 0,
        nullColor: "#F8F8F8",
        dataLabels: {
            formatter: function() {
                return this.point.value
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
        },
        marker: null,
        pointRange: null,
        tooltip: {
            pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
        },
        states: {
            normal: {
                animation: !0
            },
            hover: {
                halo: !1,
                brightness: 0.2
            }
        }
    });
    z.heatmap = aa(z.scatter, B(Lb, {
        type: "heatmap",
        pointArrayMap: ["y", "value"],
        hasPointSpecificOptions: !0,
        pointClass: aa($, La),
        supportsDrilldown: !0,
        getExtremesFromAll: !0,
        directTouch: !0,
        init: function() {
            var a;
            z.scatter.prototype.init.apply(this, arguments);
            a = this.options;
            a.pointRange = p(a.pointRange, a.colsize || 1);
            this.yAxis.axisPointRange = a.rowsize || 1
        },
        translate: function() {
            var a = this.options,
                b = this.xAxis,
                c = this.yAxis,
                d = function(a, b, c) {
                    return Math.min(Math.max(b,
                        a), c)
                };
            this.generatePoints();
            n(this.points, function(e) {
                var f = (a.colsize || 1) / 2,
                    g = (a.rowsize || 1) / 2,
                    h = d(Math.round(b.len - b.translate(e.x - f, 0, 1, 0, 1)), 0, b.len),
                    f = d(Math.round(b.len - b.translate(e.x + f, 0, 1, 0, 1)), 0, b.len),
                    i = d(Math.round(c.translate(e.y - g, 0, 1, 0, 1)), 0, c.len),
                    g = d(Math.round(c.translate(e.y + g, 0, 1, 0, 1)), 0, c.len);
                e.plotX = e.clientX = (h + f) / 2;
                e.plotY = (i + g) / 2;
                e.shapeType = "rect";
                e.shapeArgs = {
                    x: Math.min(h, f),
                    y: Math.min(i, g),
                    width: Math.abs(f - h),
                    height: Math.abs(g - i)
                }
            });
            this.translateColors();
            this.chart.hasRendered &&
                n(this.points, function(a) {
                    a.shapeArgs.fill = a.options.color || a.color
                })
        },
        drawPoints: z.column.prototype.drawPoints,
        animate: U,
        getBox: U,
        drawLegendSymbol: cb.drawRectangle,
        getExtremes: function() {
            S.prototype.getExtremes.call(this, this.valueData);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            S.prototype.getExtremes.call(this)
        }
    }));
    La = t.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(a) {
                    for (var c = a.target, d; c && !d;) d = c.point, c = c.parentNode;
                    if (d !== w && d !== b.hoverPoint) d.onMouseOver(a)
                };
            n(a.points, function(a) {
                if (a.graphic) a.graphic.element.point = a;
                if (a.dataLabel) a.dataLabel.element.point = a
            });
            if (!a._hasTracking) n(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("worldcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), Xa)) a[b].on("touchstart", f)
            }), a._hasTracking = !0
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                i = f.options.tooltip.snap,
                j = a.tracker,
                k = b.cursor,
                l = k && {
                    cursor: k
                },
                k = a.singlePoints,
                m, o = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                p = "rgba(192,192,192," + (ea ? 1.0E-4 : 0.002) + ")";
            if (e && !c)
                for (m = e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]);
            for (m = 0; m < k.length; m++) e = k[m], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            j ? j.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: p,
                fill: c ? p : "none",
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), n([a.tracker, a.markerGroup], function(a) {
                a.addClass("worldcharts-tracker").on("mouseover", o).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(l);
                if (Xa) a.on("touchstart", o)
            }))
        }
    };
    if (z.column) O.prototype.drawTracker = La.drawTrackerPoint;
    if (z.pie) z.pie.prototype.drawTracker = La.drawTrackerPoint;
    if (z.scatter) Za.prototype.drawTracker = La.drawTrackerPoint;
    q(bb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f =
                this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                        a.setVisible && a.setVisible()
                    },
                    b = {
                        browserEvent: b
                    };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : M(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = ca("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            G(a.checkbox, "click", function(b) {
                M(a.series || a, "checkboxClick", {
                    checked: b.target.checked,
                    item: a
                }, function() {
                    a.select()
                })
            })
        }
    });
    H.legend.itemStyle.cursor = "pointer";
    q(ha.prototype, {
        showResetZoom: function() {
            var a = this,
                b = H.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            M(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? n(this.axes, function(a) {
                b = a.zoom()
            }) : n(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e) this.showResetZoom();
            else if (!d && ba(e)) this.resetZoomButton = e.destroy();
            b && this.redraw(p(this.options.chart.animation, a &&
                a.animation, this.pointCount < 100))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && n(d, function(a) {
                a.setState()
            });
            n(b === "xy" ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"],
                    h = c[b ? "xAxis" : "yAxis"][0],
                    i = c[b ? "mouseDownX" : "mouseDownY"],
                    j = (h.pointRange || 0) / 2,
                    k = h.getExtremes(),
                    l = h.toValue(i - d, !0) + j,
                    j = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j,
                    i = i > d;
                if (h.series.length && (i || l > I(k.dataMin, k.min)) && (!i || j < v(k.dataMax, k.max))) h.setExtremes(l, j, !1, !1, {
                    trigger: "pan"
                }), e = !0;
                c[b ? "mouseDownX" : "mouseDownY"] =
                    d
            });
            e && c.redraw(!1);
            F(c.container, {
                cursor: "move"
            })
        }
    });
    q($.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                a = p(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[za(c, d.data)] = c.options;
                c.setState(a && "select");
                b || n(e.getSelectedPoints(), function(a) {
                    if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[za(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        },
        onMouseOver: function(a,
            b) {
            var c = this.series,
                d = c.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            if (d.hoverSeries !== c) c.onMouseOver();
            if (f && f !== this) f.onMouseOut();
            if (this.series && (this.firePointEvent("mouseOver"), e && (!e.shared || c.noSharedTooltip) && e.refresh(this, a), this.setState("hover"), !b)) d.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || za(this, b) === -1) this.setState(), a.hoverPoint = null
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = B(this.series.options.point,
                        this.options).events,
                    b;
                this.events = a;
                for (b in a) G(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = fa(this.plotX),
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = X[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                i = g && g.states[a],
                j = i && i.enabled === !1,
                k = e.stateMarkerGraphic,
                l = this.marker || {},
                m = e.chart,
                o = e.halo,
                n, a = a || "";
            n = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] &&
                    l.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && n.r, this.graphic.attr(B(n, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), k && k.hide();
                else {
                    if (a && i)
                        if (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else if (l) e.stateMarkerGraphic = k = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(n).add(e.markerGroup), k.currentSymbol = l;
                    if (k) k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"](), k.element.point = this
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    if (!o) e.halo =
                        o = m.renderer.path().add(m.seriesGroup);
                    o.attr(q({
                        fill: this.color || e.color,
                        "fill-opacity": c.opacity
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })
                } else o && o.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted,
                f = Math.floor(this.plotX);
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : f) - a, d.translateY + (e ? b.xAxis.len - f : this.plotY) - a, a * 2, a * 2)
        }
    });
    q(S.prototype, {
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && M(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            b.hoverSeries = null;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && M(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState()
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                e = b.lineWidth,
                b = 0,
                a = a || "";
            if (this.state !== a && (this.state = a, !(d[a] &&
                    d[a].enabled === !1) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus || 0)), c && !c.dashstyle))) {
                a = {
                    "stroke-width": e
                };
                for (c.attr(a); this["zoneGraph" + b];) this["zoneGraph" + b].attr(a), b += 1
            }
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === w ? !h : a) ? "show" : "hide";
            n(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) ===
                c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && n(d.series, function(a) {
                if (a.options.stacking && a.visible) a.isDirty = !0
            });
            n(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            if (g) d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            M(c, f)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === w ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            M(this, a ? "select" : "unselect")
        },
        drawTracker: La.drawTrackerGraph
    });
    q(t, {
        Color: P,
        Point: $,
        Tick: Qa,
        Renderer: Ra,
        SVGElement: J,
        SVGRenderer: la,
        arrayMin: Va,
        arrayMax: Ha,
        charts: Y,
        dateFormat: Oa,
        error: T,
        format: Na,
        pathAnim: void 0,
        getOptions: function() {
            return H
        },
        hasBidiBug: Nb,
        isTouchDevice: Hb,
        setOptions: function(a) {
            H = B(!0, H, a);
            wb();
            return H
        },
        addEvent: G,
        removeEvent: W,
        createElement: ca,
        discardElement: Pa,
        css: F,
        each: n,
        map: Ea,
        merge: B,
        splat: qa,
        stableSort: eb,
        extendClass: aa,
        pInt: D,
        svg: ea,
        canvas: ka,
        vml: !ea && !ka,
        product: "Worldmaps",
        version: "4.2.1"
    });
    return t
});