var today;
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(a) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    let day = new Date();
    let dic = {
        0: " Jan",
        1: " Feb",
        2: " Mar",
        3: " Apr",
        4: " May",
        5: " Jun",
        6: " July",
        7: " Aug",
        8: " Sep",
        9: " Oct",
        10: " Nov",
        11: " Dec"
    };
    let date = day.getDate();
    let mon = day.getMonth();
    let year = day.getFullYear();
    let time = date + dic[mon] + " " + year;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addTitle.value,
        text: addTxt.value,
        today: time
    }
    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        if (element.title.length === 0) {
            element.title = "Blank note!";
        }
        if (element.text.length === 0) {
            element.text = "Blank note";
        }
        html += `
        <div class="noteCard my-2 mx-2 card shadow-lg p-3 mb-5 rounded bg-dark text-white" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger my-3">Delete Note</button>
          <small style="text-align:right; display:block;">${element.today}</small>
        </div>
      </div>
      `;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML =
            `Try adding some notes!`
    }
}

function deleteNote(index) {
    var result = confirm("Are you sure you want to delete?");
    if (result) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
    }
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
});

/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */ !
    function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module
            .exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error(
                "jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(g, e) {
        "use strict";
        var t = [],
            v = g.document,
            r = Object.getPrototypeOf,
            s = t.slice,
            y = t.concat,
            u = t.push,
            i = t.indexOf,
            n = {},
            o = n.toString,
            m = n.hasOwnProperty,
            a = m.toString,
            l = a.call(Object),
            b = {},
            x = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            w = function(e) {
                return null != e && e === e.window
            },
            c = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function C(e, t, n) {
            var r, i, o = (n = n || v).createElement("script");
            if (o.text = e, t)
                for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o
                    .setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" ==
            typeof e ? n[o.call(e)] || "object" : typeof e
        }
        var f =
                "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
            E = function(e, t) {
                return new E.fn.init(e, t)
            },
            d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function p(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !x(e) && !w(e) && ("array" === n || 0 === t || "number" ==
                typeof t && 0 < t && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: f,
            constructor: E,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] :
                    this[e]
            },
            pushStack: function(e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return E.each(this, e)
            },
            map: function(n) {
                return this.pushStack(E.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        }, E.extend = E.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++),
                 "object" == typeof a || x(a) || (a = {}), s === u && (a = this,
                s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E
                        .isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o =
                        i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n :
                            {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[
                        t] = r));
            return a
        }, E.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) ||
                    "function" == typeof(n = m.call(t, "constructor") && t
                        .constructor) && a.call(n) === l)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t) {
                C(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(d, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? E.merge(n, "string" ==
                typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] =
                    t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i],
                    i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a
                        .push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return y.apply([], a)
            },
            guid: 1,
            support: b
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol
            .iterator]), E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol"
                .split(" "),
            function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
        var h = function(n) {
            var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, N =
                    "sizzle" + 1 * new Date,
                m = n.document,
                A = 0,
                r = 0,
                d = ue(),
                b = ue(),
                k = ue(),
                S = ue(),
                D = function(e, t) {
                    return e === t && (l = !0), 0
                },
                L = {}.hasOwnProperty,
                t = [],
                j = t.pop,
                q = t.push,
                O = t.push,
                P = t.slice,
                H = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                I =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B +
                    "))|)" + R + "*\\]",
                W = ":(" + B +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    M + ")*)|.*)\\)|)",
                $ = new RegExp(R + "+", "g"),
                F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
                    "g"),
                z = new RegExp("^" + R + "*," + R + "*"),
                _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                U = new RegExp(R + "|>"),
                V = new RegExp(W),
                X = new RegExp("^" + B + "$"),
                Q = {
                    ID: new RegExp("^#(" + B + ")"),
                    CLASS: new RegExp("^\\.(" + B + ")"),
                    TAG: new RegExp("^(" + B + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R +
                        "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + R +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R +
                        "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                ne = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) :
                        String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e
                        .charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                oe = function() {
                    C()
                },
                ae = xe(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName
                        .toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(t = P.call(m.childNodes), m.childNodes), t[m.childNodes
                    .length].nodeType
            } catch (e) {
                O = {
                    apply: t.length ? function(e, t) {
                        q.apply(e, P.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function se(t, e, n, r) {
                var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d &&
                11 !== d) return n;
                if (!r && ((e ? e.ownerDocument || e : m) !== T && C(e), e = e || T,
                    E)) {
                    if (11 !== d && (u = Z.exec(t)))
                        if (i = u[1]) {
                            if (9 === d) {
                                if (!(a = e.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id ===
                                i) return n.push(a), n
                        } else {
                            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = u[3]) && p.getElementsByClassName && e
                                .getElementsByClassName) return O.apply(n, e
                                .getElementsByClassName(i)), n
                        } if (p.qsa && !S[t + " "] && (!v || !v.test(t)) && (1 !== d ||
                        "object" !== e.nodeName.toLowerCase())) {
                        if (c = t, f = e, 1 === d && U.test(t)) {
                            (s = e.getAttribute("id")) ? s = s.replace(re, ie): e
                                .setAttribute("id", s = N), o = (l = h(t)).length;
                            while (o--) l[o] = "#" + s + " " + be(l[o]);
                            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                        }
                        try {
                            return O.apply(n, f.querySelectorAll(c)), n
                        } catch (e) {
                            S(t, !0)
                        } finally {
                            s === N && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace(F, "$1"), e, n, r)
            }

            function ue() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[
                    t + " "] = n
                }
            }

            function le(e) {
                return e[N] = !0, e
            }

            function ce(e) {
                var t = T.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) x.attrHandle[n[r]] = t
            }

            function de(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t
                        .sourceIndex;
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function he(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function ge(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ?
                            "label" in e ? "label" in e.parentNode ? e.parentNode
                                .disabled === t : e.disabled === t : e.isDisabled === t || e
                                .isDisabled !== !t && ae(e) === t : e.disabled === t :
                        "label" in e && e.disabled === t
                }
            }

            function ve(a) {
                return le(function(o) {
                    return o = +o, le(function(e, t) {
                        var n, r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function ye(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, C = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== T && 9 === r.nodeType && r.documentElement && (a = (T =
                    r).documentElement, E = !i(T), m !== T && (n = T
                    .defaultView) && n.top !== n && (n.addEventListener ? n
                    .addEventListener("unload", oe, !1) : n.attachEvent && n
                    .attachEvent("onunload", oe)), p.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ce(function(e) {
                    return e.appendChild(T.createComment("")), !e
                        .getElementsByTagName("*").length
                }), p.getElementsByClassName = J.test(T.getElementsByClassName),
                    p.getById = ce(function(e) {
                        return a.appendChild(e).id = N, !T.getElementsByName || !T
                            .getElementsByName(N).length
                    }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e
                            .getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t
                        .getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) :
                        void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E)
                        return t.getElementsByClassName(e)
                }, s = [], v = [], (p.qsa = J.test(T.querySelectorAll)) && (ce(
                    function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + N +
                            "'></a><select id='" + N +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && v
                            .push("[*^$]=" + R + "*(?:''|\"\")"), e
                            .querySelectorAll("[selected]").length || v.push("\\[" +
                            R + "*(?:value|" + I + ")"), e.querySelectorAll(
                            "[id~=" + N + "-]").length || v.push("~="), e
                            .querySelectorAll(":checked").length || v.push(
                            ":checked"), e.querySelectorAll("a#" + N + "+*")
                            .length || v.push(".#.+[+~]")
                    }), ce(function(e) {
                    e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t)
                        .setAttribute("name", "D"), e.querySelectorAll(
                        "[name=d]").length && v.push("name" + R +
                        "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled")
                        .length && v.push(":enabled", ":disabled"), a
                        .appendChild(e).disabled = !0, 2 !== e.querySelectorAll(
                        ":disabled").length && v.push(":enabled",
                        ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (p.matchesSelector = J.test(c = a.matches || a
                    .webkitMatchesSelector || a.mozMatchesSelector || a
                    .oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    p.disconnectedMatch = c.call(e, "*"), c.call(e,
                        "[s!='']:x"), s.push("!=", W)
                }), v = v.length && new RegExp(v.join("|")), s = s.length &&
                    new RegExp(s.join("|")), t = J.test(a.compareDocumentPosition),
                    y = t || J.test(a.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n
                            .contains(r) : e.compareDocumentPosition && 16 & e
                            .compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t
                        .compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t
                        .ownerDocument || t) ? e.compareDocumentPosition(t) :
                        1) || !p.sortDetached && t.compareDocumentPosition(
                        e) === n ? e === T || e.ownerDocument === m && y(m, e) ? -
                        1 : t === T || t.ownerDocument === m && y(m, t) ? 1 : u ?
                        H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === T ? -1 : t === T ? 1 : i ? -1 : o ?
                        1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return de(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? de(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 :
                        0
                }), T
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && C(e), p.matchesSelector && E &&
                !S[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document
                        .nodeType) return n
                } catch (e) {
                    S(t, !0)
                }
                return 0 < se(t, T, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && C(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== T && C(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) :
                        void 0;
                return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (
                    r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e
                    .sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] ||
                            e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] =
                            " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0,
                            3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[
                            6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se
                            .error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[
                            5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n
                            .indexOf(")", n.length - t) - n.length) && (e[0] = e[
                            0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R +
                            "|$)")) && d(e, function(e) {
                            return t.test("string" == typeof e.className && e
                                .className || "undefined" != typeof e
                                .getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" ===
                            r ? t === i : "!=" === r ? t !== i : "^=" === r ?
                                i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t
                                    .indexOf(i) : "$=" === r ? i && t.slice(-i
                                    .length) === i : "~=" === r ? -1 < (" " + t.replace(
                                    $, " ") + " ").indexOf(i) : "|=" === r && (t ===
                                    i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" :
                                    "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                p = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a
                                                .nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && d) {
                                    p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a
                                            .uniqueID] || (o[a.uniqueID] = {}))[h] ||
                                        [])[0] === A && r[1]) && r[2], a = s && c
                                        .childNodes[s];
                                    while (a = ++s && a && a[l] || (p = s = 0) || u
                                        .pop())
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [A, s, p];
                                            break
                                        }
                                } else if (d && (p = s = (r = (i = (o = (a = e)[N] ||
                                    (a[N] = {}))[a.uniqueID] || (o[a
                                    .uniqueID] = {}))[h] || [])[0] === A && r[1]), !
                                    1 === p)
                                    while (a = ++s && a && a[l] || (p = s = 0) || u
                                        .pop())
                                        if ((b ? a.nodeName.toLowerCase() === f : 1 === a
                                            .nodeType) && ++p && (d && ((i = (o = a[N] ||
                                            (a[N] = {}))[a.uniqueID] || (o[a
                                            .uniqueID] = {}))[h] = [A, p]), a === e))
                                            break;
                                return (p -= v) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] ||
                            se.error("unsupported pseudo: " + e);
                        return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x
                            .setFilters.hasOwnProperty(e.toLowerCase()) ? le(
                            function(e, t) {
                                var n, r = a(e, o),
                                    i = r.length;
                                while (i--) e[n = H(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(F, "$1"));
                        return s[N] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i
                                .pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return X.test(n || "") || se.error("unsupported lang: " +
                            n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e
                                        .getAttribute("lang")) return (t = t
                                        .toLowerCase()) === n || 0 === t.indexOf(n +
                                        "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T
                            .hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e
                            .selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e
                            .selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return K.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" ===
                            t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e
                            .type && (null == (t = e.getAttribute("type")) ||
                            "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e
                            .push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
            for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);

            function me() {}

            function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function xe(s, e, t) {
                var u = e.dir,
                    l = e.next,
                    c = l || u,
                    f = t && "parentNode" === c,
                    d = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u])
                        if (1 === e.nodeType || f) return s(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var r, i, o, a = [A, d];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e
                                    .uniqueID] = {}), l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === A && r[1] === d) return a[2] =
                                        r[2];
                                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                                } return !1
                }
            }

            function we(i) {
                return 1 < i.length ? function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function Ce(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(
                    o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function Te(p, h, g, v, y, e) {
                return v && !v[N] && (v = Te(v)), y && !y[N] && (y = Te(y, e)), le(
                    function(e, t, n, r) {
                        var i, o, a, s = [],
                            u = [],
                            l = t.length,
                            c = e || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            f = !p || !e && h ? c : Ce(c, s, p, n, r),
                            d = g ? y || (e ? p : l || v) ? [] : t : f;
                        if (g && g(f, d, n, r), v) {
                            i = Ce(d, u), v(i, [], n, r), o = i.length;
                            while (o--)(a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
                        }
                        if (e) {
                            if (y || p) {
                                if (y) {
                                    i = [], o = d.length;
                                    while (o--)(a = d[o]) && i.push(f[o] = a);
                                    y(null, d = [], i, r)
                                }
                                o = d.length;
                                while (o--)(a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (
                                    e[i] = !(t[i] = a))
                            }
                        } else d = Ce(d === t ? d.splice(l, d.length) : d), y ? y(null,
                            t, d, r) : O.apply(t, d)
                    })
            }

            function Ee(e) {
                for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x
                    .relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < H(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t,
                        n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                    if (t = x.relative[e[s].type]) c = [xe(we(c), t)];
                    else {
                        if ((t = x.filter[e[s].type].apply(null, e[s].matches))[N]) {
                            for (n = ++s; n < r; n++)
                                if (x.relative[e[n].type]) break;
                            return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(F, "$1"), t, s < n && Ee(e.slice(s, n)), n <
                                r && Ee(e = e.slice(n)), n < r && be(e))
                        }
                        c.push(t)
                    } return we(c)
            }
            return me.prototype = x.filters = x.pseudos, x.setFilters = new me, h =
                se.tokenize = function(e, t) {
                    var n, r, i, o, a, s, u, l = b[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    a = e, s = [], u = x.preFilter;
                    while (a) {
                        for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0]
                            .length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (
                            n = r.shift(), i.push({
                                value: n,
                                type: r[0].replace(F, " ")
                            }), a = a.slice(n.length)), x.filter) !(r = Q[o].exec(a)) ||
                        u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: o,
                            matches: r
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
                }, f = se.compile = function(e, t) {
                var n, v, y, m, b, r, i = [],
                    o = [],
                    a = k[e + " "];
                if (!a) {
                    t || (t = h(e)), n = t.length;
                    while (n--)(a = Ee(t[n]))[N] ? i.push(a) : o.push(a);
                    (a = k(e, (v = o, m = 0 < (y = i).length, b = 0 < v.length, r =
                        function(e, t, n, r, i) {
                            var o, a, s, u = 0,
                                l = "0",
                                c = e && [],
                                f = [],
                                d = w,
                                p = e || b && x.find.TAG("*", i),
                                h = A += null == d ? 1 : Math.random() || .1,
                                g = p.length;
                            for (i && (w = t === T || t || i); l !== g && null != (o =
                                p[l]); l++) {
                                if (b && o) {
                                    a = 0, t || o.ownerDocument === T || (C(o), n = !E);
                                    while (s = v[a++])
                                        if (s(o, t || T, n)) {
                                            r.push(o);
                                            break
                                        } i && (A = h)
                                }
                                m && ((o = !s && o) && u--, e && c.push(o))
                            }
                            if (u += l, m && l !== u) {
                                a = 0;
                                while (s = y[a++]) s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        while (l--) c[l] || f[l] || (f[l] = j.call(r));
                                    f = Ce(f)
                                }
                                O.apply(r, f), i && !e && 0 < f.length && 1 < u + y
                                    .length && se.uniqueSort(r)
                            }
                            return i && (A = h, w = d), c
                        }, m ? le(r) : r))).selector = e
                }
                return a
            }, g = se.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && h(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0])
                        .type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[
                            0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    i = Q.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i], x.relative[s = a.type]) break;
                        if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee
                            .test(o[0].type) && ye(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && be(o))) return O.apply(
                                n, r), n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t
                    .parentNode) || t), n
            }, p.sortStable = N.split("").sort(D).join("") === N, p
                .detectDuplicates = !!l, C(), p.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
            }), ce(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild
                    .getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 :
                    2)
            }), p.attributes && ce(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute(
                    "value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e
                    .defaultValue
            }), ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(I, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e
                    .getAttributeNode(t)) && r.specified ? r.value : null
            }), se
        }(g);
        E.find = h, E.expr = h.selectors, E.expr[":"] = E.expr.pseudos, E
            .uniqueSort = E.unique = h.uniqueSort, E.text = h.getText, E.isXMLDoc = h
            .isXML, E.contains = h.contains, E.escapeSelector = h.escape;
        var N = function(e, t, n) {
                var r = [],
                    i = void 0 !== n;
                while ((e = e[t]) && 9 !== e.nodeType)
                    if (1 === e.nodeType) {
                        if (i && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            A = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n
                    .push(e);
                return n
            },
            k = E.expr.match.needsContext;

        function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(e, n, r) {
            return x(n) ? E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? E.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? E.grep(e, function(e) {
                return -1 < i.call(n, e) !== r
            }) : E.filter(n, e, r)
        }
        E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r
                .nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(
                e, E.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
        }, E.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter(
                    function() {
                        for (t = 0; t < r; t++)
                            if (E.contains(i[t], this)) return !0
                    }));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t],
                    n);
                return 1 < r ? E.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(L(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(L(this, e || [], !0))
            },
            is: function(e) {
                return !!L(this, "string" == typeof e && k.test(e) ? E(e) : e ||
                    [], !1).length
            }
        });
        var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || j, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [
                    null, e, null
                ] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(
                    e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1],
                        t && t.nodeType ? t.ownerDocument || t : v, !0)), D.test(r[
                        1]) && E.isPlainObject(t))
                        for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ?
                void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, j = E(v);
        var O = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function H(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType);
            return e
        }
        E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && E(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n
                                .nodeType && E.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(
                    this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ?
                    this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject
                    .filter(e))
            }
        }), E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return N(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return N(e, "parentNode", n)
            },
            next: function(e) {
                return H(e, "nextSibling")
            },
            prev: function(e) {
                return H(e, "previousSibling")
            },
            nextAll: function(e) {
                return N(e, "nextSibling")
            },
            prevAll: function(e) {
                return N(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return N(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return N(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return "undefined" != typeof e.contentDocument ? e
                    .contentDocument : (S(e, "template") && (e = e.content || e), E
                    .merge([], e.childNodes))
            }
        }, function(r, i) {
            E.fn[r] = function(e, t) {
                var n = E.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e), t && "string" ==
                typeof t && (n = E.filter(t, n)), 1 < this.length && (P[r] || E
                    .uniqueSort(n), O.test(r) && n.reverse()), this.pushStack(n)
            }
        });
        var I = /[^\x20\t\r\n\f]+/g;

        function R(e) {
            return e
        }

        function B(e) {
            throw e
        }

        function M(e, t, n, r) {
            var i;
            try {
                e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ?
                    i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(I) || [],
                function(e, t) {
                    n[t] = !0
                }), n) : E.extend({}, r);
            var i, t, o, a, s = [],
                u = [],
                l = -1,
                c = function() {
                    for (a = a || r.once, o = i = !0; u.length; l = -1) {
                        t = u.shift();
                        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r
                            .stopOnFalse && (l = s.length, t = !1)
                    }
                    r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
                },
                f = {
                    add: function() {
                        return s && (t && !i && (l = s.length - 1, u.push(t)),
                            function n(e) {
                                E.each(e, function(e, t) {
                                    x(t) ? r.unique && f.has(t) || s.push(t) : t && t
                                        .length && "string" !== T(t) && n(t)
                                })
                            }(arguments), t && !i && c()), this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            var n;
                            while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <=
                            l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < E.inArray(e, s) : 0 < s.length
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return a = u = [], s = t = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = u = [], t || i || (s = t = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u
                            .push(t), i || c()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return f
        }, E.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks(
                            "memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks(
                            "once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks(
                            "once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return E.Deferred(function(r) {
                                E.each(o, function(e, t) {
                                    var n = x(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && x(e.promise) ? e.promise()
                                            .progress(r.notify).done(r.resolve)
                                            .fail(r.reject) : r[t[0] + "With"](
                                            this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function l(i, o, a, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise())
                                                    throw new TypeError(
                                                        "Thenable self-resolution");
                                                t = e && ("object" == typeof e ||
                                                    "function" == typeof e) && e.then, x(t) ?
                                                    s ? t.call(e, l(u, o, R, s), l(u, o, B,
                                                        s)) : (u++, t.call(e, l(u, o, R, s), l(u, o,
                                                        B, s), l(u, o, R, o.notifyWith))) : (a !==
                                                    R && (n = void 0, r = [e]), (s || o
                                                        .resolveWith)(n, r))
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                E.Deferred.exceptionHook && E.Deferred
                                                    .exceptionHook(e, t.stackTrace), u <= i +
                                                1 && (a !== B && (n = void 0, r = [e]), o
                                                    .rejectWith(n, r))
                                            }
                                        };
                                    i ? t() : (E.Deferred.getStackHook && (t
                                        .stackTrace = E.Deferred.getStackHook()), g
                                        .setTimeout(t))
                                }
                            }
                            return E.Deferred(function(e) {
                                o[0][3].add(l(0, e, x(r) ? r : R, e.notifyWith)), o[
                                    1][3].add(l(0, e, x(t) ? t : R)), o[2][3].add(l(
                                    0, e, x(n) ? n : B))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, a) : a
                        }
                    },
                    s = {};
                return E.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    a[t[1]] = n.add, r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2]
                        .lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] =
                        function() {
                            return s[t[0] + "With"](this === s ? void 0 : this,
                                arguments), this
                        }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = E.Deferred(),
                    a = function(t) {
                        return function(e) {
                            r[t] = this, i[t] = 1 < arguments.length ? s.call(
                                arguments) : e, --n || o.resolveWith(r, i)
                        }
                    };
                if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n),
                "pending" === o.state() || x(i[t] && i[t].then))) return o
                    .then();
                while (t--) M(i[t], a(t), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(e, t) {
            g.console && g.console.warn && e && W.test(e.name) && g.console.warn(
                "jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function(e) {
            g.setTimeout(function() {
                throw e
            })
        };
        var $ = E.Deferred();

        function F() {
            v.removeEventListener("DOMContentLoaded", F), g.removeEventListener(
                "load", F), E.ready()
        }
        E.fn.ready = function(e) {
            return $.then(e)["catch"](function(e) {
                E.readyException(e)
            }), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e
                && 0 < --E.readyWait || $.resolveWith(v, [E])
            }
        }), E.ready.then = $.then, "complete" === v.readyState || "loading" !== v
            .readyState && !v.documentElement.doScroll ? g.setTimeout(E.ready) : (v
                .addEventListener("DOMContentLoaded", F), g.addEventListener("load", F)
        );
        var z = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === T(n))
                    for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, x(r) || (a = !0), l && (a ? (t.call(e,
                    r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            _ = /^-ms-/,
            U = /-([a-z])/g;

        function V(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(_, "ms-").replace(U, V)
        }
        var Q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Y() {
            this.expando = E.expando + Y.uid++
        }
        Y.uid = 1, Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t :
                    Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else
                    for (r in t) i[X(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this
                    .expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ?
                    this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t
                            .match(I) || []).length;
                        while (n--) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this
                        .expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var G = new Y,
            K = new Y,
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;

        function ee(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(
                    n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null :
                            i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                    } catch (e) {}
                    K.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function(e) {
                return K.hasData(e) || G.hasData(e)
            },
            data: function(e, t, n) {
                return K.access(e, t, n)
            },
            removeData: function(e, t) {
                K.remove(e, t)
            },
            _data: function(e, t, n) {
                return G.access(e, t, n)
            },
            _removeData: function(e, t) {
                G.remove(e, t)
            }
        }), E.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = K.get(o), 1 === o.nodeType && !G.get(o,
                        "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") &&
                        (r = X(r.slice(5)), ee(o, r, i[r]));
                        G.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function() {
                    K.set(this, n)
                }) : z(this, function(e) {
                    var t;
                    if (o && void 0 === e) return void 0 !== (t = K.get(o, n)) ?
                        t : void 0 !== (t = ee(o, n)) ? t : void 0;
                    this.each(function() {
                        K.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    K.remove(this, e)
                })
            }
        }), E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = G.get(e, t), n && (!
                    r || Array.isArray(n) ? r = G.access(e, t, E.makeArray(n)) :
                    r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n
                    .unshift("inprogress"), delete o.stop, i.call(e, function() {
                    E.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return G.get(e, n) || G.access(e, n, {
                    empty: E.Callbacks("once memory").add(function() {
                        G.remove(e, [t + "queue", n])
                    })
                })
            }
        }), E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments
                    .length < e ? E.queue(this[0], t) : void 0 === n ? this : this
                    .each(function() {
                        var e = E.queue(this, t, n);
                        E._queueHooks(this, t), "fx" === t && "inprogress" !== e[
                            0] && E.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = E.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                while (a--)(n = G.get(o[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
            re = ["Top", "Right", "Bottom", "Left"],
            ie = v.documentElement,
            oe = function(e) {
                return E.contains(e.ownerDocument, e)
            },
            ae = {
                composed: !0
            };
        ie.getRootNode && (oe = function(e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e
                .ownerDocument
        });
        var se = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style
                    .display && oe(e) && "none" === E.css(e, "display")
            },
            ue = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };
        var le = {};

        function ce(e, t) {
            for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r =
                e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = G
                .get(r, "display") || null, l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a =
                (i = r).ownerDocument, s = i.nodeName, (u = le[s]) || (o = a
                .body.appendChild(a.createElement(s)), u = E.css(o,
                "display"), o.parentNode.removeChild(o), "none" === u && (u =
                "block"), le[s] = u)))) : "none" !== n && (l[c] = "none", G
                .set(r, "display", n)));
            for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
            return e
        }
        E.fn.extend({
            show: function() {
                return ce(this, !0)
            },
            hide: function() {
                return ce(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() :
                    this.each(function() {
                        se(this) ? E(this).show() : E(this).hide()
                    })
            }
        });
        var fe = /^(?:checkbox|radio)$/i,
            de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            pe = /^$|^module$|\/(?:java|ecma)script/i,
            he = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ge(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e
                .getElementsByTagName(t || "*") : "undefined" != typeof e
                .querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t ||
            t && S(e, t) ? E.merge([e], n) : n
        }

        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++) G.set(e[n], "globalEval", !t ||
                G.get(t[n], "globalEval"))
        }
        he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he
            .thead, he.th = he.td;
        var ye, me, be = /<|&#?\w+;/;

        function xe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0,
                     h = e.length; p < h; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["",
                            ""
                        ])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + E
                            .htmlPrefilter(o) + u[2], c = u[0];
                        while (c--) a = a.lastChild;
                        E.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                    } else d.push(t.createTextNode(o));
            f.textContent = "", p = 0;
            while (o = d[p++])
                if (r && -1 < E.inArray(o, r)) i && i.push(o);
                else if (l = oe(o), a = ge(f.appendChild(o), "script"), l && ve(a), n) {
                    c = 0;
                    while (o = a[c++]) pe.test(o.type || "") && n.push(o)
                }
            return f
        }
        ye = v.createDocumentFragment().appendChild(v.createElement("div")), (me = v
            .createElement("input")).setAttribute("type", "radio"), me.setAttribute(
            "checked", "checked"), me.setAttribute("name", "t"), ye.appendChild(me),
            b.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye
            .innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!ye.cloneNode(!
            0).lastChild.defaultValue;
        var we = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Te = /^([^.]*)(?:\.(.+)|)/;

        function Ee() {
            return !0
        }

        function Ne() {
            return !1
        }

        function Ae(e, t) {
            return e === function() {
                try {
                    return v.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function ke(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s,
                    n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && (
                "string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n =
                    void 0)), !1 === i) i = Ne;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return E().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
                E.event.add(this, t, i, r, n)
            })
        }

        function Se(e, i, o) {
            o ? (G.set(e, i, !1), E.event.add(e, i, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = G.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)(E.event.special[i] || {}).delegateType && e
                            .stopPropagation();
                        else if (r = s.call(arguments), G.set(this, i, r), t = o(
                            this, i), this[i](), r !== (n = G.get(this, i)) || t ? G
                            .set(this, i, !1) : n = {}, r !== n) return e
                            .stopImmediatePropagation(), e.preventDefault(), n.value
                    } else r.length && (G.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event
                            .prototype), r.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === G.get(e, i) && E.event.add(e, i, Ee)
        }
        E.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, g, v = G.get(t);
                if (v) {
                    n.handler && (n = (o = n).handler, i = o.selector), i && E.find
                        .matchesSelector(ie, i), n.guid || (n.guid = E.guid++), (u = v
                        .events) || (u = v.events = {}), (a = v.handle) || (a = v
                        .handle = function(e) {
                        return "undefined" != typeof E && E.event.triggered !== e
                            .type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(I) || [""]).length;
                    while (l--) p = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "")
                        .split(".").sort(), p && (f = E.event.special[p] || {}, p = (i ?
                        f.delegateType : f.bindType) || p, f = E.event.special[p] ||
                        {}, c = E.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f
                        .setup && !1 !== f.setup.call(t, r, h, a) || t
                        .addEventListener && t.addEventListener(p, a)), f.add && (f
                            .add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)
                    ), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), E
                        .event.global[p] = !0)
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, g, v = G.hasData(e) && G.get(e);
                if (v && (u = v.events)) {
                    l = (t = (t || "").match(I) || [""]).length;
                    while (l--)
                        if (p = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "")
                            .split(".").sort(), p) {
                            f = E.event.special[p] || {}, d = u[p = (r ? f.delegateType :
                                f.bindType) || p] || [], s = s[2] && new RegExp(
                                "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o =
                                d.length;
                            while (o--) c = d[o], !i && g !== c.origType || n && n
                                .guid !== c.guid || s && !s.test(c.namespace) || r && r !==
                            c.selector && ("**" !== r || !c.selector) || (d.splice(o,
                                1), c.selector && d.delegateCount--, f.remove && f.remove
                                .call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h,
                                v.handle) || E.removeEvent(e, p, v.handle), delete u[p])
                        } else
                            for (p in u) E.event.remove(e, p + t[l], n, r, !0);
                    E.isEmptyObject(u) && G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = E.event.fix(e),
                    u = new Array(arguments.length),
                    l = (G.get(this, "events") || {})[s.type] || [],
                    c = E.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[
                    t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch
                    .call(this, s)) {
                    a = E.event.handlers.call(this, s, l), t = 0;
                    while ((i = a[t++]) && !s.isPropagationStopped()) {
                        s.currentTarget = i.elem, n = 0;
                        while ((o = i.handlers[n++]) && !s
                            .isImmediatePropagationStopped()) s.rnamespace && !1 !== o
                            .namespace && !s.rnamespace.test(o.namespace) || (s
                            .handleObj = o, s.data = o.data, void 0 !== (r = ((E.event
                            .special[o.origType] || {}).handle || o.handler).apply(i
                            .elem, u)) && !1 === (s.result = r) && (s
                            .preventDefault(), s.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l
                            .disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r =
                                t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(
                                i, this).index(l) : E.find(i, this, null, [l]).length), a[
                                i] && o.push(r);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(t, e) {
                Object.defineProperty(E.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: x(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && S(t, "input") && Se(t,
                            "click", Ee), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return fe.test(t.type) && t.click && S(t, "input") && Se(t,
                            "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return fe.test(t.type) && t.click && S(t, "input") && G.get(t,
                            "click") || S(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent
                            .returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function(e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this
                .isDefaultPrevented = e.defaultPrevented || void 0 === e
                .defaultPrevented && !1 === e.returnValue ? Ee : Ne, this.target = e
                .target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget, this.relatedTarget = e
                .relatedTarget) : this.type = e, t && E.extend(this, t), this
                .timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e
                    .preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e
                    .stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e
                    .stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e
                    .charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e
                    .type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            E.event.special[e] = {
                setup: function() {
                    return Se(this, e, Ae), !1
                },
                trigger: function() {
                    return Se(this, e), !0
                },
                delegateType: t
            }
        }), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            E.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        r = e.handleObj;
                    return n && (n === this || E.contains(this, n)) || (e.type = r
                        .origType, t = r.handler.apply(this, arguments), e.type =
                        i), t
                }
            }
        }), E.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                    E(e.delegateTarget).off(r.namespace ? r.origType + "." + r
                        .namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0),
                !1 === n && (n = Ne), this.each(function() {
                    E.event.remove(this, e, n, t)
                })
            }
        });
        var De =
                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Le = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) {
            return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                E(e).children("tbody")[0] || e
        }

        function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) :
                e.removeAttribute("type"), e
        }

        function Ie(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
                if (G.hasData(e) && (o = G.access(e), a = G.set(t, o), l = o.events))
                    for (i in delete a.handle, a.events = {}, l)
                        for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
                K.hasData(e) && (s = K.access(e), u = E.extend({}, s), K.set(t, u))
            }
        }

        function Re(n, r, i, o) {
            r = y.apply([], r);
            var e, t, a, s, u, l, c = 0,
                f = n.length,
                d = f - 1,
                p = r[0],
                h = x(p);
            if (h || 1 < f && "string" == typeof p && !b.checkClone && je.test(p))
                return n.each(function(e) {
                    var t = n.eq(e);
                    h && (r[0] = p.call(this, e, t.html())), Re(t, r, i, o)
                });
            if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 ===
            e.childNodes.length && (e = t), t || o)) {
                for (s = (a = E.map(ge(e, "script"), Pe)).length; c < f; c++) u = e,
                c !== d && (u = E.clone(u, !0, !0), s && E.merge(a, ge(u, "script"))),
                    i.call(n[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, E.map(a, He), c = 0; c <
                    s; c++) u = a[c], pe.test(u.type || "") && !G.access(u,
                        "globalEval") && E.contains(l, u) && (u.src && "module" !== (u
                        .type || "").toLowerCase() ? E._evalUrl && !u.noModule && E
                        ._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }) : C(u.textContent.replace(qe, ""), u, l))
            }
            return n
        }

        function Be(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && oe(
                    r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function(e) {
                return e.replace(De, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                    f = oe(e);
                if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType ||
                    E.isXMLDoc(e)))
                    for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) s =
                        o[r], u = a[r], void 0, "input" === (l = u.nodeName
                        .toLowerCase()) && fe.test(s.type) ? u.checked = s.checked :
                        "input" !== l && "textarea" !== l || (u.defaultValue = s
                            .defaultValue);
                if (t)
                    if (n)
                        for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r <
                        i; r++) Ie(o[r], a[r]);
                    else Ie(e, c);
                return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e,
                    "script")), c
            },
            cleanData: function(e) {
                for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[
                    o]); o++)
                    if (Q(n)) {
                        if (t = n[G.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? E.event.remove(n, r) : E
                                    .removeEvent(n, r, t.handle);
                            n[G.expando] = void 0
                        }
                        n[K.expando] && (n[K.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(e) {
                return Be(this, e, !0)
            },
            remove: function(e) {
                return Be(this, e)
            },
            text: function(e) {
                return z(this, function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each(
                        function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !==
                            this.nodeType || (this.textContent = e)
                        })
                }, null, e, arguments.length)
            },
            append: function() {
                return Re(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this
                        .nodeType || Oe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Re(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 ===
                        this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this
                        .nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType &&
                (E.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(
                    function() {
                        return E.clone(this, e, t)
                    })
            },
            html: function(e) {
                return z(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !he[(de.exec(
                        e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType &&
                            (E.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Re(this, arguments, function(e) {
                    var t = this.parentNode;
                    E.inArray(this, n) < 0 && (E.cleanData(ge(this)), t && t
                        .replaceChild(e, this))
                }, n)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            E.fn[e] = function(e) {
                for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <=
                i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u
                    .apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
            We = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = g), t.getComputedStyle(e)
            },
            $e = new RegExp(re.join("|"), "i");

        function Fe(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            oe(e) || (a = E.style(e, t)), !b.pixelBoxStyles() && Me.test(a) && $e
                .test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth =
                s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i,
                s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function ze(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    s.style.cssText =
                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        u.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        ie.appendChild(s).appendChild(u);
                    var e = g.getComputedStyle(u);
                    n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%",
                        o = 36 === t(e.right), r = 36 === t(e.width), u.style.position =
                        "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u =
                        null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n, r, i, o, a, s = v.createElement("div"),
                u = v.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style
                .backgroundClip = "", b.clearCloneStyle = "content-box" === u.style
                .backgroundClip, E.extend(b, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), o
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), a
                },
                scrollboxSize: function() {
                    return e(), i
                }
            }))
        }();
        var _e = ["Webkit", "Moz", "ms"],
            Ue = v.createElement("div").style,
            Ve = {};

        function Xe(e) {
            var t = E.cssProps[e] || Ve[e];
            return t || (e in Ue ? e : Ve[e] = function(e) {
                var t = e[0].toUpperCase() + e.slice(1),
                    n = _e.length;
                while (n--)
                    if ((e = _e[n] + t) in Ue) return e
            }(e) || e)
        }
        var Qe, Ye, Ge = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Je = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ze = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function et(e, t, n) {
            var r = ne.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function tt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + re[a], !0, i)),
                r ? ("content" === n && (u -= E.css(e, "padding" + re[a], !0, i)),
                    "margin" !== n && (u -= E.css(e, "border" + re[a] + "Width", !0, i))
                ) : (u += E.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += E
                    .css(e, "border" + re[a] + "Width", !0, i) : s += E.css(e, "border" +
                    re[a] + "Width", !0, i));
            return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0]
                .toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
        }

        function nt(e, t, n) {
            var r = We(e),
                i = (!b.boxSizingReliable() || n) && "border-box" === E.css(e,
                    "boxSizing", !1, r),
                o = i,
                a = Fe(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Me.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!b.boxSizingReliable() && i || "auto" === a || !parseFloat(a) &&
                "inline" === E.css(e, "display", !1, r)) && e.getClientRects()
                .length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in
                e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ?
                "border" : "content"), o, r, a) + "px"
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Fe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = X(t),
                        u = Ke.test(t),
                        l = e.style;
                    if (u || (t = Xe(s)), a = E.cssHooks[t] || E.cssHooks[s],
                    void 0 === n) return a && "get" in a && void 0 !== (i = a.get(
                        e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n =
                        function(e, t, n, r) {
                            var i, o, a = 20,
                                s = r ? function() {
                                    return r.cur()
                                } : function() {
                                    return E.css(e, t, "")
                                },
                                u = s(),
                                l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                                c = e.nodeType && (E.cssNumber[t] || "px" !== l && +
                                    u) && ne.exec(E.css(e, t));
                            if (c && c[3] !== l) {
                                u /= 2, l = l || c[3], c = +u || 1;
                                while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o =
                                    s() / u || .5)) <= 0 && (a = 0), c /= o;
                                c *= 2, E.style(e, t, c + l), n = n || []
                            }
                            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] +
                                1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r
                                .end = i)), i
                        }(e, t, i), o = "number"), null != n && n == n && (
                        "number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ?
                            "" : "px")), b.clearCloneStyle || "" !== n || 0 !== t
                            .indexOf("background") || (l[t] = "inherit"), a && "set" in
                        a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(
                            t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = X(t);
                return Ke.test(t) || (t = Xe(s)), (a = E.cssHooks[t] || E
                    .cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ze &&
                (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n ||
                isFinite(o) ? o || 0 : i) : i
            }
        }), E.each(["height", "width"], function(e, u) {
            E.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t) return !Ge.test(E.css(e, "display")) || e
                        .getClientRects().length && e.getBoundingClientRect()
                        .width ? nt(e, u, n) : ue(e, Je, function() {
                        return nt(e, u, n)
                    })
                },
                set: function(e, t, n) {
                    var r, i = We(e),
                        o = !b.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === E.css(e, "boxSizing", !1,
                            i),
                        s = n ? tt(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0]
                        .toUpperCase() + u.slice(1)] - parseFloat(i[u]) - tt(
                        e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) &&
                    "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e,
                        u)), et(0, t, s)
                }
            }
        }), E.cssHooks.marginLeft = ze(b.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Fe(e, "marginLeft")) || e
                .getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            E.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(
                        " ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t -
                    2] || r[0];
                    return n
                }
            }, "margin" !== i && (E.cssHooks[i + o].set = et)
        }), E.fn.extend({
            css: function(e, t) {
                return z(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = We(e), i = t.length; a < i; a++) o[t[a]] = E.css(
                            e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), E.fn.delay = function(r, e) {
            return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e,
                function(e, t) {
                    var n = g.setTimeout(e, r);
                    t.stop = function() {
                        g.clearTimeout(n)
                    }
                })
        }, Qe = v.createElement("input"), Ye = v.createElement("select")
            .appendChild(v.createElement("option")), Qe.type = "checkbox", b.checkOn =
            "" !== Qe.value, b.optSelected = Ye.selected, (Qe = v.createElement(
            "input")).value = "t", Qe.type = "radio", b.radioValue = "t" === Qe
            .value;
        var rt, it = E.expr.attrHandle;
        E.fn.extend({
            attr: function(e, t) {
                return z(this, E.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    E.removeAttr(this, e)
                })
            }
        }), E.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e
                    .getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) ||
                (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool
                    .test(t) ? rt : void 0)), void 0 !== n ? null === n ?
                        void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r =
                            i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) :
                    i && "get" in i && null !== (r = i.get(e, t)) ? r : null ==
                    (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!b.radioValue && "radio" === t && S(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(I);
                if (i && 1 === e.nodeType)
                    while (n = i[r++]) e.removeAttribute(n)
            }
        }), rt = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = it[t] || E.find.attr;
            it[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = it[o], it[o] = r, r = null != a(e, t, n) ? o :
                    null, it[o] = i), r
            }
        });
        var ot = /^(?:input|select|textarea|button)$/i,
            at = /^(?:a|area)$/i;

        function st(e) {
            return (e.match(I) || []).join(" ")
        }

        function ut(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function lt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
        }
        E.fn.extend({
            prop: function(e, t) {
                return z(this, E.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e]
                })
            }
        }), E.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(
                    e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !==
                n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r :
                    e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r :
                    e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e
                            .nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), b.optSelected || (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing",
            "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder",
            "contentEditable"
        ], function() {
            E.propFix[this.toLowerCase()] = this
        }), E.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (x(t)) return this.each(function(e) {
                    E(this).addClass(t.call(this, e, ut(this)))
                });
                if ((e = lt(t)).length)
                    while (n = this[u++])
                        if (i = ut(n), r = 1 === n.nodeType && " " + st(i) + " ") {
                            a = 0;
                            while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o +
                                " ");
                            i !== (s = st(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (x(t)) return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, ut(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = lt(t)).length)
                    while (n = this[u++])
                        if (i = ut(n), r = 1 === n.nodeType && " " + st(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " +
                                    o + " ", " ");
                            i !== (s = st(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(i, t) {
                var o = typeof i,
                    a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a ? t ? this.addClass(i) : this
                    .removeClass(i) : x(i) ? this.each(function(e) {
                    E(this).toggleClass(i.call(this, e, ut(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if (a) {
                        t = 0, n = E(this), r = lt(i);
                        while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n
                            .addClass(e)
                    } else void 0 !== i && "boolean" !== o || ((e = ut(this)) &&
                    G.set(this, "__className__", e), this.setAttribute &&
                    this.setAttribute("class", e || !1 === i ? "" : G.get(
                        this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + st(ut(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
        var ct = /\r/g;
        E.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = x(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e,
                            E(this).val()) : n) ? t = "" : "number" ==
                        typeof t ? t += "" : Array.isArray(t) && (t = E.map(t,
                            function(e) {
                                return null == e ? "" : e + ""
                            })), (r = E.valHooks[this.type] || E.valHooks[this
                            .nodeName.toLowerCase()]) && "set" in r &&
                        void 0 !== r.set(this, t, "value") || (this.value = t)
                    )
                })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName
                    .toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t,
                    "value")) ? e : "string" == typeof(e = t.value) ? e.replace(
                    ct, "") : null == e ? "" : e : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : st(E.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n
                                .parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            o = E.makeArray(t),
                            a = i.length;
                        while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks
                            .option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), E.each(["radio", "checkbox"], function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e)
                        .val(), t)
                }
            }, b.checkOn || (E.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), b.focusin = "onfocusin" in g;
        var ft = /^(?:focusinfocus|focusoutblur)$/,
            dt = function(e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(e, t, n, r) {
                var i, o, a, s, u, l, c, f, d = [n || v],
                    p = m.call(e, "type") ? e.type : e,
                    h = m.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = f = a = n = n || v, 3 !== n.nodeType && 8 !== n
                    .nodeType && !ft.test(p + E.event.triggered) && (-1 < p.indexOf(
                    ".") && (p = (h = p.split(".")).shift(), h.sort()), u = p
                    .indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E
                    .Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3,
                    e.namespace = h.join("."), e.rnamespace = e.namespace ?
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                    null, e.result = void 0, e.target || (e.target = n), t =
                    null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[
                    p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !w(n)) {
                        for (s = c.delegateType || p, ft.test(s + p) || (o = o
                            .parentNode); o; o = o.parentNode) d.push(o), a = o;
                        a === (n.ownerDocument || v) && d.push(a.defaultView || a
                            .parentWindow || g)
                    }
                    i = 0;
                    while ((o = d[i++]) && !e.isPropagationStopped()) f = o, e
                        .type = 1 < i ? s : c.bindType || p, (l = (G.get(o,
                        "events") || {})[e.type] && G.get(o, "handle")) && l.apply(
                        o, t), (l = u && o[u]) && l.apply && Q(o) && (e.result = l
                        .apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || c._default &&
                    !1 !== c._default.apply(d.pop(), t) || !Q(n) || u && x(n[
                        p]) && !w(n) && ((a = n[u]) && (n[u] = null), E.event
                        .triggered = p, e.isPropagationStopped() && f
                        .addEventListener(p, dt), n[p](), e
                        .isPropagationStopped() && f.removeEventListener(p, dt), E
                        .event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), b.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                E.event.simulate(r, e.target, E.event.fix(e))
            };
            E.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = G.access(e, r);
                    t || e.addEventListener(n, i, !0), G.access(e, r, (t || 0) +
                        1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = G.access(e, r) - 1;
                    t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0), G
                        .remove(e, r))
                }
            }
        });
        var pt, ht = /\[\]$/,
            gt = /\r?\n/g,
            vt = /^(?:submit|button|image|reset|file)$/i,
            yt = /^(?:input|select|textarea|keygen)/i;

        function mt(n, e, r, i) {
            var t;
            if (Array.isArray(e)) E.each(e, function(e, t) {
                r || ht.test(n) ? i(n, t) : mt(n + "[" + ("object" == typeof t &&
                null != t ? e : "") + "]", t, r, i)
            });
            else if (r || "object" !== T(e)) i(n, e);
            else
                for (t in e) mt(n + "[" + t + "]", e[t], r, i)
        }
        E.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = x(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(
                        null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e,
                function() {
                    i(this.name, this.value)
                });
            else
                for (n in e) mt(n, e[n], t, i);
            return r.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && yt.test(this
                        .nodeName) && !vt.test(e) && (this.checked || !fe.test(
                        e))
                }).map(function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(gt, "\r\n")
                            }
                        }) : {
                        name: t.name,
                        value: n.replace(gt, "\r\n")
                    }
                }).get()
            }
        }), E.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (x(e) && (e = e.call(this[0])), t = E(e, this[0]
                    .ownerDocument).eq(0).clone(!0), this[0].parentNode && t
                    .insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return x(n) ? this.each(function(e) {
                    E(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = E(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = x(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    E(this).replaceWith(this.childNodes)
                }), this
            }
        }), E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, b.createHTMLDocument = ((pt = v.implementation.createHTMLDocument("")
            .body).innerHTML = "<form></form><form></form>", 2 === pt.childNodes
            .length), E.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1), t || (b.createHTMLDocument ? ((r = (t = v.implementation
                .createHTMLDocument("")).createElement("base")).href = v
                .location.href, t.head.appendChild(r)) : t = v), o = !n && [], (
                i = D.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
            o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o
        }, E.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = E.css(e, "position"),
                    c = E(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(),
                    o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l ||
                    "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c
                    .position()).top, i = r.left) : (a = parseFloat(o) || 0, i =
                    parseFloat(u) || 0), x(t) && (t = t.call(e, n, E.extend({},
                    s))), null != t.top && (f.top = t.top - s.top + a), null != t
                    .left && (f.left = t.left - s.left + i), "using" in t ? t.using
                    .call(e, f) : c.css(f)
            }
        }, E.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(
                    function(e) {
                        E.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r
                    .getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r
                        .getBoundingClientRect();
                    else {
                        t = this.offset(), n = r.ownerDocument, e = r.offsetParent ||
                            n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) &&
                        "static" === E.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = E(e).offset())
                            .top += E.css(e, "borderTopWidth", !0), i.left += E.css(e,
                            "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - E.css(r, "marginTop", !0),
                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === E.css(e, "position")) e = e
                        .offsetParent;
                    return e || ie
                })
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            E.fn[t] = function(e) {
                return z(this, function(e, t, n) {
                    var r;
                    if (w(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === n) return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r
                        .pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), E.each(["top", "left"], function(e, n) {
            E.cssHooks[n] = ze(b.pixelPosition, function(e, t) {
                if (t) return t = Fe(e, n), Me.test(t) ? E(e).position()[n] +
                    "px" : t
            })
        }), E.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            E.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                E.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return z(this, function(e, t, n) {
                        var r;
                        return w(e) ? 0 === o.indexOf("outer") ? e["inner" +
                            a] : e.document.documentElement["client" + a] :
                            9 === e.nodeType ? (r = e.documentElement, Math.max(
                                e.body["scroll" + a], r["scroll" + a], e.body[
                                "offset" + a], r["offset" + a], r["client" +
                                a])) : void 0 === n ? E.css(e, t, i) : E.style(
                                e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }), E.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu"
                .split(" "),
            function(e, n) {
                E.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this
                        .trigger(n)
                }
            }), E.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t,
                    e || "**", n)
            }
        }), E.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = s
                .call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i
        }, E.holdReady = function(e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E
            .isFunction = x, E.isWindow = w, E.camelCase = X, E.type = T, E.now = Date
            .now, E.isNumeric = function(e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, "function" == typeof define && define.amd && define("jquery", [],
            function() {
                return E
            });
        var bt = g.jQuery,
            xt = g.$;
        return E.noConflict = function(e) {
            return g.$ === E && (g.$ = xt), e && g.jQuery === E && (g.jQuery = bt),
                E
        }, e || (g.jQuery = g.$ = E), E
    });

