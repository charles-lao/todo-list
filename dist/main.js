(() => {
  "use strict";
  var n = {
      890: (n, r, e) => {
        e.d(r, { Z: () => j });
        var t = e(81),
          o = e.n(t),
          i = e(645),
          a = e.n(i),
          c = e(667),
          s = e.n(c),
          l = new URL(e(937), e.b),
          p = new URL(e(556), e.b),
          d = new URL(e(195), e.b),
          u = new URL(e(413), e.b),
          f = new URL(e(324), e.b),
          g = new URL(e(152), e.b),
          h = new URL(e(926), e.b),
          m = a()(o()),
          v = s()(l),
          x = s()(p),
          b = s()(d),
          y = s()(u),
          w = s()(f),
          k = s()(g),
          T = s()(h);
        m.push([
          n.id,
          "@font-face {\r\n    font-family: 'Roboto';\r\n    src: url(" +
            v +
            ");\r\n}\r\n\r\n* {\r\n    border: 1px solid red;\r\n    font-family: 'Roboto';\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\nheader, \r\nfooter {\r\n    background-color:  #1aa3ff;\r\n    color: white;\r\n}\r\n\r\nheader {\r\n    flex: 2;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding-left: 10px;\r\n    gap: 5px;\r\n}\r\n\r\nheader img {\r\n    height: 50px;\r\n    width: 50px;\r\n    filter: invert(100%);\r\n    margin-left: 20px;\r\n}\r\n\r\n#content-section {\r\n    flex: 18;\r\n    display: flex;\r\n}\r\n\r\n#left-content {\r\n    background-color: #ccebff;\r\n    padding: 30px;\r\n    gap: 14px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1.8;\r\n}\r\n\r\n#left-content ul {\r\n    list-style-type: none; \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    font-size: 1.3rem;\r\n}\r\n\r\nli#inbox,\r\nli#today,\r\nli#this-week,\r\n#add-project,\r\n.project {\r\n    background-repeat: no-repeat;\r\n    background-position: left center;\r\n    padding-left: 30px;\r\n    min-height: 10px;\r\n}\r\n\r\nli#inbox:hover,\r\nli#today:hover,\r\nli#this-week:hover,\r\n#add-project:hover,\r\n.project {\r\n    cursor: pointer\r\n}\r\n\r\nli#inbox {\r\n    background-image: url(" +
            x +
            ");\r\n}\r\n\r\nli#today {\r\n    background-image: url(" +
            b +
            ");\r\n}\r\n\r\nli#this-week {\r\n    background-image: url(" +
            y +
            ");\r\n}\r\n\r\n#left-content h3 {\r\n    margin-top: 12px;\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.project {\r\n    background-image: url(" +
            w +
            ")\r\n}\r\n\r\n#add-project {\r\n    font-size: 1.3rem;\r\n    background-image: url(" +
            k +
            ");\r\n}\r\n\r\n\r\n#right-content {\r\n    flex: 7;\r\n    background-color: #def2ff;\r\n    \r\n}\r\n\r\n#right-content div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 120px;\r\n    padding-top: 30px;\r\n    gap: 30px;\r\n}\r\n\r\n#right-content h3 {\r\n    font-size: 2rem;\r\n    display: inline;\r\n}\r\n\r\n#right-content p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1rem;\r\n}\r\n\r\nfooter p {\r\n    background-image: url(" +
            T +
            ");\r\n    background-repeat: no-repeat;\r\n    background-position: right center;\r\n    padding-right: 25px;\r\n    min-height: 10px;\r\n    color: black;\r\n    filter: invert(100%);\r\n}",
          "",
        ]);
        const j = m;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  t && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, t, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (t)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var p = [].concat(n[l]);
                (t && a[p[0]]) ||
                  (void 0 !== i &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = i)),
                  e &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  r.push(p));
              }
            }),
            r
          );
        };
      },
      667: (n) => {
        n.exports = function (n, r) {
          return (
            r || (r = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                r.hash && (n += r.hash),
                /["'() \t\n]|(%20)/.test(n) || r.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = t.base ? s[0] + t.base : s[0],
              p = i[l] || 0,
              d = "".concat(l, " ").concat(p);
            i[l] = p + 1;
            var u = e(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) r[u].references++, r[u].updater(f);
            else {
              var g = o(f, t);
              (t.byIndex = c),
                r.splice(c, 0, { identifier: d, updater: g, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = e(i[a]);
              r[c].references--;
            }
            for (var s = t(n, o), l = 0; l < i.length; l++) {
              var p = e(i[l]);
              0 === r[p].references && (r[p].updater(), r.splice(p, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var t = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  r.styleTagTransform(t, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
      937: (n, r, e) => {
        n.exports = e.p + "fc2b5060f7accec5cf74.ttf";
      },
      413: (n, r, e) => {
        n.exports = e.p + "1514cb89e66edd886067.svg";
      },
      195: (n, r, e) => {
        n.exports = e.p + "233385e32206cd372d69.svg";
      },
      324: (n, r, e) => {
        n.exports = e.p + "365f3e7f182c9f913994.svg";
      },
      926: (n, r, e) => {
        n.exports = e.p + "550985caaa8859d4b95f.svg";
      },
      556: (n, r, e) => {
        n.exports = e.p + "939f2a757e3335be71bb.svg";
      },
      152: (n, r, e) => {
        n.exports = e.p + "3cffe9a515498593b872.svg";
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var i = (r[t] = { id: t, exports: {} });
    return n[t](i, i.exports, e), i.exports;
  }
  (e.m = n),
    (e.n = (n) => {
      var r = n && n.__esModule ? () => n.default : () => n;
      return e.d(r, { a: r }), r;
    }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var r = e.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var t = r.getElementsByTagName("script");
        t.length && (n = t[t.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        r = e.n(n),
        t = e(795),
        o = e.n(t),
        i = e(569),
        a = e.n(i),
        c = e(565),
        s = e.n(c),
        l = e(216),
        p = e.n(l),
        d = e(589),
        u = e.n(d),
        f = e(890),
        g = {};
      (g.styleTagTransform = u()),
        (g.setAttributes = s()),
        (g.insert = a().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = p()),
        r()(f.Z, g),
        f.Z && f.Z.locals && f.Z.locals;
      (() => {
        const n = document.querySelector("#right-content");
        return {
          init: () => {
            n.innerHTML = ((n, r) => {
              const e = document.createElement("div"),
                t = document.createElement("h3");
              t.textContent = "Inbox";
              const o = document.createElement("p");
              return (
                (o.textContent = "Test"),
                e.appendChild(t),
                e.appendChild(o),
                e.outerHTML
              );
            })();
          },
        };
      })().init();
    })();
})();
