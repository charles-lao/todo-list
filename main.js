(() => {
  "use strict";
  var t = {
      890: (t, e, n) => {
        n.d(e, { Z: () => x });
        var r = n(537),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          u = n(667),
          c = n.n(u),
          f = new URL(n(937), n.b),
          l = new URL(n(556), n.b),
          s = new URL(n(195), n.b),
          p = new URL(n(413), n.b),
          y = new URL(n(324), n.b),
          d = new URL(n(152), n.b),
          b = new URL(n(926), n.b),
          h = a()(o()),
          m = c()(f),
          v = c()(l),
          g = c()(s),
          w = c()(p),
          A = c()(y),
          O = c()(d),
          S = c()(b);
        h.push([
          t.id,
          '@font-face {\n  font-family: "Roboto";\n  src: url(' +
            m +
            ');\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url(' +
            v +
            ");\n}\n\nli#today {\n  background-image: url(" +
            g +
            ");\n}\n\nli#this-week {\n  background-image: url(" +
            w +
            ");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url(" +
            A +
            ");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url(" +
            O +
            ");\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url(" +
            S +
            ");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,iBAAiB;AACnB;;AAEA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;;;;EAKE,4BAA4B;EAC5B,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;;;EAKE,eAAe;AACjB;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yDAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,yDAA2C;AAC7C;;AAEA;EACE,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB",
            sourcesContent: [
              '@font-face {\n  font-family: "Roboto";\n  src: url(../fonts/Roboto-Regular.ttf);\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url("../images/inbox.svg");\n}\n\nli#today {\n  background-image: url("../images/calendar-today.svg");\n}\n\nli#this-week {\n  background-image: url("../images/calendar-month.svg");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url("../images/format-list-bulleted.svg");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url("../images/plus.svg");\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url("../images/github.svg");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const x = h;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var c = this[u][0];
                  null != c && (a[c] = !0);
                }
              for (var f = 0; f < t.length; f++) {
                var l = [].concat(t[f]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      667: (t) => {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(
                      t.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : t)
              : t
          );
        };
      },
      537: (t) => {
        t.exports = function (t) {
          var e = t[1],
            n = t[3];
          if (!n) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              i = "/*# ".concat(o, " */");
            return [e].concat([i]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], u = 0; u < t.length; u++) {
            var c = t[u],
              f = r.base ? c[0] + r.base : c[0],
              l = i[f] || 0,
              s = "".concat(f, " ").concat(l);
            i[f] = l + 1;
            var p = n(s),
              y = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(y);
            else {
              var d = o(y, r);
              (r.byIndex = u),
                e.splice(u, 0, { identifier: s, updater: d, references: 1 });
            }
            a.push(s);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var u = n(i[a]);
              e[u].references--;
            }
            for (var c = r(t, o), f = 0; f < i.length; f++) {
              var l = n(i[f]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      937: (t, e, n) => {
        t.exports = n.p + "fc2b5060f7accec5cf74.ttf";
      },
      413: (t, e, n) => {
        t.exports = n.p + "1514cb89e66edd886067.svg";
      },
      195: (t, e, n) => {
        t.exports = n.p + "233385e32206cd372d69.svg";
      },
      324: (t, e, n) => {
        t.exports = n.p + "365f3e7f182c9f913994.svg";
      },
      926: (t, e, n) => {
        t.exports = n.p + "550985caaa8859d4b95f.svg";
      },
      556: (t, e, n) => {
        t.exports = n.p + "939f2a757e3335be71bb.svg";
      },
      152: (t, e, n) => {
        t.exports = n.p + "3cffe9a515498593b872.svg";
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.m = t),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        r.length && (t = r[r.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      function t(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present"
          );
      }
      function e(t) {
        return (
          (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          e(t)
        );
      }
      function r(t) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      function o(e) {
        t(1, arguments);
        var n = Object.prototype.toString.call(e);
        return e instanceof Date || ("object" === r(e) && "[object Date]" === n)
          ? new Date(e.getTime())
          : "number" == typeof e || "[object Number]" === n
          ? new Date(e)
          : (("string" != typeof e && "[object String]" !== n) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function i(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function a(e, n) {
        return (
          t(2, arguments),
          (function (e, n) {
            t(2, arguments);
            var r = o(e).getTime(),
              a = i(n);
            return new Date(r + a);
          })(e, -i(n))
        );
      }
      function u(e) {
        t(1, arguments);
        var n = o(e),
          r = n.getUTCDay(),
          i = (r < 1 ? 7 : 0) + r - 1;
        return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
      }
      function c(e) {
        t(1, arguments);
        var n = o(e),
          r = n.getUTCFullYear(),
          i = new Date(0);
        i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var a = u(i),
          c = new Date(0);
        c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
        var f = u(c);
        return n.getTime() >= a.getTime()
          ? r + 1
          : n.getTime() >= f.getTime()
          ? r
          : r - 1;
      }
      function f(e) {
        t(1, arguments);
        var n = o(e),
          r =
            u(n).getTime() -
            (function (e) {
              t(1, arguments);
              var n = c(e),
                r = new Date(0);
              return r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), u(r);
            })(n).getTime();
        return Math.round(r / 6048e5) + 1;
      }
      var l = {};
      function s() {
        return l;
      }
      function p(e, n) {
        var r, a, u, c, f, l, p, y;
        t(1, arguments);
        var d = s(),
          b = i(
            null !==
              (r =
                null !==
                  (a =
                    null !==
                      (u =
                        null !== (c = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== c
                          ? c
                          : null == n ||
                            null === (f = n.locale) ||
                            void 0 === f ||
                            null === (l = f.options) ||
                            void 0 === l
                          ? void 0
                          : l.weekStartsOn) && void 0 !== u
                      ? u
                      : d.weekStartsOn) && void 0 !== a
                  ? a
                  : null === (p = d.locale) ||
                    void 0 === p ||
                    null === (y = p.options) ||
                    void 0 === y
                  ? void 0
                  : y.weekStartsOn) && void 0 !== r
              ? r
              : 0
          );
        if (!(b >= 0 && b <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var h = o(e),
          m = h.getUTCDay(),
          v = (m < b ? 7 : 0) + m - b;
        return h.setUTCDate(h.getUTCDate() - v), h.setUTCHours(0, 0, 0, 0), h;
      }
      function y(e, n) {
        var r, a, u, c, f, l, y, d;
        t(1, arguments);
        var b = o(e),
          h = b.getUTCFullYear(),
          m = s(),
          v = i(
            null !==
              (r =
                null !==
                  (a =
                    null !==
                      (u =
                        null !==
                          (c = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== c
                          ? c
                          : null == n ||
                            null === (f = n.locale) ||
                            void 0 === f ||
                            null === (l = f.options) ||
                            void 0 === l
                          ? void 0
                          : l.firstWeekContainsDate) && void 0 !== u
                      ? u
                      : m.firstWeekContainsDate) && void 0 !== a
                  ? a
                  : null === (y = m.locale) ||
                    void 0 === y ||
                    null === (d = y.options) ||
                    void 0 === d
                  ? void 0
                  : d.firstWeekContainsDate) && void 0 !== r
              ? r
              : 1
          );
        if (!(v >= 1 && v <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var g = new Date(0);
        g.setUTCFullYear(h + 1, 0, v), g.setUTCHours(0, 0, 0, 0);
        var w = p(g, n),
          A = new Date(0);
        A.setUTCFullYear(h, 0, v), A.setUTCHours(0, 0, 0, 0);
        var O = p(A, n);
        return b.getTime() >= w.getTime()
          ? h + 1
          : b.getTime() >= O.getTime()
          ? h
          : h - 1;
      }
      function d(e, n) {
        t(1, arguments);
        var r = o(e),
          a =
            p(r, n).getTime() -
            (function (e, n) {
              var r, o, a, u, c, f, l, d;
              t(1, arguments);
              var b = s(),
                h = i(
                  null !==
                    (r =
                      null !==
                        (o =
                          null !==
                            (a =
                              null !==
                                (u =
                                  null == n
                                    ? void 0
                                    : n.firstWeekContainsDate) && void 0 !== u
                                ? u
                                : null == n ||
                                  null === (c = n.locale) ||
                                  void 0 === c ||
                                  null === (f = c.options) ||
                                  void 0 === f
                                ? void 0
                                : f.firstWeekContainsDate) && void 0 !== a
                            ? a
                            : b.firstWeekContainsDate) && void 0 !== o
                        ? o
                        : null === (l = b.locale) ||
                          void 0 === l ||
                          null === (d = l.options) ||
                          void 0 === d
                        ? void 0
                        : d.firstWeekContainsDate) && void 0 !== r
                    ? r
                    : 1
                ),
                m = y(e, n),
                v = new Date(0);
              return (
                v.setUTCFullYear(m, 0, h), v.setUTCHours(0, 0, 0, 0), p(v, n)
              );
            })(r, n).getTime();
        return Math.round(a / 6048e5) + 1;
      }
      function b(t, e) {
        for (
          var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
          r.length < e;

        )
          r = "0" + r;
        return n + r;
      }
      const h = function (t, e) {
          var n = t.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
          return b("yy" === e ? r % 100 : r, e.length);
        },
        m = function (t, e) {
          var n = t.getUTCMonth();
          return "M" === e ? String(n + 1) : b(n + 1, 2);
        },
        v = function (t, e) {
          return b(t.getUTCDate(), e.length);
        },
        g = function (t, e) {
          return b(t.getUTCHours() % 12 || 12, e.length);
        },
        w = function (t, e) {
          return b(t.getUTCHours(), e.length);
        },
        A = function (t, e) {
          return b(t.getUTCMinutes(), e.length);
        },
        O = function (t, e) {
          return b(t.getUTCSeconds(), e.length);
        },
        S = function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds();
          return b(Math.floor(r * Math.pow(10, n - 3)), e.length);
        };
      var x = {
        G: function (t, e, n) {
          var r = t.getUTCFullYear() > 0 ? 1 : 0;
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (t, e, n) {
          if ("yo" === e) {
            var r = t.getUTCFullYear(),
              o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, { unit: "year" });
          }
          return h(t, e);
        },
        Y: function (t, e, n, r) {
          var o = y(t, r),
            i = o > 0 ? o : 1 - o;
          return "YY" === e
            ? b(i % 100, 2)
            : "Yo" === e
            ? n.ordinalNumber(i, { unit: "year" })
            : b(i, e.length);
        },
        R: function (t, e) {
          return b(c(t), e.length);
        },
        u: function (t, e) {
          return b(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "Q":
              return String(r);
            case "QQ":
              return b(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, { width: "narrow", context: "formatting" });
            default:
              return n.quarter(r, { width: "wide", context: "formatting" });
          }
        },
        q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "q":
              return String(r);
            case "qq":
              return b(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, { width: "narrow", context: "standalone" });
            default:
              return n.quarter(r, { width: "wide", context: "standalone" });
          }
        },
        M: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "M":
            case "MM":
              return m(t, e);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, { width: "narrow", context: "formatting" });
            default:
              return n.month(r, { width: "wide", context: "formatting" });
          }
        },
        L: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "L":
              return String(r + 1);
            case "LL":
              return b(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, { width: "narrow", context: "standalone" });
            default:
              return n.month(r, { width: "wide", context: "standalone" });
          }
        },
        w: function (t, e, n, r) {
          var o = d(t, r);
          return "wo" === e
            ? n.ordinalNumber(o, { unit: "week" })
            : b(o, e.length);
        },
        I: function (t, e, n) {
          var r = f(t);
          return "Io" === e
            ? n.ordinalNumber(r, { unit: "week" })
            : b(r, e.length);
        },
        d: function (t, e, n) {
          return "do" === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : v(t, e);
        },
        D: function (e, n, r) {
          var i = (function (e) {
            t(1, arguments);
            var n = o(e),
              r = n.getTime();
            n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
            var i = r - n.getTime();
            return Math.floor(i / 864e5) + 1;
          })(e);
          return "Do" === n
            ? r.ordinalNumber(i, { unit: "dayOfYear" })
            : b(i, n.length);
        },
        E: function (t, e, n) {
          var r = t.getUTCDay();
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        e: function (t, e, n, r) {
          var o = t.getUTCDay(),
            i = (o - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "e":
              return String(i);
            case "ee":
              return b(i, 2);
            case "eo":
              return n.ordinalNumber(i, { unit: "day" });
            case "eee":
              return n.day(o, { width: "abbreviated", context: "formatting" });
            case "eeeee":
              return n.day(o, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return n.day(o, { width: "short", context: "formatting" });
            default:
              return n.day(o, { width: "wide", context: "formatting" });
          }
        },
        c: function (t, e, n, r) {
          var o = t.getUTCDay(),
            i = (o - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "c":
              return String(i);
            case "cc":
              return b(i, e.length);
            case "co":
              return n.ordinalNumber(i, { unit: "day" });
            case "ccc":
              return n.day(o, { width: "abbreviated", context: "standalone" });
            case "ccccc":
              return n.day(o, { width: "narrow", context: "standalone" });
            case "cccccc":
              return n.day(o, { width: "short", context: "standalone" });
            default:
              return n.day(o, { width: "wide", context: "standalone" });
          }
        },
        i: function (t, e, n) {
          var r = t.getUTCDay(),
            o = 0 === r ? 7 : r;
          switch (e) {
            case "i":
              return String(o);
            case "ii":
              return b(o, e.length);
            case "io":
              return n.ordinalNumber(o, { unit: "day" });
            case "iii":
              return n.day(r, { width: "abbreviated", context: "formatting" });
            case "iiiii":
              return n.day(r, { width: "narrow", context: "formatting" });
            case "iiiiii":
              return n.day(r, { width: "short", context: "formatting" });
            default:
              return n.day(r, { width: "wide", context: "formatting" });
          }
        },
        a: function (t, e, n) {
          var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        b: function (t, e, n) {
          var r,
            o = t.getUTCHours();
          switch (
            ((r =
              12 === o
                ? "noon"
                : 0 === o
                ? "midnight"
                : o / 12 >= 1
                ? "pm"
                : "am"),
            e)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        B: function (t, e, n) {
          var r,
            o = t.getUTCHours();
          switch (
            ((r =
              o >= 17
                ? "evening"
                : o >= 12
                ? "afternoon"
                : o >= 4
                ? "morning"
                : "night"),
            e)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, { width: "narrow", context: "formatting" });
            default:
              return n.dayPeriod(r, { width: "wide", context: "formatting" });
          }
        },
        h: function (t, e, n) {
          if ("ho" === e) {
            var r = t.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return g(t, e);
        },
        H: function (t, e, n) {
          return "Ho" === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : w(t, e);
        },
        K: function (t, e, n) {
          var r = t.getUTCHours() % 12;
          return "Ko" === e
            ? n.ordinalNumber(r, { unit: "hour" })
            : b(r, e.length);
        },
        k: function (t, e, n) {
          var r = t.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : b(r, e.length)
          );
        },
        m: function (t, e, n) {
          return "mo" === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : A(t, e);
        },
        s: function (t, e, n) {
          return "so" === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : O(t, e);
        },
        S: function (t, e) {
          return S(t, e);
        },
        X: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          if (0 === o) return "Z";
          switch (e) {
            case "X":
              return T(o);
            case "XXXX":
            case "XX":
              return k(o);
            default:
              return k(o, ":");
          }
        },
        x: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return T(o);
            case "xxxx":
            case "xx":
              return k(o);
            default:
              return k(o, ":");
          }
        },
        O: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + C(o, ":");
            default:
              return "GMT" + k(o, ":");
          }
        },
        z: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + C(o, ":");
            default:
              return "GMT" + k(o, ":");
          }
        },
        t: function (t, e, n, r) {
          var o = r._originalDate || t;
          return b(Math.floor(o.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, r) {
          return b((r._originalDate || t).getTime(), e.length);
        },
      };
      function C(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          o = Math.floor(r / 60),
          i = r % 60;
        if (0 === i) return n + String(o);
        var a = e || "";
        return n + String(o) + a + b(i, 2);
      }
      function T(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + b(Math.abs(t) / 60, 2)
          : k(t, e);
      }
      function k(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          o = Math.abs(t);
        return r + b(Math.floor(o / 60), 2) + n + b(o % 60, 2);
      }
      const E = x;
      var j = function (t, e) {
          switch (t) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        P = function (t, e) {
          switch (t) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        };
      const _ = {
        p: P,
        P: function (t, e) {
          var n,
            r = t.match(/(P+)(p+)?/) || [],
            o = r[1],
            i = r[2];
          if (!i) return j(t, e);
          switch (o) {
            case "P":
              n = e.dateTime({ width: "short" });
              break;
            case "PP":
              n = e.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = e.dateTime({ width: "long" });
              break;
            default:
              n = e.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", j(o, e)).replace("{{time}}", P(i, e));
        },
      };
      function R(t) {
        var e = new Date(
          Date.UTC(
            t.getFullYear(),
            t.getMonth(),
            t.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
          )
        );
        return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
      }
      var B = ["D", "DD"],
        D = ["YY", "YYYY"];
      function M(t) {
        return -1 !== B.indexOf(t);
      }
      function U(t) {
        return -1 !== D.indexOf(t);
      }
      function q(t, e, n) {
        if ("YYYY" === t)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("YY" === t)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("D" === t)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
        if ("DD" === t)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
              )
          );
      }
      var Y = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function N(t) {
        return function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      const H = {
        date: N({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: N({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: N({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var L = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function W(t) {
        return function (e, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            t.formattingValues
          ) {
            var o = t.defaultFormattingWidth || t.defaultWidth,
              i = null != n && n.width ? String(n.width) : o;
            r = t.formattingValues[i] || t.formattingValues[o];
          } else {
            var a = t.defaultWidth,
              u = null != n && n.width ? String(n.width) : t.defaultWidth;
            r = t.values[u] || t.values[a];
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      const I = {
        ordinalNumber: function (t, e) {
          var n = Number(t),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: W({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: W({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (t) {
            return t - 1;
          },
        }),
        month: W({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: W({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: W({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function Q(t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            o =
              (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
            i = e.match(o);
          if (!i) return null;
          var a,
            u = i[0],
            c =
              (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
            f = Array.isArray(c)
              ? (function (t, e) {
                  for (var n = 0; n < t.length; n++) if (t[n].test(u)) return n;
                })(c)
              : (function (t, e) {
                  for (var n in t)
                    if (t.hasOwnProperty(n) && t[n].test(u)) return n;
                })(c);
          return (
            (a = t.valueCallback ? t.valueCallback(f) : f),
            {
              value: (a = n.valueCallback ? n.valueCallback(a) : a),
              rest: e.slice(u.length),
            }
          );
        };
      }
      var F,
        z = {
          ordinalNumber:
            ((F = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (t) {
                return parseInt(t, 10);
              },
            }),
            function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.match(F.matchPattern);
              if (!n) return null;
              var r = n[0],
                o = t.match(F.parsePattern);
              if (!o) return null;
              var i = F.valueCallback ? F.valueCallback(o[0]) : o[0];
              return {
                value: (i = e.valueCallback ? e.valueCallback(i) : i),
                rest: t.slice(r.length),
              };
            }),
          era: Q({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: Q({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: Q({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: Q({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: Q({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const X = {
        code: "en-US",
        formatDistance: function (t, e, n) {
          var r,
            o = Y[t];
          return (
            (r =
              "string" == typeof o
                ? o
                : 1 === e
                ? o.one
                : o.other.replace("{{count}}", e.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: H,
        formatRelative: function (t, e, n, r) {
          return L[t];
        },
        localize: I,
        match: z,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var G = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Z = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        J = /^'([^]*?)'?$/,
        K = /''/g,
        $ = /[a-zA-Z]/;
      function V(n, r, u) {
        var c, f, l, p, y, d, b, h, m, v, g, w, A, O, S, x, C, T;
        t(2, arguments);
        var k = String(r),
          j = s(),
          P =
            null !==
              (c =
                null !== (f = null == u ? void 0 : u.locale) && void 0 !== f
                  ? f
                  : j.locale) && void 0 !== c
              ? c
              : X,
          B = i(
            null !==
              (l =
                null !==
                  (p =
                    null !==
                      (y =
                        null !==
                          (d = null == u ? void 0 : u.firstWeekContainsDate) &&
                        void 0 !== d
                          ? d
                          : null == u ||
                            null === (b = u.locale) ||
                            void 0 === b ||
                            null === (h = b.options) ||
                            void 0 === h
                          ? void 0
                          : h.firstWeekContainsDate) && void 0 !== y
                      ? y
                      : j.firstWeekContainsDate) && void 0 !== p
                  ? p
                  : null === (m = j.locale) ||
                    void 0 === m ||
                    null === (v = m.options) ||
                    void 0 === v
                  ? void 0
                  : v.firstWeekContainsDate) && void 0 !== l
              ? l
              : 1
          );
        if (!(B >= 1 && B <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var D = i(
          null !==
            (g =
              null !==
                (w =
                  null !==
                    (A =
                      null !== (O = null == u ? void 0 : u.weekStartsOn) &&
                      void 0 !== O
                        ? O
                        : null == u ||
                          null === (S = u.locale) ||
                          void 0 === S ||
                          null === (x = S.options) ||
                          void 0 === x
                        ? void 0
                        : x.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (C = j.locale) ||
                  void 0 === C ||
                  null === (T = C.options) ||
                  void 0 === T
                ? void 0
                : T.weekStartsOn) && void 0 !== g
            ? g
            : 0
        );
        if (!(D >= 0 && D <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if (!P.localize)
          throw new RangeError("locale must contain localize property");
        if (!P.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var Y = o(n);
        if (
          !(function (n) {
            if (
              (t(1, arguments),
              !(function (n) {
                return (
                  t(1, arguments),
                  n instanceof Date ||
                    ("object" === e(n) &&
                      "[object Date]" === Object.prototype.toString.call(n))
                );
              })(n) && "number" != typeof n)
            )
              return !1;
            var r = o(n);
            return !isNaN(Number(r));
          })(Y)
        )
          throw new RangeError("Invalid time value");
        var N = a(Y, R(Y)),
          H = {
            firstWeekContainsDate: B,
            weekStartsOn: D,
            locale: P,
            _originalDate: Y,
          };
        return k
          .match(Z)
          .map(function (t) {
            var e = t[0];
            return "p" === e || "P" === e ? (0, _[e])(t, P.formatLong) : t;
          })
          .join("")
          .match(G)
          .map(function (t) {
            if ("''" === t) return "'";
            var e,
              o,
              i = t[0];
            if ("'" === i)
              return (o = (e = t).match(J)) ? o[1].replace(K, "'") : e;
            var a = E[i];
            if (a)
              return (
                (null != u && u.useAdditionalWeekYearTokens) ||
                  !U(t) ||
                  q(t, r, String(n)),
                (null != u && u.useAdditionalDayOfYearTokens) ||
                  !M(t) ||
                  q(t, r, String(n)),
                a(N, t, P.localize, H)
              );
            if (i.match($))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  i +
                  "`"
              );
            return t;
          })
          .join("");
      }
      const tt = (() => {
        let t = [],
          e = [];
        null !== localStorage.getItem("projectStorage") &&
          (t = JSON.parse(localStorage.getItem("projectStorage"))),
          null !== localStorage.getItem("taskStorage") &&
            (e = JSON.parse(localStorage.getItem("taskStorage")));
        const n = () => {
            localStorage.setItem("taskStorage", JSON.stringify(e)),
              localStorage.setItem("projectStorage", JSON.stringify(t));
          },
          r =
            ((o = Date.now()),
            (i = "4 test title"),
            (a = "4 test description"),
            (u = V(new Date(), "MM/dd/yyyy")),
            {
              idNo: o,
              title: i,
              description: a,
              dueDate: u,
              priority: "4 test priority",
              project: "default",
            });
        var o, i, a, u;
        return (
          console.log(r),
          e.push(r),
          n(),
          {
            projectStorage: t,
            taskStorage: e,
            updateLocalStorage: n,
            deleteTask: (t, r) => {
              for (let o = 0; o < e.length; o++)
                e[o].idNo == t && (e.splice(o, 1), n(), hi.refreshContent(r));
            },
          }
        );
      })();
      var et = n(379),
        nt = n.n(et),
        rt = n(795),
        ot = n.n(rt),
        it = n(569),
        at = n.n(it),
        ut = n(565),
        ct = n.n(ut),
        ft = n(216),
        lt = n.n(ft),
        st = n(589),
        pt = n.n(st),
        yt = n(890),
        dt = {};
      (dt.styleTagTransform = pt()),
        (dt.setAttributes = ct()),
        (dt.insert = at().bind(null, "head")),
        (dt.domAPI = ot()),
        (dt.insertStyleElement = lt()),
        nt()(yt.Z, dt),
        yt.Z && yt.Z.locals && yt.Z.locals;
      const bt = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = "Inbox"), n.appendChild(r), null != e))
            for (let t = 0; t < e.length; t++) {
              const r = document.createElement("div");
              r.setAttribute("class", "task-div");
              const o = document.createElement("button");
              o.setAttribute("class", "circle-btn"),
                o.setAttribute("data-id", e[t].idNo);
              const i = document.createElement("p");
              i.textContent = e[t].title;
              const a = document.createElement("p");
              (a.textContent = e[t].dueDate),
                r.appendChild(o),
                r.appendChild(i),
                r.appendChild(a),
                n.appendChild(r);
            }
          return n.outerHTML;
        },
        ht = () => {
          document.querySelectorAll(".circle-btn").forEach((t) => {
            t.addEventListener("click", (t) => {
              const e = t.target.getAttribute("data-id");
              tt.deleteTask(e, "default");
            });
          });
        },
        mt = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = "Inbox"), n.appendChild(r), null != e)) {
            const t = V(new Date(), "MM/dd/yyyy");
            for (let r = 0; r < e.length; r++)
              if (e[r].dueDate == t) {
                const t = document.createElement("div");
                t.setAttribute("class", "task-div");
                const o = document.createElement("button");
                o.setAttribute("class", "circle-btn"),
                  o.setAttribute("data-id", e[r].idNo);
                const i = document.createElement("p");
                i.textContent = e[r].title;
                const a = document.createElement("p");
                (a.textContent = e[r].dueDate),
                  t.appendChild(o),
                  t.appendChild(i),
                  t.appendChild(a),
                  n.appendChild(t);
              }
          }
          return n.outerHTML;
        },
        vt = () => {
          document.querySelectorAll(".circle-btn").forEach((t) => {
            t.addEventListener("click", (t) => {
              const e = t.target.getAttribute("data-id");
              tt.deleteTask(e, "today");
            });
          });
        };
      function gt(t, e) {
        if (null == t)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }
      function wt(t) {
        return (
          (wt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          wt(t)
        );
      }
      function At(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ot(t, e);
      }
      function Ot(t, e) {
        return (
          (Ot =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ot(t, e)
        );
      }
      function St(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Ct(t);
          if (e) {
            var o = Ct(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            return !e || ("object" !== wt(e) && "function" != typeof e)
              ? xt(t)
              : e;
          })(this, n);
        };
      }
      function xt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ct(t) {
        return (
          (Ct = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ct(t)
        );
      }
      function Tt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function kt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Et(t, e, n) {
        return e && kt(t.prototype, e), n && kt(t, n), t;
      }
      function jt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Pt = (function () {
          function t() {
            Tt(this, t), jt(this, "subPriority", 0);
          }
          return (
            Et(t, [
              {
                key: "validate",
                value: function (t, e) {
                  return !0;
                },
              },
            ]),
            t
          );
        })(),
        _t = (function (t) {
          At(n, t);
          var e = St(n);
          function n(t, r, o, i, a) {
            var u;
            return (
              Tt(this, n),
              ((u = e.call(this)).value = t),
              (u.validateValue = r),
              (u.setValue = o),
              (u.priority = i),
              a && (u.subPriority = a),
              u
            );
          }
          return (
            Et(n, [
              {
                key: "validate",
                value: function (t, e) {
                  return this.validateValue(t, this.value, e);
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return this.setValue(t, e, this.value, n);
                },
              },
            ]),
            n
          );
        })(Pt),
        Rt = (function (t) {
          At(n, t);
          var e = St(n);
          function n() {
            var t;
            Tt(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              jt(xt((t = e.call.apply(e, [this].concat(o)))), "priority", 10),
              jt(xt(t), "subPriority", -1),
              t
            );
          }
          return (
            Et(n, [
              {
                key: "set",
                value: function (t, e) {
                  if (e.timestampIsSet) return t;
                  var n = new Date(0);
                  return (
                    n.setFullYear(
                      t.getUTCFullYear(),
                      t.getUTCMonth(),
                      t.getUTCDate()
                    ),
                    n.setHours(
                      t.getUTCHours(),
                      t.getUTCMinutes(),
                      t.getUTCSeconds(),
                      t.getUTCMilliseconds()
                    ),
                    n
                  );
                },
              },
            ]),
            n
          );
        })(Pt);
      function Bt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var Dt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var e, n;
        return (
          (e = t),
          (n = [
            {
              key: "run",
              value: function (t, e, n, r) {
                var o = this.parse(t, e, n, r);
                return o
                  ? {
                      setter: new _t(
                        o.value,
                        this.validate,
                        this.set,
                        this.priority,
                        this.subPriority
                      ),
                      rest: o.rest,
                    }
                  : null;
              },
            },
            {
              key: "validate",
              value: function (t, e, n) {
                return !0;
              },
            },
          ]),
          n && Bt(e.prototype, n),
          t
        );
      })();
      function Mt(t) {
        return (
          (Mt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Mt(t)
        );
      }
      function Ut(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function qt(t, e) {
        return (
          (qt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          qt(t, e)
        );
      }
      function Yt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Nt(t) {
        return (
          (Nt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Nt(t)
        );
      }
      function Ht(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Lt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && qt(t, e);
          })(a, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = Nt(r);
                if (o) {
                  var n = Nt(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== Mt(e) && "function" != typeof e)
                    ? Yt(t)
                    : e;
                })(this, t);
              });
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Ht(Yt((t = i.call.apply(i, [this].concat(n)))), "priority", 140),
              Ht(Yt(t), "incompatibleTokens", ["R", "u", "t", "T"]),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "parse",
                value: function (t, e, n) {
                  switch (e) {
                    case "G":
                    case "GG":
                    case "GGG":
                      return (
                        n.era(t, { width: "abbreviated" }) ||
                        n.era(t, { width: "narrow" })
                      );
                    case "GGGGG":
                      return n.era(t, { width: "narrow" });
                    default:
                      return (
                        n.era(t, { width: "wide" }) ||
                        n.era(t, { width: "abbreviated" }) ||
                        n.era(t, { width: "narrow" })
                      );
                  }
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return (
                    (e.era = n),
                    t.setUTCFullYear(n, 0, 1),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                  );
                },
              },
            ]),
            n && Ut(e.prototype, n),
            a
          );
        })(Dt),
        Wt =
          (Math.pow(10, 8),
          {
            month: /^(1[0-2]|0?\d)/,
            date: /^(3[0-1]|[0-2]?\d)/,
            dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
            week: /^(5[0-3]|[0-4]?\d)/,
            hour23h: /^(2[0-3]|[0-1]?\d)/,
            hour24h: /^(2[0-4]|[0-1]?\d)/,
            hour11h: /^(1[0-1]|0?\d)/,
            hour12h: /^(1[0-2]|0?\d)/,
            minute: /^[0-5]?\d/,
            second: /^[0-5]?\d/,
            singleDigit: /^\d/,
            twoDigits: /^\d{1,2}/,
            threeDigits: /^\d{1,3}/,
            fourDigits: /^\d{1,4}/,
            anyDigitsSigned: /^-?\d+/,
            singleDigitSigned: /^-?\d/,
            twoDigitsSigned: /^-?\d{1,2}/,
            threeDigitsSigned: /^-?\d{1,3}/,
            fourDigitsSigned: /^-?\d{1,4}/,
          }),
        It = /^([+-])(\d{2})(\d{2})?|Z/,
        Qt = /^([+-])(\d{2})(\d{2})|Z/,
        Ft = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        zt = /^([+-])(\d{2}):(\d{2})|Z/,
        Xt = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function Gt(t, e) {
        return t ? { value: e(t.value), rest: t.rest } : t;
      }
      function Zt(t, e) {
        var n = e.match(t);
        return n
          ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) }
          : null;
      }
      function Jt(t, e) {
        var n = e.match(t);
        return n
          ? "Z" === n[0]
            ? { value: 0, rest: e.slice(1) }
            : {
                value:
                  ("+" === n[1] ? 1 : -1) *
                  (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                    6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                    1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
                rest: e.slice(n[0].length),
              }
          : null;
      }
      function Kt(t) {
        return Zt(Wt.anyDigitsSigned, t);
      }
      function $t(t, e) {
        switch (t) {
          case 1:
            return Zt(Wt.singleDigit, e);
          case 2:
            return Zt(Wt.twoDigits, e);
          case 3:
            return Zt(Wt.threeDigits, e);
          case 4:
            return Zt(Wt.fourDigits, e);
          default:
            return Zt(new RegExp("^\\d{1," + t + "}"), e);
        }
      }
      function Vt(t, e) {
        switch (t) {
          case 1:
            return Zt(Wt.singleDigitSigned, e);
          case 2:
            return Zt(Wt.twoDigitsSigned, e);
          case 3:
            return Zt(Wt.threeDigitsSigned, e);
          case 4:
            return Zt(Wt.fourDigitsSigned, e);
          default:
            return Zt(new RegExp("^-?\\d{1," + t + "}"), e);
        }
      }
      function te(t) {
        switch (t) {
          case "morning":
            return 4;
          case "evening":
            return 17;
          case "pm":
          case "noon":
          case "afternoon":
            return 12;
          default:
            return 0;
        }
      }
      function ee(t, e) {
        var n,
          r = e > 0,
          o = r ? e : 1 - e;
        if (o <= 50) n = t || 100;
        else {
          var i = o + 50;
          n = t + 100 * Math.floor(i / 100) - (t >= i % 100 ? 100 : 0);
        }
        return r ? n : 1 - n;
      }
      function ne(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      function re(t) {
        return (
          (re =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          re(t)
        );
      }
      function oe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ie(t, e) {
        return (
          (ie =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ie(t, e)
        );
      }
      function ae(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ue(t) {
        return (
          (ue = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ue(t)
        );
      }
      function ce(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var fe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ie(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = ue(r);
              if (o) {
                var n = ue(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== re(e) && "function" != typeof e)
                  ? ae(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            ce(ae((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            ce(ae(t), "incompatibleTokens", [
              "Y",
              "R",
              "u",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                var r = function (t) {
                  return { year: t, isTwoDigitYear: "yy" === e };
                };
                switch (e) {
                  case "y":
                    return Gt($t(4, t), r);
                  case "yo":
                    return Gt(n.ordinalNumber(t, { unit: "year" }), r);
                  default:
                    return Gt($t(e.length, t), r);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e.isTwoDigitYear || e.year > 0;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                var r = t.getUTCFullYear();
                if (n.isTwoDigitYear) {
                  var o = ee(n.year, r);
                  return (
                    t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                  );
                }
                var i = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
                return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && oe(e.prototype, n),
          a
        );
      })(Dt);
      function le(t) {
        return (
          (le =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          le(t)
        );
      }
      function se(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function pe(t, e) {
        return (
          (pe =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          pe(t, e)
        );
      }
      function ye(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function de(t) {
        return (
          (de = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          de(t)
        );
      }
      function be(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var he = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && pe(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = de(r);
              if (o) {
                var n = de(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== le(e) && "function" != typeof e)
                  ? ye(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            be(ye((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            be(ye(t), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                var r = function (t) {
                  return { year: t, isTwoDigitYear: "YY" === e };
                };
                switch (e) {
                  case "Y":
                    return Gt($t(4, t), r);
                  case "Yo":
                    return Gt(n.ordinalNumber(t, { unit: "year" }), r);
                  default:
                    return Gt($t(e.length, t), r);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e.isTwoDigitYear || e.year > 0;
              },
            },
            {
              key: "set",
              value: function (t, e, n, r) {
                var o = y(t, r);
                if (n.isTwoDigitYear) {
                  var i = ee(n.year, o);
                  return (
                    t.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                    t.setUTCHours(0, 0, 0, 0),
                    p(t, r)
                  );
                }
                var a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
                return (
                  t.setUTCFullYear(a, 0, r.firstWeekContainsDate),
                  t.setUTCHours(0, 0, 0, 0),
                  p(t, r)
                );
              },
            },
          ]),
          n && se(e.prototype, n),
          a
        );
      })(Dt);
      function me(t) {
        return (
          (me =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          me(t)
        );
      }
      function ve(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ge(t, e) {
        return (
          (ge =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ge(t, e)
        );
      }
      function we(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ae(t) {
        return (
          (Ae = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ae(t)
        );
      }
      function Oe(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Se = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ge(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ae(r);
              if (o) {
                var n = Ae(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== me(e) && "function" != typeof e)
                  ? we(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Oe(we((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            Oe(we(t), "incompatibleTokens", [
              "G",
              "y",
              "Y",
              "u",
              "Q",
              "q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                return Vt("R" === e ? 4 : e.length, t);
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                var r = new Date(0);
                return (
                  r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), u(r)
                );
              },
            },
          ]) && ve(e.prototype, n),
          a
        );
      })(Dt);
      function xe(t) {
        return (
          (xe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          xe(t)
        );
      }
      function Ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Te(t, e) {
        return (
          (Te =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Te(t, e)
        );
      }
      function ke(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ee(t) {
        return (
          (Ee = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ee(t)
        );
      }
      function je(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Pe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Te(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ee(r);
              if (o) {
                var n = Ee(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== xe(e) && "function" != typeof e)
                  ? ke(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            je(ke((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            je(ke(t), "incompatibleTokens", [
              "G",
              "y",
              "Y",
              "R",
              "w",
              "I",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                return Vt("u" === e ? 4 : e.length, t);
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]) && Ce(e.prototype, n),
          a
        );
      })(Dt);
      function _e(t) {
        return (
          (_e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          _e(t)
        );
      }
      function Re(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Be(t, e) {
        return (
          (Be =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Be(t, e)
        );
      }
      function De(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Me(t) {
        return (
          (Me = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Me(t)
        );
      }
      function Ue(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var qe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Be(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Me(r);
              if (o) {
                var n = Me(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== _e(e) && "function" != typeof e)
                  ? De(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Ue(De((t = i.call.apply(i, [this].concat(n)))), "priority", 120),
            Ue(De(t), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "Q":
                  case "QQ":
                    return $t(e.length, t);
                  case "Qo":
                    return n.ordinalNumber(t, { unit: "quarter" });
                  case "QQQ":
                    return (
                      n.quarter(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.quarter(t, { width: "narrow", context: "formatting" })
                    );
                  case "QQQQQ":
                    return n.quarter(t, {
                      width: "narrow",
                      context: "formatting",
                    });
                  default:
                    return (
                      n.quarter(t, { width: "wide", context: "formatting" }) ||
                      n.quarter(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.quarter(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 4;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return (
                  t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
                );
              },
            },
          ]),
          n && Re(e.prototype, n),
          a
        );
      })(Dt);
      function Ye(t) {
        return (
          (Ye =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ye(t)
        );
      }
      function Ne(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function He(t, e) {
        return (
          (He =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          He(t, e)
        );
      }
      function Le(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function We(t) {
        return (
          (We = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          We(t)
        );
      }
      function Ie(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Qe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && He(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = We(r);
              if (o) {
                var n = We(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ye(e) && "function" != typeof e)
                  ? Le(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Ie(Le((t = i.call.apply(i, [this].concat(n)))), "priority", 120),
            Ie(Le(t), "incompatibleTokens", [
              "Y",
              "R",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "q":
                  case "qq":
                    return $t(e.length, t);
                  case "qo":
                    return n.ordinalNumber(t, { unit: "quarter" });
                  case "qqq":
                    return (
                      n.quarter(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.quarter(t, { width: "narrow", context: "standalone" })
                    );
                  case "qqqqq":
                    return n.quarter(t, {
                      width: "narrow",
                      context: "standalone",
                    });
                  default:
                    return (
                      n.quarter(t, { width: "wide", context: "standalone" }) ||
                      n.quarter(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.quarter(t, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 4;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return (
                  t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
                );
              },
            },
          ]),
          n && Ne(e.prototype, n),
          a
        );
      })(Dt);
      function Fe(t) {
        return (
          (Fe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Fe(t)
        );
      }
      function ze(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Xe(t, e) {
        return (
          (Xe =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Xe(t, e)
        );
      }
      function Ge(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ze(t) {
        return (
          (Ze = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ze(t)
        );
      }
      function Je(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Ke = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Xe(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ze(r);
              if (o) {
                var n = Ze(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Fe(e) && "function" != typeof e)
                  ? Ge(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Je(
              Ge((t = i.call.apply(i, [this].concat(n)))),
              "incompatibleTokens",
              ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
            ),
            Je(Ge(t), "priority", 110),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                var r = function (t) {
                  return t - 1;
                };
                switch (e) {
                  case "M":
                    return Gt(Zt(Wt.month, t), r);
                  case "MM":
                    return Gt($t(2, t), r);
                  case "Mo":
                    return Gt(n.ordinalNumber(t, { unit: "month" }), r);
                  case "MMM":
                    return (
                      n.month(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.month(t, { width: "narrow", context: "formatting" })
                    );
                  case "MMMMM":
                    return n.month(t, {
                      width: "narrow",
                      context: "formatting",
                    });
                  default:
                    return (
                      n.month(t, { width: "wide", context: "formatting" }) ||
                      n.month(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.month(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 11;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && ze(e.prototype, n),
          a
        );
      })(Dt);
      function $e(t) {
        return (
          ($e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          $e(t)
        );
      }
      function Ve(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function tn(t, e) {
        return (
          (tn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          tn(t, e)
        );
      }
      function en(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function nn(t) {
        return (
          (nn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          nn(t)
        );
      }
      function rn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var on = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && tn(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = nn(r);
              if (o) {
                var n = nn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== $e(e) && "function" != typeof e)
                  ? en(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            rn(en((t = i.call.apply(i, [this].concat(n)))), "priority", 110),
            rn(en(t), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "w",
              "I",
              "D",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                var r = function (t) {
                  return t - 1;
                };
                switch (e) {
                  case "L":
                    return Gt(Zt(Wt.month, t), r);
                  case "LL":
                    return Gt($t(2, t), r);
                  case "Lo":
                    return Gt(n.ordinalNumber(t, { unit: "month" }), r);
                  case "LLL":
                    return (
                      n.month(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.month(t, { width: "narrow", context: "standalone" })
                    );
                  case "LLLLL":
                    return n.month(t, {
                      width: "narrow",
                      context: "standalone",
                    });
                  default:
                    return (
                      n.month(t, { width: "wide", context: "standalone" }) ||
                      n.month(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.month(t, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 11;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Ve(e.prototype, n),
          a
        );
      })(Dt);
      function an(t) {
        return (
          (an =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          an(t)
        );
      }
      function un(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function cn(t, e) {
        return (
          (cn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          cn(t, e)
        );
      }
      function fn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ln(t) {
        return (
          (ln = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ln(t)
        );
      }
      function sn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var pn = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && cn(t, e);
        })(f, e);
        var n,
          r,
          a,
          u,
          c =
            ((a = f),
            (u = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = ln(a);
              if (u) {
                var n = ln(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== an(e) && "function" != typeof e)
                  ? fn(t)
                  : e;
              })(this, t);
            });
        function f() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, f);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            sn(fn((t = c.call.apply(c, [this].concat(n)))), "priority", 100),
            sn(fn(t), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "i",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (n = f),
          (r = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "w":
                    return Zt(Wt.week, t);
                  case "wo":
                    return n.ordinalNumber(t, { unit: "week" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 53;
              },
            },
            {
              key: "set",
              value: function (e, n, r, a) {
                return p(
                  (function (e, n, r) {
                    t(2, arguments);
                    var a = o(e),
                      u = i(n),
                      c = d(a, r) - u;
                    return a.setUTCDate(a.getUTCDate() - 7 * c), a;
                  })(e, r, a),
                  a
                );
              },
            },
          ]),
          r && un(n.prototype, r),
          f
        );
      })(Dt);
      function yn(t) {
        return (
          (yn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          yn(t)
        );
      }
      function dn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function bn(t, e) {
        return (
          (bn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          bn(t, e)
        );
      }
      function hn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function mn(t) {
        return (
          (mn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          mn(t)
        );
      }
      function vn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var gn = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && bn(t, e);
        })(s, e);
        var n,
          r,
          a,
          c,
          l =
            ((a = s),
            (c = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = mn(a);
              if (c) {
                var n = mn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== yn(e) && "function" != typeof e)
                  ? hn(t)
                  : e;
              })(this, t);
            });
        function s() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, s);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            vn(hn((t = l.call.apply(l, [this].concat(n)))), "priority", 100),
            vn(hn(t), "incompatibleTokens", [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (n = s),
          (r = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "I":
                    return Zt(Wt.week, t);
                  case "Io":
                    return n.ordinalNumber(t, { unit: "week" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 53;
              },
            },
            {
              key: "set",
              value: function (e, n, r) {
                return u(
                  (function (e, n) {
                    t(2, arguments);
                    var r = o(e),
                      a = i(n),
                      u = f(r) - a;
                    return r.setUTCDate(r.getUTCDate() - 7 * u), r;
                  })(e, r)
                );
              },
            },
          ]),
          r && dn(n.prototype, r),
          s
        );
      })(Dt);
      function wn(t) {
        return (
          (wn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          wn(t)
        );
      }
      function An(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function On(t, e) {
        return (
          (On =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          On(t, e)
        );
      }
      function Sn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function xn(t) {
        return (
          (xn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          xn(t)
        );
      }
      function Cn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Tn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        kn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        En = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && On(t, e);
          })(a, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = xn(r);
                if (o) {
                  var n = xn(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== wn(e) && "function" != typeof e)
                    ? Sn(t)
                    : e;
                })(this, t);
              });
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              Cn(Sn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
              Cn(Sn(t), "subPriority", 1),
              Cn(Sn(t), "incompatibleTokens", [
                "Y",
                "R",
                "q",
                "Q",
                "w",
                "I",
                "D",
                "i",
                "e",
                "c",
                "t",
                "T",
              ]),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "parse",
                value: function (t, e, n) {
                  switch (e) {
                    case "d":
                      return Zt(Wt.date, t);
                    case "do":
                      return n.ordinalNumber(t, { unit: "date" });
                    default:
                      return $t(e.length, t);
                  }
                },
              },
              {
                key: "validate",
                value: function (t, e) {
                  var n = ne(t.getUTCFullYear()),
                    r = t.getUTCMonth();
                  return n ? e >= 1 && e <= kn[r] : e >= 1 && e <= Tn[r];
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
                },
              },
            ]),
            n && An(e.prototype, n),
            a
          );
        })(Dt);
      function jn(t) {
        return (
          (jn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          jn(t)
        );
      }
      function Pn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _n(t, e) {
        return (
          (_n =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          _n(t, e)
        );
      }
      function Rn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Bn(t) {
        return (
          (Bn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Bn(t)
        );
      }
      function Dn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Mn = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && _n(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Bn(r);
              if (o) {
                var n = Bn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== jn(e) && "function" != typeof e)
                  ? Rn(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Dn(Rn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Dn(Rn(t), "subpriority", 1),
            Dn(Rn(t), "incompatibleTokens", [
              "Y",
              "R",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "I",
              "d",
              "E",
              "i",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "D":
                  case "DD":
                    return Zt(Wt.dayOfYear, t);
                  case "Do":
                    return n.ordinalNumber(t, { unit: "date" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return ne(t.getUTCFullYear())
                  ? e >= 1 && e <= 366
                  : e >= 1 && e <= 365;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Pn(e.prototype, n),
          a
        );
      })(Dt);
      function Un(e, n, r) {
        var a, u, c, f, l, p, y, d;
        t(2, arguments);
        var b = s(),
          h = i(
            null !==
              (a =
                null !==
                  (u =
                    null !==
                      (c =
                        null !== (f = null == r ? void 0 : r.weekStartsOn) &&
                        void 0 !== f
                          ? f
                          : null == r ||
                            null === (l = r.locale) ||
                            void 0 === l ||
                            null === (p = l.options) ||
                            void 0 === p
                          ? void 0
                          : p.weekStartsOn) && void 0 !== c
                      ? c
                      : b.weekStartsOn) && void 0 !== u
                  ? u
                  : null === (y = b.locale) ||
                    void 0 === y ||
                    null === (d = y.options) ||
                    void 0 === d
                  ? void 0
                  : d.weekStartsOn) && void 0 !== a
              ? a
              : 0
          );
        if (!(h >= 0 && h <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var m = o(e),
          v = i(n),
          g = (((v % 7) + 7) % 7 < h ? 7 : 0) + v - m.getUTCDay();
        return m.setUTCDate(m.getUTCDate() + g), m;
      }
      function qn(t) {
        return (
          (qn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          qn(t)
        );
      }
      function Yn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Nn(t, e) {
        return (
          (Nn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Nn(t, e)
        );
      }
      function Hn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ln(t) {
        return (
          (Ln = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ln(t)
        );
      }
      function Wn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var In = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Nn(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ln(r);
              if (o) {
                var n = Ln(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== qn(e) && "function" != typeof e)
                  ? Hn(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Wn(Hn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Wn(Hn(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "E":
                  case "EE":
                  case "EEE":
                    return (
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                  case "EEEEE":
                    return n.day(t, { width: "narrow", context: "formatting" });
                  case "EEEEEE":
                    return (
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                  default:
                    return (
                      n.day(t, { width: "wide", context: "formatting" }) ||
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 6;
              },
            },
            {
              key: "set",
              value: function (t, e, n, r) {
                return (t = Un(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Yn(e.prototype, n),
          a
        );
      })(Dt);
      function Qn(t) {
        return (
          (Qn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Qn(t)
        );
      }
      function Fn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function zn(t, e) {
        return (
          (zn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          zn(t, e)
        );
      }
      function Xn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Gn(t) {
        return (
          (Gn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Gn(t)
        );
      }
      function Zn(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Jn = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && zn(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Gn(r);
              if (o) {
                var n = Gn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Qn(e) && "function" != typeof e)
                  ? Xn(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Zn(Xn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Zn(Xn(t), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n, r) {
                var o = function (t) {
                  var e = 7 * Math.floor((t - 1) / 7);
                  return ((t + r.weekStartsOn + 6) % 7) + e;
                };
                switch (e) {
                  case "e":
                  case "ee":
                    return Gt($t(e.length, t), o);
                  case "eo":
                    return Gt(n.ordinalNumber(t, { unit: "day" }), o);
                  case "eee":
                    return (
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                  case "eeeee":
                    return n.day(t, { width: "narrow", context: "formatting" });
                  case "eeeeee":
                    return (
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                  default:
                    return (
                      n.day(t, { width: "wide", context: "formatting" }) ||
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 6;
              },
            },
            {
              key: "set",
              value: function (t, e, n, r) {
                return (t = Un(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Fn(e.prototype, n),
          a
        );
      })(Dt);
      function Kn(t) {
        return (
          (Kn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Kn(t)
        );
      }
      function $n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Vn(t, e) {
        return (
          (Vn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Vn(t, e)
        );
      }
      function tr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function er(t) {
        return (
          (er = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          er(t)
        );
      }
      function nr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var rr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Vn(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = er(r);
              if (o) {
                var n = er(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Kn(e) && "function" != typeof e)
                  ? tr(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            nr(tr((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            nr(tr(t), "incompatibleTokens", [
              "y",
              "R",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "I",
              "d",
              "D",
              "E",
              "i",
              "e",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n, r) {
                var o = function (t) {
                  var e = 7 * Math.floor((t - 1) / 7);
                  return ((t + r.weekStartsOn + 6) % 7) + e;
                };
                switch (e) {
                  case "c":
                  case "cc":
                    return Gt($t(e.length, t), o);
                  case "co":
                    return Gt(n.ordinalNumber(t, { unit: "day" }), o);
                  case "ccc":
                    return (
                      n.day(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.day(t, { width: "short", context: "standalone" }) ||
                      n.day(t, { width: "narrow", context: "standalone" })
                    );
                  case "ccccc":
                    return n.day(t, { width: "narrow", context: "standalone" });
                  case "cccccc":
                    return (
                      n.day(t, { width: "short", context: "standalone" }) ||
                      n.day(t, { width: "narrow", context: "standalone" })
                    );
                  default:
                    return (
                      n.day(t, { width: "wide", context: "standalone" }) ||
                      n.day(t, {
                        width: "abbreviated",
                        context: "standalone",
                      }) ||
                      n.day(t, { width: "short", context: "standalone" }) ||
                      n.day(t, { width: "narrow", context: "standalone" })
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 6;
              },
            },
            {
              key: "set",
              value: function (t, e, n, r) {
                return (t = Un(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && $n(e.prototype, n),
          a
        );
      })(Dt);
      function or(t) {
        return (
          (or =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          or(t)
        );
      }
      function ir(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ar(t, e) {
        return (
          (ar =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ar(t, e)
        );
      }
      function ur(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function cr(t) {
        return (
          (cr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          cr(t)
        );
      }
      function fr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var lr = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ar(t, e);
        })(f, e);
        var n,
          r,
          a,
          u,
          c =
            ((a = f),
            (u = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = cr(a);
              if (u) {
                var n = cr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== or(e) && "function" != typeof e)
                  ? ur(t)
                  : e;
              })(this, t);
            });
        function f() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, f);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            fr(ur((t = c.call.apply(c, [this].concat(n)))), "priority", 90),
            fr(ur(t), "incompatibleTokens", [
              "y",
              "Y",
              "u",
              "q",
              "Q",
              "M",
              "L",
              "w",
              "d",
              "D",
              "E",
              "e",
              "c",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (n = f),
          (r = [
            {
              key: "parse",
              value: function (t, e, n) {
                var r = function (t) {
                  return 0 === t ? 7 : t;
                };
                switch (e) {
                  case "i":
                  case "ii":
                    return $t(e.length, t);
                  case "io":
                    return n.ordinalNumber(t, { unit: "day" });
                  case "iii":
                    return Gt(
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                        n.day(t, { width: "short", context: "formatting" }) ||
                        n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  case "iiiii":
                    return Gt(
                      n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  case "iiiiii":
                    return Gt(
                      n.day(t, { width: "short", context: "formatting" }) ||
                        n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  default:
                    return Gt(
                      n.day(t, { width: "wide", context: "formatting" }) ||
                        n.day(t, {
                          width: "abbreviated",
                          context: "formatting",
                        }) ||
                        n.day(t, { width: "short", context: "formatting" }) ||
                        n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 7;
              },
            },
            {
              key: "set",
              value: function (e, n, r) {
                return (
                  (e = (function (e, n) {
                    t(2, arguments);
                    var r = i(n);
                    r % 7 == 0 && (r -= 7);
                    var a = o(e),
                      u = (((r % 7) + 7) % 7 < 1 ? 7 : 0) + r - a.getUTCDay();
                    return a.setUTCDate(a.getUTCDate() + u), a;
                  })(e, r)),
                  e.setUTCHours(0, 0, 0, 0),
                  e
                );
              },
            },
          ]),
          r && ir(n.prototype, r),
          f
        );
      })(Dt);
      function sr(t) {
        return (
          (sr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          sr(t)
        );
      }
      function pr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function yr(t, e) {
        return (
          (yr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          yr(t, e)
        );
      }
      function dr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function br(t) {
        return (
          (br = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          br(t)
        );
      }
      function hr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var mr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && yr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = br(r);
              if (o) {
                var n = br(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== sr(e) && "function" != typeof e)
                  ? dr(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            hr(dr((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            hr(dr(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "a":
                  case "aa":
                  case "aaa":
                    return (
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                  case "aaaaa":
                    return n.dayPeriod(t, {
                      width: "narrow",
                      context: "formatting",
                    });
                  default:
                    return (
                      n.dayPeriod(t, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCHours(te(n), 0, 0, 0), t;
              },
            },
          ]),
          n && pr(e.prototype, n),
          a
        );
      })(Dt);
      function vr(t) {
        return (
          (vr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          vr(t)
        );
      }
      function gr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function wr(t, e) {
        return (
          (wr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          wr(t, e)
        );
      }
      function Ar(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Or(t) {
        return (
          (Or = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Or(t)
        );
      }
      function Sr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var xr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && wr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Or(r);
              if (o) {
                var n = Or(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== vr(e) && "function" != typeof e)
                  ? Ar(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Sr(Ar((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Sr(Ar(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "b":
                  case "bb":
                  case "bbb":
                    return (
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                  case "bbbbb":
                    return n.dayPeriod(t, {
                      width: "narrow",
                      context: "formatting",
                    });
                  default:
                    return (
                      n.dayPeriod(t, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCHours(te(n), 0, 0, 0), t;
              },
            },
          ]),
          n && gr(e.prototype, n),
          a
        );
      })(Dt);
      function Cr(t) {
        return (
          (Cr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Cr(t)
        );
      }
      function Tr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function kr(t, e) {
        return (
          (kr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          kr(t, e)
        );
      }
      function Er(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function jr(t) {
        return (
          (jr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          jr(t)
        );
      }
      function Pr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var _r = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && kr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = jr(r);
              if (o) {
                var n = jr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Cr(e) && "function" != typeof e)
                  ? Er(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Pr(Er((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Pr(Er(t), "incompatibleTokens", ["a", "b", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "B":
                  case "BB":
                  case "BBB":
                    return (
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                  case "BBBBB":
                    return n.dayPeriod(t, {
                      width: "narrow",
                      context: "formatting",
                    });
                  default:
                    return (
                      n.dayPeriod(t, {
                        width: "wide",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.dayPeriod(t, { width: "narrow", context: "formatting" })
                    );
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCHours(te(n), 0, 0, 0), t;
              },
            },
          ]),
          n && Tr(e.prototype, n),
          a
        );
      })(Dt);
      function Rr(t) {
        return (
          (Rr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Rr(t)
        );
      }
      function Br(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Dr(t, e) {
        return (
          (Dr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Dr(t, e)
        );
      }
      function Mr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ur(t) {
        return (
          (Ur = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ur(t)
        );
      }
      function qr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Yr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Dr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ur(r);
              if (o) {
                var n = Ur(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Rr(e) && "function" != typeof e)
                  ? Mr(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            qr(Mr((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            qr(Mr(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "h":
                    return Zt(Wt.hour12h, t);
                  case "ho":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 12;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                var r = t.getUTCHours() >= 12;
                return (
                  r && n < 12
                    ? t.setUTCHours(n + 12, 0, 0, 0)
                    : r || 12 !== n
                    ? t.setUTCHours(n, 0, 0, 0)
                    : t.setUTCHours(0, 0, 0, 0),
                  t
                );
              },
            },
          ]),
          n && Br(e.prototype, n),
          a
        );
      })(Dt);
      function Nr(t) {
        return (
          (Nr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Nr(t)
        );
      }
      function Hr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Lr(t, e) {
        return (
          (Lr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Lr(t, e)
        );
      }
      function Wr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ir(t) {
        return (
          (Ir = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ir(t)
        );
      }
      function Qr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Fr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Lr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ir(r);
              if (o) {
                var n = Ir(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Nr(e) && "function" != typeof e)
                  ? Wr(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Qr(Wr((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            Qr(Wr(t), "incompatibleTokens", [
              "a",
              "b",
              "h",
              "K",
              "k",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "H":
                    return Zt(Wt.hour23h, t);
                  case "Ho":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 23;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCHours(n, 0, 0, 0), t;
              },
            },
          ]),
          n && Hr(e.prototype, n),
          a
        );
      })(Dt);
      function zr(t) {
        return (
          (zr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          zr(t)
        );
      }
      function Xr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Gr(t, e) {
        return (
          (Gr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Gr(t, e)
        );
      }
      function Zr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Jr(t) {
        return (
          (Jr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Jr(t)
        );
      }
      function Kr(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var $r = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Gr(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Jr(r);
              if (o) {
                var n = Jr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== zr(e) && "function" != typeof e)
                  ? Zr(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Kr(Zr((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            Kr(Zr(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "K":
                    return Zt(Wt.hour11h, t);
                  case "Ko":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 11;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return (
                  t.getUTCHours() >= 12 && n < 12
                    ? t.setUTCHours(n + 12, 0, 0, 0)
                    : t.setUTCHours(n, 0, 0, 0),
                  t
                );
              },
            },
          ]),
          n && Xr(e.prototype, n),
          a
        );
      })(Dt);
      function Vr(t) {
        return (
          (Vr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Vr(t)
        );
      }
      function to(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function eo(t, e) {
        return (
          (eo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          eo(t, e)
        );
      }
      function no(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ro(t) {
        return (
          (ro = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ro(t)
        );
      }
      function oo(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var io = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && eo(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = ro(r);
              if (o) {
                var n = ro(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Vr(e) && "function" != typeof e)
                  ? no(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            oo(no((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            oo(no(t), "incompatibleTokens", [
              "a",
              "b",
              "h",
              "H",
              "K",
              "t",
              "T",
            ]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "k":
                    return Zt(Wt.hour24h, t);
                  case "ko":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 1 && e <= 24;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                var r = n <= 24 ? n % 24 : n;
                return t.setUTCHours(r, 0, 0, 0), t;
              },
            },
          ]),
          n && to(e.prototype, n),
          a
        );
      })(Dt);
      function ao(t) {
        return (
          (ao =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ao(t)
        );
      }
      function uo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function co(t, e) {
        return (
          (co =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          co(t, e)
        );
      }
      function fo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function lo(t) {
        return (
          (lo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          lo(t)
        );
      }
      function so(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var po = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && co(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = lo(r);
              if (o) {
                var n = lo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== ao(e) && "function" != typeof e)
                  ? fo(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            so(fo((t = i.call.apply(i, [this].concat(n)))), "priority", 60),
            so(fo(t), "incompatibleTokens", ["t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "m":
                    return Zt(Wt.minute, t);
                  case "mo":
                    return n.ordinalNumber(t, { unit: "minute" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 59;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCMinutes(n, 0, 0), t;
              },
            },
          ]),
          n && uo(e.prototype, n),
          a
        );
      })(Dt);
      function yo(t) {
        return (
          (yo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          yo(t)
        );
      }
      function bo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ho(t, e) {
        return (
          (ho =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ho(t, e)
        );
      }
      function mo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function vo(t) {
        return (
          (vo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          vo(t)
        );
      }
      function go(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var wo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ho(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = vo(r);
              if (o) {
                var n = vo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== yo(e) && "function" != typeof e)
                  ? mo(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            go(mo((t = i.call.apply(i, [this].concat(n)))), "priority", 50),
            go(mo(t), "incompatibleTokens", ["t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e, n) {
                switch (e) {
                  case "s":
                    return Zt(Wt.second, t);
                  case "so":
                    return n.ordinalNumber(t, { unit: "second" });
                  default:
                    return $t(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return e >= 0 && e <= 59;
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCSeconds(n, 0), t;
              },
            },
          ]),
          n && bo(e.prototype, n),
          a
        );
      })(Dt);
      function Ao(t) {
        return (
          (Ao =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Ao(t)
        );
      }
      function Oo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function So(t, e) {
        return (
          (So =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          So(t, e)
        );
      }
      function xo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Co(t) {
        return (
          (Co = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Co(t)
        );
      }
      function To(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var ko = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && So(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Co(r);
              if (o) {
                var n = Co(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ao(e) && "function" != typeof e)
                  ? xo(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            To(xo((t = i.call.apply(i, [this].concat(n)))), "priority", 30),
            To(xo(t), "incompatibleTokens", ["t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                return Gt($t(e.length, t), function (t) {
                  return Math.floor(t * Math.pow(10, 3 - e.length));
                });
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCMilliseconds(n), t;
              },
            },
          ]) && Oo(e.prototype, n),
          a
        );
      })(Dt);
      function Eo(t) {
        return (
          (Eo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Eo(t)
        );
      }
      function jo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Po(t, e) {
        return (
          (Po =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Po(t, e)
        );
      }
      function _o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ro(t) {
        return (
          (Ro = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ro(t)
        );
      }
      function Bo(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Do = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Po(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = Ro(r);
              if (o) {
                var n = Ro(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Eo(e) && "function" != typeof e)
                  ? _o(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Bo(_o((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Bo(_o(t), "incompatibleTokens", ["t", "T", "x"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                switch (e) {
                  case "X":
                    return Jt(It, t);
                  case "XX":
                    return Jt(Qt, t);
                  case "XXXX":
                    return Jt(Ft, t);
                  case "XXXXX":
                    return Jt(Xt, t);
                  default:
                    return Jt(zt, t);
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
              },
            },
          ]) && jo(e.prototype, n),
          a
        );
      })(Dt);
      function Mo(t) {
        return (
          (Mo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Mo(t)
        );
      }
      function Uo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function qo(t, e) {
        return (
          (qo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          qo(t, e)
        );
      }
      function Yo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function No(t) {
        return (
          (No = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          No(t)
        );
      }
      function Ho(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Lo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && qo(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = No(r);
              if (o) {
                var n = No(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Mo(e) && "function" != typeof e)
                  ? Yo(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Ho(Yo((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Ho(Yo(t), "incompatibleTokens", ["t", "T", "X"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                switch (e) {
                  case "x":
                    return Jt(It, t);
                  case "xx":
                    return Jt(Qt, t);
                  case "xxxx":
                    return Jt(Ft, t);
                  case "xxxxx":
                    return Jt(Xt, t);
                  default:
                    return Jt(zt, t);
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
              },
            },
          ]) && Uo(e.prototype, n),
          a
        );
      })(Dt);
      function Wo(t) {
        return (
          (Wo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Wo(t)
        );
      }
      function Io(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Qo(t, e) {
        return (
          (Qo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Qo(t, e)
        );
      }
      function Fo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function zo(t) {
        return (
          (zo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          zo(t)
        );
      }
      function Xo(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var Go = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Qo(t, e);
        })(a, t);
        var e,
          n,
          r,
          o,
          i =
            ((r = a),
            (o = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                e = zo(r);
              if (o) {
                var n = zo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Wo(e) && "function" != typeof e)
                  ? Fo(t)
                  : e;
              })(this, t);
            });
        function a() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            Xo(Fo((t = i.call.apply(i, [this].concat(n)))), "priority", 40),
            Xo(Fo(t), "incompatibleTokens", "*"),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t) {
                return Kt(t);
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return [new Date(1e3 * n), { timestampIsSet: !0 }];
              },
            },
          ]) && Io(e.prototype, n),
          a
        );
      })(Dt);
      function Zo(t) {
        return (
          (Zo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Zo(t)
        );
      }
      function Jo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ko(t, e) {
        return (
          (Ko =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ko(t, e)
        );
      }
      function $o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Vo(t) {
        return (
          (Vo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Vo(t)
        );
      }
      function ti(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var ei = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Ko(t, e);
          })(a, t);
          var e,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = Vo(r);
                if (o) {
                  var n = Vo(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== Zo(e) && "function" != typeof e)
                    ? $o(t)
                    : e;
                })(this, t);
              });
          function a() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, a);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return (
              ti($o((t = i.call.apply(i, [this].concat(n)))), "priority", 20),
              ti($o(t), "incompatibleTokens", "*"),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "parse",
                value: function (t) {
                  return Kt(t);
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return [new Date(n), { timestampIsSet: !0 }];
                },
              },
            ]) && Jo(e.prototype, n),
            a
          );
        })(Dt),
        ni = {
          G: new Lt(),
          y: new fe(),
          Y: new he(),
          R: new Se(),
          u: new Pe(),
          Q: new qe(),
          q: new Qe(),
          M: new Ke(),
          L: new on(),
          w: new pn(),
          I: new gn(),
          d: new En(),
          D: new Mn(),
          E: new In(),
          e: new Jn(),
          c: new rr(),
          i: new lr(),
          a: new mr(),
          b: new xr(),
          B: new _r(),
          h: new Yr(),
          H: new Fr(),
          K: new $r(),
          k: new io(),
          m: new po(),
          s: new wo(),
          S: new ko(),
          X: new Do(),
          x: new Lo(),
          t: new Go(),
          T: new ei(),
        };
      function ri(t) {
        return (
          (ri =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ri(t)
        );
      }
      function oi(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ii(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ii(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function ii(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var ai = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ui = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ci = /^'([^]*?)'?$/,
        fi = /''/g,
        li = /\S/,
        si = /[a-zA-Z]/;
      function pi(e, n, r, u) {
        var c, f, l, p, y, d, b, h, m, v, g, w, A, O, S, x, C, T;
        t(3, arguments);
        var k = String(e),
          E = String(n),
          j = s(),
          P =
            null !==
              (c =
                null !== (f = null == u ? void 0 : u.locale) && void 0 !== f
                  ? f
                  : j.locale) && void 0 !== c
              ? c
              : X;
        if (!P.match)
          throw new RangeError("locale must contain match property");
        var B = i(
          null !==
            (l =
              null !==
                (p =
                  null !==
                    (y =
                      null !==
                        (d = null == u ? void 0 : u.firstWeekContainsDate) &&
                      void 0 !== d
                        ? d
                        : null == u ||
                          null === (b = u.locale) ||
                          void 0 === b ||
                          null === (h = b.options) ||
                          void 0 === h
                        ? void 0
                        : h.firstWeekContainsDate) && void 0 !== y
                    ? y
                    : j.firstWeekContainsDate) && void 0 !== p
                ? p
                : null === (m = j.locale) ||
                  void 0 === m ||
                  null === (v = m.options) ||
                  void 0 === v
                ? void 0
                : v.firstWeekContainsDate) && void 0 !== l
            ? l
            : 1
        );
        if (!(B >= 1 && B <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively"
          );
        var D = i(
          null !==
            (g =
              null !==
                (w =
                  null !==
                    (A =
                      null !== (O = null == u ? void 0 : u.weekStartsOn) &&
                      void 0 !== O
                        ? O
                        : null == u ||
                          null === (S = u.locale) ||
                          void 0 === S ||
                          null === (x = S.options) ||
                          void 0 === x
                        ? void 0
                        : x.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (C = j.locale) ||
                  void 0 === C ||
                  null === (T = C.options) ||
                  void 0 === T
                ? void 0
                : T.weekStartsOn) && void 0 !== g
            ? g
            : 0
        );
        if (!(D >= 0 && D <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if ("" === E) return "" === k ? o(r) : new Date(NaN);
        var Y,
          N = { firstWeekContainsDate: B, weekStartsOn: D, locale: P },
          H = [new Rt()],
          L = E.match(ui)
            .map(function (t) {
              var e = t[0];
              return e in _ ? (0, _[e])(t, P.formatLong) : t;
            })
            .join("")
            .match(ai),
          W = [],
          I = oi(L);
        try {
          var Q = function () {
            var t = Y.value;
            (null != u && u.useAdditionalWeekYearTokens) || !U(t) || q(t, E, e),
              (null != u && u.useAdditionalDayOfYearTokens) ||
                !M(t) ||
                q(t, E, e);
            var n = t[0],
              r = ni[n];
            if (r) {
              var o = r.incompatibleTokens;
              if (Array.isArray(o)) {
                var i = W.find(function (t) {
                  return o.includes(t.token) || t.token === n;
                });
                if (i)
                  throw new RangeError(
                    "The format string mustn't contain `"
                      .concat(i.fullToken, "` and `")
                      .concat(t, "` at the same time")
                  );
              } else if ("*" === r.incompatibleTokens && W.length > 0)
                throw new RangeError(
                  "The format string mustn't contain `".concat(
                    t,
                    "` and any other token at the same time"
                  )
                );
              W.push({ token: n, fullToken: t });
              var a = r.run(k, t, P.match, N);
              if (!a) return { v: new Date(NaN) };
              H.push(a.setter), (k = a.rest);
            } else {
              if (n.match(si))
                throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                    n +
                    "`"
                );
              if (
                ("''" === t
                  ? (t = "'")
                  : "'" === n && (t = t.match(ci)[1].replace(fi, "'")),
                0 !== k.indexOf(t))
              )
                return { v: new Date(NaN) };
              k = k.slice(t.length);
            }
          };
          for (I.s(); !(Y = I.n()).done; ) {
            var F = Q();
            if ("object" === ri(F)) return F.v;
          }
        } catch (t) {
          I.e(t);
        } finally {
          I.f();
        }
        if (k.length > 0 && li.test(k)) return new Date(NaN);
        var z = H.map(function (t) {
            return t.priority;
          })
            .sort(function (t, e) {
              return e - t;
            })
            .filter(function (t, e, n) {
              return n.indexOf(t) === e;
            })
            .map(function (t) {
              return H.filter(function (e) {
                return e.priority === t;
              }).sort(function (t, e) {
                return e.subPriority - t.subPriority;
              });
            })
            .map(function (t) {
              return t[0];
            }),
          G = o(r);
        if (isNaN(G.getTime())) return new Date(NaN);
        var Z,
          J = a(G, R(G)),
          K = {},
          $ = oi(z);
        try {
          for ($.s(); !(Z = $.n()).done; ) {
            var V = Z.value;
            if (!V.validate(J, N)) return new Date(NaN);
            var tt = V.set(J, K, N);
            Array.isArray(tt) ? ((J = tt[0]), gt(K, tt[1])) : (J = tt);
          }
        } catch (t) {
          $.e(t);
        } finally {
          $.f();
        }
        return J;
      }
      function yi(e, n) {
        var r, a, u, c, f, l, p, y;
        t(1, arguments);
        var d = s(),
          b = i(
            null !==
              (r =
                null !==
                  (a =
                    null !==
                      (u =
                        null !== (c = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== c
                          ? c
                          : null == n ||
                            null === (f = n.locale) ||
                            void 0 === f ||
                            null === (l = f.options) ||
                            void 0 === l
                          ? void 0
                          : l.weekStartsOn) && void 0 !== u
                      ? u
                      : d.weekStartsOn) && void 0 !== a
                  ? a
                  : null === (p = d.locale) ||
                    void 0 === p ||
                    null === (y = p.options) ||
                    void 0 === y
                  ? void 0
                  : y.weekStartsOn) && void 0 !== r
              ? r
              : 0
          );
        if (!(b >= 0 && b <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        var h = o(e),
          m = h.getDay(),
          v = (m < b ? 7 : 0) + m - b;
        return h.setDate(h.getDate() - v), h.setHours(0, 0, 0, 0), h;
      }
      function di(e, n) {
        return (
          t(1, arguments),
          (function (e, n, r) {
            t(2, arguments);
            var o = yi(e, r),
              i = yi(n, r);
            return o.getTime() === i.getTime();
          })(e, Date.now(), n)
        );
      }
      const bi = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = "Inbox"), n.appendChild(r), null != e))
            for (let t = 0; t < e.length; t++)
              if (di(pi(e[t].dueDate, "MM/dd/yyyy", new Date()))) {
                const r = document.createElement("div");
                r.setAttribute("class", "task-div");
                const o = document.createElement("button");
                o.setAttribute("class", "circle-btn"),
                  o.setAttribute("data-id", e[t].idNo);
                const i = document.createElement("p");
                i.textContent = e[t].title;
                const a = document.createElement("p");
                (a.textContent = e[t].dueDate),
                  r.appendChild(o),
                  r.appendChild(i),
                  r.appendChild(a),
                  n.appendChild(r);
              }
          return n.outerHTML;
        },
        hi = (() => {
          const t = document.querySelector("#right-content"),
            e = () => {
              (t.innerHTML = bt(tt.projectStorage, tt.taskStorage)), ht();
            },
            n = () => {
              (t.innerHTML = mt(tt.projectStorage, tt.taskStorage)), vt();
            },
            r = () => {
              (t.innerHTML = bi(tt.projectStorage, tt.taskStorage)), vt();
            };
          return {
            init: () => {
              e(),
                (() => {
                  const t = document.querySelector("#inbox"),
                    o = document.querySelector("#today"),
                    i = document.querySelector("#this-week");
                  t.addEventListener("click", () => {
                    e();
                  }),
                    o.addEventListener("click", () => {
                      n();
                    }),
                    i.addEventListener("click", () => {
                      r();
                    });
                })();
            },
            testDisplay: () => {
              alert("success");
            },
            refreshContent: (t) => {
              switch (t) {
                case "default":
                default:
                  e();
                  break;
                case "today":
                  n();
                  break;
                case "this-week":
                  r();
              }
            },
          };
        })();
      hi.init();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzhsQixFQUFRMU4saUJBQWlCLFNBQVMsS0FDaENxTixHQUFjLElBSWhCTSxFQUFRM04saUJBQWlCLFNBQVMsS0FDaEN1TixHQUFjLElBR2hCSyxFQUFXNU4saUJBQWlCLFNBQVMsS0FDbkN3TixHQUFpQixHQUNqQixFQU1GSyxFQUFjLEVBS2RDLFlBbkRrQixLQUNsQkMsTUFBTSxVQUFVLEVBbURoQkMsZUFoRHNCalAsSUFDdEIsT0FBUUEsR0FDTixJQUFLLFVBWUwsUUFDRXNPLElBQ0EsTUFWRixJQUFLLFFBQ0hFLElBQ0EsTUFFRixJQUFLLFlBQ0hDLElBTUosRUFpQ0gsRUFqRmUsR0NMaEIsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9TZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9FcmFQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9RdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL01vbnRoUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3NldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbERheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPRGF5UGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zZXRVVENJU09EYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxdG8xMlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMHRvMjNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxVG8yNFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9NaW51dGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvU2Vjb25kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVXaXRoWlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9JU09UaW1lem9uZVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luYm94LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXItbW9udGguc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWEzZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQtc2VjdGlvbiB7XFxuICBmbGV4OiAxODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZWJmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEuODtcXG59XFxuXFxuI2xlZnQtY29udGVudCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5saSNpbmJveCxcXG5saSN0b2RheSxcXG5saSN0aGlzLXdlZWssXFxuI2FkZC1wcm9qZWN0LFxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxufVxcblxcbmxpI2luYm94OmhvdmVyLFxcbmxpI3RvZGF5OmhvdmVyLFxcbmxpI3RoaXMtd2Vlazpob3ZlcixcXG4jYWRkLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSNpbmJveCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5saSN0b2RheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5saSN0aGlzLXdlZWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuI2xlZnQtY29udGVudCBoMyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHtcXG4gIGZsZXg6IDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCAjcmlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVzs7RUFFWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7RUFLRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQTRDO0FBQzlDOztBQUVBO0VBQ0UseURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UseURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5REFBMkM7QUFDN0M7O0FBRUE7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZsZXg6IDI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG5cXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jY29udGVudC1zZWN0aW9uIHtcXG4gIGZsZXg6IDE4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2xlZnQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlYmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMS44O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmxpI2luYm94LFxcbmxpI3RvZGF5LFxcbmxpI3RoaXMtd2VlayxcXG4jYWRkLXByb2plY3QsXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuXFxubGkjaW5ib3g6aG92ZXIsXFxubGkjdG9kYXk6aG92ZXIsXFxubGkjdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpI2luYm94IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2luYm94LnN2Z1xcXCIpO1xcbn1cXG5cXG5saSN0b2RheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcXFwiKTtcXG59XFxuXFxubGkjdGhpcy13ZWVrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2NhbGVuZGFyLW1vbnRoLnN2Z1xcXCIpO1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IGgzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZm9ybWF0LWxpc3QtYnVsbGV0ZWQuc3ZnXFxcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXFxcIik7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHtcXG4gIGZsZXg6IDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCAjcmlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cblxuY29uc3QgVGFzayA9IChpZE5vLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gIHJldHVybiB7IGlkTm8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gIC8vIGNvcHkgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSB0byB0aGUgdmFyaWFibGVzIGlmIHRoZXkgZXhpc3RcbiAgbGV0IHByb2plY3RTdG9yYWdlID0gW107XG4gIGxldCB0YXNrU3RvcmFnZSA9IFtdO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIpICE9PSBudWxsKSB7XG4gICAgcHJvamVjdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIikpO1xuICB9XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza1N0b3JhZ2VcIikgIT09IG51bGwpIHtcbiAgICB0YXNrU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrU3RvcmFnZVwiKSk7XG4gIH1cblxuICAvLyBjb3B5IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSB2YXJpYWJsZXMgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza1N0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkodGFza1N0b3JhZ2UpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RTdG9yYWdlKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWRObywgcHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1N0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrU3RvcmFnZVtpXS5pZE5vID09IHRhc2tJZE5vKSB7XG4gICAgICAgIHRhc2tTdG9yYWdlLnNwbGljZShpLCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGRpc3BsYXkucmVmcmVzaENvbnRlbnQocHJvamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRlc3RJdGVtID0gVGFzayhcbiAgICBEYXRlLm5vdygpLFxuICAgIFwiNCB0ZXN0IHRpdGxlXCIsXG4gICAgXCI0IHRlc3QgZGVzY3JpcHRpb25cIixcbiAgICBmb3JtYXQobmV3IERhdGUoKSwgXCJNTS9kZC95eXl5XCIpLFxuICAgIFwiNCB0ZXN0IHByaW9yaXR5XCIsXG4gICAgXCJkZWZhdWx0XCJcbiAgKTtcbiAgY29uc29sZS5sb2codGVzdEl0ZW0pO1xuXG4gIHRhc2tTdG9yYWdlLnB1c2godGVzdEl0ZW0pO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RTdG9yYWdlLFxuICAgIHRhc2tTdG9yYWdlLFxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgICBkZWxldGVUYXNrLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgaW5ib3ggPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza3NbaV0uaWRObyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheS50ZXN0RGlzcGxheSgpO1xuXG4gICAgcmV0dXJuIGluYm94RGl2Lm91dGVySFRNTDtcbiAgfTtcblxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2lyY2xlLWJ0blwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgZGVsZXRlIHRhc2tcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUYXNrKGRhdGFJZCwgXCJkZWZhdWx0XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5ib3g7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBkYXRlTm93ID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiTU0vZGQveXl5eVwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb21wYXJlIGRhdGUgYW5kIGNoZWNrIGlmIGR1ZURhdGUgaXMgZXF1YWwgdG8gdG9kYXlcbiAgICAgICAgaWYgKHRhc2tzW2ldLmR1ZURhdGUgPT0gZGF0ZU5vdykge1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBjYWxsIHRoZSBkZWxldGUgdGFza1xuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRhc2soZGF0YUlkLCBcInRvZGF5XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFRJTUVaT05FX1VOSVRfUFJJT1JJVFkgPSAxMDtcbmV4cG9ydCB2YXIgU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2V0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXR0ZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3ViUHJpb3JpdHlcIiwgMCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2V0dGVyLCBbe1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfdXRjRGF0ZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZXR0ZXI7XG59KCk7XG5leHBvcnQgdmFyIFZhbHVlU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU2V0dGVyKSB7XG4gIF9pbmhlcml0cyhWYWx1ZVNldHRlciwgX1NldHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihWYWx1ZVNldHRlcik7XG5cbiAgZnVuY3Rpb24gVmFsdWVTZXR0ZXIodmFsdWUsIHZhbGlkYXRlVmFsdWUsIHNldFZhbHVlLCBwcmlvcml0eSwgc3ViUHJpb3JpdHkpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWVTZXR0ZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIF90aGlzLnZhbGlkYXRlVmFsdWUgPSB2YWxpZGF0ZVZhbHVlO1xuICAgIF90aGlzLnNldFZhbHVlID0gc2V0VmFsdWU7XG4gICAgX3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGlmIChzdWJQcmlvcml0eSkge1xuICAgICAgX3RoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmFsdWVTZXR0ZXIsIFt7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKHV0Y0RhdGUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlVmFsdWUodXRjRGF0ZSwgdGhpcy52YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQodXRjRGF0ZSwgZmxhZ3MsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKHV0Y0RhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmFsdWVTZXR0ZXI7XG59KFNldHRlcik7XG5leHBvcnQgdmFyIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU2V0dGVyMikge1xuICBfaW5oZXJpdHMoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIsIF9TZXR0ZXIyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlcik7XG5cbiAgZnVuY3Rpb24gRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJwcmlvcml0eVwiLCBUSU1FWk9ORV9VTklUX1BSSU9SSVRZKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwic3ViUHJpb3JpdHlcIiwgLTEpO1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciwgW3tcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBmbGFncykge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgICAgY29udmVydGVkRGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRhdGUuZ2V0VVRDTW9udGgoKSwgZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgICAgY29udmVydGVkRGF0ZS5zZXRIb3VycyhkYXRlLmdldFVUQ0hvdXJzKCksIGRhdGUuZ2V0VVRDTWludXRlcygpLCBkYXRlLmdldFVUQ1NlY29uZHMoKSwgZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgICByZXR1cm4gY29udmVydGVkRGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXI7XG59KFNldHRlcik7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBWYWx1ZVNldHRlciB9IGZyb20gXCIuL1NldHRlci5qc1wiO1xuZXhwb3J0IHZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcnNlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFyc2VyLCBbe1xuICAgIGtleTogXCJydW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNldHRlcjogbmV3IFZhbHVlU2V0dGVyKHJlc3VsdC52YWx1ZSwgdGhpcy52YWxpZGF0ZSwgdGhpcy5zZXQsIHRoaXMucHJpb3JpdHksIHRoaXMuc3ViUHJpb3JpdHkpLFxuICAgICAgICByZXN0OiByZXN1bHQucmVzdFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX3V0Y0RhdGUsIF92YWx1ZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXJzZXI7XG59KCk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmV4cG9ydCB2YXIgRXJhUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhFcmFQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRXJhUGFyc2VyKTtcblxuICBmdW5jdGlvbiBFcmFQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVyYVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDE0MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnUicsICd1JywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFcmFQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBBRCwgQkNcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgIGNhc2UgJ0dHJzpcbiAgICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBBLCBCXG5cbiAgICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJhUGFyc2VyO1xufShQYXJzZXIpOyIsImV4cG9ydCB2YXIgbnVtZXJpY1BhdHRlcm5zID0ge1xuICBtb250aDogL14oMVswLTJdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTJcbiAgZGF0ZTogL14oM1swLTFdfFswLTJdP1xcZCkvLFxuICAvLyAwIHRvIDMxXG4gIGRheU9mWWVhcjogL14oMzZbMC02XXwzWzAtNV1cXGR8WzAtMl0/XFxkP1xcZCkvLFxuICAvLyAwIHRvIDM2NlxuICB3ZWVrOiAvXig1WzAtM118WzAtNF0/XFxkKS8sXG4gIC8vIDAgdG8gNTNcbiAgaG91cjIzaDogL14oMlswLTNdfFswLTFdP1xcZCkvLFxuICAvLyAwIHRvIDIzXG4gIGhvdXIyNGg6IC9eKDJbMC00XXxbMC0xXT9cXGQpLyxcbiAgLy8gMCB0byAyNFxuICBob3VyMTFoOiAvXigxWzAtMV18MD9cXGQpLyxcbiAgLy8gMCB0byAxMVxuICBob3VyMTJoOiAvXigxWzAtMl18MD9cXGQpLyxcbiAgLy8gMCB0byAxMlxuICBtaW51dGU6IC9eWzAtNV0/XFxkLyxcbiAgLy8gMCB0byA1OVxuICBzZWNvbmQ6IC9eWzAtNV0/XFxkLyxcbiAgLy8gMCB0byA1OVxuICBzaW5nbGVEaWdpdDogL15cXGQvLFxuICAvLyAwIHRvIDlcbiAgdHdvRGlnaXRzOiAvXlxcZHsxLDJ9LyxcbiAgLy8gMCB0byA5OVxuICB0aHJlZURpZ2l0czogL15cXGR7MSwzfS8sXG4gIC8vIDAgdG8gOTk5XG4gIGZvdXJEaWdpdHM6IC9eXFxkezEsNH0vLFxuICAvLyAwIHRvIDk5OTlcbiAgYW55RGlnaXRzU2lnbmVkOiAvXi0/XFxkKy8sXG4gIHNpbmdsZURpZ2l0U2lnbmVkOiAvXi0/XFxkLyxcbiAgLy8gMCB0byA5LCAtMCB0byAtOVxuICB0d29EaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSwyfS8sXG4gIC8vIDAgdG8gOTksIC0wIHRvIC05OVxuICB0aHJlZURpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDN9LyxcbiAgLy8gMCB0byA5OTksIC0wIHRvIC05OTlcbiAgZm91ckRpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDR9LyAvLyAwIHRvIDk5OTksIC0wIHRvIC05OTk5XG5cbn07XG5leHBvcnQgdmFyIHRpbWV6b25lUGF0dGVybnMgPSB7XG4gIGJhc2ljT3B0aW9uYWxNaW51dGVzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSk/fFovLFxuICBiYXNpYzogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pfFovLFxuICBiYXNpY09wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pKChcXGR7Mn0pKT98Wi8sXG4gIGV4dGVuZGVkOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pfFovLFxuICBleHRlbmRlZE9wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KSg6KFxcZHsyfSkpP3xaL1xufTsiLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSwgbWlsbGlzZWNvbmRzSW5TZWNvbmQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZShwYXJzZUZuUmVzdWx0LCBtYXBGbikge1xuICBpZiAoIXBhcnNlRm5SZXN1bHQpIHtcbiAgICByZXR1cm4gcGFyc2VGblJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IG1hcEZuKHBhcnNlRm5SZXN1bHQudmFsdWUpLFxuICAgIHJlc3Q6IHBhcnNlRm5SZXN1bHQucmVzdFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtZXJpY1BhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHBhcnNlSW50KG1hdGNoUmVzdWx0WzBdLCAxMCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lem9uZVBhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBJbnB1dCBpcyAnWidcblxuXG4gIGlmIChtYXRjaFJlc3VsdFswXSA9PT0gJ1onKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZSgxKVxuICAgIH07XG4gIH1cblxuICB2YXIgc2lnbiA9IG1hdGNoUmVzdWx0WzFdID09PSAnKycgPyAxIDogLTE7XG4gIHZhciBob3VycyA9IG1hdGNoUmVzdWx0WzJdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMl0sIDEwKSA6IDA7XG4gIHZhciBtaW51dGVzID0gbWF0Y2hSZXN1bHRbM10gPyBwYXJzZUludChtYXRjaFJlc3VsdFszXSwgMTApIDogMDtcbiAgdmFyIHNlY29uZHMgPSBtYXRjaFJlc3VsdFs1XSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzVdLCAxMCkgOiAwO1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIG1pbGxpc2Vjb25kc0luU2Vjb25kKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aClcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5hbnlEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0cyhuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzLCBkYXRlU3RyaW5nKTtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cCgnXlxcXFxkezEsJyArIG4gKyAnfScpLCBkYXRlU3RyaW5nKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0c1NpZ25lZChuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdFNpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cCgnXi0/XFxcXGR7MSwnICsgbiArICd9JyksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGF5UGVyaW9kRW51bVRvSG91cnMoZGF5UGVyaW9kKSB7XG4gIHN3aXRjaCAoZGF5UGVyaW9kKSB7XG4gICAgY2FzZSAnbW9ybmluZyc6XG4gICAgICByZXR1cm4gNDtcblxuICAgIGNhc2UgJ2V2ZW5pbmcnOlxuICAgICAgcmV0dXJuIDE3O1xuXG4gICAgY2FzZSAncG0nOlxuICAgIGNhc2UgJ25vb24nOlxuICAgIGNhc2UgJ2FmdGVybm9vbic6XG4gICAgICByZXR1cm4gMTI7XG5cbiAgICBjYXNlICdhbSc6XG4gICAgY2FzZSAnbWlkbmlnaHQnOlxuICAgIGNhc2UgJ25pZ2h0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUd29EaWdpdFllYXIodHdvRGlnaXRZZWFyLCBjdXJyZW50WWVhcikge1xuICB2YXIgaXNDb21tb25FcmEgPSBjdXJyZW50WWVhciA+IDA7IC8vIEFic29sdXRlIG51bWJlciBvZiB0aGUgY3VycmVudCB5ZWFyOlxuICAvLyAxIC0+IDEgQUNcbiAgLy8gMCAtPiAxIEJDXG4gIC8vIC0xIC0+IDIgQkNcblxuICB2YXIgYWJzQ3VycmVudFllYXIgPSBpc0NvbW1vbkVyYSA/IGN1cnJlbnRZZWFyIDogMSAtIGN1cnJlbnRZZWFyO1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmIChhYnNDdXJyZW50WWVhciA8PSA1MCkge1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciB8fCAxMDA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJhbmdlRW5kID0gYWJzQ3VycmVudFllYXIgKyA1MDtcbiAgICB2YXIgcmFuZ2VFbmRDZW50dXJ5ID0gTWF0aC5mbG9vcihyYW5nZUVuZCAvIDEwMCkgKiAxMDA7XG4gICAgdmFyIGlzUHJldmlvdXNDZW50dXJ5ID0gdHdvRGlnaXRZZWFyID49IHJhbmdlRW5kICUgMTAwO1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciArIHJhbmdlRW5kQ2VudHVyeSAtIChpc1ByZXZpb3VzQ2VudHVyeSA/IDEwMCA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29tbW9uRXJhID8gcmVzdWx0IDogMSAtIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbi8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfUGF0dGVybnNcbi8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbi8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbi8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbi8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbi8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbi8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbi8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbmV4cG9ydCB2YXIgWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAndScsICd3JywgJ0knLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gJ3l5J1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDQsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBjYXNlICd5byc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuaXNUd29EaWdpdFllYXIgfHwgdmFsdWUueWVhciA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgY3VycmVudFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih2YWx1ZS55ZWFyLCBjdXJyZW50WWVhcik7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIobm9ybWFsaXplZFR3b0RpZ2l0WWVhciwgMCwgMSk7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgeWVhciA9ICEoJ2VyYScgaW4gZmxhZ3MpIHx8IGZsYWdzLmVyYSA9PT0gMSA/IHZhbHVlLnllYXIgOiAxIC0gdmFsdWUueWVhcjtcbiAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFllYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBtYXBWYWx1ZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbi8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCB2YXIgTG9jYWxXZWVrWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxXZWVrWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihMb2NhbFdlZWtZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBMb2NhbFdlZWtZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbFdlZWtZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdRJywgJ3EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ2knLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsV2Vla1llYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gJ1lZJ1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdZJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDQsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBjYXNlICdZbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuaXNUd29EaWdpdFllYXIgfHwgdmFsdWUueWVhciA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgY3VycmVudFllYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHZhbHVlLmlzVHdvRGlnaXRZZWFyKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkVHdvRGlnaXRZZWFyID0gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHZhbHVlLnllYXIsIGN1cnJlbnRZZWFyKTtcbiAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcihub3JtYWxpemVkVHdvRGlnaXRZZWFyLCAwLCBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHllYXIgPSAhKCdlcmEnIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvY2FsV2Vla1llYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG5cbmV4cG9ydCB2YXIgSVNPV2Vla1llYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT1dlZWtZZWFyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1dlZWtZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09XZWVrWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPV2Vla1llYXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0cnLCAneScsICdZJywgJ3UnLCAnUScsICdxJywgJ00nLCAnTCcsICd3JywgJ2QnLCAnRCcsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT1dlZWtZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgICAgaWYgKHRva2VuID09PSAnUicpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgZmlyc3RXZWVrT2ZZZWFyID0gbmV3IERhdGUoMCk7XG4gICAgICBmaXJzdFdlZWtPZlllYXIuc2V0VVRDRnVsbFllYXIodmFsdWUsIDAsIDQpO1xuICAgICAgZmlyc3RXZWVrT2ZZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1dlZWtZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRXh0ZW5kZWRZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhFeHRlbmRlZFllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRXh0ZW5kZWRZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBFeHRlbmRlZFllYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGVkWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnRycsICd5JywgJ1knLCAnUicsICd3JywgJ0knLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV4dGVuZGVkWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbiA9PT0gJ3UnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQoNCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXh0ZW5kZWRZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgUXVhcnRlclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoUXVhcnRlclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihRdWFydGVyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBRdWFydGVyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWFydGVyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTIwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdNJywgJ0wnLCAndycsICdJJywgJ2QnLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUXVhcnRlclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgICAgY2FzZSAnUW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRdWFydGVyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lUXVhcnRlclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMjApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdRJywgJ00nLCAnTCcsICd3JywgJ0knLCAnZCcsICdEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lUXVhcnRlclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgICAgY2FzZSAncW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgICAgY2FzZSAncXFxcSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lUXVhcnRlclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuZXhwb3J0IHZhciBNb250aFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTW9udGhQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTW9udGhQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIE1vbnRoUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb250aFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAnTCcsICd3JywgJ0knLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTEwKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb250aFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gMTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgICAgY2FzZSAnTW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb250aFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzLCBtYXBWYWx1ZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBTdGFuZEFsb25lTW9udGhQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVNb250aFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lTW9udGhQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFN0YW5kQWxvbmVNb250aFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZU1vbnRoUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTEwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ00nLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YW5kQWxvbmVNb250aFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gMTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgICAgY2FzZSAnTEwnOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgICAgY2FzZSAnTG8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgICAgY2FzZSAnTExMTCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lTW9udGhQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7IC8vIExvY2FsIHdlZWsgb2YgeWVhclxuXG5leHBvcnQgdmFyIExvY2FsV2Vla1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxXZWVrUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKExvY2FsV2Vla1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxXZWVrUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbFdlZWtQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnUicsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAnSScsICdkJywgJ0QnLCAnaScsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxXZWVrUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLndlZWssIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3dvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoc2V0VVRDV2VlayhkYXRlLCB2YWx1ZSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbFdlZWtQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eVdlZWssIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB3ZWVrID0gdG9JbnRlZ2VyKGRpcnR5V2Vlayk7XG4gIHZhciBkaWZmID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKSAtIHdlZWs7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIElTTyB3ZWVrIG9mIHllYXJcblxuZXhwb3J0IHZhciBJU09XZWVrUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09XZWVrUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1dlZWtQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1dlZWtQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1dlZWtQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnWScsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09XZWVrUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLndlZWssIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0lvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ0lTT1dlZWsoc2V0VVRDSVNPV2VlayhkYXRlLCB2YWx1ZSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09XZWVrUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENJU09XZWVrKGRpcnR5RGF0ZSwgZGlydHlJU09XZWVrKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgaXNvV2VlayA9IHRvSW50ZWdlcihkaXJ0eUlTT1dlZWspO1xuICB2YXIgZGlmZiA9IGdldFVUQ0lTT1dlZWsoZGF0ZSkgLSBpc29XZWVrO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBpc0xlYXBZZWFySW5kZXgsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xudmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG52YXIgREFZU19JTl9NT05USF9MRUFQX1lFQVIgPSBbMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07IC8vIERheSBvZiB0aGUgbW9udGhcblxuZXhwb3J0IHZhciBEYXRlUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXRlUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERhdGVQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERhdGVQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3ViUHJpb3JpdHlcIiwgMSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnUScsICd3JywgJ0knLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0ZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXRlLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdkbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKGRhdGUsIHZhbHVlKSB7XG4gICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIHZhciBpc0xlYXBZZWFyID0gaXNMZWFwWWVhckluZGV4KHllYXIpO1xuICAgICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIX0xFQVBfWUVBUlttb250aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0RhdGUodmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXRlUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMsIGlzTGVhcFllYXJJbmRleCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBEYXlPZlllYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKERheU9mWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXlPZlllYXJQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERheU9mWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF5T2ZZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN1YnByaW9yaXR5XCIsIDEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAnTScsICdMJywgJ3cnLCAnSScsICdkJywgJ0UnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERheU9mWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBjYXNlICdERCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmRheU9mWWVhciwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnRG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICB2YXIgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcblxuICAgICAgaWYgKGlzTGVhcFllYXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY1O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoMCwgdmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlPZlllYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ0RheShkaXJ0eURhdGUsIGRpcnR5RGF5LCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gdG9JbnRlZ2VyKGRpcnR5RGF5KTtcbiAgdmFyIGN1cnJlbnREYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIERheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgRGF5UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXlQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBUdWVcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgIGNhc2UgJ0VFJzpcbiAgICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUXG5cbiAgICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1XG5cbiAgICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdWVzZGF5XG5cbiAgICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZSA9IHNldFVUQ0RheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERheVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0RheSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zZXRVVENEYXkvaW5kZXguanNcIjsgLy8gTG9jYWwgZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBMb2NhbERheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTG9jYWxEYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ0UnLCAnaScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbERheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdmFyIHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgICByZXR1cm4gKHZhbHVlICsgb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA2KSAlIDcgKyB3aG9sZVdlZWtEYXlzO1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAzXG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICBjYXNlICdlZSc6XG4gICAgICAgICAgLy8gMDNcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAzcmRcblxuICAgICAgICBjYXNlICdlbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbERheVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0RheSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zZXRVVENEYXkvaW5kZXguanNcIjsgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnUicsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAnSScsICdkJywgJ0QnLCAnRScsICdpJywgJ2UnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdmFyIHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgICByZXR1cm4gKHZhbHVlICsgb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA2KSAlIDcgKyB3aG9sZVdlZWtEYXlzO1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAzXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICdjYyc6XG4gICAgICAgICAgLy8gMDNcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAzcmRcblxuICAgICAgICBjYXNlICdjbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENJU09EYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDSVNPRGF5L2luZGV4LmpzXCI7IC8vIElTTyBkYXkgb2Ygd2Vla1xuXG5leHBvcnQgdmFyIElTT0RheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT0RheVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSVNPRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09EYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdZJywgJ3UnLCAncScsICdRJywgJ00nLCAnTCcsICd3JywgJ2QnLCAnRCcsICdFJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPRGF5UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gNztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMlxuICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgY2FzZSAnaWknOlxuICAgICAgICAgIC8vIDAyXG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgICAvLyAybmRcblxuICAgICAgICBjYXNlICdpbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlXG5cbiAgICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVzZGF5XG5cbiAgICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA3O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENJU09EYXkoZGF0ZSwgdmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09EYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VVRDSVNPRGF5KGRpcnR5RGF0ZSwgZGlydHlEYXkpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXkgPSB0b0ludGVnZXIoZGlydHlEYXkpO1xuXG4gIGlmIChkYXkgJSA3ID09PSAwKSB7XG4gICAgZGF5ID0gZGF5IC0gNztcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgY3VycmVudERheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciByZW1haW5kZXIgPSBkYXkgJSA3O1xuICB2YXIgZGF5SW5kZXggPSAocmVtYWluZGVyICsgNykgJSA3O1xuICB2YXIgZGlmZiA9IChkYXlJbmRleCA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIGN1cnJlbnREYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgQU1QTVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoQU1QTVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBTVBNUGFyc2VyKTtcblxuICBmdW5jdGlvbiBBTVBNUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBTVBNUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2InLCAnQicsICdIJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFNUE1QYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnYWEnOlxuICAgICAgICBjYXNlICdhYWEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBTVBNUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBBTVBNTWlkbmlnaHRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEFNUE1NaWRuaWdodFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBTVBNTWlkbmlnaHRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEFNUE1NaWRuaWdodFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQU1QTU1pZG5pZ2h0UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnQicsICdIJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFNUE1NaWRuaWdodFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ2InOlxuICAgICAgICBjYXNlICdiYic6XG4gICAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlICdiYmJiJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFNUE1NaWRuaWdodFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjsgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuXG5leHBvcnQgdmFyIERheVBlcmlvZFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF5UGVyaW9kUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERheVBlcmlvZFBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRGF5UGVyaW9kUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXlQZXJpb2RQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA4MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnYScsICdiJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlQZXJpb2RQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgY2FzZSAnQkInOlxuICAgICAgICBjYXNlICdCQkInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnQkJCQic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlQZXJpb2RQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMXRvMTJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIxdG8xMlBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMXRvMTJQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIxdG8xMlBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjF0bzEyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0gnLCAnSycsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMXRvMTJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjEyaCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnaG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDEyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBpc1BNID0gZGF0ZS5nZXRVVENIb3VycygpID49IDEyO1xuXG4gICAgICBpZiAoaXNQTSAmJiB2YWx1ZSA8IDEyKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUgKyAxMiwgMCwgMCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKCFpc1BNICYmIHZhbHVlID09PSAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMXRvMTJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMHRvMjNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIwdG8yM1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMHRvMjNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIwdG8yM1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjB0bzIzUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICdoJywgJ0snLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjB0bzIzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyM2gsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0hvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMHRvMjNQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMFRvMTFQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIwVG8xMVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMFRvMTFQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIwVG8xMVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjBUbzExUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2gnLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMFRvMTFQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjExaCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnS28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBpc1BNID0gZGF0ZS5nZXRVVENIb3VycygpID49IDEyO1xuXG4gICAgICBpZiAoaXNQTSAmJiB2YWx1ZSA8IDEyKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUgKyAxMiwgMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhvdXIwVG8xMVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEhvdXIxVG8yNFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSG91cjFUbzI0UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhvdXIxVG8yNFBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSG91cjFUbzI0UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb3VyMVRvMjRQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA3MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnYScsICdiJywgJ2gnLCAnSCcsICdLJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMVRvMjRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjI0aCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAna28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDI0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBob3VycyA9IHZhbHVlIDw9IDI0ID8gdmFsdWUgJSAyNCA6IHZhbHVlO1xuICAgICAgZGF0ZS5zZXRVVENIb3Vycyhob3VycywgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjFUbzI0UGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgTWludXRlUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhNaW51dGVQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWludXRlUGFyc2VyKTtcblxuICBmdW5jdGlvbiBNaW51dGVQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbnV0ZVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDYwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWludXRlUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1pbnV0ZSwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnbW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW51dGVQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBTZWNvbmRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFNlY29uZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWNvbmRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFNlY29uZFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Vjb25kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWNvbmRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2Vjb25kLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdzbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA1OTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlY29uZFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhGcmFjdGlvbk9mU2Vjb25kUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUgKiBNYXRoLnBvdygxMCwgLXRva2VuLmxlbmd0aCArIDMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiOyAvLyBUaW1lem9uZSAoSVNPLTg2MDEuICswMDowMCBpcyBgJ1onYClcblxuZXhwb3J0IHZhciBJU09UaW1lem9uZVdpdGhaUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09UaW1lem9uZVdpdGhaUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1RpbWV6b25lV2l0aFpQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1RpbWV6b25lV2l0aFpQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1RpbWV6b25lV2l0aFpQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJywgJ3gnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPVGltZXpvbmVXaXRoWlBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbE1pbnV0ZXMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5iYXNpYywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnWFhYJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBpZiAoZmxhZ3MudGltZXN0YW1wSXNTZXQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPVGltZXpvbmVXaXRoWlBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgdGltZXpvbmVQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlVGltZXpvbmVQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7IC8vIFRpbWV6b25lIChJU08tODYwMSlcblxuZXhwb3J0IHZhciBJU09UaW1lem9uZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPVGltZXpvbmVQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSVNPVGltZXpvbmVQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1RpbWV6b25lUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09UaW1lem9uZVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnLCAnWCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09UaW1lem9uZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbE1pbnV0ZXMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5iYXNpYywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAneHh4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAneHh4JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBpZiAoZmxhZ3MudGltZXN0YW1wSXNTZXQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPVGltZXpvbmVQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFRpbWVzdGFtcFNlY29uZHNQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVGltZXN0YW1wU2Vjb25kc1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gVGltZXN0YW1wU2Vjb25kc1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXN0YW1wU2Vjb25kc1BhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDQwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgJyonKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaW1lc3RhbXBTZWNvbmRzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nKSB7XG4gICAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoX2RhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUgKiAxMDAwKSwge1xuICAgICAgICB0aW1lc3RhbXBJc1NldDogdHJ1ZVxuICAgICAgfV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVzdGFtcFNlY29uZHNQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAyMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsICcqJyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nKSB7XG4gICAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoX2RhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUpLCB7XG4gICAgICAgIHRpbWVzdGFtcElzU2V0OiB0cnVlXG4gICAgICB9XTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB7IEVyYVBhcnNlciB9IGZyb20gXCIuL0VyYVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgWWVhclBhcnNlciB9IGZyb20gXCIuL1llYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbFdlZWtZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09XZWVrWWVhclBhcnNlciB9IGZyb20gXCIuL0lTT1dlZWtZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBFeHRlbmRlZFllYXJQYXJzZXIgfSBmcm9tIFwiLi9FeHRlbmRlZFllYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IFF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9RdWFydGVyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciB9IGZyb20gXCIuL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBNb250aFBhcnNlciB9IGZyb20gXCIuL01vbnRoUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9TdGFuZEFsb25lTW9udGhQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1BhcnNlciB9IGZyb20gXCIuL0xvY2FsV2Vla1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1BhcnNlciB9IGZyb20gXCIuL0lTT1dlZWtQYXJzZXIuanNcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi9EYXRlUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlPZlllYXJQYXJzZXIgfSBmcm9tIFwiLi9EYXlPZlllYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IERheVBhcnNlciB9IGZyb20gXCIuL0RheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTG9jYWxEYXlQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbERheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09EYXlQYXJzZXIgfSBmcm9tIFwiLi9JU09EYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IEFNUE1QYXJzZXIgfSBmcm9tIFwiLi9BTVBNUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBBTVBNTWlkbmlnaHRQYXJzZXIgfSBmcm9tIFwiLi9BTVBNTWlkbmlnaHRQYXJzZXIuanNcIjtcbmltcG9ydCB7IERheVBlcmlvZFBhcnNlciB9IGZyb20gXCIuL0RheVBlcmlvZFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjF0bzEyUGFyc2VyIH0gZnJvbSBcIi4vSG91cjF0bzEyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBIb3VyMHRvMjNQYXJzZXIgfSBmcm9tIFwiLi9Ib3VyMHRvMjNQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIwVG8xMVBhcnNlciB9IGZyb20gXCIuL0hvdXIwVG8xMVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjFUbzI0UGFyc2VyIH0gZnJvbSBcIi4vSG91cjFUbzI0UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBNaW51dGVQYXJzZXIgfSBmcm9tIFwiLi9NaW51dGVQYXJzZXIuanNcIjtcbmltcG9ydCB7IFNlY29uZFBhcnNlciB9IGZyb20gXCIuL1NlY29uZFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRnJhY3Rpb25PZlNlY29uZFBhcnNlciB9IGZyb20gXCIuL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIuanNcIjtcbmltcG9ydCB7IElTT1RpbWV6b25lV2l0aFpQYXJzZXIgfSBmcm9tIFwiLi9JU09UaW1lem9uZVdpdGhaUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVBhcnNlciB9IGZyb20gXCIuL0lTT1RpbWV6b25lUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vVGltZXN0YW1wU2Vjb25kc1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBwYXJzZWAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKi9cblxuZXhwb3J0IHZhciBwYXJzZXJzID0ge1xuICBHOiBuZXcgRXJhUGFyc2VyKCksXG4gIHk6IG5ldyBZZWFyUGFyc2VyKCksXG4gIFk6IG5ldyBMb2NhbFdlZWtZZWFyUGFyc2VyKCksXG4gIFI6IG5ldyBJU09XZWVrWWVhclBhcnNlcigpLFxuICB1OiBuZXcgRXh0ZW5kZWRZZWFyUGFyc2VyKCksXG4gIFE6IG5ldyBRdWFydGVyUGFyc2VyKCksXG4gIHE6IG5ldyBTdGFuZEFsb25lUXVhcnRlclBhcnNlcigpLFxuICBNOiBuZXcgTW9udGhQYXJzZXIoKSxcbiAgTDogbmV3IFN0YW5kQWxvbmVNb250aFBhcnNlcigpLFxuICB3OiBuZXcgTG9jYWxXZWVrUGFyc2VyKCksXG4gIEk6IG5ldyBJU09XZWVrUGFyc2VyKCksXG4gIGQ6IG5ldyBEYXRlUGFyc2VyKCksXG4gIEQ6IG5ldyBEYXlPZlllYXJQYXJzZXIoKSxcbiAgRTogbmV3IERheVBhcnNlcigpLFxuICBlOiBuZXcgTG9jYWxEYXlQYXJzZXIoKSxcbiAgYzogbmV3IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcigpLFxuICBpOiBuZXcgSVNPRGF5UGFyc2VyKCksXG4gIGE6IG5ldyBBTVBNUGFyc2VyKCksXG4gIGI6IG5ldyBBTVBNTWlkbmlnaHRQYXJzZXIoKSxcbiAgQjogbmV3IERheVBlcmlvZFBhcnNlcigpLFxuICBoOiBuZXcgSG91cjF0bzEyUGFyc2VyKCksXG4gIEg6IG5ldyBIb3VyMHRvMjNQYXJzZXIoKSxcbiAgSzogbmV3IEhvdXIwVG8xMVBhcnNlcigpLFxuICBrOiBuZXcgSG91cjFUbzI0UGFyc2VyKCksXG4gIG06IG5ldyBNaW51dGVQYXJzZXIoKSxcbiAgczogbmV3IFNlY29uZFBhcnNlcigpLFxuICBTOiBuZXcgRnJhY3Rpb25PZlNlY29uZFBhcnNlcigpLFxuICBYOiBuZXcgSVNPVGltZXpvbmVXaXRoWlBhcnNlcigpLFxuICB4OiBuZXcgSVNPVGltZXpvbmVQYXJzZXIoKSxcbiAgdDogbmV3IFRpbWVzdGFtcFNlY29uZHNQYXJzZXIoKSxcbiAgVDogbmV3IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcigpXG59OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciB9IGZyb20gXCIuL19saWIvU2V0dGVyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZXJzIH0gZnJvbSBcIi4vX2xpYi9wYXJzZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciBub3RXaGl0ZXNwYWNlUmVnRXhwID0gL1xcUy87XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbc2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGVTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0U3RyaW5nIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IHJlZmVyZW5jZURhdGUgLSBkZWZpbmVzIHZhbHVlcyBtaXNzaW5nIGZyb20gdGhlIHBhcnNlZCBkYXRlU3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAzIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYG1hdGNoYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2UoZGlydHlEYXRlU3RyaW5nLCBkaXJ0eUZvcm1hdFN0cmluZywgZGlydHlSZWZlcmVuY2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygzLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZVN0cmluZyA9IFN0cmluZyhkaXJ0eURhdGVTdHJpbmcpO1xuICB2YXIgZm9ybWF0U3RyaW5nID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyaW5nKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5tYXRjaCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIG1hdGNoIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJycpIHtcbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0b0RhdGUoZGlydHlSZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN1YkZuT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZVxuICB9OyAvLyBJZiB0aW1lem9uZSBpc24ndCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgc2V0IHRvIHRoZSBzeXN0ZW0gdGltZXpvbmVcblxuICB2YXIgc2V0dGVycyA9IFtuZXcgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIoKV07XG4gIHZhciB0b2tlbnMgPSBmb3JtYXRTdHJpbmcubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuICB2YXIgdXNlZFRva2VucyA9IFtdO1xuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0b2tlbnMpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHJpbmcsIGRpcnR5RGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyaW5nLCBkaXJ0eURhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICAgIHZhciBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgICAgaWYgKHBhcnNlcikge1xuICAgICAgICB2YXIgaW5jb21wYXRpYmxlVG9rZW5zID0gcGFyc2VyLmluY29tcGF0aWJsZVRva2VucztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmNvbXBhdGlibGVUb2tlbnMpKSB7XG4gICAgICAgICAgdmFyIGluY29tcGF0aWJsZVRva2VuID0gdXNlZFRva2Vucy5maW5kKGZ1bmN0aW9uICh1c2VkVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBpbmNvbXBhdGlibGVUb2tlbnMuaW5jbHVkZXModXNlZFRva2VuLnRva2VuKSB8fCB1c2VkVG9rZW4udG9rZW4gPT09IGZpcnN0Q2hhcmFjdGVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGluY29tcGF0aWJsZVRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgXCIuY29uY2F0KGluY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbiwgXCJgIGFuZCBgXCIpLmNvbmNhdCh0b2tlbiwgXCJgIGF0IHRoZSBzYW1lIHRpbWVcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuaW5jb21wYXRpYmxlVG9rZW5zID09PSAnKicgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYFwiLmNvbmNhdCh0b2tlbiwgXCJgIGFuZCBhbnkgb3RoZXIgdG9rZW4gYXQgdGhlIHNhbWUgdGltZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB1c2VkVG9rZW5zLnB1c2goe1xuICAgICAgICAgIHRva2VuOiBmaXJzdENoYXJhY3RlcixcbiAgICAgICAgICBmdWxsVG9rZW46IHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcGFyc2VSZXN1bHQgPSBwYXJzZXIucnVuKGRhdGVTdHJpbmcsIHRva2VuLCBsb2NhbGUubWF0Y2gsIHN1YkZuT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBuZXcgRGF0ZShOYU4pXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRlcnMucHVzaChwYXJzZVJlc3VsdC5zZXR0ZXIpO1xuICAgICAgICBkYXRlU3RyaW5nID0gcGFyc2VSZXN1bHQucmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgICAgICB9IC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcblxuXG4gICAgICAgIGlmICh0b2tlbiA9PT0gXCInJ1wiKSB7XG4gICAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgICB0b2tlbiA9IGNsZWFuRXNjYXBlZFN0cmluZyh0b2tlbik7XG4gICAgICAgIH0gLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG5cblxuICAgICAgICBpZiAoZGF0ZVN0cmluZy5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKHRva2VuLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IG5ldyBEYXRlKE5hTilcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKCk7XG5cbiAgICAgIGlmIChfdHlwZW9mKF9yZXQpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH0gLy8gQ2hlY2sgaWYgdGhlIHJlbWFpbmluZyBpbnB1dCBjb250YWlucyBzb21ldGhpbmcgb3RoZXIgdGhhbiB3aGl0ZXNwYWNlXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cmluZykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB1bmlxdWVQcmlvcml0eVNldHRlcnMgPSBzZXR0ZXJzLm1hcChmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgcmV0dXJuIHNldHRlci5wcmlvcml0eTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiIC0gYTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YocHJpb3JpdHkpID09PSBpbmRleDtcbiAgfSkubWFwKGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgIHJldHVybiBzZXR0ZXJzLmZpbHRlcihmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgICByZXR1cm4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYi5zdWJQcmlvcml0eSAtIGEuc3ViUHJpb3JpdHk7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAoc2V0dGVyQXJyYXkpIHtcbiAgICByZXR1cm4gc2V0dGVyQXJyYXlbMF07XG4gIH0pO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eVJlZmVyZW5jZURhdGUpO1xuXG4gIGlmIChpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cblxuXG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKGRhdGUsIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkpO1xuICB2YXIgZmxhZ3MgPSB7fTtcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHVuaXF1ZVByaW9yaXR5U2V0dGVycyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIHNldHRlciA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgaWYgKCFzZXR0ZXIudmFsaWRhdGUodXRjRGF0ZSwgc3ViRm5PcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHNldHRlci5zZXQodXRjRGF0ZSwgZmxhZ3MsIHN1YkZuT3B0aW9ucyk7IC8vIFJlc3VsdCBpcyB0dXBsZSAoZGF0ZSwgZmxhZ3MpXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgdXRjRGF0ZSA9IHJlc3VsdFswXTtcbiAgICAgICAgYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pOyAvLyBSZXN1bHQgaXMgZGF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRjRGF0ZSA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG5cbiAgcmV0dXJuIHV0Y0RhdGU7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IGZvcm1hdCwgaXNUaGlzV2VlaywgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHRoaXNXZWVrID0gKCgpID0+IHtcclxuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcclxuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluYm94RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGluYm94SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuXHJcbiAgICBpbmJveERpdi5hcHBlbmRDaGlsZChpbmJveEhlYWRpbmcpO1xyXG5cclxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcGFyc2UgdGhlIGRhdGUgc3RyaW5nIGJhY2sgdG8gSVNPXHJcbiAgICAgICAgY29uc3QgZGF0ZU5vdyA9IHBhcnNlKCh0YXNrc1tpXS5kdWVEYXRlKSwgJ01NL2RkL3l5eXknLCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlzVGhpc1dlZWsoZGF0ZU5vdykpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcclxuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRhc2tzW2ldLmlkTm8pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRpdGxlO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XHJcblxyXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XHJcbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICBpbmJveERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpcmNsZS1idG5cIik7XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGRlbGV0ZSB0YXNrXHJcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUYXNrKGRhdGFJZCwgXCJ0aGlzLXdlZWtcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhpc1dlZWs7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBpbmJveCBmcm9tIFwiLi9pbmJveFwiO1xuaW1wb3J0IHRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgdGhpc1dlZWsgZnJvbSAnLi90aGlzV2Vlayc7XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCByaWdodENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlzcGxheUluYm94ID0gKCkgPT4ge1xuICAgIHJpZ2h0Q29udGVudC5pbm5lckhUTUwgPSBpbmJveC5kaXNwbGF5Q29udGVudChcbiAgICAgIHN0b3JhZ2UucHJvamVjdFN0b3JhZ2UsXG4gICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlXG4gICAgKTtcbiAgICBpbmJveC5zZXRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VG9kYXkgPSAoKSA9PiB7XG4gICAgcmlnaHRDb250ZW50LmlubmVySFRNTCA9IHRvZGF5LmRpc3BsYXlDb250ZW50KFxuICAgICAgc3RvcmFnZS5wcm9qZWN0U3RvcmFnZSxcbiAgICAgIHN0b3JhZ2UudGFza1N0b3JhZ2VcbiAgICApO1xuICAgIHRvZGF5LnNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUaGlzV2VlayA9ICgpID0+IHtcbiAgICByaWdodENvbnRlbnQuaW5uZXJIVE1MID0gdGhpc1dlZWsuZGlzcGxheUNvbnRlbnQoXG4gICAgICBzdG9yYWdlLnByb2plY3RTdG9yYWdlLFxuICAgICAgc3RvcmFnZS50YXNrU3RvcmFnZVxuICAgICk7XG4gICAgdG9kYXkuc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdGVzdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJzdWNjZXNzXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgICBzd2l0Y2ggKHByb2plY3QpIHtcbiAgICAgIGNhc2UgXCJkZWZhdWx0XCI6XG4gICAgICAgIGRpc3BsYXlJbmJveCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgIGRpc3BsYXlUb2RheSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIFxuICAgICAgY2FzZSAndGhpcy13ZWVrJzpcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBpbmJveExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcbiAgICBjb25zdCB0b2RheUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcbiAgICBjb25zdCB0aGlzV2Vla0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXMtd2VlaycpO1xuXG4gICAgaW5ib3hMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheUluYm94KCk7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNwbGF5IHRvZGF5IHdoZW4gY2xpY2tlZFxuICAgIHRvZGF5TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXlUb2RheSgpO1xuICAgIH0pO1xuXG4gICAgdGhpc1dlZWtMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRoaXNXZWVrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gaW5pdGlhbGl6ZVxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGRpc3BsYXlJbmJveCgpO1xuICAgIHNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICB0ZXN0RGlzcGxheSxcbiAgICByZWZyZXNoQ29udGVudCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG4iLCJpbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlcIjtcblxuZGlzcGxheS5pbml0KCk7XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18iLCJVUkwiLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18iLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwibiIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwIiwiYiIsImJhc2VVUkkiLCJzZWxmIiwiaHJlZiIsIm5jIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwiVHlwZUVycm9yIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJ0b0RhdGUiLCJhcmd1bWVudCIsImFyZ3VtZW50cyIsImFyZ1N0ciIsIkRhdGUiLCJnZXRUaW1lIiwiY29uc29sZSIsIndhcm4iLCJzdGFjayIsIk5hTiIsInRvSW50ZWdlciIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwic3ViTWlsbGlzZWNvbmRzIiwiZGlydHlEYXRlIiwiZGlydHlBbW91bnQiLCJ0aW1lc3RhbXAiLCJhbW91bnQiLCJhZGRNaWxsaXNlY29uZHMiLCJzdGFydE9mVVRDSVNPV2VlayIsImRhdGUiLCJkYXkiLCJnZXRVVENEYXkiLCJkaWZmIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJzZXRVVENIb3VycyIsImdldFVUQ0lTT1dlZWtZZWFyIiwieWVhciIsImdldFVUQ0Z1bGxZZWFyIiwiZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciIsInNldFVUQ0Z1bGxZZWFyIiwic3RhcnRPZk5leHRZZWFyIiwiZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciIsInN0YXJ0T2ZUaGlzWWVhciIsImdldFVUQ0lTT1dlZWsiLCJmb3VydGhPZkphbnVhcnkiLCJzdGFydE9mVVRDSVNPV2Vla1llYXIiLCJyb3VuZCIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzdGFydE9mVVRDV2VlayIsIl9yZWYiLCJfcmVmMiIsIl9yZWYzIiwiX29wdGlvbnMkd2Vla1N0YXJ0c09uIiwiX29wdGlvbnMkbG9jYWxlIiwiX29wdGlvbnMkbG9jYWxlJG9wdGlvIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMiIsIndlZWtTdGFydHNPbiIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJnZXRVVENXZWVrWWVhciIsIl9vcHRpb25zJGZpcnN0V2Vla0NvbiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsImZpcnN0V2Vla09mTmV4dFllYXIiLCJmaXJzdFdlZWtPZlRoaXNZZWFyIiwiZ2V0VVRDV2VlayIsImZpcnN0V2VlayIsInN0YXJ0T2ZVVENXZWVrWWVhciIsImFkZExlYWRpbmdaZXJvcyIsInRhcmdldExlbmd0aCIsInNpZ24iLCJvdXRwdXQiLCJhYnMiLCJ0b2tlbiIsInNpZ25lZFllYXIiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsIm51bWJlck9mRGlnaXRzIiwibWlsbGlzZWNvbmRzIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwicG93IiwiRyIsImxvY2FsaXplIiwiZXJhIiwid2lkdGgiLCJ5Iiwib3JkaW5hbE51bWJlciIsInVuaXQiLCJsaWdodEZvcm1hdHRlcnMiLCJZIiwic2lnbmVkV2Vla1llYXIiLCJ3ZWVrWWVhciIsIlIiLCJ1IiwiUSIsInF1YXJ0ZXIiLCJjb250ZXh0IiwicSIsIk0iLCJMIiwidyIsIndlZWsiLCJJIiwiaXNvV2VlayIsIkQiLCJkYXlPZlllYXIiLCJzZXRVVENNb250aCIsImRpZmZlcmVuY2UiLCJnZXRVVENEYXlPZlllYXIiLCJFIiwiZGF5T2ZXZWVrIiwibG9jYWxEYXlPZldlZWsiLCJjIiwiaXNvRGF5T2ZXZWVrIiwiZGF5UGVyaW9kRW51bVZhbHVlIiwiZGF5UGVyaW9kIiwidG9Mb3dlckNhc2UiLCJob3VycyIsIkIiLCJoIiwiSCIsIksiLCJzIiwiUyIsIlgiLCJfbG9jYWxpemUiLCJ0aW1lem9uZU9mZnNldCIsIl9vcmlnaW5hbERhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsImZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyIsImZvcm1hdFRpbWV6b25lIiwieCIsIk8iLCJmb3JtYXRUaW1lem9uZVNob3J0IiwieiIsInQiLCJvcmlnaW5hbERhdGUiLCJUIiwib2Zmc2V0IiwiZGlydHlEZWxpbWl0ZXIiLCJhYnNPZmZzZXQiLCJtaW51dGVzIiwiZGVsaW1pdGVyIiwiZGF0ZUxvbmdGb3JtYXR0ZXIiLCJwYXR0ZXJuIiwiZm9ybWF0TG9uZyIsInRpbWVMb25nRm9ybWF0dGVyIiwidGltZSIsIlAiLCJkYXRlVGltZUZvcm1hdCIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJkYXRlUGF0dGVybiIsInRpbWVQYXR0ZXJuIiwiZGF0ZVRpbWUiLCJnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIiwidXRjRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInByb3RlY3RlZERheU9mWWVhclRva2VucyIsInByb3RlY3RlZFdlZWtZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsImluZGV4T2YiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiaW5wdXQiLCJmb3JtYXREaXN0YW5jZUxvY2FsZSIsImxlc3NUaGFuWFNlY29uZHMiLCJvbmUiLCJvdGhlciIsInhTZWNvbmRzIiwiaGFsZkFNaW51dGUiLCJsZXNzVGhhblhNaW51dGVzIiwieE1pbnV0ZXMiLCJhYm91dFhIb3VycyIsInhIb3VycyIsInhEYXlzIiwiYWJvdXRYV2Vla3MiLCJ4V2Vla3MiLCJhYm91dFhNb250aHMiLCJ4TW9udGhzIiwiYWJvdXRYWWVhcnMiLCJ4WWVhcnMiLCJvdmVyWFllYXJzIiwiYWxtb3N0WFllYXJzIiwiYnVpbGRGb3JtYXRMb25nRm4iLCJkZWZhdWx0V2lkdGgiLCJmb3JtYXRzIiwiZnVsbCIsImxvbmciLCJtZWRpdW0iLCJzaG9ydCIsImZvcm1hdFJlbGF0aXZlTG9jYWxlIiwibGFzdFdlZWsiLCJ5ZXN0ZXJkYXkiLCJ0b2RheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJidWlsZExvY2FsaXplRm4iLCJkaXJ0eUluZGV4IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJhcmd1bWVudENhbGxiYWNrIiwiX29wdGlvbnMiLCJyZW0xMDAiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImJ1aWxkTWF0Y2hGbiIsInN0cmluZyIsIm1hdGNoUGF0dGVybiIsIm1hdGNoUGF0dGVybnMiLCJkZWZhdWx0TWF0Y2hXaWR0aCIsInZhbHVlIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5IiwicHJlZGljYXRlIiwiZmluZEluZGV4Iiwib2JqZWN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0IiwicGFyc2VQYXR0ZXJuIiwicGFyc2VJbnQiLCJwYXJzZVJlc3VsdCIsImFueSIsImNvZGUiLCJmb3JtYXREaXN0YW5jZSIsInRva2VuVmFsdWUiLCJhZGRTdWZmaXgiLCJjb21wYXJpc29uIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsImZvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImVzY2FwZWRTdHJpbmdSZWdFeHAiLCJkb3VibGVRdW90ZVJlZ0V4cCIsInVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwIiwiZGlydHlGb3JtYXRTdHIiLCJfcmVmNCIsIl9vcHRpb25zJGxvY2FsZTIiLCJfb3B0aW9ucyRsb2NhbGUyJG9wdGkiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfb3B0aW9ucyRsb2NhbGUzIiwiX29wdGlvbnMkbG9jYWxlMyRvcHRpIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMyIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDQiLCJmb3JtYXRTdHIiLCJkZWZhdWx0TG9jYWxlIiwiaXNEYXRlIiwiaXNWYWxpZCIsImZvcm1hdHRlck9wdGlvbnMiLCJzdWJzdHJpbmciLCJmaXJzdENoYXJhY3RlciIsImxvbmdGb3JtYXR0ZXIiLCJtYXRjaGVkIiwiZm9ybWF0dGVyIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsInByb2plY3RTdG9yYWdlIiwidGFza1N0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGVzdEl0ZW0iLCJpZE5vIiwibm93IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJsb2ciLCJkZWxldGVUYXNrIiwidGFza0lkTm8iLCJwcm9qZWN0cyIsInRhc2tzIiwiaW5ib3hEaXYiLCJpbmJveEhlYWRpbmciLCJ0ZXh0Q29udGVudCIsInRhc2tEaXYiLCJidG4iLCJ0YXNrRGV0YWlscyIsInRhc2tEdWVEYXRlIiwib3V0ZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YUlkIiwiZ2V0QXR0cmlidXRlIiwiZGF0ZU5vdyIsInByb3BlcnR5IiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiTmV3VGFyZ2V0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiUmVmZXJlbmNlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIlNldHRlciIsIl91dGNEYXRlIiwiVmFsdWVTZXR0ZXIiLCJfU2V0dGVyIiwiX3N1cGVyIiwidmFsaWRhdGVWYWx1ZSIsInNldFZhbHVlIiwic3ViUHJpb3JpdHkiLCJfdGhpcyIsImZsYWdzIiwiRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIiLCJfU2V0dGVyMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJfbGVuIiwiX2tleSIsInRpbWVzdGFtcElzU2V0IiwiY29udmVydGVkRGF0ZSIsInNldEZ1bGxZZWFyIiwic2V0SG91cnMiLCJQYXJzZXIiLCJkYXRlU3RyaW5nIiwic2V0dGVyIiwidmFsaWRhdGUiLCJzZXQiLCJfdmFsdWUiLCJFcmFQYXJzZXIiLCJfUGFyc2VyIiwibnVtZXJpY1BhdHRlcm5zIiwiaG91cjIzaCIsImhvdXIyNGgiLCJob3VyMTFoIiwiaG91cjEyaCIsIm1pbnV0ZSIsInNlY29uZCIsInNpbmdsZURpZ2l0IiwidHdvRGlnaXRzIiwidGhyZWVEaWdpdHMiLCJmb3VyRGlnaXRzIiwiYW55RGlnaXRzU2lnbmVkIiwic2luZ2xlRGlnaXRTaWduZWQiLCJ0d29EaWdpdHNTaWduZWQiLCJ0aHJlZURpZ2l0c1NpZ25lZCIsImZvdXJEaWdpdHNTaWduZWQiLCJ0aW1lem9uZVBhdHRlcm5zIiwibWFwVmFsdWUiLCJwYXJzZUZuUmVzdWx0IiwibWFwRm4iLCJwYXJzZU51bWVyaWNQYXR0ZXJuIiwicGFyc2VUaW1lem9uZVBhdHRlcm4iLCJwYXJzZUFueURpZ2l0c1NpZ25lZCIsInBhcnNlTkRpZ2l0cyIsIlJlZ0V4cCIsInBhcnNlTkRpZ2l0c1NpZ25lZCIsImRheVBlcmlvZEVudW1Ub0hvdXJzIiwibm9ybWFsaXplVHdvRGlnaXRZZWFyIiwidHdvRGlnaXRZZWFyIiwiY3VycmVudFllYXIiLCJpc0NvbW1vbkVyYSIsImFic0N1cnJlbnRZZWFyIiwicmFuZ2VFbmQiLCJpc0xlYXBZZWFySW5kZXgiLCJZZWFyUGFyc2VyIiwiaXNUd29EaWdpdFllYXIiLCJub3JtYWxpemVkVHdvRGlnaXRZZWFyIiwiTG9jYWxXZWVrWWVhclBhcnNlciIsIklTT1dlZWtZZWFyUGFyc2VyIiwiX2ZsYWdzIiwiZmlyc3RXZWVrT2ZZZWFyIiwiRXh0ZW5kZWRZZWFyUGFyc2VyIiwiUXVhcnRlclBhcnNlciIsIlN0YW5kQWxvbmVRdWFydGVyUGFyc2VyIiwiTW9udGhQYXJzZXIiLCJTdGFuZEFsb25lTW9udGhQYXJzZXIiLCJMb2NhbFdlZWtQYXJzZXIiLCJkaXJ0eVdlZWsiLCJzZXRVVENXZWVrIiwiSVNPV2Vla1BhcnNlciIsImRpcnR5SVNPV2VlayIsInNldFVUQ0lTT1dlZWsiLCJEQVlTX0lOX01PTlRIIiwiREFZU19JTl9NT05USF9MRUFQX1lFQVIiLCJEYXRlUGFyc2VyIiwiaXNMZWFwWWVhciIsIkRheU9mWWVhclBhcnNlciIsInNldFVUQ0RheSIsImRpcnR5RGF5IiwiRGF5UGFyc2VyIiwiTG9jYWxEYXlQYXJzZXIiLCJ3aG9sZVdlZWtEYXlzIiwiU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIiwiSVNPRGF5UGFyc2VyIiwic2V0VVRDSVNPRGF5IiwiQU1QTVBhcnNlciIsIkFNUE1NaWRuaWdodFBhcnNlciIsIkRheVBlcmlvZFBhcnNlciIsIkhvdXIxdG8xMlBhcnNlciIsImlzUE0iLCJIb3VyMHRvMjNQYXJzZXIiLCJIb3VyMFRvMTFQYXJzZXIiLCJIb3VyMVRvMjRQYXJzZXIiLCJNaW51dGVQYXJzZXIiLCJzZXRVVENNaW51dGVzIiwiU2Vjb25kUGFyc2VyIiwic2V0VVRDU2Vjb25kcyIsIkZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIiLCJzZXRVVENNaWxsaXNlY29uZHMiLCJJU09UaW1lem9uZVdpdGhaUGFyc2VyIiwiSVNPVGltZXpvbmVQYXJzZXIiLCJUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIiwiVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIiwicGFyc2VycyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibmFtZSIsImZyb20iLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJGIiwiZG9uZSIsIl9lIiwiZiIsImVyciIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwibmV4dCIsIl9lMiIsInJldHVybiIsImFyciIsImxlbiIsImFycjIiLCJub3RXaGl0ZXNwYWNlUmVnRXhwIiwiZGlydHlEYXRlU3RyaW5nIiwiZGlydHlGb3JtYXRTdHJpbmciLCJkaXJ0eVJlZmVyZW5jZURhdGUiLCJmb3JtYXRTdHJpbmciLCJfc3RlcCIsInN1YkZuT3B0aW9ucyIsInNldHRlcnMiLCJ0b2tlbnMiLCJ1c2VkVG9rZW5zIiwiX2l0ZXJhdG9yIiwiX2xvb3AiLCJwYXJzZXIiLCJpbmNvbXBhdGlibGVUb2tlbnMiLCJpbmNvbXBhdGlibGVUb2tlbiIsImZpbmQiLCJ1c2VkVG9rZW4iLCJpbmNsdWRlcyIsImZ1bGxUb2tlbiIsInJ1biIsInYiLCJfcmV0IiwidW5pcXVlUHJpb3JpdHlTZXR0ZXJzIiwic29ydCIsImZpbHRlciIsInNldHRlckFycmF5IiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMiIsInN0YXJ0T2ZXZWVrIiwiZ2V0RGF5Iiwic2V0RGF0ZSIsImlzVGhpc1dlZWsiLCJkaXJ0eURhdGVMZWZ0IiwiZGlydHlEYXRlUmlnaHQiLCJkYXRlTGVmdFN0YXJ0T2ZXZWVrIiwiZGF0ZVJpZ2h0U3RhcnRPZldlZWsiLCJpc1NhbWVXZWVrIiwicmlnaHRDb250ZW50IiwiZGlzcGxheUluYm94IiwiaW5uZXJIVE1MIiwiZGlzcGxheVRvZGF5IiwiZGlzcGxheVRoaXNXZWVrIiwiaW5pdCIsImluYm94TGkiLCJ0b2RheUxpIiwidGhpc1dlZWtMaSIsInNldExpc3RlbmVycyIsInRlc3REaXNwbGF5IiwiYWxlcnQiLCJyZWZyZXNoQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=