(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module
        .exports = t() : 'function' == typeof define && define.amd ? define(t) : e
        .Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }

    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }

    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent ||
            null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling)
            .offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE']
            .indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e
            .ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document
            .documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
                'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, 'top'),
            i = l(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i *
            r, e
    }

    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' +
        n + 'Width'], 10)
    }

    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' +
        e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n[
        'margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n[
        'margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }

    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }

    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'),
                    i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.width,
            a = s.height || e.clientHeight || p.height,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }

    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = 'HTML' === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop, 10),
                y = parseFloat(m.marginLeft, 10);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b
                .marginTop = w, b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (
            b = f(b, o)), b
    }

    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            };
        return g(d)
    }

    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) return !1;
        if ('fixed' === t(e, 'position')) return !0;
        var i = o(e);
        return !!i && y(i)
    }

    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o
            .parentElement;
        return o || document.documentElement
    }

    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            d = {
                top: 0,
                left: 0
            },
            l = s ? E(e) : a(e, i(t));
        if ('viewport' === p) d = w(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e
                .ownerDocument.documentElement)) : 'window' === p ? f = e
                .ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument),
                    g = h.height,
                    u = h.width;
                d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left -
                    m.marginLeft, d.right = u + m.left
            } else d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d
            .right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d
    }

    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] :
            0;
        if (-1 === e.indexOf('auto')) return e;
        var p = v(o, n, r, i),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return le({
                    key: e
                }, s[e], {
                    area: x(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] :
                null,
            r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }

    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = {
                width: e.offsetWidth + i,
                height: e.offsetHeight + n
            };
        return r
    }

    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e),
            i = {
                width: n.width,
                height: n.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] :
            t[T(s)], i
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn(
                '`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o
                .offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this
                .options.positionFixed), e.placement = O(this.options.placement, e
                .offsets.reference, this.popper, this.reference, this.options
                .modifiers.flip.boundariesElement, this.options.modifiers.flip
                .padding), e.originalPlacement = e.placement, e.positionFixed = this
                .options.positionFixed, e.offsets.popper = C(this.popper, e.offsets
                .reference, e.placement), e.offsets.popper.position = this.options
                .positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this
                .state.isCreated ? this.options.onUpdate(e) : (this.state
                .isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t
        })
    }

    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0)
            .toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (
            this.popper.removeAttribute('x-placement'), this.popper.style
                .position = '', this.popper.style.top = '', this.popper.style.left =
                '', this.popper.style.right = '', this.popper.style.bottom = '', this
                .popper.style.willChange = '', this.popper.style[B('transform')] = ''
        ), this.disableEventListeners(), this.options.removeOnDestroy && this
            .popper.parentNode.removeChild(this.popper), this
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n(p.parentNode), t, o, i), i.push(p)
    }

    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement =
            r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options,
            this.state, this.scheduleUpdate))
    }

    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents
            .forEach(function(e) {
                e.removeEventListener('scroll', t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null,
            t.eventsEnabled = !1, t
    }

    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = R(this.reference, this.state))
    }

    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom',
                'left'
            ].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function(e) {
                return e
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ['left', 'right'].indexOf(e.placement),
            l = -1 !== e.placement.indexOf('-'),
            f = t ? a || l || s % 2 == d % 2 ? r : Z : p,
            m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }

    function K(e, t, o) {
        var n = D(e, function(e) {
                var o = e.name;
                return o === t
            }),
            i = !!n && e.some(function(e) {
                return e.name === o && e.enabled && e.order < n.order
            });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r +
                ' modifier in order to work, be sure to include it before ' + r +
                '!')
        }
        return i
    }

    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = he.indexOf(e),
            n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }

    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window
                .innerHeight || 0) : ee(document.documentElement.clientWidth, window
                .innerWidth || 0), a / 100 * r
        }
        return r
    }

    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(D(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn(
            'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
        );
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s]
                .split(d)[1]
            ].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(
                    t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length -
                1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function J(e, t) {
        var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0],
            p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) :
            'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p
                .left += o[0], p.top += o[1]), e.popper = p, e
    }
    var Q = Math.min,
        Z = Math.floor,
        $ = Math.round,
        ee = Math.max,
        te = 'undefined' != typeof window && 'undefined' != typeof document &&
            'undefined' != typeof navigator,
        oe = function() {
            for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t +=
                1)
                if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }(),
        ne = te && window.Promise,
        ie = ne ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, oe))
            }
        },
        re = te && !!(window.MSInputMethodContext && document.documentMode),
        pe = te && /MSIE 10/.test(navigator.userAgent),
        se = function(e, t) {
            if (!(e instanceof t)) throw new TypeError(
                'Cannot call a class as a function')
        },
        de = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o
                    .enumerable || !1, o.configurable = !0, 'value' in o && (o
                    .writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        ae = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        le = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty
                    .call(t, n) && (e[n] = t[n]);
            return e
        },
        fe = te && /Firefox/i.test(navigator.userAgent),
        me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end',
            'right-start', 'right', 'right-end', 'bottom-end', 'bottom',
            'bottom-start', 'left-end', 'left', 'left-start'
        ],
        he = me.slice(3),
        ce = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        ge = function() {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] :
                        {};
                se(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = ie(this.update.bind(this)), this.options = le({}, t
                    .Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n
                    .jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({},
                    t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r
                        .modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(
                    function(e) {
                        return le({
                            name: e
                        }, i.options.modifiers[e])
                    }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i
                        .options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return de(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return H.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return I.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return U.call(this)
                }
            }]), t
        }();
    return ge.Utils = ('undefined' == typeof window ? global : window)
        .PopperUtils, ge.placements = me, ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: ae({}, d, r[d]),
                                end: ae({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform'),
                        i = e.instance.popper.style,
                        r = i.top,
                        s = i.left,
                        d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o,
                        e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority,
                        f = e.offsets.popper,
                        m = {
                            primary: function(e) {
                                var o = f[e];
                                return f[e] < a[e] && !t.escapeWithReference && (o = ee(
                                    f[e], a[e])), ae({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = f[o];
                                return f[e] > a[e] && !t.escapeWithReference && (n = Q(
                                    f[o], a[e] - ('right' === e ? f.width : f.height)
                                )), ae({}, o, n)
                            }
                        };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' :
                            'primary';
                        f = le({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn(
                        'WARNING: `arrow.element` must be child of its popper element!'
                    ), e;
                    var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e
                        .offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2,
                        w = t(e.instance.popper),
                        y = parseFloat(w['margin' + f], 10),
                        E = parseFloat(w['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets
                        .arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t
                            .boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = T(n),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case ce.FLIP:
                            p = [n, i];
                            break;
                        case ce.CLOCKWISE:
                            p = G(n);
                            break;
                        case ce.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) ||
                                'right' === n && f(a.left) < f(l.right) || 'top' ===
                                n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a
                                    .top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' ===
                                n && g || 'bottom' === n && u,
                            w = -1 !== ['top', 'bottom'].indexOf(n),
                            y = !!t.flipVariations && (w && 'start' === r && h ||
                                w && 'end' === r && c || !w && 'start' === r && g || !
                                    w && 'end' === r && u),
                            E = !!t.flipVariationsByContent && (w && 'start' ===
                                r && c || w && 'end' === r && h || !w && 'start' ===
                                r && u || !w && 'end' === r && g),
                            v = y || E;
                        (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d +
                        1]), v && (r = z(r)), e.placement = n + (r ? '-' + r :
                            ''), e.offsets.popper = le({}, e.offsets.popper, C(e
                            .instance.popper, e.offsets.reference, e.placement)),
                            e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' :
                        'height'] : 0), e.placement = T(t), e.offsets.popper = g(i),
                        e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference,
                        o = D(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom ||
                        t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        r = D(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn(
                        'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
                    );
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                        l = p(e.instance.popper),
                        f = u(l),
                        m = {
                            position: i.position
                        },
                        h = q(e, 2 > window.devicePixelRatio || !fe),
                        c = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === n ? 'left' : 'right',
                        b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l
                        .clientHeight + h.bottom : -f.height + h.bottom : h.top, s =
                        'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h
                            .right : -f.width + h.right : h.left, a && b) m[b] =
                        'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] =
                        0, m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1,
                            y = 'right' == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes), e.styles = le({},
                        m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e
                        .arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles), j(e.instance.popper, e
                        .attributes), e.arrowElement && Object.keys(e.arrowStyles)
                        .length && V(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip
                            .boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, ge
});

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports,
        require("jquery"), require("popper.js")) : "function" == typeof define &&
    define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t ||
        self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i &&
            (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(r), !0).forEach(function(t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o,
                Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(
                function(t) {
                    Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
                })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u
        .hasOwnProperty("default") ? u.default : u;
    var n = "transitionend";

    function o(t) {
        var e = this,
            n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (
                parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(n)
        },
        supportsTransitionEnd: function() {
            return Boolean(n)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString
                            .call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() +
                        ': Option "' + i + '" provided type "' + s +
                        '" but expected type "' + o + '".')
                } var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _
                    .findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof g) throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 ||
                4 <= t[0]) throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            )
        }
    };
    _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_
        .TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this,
                arguments)
        }
    };
    var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = g.fn[r],
        f = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        },
        d = "alert",
        m = "fade",
        p = "show",
        v = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e)
                    .isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                g.removeData(this._element, a), this._element = null
            }, t._getRootElement = function(t) {
                var e = _.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n = n || g(t).closest(
                    "." + d)[0]
            }, t._triggerCloseEvent = function(t) {
                var e = g.Event(f.CLOSE);
                return g(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (g(e).removeClass(p), g(e).hasClass(m)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                g(t).detach().trigger(f.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(a);
                    e || (e = new i(this), t.data(a, e)), "close" === n && e[n](
                        this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(
        new v)), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r]
        .noConflict = function() {
        return g.fn[r] = h, v._jQueryInterface
    };
    var y = "button",
        E = "bs.button",
        C = "." + E,
        T = ".data-api",
        b = g.fn[y],
        S = "active",
        D = "btn",
        I = "focus",
        w = '[data-toggle^="button"]',
        A = '[data-toggle="buttons"]',
        N = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        k = 'input:not([type="hidden"])',
        P = ".active",
        L = ".btn",
        j = {
            CLICK_DATA_API: "click" + C + T,
            FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
            LOAD_DATA_API: "load" + C + T
        },
        H = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = g(this._element).closest(A)[0];
                if (n) {
                    var i = this._element.querySelector(k);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(S)) t = !1;
                            else {
                                var o = n.querySelector(P);
                                o && g(o).removeClass(S)
                            }
                        else "checkbox" === i.type ? "LABEL" === this._element
                            .tagName && i.checked === this._element.classList.contains(
                            S) && (t = !1) : t = !1;
                        t && (i.checked = !this._element.classList.contains(S), g(i)
                            .trigger("change")), i.focus(), e = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList
                    .contains("disabled") || (e && this._element.setAttribute(
                    "aria-pressed", !this._element.classList.contains(S)), t && g(
                    this._element).toggleClass(S))
            }, t.dispose = function() {
                g.removeData(this._element, E), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(E);
                    t || (t = new n(this), g(this).data(E, t)), "toggle" === e &&
                    t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), n
        }();
    g(document).on(j.CLICK_DATA_API, w, function(t) {
        var e = t.target;
        if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e
            .hasAttribute("disabled") || e.classList.contains("disabled")) t
            .preventDefault();
        else {
            var n = e.querySelector(k);
            if (n && (n.hasAttribute("disabled") || n.classList.contains(
                "disabled"))) return void t.preventDefault();
            H._jQueryInterface.call(g(e), "toggle")
        }
    }).on(j.FOCUS_BLUR_DATA_API, w, function(t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g(window).on(j.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t
            .length; e < n; e++) {
            var i = t[e],
                o = i.querySelector(k);
            o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i
                .classList.remove(S)
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N)))
            .length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a
                .classList.remove(S)
        }
    }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y]
        .noConflict = function() {
        return g.fn[y] = b, H._jQueryInterface
    };
    var R = "carousel",
        x = "bs.carousel",
        F = "." + x,
        U = ".data-api",
        W = g.fn[R],
        q = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        M = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        K = "next",
        Q = "prev",
        B = "left",
        V = "right",
        Y = {
            SLIDE: "slide" + F,
            SLID: "slid" + F,
            KEYDOWN: "keydown" + F,
            MOUSEENTER: "mouseenter" + F,
            MOUSELEAVE: "mouseleave" + F,
            TOUCHSTART: "touchstart" + F,
            TOUCHMOVE: "touchmove" + F,
            TOUCHEND: "touchend" + F,
            POINTERDOWN: "pointerdown" + F,
            POINTERUP: "pointerup" + F,
            DRAG_START: "dragstart" + F,
            LOAD_DATA_API: "load" + F + U,
            CLICK_DATA_API: "click" + F + U
        },
        z = "carousel",
        X = "active",
        $ = "slide",
        G = "carousel-item-right",
        J = "carousel-item-left",
        Z = "carousel-item-next",
        tt = "carousel-item-prev",
        et = "pointer-event",
        nt = ".active",
        it = ".active.carousel-item",
        ot = ".carousel-item",
        rt = ".carousel-item img",
        st = ".carousel-item-next, .carousel-item-prev",
        at = ".carousel-indicators",
        lt = "[data-slide], [data-slide-to]",
        ct = '[data-ride="carousel"]',
        ht = {
            TOUCH: "touch",
            PEN: "pen"
        },
        ut = function() {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null,
                    this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null,
                    this.touchStartX = 0, this.touchDeltaX = 0, this._config = this
                    ._getConfig(e), this._element = t, this._indicatorsElement = this
                    ._element.querySelector(at), this._touchSupported =
                    "ontouchstart" in document.documentElement || 0 < navigator
                        .maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent ||
                    window.MSPointerEvent), this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                this._isSliding || this._slide(K)
            }, t.nextWhenVisible = function() {
                !document.hidden && g(this._element).is(":visible") && "hidden" !==
                g(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(Q)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(st) && (_
                    .triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this
                    ._interval), this._interval = null), this._config.interval && !
                    this._isPaused && (this._interval = setInterval((document
                    .visibilityState ? this.nextWhenVisible : this.next).bind(
                    this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(it);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) g(this._element).one(Y.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? K : Q;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                g(this._element).off(F), g.removeData(this._element, x), this
                    ._items = null, this._config = null, this._element = null, this
                    ._interval = null, this._isPaused = null, this._isSliding = null,
                    this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t
            }, t._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && g(this._element).on(Y.KEYDOWN, function(
                    t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && g(this._element).on(Y
                        .MOUSEENTER,
                    function(t) {
                        return e.pause(t)
                    }).on(Y.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && ht[t.originalEvent.pointerType
                                .toUpperCase()] ? e.touchStartX = t.originalEvent.clientX :
                                e._pointerEvent || (e.touchStartX = t.originalEvent.touches[
                                    0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && ht[t.originalEvent.pointerType
                                .toUpperCase()] && (e.touchDeltaX = t.originalEvent
                                .clientX - e.touchStartX), e._handleSwipe(), "hover" === e
                                ._config.pause && (e.pause(), e.touchTimeout &&
                            clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(
                                function(t) {
                                    return e.cycle(t)
                                }, 500 + e._config.interval))
                        };
                    g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function(
                        t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN,
                        function(t) {
                            return n(t)
                        }), g(this._element).on(Y.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add(et)) : (g(this._element).on(Y
                            .TOUCHSTART,
                        function(t) {
                            return n(t)
                        }), g(this._element).on(Y.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && 1 < t.originalEvent.touches
                                .length ? e.touchDeltaX = 0 : e.touchDeltaX = t
                                .originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), g(this._element).on(Y.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode
                    .querySelectorAll(ot)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === K,
                    i = t === Q,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === Q ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[
                    s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(it)),
                    o = g.Event(Y.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return g(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(
                        nt));
                    g(e).removeClass(X);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(X)
                }
            }, t._slide = function(t, e) {
                var n, i, o, r = this,
                    s = this._element.querySelector(it),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l)
                    .hasClass(X)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s &&
                    l) {
                    this._isSliding = !0, h && this.pause(), this
                        ._setActiveIndicatorElement(l);
                    var u = g.Event(Y.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (g(this._element).hasClass($)) {
                        g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(
                            n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config
                            .defaultInterval || this._config.interval, this._config
                            .interval = f) : this._config.interval = this._config
                            .defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function() {
                            g(l).removeClass(n + " " + i).addClass(X), g(s)
                                .removeClass(X + " " + i + " " + n), r._isSliding = !1,
                                setTimeout(function() {
                                    return g(r._element).trigger(u)
                                }, 0)
                        }).emulateTransitionEnd(d)
                    } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !
                        1, g(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this).data(x),
                        e = l({}, q, {}, g(this).data());
                    "object" == typeof i && (e = l({}, e, {}, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), g(this).data(x, t)), "number" ==
                    typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function(t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(z)) {
                        var i = l({}, g(n).data(), {}, g(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o &&
                        g(n).data(x).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return q
                }
            }]), r
        }();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(
        Y.LOAD_DATA_API,
        function() {
            for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n =
                t.length; e < n; e++) {
                var i = g(t[e]);
                ut._jQueryInterface.call(i, i.data())
            }
        }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R]
        .noConflict = function() {
        return g.fn[R] = W, ut._jQueryInterface
    };
    var ft = "collapse",
        dt = "bs.collapse",
        gt = "." + dt,
        _t = g.fn[ft],
        mt = {
            toggle: !0,
            parent: ""
        },
        pt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        vt = {
            SHOW: "show" + gt,
            SHOWN: "shown" + gt,
            HIDE: "hide" + gt,
            HIDDEN: "hidden" + gt,
            CLICK_DATA_API: "click" + gt + ".data-api"
        },
        yt = "show",
        Et = "collapse",
        Ct = "collapsing",
        Tt = "collapsed",
        bt = "width",
        St = "height",
        Dt = ".show, .collapsing",
        It = '[data-toggle="collapse"]',
        wt = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this
                    ._getConfig(t), this._triggerArray = [].slice.call(document
                    .querySelectorAll('[data-toggle="collapse"][href="#' + e.id +
                        '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o =
                    n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(
                            t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this
                        ._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this
                    ._config.parent || this._addAriaAndCollapsedClass(this._element,
                    this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                g(this._element).hasClass(yt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(yt) && (
                    this._parent && 0 === (t = [].slice.call(this._parent
                        .querySelectorAll(Dt)).filter(function(t) {
                        return "string" == typeof n._config.parent ? t
                            .getAttribute("data-parent") === n._config.parent : t
                            .classList.contains(Et)
                    })).length && (t = null), !(t && (e = g(t).not(this._selector)
                        .data(dt)) && e._isTransitioning))) {
                    var i = g.Event(vt.SHOW);
                    if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                        e || g(t).data(dt, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(Et).addClass(Ct), this._element
                            .style[o] = 0, this._triggerArray.length && g(this
                            ._triggerArray).removeClass(Tt).attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n
                                ._element.style[o] = "", n.setTransitioning(!1), g(n
                                ._element).trigger(vt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this
                            ._element[r] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(yt)) {
                    var e = g.Event(vt.HIDE);
                    if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[
                            n] + "px", _.reflow(this._element), g(this._element)
                            .addClass(Ct).removeClass(Et).removeClass(yt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = _.getSelectorFromElement(r);
                                if (null !== s) g([].slice.call(document.querySelectorAll(
                                    s))).hasClass(yt) || g(r).addClass(Tt).attr(
                                    "aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function() {
                            t.setTransitioning(!1), g(t._element).removeClass(Ct)
                                .addClass(Et).trigger(vt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                g.removeData(this._element, dt), this._config = null, this._parent =
                    null, this._element = null, this._triggerArray = null, this
                    ._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _
                    .typeCheckConfig(ft, t, pt), t
            }, t._getDimension = function() {
                return g(this._element).hasClass(bt) ? bt : St
            }, t._getParent = function() {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent,
                "undefined" != typeof this._config.parent.jquery && (t = this
                    ._config.parent[0])) : t = document.querySelector(this._config
                    .parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config
                        .parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                var n = g(t).hasClass(yt);
                e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(dt),
                        n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ?
                            i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                    e || (e = new a(this, n), t.data(dt, e)), "string" ==
                    typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError(
                            'No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return mt
                }
            }]), a
        }();
    g(document).on(vt.CLICK_DATA_API, It, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this),
                e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e)
        })
    }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft]
        .noConflict = function() {
        return g.fn[ft] = _t, wt._jQueryInterface
    };
    var At = "dropdown",
        Nt = "bs.dropdown",
        Ot = "." + Nt,
        kt = ".data-api",
        Pt = g.fn[At],
        Lt = new RegExp("38|40|27"),
        jt = {
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot,
            CLICK: "click" + Ot,
            CLICK_DATA_API: "click" + Ot + kt,
            KEYDOWN_DATA_API: "keydown" + Ot + kt,
            KEYUP_DATA_API: "keyup" + Ot + kt
        },
        Ht = "disabled",
        Rt = "show",
        xt = "dropup",
        Ft = "dropright",
        Ut = "dropleft",
        Wt = "dropdown-menu-right",
        qt = "position-static",
        Mt = '[data-toggle="dropdown"]',
        Kt = ".dropdown form",
        Qt = ".dropdown-menu",
        Bt = ".navbar-nav",
        Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Yt = "top-start",
        zt = "top-end",
        Xt = "bottom-start",
        $t = "bottom-end",
        Gt = "right-start",
        Jt = "left-start",
        Zt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        te = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        ee = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this
                    ._getConfig(e), this._menu = this._getMenuElement(), this
                    ._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
                    var t = g(this._menu).hasClass(Rt);
                    c._clearMenus(), t || this.show(!0)
                }
            }, t.show = function(t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || g(this
                    ._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
                    var e = {
                            relatedTarget: this._element
                        },
                        n = g.Event(jt.SHOW, e),
                        i = c._getParentFromElement(this._element);
                    if (g(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if ("undefined" == typeof u) throw new TypeError(
                                "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                            );
                            var o = this._element;
                            "parent" === this._config.reference ? o = i : _.isElement(this
                                ._config.reference) && (o = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (
                                o = this._config.reference[0])), "scrollParent" !== this
                                ._config.boundary && g(i).addClass(qt), this._popper =
                                new u(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === g(i)
                            .closest(Bt).length && g(document.body).children().on(
                            "mouseover", null, g.noop), this._element.focus(), this
                            ._element.setAttribute("aria-expanded", !0), g(this._menu)
                            .toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt
                            .SHOWN, e))
                    }
                }
            }, t.hide = function() {
                if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(
                    this._menu).hasClass(Rt)) {
                    var t = {
                            relatedTarget: this._element
                        },
                        e = g.Event(jt.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this
                        ._popper.destroy(), g(this._menu).toggleClass(Rt), g(n)
                        .toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)))
                }
            }, t.dispose = function() {
                g.removeData(this._element, Nt), g(this._element).off(Ot), this
                    ._element = null, (this._menu = null) !== this._popper && (this
                    ._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this
                    ._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                g(this._element).on(jt.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, {}, g(this._element)
                    .data(), {}, t), _.typeCheckConfig(At, t, this.constructor
                    .DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Qt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = g(this._element.parentNode),
                    e = Xt;
                return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e =
                    zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(
                    this._menu).hasClass(Wt) && (e = $t), e
            }, t._detectNavbar = function() {
                return 0 < g(this._element).closest(".navbar").length
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(
                    t) {
                    return t.offsets = l({}, t.offsets, {}, e._config.offset(t
                        .offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers
                    .applyStyle = {
                    enabled: !1
                }), l({}, t, {}, this._config.popperConfig)
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(Nt);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), g(
                        this).data(Nt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError(
                            'No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0,
                             i = e.length; n < i; n++) {
                        var o = c._getParentFromElement(e[n]),
                            r = g(e[n]).data(Nt),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), r) {
                            var a = r._menu;
                            if (g(o).hasClass(Rt) && !(t && ("click" === t.type &&
                                /input|textarea/i.test(t.target.tagName) || "keyup" ===
                                t.type && 9 === t.which) && g.contains(o, t.target))) {
                                var l = g.Event(jt.HIDE, s);
                                g(o).trigger(l), l.isDefaultPrevented() || (
                                    "ontouchstart" in document.documentElement && g(document
                                        .body).children().off("mouseover", null, g.noop), e[n]
                                        .setAttribute("aria-expanded", "false"), r._popper && r
                                        ._popper.destroy(), g(a).removeClass(Rt), g(o)
                                        .removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which ||
                    27 !== t.which && (40 !== t.which && 38 !== t.which || g(t
                        .target).closest(Qt).length)) : Lt.test(t.which)) && (t
                    .preventDefault(), t.stopPropagation(), !this.disabled && !g(
                    this).hasClass(Ht))) {
                    var e = c._getParentFromElement(this),
                        n = g(e).hasClass(Rt);
                    if (n || 27 !== t.which)
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(Vt)).filter(function(
                                t) {
                                return g(t).is(":visible")
                            });
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < i
                                    .length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Mt);
                                g(r).trigger("focus")
                            }
                            g(this).trigger("click")
                        }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Zt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return te
                }
            }]), c
        }();
    g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt
        .KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API +
        " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt,
        function(t) {
            t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(
                this), "toggle")
        }).on(jt.CLICK_DATA_API, Kt, function(t) {
        t.stopPropagation()
    }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At]
        .noConflict = function() {
        return g.fn[At] = Pt, ee._jQueryInterface
    };
    var ne = "modal",
        ie = "bs.modal",
        oe = "." + ie,
        re = g.fn[ne],
        se = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ae = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        le = {
            HIDE: "hide" + oe,
            HIDE_PREVENTED: "hidePrevented" + oe,
            HIDDEN: "hidden" + oe,
            SHOW: "show" + oe,
            SHOWN: "shown" + oe,
            FOCUSIN: "focusin" + oe,
            RESIZE: "resize" + oe,
            CLICK_DISMISS: "click.dismiss" + oe,
            KEYDOWN_DISMISS: "keydown.dismiss" + oe,
            MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
            CLICK_DATA_API: "click" + oe + ".data-api"
        },
        ce = "modal-dialog-scrollable",
        he = "modal-scrollbar-measure",
        ue = "modal-backdrop",
        fe = "modal-open",
        de = "fade",
        ge = "show",
        _e = "modal-static",
        me = ".modal-dialog",
        pe = ".modal-body",
        ve = '[data-toggle="modal"]',
        ye = '[data-dismiss="modal"]',
        Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ce = ".sticky-top",
        Te = function() {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t
                    .querySelector(me), this._backdrop = null, this._isShown = !1, this
                    ._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this
                    ._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(de) && (this._isTransitioning = !0);
                    var n = g.Event(le.SHOW, {
                        relatedTarget: t
                    });
                    g(this._element).trigger(n), this._isShown || n
                        .isDefaultPrevented() || (this._isShown = !0, this
                        ._checkScrollbar(), this._setScrollbar(), this
                        ._adjustDialog(), this._setEscapeEvent(), this
                        ._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye,
                        function(t) {
                            return e.hide(t)
                        }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function() {
                        g(e._element).one(le.MOUSEUP_DISMISS, function(t) {
                            g(t.target).is(e._element) && (e
                                ._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this
                    ._isTransitioning) {
                    var n = g.Event(le.HIDE);
                    if (g(this._element).trigger(n), this._isShown && !n
                        .isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(de);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(),
                            this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this
                            ._element).removeClass(ge), g(this._element).off(le
                            .CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                            i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return g(t).off(oe)
                }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie),
                    this._config = null, this._element = null, this._dialog = null,
                    this._backdrop = null, this._isShown = null, this
                    ._isBodyOverflowing = null, this._ignoreBackdropClick = null, this
                    ._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t
            }, t._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var e = g.Event(le.HIDE_PREVENTED);
                    if (g(this._element).trigger(e), e.defaultPrevented) return;
                    this._element.classList.add(_e);
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t._element.classList.remove(_e)
                    }).emulateTransitionEnd(n), this._element.focus()
                } else this.hide()
            }, t._showElement = function(t) {
                var e = this,
                    n = g(this._element).hasClass(de),
                    i = this._dialog ? this._dialog.querySelector(pe) : null;
                this._element.parentNode && this._element.parentNode.nodeType ===
                Node.ELEMENT_NODE || document.body.appendChild(this._element),
                    this._element.style.display = "block", this._element
                    .removeAttribute("aria-hidden"), this._element.setAttribute(
                    "aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i
                    .scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this
                    ._element), g(this._element).addClass(ge), this._config.focus &&
                this._enforceFocus();

                function o() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, g(
                        e._element).trigger(r)
                }
                var r = g.Event(le.SHOWN, {
                    relatedTarget: t
                });
                if (n) {
                    var s = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, t._enforceFocus = function() {
                var e = this;
                g(document).off(le.FOCUSIN).on(le.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === g(e
                        ._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(le
                        .KEYDOWN_DISMISS,
                    function(t) {
                        27 === t.which && e._triggerBackdropTransition()
                    }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? g(window).on(le.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : g(window).off(le.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute(
                    "aria-hidden", !0), this._element.removeAttribute("aria-modal"),
                    this._isTransitioning = !1, this._showBackdrop(function() {
                    g(document.body).removeClass(fe), t._resetAdjustments(), t
                        ._resetScrollbar(), g(t._element).trigger(le.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && (g(this._backdrop).remove(), this._backdrop =
                    null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = g(this._element).hasClass(de) ? de : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop
                        .className = ue, n && this._backdrop.classList.add(n), g(this
                        ._backdrop).appendTo(document.body), g(this._element).on(le
                            .CLICK_DISMISS,
                        function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t
                                .target === t.currentTarget && e
                                ._triggerBackdropTransition()
                        }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(
                        ge), !t) return;
                    if (!n) return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(ge);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (g(this._element).hasClass(de)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(
                            r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement
                    .clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft =
                    this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (
                    this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style
                    .paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this
                    ._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(Ee)),
                        e = [].slice.call(document.querySelectorAll(Ce));
                    g(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right",
                            parseFloat(i) + o._scrollbarWidth + "px")
                    }), g(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(
                            i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right",
                        parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(fe)
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(Ee));
                g(t).each(function(t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n ||
                        ""
                });
                var e = [].slice.call(document.querySelectorAll("" + Ce));
                g(e).each(function(t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n)
                        .removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style
                    .paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = he, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = g(this).data(ie),
                        e = l({}, se, {}, g(this).data(), {}, "object" ==
                        typeof n && n ? n : {});
                    if (t || (t = new o(this, e), g(this).data(ie, t)),
                    "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return se
                }
            }]), o
        }();
    g(document).on(le.CLICK_DATA_API, ve, function(t) {
        var e, n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this)
            .data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(le.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(le.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        Te._jQueryInterface.call(g(e), o, this)
    }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne]
        .noConflict = function() {
        return g.fn[ne] = re, Te._jQueryInterface
    };
    var be = ["background", "cite", "href", "itemtype", "longdesc", "poster",
            "src", "xlink:href"
        ],
        Se = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ie =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function we(t, r, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s =
            Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i =
            function(t) {
                var e = a[t],
                    n = e.nodeName.toLowerCase();
                if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode
                    .removeChild(e), "continue";
                var i = [].slice.call(e.attributes),
                    o = [].concat(r["*"] || [], r[n] || []);
                i.forEach(function(t) {
                    ! function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) ||
                            Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));
                        for (var i = e.filter(function(t) {
                            return t instanceof RegExp
                        }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    }(t, o) && e.removeAttribute(t.nodeName)
                })
            }, o = 0, l = a.length; o < l; o++) i(o);
        return n.body.innerHTML
    }
    var Ae = "tooltip",
        Ne = "bs.tooltip",
        Oe = "." + Ne,
        ke = g.fn[Ae],
        Pe = "bs-tooltip",
        Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        He = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Re = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        xe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Se,
            popperConfig: null
        },
        Fe = "show",
        Ue = "out",
        We = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: "show" + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe
        },
        qe = "fade",
        Me = "show",
        Ke = ".tooltip-inner",
        Qe = ".arrow",
        Be = "hover",
        Ve = "focus",
        Ye = "click",
        ze = "manual",
        Xe = function() {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError(
                    "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                );
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this
                    ._activeTrigger = {}, this._popper = null, this.element = t, this
                    .config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = g(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this
                            ._getDelegateConfig()), g(t.currentTarget).data(e, n)), n
                            ._activeTrigger.click = !n._activeTrigger.click, n
                            ._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null,
                            n)
                    } else {
                        if (g(this.getTipElement()).hasClass(Me)) return void this
                            ._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), g.removeData(this.element, this
                    .constructor.DATA_KEY), g(this.element).off(this.constructor
                    .EVENT_KEY), g(this.element).closest(".modal").off(
                    "hide.bs.modal", this._hideModalHandler), this.tip && g(this
                    .tip).remove(), this._isEnabled = null, this._timeout = null,
                    this._hoverState = null, this._activeTrigger = null, this
                    ._popper && this._popper.destroy(), this._popper = null, this
                    .element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === g(this.element).css("display")) throw new Error(
                    "Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element),
                        i = g.contains(null !== n ? n : this.element.ownerDocument
                            .documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute(
                        "aria-describedby", r), this.setContent(), this.config
                        .animation && g(o).addClass(qe);
                    var s = "function" == typeof this.config.placement ? this.config
                            .placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this
                        .element.ownerDocument.documentElement, this.tip) || g(o)
                        .appendTo(l), g(this.element).trigger(this.constructor.Event
                        .INSERTED), this._popper = new u(this.element, o, this
                        ._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in
                    document.documentElement && g(document.body).children().on(
                        "mouseover", null, g.noop);
                    var c = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event
                            .SHOWN), t === Ue && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(qe)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function(t) {
                function e() {
                    n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(
                        i), n._cleanTipClass(), n.element.removeAttribute(
                        "aria-describedby"), g(n.element).trigger(n.constructor.Event
                        .HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                }
                var n = this,
                    i = this.getTipElement(),
                    o = g.Event(this.constructor.Event.HIDE);
                if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (g(i).removeClass(Me), "ontouchstart" in document
                        .documentElement && g(document.body).children().off("mouseover",
                        null, g.noop), this._activeTrigger[Ye] = !1, this
                        ._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this
                        .tip).hasClass(qe)) {
                        var r = _.getTransitionDurationFromElement(i);
                        g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else e();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(Pe + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()),
                    g(t).removeClass(qe + " " + Me)
            }, t.setElementContent = function(t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config
                    .html ? (this.config.sanitize && (e = we(e, this.config.whiteList,
                    this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config
                    .html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e)
                    .text())
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t = t || ("function" == typeof this.config.title ? this
                    .config.title.call(this.element) : this.config.title)
            }, t._getPopperConfig = function(t) {
                var e = this;
                return l({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Qe
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e
                            ._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, {}, this.config.popperConfig)
            }, t._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(
                    t) {
                    return t.offsets = l({}, t.offsets, {}, e.config.offset(t
                        .offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function() {
                return !1 === this.config.container ? document.body : _.isElement(
                    this.config.container) ? g(this.config.container) : g(document)
                    .find(this.config.container)
            }, t._getAttachment = function(t) {
                return Re[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) g(i.element).on(i.constructor.Event.CLICK,
                        i.config.selector,
                        function(t) {
                            return i.toggle(t)
                        });
                    else if (t !== ze) {
                        var e = t === Be ? i.constructor.Event.MOUSEENTER : i
                                .constructor.Event.FOCUSIN,
                            n = t === Be ? i.constructor.Event.MOUSELEAVE : i
                                .constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    i.element && i.hide()
                }, g(this.element).closest(".modal").on("hide.bs.modal", this
                    ._hideModalHandler), this.config.selector ? this.config = l({},
                    this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == t || (this
                    .element.setAttribute("data-original-title", this.element
                        .getAttribute("title") || ""), this.element.setAttribute(
                    "title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t
                    .currentTarget, this._getDelegateConfig()), g(t.currentTarget)
                    .data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve :
                    Be] = !0), g(e.getTipElement()).hasClass(Me) || e
                    ._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e
                    ._timeout), e._hoverState = Fe, e.config.delay && e.config
                    .delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === Fe && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t
                    .currentTarget, this._getDelegateConfig()), g(t.currentTarget)
                    .data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve :
                    Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e
                    ._timeout), e._hoverState = Ue, e.config.delay && e.config.delay
                    .hide ? e._timeout = setTimeout(function() {
                    e._hoverState === Ue && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                var e = g(this.element).data();
                return Object.keys(e).forEach(function(t) {
                    -1 !== je.indexOf(t) && delete e[t]
                }), "number" == typeof(t = l({}, this.constructor.Default, {},
                    e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content && (t.content = t.content
                    .toString()), _.typeCheckConfig(Ae, t, this.constructor
                    .DefaultType), t.sanitize && (t.template = we(t.template, t
                    .whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this
                        .config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(Le);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(
                    this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(qe),
                    this.config.animation = !1, this.hide(), this.show(), this
                    .config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ne),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,
                        e), g(this).data(Ne, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return xe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ae
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ne
                }
            }, {
                key: "Event",
                get: function() {
                    return We
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Oe
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return He
                }
            }]), i
        }();
    g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae]
        .noConflict = function() {
        return g.fn[Ae] = ke, Xe._jQueryInterface
    };
    var $e = "popover",
        Ge = "bs.popover",
        Je = "." + Ge,
        Ze = g.fn[$e],
        tn = "bs-popover",
        en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
        nn = l({}, Xe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        on = l({}, Xe.DefaultType, {
            content: "(string|element|function)"
        }),
        rn = "fade",
        sn = "show",
        an = ".popover-header",
        ln = ".popover-body",
        cn = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            INSERTED: "inserted" + Je,
            CLICK: "click" + Je,
            FOCUSIN: "focusin" + Je,
            FOCUSOUT: "focusout" + Je,
            MOUSEENTER: "mouseenter" + Je,
            MOUSELEAVE: "mouseleave" + Je
        },
        hn = function(t) {
            function i() {
                return t.apply(this, arguments) || this
            }! function(t, e) {
                t.prototype = Object.create(e.prototype), (t.prototype.constructor =
                    t).__proto__ = e
            }(i, t);
            var e = i.prototype;
            return e.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, e.addAttachmentClass = function(t) {
                g(this.getTipElement()).addClass(tn + "-" + t)
            }, e.getTipElement = function() {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(an), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this
                    .setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn)
            }, e._getContent = function() {
                return this.element.getAttribute("data-content") || this.config
                    .content
            }, e._cleanTipClass = function() {
                var t = g(this.getTipElement()),
                    e = t.attr("class").match(en);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this).data(Ge),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,
                        e), g(this).data(Ge, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return nn
                }
            }, {
                key: "NAME",
                get: function() {
                    return $e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ge
                }
            }, {
                key: "Event",
                get: function() {
                    return cn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Je
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return on
                }
            }]), i
        }(Xe);
    g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e]
        .noConflict = function() {
        return g.fn[$e] = Ze, hn._jQueryInterface
    };
    var un = "scrollspy",
        fn = "bs.scrollspy",
        dn = "." + fn,
        gn = g.fn[un],
        _n = {
            offset: 10,
            method: "auto",
            target: ""
        },
        mn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        pn = {
            ACTIVATE: "activate" + dn,
            SCROLL: "scroll" + dn,
            LOAD_DATA_API: "load" + dn + ".data-api"
        },
        vn = "dropdown-item",
        yn = "active",
        En = '[data-spy="scroll"]',
        Cn = ".nav, .list-group",
        Tn = ".nav-link",
        bn = ".nav-item",
        Sn = ".list-group-item",
        Dn = ".dropdown",
        In = ".dropdown-item",
        wn = ".dropdown-toggle",
        An = "offset",
        Nn = "position",
        On = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ?
                    window : t, this._config = this._getConfig(e), this._selector = this
                        ._config.target + " " + Tn + "," + this._config.target + " " + Sn +
                    "," + this._config.target + " " + In, this._offsets = [], this
                    ._targets = [], this._activeTarget = null, this._scrollHeight = 0,
                    g(this._scrollElement).on(pn.SCROLL, function(t) {
                        return n._process(t)
                    }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? An : Nn,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === Nn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this
                    ._getScrollHeight(), [].slice.call(document.querySelectorAll(this
                    ._selector)).map(function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                g.removeData(this._element, fn), g(this._scrollElement).off(dn),
                    this._element = null, this._scrollElement = null, this._config =
                    null, this._selector = null, this._offsets = null, this._targets =
                    null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, _n, {}, "object" == typeof t && t ?
                    t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target =
                        "#" + e
                }
                return _.typeCheckConfig(un, t, mn), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement
                    .pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body
                    .scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this
                    ._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this
                        ._offsets[0]) return this._activeTarget = null, void this
                        ._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[
                            o] && ("undefined" == typeof this._offsets[o + 1] || t < this
                            ._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e +
                            '"]'
                    }),
                    n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(
                    yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn)
                        .addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)
                ), g(this._scrollElement).trigger(pn.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(
                    function(t) {
                        return t.classList.contains(yn)
                    }).forEach(function(t) {
                    return t.classList.remove(yn)
                })
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = g(this).data(fn);
                    if (t || (t = new n(this, "object" == typeof e && e), g(this)
                        .data(fn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError(
                            'No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return _n
                }
            }]), n
        }();
    g(window).on(pn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(En)), e = t
            .length; e--;) {
            var n = g(t[e]);
            On._jQueryInterface.call(n, n.data())
        }
    }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un]
        .noConflict = function() {
        return g.fn[un] = gn, On._jQueryInterface
    };
    var kn = "bs.tab",
        Pn = "." + kn,
        Ln = g.fn.tab,
        jn = {
            HIDE: "hide" + Pn,
            HIDDEN: "hidden" + Pn,
            SHOW: "show" + Pn,
            SHOWN: "shown" + Pn,
            CLICK_DATA_API: "click" + Pn + ".data-api"
        },
        Hn = "dropdown-menu",
        Rn = "active",
        xn = "disabled",
        Fn = "fade",
        Un = "show",
        Wn = ".dropdown",
        qn = ".nav, .list-group",
        Mn = ".active",
        Kn = "> li > .active",
        Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Bn = ".dropdown-toggle",
        Vn = "> .dropdown-menu .active",
        Yn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode
                    .nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(
                    Rn) || g(this._element).hasClass(xn))) {
                    var t, i, e = g(this._element).closest(qn)[0],
                        o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(jn.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = g.Event(jn.SHOW, {
                            relatedTarget: i
                        });
                    if (i && g(i).trigger(s), g(this._element).trigger(a), !a
                        .isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this
                            ._element, e);
                        var l = function() {
                            var t = g.Event(jn.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = g.Event(jn.SHOWN, {
                                    relatedTarget: i
                                });
                            g(i).trigger(t), g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                g.removeData(this._element, kn), this._element = null
            }, t._activate = function(t, e, n) {
                function i() {
                    return o._transitionComplete(t, r, n)
                }
                var o = this,
                    r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e)
                        .children(Mn) : g(e).find(Kn))[0],
                    s = n && r && g(r).hasClass(Fn);
                if (r && s) {
                    var a = _.getTransitionDurationFromElement(r);
                    g(r).removeClass(Un).one(_.TRANSITION_END, i)
                        .emulateTransitionEnd(a)
                } else i()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    g(e).removeClass(Rn);
                    var i = g(e.parentNode).find(Vn)[0];
                    i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e
                        .setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t
                    .setAttribute("aria-selected", !0), _.reflow(t), t.classList
                    .contains(Fn) && t.classList.add(Un), t.parentNode && g(t
                    .parentNode).hasClass(Hn)) {
                    var o = g(t).closest(Wn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Bn));
                        g(r).addClass(Rn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(kn);
                    if (e || (e = new i(this), t.data(kn, e)), "string" ==
                    typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(jn.CLICK_DATA_API, Qn, function(t) {
        t.preventDefault(), Yn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab
        .noConflict = function() {
        return g.fn.tab = Ln, Yn._jQueryInterface
    };
    var zn = "toast",
        Xn = "bs.toast",
        $n = "." + Xn,
        Gn = g.fn[zn],
        Jn = {
            CLICK_DISMISS: "click.dismiss" + $n,
            HIDE: "hide" + $n,
            HIDDEN: "hidden" + $n,
            SHOW: "show" + $n,
            SHOWN: "shown" + $n
        },
        Zn = "fade",
        ti = "hide",
        ei = "show",
        ni = "showing",
        ii = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        oi = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ri = '[data-dismiss="toast"]',
        si = function() {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout =
                    null, this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                var t = this,
                    e = g.Event(Jn.SHOW);
                if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add(Zn);
                    var n = function() {
                        t._element.classList.remove(ni), t._element.classList.add(ei),
                            g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t
                            ._timeout = setTimeout(function() {
                            t.hide()
                        }, t._config.delay))
                    };
                    if (this._element.classList.remove(ti), _.reflow(this._element),
                        this._element.classList.add(ni), this._config.animation) {
                        var i = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(
                            i)
                    } else n()
                }
            }, t.hide = function() {
                if (this._element.classList.contains(ei)) {
                    var t = g.Event(Jn.HIDE);
                    g(this._element).trigger(t), t.isDefaultPrevented() || this
                        ._close()
                }
            }, t.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element
                    .classList.contains(ei) && this._element.classList.remove(ei), g(
                    this._element).off(Jn.CLICK_DISMISS), g.removeData(this
                    ._element, Xn), this._element = null, this._config = null
            }, t._getConfig = function(t) {
                return t = l({}, oi, {}, g(this._element).data(), {}, "object" ==
                typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this
                    .constructor.DefaultType), t
            }, t._setListeners = function() {
                var t = this;
                g(this._element).on(Jn.CLICK_DISMISS, ri, function() {
                    return t.hide()
                })
            }, t._close = function() {
                function t() {
                    e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN)
                }
                var e = this;
                if (this._element.classList.remove(ei), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = g(this),
                        e = t.data(Xn);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(
                        Xn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError(
                            'No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ii
                }
            }, {
                key: "Default",
                get: function() {
                    return oi
                }
            }]), i
        }();
    g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn]
        .noConflict = function() {
        return g.fn[zn] = Gn, si._jQueryInterface
    }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t
        .Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab =
        Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t,
        "__esModule", {
            value: !0
        })
});