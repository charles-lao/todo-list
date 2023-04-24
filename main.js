(() => {
  "use strict";
  var t = {
      890: (t, e, n) => {
        n.d(e, { Z: () => E });
        var r = n(537),
          o = n.n(r),
          i = n(645),
          a = n.n(i),
          u = n(667),
          c = n.n(u),
          l = new URL(n(937), n.b),
          f = new URL(n(556), n.b),
          s = new URL(n(195), n.b),
          p = new URL(n(413), n.b),
          y = new URL(n(324), n.b),
          d = new URL(n(152), n.b),
          b = new URL(n(926), n.b),
          h = a()(o()),
          m = c()(l),
          v = c()(f),
          g = c()(s),
          w = c()(p),
          A = c()(y),
          O = c()(d),
          C = c()(b);
        h.push([
          t.id,
          '@font-face {\n  font-family: "Roboto";\n  src: url(' +
            m +
            ');\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url(' +
            v +
            ");\n}\n\nli#today {\n  background-image: url(" +
            g +
            ");\n}\n\nli#this-week {\n  background-image: url(" +
            w +
            ");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url(" +
            A +
            ");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url(" +
            O +
            ');\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n}\n\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url(' +
            O +
            ");\n  cursor: pointer;\n}\n\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-task-btn {\n  background-color: #81cb7e;\n  border-color: #81cb7e;\n}\n\n#cancel-task-btn {\n  background-color: #d1ad9e;\n  border-color: #d1ad9e;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url(" +
            C +
            ");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,iBAAiB;AACnB;;AAEA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;;;;;EAME,4BAA4B;EAC5B,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;;;EAKE,eAAe;AACjB;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yDAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,yDAA2C;AAC7C;;AAEA;EACE,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,yDAA2C;EAC3C,eAAe;AACjB;;AAEA;;EAEE,OAAO;EACP,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB",
            sourcesContent: [
              '@font-face {\n  font-family: "Roboto";\n  src: url(../fonts/Roboto-Regular.ttf);\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url("../images/inbox.svg");\n}\n\nli#today {\n  background-image: url("../images/calendar-today.svg");\n}\n\nli#this-week {\n  background-image: url("../images/calendar-month.svg");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url("../images/format-list-bulleted.svg");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url("../images/plus.svg");\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n}\n\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url("../images/plus.svg");\n  cursor: pointer;\n}\n\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-task-btn {\n  background-color: #81cb7e;\n  border-color: #81cb7e;\n}\n\n#cancel-task-btn {\n  background-color: #d1ad9e;\n  border-color: #d1ad9e;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url("../images/github.svg");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const E = h;
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
              for (var l = 0; l < t.length; l++) {
                var f = [].concat(t[l]);
                (r && a[f[0]]) ||
                  (void 0 !== i &&
                    (void 0 === f[5] ||
                      (f[1] = "@layer"
                        .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                        .concat(f[1], "}")),
                    (f[5] = i)),
                  n &&
                    (f[2]
                      ? ((f[1] = "@media "
                          .concat(f[2], " {")
                          .concat(f[1], "}")),
                        (f[2] = n))
                      : (f[2] = n)),
                  o &&
                    (f[4]
                      ? ((f[1] = "@supports ("
                          .concat(f[4], ") {")
                          .concat(f[1], "}")),
                        (f[4] = o))
                      : (f[4] = "".concat(o))),
                  e.push(f));
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
              l = r.base ? c[0] + r.base : c[0],
              f = i[l] || 0,
              s = "".concat(l, " ").concat(f);
            i[l] = f + 1;
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
            for (var c = r(t, o), l = 0; l < i.length; l++) {
              var f = n(i[l]);
              0 === e[f].references && (e[f].updater(), e.splice(f, 1));
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
        var l = u(c);
        return n.getTime() >= a.getTime()
          ? r + 1
          : n.getTime() >= l.getTime()
          ? r
          : r - 1;
      }
      function l(e) {
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
      var f = {};
      function s() {
        return f;
      }
      function p(e, n) {
        var r, a, u, c, l, f, p, y;
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
                            null === (l = n.locale) ||
                            void 0 === l ||
                            null === (f = l.options) ||
                            void 0 === f
                          ? void 0
                          : f.weekStartsOn) && void 0 !== u
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
        var r, a, u, c, l, f, y, d;
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
                            null === (l = n.locale) ||
                            void 0 === l ||
                            null === (f = l.options) ||
                            void 0 === f
                          ? void 0
                          : f.firstWeekContainsDate) && void 0 !== u
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
              var r, o, a, u, c, l, f, d;
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
                                  null === (l = c.options) ||
                                  void 0 === l
                                ? void 0
                                : l.firstWeekContainsDate) && void 0 !== a
                            ? a
                            : b.firstWeekContainsDate) && void 0 !== o
                        ? o
                        : null === (f = b.locale) ||
                          void 0 === f ||
                          null === (d = f.options) ||
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
        C = function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds();
          return b(Math.floor(r * Math.pow(10, n - 3)), e.length);
        };
      var E = {
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
          var r = l(t);
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
          return C(t, e);
        },
        X: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          if (0 === o) return "Z";
          switch (e) {
            case "X":
              return k(o);
            case "XXXX":
            case "XX":
              return S(o);
            default:
              return S(o, ":");
          }
        },
        x: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return k(o);
            case "xxxx":
            case "xx":
              return S(o);
            default:
              return S(o, ":");
          }
        },
        O: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + x(o, ":");
            default:
              return "GMT" + S(o, ":");
          }
        },
        z: function (t, e, n, r) {
          var o = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + x(o, ":");
            default:
              return "GMT" + S(o, ":");
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
      function x(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          o = Math.floor(r / 60),
          i = r % 60;
        if (0 === i) return n + String(o);
        var a = e || "";
        return n + String(o) + a + b(i, 2);
      }
      function k(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + b(Math.abs(t) / 60, 2)
          : S(t, e);
      }
      function S(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          o = Math.abs(t);
        return r + b(Math.floor(o / 60), 2) + n + b(o % 60, 2);
      }
      const T = E;
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
            l = Array.isArray(c)
              ? (function (t, e) {
                  for (var n = 0; n < t.length; n++) if (t[n].test(u)) return n;
                })(c)
              : (function (t, e) {
                  for (var n in t)
                    if (t.hasOwnProperty(n) && t[n].test(u)) return n;
                })(c);
          return (
            (a = t.valueCallback ? t.valueCallback(l) : l),
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
        var c, l, f, p, y, d, b, h, m, v, g, w, A, O, C, E, x, k;
        t(2, arguments);
        var S = String(r),
          j = s(),
          P =
            null !==
              (c =
                null !== (l = null == u ? void 0 : u.locale) && void 0 !== l
                  ? l
                  : j.locale) && void 0 !== c
              ? c
              : X,
          B = i(
            null !==
              (f =
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
                  : v.firstWeekContainsDate) && void 0 !== f
              ? f
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
                          null === (C = u.locale) ||
                          void 0 === C ||
                          null === (E = C.options) ||
                          void 0 === E
                        ? void 0
                        : E.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (x = j.locale) ||
                  void 0 === x ||
                  null === (k = x.options) ||
                  void 0 === k
                ? void 0
                : k.weekStartsOn) && void 0 !== g
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
        return S.match(Z)
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
            var a = T[i];
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
        lt = n(216),
        ft = n.n(lt),
        st = n(589),
        pt = n.n(st),
        yt = n(890),
        dt = {};
      (dt.styleTagTransform = pt()),
        (dt.setAttributes = ct()),
        (dt.insert = at().bind(null, "head")),
        (dt.domAPI = ot()),
        (dt.insertStyleElement = ft()),
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
          const o = document.createElement("div");
          o.setAttribute("id", "add-task-div");
          const i = document.createElement("h4");
          (i.textContent = "Add Task"), i.setAttribute("id", "add-task-h4");
          const a = document.createElement("input");
          a.setAttribute("type", "text");
          const u = document.createElement("div"),
            c = document.createElement("button");
          c.setAttribute("id", "add-task-btn"), (c.textContent = "Add");
          const l = document.createElement("button");
          return (
            l.setAttribute("id", "cancel-task-btn"),
            (l.textContent = "Cancel"),
            o.appendChild(a),
            u.appendChild(c),
            u.appendChild(l),
            o.appendChild(u),
            n.appendChild(i),
            n.appendChild(o),
            n.outerHTML
          );
        },
        ht = () => {
          const t = document.querySelectorAll(".circle-btn"),
            e = document.querySelector("#add-task-h4"),
            n = document.querySelector("#add-task-div"),
            r = document.querySelector("#cancel-task-btn");
          t.forEach((t) => {
            t.addEventListener("click", (t) => {
              const e = t.target.getAttribute("data-id");
              tt.deleteTask(e, "default");
            });
          }),
            e.addEventListener("click", (t) => {
              (e.style.display = "none"), (n.style.display = "flex");
            }),
            r.addEventListener("click", (t) => {
              (e.style.display = "inline-flex"), (n.style.display = "none");
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
      function Ct(t) {
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
            r = xt(t);
          if (e) {
            var o = xt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            return !e || ("object" !== wt(e) && "function" != typeof e)
              ? Et(t)
              : e;
          })(this, n);
        };
      }
      function Et(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function xt(t) {
        return (
          (xt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          xt(t)
        );
      }
      function kt(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function St(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Tt(t, e, n) {
        return e && St(t.prototype, e), n && St(t, n), t;
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
            kt(this, t), jt(this, "subPriority", 0);
          }
          return (
            Tt(t, [
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
          var e = Ct(n);
          function n(t, r, o, i, a) {
            var u;
            return (
              kt(this, n),
              ((u = e.call(this)).value = t),
              (u.validateValue = r),
              (u.setValue = o),
              (u.priority = i),
              a && (u.subPriority = a),
              u
            );
          }
          return (
            Tt(n, [
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
          var e = Ct(n);
          function n() {
            var t;
            kt(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              jt(Et((t = e.call.apply(e, [this].concat(o)))), "priority", 10),
              jt(Et(t), "subPriority", -1),
              t
            );
          }
          return (
            Tt(n, [
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
      var le = (function (t) {
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
      function fe(t) {
        return (
          (fe =
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
          fe(t)
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
                return !e || ("object" !== fe(e) && "function" != typeof e)
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
      var Ce = (function (t) {
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
      function Ee(t) {
        return (
          (Ee =
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
          Ee(t)
        );
      }
      function xe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ke(t, e) {
        return (
          (ke =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ke(t, e)
        );
      }
      function Se(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Te(t) {
        return (
          (Te = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Te(t)
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
            e && ke(t, e);
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
                e = Te(r);
              if (o) {
                var n = Te(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ee(e) && "function" != typeof e)
                  ? Se(t)
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
            je(Se((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            je(Se(t), "incompatibleTokens", [
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
          ]) && xe(e.prototype, n),
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
      function ln(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function fn(t) {
        return (
          (fn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          fn(t)
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
        })(l, e);
        var n,
          r,
          a,
          u,
          c =
            ((a = l),
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
                e = fn(a);
              if (u) {
                var n = fn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== an(e) && "function" != typeof e)
                  ? ln(t)
                  : e;
              })(this, t);
            });
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            sn(ln((t = c.call.apply(c, [this].concat(n)))), "priority", 100),
            sn(ln(t), "incompatibleTokens", [
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
          (n = l),
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
          l
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
          f =
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
            vn(hn((t = f.call.apply(f, [this].concat(n)))), "priority", 100),
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
                      u = l(r) - a;
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
      function Cn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function En(t) {
        return (
          (En = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          En(t)
        );
      }
      function xn(t, e, n) {
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
      var kn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Sn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Tn = (function (t) {
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
                  e = En(r);
                if (o) {
                  var n = En(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== wn(e) && "function" != typeof e)
                    ? Cn(t)
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
              xn(Cn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
              xn(Cn(t), "subPriority", 1),
              xn(Cn(t), "incompatibleTokens", [
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
                  return n ? e >= 1 && e <= Sn[r] : e >= 1 && e <= kn[r];
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
        var a, u, c, l, f, p, y, d;
        t(2, arguments);
        var b = s(),
          h = i(
            null !==
              (a =
                null !==
                  (u =
                    null !==
                      (c =
                        null !== (l = null == r ? void 0 : r.weekStartsOn) &&
                        void 0 !== l
                          ? l
                          : null == r ||
                            null === (f = r.locale) ||
                            void 0 === f ||
                            null === (p = f.options) ||
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
      function lr(t, e, n) {
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
      var fr = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ar(t, e);
        })(l, e);
        var n,
          r,
          a,
          u,
          c =
            ((a = l),
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
        function l() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return (
            lr(ur((t = c.call.apply(c, [this].concat(n)))), "priority", 90),
            lr(ur(t), "incompatibleTokens", [
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
          (n = l),
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
          l
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
      function Cr(t, e, n) {
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
      var Er = (function (t) {
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
            Cr(Ar((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Cr(Ar(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
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
      function xr(t) {
        return (
          (xr =
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
          xr(t)
        );
      }
      function kr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Sr(t, e) {
        return (
          (Sr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Sr(t, e)
        );
      }
      function Tr(t) {
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
            e && Sr(t, e);
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
                return !e || ("object" !== xr(e) && "function" != typeof e)
                  ? Tr(t)
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
            Pr(Tr((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Pr(Tr(t), "incompatibleTokens", ["a", "b", "t", "T"]),
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
          n && kr(e.prototype, n),
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
      function lo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function fo(t) {
        return (
          (fo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          fo(t)
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
                e = fo(r);
              if (o) {
                var n = fo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== ao(e) && "function" != typeof e)
                  ? lo(t)
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
            so(lo((t = i.call.apply(i, [this].concat(n)))), "priority", 60),
            so(lo(t), "incompatibleTokens", ["t", "T"]),
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
      function Co(t, e) {
        return (
          (Co =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Co(t, e)
        );
      }
      function Eo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function xo(t) {
        return (
          (xo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          xo(t)
        );
      }
      function ko(t, e, n) {
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
      var So = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Co(t, e);
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
                e = xo(r);
              if (o) {
                var n = xo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ao(e) && "function" != typeof e)
                  ? Eo(t)
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
            ko(Eo((t = i.call.apply(i, [this].concat(n)))), "priority", 30),
            ko(Eo(t), "incompatibleTokens", ["t", "T"]),
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
      function To(t) {
        return (
          (To =
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
          To(t)
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
                return !e || ("object" !== To(e) && "function" != typeof e)
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
          y: new le(),
          Y: new he(),
          R: new Ce(),
          u: new Pe(),
          Q: new qe(),
          q: new Qe(),
          M: new Ke(),
          L: new on(),
          w: new pn(),
          I: new gn(),
          d: new Tn(),
          D: new Mn(),
          E: new In(),
          e: new Jn(),
          c: new rr(),
          i: new fr(),
          a: new mr(),
          b: new Er(),
          B: new _r(),
          h: new Yr(),
          H: new Fr(),
          K: new $r(),
          k: new io(),
          m: new po(),
          s: new wo(),
          S: new So(),
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
        li = /''/g,
        fi = /\S/,
        si = /[a-zA-Z]/;
      function pi(e, n, r, u) {
        var c, l, f, p, y, d, b, h, m, v, g, w, A, O, C, E, x, k;
        t(3, arguments);
        var S = String(e),
          T = String(n),
          j = s(),
          P =
            null !==
              (c =
                null !== (l = null == u ? void 0 : u.locale) && void 0 !== l
                  ? l
                  : j.locale) && void 0 !== c
              ? c
              : X;
        if (!P.match)
          throw new RangeError("locale must contain match property");
        var B = i(
          null !==
            (f =
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
                : v.firstWeekContainsDate) && void 0 !== f
            ? f
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
                          null === (C = u.locale) ||
                          void 0 === C ||
                          null === (E = C.options) ||
                          void 0 === E
                        ? void 0
                        : E.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (x = j.locale) ||
                  void 0 === x ||
                  null === (k = x.options) ||
                  void 0 === k
                ? void 0
                : k.weekStartsOn) && void 0 !== g
            ? g
            : 0
        );
        if (!(D >= 0 && D <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively"
          );
        if ("" === T) return "" === S ? o(r) : new Date(NaN);
        var Y,
          N = { firstWeekContainsDate: B, weekStartsOn: D, locale: P },
          H = [new Rt()],
          L = T.match(ui)
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
            (null != u && u.useAdditionalWeekYearTokens) || !U(t) || q(t, T, e),
              (null != u && u.useAdditionalDayOfYearTokens) ||
                !M(t) ||
                q(t, T, e);
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
              var a = r.run(S, t, P.match, N);
              if (!a) return { v: new Date(NaN) };
              H.push(a.setter), (S = a.rest);
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
                  : "'" === n && (t = t.match(ci)[1].replace(li, "'")),
                0 !== S.indexOf(t))
              )
                return { v: new Date(NaN) };
              S = S.slice(t.length);
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
        if (S.length > 0 && fi.test(S)) return new Date(NaN);
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
        var r, a, u, c, l, f, p, y;
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
                            null === (l = n.locale) ||
                            void 0 === l ||
                            null === (f = l.options) ||
                            void 0 === f
                          ? void 0
                          : f.weekStartsOn) && void 0 !== u
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUhBSUlBLEVBQWdDLElBQUlDLElBQUksWUFDeENDLEVBQWdDLElBQUlELElBQUksWUFDeENFLEVBQWdDLElBQUlGLElBQUksWUFDeENHLEVBQWdDLElBQUlILElBQUksWUFDeENJLEVBQWdDLElBQUlKLElBQUksWUFDeENLLEVBQWdDLElBQUlMLElBQUksWUFDeENNLEVBQWdDLElBQUlOLElBQUksWUFDeENPLEVBQTBCLElBQTRCLEtBQ3REQyxFQUFxQyxJQUFnQ1QsR0FDckVVLEVBQXFDLElBQWdDUixHQUNyRVMsRUFBcUMsSUFBZ0NSLEdBQ3JFUyxFQUFxQyxJQUFnQ1IsR0FDckVTLEVBQXFDLElBQWdDUixHQUNyRVMsRUFBcUMsSUFBZ0NSLEdBQ3JFUyxFQUFxQyxJQUFnQ1IsR0FFekVDLEVBQXdCUSxLQUFLLENBQUNDLEVBQU9DLEdBQUksc0RBQTBEVCxFQUFxQyxzb0NBQTBvQ0MsRUFBcUMsZ0RBQWtEQyxFQUFxQyxvREFBc0RDLEVBQXFDLG9IQUFzSEMsRUFBcUMsMEVBQTRFQyxFQUFxQywyOEJBQSs4QkEsRUFBcUMsNmdCQUErZ0JDLEVBQXFDLHdLQUF5SyxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxvQ0FBb0MsTUFBUSxHQUFHLFNBQVcsK2pEQUErakQsZUFBaUIsQ0FBQyxxeEdBQXl5RyxXQUFhLE1BRWw2USxTLFVDaEJBRSxFQUFPRSxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQU8sR0E0RVgsT0F6RUFBLEVBQUtDLFNBQVcsV0FDZCxPQUFPQyxLQUFLQyxLQUFJLFNBQVVDLEdBQ3hCLElBQUlDLEVBQVUsR0FDVkMsT0FBK0IsSUFBWkYsRUFBSyxHQW9CNUIsT0FuQklBLEVBQUssS0FDUEMsR0FBVyxjQUFjRSxPQUFPSCxFQUFLLEdBQUksUUFFdkNBLEVBQUssS0FDUEMsR0FBVyxVQUFVRSxPQUFPSCxFQUFLLEdBQUksT0FFbkNFLElBQ0ZELEdBQVcsU0FBU0UsT0FBT0gsRUFBSyxHQUFHSSxPQUFTLEVBQUksSUFBSUQsT0FBT0gsRUFBSyxJQUFNLEdBQUksT0FFNUVDLEdBQVdOLEVBQXVCSyxHQUM5QkUsSUFDRkQsR0FBVyxLQUVURCxFQUFLLEtBQ1BDLEdBQVcsS0FFVEQsRUFBSyxLQUNQQyxHQUFXLEtBRU5BLENBQ1QsSUFBR0ksS0FBSyxHQUNWLEVBR0FULEVBQUtVLEVBQUksU0FBV0MsRUFBU0MsRUFBT0MsRUFBUUMsRUFBVUMsR0FDN0IsaUJBQVpKLElBQ1RBLEVBQVUsQ0FBQyxDQUFDLEtBQU1BLE9BQVNLLEtBRTdCLElBQUlDLEVBQXlCLENBQUMsRUFDOUIsR0FBSUosRUFDRixJQUFLLElBQUlLLEVBQUksRUFBR0EsRUFBSWhCLEtBQUtNLE9BQVFVLElBQUssQ0FDcEMsSUFBSXJCLEVBQUtLLEtBQUtnQixHQUFHLEdBQ1AsTUFBTnJCLElBQ0ZvQixFQUF1QnBCLElBQU0sRUFFakMsQ0FFRixJQUFLLElBQUlzQixFQUFLLEVBQUdBLEVBQUtSLEVBQVFILE9BQVFXLElBQU0sQ0FDMUMsSUFBSWYsRUFBTyxHQUFHRyxPQUFPSSxFQUFRUSxJQUN6Qk4sR0FBVUksRUFBdUJiLEVBQUssV0FHckIsSUFBVlcsU0FDYyxJQUFaWCxFQUFLLEtBR2RBLEVBQUssR0FBSyxTQUFTRyxPQUFPSCxFQUFLLEdBQUdJLE9BQVMsRUFBSSxJQUFJRCxPQUFPSCxFQUFLLElBQU0sR0FBSSxNQUFNRyxPQUFPSCxFQUFLLEdBQUksTUFGL0ZBLEVBQUssR0FBS1csR0FNVkgsSUFDR1IsRUFBSyxJQUdSQSxFQUFLLEdBQUssVUFBVUcsT0FBT0gsRUFBSyxHQUFJLE1BQU1HLE9BQU9ILEVBQUssR0FBSSxLQUMxREEsRUFBSyxHQUFLUSxHQUhWUixFQUFLLEdBQUtRLEdBTVZFLElBQ0dWLEVBQUssSUFHUkEsRUFBSyxHQUFLLGNBQWNHLE9BQU9ILEVBQUssR0FBSSxPQUFPRyxPQUFPSCxFQUFLLEdBQUksS0FDL0RBLEVBQUssR0FBS1UsR0FIVlYsRUFBSyxHQUFLLEdBQUdHLE9BQU9PLElBTXhCZCxFQUFLTCxLQUFLUyxHQUNaLENBQ0YsRUFDT0osQ0FDVCxDLFVDbEZBSixFQUFPRSxRQUFVLFNBQVVzQixFQUFLQyxHQUk5QixPQUhLQSxJQUNIQSxFQUFVLENBQUMsR0FFUkQsR0FHTEEsRUFBTUUsT0FBT0YsRUFBSUcsV0FBYUgsRUFBSUksUUFBVUosR0FHeEMsZUFBZUssS0FBS0wsS0FDdEJBLEVBQU1BLEVBQUlNLE1BQU0sR0FBSSxJQUVsQkwsRUFBUU0sT0FDVlAsR0FBT0MsRUFBUU0sTUFLYixvQkFBb0JGLEtBQUtMLElBQVFDLEVBQVFPLFdBQ3BDLElBQUtyQixPQUFPYSxFQUFJUyxRQUFRLEtBQU0sT0FBT0EsUUFBUSxNQUFPLE9BQVEsS0FFOURULEdBakJFQSxDQWtCWCxDLFVDdkJBeEIsRUFBT0UsUUFBVSxTQUFVTSxHQUN6QixJQUFJQyxFQUFVRCxFQUFLLEdBQ2YwQixFQUFhMUIsRUFBSyxHQUN0QixJQUFLMEIsRUFDSCxPQUFPekIsRUFFVCxHQUFvQixtQkFBVDBCLEtBQXFCLENBQzlCLElBQUlDLEVBQVNELEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVU4sTUFDekRPLEVBQU8sK0RBQStEOUIsT0FBT3lCLEdBQzdFTSxFQUFnQixPQUFPL0IsT0FBTzhCLEVBQU0sT0FDeEMsTUFBTyxDQUFDaEMsR0FBU0UsT0FBTyxDQUFDK0IsSUFBZ0I3QixLQUFLLEtBQ2hELENBQ0EsTUFBTyxDQUFDSixHQUFTSSxLQUFLLEtBQ3hCLEMsVUNiQSxJQUFJOEIsRUFBYyxHQUNsQixTQUFTQyxFQUFxQkMsR0FFNUIsSUFEQSxJQUFJQyxHQUFVLEVBQ0xoQyxFQUFJLEVBQUdBLEVBQUk2QixFQUFZL0IsT0FBUUUsSUFDdEMsR0FBSTZCLEVBQVk3QixHQUFHK0IsYUFBZUEsRUFBWSxDQUM1Q0MsRUFBU2hDLEVBQ1QsS0FDRixDQUVGLE9BQU9nQyxDQUNULENBQ0EsU0FBU0MsRUFBYTNDLEVBQU1xQixHQUcxQixJQUZBLElBQUl1QixFQUFhLENBQUMsRUFDZEMsRUFBYyxHQUNUbkMsRUFBSSxFQUFHQSxFQUFJVixFQUFLUSxPQUFRRSxJQUFLLENBQ3BDLElBQUlOLEVBQU9KLEVBQUtVLEdBQ1piLEVBQUt3QixFQUFReUIsS0FBTzFDLEVBQUssR0FBS2lCLEVBQVF5QixLQUFPMUMsRUFBSyxHQUNsRDJDLEVBQVFILEVBQVcvQyxJQUFPLEVBQzFCNEMsRUFBYSxHQUFHbEMsT0FBT1YsRUFBSSxLQUFLVSxPQUFPd0MsR0FDM0NILEVBQVcvQyxHQUFNa0QsRUFBUSxFQUN6QixJQUFJQyxFQUFvQlIsRUFBcUJDLEdBQ3pDUSxFQUFNLENBQ1JDLElBQUs5QyxFQUFLLEdBQ1ZRLE1BQU9SLEVBQUssR0FDWitDLFVBQVcvQyxFQUFLLEdBQ2hCVSxTQUFVVixFQUFLLEdBQ2ZXLE1BQU9YLEVBQUssSUFFZCxJQUEyQixJQUF2QjRDLEVBQ0ZULEVBQVlTLEdBQW1CSSxhQUMvQmIsRUFBWVMsR0FBbUJLLFFBQVFKLE9BQ2xDLENBQ0wsSUFBSUksRUFBVUMsRUFBZ0JMLEVBQUs1QixHQUNuQ0EsRUFBUWtDLFFBQVU3QyxFQUNsQjZCLEVBQVlpQixPQUFPOUMsRUFBRyxFQUFHLENBQ3ZCK0IsV0FBWUEsRUFDWlksUUFBU0EsRUFDVEQsV0FBWSxHQUVoQixDQUNBUCxFQUFZbEQsS0FBSzhDLEVBQ25CLENBQ0EsT0FBT0ksQ0FDVCxDQUNBLFNBQVNTLEVBQWdCTCxFQUFLNUIsR0FDNUIsSUFBSW9DLEVBQU1wQyxFQUFRcUMsT0FBT3JDLEdBWXpCLE9BWEFvQyxFQUFJRSxPQUFPVixHQUNHLFNBQWlCVyxHQUM3QixHQUFJQSxFQUFRLENBQ1YsR0FBSUEsRUFBT1YsTUFBUUQsRUFBSUMsS0FBT1UsRUFBT2hELFFBQVVxQyxFQUFJckMsT0FBU2dELEVBQU9ULFlBQWNGLEVBQUlFLFdBQWFTLEVBQU85QyxXQUFhbUMsRUFBSW5DLFVBQVk4QyxFQUFPN0MsUUFBVWtDLEVBQUlsQyxNQUN6SixPQUVGMEMsRUFBSUUsT0FBT1YsRUFBTVcsRUFDbkIsTUFDRUgsRUFBSUksUUFFUixDQUVGLENBQ0FqRSxFQUFPRSxRQUFVLFNBQVVFLEVBQU1xQixHQUcvQixJQUFJeUMsRUFBa0JuQixFQUR0QjNDLEVBQU9BLEdBQVEsR0FEZnFCLEVBQVVBLEdBQVcsQ0FBQyxHQUd0QixPQUFPLFNBQWdCMEMsR0FDckJBLEVBQVVBLEdBQVcsR0FDckIsSUFBSyxJQUFJckQsRUFBSSxFQUFHQSxFQUFJb0QsRUFBZ0J0RCxPQUFRRSxJQUFLLENBQy9DLElBQ0lzRCxFQUFReEIsRUFES3NCLEVBQWdCcEQsSUFFakM2QixFQUFZeUIsR0FBT1osWUFDckIsQ0FFQSxJQURBLElBQUlhLEVBQXFCdEIsRUFBYW9CLEVBQVMxQyxHQUN0QzZDLEVBQUssRUFBR0EsRUFBS0osRUFBZ0J0RCxPQUFRMEQsSUFBTSxDQUNsRCxJQUNJQyxFQUFTM0IsRUFES3NCLEVBQWdCSSxJQUVLLElBQW5DM0IsRUFBWTRCLEdBQVFmLGFBQ3RCYixFQUFZNEIsR0FBUWQsVUFDcEJkLEVBQVlpQixPQUFPVyxFQUFRLEdBRS9CLENBQ0FMLEVBQWtCRyxDQUNwQixDQUNGLEMsVUNqRkEsSUFBSUcsRUFBTyxDQUFDLEVBK0JaeEUsRUFBT0UsUUFQUCxTQUEwQnVFLEVBQVFDLEdBQ2hDLElBQUlDLEVBdEJOLFNBQW1CQSxHQUNqQixRQUE0QixJQUFqQkgsRUFBS0csR0FBeUIsQ0FDdkMsSUFBSUMsRUFBY0MsU0FBU0MsY0FBY0gsR0FHekMsR0FBSUksT0FBT0MsbUJBQXFCSixhQUF1QkcsT0FBT0Msa0JBQzVELElBR0VKLEVBQWNBLEVBQVlLLGdCQUFnQkMsSUFDNUMsQ0FBRSxNQUFPQyxHQUVQUCxFQUFjLElBQ2hCLENBRUZKLEVBQUtHLEdBQVVDLENBQ2pCLENBQ0EsT0FBT0osRUFBS0csRUFDZCxDQUllUyxDQUFVWCxHQUN2QixJQUFLRSxFQUNILE1BQU0sSUFBSVUsTUFBTSwyR0FFbEJWLEVBQU9XLFlBQVlaLEVBQ3JCLEMsVUN2QkExRSxFQUFPRSxRQU5QLFNBQTRCdUIsR0FDMUIsSUFBSThELEVBQVVWLFNBQVNXLGNBQWMsU0FHckMsT0FGQS9ELEVBQVFnRSxjQUFjRixFQUFTOUQsRUFBUWlFLFlBQ3ZDakUsRUFBUWdELE9BQU9jLEVBQVM5RCxFQUFRQSxTQUN6QjhELENBQ1QsQyxnQkNDQXZGLEVBQU9FLFFBTlAsU0FBd0N5RixHQUN0QyxJQUFJQyxFQUFtRCxLQUNuREEsR0FDRkQsRUFBYUUsYUFBYSxRQUFTRCxFQUV2QyxDLFVDb0RBNUYsRUFBT0UsUUFqQlAsU0FBZ0J1QixHQUNkLEdBQXdCLG9CQUFib0QsU0FDVCxNQUFPLENBQ0xkLE9BQVEsV0FBbUIsRUFDM0JFLE9BQVEsV0FBbUIsR0FHL0IsSUFBSTBCLEVBQWVsRSxFQUFRcUUsbUJBQW1CckUsR0FDOUMsTUFBTyxDQUNMc0MsT0FBUSxTQUFnQlYsSUFqRDVCLFNBQWVzQyxFQUFjbEUsRUFBUzRCLEdBQ3BDLElBQUlDLEVBQU0sR0FDTkQsRUFBSW5DLFdBQ05vQyxHQUFPLGNBQWMzQyxPQUFPMEMsRUFBSW5DLFNBQVUsUUFFeENtQyxFQUFJckMsUUFDTnNDLEdBQU8sVUFBVTNDLE9BQU8wQyxFQUFJckMsTUFBTyxPQUVyQyxJQUFJTixPQUFpQyxJQUFkMkMsRUFBSWxDLE1BQ3ZCVCxJQUNGNEMsR0FBTyxTQUFTM0MsT0FBTzBDLEVBQUlsQyxNQUFNUCxPQUFTLEVBQUksSUFBSUQsT0FBTzBDLEVBQUlsQyxPQUFTLEdBQUksT0FFNUVtQyxHQUFPRCxFQUFJQyxJQUNQNUMsSUFDRjRDLEdBQU8sS0FFTEQsRUFBSXJDLFFBQ05zQyxHQUFPLEtBRUxELEVBQUluQyxXQUNOb0MsR0FBTyxLQUVULElBQUlDLEVBQVlGLEVBQUlFLFVBQ2hCQSxHQUE2QixvQkFBVHBCLE9BQ3RCbUIsR0FBTyx1REFBdUQzQyxPQUFPd0IsS0FBS0UsU0FBU0MsbUJBQW1CQyxLQUFLQyxVQUFVZSxNQUFlLFFBS3RJOUIsRUFBUXNFLGtCQUFrQnpDLEVBQUtxQyxFQUFjbEUsRUFBUUEsUUFDdkQsQ0FvQk11RSxDQUFNTCxFQUFjbEUsRUFBUzRCLEVBQy9CLEVBQ0FZLE9BQVEsWUFyQlosU0FBNEIwQixHQUUxQixHQUFnQyxPQUE1QkEsRUFBYU0sV0FDZixPQUFPLEVBRVROLEVBQWFNLFdBQVdDLFlBQVlQLEVBQ3RDLENBZ0JNUSxDQUFtQlIsRUFDckIsRUFFSixDLFVDOUNBM0YsRUFBT0UsUUFWUCxTQUEyQm9ELEVBQUtxQyxHQUM5QixHQUFJQSxFQUFhUyxXQUNmVCxFQUFhUyxXQUFXQyxRQUFVL0MsTUFDN0IsQ0FDTCxLQUFPcUMsRUFBYVcsWUFDbEJYLEVBQWFPLFlBQVlQLEVBQWFXLFlBRXhDWCxFQUFhTCxZQUFZVCxTQUFTMEIsZUFBZWpELEdBQ25ELENBQ0YsQywyWUNYSWtELEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQnRGLElBQWpCdUYsRUFDSCxPQUFPQSxFQUFhekcsUUFHckIsSUFBSUYsRUFBU3dHLEVBQXlCRSxHQUFZLENBQ2pEekcsR0FBSXlHLEVBRUp4RyxRQUFTLENBQUMsR0FPWCxPQUhBMEcsRUFBb0JGLEdBQVUxRyxFQUFRQSxFQUFPRSxRQUFTdUcsR0FHL0N6RyxFQUFPRSxPQUNmLENBR0F1RyxFQUFvQkksRUFBSUQsRUN4QnhCSCxFQUFvQkssRUFBSzlHLElBQ3hCLElBQUkrRyxFQUFTL0csR0FBVUEsRUFBTzJCLFdBQzdCLElBQU8zQixFQUFpQixRQUN4QixJQUFNLEVBRVAsT0FEQXlHLEVBQW9CTyxFQUFFRCxFQUFRLENBQUVFLEVBQUdGLElBQzVCQSxDQUFNLEVDTGROLEVBQW9CTyxFQUFJLENBQUM5RyxFQUFTZ0gsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYVCxFQUFvQlcsRUFBRUYsRUFBWUMsS0FBU1YsRUFBb0JXLEVBQUVsSCxFQUFTaUgsSUFDNUVFLE9BQU9DLGVBQWVwSCxFQUFTaUgsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLElBRTFFLEVDTkRWLEVBQW9CZ0IsRUFBSSxXQUN2QixHQUEwQixpQkFBZkMsV0FBeUIsT0FBT0EsV0FDM0MsSUFDQyxPQUFPcEgsTUFBUSxJQUFJcUgsU0FBUyxjQUFiLEVBQ2hCLENBQUUsTUFBT3hDLEdBQ1IsR0FBc0IsaUJBQVhKLE9BQXFCLE9BQU9BLE1BQ3hDLENBQ0EsQ0FQdUIsR0NBeEIwQixFQUFvQlcsRUFBSSxDQUFDL0QsRUFBS3VFLElBQVVQLE9BQU9RLFVBQVVDLGVBQWVDLEtBQUsxRSxFQUFLdUUsRyxNQ0FsRixJQUFJSSxFQUNBdkIsRUFBb0JnQixFQUFFUSxnQkFBZUQsRUFBWXZCLEVBQW9CZ0IsRUFBRVMsU0FBVyxJQUN0RixJQUFJckQsRUFBVzRCLEVBQW9CZ0IsRUFBRTVDLFNBQ3JDLElBQUttRCxHQUFhbkQsSUFDYkEsRUFBU3NELGdCQUNaSCxFQUFZbkQsRUFBU3NELGNBQWNDLE1BQy9CSixHQUFXLENBQ2YsSUFBSUssRUFBVXhELEVBQVN5RCxxQkFBcUIsVUFDekNELEVBQVF6SCxTQUFRb0gsRUFBWUssRUFBUUEsRUFBUXpILE9BQVMsR0FBR3dILElBQzVELENBSUQsSUFBS0osRUFBVyxNQUFNLElBQUkzQyxNQUFNLHlEQUNoQzJDLEVBQVlBLEVBQVUvRixRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRndFLEVBQW9COEIsRUFBSVAsQyxLQ2Z4QnZCLEVBQW9CK0IsRUFBSTNELFNBQVM0RCxTQUFXQyxLQUFLUixTQUFTUyxLQ0ExRGxDLEVBQW9CbUMsUUFBS3hILEUsTUNBVixTQUFTeUgsRUFBYUMsRUFBVUMsR0FDN0MsR0FBSUEsRUFBS25JLE9BQVNrSSxFQUNoQixNQUFNLElBQUlFLFVBQVVGLEVBQVcsYUFBZUEsRUFBVyxFQUFJLElBQU0sSUFBTSx1QkFBeUJDLEVBQUtuSSxPQUFTLFdBRXBILENDSkEsU0FBU3FJLEVBQVE1RixHQUFtVixPQUF0TzRGLEVBQXJELG1CQUFYQyxRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZNEYsRUFBUTVGLEVBQU0sQ0NBelgsU0FBUyxFQUFRQSxHQUFtVixPQUF0TyxFQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksRUFBUUEsRUFBTSxDQWtDMVcsU0FBU2dHLEVBQU9DLEdBQzdCVCxFQUFhLEVBQUdVLFdBQ2hCLElBQUlDLEVBQVNuQyxPQUFPUSxVQUFVeEgsU0FBUzBILEtBQUt1QixHQUU1QyxPQUFJQSxhQUFvQkcsTUFBOEIsV0FBdEIsRUFBUUgsSUFBcUMsa0JBQVhFLEVBRXpELElBQUlDLEtBQUtILEVBQVNJLFdBQ0ksaUJBQWJKLEdBQW9DLG9CQUFYRSxFQUNsQyxJQUFJQyxLQUFLSCxJQUVTLGlCQUFiQSxHQUFvQyxvQkFBWEUsR0FBb0Qsb0JBQVpHLFVBRTNFQSxRQUFRQyxLQUFLLHNOQUViRCxRQUFRQyxNQUFLLElBQUl2RSxPQUFRd0UsUUFHcEIsSUFBSUosS0FBS0ssS0FFcEIsQ0NyRGUsU0FBU0MsRUFBVUMsR0FDaEMsR0FBb0IsT0FBaEJBLElBQXdDLElBQWhCQSxJQUF3QyxJQUFoQkEsRUFDbEQsT0FBT0YsSUFHVCxJQUFJRyxFQUFTQyxPQUFPRixHQUVwQixPQUFJRyxNQUFNRixHQUNEQSxFQUdGQSxFQUFTLEVBQUlHLEtBQUtDLEtBQUtKLEdBQVVHLEtBQUtFLE1BQU1MLEVBQ3JELENDVWUsU0FBU00sRUFBZ0JDLEVBQVdDLEdBR2pELE9BRkE1QixFQUFhLEVBQUdVLFdDREgsU0FBeUJpQixFQUFXQyxHQUNqRDVCLEVBQWEsRUFBR1UsV0FDaEIsSUFBSW1CLEVBQVlyQixFQUFPbUIsR0FBV2QsVUFDOUJpQixFQUFTWixFQUFVVSxHQUN2QixPQUFPLElBQUloQixLQUFLaUIsRUFBWUMsRUFDOUIsQ0RGU0MsQ0FBZ0JKLEdBRFZULEVBQVVVLEdBRXpCLENFeEJlLFNBQVNJLEVBQWtCTCxHQUN4QzNCLEVBQWEsRUFBR1UsV0FDaEIsSUFDSXVCLEVBQU96QixFQUFPbUIsR0FDZE8sRUFBTUQsRUFBS0UsWUFDWEMsR0FBUUYsRUFITyxFQUdjLEVBQUksR0FBS0EsRUFIdkIsRUFNbkIsT0FGQUQsRUFBS0ksV0FBV0osRUFBS0ssYUFBZUYsR0FDcENILEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsQ0NSZSxTQUFTTyxFQUFrQmIsR0FDeEMzQixFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RjLEVBQU9SLEVBQUtTLGlCQUNaQyxFQUE0QixJQUFJL0IsS0FBSyxHQUN6QytCLEVBQTBCQyxlQUFlSCxFQUFPLEVBQUcsRUFBRyxHQUN0REUsRUFBMEJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDL0MsSUFBSU0sRUFBa0JiLEVBQWtCVyxHQUNwQ0csRUFBNEIsSUFBSWxDLEtBQUssR0FDekNrQyxFQUEwQkYsZUFBZUgsRUFBTSxFQUFHLEdBQ2xESyxFQUEwQlAsWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUMvQyxJQUFJUSxFQUFrQmYsRUFBa0JjLEdBRXhDLE9BQUliLEVBQUtwQixXQUFhZ0MsRUFBZ0JoQyxVQUM3QjRCLEVBQU8sRUFDTFIsRUFBS3BCLFdBQWFrQyxFQUFnQmxDLFVBQ3BDNEIsRUFFQUEsRUFBTyxDQUVsQixDQ2xCZSxTQUFTTyxFQUFjckIsR0FDcEMzQixFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RTLEVBQU9KLEVBQWtCQyxHQUFNcEIsVUNMdEIsU0FBK0JjLEdBQzVDM0IsRUFBYSxFQUFHVSxXQUNoQixJQUFJK0IsRUFBT0QsRUFBa0JiLEdBQ3pCc0IsRUFBa0IsSUFBSXJDLEtBQUssR0FJL0IsT0FIQXFDLEVBQWdCTCxlQUFlSCxFQUFNLEVBQUcsR0FDeENRLEVBQWdCVixZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQzFCUCxFQUFrQmlCLEVBRS9CLENESGlEQyxDQUFzQmpCLEdBQU1wQixVQUkzRSxPQUFPVSxLQUFLNEIsTUFBTWYsRUFSTyxRQVF3QixDQUNuRCxDRWJBLElBQUlnQixFQUFpQixDQUFDLEVBQ2YsU0FBU0MsSUFDZCxPQUFPRCxDQUNULENDQ2UsU0FBU0UsRUFBZTNCLEVBQVcvSSxHQUNoRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT0MsRUFBdUJDLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCVSxFQUFlN0MsRUFBKzBCLFFBQXAwQnFDLEVBQThoQixRQUF0aEJDLEVBQWtkLFFBQXpjQyxFQUE2RyxRQUFwR0MsRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JHLG9CQUFvQyxJQUFWTixFQUFtQkEsRUFBUUwsRUFBZVcsb0JBQW9DLElBQVZQLEVBQW1CQSxFQUE0RCxRQUFuREssRUFBd0JULEVBQWVZLGNBQThDLElBQTFCSCxHQUF5RyxRQUE1REMsRUFBeUJELEVBQXNCakwsZUFBZ0QsSUFBM0JrTCxPQUE5RSxFQUEySEEsRUFBdUJDLG9CQUFtQyxJQUFUUixFQUFrQkEsRUFBTyxHQUVuNEIsS0FBTVEsR0FBZ0IsR0FBS0EsR0FBZ0IsR0FDekMsTUFBTSxJQUFJRSxXQUFXLG9EQUd2QixJQUFJaEMsRUFBT3pCLEVBQU9tQixHQUNkTyxFQUFNRCxFQUFLRSxZQUNYQyxHQUFRRixFQUFNNkIsRUFBZSxFQUFJLEdBQUs3QixFQUFNNkIsRUFHaEQsT0FGQTlCLEVBQUtJLFdBQVdKLEVBQUtLLGFBQWVGLEdBQ3BDSCxFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULENDaEJlLFNBQVNpQyxFQUFldkMsRUFBVy9JLEdBQ2hELElBQUkySyxFQUFNQyxFQUFPQyxFQUFPVSxFQUF1QlIsRUFBaUJDLEVBQXVCQyxFQUF1QkMsRUFFOUc5RCxFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RjLEVBQU9SLEVBQUtTLGlCQUNaVSxFQUFpQkMsSUFDakJlLEVBQXdCbEQsRUFBbTNCLFFBQXgyQnFDLEVBQXlqQixRQUFqakJDLEVBQW9lLFFBQTNkQyxFQUFzSCxRQUE3R1UsRUFBd0J2TCxhQUF5QyxFQUFTQSxFQUFRd0wsNkJBQTZELElBQTFCRCxFQUFtQ0EsRUFBd0J2TCxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JRLDZCQUE2QyxJQUFWWCxFQUFtQkEsRUFBUUwsRUFBZWdCLDZCQUE2QyxJQUFWWixFQUFtQkEsRUFBNEQsUUFBbkRLLEVBQXdCVCxFQUFlWSxjQUE4QyxJQUExQkgsR0FBeUcsUUFBNURDLEVBQXlCRCxFQUFzQmpMLGVBQWdELElBQTNCa0wsT0FBOUUsRUFBMkhBLEVBQXVCTSw2QkFBNEMsSUFBVGIsRUFBa0JBLEVBQU8sR0FFaDdCLEtBQU1hLEdBQXlCLEdBQUtBLEdBQXlCLEdBQzNELE1BQU0sSUFBSUgsV0FBVyw2REFHdkIsSUFBSUksRUFBc0IsSUFBSXpELEtBQUssR0FDbkN5RCxFQUFvQnpCLGVBQWVILEVBQU8sRUFBRyxFQUFHMkIsR0FDaERDLEVBQW9COUIsWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUN6QyxJQUFJTSxFQUFrQlMsRUFBZWUsRUFBcUJ6TCxHQUN0RDBMLEVBQXNCLElBQUkxRCxLQUFLLEdBQ25DMEQsRUFBb0IxQixlQUFlSCxFQUFNLEVBQUcyQixHQUM1Q0UsRUFBb0IvQixZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ3pDLElBQUlRLEVBQWtCTyxFQUFlZ0IsRUFBcUIxTCxHQUUxRCxPQUFJcUosRUFBS3BCLFdBQWFnQyxFQUFnQmhDLFVBQzdCNEIsRUFBTyxFQUNMUixFQUFLcEIsV0FBYWtDLEVBQWdCbEMsVUFDcEM0QixFQUVBQSxFQUFPLENBRWxCLENDN0JlLFNBQVM4QixFQUFXNUMsRUFBVy9JLEdBQzVDb0gsRUFBYSxFQUFHVSxXQUNoQixJQUFJdUIsRUFBT3pCLEVBQU9tQixHQUNkUyxFQUFPa0IsRUFBZXJCLEVBQU1ySixHQUFTaUksVUNINUIsU0FBNEJjLEVBQVcvSSxHQUNwRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT1UsRUFBdUJSLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCZSxFQUF3QmxELEVBQW0zQixRQUF4MkJxQyxFQUF5akIsUUFBampCQyxFQUFvZSxRQUEzZEMsRUFBc0gsUUFBN0dVLEVBQXdCdkwsYUFBeUMsRUFBU0EsRUFBUXdMLDZCQUE2RCxJQUExQkQsRUFBbUNBLEVBQXdCdkwsU0FBeUYsUUFBdEMrSyxFQUFrQi9LLEVBQVFvTCxjQUF3QyxJQUFwQkwsR0FBNEYsUUFBckRDLEVBQXdCRCxFQUFnQi9LLGVBQStDLElBQTFCZ0wsT0FBNUosRUFBd01BLEVBQXNCUSw2QkFBNkMsSUFBVlgsRUFBbUJBLEVBQVFMLEVBQWVnQiw2QkFBNkMsSUFBVlosRUFBbUJBLEVBQTRELFFBQW5ESyxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1Qk0sNkJBQTRDLElBQVRiLEVBQWtCQSxFQUFPLEdBQzU2QmQsRUFBT3lCLEVBQWV2QyxFQUFXL0ksR0FDakM0TCxFQUFZLElBQUk1RCxLQUFLLEdBSXpCLE9BSEE0RCxFQUFVNUIsZUFBZUgsRUFBTSxFQUFHMkIsR0FDbENJLEVBQVVqQyxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ3BCZSxFQUFla0IsRUFBVzVMLEVBRXZDLENEVHVENkwsQ0FBbUJ4QyxFQUFNckosR0FBU2lJLFVBSXZGLE9BQU9VLEtBQUs0QixNQUFNZixFQVJPLFFBUXdCLENBQ25ELENFYmUsU0FBU3NDLEVBQWdCdEQsRUFBUXVELEdBSTlDLElBSEEsSUFBSUMsRUFBT3hELEVBQVMsRUFBSSxJQUFNLEdBQzFCeUQsRUFBU3RELEtBQUt1RCxJQUFJMUQsR0FBUTVKLFdBRXZCcU4sRUFBTzlNLE9BQVM0TSxHQUNyQkUsRUFBUyxJQUFNQSxFQUdqQixPQUFPRCxFQUFPQyxDQUNoQixDQzBFQSxRQW5FSyxTQUFXNUMsRUFBTThDLEdBU2xCLElBQUlDLEVBQWEvQyxFQUFLUyxpQkFFbEJELEVBQU91QyxFQUFhLEVBQUlBLEVBQWEsRUFBSUEsRUFDN0MsT0FBT04sRUFBMEIsT0FBVkssRUFBaUJ0QyxFQUFPLElBQU1BLEVBQU1zQyxFQUFNaE4sT0FDbkUsRUFzREYsRUFwREssU0FBV2tLLEVBQU04QyxHQUNsQixJQUFJRSxFQUFRaEQsRUFBS2lELGNBQ2pCLE1BQWlCLE1BQVZILEVBQWdCbE0sT0FBT29NLEVBQVEsR0FBS1AsRUFBZ0JPLEVBQVEsRUFBRyxFQUN4RSxFQWlERixFQS9DSyxTQUFXaEQsRUFBTThDLEdBQ2xCLE9BQU9MLEVBQWdCekMsRUFBS0ssYUFBY3lDLEVBQU1oTixPQUNsRCxFQTZDRixFQXZCSyxTQUFXa0ssRUFBTThDLEdBQ2xCLE9BQU9MLEVBQWdCekMsRUFBS2tELGNBQWdCLElBQU0sR0FBSUosRUFBTWhOLE9BQzlELEVBcUJGLEVBbkJLLFNBQVdrSyxFQUFNOEMsR0FDbEIsT0FBT0wsRUFBZ0J6QyxFQUFLa0QsY0FBZUosRUFBTWhOLE9BQ25ELEVBaUJGLEVBZkssU0FBV2tLLEVBQU04QyxHQUNsQixPQUFPTCxFQUFnQnpDLEVBQUttRCxnQkFBaUJMLEVBQU1oTixPQUNyRCxFQWFGLEVBWEssU0FBV2tLLEVBQU04QyxHQUNsQixPQUFPTCxFQUFnQnpDLEVBQUtvRCxnQkFBaUJOLEVBQU1oTixPQUNyRCxFQVNGLEVBUEssU0FBV2tLLEVBQU04QyxHQUNsQixJQUFJTyxFQUFpQlAsRUFBTWhOLE9BQ3ZCd04sRUFBZXRELEVBQUt1RCxxQkFFeEIsT0FBT2QsRUFEaUJuRCxLQUFLRSxNQUFNOEQsRUFBZWhFLEtBQUtrRSxJQUFJLEdBQUlILEVBQWlCLElBQ3RDUCxFQUFNaE4sT0FDbEQsRUMxRUYsSUF3REksRUFBYSxDQUVmMk4sRUFBRyxTQUFXekQsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlDLEVBQU0zRCxFQUFLUyxpQkFBbUIsRUFBSSxFQUFJLEVBRTFDLE9BQVFxQyxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9ZLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sZ0JBSVgsSUFBSyxRQUNILE9BQU9GLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sV0FLWCxRQUNFLE9BQU9GLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sU0FHZixFQUVBQyxFQUFHLFNBQVc3RCxFQUFNOEMsRUFBT1ksR0FFekIsR0FBYyxPQUFWWixFQUFnQixDQUNsQixJQUFJQyxFQUFhL0MsRUFBS1MsaUJBRWxCRCxFQUFPdUMsRUFBYSxFQUFJQSxFQUFhLEVBQUlBLEVBQzdDLE9BQU9XLEVBQVNJLGNBQWN0RCxFQUFNLENBQ2xDdUQsS0FBTSxRQUVWLENBRUEsT0FBT0MsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQW1CLEVBQUcsU0FBV2pFLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSXVOLEVBQWlCakMsRUFBZWpDLEVBQU1ySixHQUV0Q3dOLEVBQVdELEVBQWlCLEVBQUlBLEVBQWlCLEVBQUlBLEVBRXpELE1BQWMsT0FBVnBCLEVBRUtMLEVBRFkwQixFQUFXLElBQ08sR0FJekIsT0FBVnJCLEVBQ0tZLEVBQVNJLGNBQWNLLEVBQVUsQ0FDdENKLEtBQU0sU0FLSHRCLEVBQWdCMEIsRUFBVXJCLEVBQU1oTixPQUN6QyxFQUVBc08sRUFBRyxTQUFXcEUsRUFBTThDLEdBR2xCLE9BQU9MLEVBRldsQyxFQUFrQlAsR0FFQThDLEVBQU1oTixPQUM1QyxFQVVBdU8sRUFBRyxTQUFXckUsRUFBTThDLEdBRWxCLE9BQU9MLEVBREl6QyxFQUFLUyxpQkFDYXFDLEVBQU1oTixPQUNyQyxFQUVBd08sRUFBRyxTQUFXdEUsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlhLEVBQVVqRixLQUFLQyxNQUFNUyxFQUFLaUQsY0FBZ0IsR0FBSyxHQUVuRCxPQUFRSCxHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzJOLEdBR2hCLElBQUssS0FDSCxPQUFPOUIsRUFBZ0I4QixFQUFTLEdBR2xDLElBQUssS0FDSCxPQUFPYixFQUFTSSxjQUFjUyxFQUFTLENBQ3JDUixLQUFNLFlBSVYsSUFBSyxNQUNILE9BQU9MLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTYSxRQUFRQSxFQUFTLENBQy9CWCxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU9kLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sT0FDUFksUUFBUyxlQUdqQixFQUVBQyxFQUFHLFNBQVd6RSxFQUFNOEMsRUFBT1ksR0FDekIsSUFBSWEsRUFBVWpGLEtBQUtDLE1BQU1TLEVBQUtpRCxjQUFnQixHQUFLLEdBRW5ELE9BQVFILEdBRU4sSUFBSyxJQUNILE9BQU9sTSxPQUFPMk4sR0FHaEIsSUFBSyxLQUNILE9BQU85QixFQUFnQjhCLEVBQVMsR0FHbEMsSUFBSyxLQUNILE9BQU9iLEVBQVNJLGNBQWNTLEVBQVMsQ0FDckNSLEtBQU0sWUFJVixJQUFLLE1BQ0gsT0FBT0wsRUFBU2EsUUFBUUEsRUFBUyxDQUMvQlgsTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU2EsUUFBUUEsRUFBUyxDQUMvQlgsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUFFLEVBQUcsU0FBVzFFLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJVixFQUFRaEQsRUFBS2lELGNBRWpCLE9BQVFILEdBQ04sSUFBSyxJQUNMLElBQUssS0FDSCxPQUFPa0IsRUFBa0JoRSxFQUFNOEMsR0FHakMsSUFBSyxLQUNILE9BQU9ZLEVBQVNJLGNBQWNkLEVBQVEsRUFBRyxDQUN2Q2UsS0FBTSxVQUlWLElBQUssTUFDSCxPQUFPTCxFQUFTVixNQUFNQSxFQUFPLENBQzNCWSxNQUFPLGNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT2QsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxTQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTVixNQUFNQSxFQUFPLENBQzNCWSxNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQUcsRUFBRyxTQUFXM0UsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlWLEVBQVFoRCxFQUFLaUQsY0FFakIsT0FBUUgsR0FFTixJQUFLLElBQ0gsT0FBT2xNLE9BQU9vTSxFQUFRLEdBR3hCLElBQUssS0FDSCxPQUFPUCxFQUFnQk8sRUFBUSxFQUFHLEdBR3BDLElBQUssS0FDSCxPQUFPVSxFQUFTSSxjQUFjZCxFQUFRLEVBQUcsQ0FDdkNlLEtBQU0sVUFJVixJQUFLLE1BQ0gsT0FBT0wsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVNWLE1BQU1BLEVBQU8sQ0FDM0JZLE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUFJLEVBQUcsU0FBVzVFLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSWtPLEVBQU92QyxFQUFXdEMsRUFBTXJKLEdBRTVCLE1BQWMsT0FBVm1NLEVBQ0tZLEVBQVNJLGNBQWNlLEVBQU0sQ0FDbENkLEtBQU0sU0FJSHRCLEVBQWdCb0MsRUFBTS9CLEVBQU1oTixPQUNyQyxFQUVBZ1AsRUFBRyxTQUFXOUUsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlxQixFQUFVaEUsRUFBY2YsR0FFNUIsTUFBYyxPQUFWOEMsRUFDS1ksRUFBU0ksY0FBY2lCLEVBQVMsQ0FDckNoQixLQUFNLFNBSUh0QixFQUFnQnNDLEVBQVNqQyxFQUFNaE4sT0FDeEMsRUFFQW9HLEVBQUcsU0FBVzhELEVBQU04QyxFQUFPWSxHQUN6QixNQUFjLE9BQVZaLEVBQ0tZLEVBQVNJLGNBQWM5RCxFQUFLSyxhQUFjLENBQy9DMEQsS0FBTSxTQUlIQyxFQUFrQmhFLEVBQU04QyxFQUNqQyxFQUVBa0MsRUFBRyxTQUFXaEYsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUl1QixFQ3RWTyxTQUF5QnZGLEdBQ3RDM0IsRUFBYSxFQUFHVSxXQUNoQixJQUFJdUIsRUFBT3pCLEVBQU9tQixHQUNkRSxFQUFZSSxFQUFLcEIsVUFDckJvQixFQUFLa0YsWUFBWSxFQUFHLEdBQ3BCbEYsRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUMxQixJQUNJNkUsRUFBYXZGLEVBRFVJLEVBQUtwQixVQUVoQyxPQUFPVSxLQUFLRSxNQUFNMkYsRUFUTSxPQVM4QixDQUN4RCxDRDZVb0JDLENBQWdCcEYsR0FFaEMsTUFBYyxPQUFWOEMsRUFDS1ksRUFBU0ksY0FBY21CLEVBQVcsQ0FDdkNsQixLQUFNLGNBSUh0QixFQUFnQndDLEVBQVduQyxFQUFNaE4sT0FDMUMsRUFFQXVQLEVBQUcsU0FBV3JGLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJNEIsRUFBWXRGLEVBQUtFLFlBRXJCLE9BQVE0QyxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9ZLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFNBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxRQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQW5LLEVBQUcsU0FBVzJGLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSTJPLEVBQVl0RixFQUFLRSxZQUNqQnFGLEdBQWtCRCxFQUFZM08sRUFBUW1MLGFBQWUsR0FBSyxHQUFLLEVBRW5FLE9BQVFnQixHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzJPLEdBR2hCLElBQUssS0FDSCxPQUFPOUMsRUFBZ0I4QyxFQUFnQixHQUd6QyxJQUFLLEtBQ0gsT0FBTzdCLEVBQVNJLGNBQWN5QixFQUFnQixDQUM1Q3hCLEtBQU0sUUFHVixJQUFLLE1BQ0gsT0FBT0wsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssU0FDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFFBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sT0FDUFksUUFBUyxlQUdqQixFQUVBZ0IsRUFBRyxTQUFXeEYsRUFBTThDLEVBQU9ZLEVBQVUvTSxHQUNuQyxJQUFJMk8sRUFBWXRGLEVBQUtFLFlBQ2pCcUYsR0FBa0JELEVBQVkzTyxFQUFRbUwsYUFBZSxHQUFLLEdBQUssRUFFbkUsT0FBUWdCLEdBRU4sSUFBSyxJQUNILE9BQU9sTSxPQUFPMk8sR0FHaEIsSUFBSyxLQUNILE9BQU85QyxFQUFnQjhDLEVBQWdCekMsRUFBTWhOLFFBRy9DLElBQUssS0FDSCxPQUFPNE4sRUFBU0ksY0FBY3lCLEVBQWdCLENBQzVDeEIsS0FBTSxRQUdWLElBQUssTUFDSCxPQUFPTCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLGNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sUUFDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUF4TyxFQUFHLFNBQVdnSyxFQUFNOEMsRUFBT1ksR0FDekIsSUFBSTRCLEVBQVl0RixFQUFLRSxZQUNqQnVGLEVBQTZCLElBQWRILEVBQWtCLEVBQUlBLEVBRXpDLE9BQVF4QyxHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzZPLEdBR2hCLElBQUssS0FDSCxPQUFPaEQsRUFBZ0JnRCxFQUFjM0MsRUFBTWhOLFFBRzdDLElBQUssS0FDSCxPQUFPNE4sRUFBU0ksY0FBYzJCLEVBQWMsQ0FDMUMxQixLQUFNLFFBSVYsSUFBSyxNQUNILE9BQU9MLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFNBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxRQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXJJLEVBQUcsU0FBVzZELEVBQU04QyxFQUFPWSxHQUN6QixJQUNJZ0MsRUFEUTFGLEVBQUtrRCxjQUNnQixJQUFNLEVBQUksS0FBTyxLQUVsRCxPQUFRSixHQUNOLElBQUssSUFDTCxJQUFLLEtBQ0gsT0FBT1ksRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxjQUNQWSxRQUFTLGVBR2IsSUFBSyxNQUNILE9BQU9kLEVBQVNpQyxVQUFVRCxFQUFvQixDQUM1QzlCLE1BQU8sY0FDUFksUUFBUyxlQUNSb0IsY0FFTCxJQUFLLFFBQ0gsT0FBT2xDLEVBQVNpQyxVQUFVRCxFQUFvQixDQUM1QzlCLE1BQU8sU0FDUFksUUFBUyxlQUliLFFBQ0UsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUE5RyxFQUFHLFNBQVdzQyxFQUFNOEMsRUFBT1ksR0FDekIsSUFDSWdDLEVBREFHLEVBQVE3RixFQUFLa0QsY0FXakIsT0FQRXdDLEVBRFksS0FBVkcsRUF2akJBLE9BeWpCaUIsSUFBVkEsRUExakJILFdBNmpCZUEsRUFBUSxJQUFNLEVBQUksS0FBTyxLQUd4Qy9DLEdBQ04sSUFBSyxJQUNMLElBQUssS0FDSCxPQUFPWSxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLGNBQ1BZLFFBQVMsZUFHYixJQUFLLE1BQ0gsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxjQUNQWSxRQUFTLGVBQ1JvQixjQUVMLElBQUssUUFDSCxPQUFPbEMsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPZCxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXNCLEVBQUcsU0FBVzlGLEVBQU04QyxFQUFPWSxHQUN6QixJQUNJZ0MsRUFEQUcsRUFBUTdGLEVBQUtrRCxjQWFqQixPQVRFd0MsRUFERUcsR0FBUyxHQTdsQk4sVUErbEJJQSxHQUFTLEdBaG1CWCxZQWttQkVBLEdBQVMsRUFubUJiLFVBR0YsUUFzbUJHL0MsR0FDTixJQUFLLElBQ0wsSUFBSyxLQUNMLElBQUssTUFDSCxPQUFPWSxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLGNBQ1BZLFFBQVMsZUFHYixJQUFLLFFBQ0gsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPZCxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXVCLEVBQUcsU0FBVy9GLEVBQU04QyxFQUFPWSxHQUN6QixHQUFjLE9BQVZaLEVBQWdCLENBQ2xCLElBQUkrQyxFQUFRN0YsRUFBS2tELGNBQWdCLEdBRWpDLE9BRGMsSUFBVjJDLElBQWFBLEVBQVEsSUFDbEJuQyxFQUFTSSxjQUFjK0IsRUFBTyxDQUNuQzlCLEtBQU0sUUFFVixDQUVBLE9BQU9DLEVBQWtCaEUsRUFBTThDLEVBQ2pDLEVBRUFrRCxFQUFHLFNBQVdoRyxFQUFNOEMsRUFBT1ksR0FDekIsTUFBYyxPQUFWWixFQUNLWSxFQUFTSSxjQUFjOUQsRUFBS2tELGNBQWUsQ0FDaERhLEtBQU0sU0FJSEMsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQW1ELEVBQUcsU0FBV2pHLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJbUMsRUFBUTdGLEVBQUtrRCxjQUFnQixHQUVqQyxNQUFjLE9BQVZKLEVBQ0tZLEVBQVNJLGNBQWMrQixFQUFPLENBQ25DOUIsS0FBTSxTQUlIdEIsRUFBZ0JvRCxFQUFPL0MsRUFBTWhOLE9BQ3RDLEVBRUFVLEVBQUcsU0FBV3dKLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJbUMsRUFBUTdGLEVBQUtrRCxjQUdqQixPQUZjLElBQVYyQyxJQUFhQSxFQUFRLElBRVgsT0FBVi9DLEVBQ0tZLEVBQVNJLGNBQWMrQixFQUFPLENBQ25DOUIsS0FBTSxTQUlIdEIsRUFBZ0JvRCxFQUFPL0MsRUFBTWhOLE9BQ3RDLEVBRUFpRyxFQUFHLFNBQVdpRSxFQUFNOEMsRUFBT1ksR0FDekIsTUFBYyxPQUFWWixFQUNLWSxFQUFTSSxjQUFjOUQsRUFBS21ELGdCQUFpQixDQUNsRFksS0FBTSxXQUlIQyxFQUFrQmhFLEVBQU04QyxFQUNqQyxFQUVBb0QsRUFBRyxTQUFXbEcsRUFBTThDLEVBQU9ZLEdBQ3pCLE1BQWMsT0FBVlosRUFDS1ksRUFBU0ksY0FBYzlELEVBQUtvRCxnQkFBaUIsQ0FDbERXLEtBQU0sV0FJSEMsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQXFELEVBQUcsU0FBV25HLEVBQU04QyxHQUNsQixPQUFPa0IsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQXNELEVBQUcsU0FBV3BHLEVBQU04QyxFQUFPdUQsRUFBVzFQLEdBQ3BDLElBQ0kyUCxHQURlM1AsRUFBUTRQLGVBQWlCdkcsR0FDVndHLG9CQUVsQyxHQUF1QixJQUFuQkYsRUFDRixNQUFPLElBR1QsT0FBUXhELEdBRU4sSUFBSyxJQUNILE9BQU8yRCxFQUFrQ0gsR0FLM0MsSUFBSyxPQUNMLElBQUssS0FFSCxPQUFPSSxFQUFlSixHQVF4QixRQUNFLE9BQU9JLEVBQWVKLEVBQWdCLEtBRTVDLEVBRUFLLEVBQUcsU0FBVzNHLEVBQU04QyxFQUFPdUQsRUFBVzFQLEdBQ3BDLElBQ0kyUCxHQURlM1AsRUFBUTRQLGVBQWlCdkcsR0FDVndHLG9CQUVsQyxPQUFRMUQsR0FFTixJQUFLLElBQ0gsT0FBTzJELEVBQWtDSCxHQUszQyxJQUFLLE9BQ0wsSUFBSyxLQUVILE9BQU9JLEVBQWVKLEdBUXhCLFFBQ0UsT0FBT0ksRUFBZUosRUFBZ0IsS0FFNUMsRUFFQU0sRUFBRyxTQUFXNUcsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFDSTJQLEdBRGUzUCxFQUFRNFAsZUFBaUJ2RyxHQUNWd0csb0JBRWxDLE9BQVExRCxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE1BQU8sTUFBUStELEVBQW9CUCxFQUFnQixLQUlyRCxRQUNFLE1BQU8sTUFBUUksRUFBZUosRUFBZ0IsS0FFcEQsRUFFQVEsRUFBRyxTQUFXOUcsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFDSTJQLEdBRGUzUCxFQUFRNFAsZUFBaUJ2RyxHQUNWd0csb0JBRWxDLE9BQVExRCxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE1BQU8sTUFBUStELEVBQW9CUCxFQUFnQixLQUlyRCxRQUNFLE1BQU8sTUFBUUksRUFBZUosRUFBZ0IsS0FFcEQsRUFFQVMsRUFBRyxTQUFXL0csRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFBSXFRLEVBQWVyUSxFQUFRNFAsZUFBaUJ2RyxFQUU1QyxPQUFPeUMsRUFEU25ELEtBQUtFLE1BQU13SCxFQUFhcEksVUFBWSxLQUNsQmtFLEVBQU1oTixPQUMxQyxFQUVBbVIsRUFBRyxTQUFXakgsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FHcEMsT0FBTzhMLEdBRlk5TCxFQUFRNFAsZUFBaUJ2RyxHQUNmcEIsVUFDS2tFLEVBQU1oTixPQUMxQyxHQUdGLFNBQVMrUSxFQUFvQkssRUFBUUMsR0FDbkMsSUFBSXhFLEVBQU91RSxFQUFTLEVBQUksSUFBTSxJQUMxQkUsRUFBWTlILEtBQUt1RCxJQUFJcUUsR0FDckJyQixFQUFRdkcsS0FBS0UsTUFBTTRILEVBQVksSUFDL0JDLEVBQVVELEVBQVksR0FFMUIsR0FBZ0IsSUFBWkMsRUFDRixPQUFPMUUsRUFBTy9MLE9BQU9pUCxHQUd2QixJQUFJeUIsRUFBWUgsR0FBa0IsR0FDbEMsT0FBT3hFLEVBQU8vTCxPQUFPaVAsR0FBU3lCLEVBQVk3RSxFQUFnQjRFLEVBQVMsRUFDckUsQ0FFQSxTQUFTWixFQUFrQ1MsRUFBUUMsR0FDakQsT0FBSUQsRUFBUyxJQUFPLEdBQ1BBLEVBQVMsRUFBSSxJQUFNLEtBQ2hCekUsRUFBZ0JuRCxLQUFLdUQsSUFBSXFFLEdBQVUsR0FBSSxHQUdoRFIsRUFBZVEsRUFBUUMsRUFDaEMsQ0FFQSxTQUFTVCxFQUFlUSxFQUFRQyxHQUM5QixJQUFJRyxFQUFZSCxHQUFrQixHQUM5QnhFLEVBQU91RSxFQUFTLEVBQUksSUFBTSxJQUMxQkUsRUFBWTlILEtBQUt1RCxJQUFJcUUsR0FHekIsT0FBT3ZFLEVBRktGLEVBQWdCbkQsS0FBS0UsTUFBTTRILEVBQVksSUFBSyxHQUVsQ0UsRUFEUjdFLEVBQWdCMkUsRUFBWSxHQUFJLEVBRWhELENBRUEsVUVqMkJBLElBQUlHLEVBQW9CLFNBQTJCQyxFQUFTQyxHQUMxRCxPQUFRRCxHQUNOLElBQUssSUFDSCxPQUFPQyxFQUFXekgsS0FBSyxDQUNyQjRELE1BQU8sVUFHWCxJQUFLLEtBQ0gsT0FBTzZELEVBQVd6SCxLQUFLLENBQ3JCNEQsTUFBTyxXQUdYLElBQUssTUFDSCxPQUFPNkQsRUFBV3pILEtBQUssQ0FDckI0RCxNQUFPLFNBSVgsUUFDRSxPQUFPNkQsRUFBV3pILEtBQUssQ0FDckI0RCxNQUFPLFNBR2YsRUFFSThELEVBQW9CLFNBQTJCRixFQUFTQyxHQUMxRCxPQUFRRCxHQUNOLElBQUssSUFDSCxPQUFPQyxFQUFXRSxLQUFLLENBQ3JCL0QsTUFBTyxVQUdYLElBQUssS0FDSCxPQUFPNkQsRUFBV0UsS0FBSyxDQUNyQi9ELE1BQU8sV0FHWCxJQUFLLE1BQ0gsT0FBTzZELEVBQVdFLEtBQUssQ0FDckIvRCxNQUFPLFNBSVgsUUFDRSxPQUFPNkQsRUFBV0UsS0FBSyxDQUNyQi9ELE1BQU8sU0FHZixFQStDQSxRQUpxQixDQUNuQm5HLEVBQUdpSyxFQUNIRSxFQTNDMEIsU0FBK0JKLEVBQVNDLEdBQ2xFLElBUUlJLEVBUkFDLEVBQWNOLEVBQVFPLE1BQU0sY0FBZ0IsR0FDNUNDLEVBQWNGLEVBQVksR0FDMUJHLEVBQWNILEVBQVksR0FFOUIsSUFBS0csRUFDSCxPQUFPVixFQUFrQkMsRUFBU0MsR0FLcEMsT0FBUU8sR0FDTixJQUFLLElBQ0hILEVBQWlCSixFQUFXUyxTQUFTLENBQ25DdEUsTUFBTyxVQUVULE1BRUYsSUFBSyxLQUNIaUUsRUFBaUJKLEVBQVdTLFNBQVMsQ0FDbkN0RSxNQUFPLFdBRVQsTUFFRixJQUFLLE1BQ0hpRSxFQUFpQkosRUFBV1MsU0FBUyxDQUNuQ3RFLE1BQU8sU0FFVCxNQUdGLFFBQ0VpRSxFQUFpQkosRUFBV1MsU0FBUyxDQUNuQ3RFLE1BQU8sU0FLYixPQUFPaUUsRUFBZTFRLFFBQVEsV0FBWW9RLEVBQWtCUyxFQUFhUCxJQUFhdFEsUUFBUSxXQUFZdVEsRUFBa0JPLEVBQWFSLEdBQzNJLEdDOUVlLFNBQVNVLEVBQWdDbkksR0FDdEQsSUFBSW9JLEVBQVUsSUFBSXpKLEtBQUtBLEtBQUswSixJQUFJckksRUFBS3NJLGNBQWV0SSxFQUFLdUksV0FBWXZJLEVBQUt3SSxVQUFXeEksRUFBS3lJLFdBQVl6SSxFQUFLMEksYUFBYzFJLEVBQUsySSxhQUFjM0ksRUFBSzRJLG9CQUVqSixPQURBUixFQUFRekgsZUFBZVgsRUFBS3NJLGVBQ3JCdEksRUFBS3BCLFVBQVl3SixFQUFReEosU0FDbEMsQ0NmQSxJQUFJaUssRUFBMkIsQ0FBQyxJQUFLLE1BQ2pDQyxFQUEwQixDQUFDLEtBQU0sUUFDOUIsU0FBU0MsRUFBMEJqRyxHQUN4QyxPQUFvRCxJQUE3QytGLEVBQXlCRyxRQUFRbEcsRUFDMUMsQ0FDTyxTQUFTbUcsRUFBeUJuRyxHQUN2QyxPQUFtRCxJQUE1Q2dHLEVBQXdCRSxRQUFRbEcsRUFDekMsQ0FDTyxTQUFTb0csRUFBb0JwRyxFQUFPcUcsRUFBUUMsR0FDakQsR0FBYyxTQUFWdEcsRUFDRixNQUFNLElBQUlkLFdBQVcscUNBQXFDbk0sT0FBT3NULEVBQVEsMENBQTBDdFQsT0FBT3VULEVBQU8sbUZBQzVILEdBQWMsT0FBVnRHLEVBQ1QsTUFBTSxJQUFJZCxXQUFXLGlDQUFpQ25NLE9BQU9zVCxFQUFRLDBDQUEwQ3RULE9BQU91VCxFQUFPLG1GQUN4SCxHQUFjLE1BQVZ0RyxFQUNULE1BQU0sSUFBSWQsV0FBVywrQkFBK0JuTSxPQUFPc1QsRUFBUSxzREFBc0R0VCxPQUFPdVQsRUFBTyxtRkFDbEksR0FBYyxPQUFWdEcsRUFDVCxNQUFNLElBQUlkLFdBQVcsaUNBQWlDbk0sT0FBT3NULEVBQVEsc0RBQXNEdFQsT0FBT3VULEVBQU8sa0ZBRTdJLENDbEJBLElBQUlDLEVBQXVCLENBQ3pCQyxpQkFBa0IsQ0FDaEJDLElBQUsscUJBQ0xDLE1BQU8sK0JBRVRDLFNBQVUsQ0FDUkYsSUFBSyxXQUNMQyxNQUFPLHFCQUVURSxZQUFhLGdCQUNiQyxpQkFBa0IsQ0FDaEJKLElBQUsscUJBQ0xDLE1BQU8sK0JBRVRJLFNBQVUsQ0FDUkwsSUFBSyxXQUNMQyxNQUFPLHFCQUVUSyxZQUFhLENBQ1hOLElBQUssZUFDTEMsTUFBTyx5QkFFVE0sT0FBUSxDQUNOUCxJQUFLLFNBQ0xDLE1BQU8sbUJBRVRPLE1BQU8sQ0FDTFIsSUFBSyxRQUNMQyxNQUFPLGtCQUVUUSxZQUFhLENBQ1hULElBQUssZUFDTEMsTUFBTyx5QkFFVFMsT0FBUSxDQUNOVixJQUFLLFNBQ0xDLE1BQU8sbUJBRVRVLGFBQWMsQ0FDWlgsSUFBSyxnQkFDTEMsTUFBTywwQkFFVFcsUUFBUyxDQUNQWixJQUFLLFVBQ0xDLE1BQU8sb0JBRVRZLFlBQWEsQ0FDWGIsSUFBSyxlQUNMQyxNQUFPLHlCQUVUYSxPQUFRLENBQ05kLElBQUssU0FDTEMsTUFBTyxtQkFFVGMsV0FBWSxDQUNWZixJQUFLLGNBQ0xDLE1BQU8sd0JBRVRlLGFBQWMsQ0FDWmhCLElBQUssZ0JBQ0xDLE1BQU8sMkJDNURJLFNBQVNnQixFQUFrQnZNLEdBQ3hDLE9BQU8sV0FDTCxJQUFJdEgsRUFBVThILFVBQVUzSSxPQUFTLFFBQXNCUSxJQUFqQm1JLFVBQVUsR0FBbUJBLFVBQVUsR0FBSyxDQUFDLEVBRS9FbUYsRUFBUWpOLEVBQVFpTixNQUFRaE4sT0FBT0QsRUFBUWlOLE9BQVMzRixFQUFLd00sYUFFekQsT0FEYXhNLEVBQUt5TSxRQUFROUcsSUFBVTNGLEVBQUt5TSxRQUFRek0sRUFBS3dNLGFBRXhELENBQ0YsQ0N5QkEsUUFkaUIsQ0FDZnpLLEtBQU13SyxFQUFrQixDQUN0QkUsUUFwQmMsQ0FDaEJDLEtBQU0sbUJBQ05DLEtBQU0sYUFDTkMsT0FBUSxXQUNSQyxNQUFPLGNBaUJMTCxhQUFjLFNBRWhCOUMsS0FBTTZDLEVBQWtCLENBQ3RCRSxRQWxCYyxDQUNoQkMsS0FBTSxpQkFDTkMsS0FBTSxjQUNOQyxPQUFRLFlBQ1JDLE1BQU8sVUFlTEwsYUFBYyxTQUVoQnZDLFNBQVVzQyxFQUFrQixDQUMxQkUsUUFoQmtCLENBQ3BCQyxLQUFNLHlCQUNOQyxLQUFNLHlCQUNOQyxPQUFRLHFCQUNSQyxNQUFPLHNCQWFMTCxhQUFjLFVDOUJsQixJQUFJTSxFQUF1QixDQUN6QkMsU0FBVSxxQkFDVkMsVUFBVyxtQkFDWEMsTUFBTyxlQUNQQyxTQUFVLGtCQUNWQyxTQUFVLGNBQ1Y1QixNQUFPLEtDTk0sU0FBUzZCLEVBQWdCcE4sR0FDdEMsT0FBTyxTQUFVcU4sRUFBWTNVLEdBQzNCLElBQ0k0VSxFQUVKLEdBQWdCLGdCQUhGNVUsU0FBMENBLEVBQVE2TixRQUFVNU4sT0FBT0QsRUFBUTZOLFNBQVcsZUFHcEV2RyxFQUFLdU4saUJBQWtCLENBQ3JELElBQUlmLEVBQWV4TSxFQUFLd04sd0JBQTBCeE4sRUFBS3dNLGFBQ25EN0csRUFBUWpOLFNBQTBDQSxFQUFRaU4sTUFBUWhOLE9BQU9ELEVBQVFpTixPQUFTNkcsRUFDOUZjLEVBQWN0TixFQUFLdU4saUJBQWlCNUgsSUFBVTNGLEVBQUt1TixpQkFBaUJmLEVBQ3RFLEtBQU8sQ0FDTCxJQUFJaUIsRUFBZ0J6TixFQUFLd00sYUFFckJrQixFQUFTaFYsU0FBMENBLEVBQVFpTixNQUFRaE4sT0FBT0QsRUFBUWlOLE9BQVMzRixFQUFLd00sYUFFcEdjLEVBQWN0TixFQUFLMk4sT0FBT0QsSUFBVzFOLEVBQUsyTixPQUFPRixFQUNuRCxDQUlBLE9BQU9ILEVBRkt0TixFQUFLNE4saUJBQW1CNU4sRUFBSzROLGlCQUFpQlAsR0FBY0EsRUFHMUUsQ0FDRixDQzRIQSxRQTVCZSxDQUNieEgsY0EzQmtCLFNBQXVCNUUsRUFBYTRNLEdBQ3RELElBQUkzTSxFQUFTQyxPQUFPRixHQU9oQjZNLEVBQVM1TSxFQUFTLElBRXRCLEdBQUk0TSxFQUFTLElBQU1BLEVBQVMsR0FDMUIsT0FBUUEsRUFBUyxJQUNmLEtBQUssRUFDSCxPQUFPNU0sRUFBUyxLQUVsQixLQUFLLEVBQ0gsT0FBT0EsRUFBUyxLQUVsQixLQUFLLEVBQ0gsT0FBT0EsRUFBUyxLQUl0QixPQUFPQSxFQUFTLElBQ2xCLEVBSUV3RSxJQUFLMEgsRUFBZ0IsQ0FDbkJPLE9BdkhZLENBQ2RJLE9BQVEsQ0FBQyxJQUFLLEtBQ2RDLFlBQWEsQ0FBQyxLQUFNLE1BQ3BCQyxLQUFNLENBQUMsZ0JBQWlCLGdCQXFIdEJ6QixhQUFjLFNBRWhCbEcsUUFBUzhHLEVBQWdCLENBQ3ZCTyxPQXRIZ0IsQ0FDbEJJLE9BQVEsQ0FBQyxJQUFLLElBQUssSUFBSyxLQUN4QkMsWUFBYSxDQUFDLEtBQU0sS0FBTSxLQUFNLE1BQ2hDQyxLQUFNLENBQUMsY0FBZSxjQUFlLGNBQWUsZ0JBb0hsRHpCLGFBQWMsT0FDZG9CLGlCQUFrQixTQUEwQnRILEdBQzFDLE9BQU9BLEVBQVUsQ0FDbkIsSUFFRnZCLE1BQU9xSSxFQUFnQixDQUNyQk8sT0FwSGMsQ0FDaEJJLE9BQVEsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssS0FDaEVDLFlBQWEsQ0FBQyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sT0FDM0ZDLEtBQU0sQ0FBQyxVQUFXLFdBQVksUUFBUyxRQUFTLE1BQU8sT0FBUSxPQUFRLFNBQVUsWUFBYSxVQUFXLFdBQVksYUFrSG5IekIsYUFBYyxTQUVoQnhLLElBQUtvTCxFQUFnQixDQUNuQk8sT0FuSFksQ0FDZEksT0FBUSxDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBQ3ZDbEIsTUFBTyxDQUFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFNLE1BQzVDbUIsWUFBYSxDQUFDLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE9BQ3hEQyxLQUFNLENBQUMsU0FBVSxTQUFVLFVBQVcsWUFBYSxXQUFZLFNBQVUsYUFnSHZFekIsYUFBYyxTQUVoQjlFLFVBQVcwRixFQUFnQixDQUN6Qk8sT0FqSGtCLENBQ3BCSSxPQUFRLENBQ05HLEdBQUksSUFDSkMsR0FBSSxJQUNKQyxTQUFVLEtBQ1ZDLEtBQU0sSUFDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxTQUVUVCxZQUFhLENBQ1hFLEdBQUksS0FDSkMsR0FBSSxLQUNKQyxTQUFVLFdBQ1ZDLEtBQU0sT0FDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxTQUVUUixLQUFNLENBQ0pDLEdBQUksT0FDSkMsR0FBSSxPQUNKQyxTQUFVLFdBQ1ZDLEtBQU0sT0FDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxVQXFGUGpDLGFBQWMsT0FDZGUsaUJBbkY0QixDQUM5QlEsT0FBUSxDQUNORyxHQUFJLElBQ0pDLEdBQUksSUFDSkMsU0FBVSxLQUNWQyxLQUFNLElBQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sWUFFVFQsWUFBYSxDQUNYRSxHQUFJLEtBQ0pDLEdBQUksS0FDSkMsU0FBVSxXQUNWQyxLQUFNLE9BQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sWUFFVFIsS0FBTSxDQUNKQyxHQUFJLE9BQ0pDLEdBQUksT0FDSkMsU0FBVSxXQUNWQyxLQUFNLE9BQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sYUF1RFBqQix1QkFBd0IsVUM5SWIsU0FBU2tCLEVBQWExTyxHQUNuQyxPQUFPLFNBQVUyTyxHQUNmLElBQUlqVyxFQUFVOEgsVUFBVTNJLE9BQVMsUUFBc0JRLElBQWpCbUksVUFBVSxHQUFtQkEsVUFBVSxHQUFLLENBQUMsRUFDL0VtRixFQUFRak4sRUFBUWlOLE1BQ2hCaUosRUFBZWpKLEdBQVMzRixFQUFLNk8sY0FBY2xKLElBQVUzRixFQUFLNk8sY0FBYzdPLEVBQUs4TyxtQkFDN0VqRixFQUFjOEUsRUFBTzdFLE1BQU04RSxHQUUvQixJQUFLL0UsRUFDSCxPQUFPLEtBR1QsSUFPSWtGLEVBUEFDLEVBQWdCbkYsRUFBWSxHQUM1Qm9GLEVBQWdCdEosR0FBUzNGLEVBQUtpUCxjQUFjdEosSUFBVTNGLEVBQUtpUCxjQUFjalAsRUFBS2tQLG1CQUM5RTlRLEVBQU0rUSxNQUFNQyxRQUFRSCxHQTBCNUIsU0FBbUJJLEVBQU9DLEdBQ3hCLElBQUssSUFBSWxSLEVBQU0sRUFBR0EsRUFBTWlSLEVBQU14WCxPQUFRdUcsSUFDcEMsR0FBY2lSLEVBQU1qUixHQTNCSHRGLEtBQUtrVyxHQTRCcEIsT0FBTzVRLENBS2IsQ0FsQzZDbVIsQ0FBVU4sR0FnQnZELFNBQWlCTyxFQUFRRixHQUN2QixJQUFLLElBQUlsUixLQUFPb1IsRUFDZCxHQUFJQSxFQUFPelEsZUFBZVgsSUFBa0JvUixFQUFPcFIsR0FmbEN0RixLQUFLa1csR0FnQnBCLE9BQU81USxDQUtiLENBdEJTcVIsQ0FBUVIsR0FPYixPQUhBRixFQUFRL08sRUFBSzBQLGNBQWdCMVAsRUFBSzBQLGNBQWN0UixHQUFPQSxFQUdoRCxDQUNMMlEsTUFIRkEsRUFBUXJXLEVBQVFnWCxjQUFnQmhYLEVBQVFnWCxjQUFjWCxHQUFTQSxFQUk3RFksS0FIU2hCLEVBQU81VixNQUFNaVcsRUFBY25YLFFBS3hDLENBQ0YsQ0N6QkEsSUNGNENtSSxFRHVEeEM4SixFQUFRLENBQ1ZqRSxlQ3hEMEM3RixFRHdEUCxDQUNqQzRPLGFBdkQ0Qix3QkF3RDVCZ0IsYUF2RDRCLE9Bd0Q1QkYsY0FBZSxTQUF1QlgsR0FDcEMsT0FBT2MsU0FBU2QsRUFBTyxHQUN6QixHQzVESyxTQUFVSixHQUNmLElBQUlqVyxFQUFVOEgsVUFBVTNJLE9BQVMsUUFBc0JRLElBQWpCbUksVUFBVSxHQUFtQkEsVUFBVSxHQUFLLENBQUMsRUFDL0VxSixFQUFjOEUsRUFBTzdFLE1BQU05SixFQUFLNE8sY0FDcEMsSUFBSy9FLEVBQWEsT0FBTyxLQUN6QixJQUFJbUYsRUFBZ0JuRixFQUFZLEdBQzVCaUcsRUFBY25CLEVBQU83RSxNQUFNOUosRUFBSzRQLGNBQ3BDLElBQUtFLEVBQWEsT0FBTyxLQUN6QixJQUFJZixFQUFRL08sRUFBSzBQLGNBQWdCMVAsRUFBSzBQLGNBQWNJLEVBQVksSUFBTUEsRUFBWSxHQUdsRixNQUFPLENBQ0xmLE1BSEZBLEVBQVFyVyxFQUFRZ1gsY0FBZ0JoWCxFQUFRZ1gsY0FBY1gsR0FBU0EsRUFJN0RZLEtBSFNoQixFQUFPNVYsTUFBTWlXLEVBQWNuWCxRQUt4QyxHRGdEQTZOLElBQUtnSixFQUFhLENBQ2hCRyxjQTVEbUIsQ0FDckJkLE9BQVEsVUFDUkMsWUFBYSw2REFDYkMsS0FBTSw4REEwREphLGtCQUFtQixPQUNuQkcsY0F6RG1CLENBQ3JCYyxJQUFLLENBQUMsTUFBTyxZQXlEWGIsa0JBQW1CLFFBRXJCNUksUUFBU29JLEVBQWEsQ0FDcEJHLGNBMUR1QixDQUN6QmQsT0FBUSxXQUNSQyxZQUFhLFlBQ2JDLEtBQU0sa0NBd0RKYSxrQkFBbUIsT0FDbkJHLGNBdkR1QixDQUN6QmMsSUFBSyxDQUFDLEtBQU0sS0FBTSxLQUFNLE9BdUR0QmIsa0JBQW1CLE1BQ25CUSxjQUFlLFNBQXVCclUsR0FDcEMsT0FBT0EsRUFBUSxDQUNqQixJQUVGMEosTUFBTzJKLEVBQWEsQ0FDbEJHLGNBM0RxQixDQUN2QmQsT0FBUSxlQUNSQyxZQUFhLHNEQUNiQyxLQUFNLDZGQXlESmEsa0JBQW1CLE9BQ25CRyxjQXhEcUIsQ0FDdkJsQixPQUFRLENBQUMsTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE9BQ3RGZ0MsSUFBSyxDQUFDLE9BQVEsTUFBTyxRQUFTLE9BQVEsUUFBUyxRQUFTLFFBQVMsT0FBUSxNQUFPLE1BQU8sTUFBTyxRQXVENUZiLGtCQUFtQixRQUVyQmxOLElBQUswTSxFQUFhLENBQ2hCRyxjQXhEbUIsQ0FDckJkLE9BQVEsWUFDUmxCLE1BQU8sMkJBQ1BtQixZQUFhLGtDQUNiQyxLQUFNLGdFQXFESmEsa0JBQW1CLE9BQ25CRyxjQXBEbUIsQ0FDckJsQixPQUFRLENBQUMsTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sT0FDbkRnQyxJQUFLLENBQUMsT0FBUSxNQUFPLE9BQVEsTUFBTyxPQUFRLE1BQU8sU0FtRGpEYixrQkFBbUIsUUFFckJ4SCxVQUFXZ0gsRUFBYSxDQUN0QkcsY0FwRHlCLENBQzNCZCxPQUFRLDZEQUNSZ0MsSUFBSyxrRkFtREhqQixrQkFBbUIsTUFDbkJHLGNBbER5QixDQUMzQmMsSUFBSyxDQUNIN0IsR0FBSSxNQUNKQyxHQUFJLE1BQ0pDLFNBQVUsT0FDVkMsS0FBTSxPQUNOQyxRQUFTLFdBQ1RDLFVBQVcsYUFDWEMsUUFBUyxXQUNUQyxNQUFPLFdBMENQUyxrQkFBbUIsU0VqRXZCLE1DNUJBLEVEY2EsQ0FDWGMsS0FBTSxRQUNOQyxlVCtDbUIsU0FBd0JwTCxFQUFPekssRUFBTzFCLEdBQ3pELElBQUlxQixFQUNBbVcsRUFBYTlFLEVBQXFCdkcsR0FVdEMsT0FQRTlLLEVBRHdCLGlCQUFmbVcsRUFDQUEsRUFDVSxJQUFWOVYsRUFDQThWLEVBQVc1RSxJQUVYNEUsRUFBVzNFLE1BQU1yUyxRQUFRLFlBQWFrQixFQUFNOUMsWUFHbkRvQixTQUEwQ0EsRUFBUXlYLFVBQ2hEelgsRUFBUTBYLFlBQWMxWCxFQUFRMFgsV0FBYSxFQUN0QyxNQUFRclcsRUFFUkEsRUFBUyxPQUliQSxDQUNULEVTbkVFeVAsV0FBWSxFQUNaNkcsZU5WbUIsU0FBd0J4TCxFQUFPeUwsRUFBT0MsRUFBVzFDLEdBQ3BFLE9BQU9mLEVBQXFCakksRUFDOUIsRU1TRVksU0FBVSxFQUNWcUUsTUY0RUYsRUUzRUVwUixRQUFTLENBQ1BtTCxhQUFjLEVBR2RLLHNCQUF1QixJRUozQixJQUFJc00sRUFBeUIsd0RBR3pCQyxFQUE2QixvQ0FDN0JDLEVBQXNCLGVBQ3RCQyxFQUFvQixNQUNwQkMsRUFBZ0MsV0FxU3JCLFNBQVMxRixFQUFPekosRUFBV29QLEVBQWdCblksR0FDeEQsSUFBSTJLLEVBQU1JLEVBQWlCSCxFQUFPQyxFQUFPdU4sRUFBTzdNLEVBQXVCOE0sRUFBa0JDLEVBQXVCck4sRUFBdUJDLEVBQXdCcU4sRUFBT0MsRUFBT0MsRUFBTzNOLEVBQXVCNE4sRUFBa0JDLEVBQXVCQyxFQUF3QkMsRUFFNVF6UixFQUFhLEVBQUdVLFdBQ2hCLElBQUlnUixFQUFZN1ksT0FBT2tZLEdBQ25CM04sRUFBaUJDLElBQ2pCVyxFQUE0TCxRQUFsTFQsRUFBZ0csUUFBeEZJLEVBQWtCL0ssYUFBeUMsRUFBU0EsRUFBUW9MLGNBQXdDLElBQXBCTCxFQUE2QkEsRUFBa0JQLEVBQWVZLGNBQTZCLElBQVRULEVBQWtCQSxFQUFPb08sRUFDN052TixFQUF3QmxELEVBQXUzQixRQUE1MkJzQyxFQUE2akIsUUFBcGpCQyxFQUF1ZSxRQUE5ZHVOLEVBQXNILFFBQTdHN00sRUFBd0J2TCxhQUF5QyxFQUFTQSxFQUFRd0wsNkJBQTZELElBQTFCRCxFQUFtQ0EsRUFBd0J2TCxTQUEwRixRQUF2Q3FZLEVBQW1CclksRUFBUW9MLGNBQXlDLElBQXJCaU4sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQnJZLGVBQStDLElBQTFCc1ksT0FBL0osRUFBMk1BLEVBQXNCOU0sNkJBQTZDLElBQVY0TSxFQUFtQkEsRUFBUTVOLEVBQWVnQiw2QkFBNkMsSUFBVlgsRUFBbUJBLEVBQTRELFFBQW5ESSxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1Qk0sNkJBQTZDLElBQVZaLEVBQW1CQSxFQUFRLEdBRXQ3QixLQUFNWSxHQUF5QixHQUFLQSxHQUF5QixHQUMzRCxNQUFNLElBQUlILFdBQVcsNkRBR3ZCLElBQUlGLEVBQWU3QyxFQUFzMUIsUUFBMzBCaVEsRUFBa2lCLFFBQXpoQkMsRUFBcWQsUUFBNWNDLEVBQTZHLFFBQXBHM04sRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUEwRixRQUF2QzBZLEVBQW1CMVksRUFBUW9MLGNBQXlDLElBQXJCc04sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQjFZLGVBQStDLElBQTFCMlksT0FBL0osRUFBMk1BLEVBQXNCeE4sb0JBQW9DLElBQVZzTixFQUFtQkEsRUFBUWpPLEVBQWVXLG9CQUFvQyxJQUFWcU4sRUFBbUJBLEVBQTZELFFBQXBESSxFQUF5QnBPLEVBQWVZLGNBQStDLElBQTNCd04sR0FBMkcsUUFBN0RDLEVBQXlCRCxFQUF1QjVZLGVBQWdELElBQTNCNlksT0FBL0UsRUFBNEhBLEVBQXVCMU4sb0JBQW9DLElBQVZvTixFQUFtQkEsRUFBUSxHQUU1NEIsS0FBTXBOLEdBQWdCLEdBQUtBLEdBQWdCLEdBQ3pDLE1BQU0sSUFBSUUsV0FBVyxvREFHdkIsSUFBS0QsRUFBTzJCLFNBQ1YsTUFBTSxJQUFJMUIsV0FBVyx5Q0FHdkIsSUFBS0QsRUFBTzBGLFdBQ1YsTUFBTSxJQUFJekYsV0FBVywyQ0FHdkIsSUFBSWdGLEVBQWV6SSxFQUFPbUIsR0FFMUIsSUMzVGEsU0FBaUJBLEdBRzlCLEdBRkEzQixFQUFhLEVBQUdVLFlqQ0FILFNBQWdCdU8sR0FFN0IsT0FEQWpQLEVBQWEsRUFBR1UsV0FDVHVPLGFBQWlCck8sTUFBMkIsV0FBbkJSLEVBQVE2TyxJQUFpRSxrQkFBMUN6USxPQUFPUSxVQUFVeEgsU0FBUzBILEtBQUsrUCxFQUNoRyxDaUNETzJDLENBQU9qUSxJQUFtQyxpQkFBZEEsRUFDL0IsT0FBTyxFQUdULElBQUlNLEVBQU96QixFQUFPbUIsR0FDbEIsT0FBUUwsTUFBTUQsT0FBT1ksR0FDdkIsQ0RrVE80UCxDQUFRNUksR0FDWCxNQUFNLElBQUloRixXQUFXLHNCQU12QixJQUNJb0csRUFBVTNJLEVBQWdCdUgsRUFEVG1CLEVBQWdDbkIsSUFFakQ2SSxFQUFtQixDQUNyQjFOLHNCQUF1QkEsRUFDdkJMLGFBQWNBLEVBQ2RDLE9BQVFBLEVBQ1J3RSxjQUFlUyxHQTJDakIsT0F6Q2F5SSxFQUFVMUgsTUFBTTJHLEdBQTRCalosS0FBSSxTQUFVcWEsR0FDckUsSUFBSUMsRUFBaUJELEVBQVUsR0FFL0IsTUFBdUIsTUFBbkJDLEdBQTZDLE1BQW5CQSxHQUVyQkMsRUFEYSxFQUFlRCxJQUNkRCxFQUFXL04sRUFBTzBGLFlBR2xDcUksQ0FDVCxJQUFHL1osS0FBSyxJQUFJZ1MsTUFBTTBHLEdBQXdCaFosS0FBSSxTQUFVcWEsR0FFdEQsR0FBa0IsT0FBZEEsRUFDRixNQUFPLElBR1QsSUE2QndCMUcsRUFDdEI2RyxFQTlCRUYsRUFBaUJELEVBQVUsR0FFL0IsR0FBdUIsTUFBbkJDLEVBQ0YsT0EyQkFFLEdBRHNCN0csRUExQkkwRyxHQTJCVi9ILE1BQU00RyxJQU1uQnNCLEVBQVEsR0FBRzlZLFFBQVF5WCxFQUFtQixLQUhwQ3hGLEVBM0JQLElBQUk4RyxFQUFZLEVBQVdILEdBRTNCLEdBQUlHLEVBU0YsT0FSTXZaLFNBQTBDQSxFQUFRd1osOEJBQWdDbEgsRUFBeUI2RyxJQUMvRzVHLEVBQW9CNEcsRUFBV2hCLEVBQWdCbFksT0FBTzhJLElBR2xEL0ksU0FBMENBLEVBQVF5WiwrQkFBaUNySCxFQUEwQitHLElBQ2pINUcsRUFBb0I0RyxFQUFXaEIsRUFBZ0JsWSxPQUFPOEksSUFHakR3USxFQUFVOUgsRUFBUzBILEVBQVcvTixFQUFPMkIsU0FBVW1NLEdBR3hELEdBQUlFLEVBQWVoSSxNQUFNOEcsR0FDdkIsTUFBTSxJQUFJN00sV0FBVyxpRUFBbUUrTixFQUFpQixLQUczRyxPQUFPRCxDQUNULElBQUcvWixLQUFLLEdBRVYsQ0VyWkEsTUNvREEsR0FsRGdCLE1BRWQsSUFBSXNhLEVBQWlCLEdBQ2pCQyxFQUFjLEdBRTZCLE9BQTNDQyxhQUFhQyxRQUFRLG9CQUN2QkgsRUFBaUI1WSxLQUFLZ1osTUFBTUYsYUFBYUMsUUFBUSxvQkFHUCxPQUF4Q0QsYUFBYUMsUUFBUSxpQkFDdkJGLEVBQWM3WSxLQUFLZ1osTUFBTUYsYUFBYUMsUUFBUSxpQkFJaEQsTUFBTUUsRUFBcUIsS0FDekJILGFBQWFJLFFBQVEsY0FBZWxaLEtBQUtDLFVBQVU0WSxJQUNuREMsYUFBYUksUUFBUSxpQkFBa0JsWixLQUFLQyxVQUFVMlksR0FBZ0IsRUFhbEVPLEdEL0JNQyxFQ2dDVmxTLEtBQUttUyxNRGhDV0MsRUNpQ2hCLGVEakN1QkMsRUNrQ3ZCLHFCRGxDb0NDLEVDbUNwQzlILEVBQU8sSUFBSXhLLEtBQVEsY0RsQ2QsQ0FBRWtTLE9BQU1FLFFBQU9DLGNBQWFDLFVBQVNDLFNDbUMxQyxrQkRuQ29EQyxRQ29DcEQsWURyQ1MsSUFBQ04sRUFBTUUsRUFBT0MsRUFBYUMsRUM0Q3RDLE9BTEFwUyxRQUFRdVMsSUFBSVIsR0FFWk4sRUFBWXJiLEtBQUsyYixHQUNqQkYsSUFFTyxDQUNMTCxpQkFDQUMsY0FDQUkscUJBQ0FXLFdBM0JpQixDQUFDQyxFQUFVSCxLQUM1QixJQUFLLElBQUluYixFQUFJLEVBQUdBLEVBQUlzYSxFQUFZeGEsT0FBUUUsSUFDbENzYSxFQUFZdGEsR0FBRzZhLE1BQVFTLElBQ3pCaEIsRUFBWXhYLE9BQU85QyxFQUFHLEdBQ3RCMGEsSUFDQSxrQkFBdUJTLEdBRTNCLEVBc0JILEVBaERlLEcsNElDT1p4YSxHQUFVLENBQUMsRUFFZkEsR0FBUXNFLGtCQUFvQixLQUM1QnRFLEdBQVFnRSxjQUFnQixLQUVsQmhFLEdBQVFnRCxPQUFTLFVBQWMsS0FBTSxRQUUzQ2hELEdBQVFxQyxPQUFTLEtBQ2pCckMsR0FBUXFFLG1CQUFxQixLQUVoQixLQUFJLEtBQVNyRSxJQUtKLE1BQVcsYUFBaUIsWUFBM0MsTUMyRVAsR0FoR3lCLENBQUM0YSxFQUFVQyxLQUNoQyxNQUFNQyxFQUFXMVgsU0FBU1csY0FBYyxPQUN4QytXLEVBQVMxVyxhQUFhLEtBQU0sbUJBRTVCLE1BQU0yVyxFQUFlM1gsU0FBU1csY0FBYyxNQUs1QyxHQUpBZ1gsRUFBYUMsWUFBYyxRQUUzQkYsRUFBU2pYLFlBQVlrWCxHQUVSLE1BQVRGLEVBQ0YsSUFBSyxJQUFJeGIsRUFBSSxFQUFHQSxFQUFJd2IsRUFBTTFiLE9BQVFFLElBQUssQ0FDckMsTUFBTTRiLEVBQVU3WCxTQUFTVyxjQUFjLE9BQ3ZDa1gsRUFBUTdXLGFBQWEsUUFBUyxZQUU5QixNQUFNOFcsRUFBTTlYLFNBQVNXLGNBQWMsVUFDbkNtWCxFQUFJOVcsYUFBYSxRQUFTLGNBQzFCOFcsRUFBSTlXLGFBQWEsVUFBV3lXLEVBQU14YixHQUFHNmEsTUFFckMsTUFBTWlCLEVBQWMvWCxTQUFTVyxjQUFjLEtBQzNDb1gsRUFBWUgsWUFBY0gsRUFBTXhiLEdBQUcrYSxNQUVuQyxNQUFNZ0IsRUFBY2hZLFNBQVNXLGNBQWMsS0FDM0NxWCxFQUFZSixZQUFjSCxFQUFNeGIsR0FBR2liLFFBRW5DVyxFQUFRcFgsWUFBWXFYLEdBQ3BCRCxFQUFRcFgsWUFBWXNYLEdBQ3BCRixFQUFRcFgsWUFBWXVYLEdBRXBCTixFQUFTalgsWUFBWW9YLEVBQ3ZCLENBR0YsTUFBTUksRUFBYWpZLFNBQVNXLGNBQWMsT0FDMUNzWCxFQUFXalgsYUFBYSxLQUFNLGdCQUU5QixNQUFNa1gsRUFBWWxZLFNBQVNXLGNBQWMsTUFDekN1WCxFQUFVTixZQUFjLFdBQ3hCTSxFQUFVbFgsYUFBYSxLQUFNLGVBRTdCLE1BQU1tWCxFQUFlblksU0FBU1csY0FBYyxTQUM1Q3dYLEVBQWFuWCxhQUFhLE9BQVEsUUFFbEMsTUFBTW9YLEVBQVNwWSxTQUFTVyxjQUFjLE9BRWhDMFgsRUFBU3JZLFNBQVNXLGNBQWMsVUFDdEMwWCxFQUFPclgsYUFBYSxLQUFNLGdCQUMxQnFYLEVBQU9ULFlBQWMsTUFFckIsTUFBTVUsRUFBWXRZLFNBQVNXLGNBQWMsVUFhekMsT0FaQTJYLEVBQVV0WCxhQUFhLEtBQU0sbUJBQzdCc1gsRUFBVVYsWUFBYyxTQUd4QkssRUFBV3hYLFlBQVkwWCxHQUN2QkMsRUFBTzNYLFlBQVk0WCxHQUNuQkQsRUFBTzNYLFlBQVk2WCxHQUNuQkwsRUFBV3hYLFlBQVkyWCxHQUV2QlYsRUFBU2pYLFlBQVl5WCxHQUNyQlIsRUFBU2pYLFlBQVl3WCxHQUVkUCxFQUFTYSxTQUFTLEVBbUM3QixHQWhDdUIsS0FDbkIsTUFBTUMsRUFBVXhZLFNBQVN5WSxpQkFBaUIsZUFDcENQLEVBQVlsWSxTQUFTQyxjQUFjLGdCQUNuQ2dZLEVBQWFqWSxTQUFTQyxjQUFjLGlCQUNwQ3lZLEVBQWdCMVksU0FBU0MsY0FBYyxvQkFFN0N1WSxFQUFRRyxTQUFTQyxJQUNmQSxFQUFPQyxpQkFBaUIsU0FBVXZZLElBQ2hDLE1BQU13WSxFQUFTeFksRUFBRVIsT0FBT2laLGFBQWEsV0FHckMsY0FBbUJELEVBQVEsVUFBVSxHQUNyQyxJQUtKWixFQUFVVyxpQkFBaUIsU0FBVXZZLElBQ25DNFgsRUFBVXJZLE1BQU1tWixRQUFVLE9BQzFCZixFQUFXcFksTUFBTW1aLFFBQVUsTUFBTSxJQUduQ04sRUFBY0csaUJBQWlCLFNBQVV2WSxJQUN2QzRYLEVBQVVyWSxNQUFNbVosUUFBVSxjQUMxQmYsRUFBV3BZLE1BQU1tWixRQUFVLE1BQU0sR0FDakMsRUNoQ04sR0F4RHlCLENBQUN4QixFQUFVQyxLQUNoQyxNQUFNQyxFQUFXMVgsU0FBU1csY0FBYyxPQUN4QytXLEVBQVMxVyxhQUFhLEtBQU0sbUJBRTVCLE1BQU0yVyxFQUFlM1gsU0FBU1csY0FBYyxNQUs1QyxHQUpBZ1gsRUFBYUMsWUFBYyxRQUUzQkYsRUFBU2pYLFlBQVlrWCxHQUVSLE1BQVRGLEVBQWUsQ0FDakIsTUFBTXdCLEVBQVU3SixFQUFPLElBQUl4SyxLQUFRLGNBRW5DLElBQUssSUFBSTNJLEVBQUksRUFBR0EsRUFBSXdiLEVBQU0xYixPQUFRRSxJQUVoQyxHQUFJd2IsRUFBTXhiLEdBQUdpYixTQUFXK0IsRUFBUyxDQUMvQixNQUFNcEIsRUFBVTdYLFNBQVNXLGNBQWMsT0FDdkNrWCxFQUFRN1csYUFBYSxRQUFTLFlBRTlCLE1BQU04VyxFQUFNOVgsU0FBU1csY0FBYyxVQUNuQ21YLEVBQUk5VyxhQUFhLFFBQVMsY0FDMUI4VyxFQUFJOVcsYUFBYSxVQUFXeVcsRUFBTXhiLEdBQUc2YSxNQUVyQyxNQUFNaUIsRUFBYy9YLFNBQVNXLGNBQWMsS0FDM0NvWCxFQUFZSCxZQUFjSCxFQUFNeGIsR0FBRythLE1BRW5DLE1BQU1nQixFQUFjaFksU0FBU1csY0FBYyxLQUMzQ3FYLEVBQVlKLFlBQWNILEVBQU14YixHQUFHaWIsUUFFbkNXLEVBQVFwWCxZQUFZcVgsR0FDcEJELEVBQVFwWCxZQUFZc1gsR0FDcEJGLEVBQVFwWCxZQUFZdVgsR0FFcEJOLEVBQVNqWCxZQUFZb1gsRUFDdkIsQ0FFSixDQUVBLE9BQU9ILEVBQVNhLFNBQVMsRUFtQjdCLEdBaEJ1QixLQUNIdlksU0FBU3lZLGlCQUFpQixlQUVsQ0UsU0FBU0MsSUFDZkEsRUFBT0MsaUJBQWlCLFNBQVV2WSxJQUNoQyxNQUFNd1ksRUFBU3hZLEVBQUVSLE9BQU9pWixhQUFhLFdBR3JDLGNBQW1CRCxFQUFRLFFBQVEsR0FDbkMsR0FDRixFQ3hEUyxTQUFTLEdBQU9oWixFQUFRNFQsR0FDckMsR0FBYyxNQUFWNVQsRUFDRixNQUFNLElBQUlxRSxVQUFVLGlFQUd0QixJQUFLLElBQUkrVSxLQUFZeEYsRUFDZmxSLE9BQU9RLFVBQVVDLGVBQWVDLEtBQUt3USxFQUFRd0YsS0FFL0NwWixFQUFPb1osR0FBWXhGLEVBQU93RixJQUk5QixPQUFPcFosQ0FDVCxDQ2JBLFNBQVMsR0FBUXRCLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBRXpYLFNBQVMyYSxHQUFVQyxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWUksR0FBZ0JMLEVBQVVDLEVBQWEsQ0FFaFksU0FBU0ksR0FBZ0JsWCxFQUFHbUIsR0FBK0csT0FBMUcrVixHQUFrQmpYLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVVrWCxHQUFnQmxYLEVBQUdtQixFQUFJLENBRXpLLFNBQVNrVyxHQUFhQyxHQUFXLElBQUlDLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRK1osR0FBNkIsT0FBTyxXQUFrQyxJQUFzQ3BjLEVBQWxDcWMsRUFBUUMsR0FBZ0JWLEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWUQsR0FBZ0I5ZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4Q3VYLEdBQXVCNVcsR0FBdENYLENBQTZDLENBRjJNd1gsQ0FBMkJqZixLQUFNd0MsRUFBUyxDQUFHLENBSXhhLFNBQVN3YyxHQUF1QjVXLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTMFcsR0FBZ0JoWSxHQUF3SixPQUFuSmdZLEdBQWtCL1gsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVZ1ksR0FBZ0JoWSxFQUFJLENBRTVNLFNBQVNzWSxHQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FFeEosU0FBUzZXLEdBQWtCbGIsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQUU1VCxTQUFTQyxHQUFhSixFQUFhSyxFQUFZQyxHQUFtSixPQUFoSUQsR0FBWUosR0FBa0JELEVBQVkvWCxVQUFXb1ksR0FBaUJDLEdBQWFMLEdBQWtCRCxFQUFhTSxHQUFxQk4sQ0FBYSxDQUV0TixTQUFTTyxHQUFnQjljLEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBRWhOLElBQ1crYyxHQUFzQixXQUMvQixTQUFTQSxJQUNQVixHQUFnQnBmLEtBQU04ZixHQUV0QkQsR0FBZ0I3ZixLQUFNLGNBQWUsRUFDdkMsQ0FTQSxPQVBBMGYsR0FBYUksRUFBUSxDQUFDLENBQ3BCalosSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVJLEVBQVV6SixHQUNqQyxPQUFPLENBQ1QsS0FHS3dKLENBQ1QsQ0FmaUMsR0FnQnRCRSxHQUEyQixTQUFVQyxHQUM5Q3ZDLEdBQVVzQyxFQUFhQyxHQUV2QixJQUFJQyxFQUFTL0IsR0FBYTZCLEdBRTFCLFNBQVNBLEVBQVl4SSxFQUFPMkksRUFBZUMsRUFBVTFFLEVBQVUyRSxHQUM3RCxJQUFJQyxFQWNKLE9BWkFsQixHQUFnQnBmLEtBQU1nZ0IsSUFFdEJNLEVBQVFKLEVBQU96WSxLQUFLekgsT0FDZHdYLE1BQVFBLEVBQ2Q4SSxFQUFNSCxjQUFnQkEsRUFDdEJHLEVBQU1GLFNBQVdBLEVBQ2pCRSxFQUFNNUUsU0FBV0EsRUFFYjJFLElBQ0ZDLEVBQU1ELFlBQWNBLEdBR2ZDLENBQ1QsQ0FjQSxPQVpBWixHQUFhTSxFQUFhLENBQUMsQ0FDekJuWixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCNUUsRUFBU3pSLEdBQ2hDLE9BQU9uQixLQUFLbWdCLGNBQWN2TixFQUFTNVMsS0FBS3dYLE1BQU9yVyxFQUNqRCxHQUNDLENBQ0QwRixJQUFLLE1BQ0wyUSxNQUFPLFNBQWE1RSxFQUFTMk4sRUFBT3BmLEdBQ2xDLE9BQU9uQixLQUFLb2dCLFNBQVN4TixFQUFTMk4sRUFBT3ZnQixLQUFLd1gsTUFBT3JXLEVBQ25ELEtBR0s2ZSxDQUNULENBcENzQyxDQW9DcENGLElBQ1NVLEdBQTBDLFNBQVVDLEdBQzdEL0MsR0FBVThDLEVBQTRCQyxHQUV0QyxJQUFJQyxFQUFVdkMsR0FBYXFDLEdBRTNCLFNBQVNBLElBQ1AsSUFBSUcsRUFFSnZCLEdBQWdCcGYsS0FBTXdnQixHQUV0QixJQUFLLElBQUlJLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQWhCLEdBQWdCYixHQUZoQjJCLEVBQVNELEVBQVFqWixLQUFLL0IsTUFBTWdiLEVBQVMsQ0FBQzFnQixNQUFNSyxPQUFPb0ksS0FFSCxXQXRFdkIsSUF3RXpCb1gsR0FBZ0JiLEdBQXVCMkIsR0FBUyxlQUFnQixHQUV6REEsQ0FDVCxDQWdCQSxPQWRBakIsR0FBYWMsRUFBNEIsQ0FBQyxDQUN4QzNaLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU0rVixHQUN4QixHQUFJQSxFQUFNTyxlQUNSLE9BQU90VyxFQUdULElBQUl1VyxFQUFnQixJQUFJNVgsS0FBSyxHQUc3QixPQUZBNFgsRUFBY0MsWUFBWXhXLEVBQUtTLGlCQUFrQlQsRUFBS2lELGNBQWVqRCxFQUFLSyxjQUMxRWtXLEVBQWNFLFNBQVN6VyxFQUFLa0QsY0FBZWxELEVBQUttRCxnQkFBaUJuRCxFQUFLb0QsZ0JBQWlCcEQsRUFBS3VELHNCQUNyRmdULENBQ1QsS0FHS1AsQ0FDVCxDQXRDcUQsQ0FzQ25EVixJQ2xIRixTQUFTLEdBQWtCemIsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQUtyVCxJQUFJeUIsR0FBc0IsV0FDL0IsU0FBU0EsS0FSWCxTQUF5QjdCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBU3BKLENBQWdCMUksS0FBTWtoQixFQUN4QixDQU5GLElBQXNCNUIsRUFBYUssRUE2QmpDLE9BN0JvQkwsRUFRUDRCLEVBUm9CdkIsRUFRWixDQUFDLENBQ3BCOVksSUFBSyxNQUNMMlEsTUFBTyxTQUFhMkosRUFBWTdULEVBQU9pRixFQUFPcFIsR0FDNUMsSUFBSXFCLEVBQVN4QyxLQUFLaWIsTUFBTWtHLEVBQVk3VCxFQUFPaUYsRUFBT3BSLEdBRWxELE9BQUtxQixFQUlFLENBQ0w0ZSxPQUFRLElBQUlwQixHQUFZeGQsRUFBT2dWLE1BQU94WCxLQUFLcWhCLFNBQVVyaEIsS0FBS3NoQixJQUFLdGhCLEtBQUswYixTQUFVMWIsS0FBS3FnQixhQUNuRmpJLEtBQU01VixFQUFPNFYsTUFMTixJQU9YLEdBQ0MsQ0FDRHZSLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1SSxFQUFVd0IsRUFBUWpMLEdBQ3pDLE9BQU8sQ0FDVCxJQTFCOERxSixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBNkI5R3VCLENBQ1QsQ0EzQmlDLEdDUGpDLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBR3pNLElBQUl5ZSxHQUF5QixTQUFVQyxJQWpCOUMsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQWtCOVgsQ0FBVTRELEVBQVdDLEdBRXJCLElBdEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWdCL0I2QixHQWhCZ0I5QixFQWdCTW9ELEVBaEJTbkQsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQWtCbmEsU0FBU2dmLElBQ1AsSUFBSWxCLEdBN0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0ErQnBKLENBQWdCMUksS0FBTXdoQixHQUV0QixJQUFLLElBQUlaLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLE1BRTlFQSxDQUNULENBNENBLE9BcEZvQmhCLEVBMENQa0MsRUExQ29CN0IsRUEwQ1QsQ0FBQyxDQUN2QjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBRU4sSUFBSyxJQUNMLElBQUssS0FDTCxJQUFLLE1BQ0gsT0FBT2lGLEVBQU1wRSxJQUFJZ1QsRUFBWSxDQUMzQi9TLE1BQU8saUJBQ0htRSxFQUFNcEUsSUFBSWdULEVBQVksQ0FDMUIvUyxNQUFPLFdBSVgsSUFBSyxRQUNILE9BQU9tRSxFQUFNcEUsSUFBSWdULEVBQVksQ0FDM0IvUyxNQUFPLFdBS1gsUUFDRSxPQUFPbUUsRUFBTXBFLElBQUlnVCxFQUFZLENBQzNCL1MsTUFBTyxVQUNIbUUsRUFBTXBFLElBQUlnVCxFQUFZLENBQzFCL1MsTUFBTyxpQkFDSG1FLEVBQU1wRSxJQUFJZ1QsRUFBWSxDQUMxQi9TLE1BQU8sV0FHZixHQUNDLENBQ0R2SCxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNK1YsRUFBTy9JLEdBSS9CLE9BSEErSSxFQUFNcFMsSUFBTXFKLEVBQ1poTixFQUFLVyxlQUFlcU0sRUFBTyxFQUFHLEdBQzlCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQWpGOERtVixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBb0Y5RzZCLENBQ1QsQ0FsRW9DLENBa0VsQ04sSUMzRlNRLElDZ0NVNVgsS0FBS2tFLElBQUksR0FBSSxHRGhDTCxDQUMzQlIsTUFBTyxpQkFFUGhELEtBQU0scUJBRU5pRixVQUFXLGtDQUVYSixLQUFNLHFCQUVOc1MsUUFBUyxxQkFFVEMsUUFBUyxxQkFFVEMsUUFBUyxpQkFFVEMsUUFBUyxpQkFFVEMsT0FBUSxZQUVSQyxPQUFRLFlBRVJDLFlBQWEsTUFFYkMsVUFBVyxXQUVYQyxZQUFhLFdBRWJDLFdBQVksV0FFWkMsZ0JBQWlCLFNBQ2pCQyxrQkFBbUIsUUFFbkJDLGdCQUFpQixhQUVqQkMsa0JBQW1CLGFBRW5CQyxpQkFBa0IsZUFHVEMsR0FDYSwyQkFEYkEsR0FFRiwwQkFGRUEsR0FHYSxvQ0FIYkEsR0FJQywyQkFKREEsR0FLZ0Isc0NFMUNwQixTQUFTQyxHQUFTQyxFQUFlQyxHQUN0QyxPQUFLRCxFQUlFLENBQ0xwTCxNQUFPcUwsRUFBTUQsRUFBY3BMLE9BQzNCWSxLQUFNd0ssRUFBY3hLLE1BTGJ3SyxDQU9YLENBQ08sU0FBU0UsR0FBb0I5USxFQUFTbVAsR0FDM0MsSUFBSTdPLEVBQWM2TyxFQUFXNU8sTUFBTVAsR0FFbkMsT0FBS00sRUFJRSxDQUNMa0YsTUFBT2MsU0FBU2hHLEVBQVksR0FBSSxJQUNoQzhGLEtBQU0rSSxFQUFXM2YsTUFBTThRLEVBQVksR0FBR2hTLFNBTC9CLElBT1gsQ0FDTyxTQUFTeWlCLEdBQXFCL1EsRUFBU21QLEdBQzVDLElBQUk3TyxFQUFjNk8sRUFBVzVPLE1BQU1QLEdBRW5DLE9BQUtNLEVBS2tCLE1BQW5CQSxFQUFZLEdBQ1AsQ0FDTGtGLE1BQU8sRUFDUFksS0FBTStJLEVBQVczZixNQUFNLElBUXBCLENBQ0xnVyxPQUw0QixNQUFuQmxGLEVBQVksR0FBYSxHQUFLLElEYVgsTUNabEJBLEVBQVksR0FBS2dHLFNBQVNoRyxFQUFZLEdBQUksSUFBTSxHREU1QixLQ0RsQkEsRUFBWSxHQUFLZ0csU0FBU2hHLEVBQVksR0FBSSxJQUFNLEdEcUI5QixLQ3BCbEJBLEVBQVksR0FBS2dHLFNBQVNoRyxFQUFZLEdBQUksSUFBTSxJQUc1RDhGLEtBQU0rSSxFQUFXM2YsTUFBTThRLEVBQVksR0FBR2hTLFNBakIvQixJQW1CWCxDQUNPLFNBQVMwaUIsR0FBcUI3QixHQUNuQyxPQUFPMkIsR0FBb0JwQixHQUFnQlcsZ0JBQWlCbEIsRUFDOUQsQ0FDTyxTQUFTOEIsR0FBYXpjLEVBQUcyYSxHQUM5QixPQUFRM2EsR0FDTixLQUFLLEVBQ0gsT0FBT3NjLEdBQW9CcEIsR0FBZ0JPLFlBQWFkLEdBRTFELEtBQUssRUFDSCxPQUFPMkIsR0FBb0JwQixHQUFnQlEsVUFBV2YsR0FFeEQsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCUyxZQUFhaEIsR0FFMUQsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCVSxXQUFZakIsR0FFekQsUUFDRSxPQUFPMkIsR0FBb0IsSUFBSUksT0FBTyxVQUFZMWMsRUFBSSxLQUFNMmEsR0FFbEUsQ0FDTyxTQUFTZ0MsR0FBbUIzYyxFQUFHMmEsR0FDcEMsT0FBUTNhLEdBQ04sS0FBSyxFQUNILE9BQU9zYyxHQUFvQnBCLEdBQWdCWSxrQkFBbUJuQixHQUVoRSxLQUFLLEVBQ0gsT0FBTzJCLEdBQW9CcEIsR0FBZ0JhLGdCQUFpQnBCLEdBRTlELEtBQUssRUFDSCxPQUFPMkIsR0FBb0JwQixHQUFnQmMsa0JBQW1CckIsR0FFaEUsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCZSxpQkFBa0J0QixHQUUvRCxRQUNFLE9BQU8yQixHQUFvQixJQUFJSSxPQUFPLFlBQWMxYyxFQUFJLEtBQU0yYSxHQUVwRSxDQUNPLFNBQVNpQyxHQUFxQmpULEdBQ25DLE9BQVFBLEdBQ04sSUFBSyxVQUNILE9BQU8sRUFFVCxJQUFLLFVBQ0gsT0FBTyxHQUVULElBQUssS0FDTCxJQUFLLE9BQ0wsSUFBSyxZQUNILE9BQU8sR0FLVCxRQUNFLE9BQU8sRUFFYixDQUNPLFNBQVNrVCxHQUFzQkMsRUFBY0MsR0FDbEQsSUFNSS9nQixFQU5BZ2hCLEVBQWNELEVBQWMsRUFLNUJFLEVBQWlCRCxFQUFjRCxFQUFjLEVBQUlBLEVBR3JELEdBQUlFLEdBQWtCLEdBQ3BCamhCLEVBQVM4Z0IsR0FBZ0IsUUFDcEIsQ0FDTCxJQUFJSSxFQUFXRCxFQUFpQixHQUdoQ2poQixFQUFTOGdCLEVBRjBDLElBQTdCeFosS0FBS0UsTUFBTTBaLEVBQVcsTUFDcEJKLEdBQWdCSSxFQUFXLElBQ1ksSUFBTSxFQUN2RSxDQUVBLE9BQU9GLEVBQWNoaEIsRUFBUyxFQUFJQSxDQUNwQyxDQUNPLFNBQVNtaEIsR0FBZ0IzWSxHQUM5QixPQUFPQSxFQUFPLEtBQVEsR0FBS0EsRUFBTyxHQUFNLEdBQUtBLEVBQU8sS0FBUSxDQUM5RCxDQ2pJQSxTQUFTLEdBQVFqSSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQVl6TSxJQUFJNmdCLEdBQTBCLFNBQVVuQyxJQTFCL0MsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQTJCOVgsQ0FBVWdHLEVBQVluQyxHQUV0QixJQS9Cb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUF5Qi9CNkIsR0F6QmdCOUIsRUF5Qk13RixFQXpCU3ZGLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0EyQm5hLFNBQVNvaEIsSUFDUCxJQUFJdEQsR0F0Q1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQXdDcEosQ0FBZ0IxSSxLQUFNNGpCLEdBRXRCLElBQUssSUFBSWhELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTVHQSxDQUNULENBaURBLE9BbEdvQmhCLEVBbURQc0UsRUFuRG9CakUsRUFtRFIsQ0FBQyxDQUN4QjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsSUFBSTRGLEVBQWdCLFNBQXVCbk4sR0FDekMsTUFBTyxDQUNMQSxLQUFNQSxFQUNONlksZUFBMEIsT0FBVnZXLEVBRXBCLEVBRUEsT0FBUUEsR0FDTixJQUFLLElBQ0gsT0FBT3FWLEdBQVNNLEdBQWEsRUFBRzlCLEdBQWFoSixHQUUvQyxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNwUSxFQUFNakUsY0FBYzZTLEVBQVksQ0FDOUM1UyxLQUFNLFNBQ0o0SixHQUVOLFFBQ0UsT0FBT3dLLEdBQVNNLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUFhaEosR0FFOUQsR0FDQyxDQUNEdFIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxFQUFNcU0sZ0JBQWtCck0sRUFBTXhNLEtBQU8sQ0FDOUMsR0FDQyxDQUNEbkUsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTStWLEVBQU8vSSxHQUMvQixJQUFJK0wsRUFBYy9ZLEVBQUtTLGlCQUV2QixHQUFJdU0sRUFBTXFNLGVBQWdCLENBQ3hCLElBQUlDLEVBQXlCVCxHQUFzQjdMLEVBQU14TSxLQUFNdVksR0FHL0QsT0FGQS9ZLEVBQUtXLGVBQWUyWSxFQUF3QixFQUFHLEdBQy9DdFosRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxDQUVBLElBQUlRLEVBQVMsUUFBU3VWLEdBQXdCLElBQWRBLEVBQU1wUyxJQUF5QixFQUFJcUosRUFBTXhNLEtBQXZCd00sRUFBTXhNLEtBR3hELE9BRkFSLEVBQUtXLGVBQWVILEVBQU0sRUFBRyxHQUM3QlIsRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQS9GOERtVixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBa0c5R2lFLENBQ1QsQ0F2RXFDLENBdUVuQzFDLElDekdGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBT3pNLElBQUlnaEIsR0FBbUMsU0FBVXRDLElBckJ4RCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBc0I5WCxDQUFVbUcsRUFBcUJ0QyxHQUUvQixJQTFCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFvQi9CNkIsR0FwQmdCOUIsRUFvQk0yRixFQXBCUzFGLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FzQm5hLFNBQVN1aEIsSUFDUCxJQUFJekQsR0FqQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQW1DcEosQ0FBZ0IxSSxLQUFNK2pCLEdBRXRCLElBQUssSUFBSW5ELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTNIQSxDQUNULENBaURBLE9BN0ZvQmhCLEVBOENQeUUsRUE5Q29CcEUsRUE4Q0MsQ0FBQyxDQUNqQzlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsSUFBSTRGLEVBQWdCLFNBQXVCbk4sR0FDekMsTUFBTyxDQUNMQSxLQUFNQSxFQUNONlksZUFBMEIsT0FBVnZXLEVBRXBCLEVBRUEsT0FBUUEsR0FDTixJQUFLLElBQ0gsT0FBT3FWLEdBQVNNLEdBQWEsRUFBRzlCLEdBQWFoSixHQUUvQyxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNwUSxFQUFNakUsY0FBYzZTLEVBQVksQ0FDOUM1UyxLQUFNLFNBQ0o0SixHQUVOLFFBQ0UsT0FBT3dLLEdBQVNNLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUFhaEosR0FFOUQsR0FDQyxDQUNEdFIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxFQUFNcU0sZ0JBQWtCck0sRUFBTXhNLEtBQU8sQ0FDOUMsR0FDQyxDQUNEbkUsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTStWLEVBQU8vSSxFQUFPclcsR0FDdEMsSUFBSW9pQixFQUFjOVcsRUFBZWpDLEVBQU1ySixHQUV2QyxHQUFJcVcsRUFBTXFNLGVBQWdCLENBQ3hCLElBQUlDLEVBQXlCVCxHQUFzQjdMLEVBQU14TSxLQUFNdVksR0FHL0QsT0FGQS9ZLEVBQUtXLGVBQWUyWSxFQUF3QixFQUFHM2lCLEVBQVF3TCx1QkFDdkRuQyxFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CZSxFQUFlckIsRUFBTXJKLEVBQzlCLENBRUEsSUFBSTZKLEVBQVMsUUFBU3VWLEdBQXdCLElBQWRBLEVBQU1wUyxJQUF5QixFQUFJcUosRUFBTXhNLEtBQXZCd00sRUFBTXhNLEtBR3hELE9BRkFSLEVBQUtXLGVBQWVILEVBQU0sRUFBRzdKLEVBQVF3TCx1QkFDckNuQyxFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CZSxFQUFlckIsRUFBTXJKLEVBQzlCLElBMUY4RHdlLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0E2RjlHb0UsQ0FDVCxDQXZFOEMsQ0F1RTVDN0MsSUNwR0YsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FNek0sSUFBSWloQixHQUFpQyxTQUFVdkMsSUFwQnRELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FxQjlYLENBQVVvRyxFQUFtQnZDLEdBRTdCLElBekJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQW1CL0I2QixHQW5CZ0I5QixFQW1CTTRGLEVBbkJTM0YsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQXFCbmEsU0FBU3doQixJQUNQLElBQUkxRCxHQWhDUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBa0NwSixDQUFnQjFJLEtBQU1na0IsR0FFdEIsSUFBSyxJQUFJcEQsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRXJJQSxDQUNULENBcUJBLE9BaEVvQmhCLEVBNkNQMEUsR0E3Q29CckUsRUE2Q0QsQ0FBQyxDQUMvQjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxHQUNoQyxPQUNTNlYsR0FESyxNQUFWN1YsRUFDd0IsRUFHRkEsRUFBTWhOLE9BSEQ2Z0IsRUFJakMsR0FDQyxDQUNEdGEsSUFBSyxNQUNMMlEsTUFBTyxTQUFhdUIsRUFBT2tMLEVBQVF6TSxHQUNqQyxJQUFJME0sRUFBa0IsSUFBSS9hLEtBQUssR0FHL0IsT0FGQSthLEVBQWdCL1ksZUFBZXFNLEVBQU8sRUFBRyxHQUN6QzBNLEVBQWdCcFosWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUM5QlAsRUFBa0IyWixFQUMzQixNQTdEMEUsR0FBa0I1RSxFQUFZL1gsVUFBV29ZLEdBZ0U5R3FFLENBQ1QsQ0EzQzRDLENBMkMxQzlDLElDdkVGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUlvaEIsR0FBa0MsU0FBVTFDLElBbEJ2RCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVdUcsRUFBb0IxQyxHQUU5QixJQXZCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFpQi9CNkIsR0FqQmdCOUIsRUFpQk0rRixFQWpCUzlGLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FtQm5hLFNBQVMyaEIsSUFDUCxJQUFJN0QsR0E5QlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWdDcEosQ0FBZ0IxSSxLQUFNbWtCLEdBRXRCLElBQUssSUFBSXZELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFakhBLENBQ1QsQ0FvQkEsT0E3RG9CaEIsRUEyQ1A2RSxHQTNDb0J4RSxFQTJDQSxDQUFDLENBQ2hDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEdBQ2hDLE9BQ1M2VixHQURLLE1BQVY3VixFQUN3QixFQUdGQSxFQUFNaE4sT0FIRDZnQixFQUlqQyxHQUNDLENBQ0R0YSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBR2hDLE9BRkFoTixFQUFLVyxlQUFlcU0sRUFBTyxFQUFHLEdBQzlCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxNQTFEMEUsR0FBa0I4VSxFQUFZL1gsVUFBV29ZLEdBNkQ5R3dFLENBQ1QsQ0ExQzZDLENBMEMzQ2pELElDcEVGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUlxaEIsR0FBNkIsU0FBVTNDLElBbEJsRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVd0csRUFBZTNDLEdBRXpCLElBdkJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWlCL0I2QixHQWpCZ0I5QixFQWlCTWdHLEVBakJTL0YsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW1CbmEsU0FBUzRoQixJQUNQLElBQUk5RCxHQTlCUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBZ0NwSixDQUFnQjFJLEtBQU1va0IsR0FFdEIsSUFBSyxJQUFJeEQsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVoSUEsQ0FDVCxDQWdFQSxPQXpHb0JoQixFQTJDUDhFLEVBM0NvQnpFLEVBMkNMLENBQUMsQ0FDM0I5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUVOLElBQUssSUFDTCxJQUFLLEtBRUgsT0FBTzJWLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUdwQyxJQUFLLEtBQ0gsT0FBTzVPLEVBQU1qRSxjQUFjNlMsRUFBWSxDQUNyQzVTLEtBQU0sWUFJVixJQUFLLE1BQ0gsT0FBT2dFLEVBQU14RCxRQUFRb1MsRUFBWSxDQUMvQi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU14RCxRQUFRb1MsRUFBWSxDQUM5Qi9TLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTXhELFFBQVFvUyxFQUFZLENBQy9CL1MsTUFBTyxTQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPdUQsRUFBTXhELFFBQVFvUyxFQUFZLENBQy9CL1MsTUFBTyxPQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXhELFFBQVFvUyxFQUFZLENBQzlCL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXhELFFBQVFvUyxFQUFZLENBQzlCL1MsTUFBTyxTQUNQWSxRQUFTLGVBR2pCLEdBQ0MsQ0FDRG5JLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLENBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FHaEMsT0FGQWhOLEVBQUtrRixZQUEwQixHQUFiOEgsRUFBUSxHQUFRLEdBQ2xDaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQXRHOERtVixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBeUc5R3lFLENBQ1QsQ0F0RndDLENBc0Z0Q2xELElDaEhGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUlzaEIsR0FBdUMsU0FBVTVDLElBbEI1RCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVeUcsRUFBeUI1QyxHQUVuQyxJQXZCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFpQi9CNkIsR0FqQmdCOUIsRUFpQk1pRyxFQWpCU2hHLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FtQm5hLFNBQVM2aEIsSUFDUCxJQUFJL0QsR0E5QlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWdDcEosQ0FBZ0IxSSxLQUFNcWtCLEdBRXRCLElBQUssSUFBSXpELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFaElBLENBQ1QsQ0FnRUEsT0F6R29CaEIsRUEyQ1ArRSxFQTNDb0IxRSxFQTJDSyxDQUFDLENBQ3JDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FFTixJQUFLLElBQ0wsSUFBSyxLQUVILE9BQU8yVixHQUFhM1YsRUFBTWhOLE9BQVE2Z0IsR0FHcEMsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFlBSVYsSUFBSyxNQUNILE9BQU9nRSxFQUFNeEQsUUFBUW9TLEVBQVksQ0FDL0IvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNeEQsUUFBUW9TLEVBQVksQ0FDOUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT3VELEVBQU14RCxRQUFRb1MsRUFBWSxDQUMvQi9TLE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT3VELEVBQU14RCxRQUFRb1MsRUFBWSxDQUMvQi9TLE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU14RCxRQUFRb1MsRUFBWSxDQUM5Qi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU14RCxRQUFRb1MsRUFBWSxDQUM5Qi9TLE1BQU8sU0FDUFksUUFBUyxlQUdqQixHQUNDLENBQ0RuSSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxDQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBR2hDLE9BRkFoTixFQUFLa0YsWUFBMEIsR0FBYjhILEVBQVEsR0FBUSxHQUNsQ2hOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUF0RzhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQXlHOUcwRSxDQUNULENBdEZrRCxDQXNGaERuRCxJQ2hIRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJdWhCLEdBQTJCLFNBQVU3QyxJQW5CaEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVTBHLEVBQWE3QyxHQUV2QixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk1rRyxFQWxCU2pHLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVM4aEIsSUFDUCxJQUFJaEUsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNc2tCLEdBRXRCLElBQUssSUFBSTFELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRWxJLEdBQWdCLEdBQXVCNlgsR0FBUSxXQUFZLEtBRXBEQSxDQUNULENBc0VBLE9BaEhvQmhCLEVBNENQZ0YsRUE1Q29CM0UsRUE0Q1AsQ0FBQyxDQUN6QjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsSUFBSTRGLEVBQWdCLFNBQXVCWCxHQUN6QyxPQUFPQSxFQUFRLENBQ2pCLEVBRUEsT0FBUWxLLEdBRU4sSUFBSyxJQUNILE9BQU9xVixHQUFTRyxHQUFvQnBCLEdBQWdCbFUsTUFBTzJULEdBQWFoSixHQUcxRSxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNNLEdBQWEsRUFBRzlCLEdBQWFoSixHQUcvQyxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNwUSxFQUFNakUsY0FBYzZTLEVBQVksQ0FDOUM1UyxLQUFNLFVBQ0o0SixHQUdOLElBQUssTUFDSCxPQUFPNUYsRUFBTS9FLE1BQU0yVCxFQUFZLENBQzdCL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTS9FLE1BQU0yVCxFQUFZLENBQzVCL1MsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU91RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDN0IvUyxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDN0IvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDNUIvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDNUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxHQUdoQyxPQUZBaE4sRUFBS2tGLFlBQVk4SCxFQUFPLEdBQ3hCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQTdHOERtVixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBZ0g5RzJFLENBQ1QsQ0E1RnNDLENBNEZwQ3BELElDdkhGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS3pNLElBQUl3aEIsR0FBcUMsU0FBVTlDLElBbkIxRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBb0I5WCxDQUFVMkcsRUFBdUI5QyxHQUVqQyxJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk1tRyxFQWxCU2xHLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVMraEIsSUFDUCxJQUFJakUsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNdWtCLEdBRXRCLElBQUssSUFBSTNELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTNIQSxDQUNULENBc0VBLE9BaEhvQmhCLEVBNENQaUYsRUE1Q29CNUUsRUE0Q0csQ0FBQyxDQUNuQzlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsSUFBSTRGLEVBQWdCLFNBQXVCWCxHQUN6QyxPQUFPQSxFQUFRLENBQ2pCLEVBRUEsT0FBUWxLLEdBRU4sSUFBSyxJQUNILE9BQU9xVixHQUFTRyxHQUFvQnBCLEdBQWdCbFUsTUFBTzJULEdBQWFoSixHQUcxRSxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNNLEdBQWEsRUFBRzlCLEdBQWFoSixHQUcvQyxJQUFLLEtBQ0gsT0FBT3dLLEdBQVNwUSxFQUFNakUsY0FBYzZTLEVBQVksQ0FDOUM1UyxLQUFNLFVBQ0o0SixHQUdOLElBQUssTUFDSCxPQUFPNUYsRUFBTS9FLE1BQU0yVCxFQUFZLENBQzdCL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTS9FLE1BQU0yVCxFQUFZLENBQzVCL1MsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU91RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDN0IvUyxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDN0IvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDNUIvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNL0UsTUFBTTJULEVBQVksQ0FDNUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxHQUdoQyxPQUZBaE4sRUFBS2tGLFlBQVk4SCxFQUFPLEdBQ3hCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQTdHOERtVixHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBZ0g5RzRFLENBQ1QsQ0E1RmdELENBNEY5Q3JELElDdkhGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBUXpNLElBQUl5aEIsR0FBK0IsU0FBVS9DLElBdEJwRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBdUI5WCxDQUFVNEcsRUFBaUIvQyxHQUUzQixJQTNCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFxQi9CNkIsR0FyQmdCOUIsRUFxQk1vRyxFQXJCU25HLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0F1Qm5hLFNBQVNnaUIsSUFDUCxJQUFJbEUsR0FsQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQW9DcEosQ0FBZ0IxSSxLQUFNd2tCLEdBRXRCLElBQUssSUFBSTVELEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTNIQSxDQUNULENBOEJBLE9BM0VvQmhCLEVBK0NQa0YsRUEvQ29CN0UsRUErQ0gsQ0FBQyxDQUM3QjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU93VixHQUFvQnBCLEdBQWdCclMsS0FBTThSLEdBRW5ELElBQUssS0FDSCxPQUFPNU8sRUFBTWpFLGNBQWM2UyxFQUFZLENBQ3JDNVMsS0FBTSxTQUdWLFFBQ0UsT0FBTzBVLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUV4QyxHQUNDLENBQ0R0YSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEVBQU9yVyxHQUN2QyxPQUFPMEssRUN6RUUsU0FBb0IzQixFQUFXdWEsRUFBV3RqQixHQUN2RG9ILEVBQWEsRUFBR1UsV0FDaEIsSUFBSXVCLEVBQU96QixFQUFPbUIsR0FDZG1GLEVBQU81RixFQUFVZ2IsR0FDakI5WixFQUFPbUMsRUFBV3RDLEVBQU1ySixHQUFXa08sRUFFdkMsT0FEQTdFLEVBQUtJLFdBQVdKLEVBQUtLLGFBQXNCLEVBQVBGLEdBQzdCSCxDQUNULENEa0U0QmthLENBQVdsYSxFQUFNZ04sRUFBT3JXLEdBQVVBLEVBQzFELElBeEU4RHdlLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0EyRTlHNkUsQ0FDVCxDQXBEMEMsQ0FvRHhDdEQsSUVsRkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FRek0sSUFBSTRoQixHQUE2QixTQUFVbEQsSUF0QmxELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0F1QjlYLENBQVUrRyxFQUFlbEQsR0FFekIsSUEzQm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBcUIvQjZCLEdBckJnQjlCLEVBcUJNdUcsRUFyQlN0RyxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBdUJuYSxTQUFTbWlCLElBQ1AsSUFBSXJFLEdBbENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FvQ3BKLENBQWdCMUksS0FBTTJrQixHQUV0QixJQUFLLElBQUkvRCxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLEtBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRWhJQSxDQUNULENBOEJBLE9BM0VvQmhCLEVBK0NQcUYsRUEvQ29CaEYsRUErQ0wsQ0FBQyxDQUMzQjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU93VixHQUFvQnBCLEdBQWdCclMsS0FBTThSLEdBRW5ELElBQUssS0FDSCxPQUFPNU8sRUFBTWpFLGNBQWM2UyxFQUFZLENBQ3JDNVMsS0FBTSxTQUdWLFFBQ0UsT0FBTzBVLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUV4QyxHQUNDLENBQ0R0YSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBQ2hDLE9BQU9qTixFQ3pFRSxTQUF1QkwsRUFBVzBhLEdBQy9DcmMsRUFBYSxFQUFHVSxXQUNoQixJQUFJdUIsRUFBT3pCLEVBQU9tQixHQUNkcUYsRUFBVTlGLEVBQVVtYixHQUNwQmphLEVBQU9ZLEVBQWNmLEdBQVErRSxFQUVqQyxPQURBL0UsRUFBS0ksV0FBV0osRUFBS0ssYUFBc0IsRUFBUEYsR0FDN0JILENBQ1QsQ0RrRStCcWEsQ0FBY3JhLEVBQU1nTixHQUMvQyxJQXhFOERtSSxHQUFZLEdBQWtCTCxFQUFZL1gsVUFBV29ZLEdBMkU5R2dGLENBQ1QsQ0FwRHdDLENBb0R0Q3pELElFbEZGLFNBQVMsR0FBUW5lLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS2hOLElBQUkraEIsR0FBZ0IsQ0FBQyxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksSUFDN0RDLEdBQTBCLENBQUMsR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLElBRWhFQyxHQUEwQixTQUFVdkQsSUF0Qi9DLFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0F1QjlYLENBQVVvSCxFQUFZdkQsR0FFdEIsSUEzQm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBcUIvQjZCLEdBckJnQjlCLEVBcUJNNEcsRUFyQlMzRyxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBdUJuYSxTQUFTd2lCLElBQ1AsSUFBSTFFLEdBbENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FvQ3BKLENBQWdCMUksS0FBTWdsQixHQUV0QixJQUFLLElBQUlwRSxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBV3pCLE9BTkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxjQUFlLEdBRTlELEdBQWdCLEdBQXVCQSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUV0SEEsQ0FDVCxDQXdDQSxPQXZGb0JoQixFQWlEUDBGLEVBakRvQnJGLEVBaURSLENBQUMsQ0FDeEI5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDSCxPQUFPd1YsR0FBb0JwQixHQUFnQmxYLEtBQU0yVyxHQUVuRCxJQUFLLEtBQ0gsT0FBTzVPLEVBQU1qRSxjQUFjNlMsRUFBWSxDQUNyQzVTLEtBQU0sU0FHVixRQUNFLE9BQU8wVSxHQUFhM1YsRUFBTWhOLE9BQVE2Z0IsR0FFeEMsR0FDQyxDQUNEdGEsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQmhOLEVBQU1nTixHQUM3QixJQUNJeU4sRUFBYXRCLEdBRE5uWixFQUFLUyxrQkFFWnVDLEVBQVFoRCxFQUFLaUQsY0FFakIsT0FBSXdYLEVBQ0t6TixHQUFTLEdBQUtBLEdBQVN1TixHQUF3QnZYLEdBRS9DZ0ssR0FBUyxHQUFLQSxHQUFTc04sR0FBY3RYLEVBRWhELEdBQ0MsQ0FDRDNHLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FHaEMsT0FGQWhOLEVBQUtJLFdBQVc0TSxHQUNoQmhOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUFwRjhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQXVGOUdxRixDQUNULENBaEVxQyxDQWdFbkM5RCxJQzlGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJbWlCLEdBQStCLFNBQVV6RCxJQW5CcEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXNILEVBQWlCekQsR0FFM0IsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNOEcsRUFsQlM3RyxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTMGlCLElBQ1AsSUFBSTVFLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTWtsQixHQUV0QixJQUFLLElBQUl0RSxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBV3pCLE9BTkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxjQUFlLEdBRTlELEdBQWdCLEdBQXVCQSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVySUEsQ0FDVCxDQXdDQSxPQXBGb0JoQixFQThDUDRGLEVBOUNvQnZGLEVBOENILENBQUMsQ0FDN0I5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDTCxJQUFLLEtBQ0gsT0FBT3dWLEdBQW9CcEIsR0FBZ0JqUyxVQUFXMFIsR0FFeEQsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFNBR1YsUUFDRSxPQUFPMFUsR0FBYTNWLEVBQU1oTixPQUFRNmdCLEdBRXhDLEdBQ0MsQ0FDRHRhLElBQUssV0FDTDJRLE1BQU8sU0FBa0JoTixFQUFNZ04sR0FJN0IsT0FGaUJtTSxHQUROblosRUFBS1Msa0JBSVB1TSxHQUFTLEdBQUtBLEdBQVMsSUFFdkJBLEdBQVMsR0FBS0EsR0FBUyxHQUVsQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBR2hDLE9BRkFoTixFQUFLa0YsWUFBWSxFQUFHOEgsR0FDcEJoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBakY4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0FvRjlHdUYsQ0FDVCxDQWhFMEMsQ0FnRXhDaEUsSUN2RmEsU0FBU2lFLEdBQVVqYixFQUFXa2IsRUFBVWprQixHQUNyRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT0MsRUFBdUJDLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCVSxFQUFlN0MsRUFBKzBCLFFBQXAwQnFDLEVBQThoQixRQUF0aEJDLEVBQWtkLFFBQXpjQyxFQUE2RyxRQUFwR0MsRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JHLG9CQUFvQyxJQUFWTixFQUFtQkEsRUFBUUwsRUFBZVcsb0JBQW9DLElBQVZQLEVBQW1CQSxFQUE0RCxRQUFuREssRUFBd0JULEVBQWVZLGNBQThDLElBQTFCSCxHQUF5RyxRQUE1REMsRUFBeUJELEVBQXNCakwsZUFBZ0QsSUFBM0JrTCxPQUE5RSxFQUEySEEsRUFBdUJDLG9CQUFtQyxJQUFUUixFQUFrQkEsRUFBTyxHQUVuNEIsS0FBTVEsR0FBZ0IsR0FBS0EsR0FBZ0IsR0FDekMsTUFBTSxJQUFJRSxXQUFXLG9EQUd2QixJQUFJaEMsRUFBT3pCLEVBQU9tQixHQUNkTyxFQUFNaEIsRUFBVTJiLEdBSWhCemEsSUFGWUYsRUFBTSxFQUNNLEdBQUssRUFDVjZCLEVBQWUsRUFBSSxHQUFLN0IsRUFIOUJELEVBQUtFLFlBS3RCLE9BREFGLEVBQUtJLFdBQVdKLEVBQUtLLGFBQWVGLEdBQzdCSCxDQUNULENDdkJBLFNBQVMsR0FBUXpILEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRbWIsR0FBUyxJQUFLLElBQUloZixFQUFJLEVBQUdBLEVBQUlnZixFQUFNbGYsT0FBUUUsSUFBSyxDQUFFLElBQUlpZixFQUFhRCxFQUFNaGYsR0FBSWlmLEVBQVd4WSxXQUFhd1ksRUFBV3hZLGFBQWMsRUFBT3dZLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU0vVyxPQUFPQyxlQUFlM0MsRUFBUW9iLEVBQVc1WSxJQUFLNFksRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0IzWSxFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPa1gsZ0JBQWtCLFNBQXlCblgsRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRW9YLFVBQVlqVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJOFcsZUFBZSw2REFBZ0UsT0FBTzlXLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPa1gsZUFBaUJsWCxPQUFPb1ksZUFBaUIsU0FBeUJyWSxHQUFLLE9BQU9BLEVBQUVvWCxXQUFhblgsT0FBT29ZLGVBQWVyWSxFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTThXLGNBQWMsRUFBTUQsVUFBVSxJQUFrQi9hLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS3pNLElBQUlzaUIsR0FBeUIsU0FBVTVELElBbkI5QyxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWxWLFVBQVUsc0RBQXlEaVYsRUFBU3BXLFVBQVlSLE9BQU84VyxPQUFPRCxHQUFjQSxFQUFXclcsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT21HLEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBb0I5WCxDQUFVeUgsRUFBVzVELEdBRXJCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTWlILEVBbEJTaEgsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBUzZpQixJQUNQLElBQUkvRSxHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU1xbEIsR0FFdEIsSUFBSyxJQUFJekUsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRXhGQSxDQUNULENBc0VBLE9BaEhvQmhCLEVBNENQK0YsRUE1Q29CMUYsRUE0Q1QsQ0FBQyxDQUN2QjlZLElBQUssUUFDTDJRLE1BQU8sU0FBZTJKLEVBQVk3VCxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBRU4sSUFBSyxJQUNMLElBQUssS0FDTCxJQUFLLE1BQ0gsT0FBT2lGLEVBQU05SCxJQUFJMFcsRUFBWSxDQUMzQi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTTlILElBQUkwVyxFQUFZLENBQzNCL1MsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxFQUFPclcsR0FHdkMsT0FGQXFKLEVBQU8yYSxHQUFVM2EsRUFBTWdOLEVBQU9yVyxJQUN6QjJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUE3RzhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQWdIOUcwRixDQUNULENBNUZvQyxDQTRGbENuRSxJQ3ZIRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJdWlCLEdBQThCLFNBQVU3RCxJQXBCbkQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTBILEVBQWdCN0QsR0FFMUIsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNa0gsRUFuQlNqSCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTOGlCLElBQ1AsSUFBSWhGLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXNsQixHQUV0QixJQUFLLElBQUkxRSxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFcklBLENBQ1QsQ0FxRkEsT0FoSW9CaEIsRUE2Q1BnRyxFQTdDb0IzRixFQTZDSixDQUFDLENBQzVCOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixFQUFPcFIsR0FDOUMsSUFBSWdYLEVBQWdCLFNBQXVCWCxHQUN6QyxJQUFJK04sRUFBOEMsRUFBOUJ6YixLQUFLRSxPQUFPd04sRUFBUSxHQUFLLEdBQzdDLE9BQVFBLEVBQVFyVyxFQUFRbUwsYUFBZSxHQUFLLEVBQUlpWixDQUNsRCxFQUVBLE9BQVFqWSxHQUVOLElBQUssSUFDTCxJQUFLLEtBRUgsT0FBT3FWLEdBQVNNLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUFhaEosR0FHMUQsSUFBSyxLQUNILE9BQU93SyxHQUFTcFEsRUFBTWpFLGNBQWM2UyxFQUFZLENBQzlDNVMsS0FBTSxRQUNKNEosR0FHTixJQUFLLE1BQ0gsT0FBTzVGLEVBQU05SCxJQUFJMFcsRUFBWSxDQUMzQi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTTlILElBQUkwVyxFQUFZLENBQzNCL1MsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxFQUFPclcsR0FHdkMsT0FGQXFKLEVBQU8yYSxHQUFVM2EsRUFBTWdOLEVBQU9yVyxJQUN6QjJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUE3SDhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQWdJOUcyRixDQUNULENBM0d5QyxDQTJHdkNwRSxJQ3ZJRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJeWlCLEdBQXdDLFNBQVUvRCxJQXBCN0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTRILEVBQTBCL0QsR0FFcEMsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNb0gsRUFuQlNuSCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTZ2pCLElBQ1AsSUFBSWxGLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXdsQixHQUV0QixJQUFLLElBQUk1RSxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFcklBLENBQ1QsQ0FxRkEsT0FoSW9CaEIsRUE2Q1BrRyxFQTdDb0I3RixFQTZDTSxDQUFDLENBQ3RDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixFQUFPcFIsR0FDOUMsSUFBSWdYLEVBQWdCLFNBQXVCWCxHQUN6QyxJQUFJK04sRUFBOEMsRUFBOUJ6YixLQUFLRSxPQUFPd04sRUFBUSxHQUFLLEdBQzdDLE9BQVFBLEVBQVFyVyxFQUFRbUwsYUFBZSxHQUFLLEVBQUlpWixDQUNsRCxFQUVBLE9BQVFqWSxHQUVOLElBQUssSUFDTCxJQUFLLEtBRUgsT0FBT3FWLEdBQVNNLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUFhaEosR0FHMUQsSUFBSyxLQUNILE9BQU93SyxHQUFTcFEsRUFBTWpFLGNBQWM2UyxFQUFZLENBQzlDNVMsS0FBTSxRQUNKNEosR0FHTixJQUFLLE1BQ0gsT0FBTzVGLEVBQU05SCxJQUFJMFcsRUFBWSxDQUMzQi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTTlILElBQUkwVyxFQUFZLENBQzNCL1MsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDM0IvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxFQUFPclcsR0FHdkMsT0FGQXFKLEVBQU8yYSxHQUFVM2EsRUFBTWdOLEVBQU9yVyxJQUN6QjJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUE3SDhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQWdJOUc2RixDQUNULENBM0dtRCxDQTJHakR0RSxJQ3ZJRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJMGlCLEdBQTRCLFNBQVVoRSxJQXBCakQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTZILEVBQWNoRSxHQUV4QixJQXpCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFtQi9CNkIsR0FuQmdCOUIsRUFtQk1xSCxFQW5CU3BILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FxQm5hLFNBQVNpakIsSUFDUCxJQUFJbkYsR0FoQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWtDcEosQ0FBZ0IxSSxLQUFNeWxCLEdBRXRCLElBQUssSUFBSTdFLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVySUEsQ0FDVCxDQXdGQSxPQW5Jb0JoQixFQTZDUG1HLEVBN0NvQjlGLEVBNkNOLENBQUMsQ0FDMUI5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLElBQUk0RixFQUFnQixTQUF1QlgsR0FDekMsT0FBYyxJQUFWQSxFQUNLLEVBR0ZBLENBQ1QsRUFFQSxPQUFRbEssR0FFTixJQUFLLElBQ0wsSUFBSyxLQUVILE9BQU8yVixHQUFhM1YsRUFBTWhOLE9BQVE2Z0IsR0FHcEMsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFFBSVYsSUFBSyxNQUNILE9BQU9vVSxHQUFTcFEsRUFBTTlILElBQUkwVyxFQUFZLENBQ3BDL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUkwVyxFQUFZLENBQzFCL1MsTUFBTyxRQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUkwVyxFQUFZLENBQzFCL1MsTUFBTyxTQUNQWSxRQUFTLGVBQ1BtSixHQUdOLElBQUssUUFDSCxPQUFPd0ssR0FBU3BRLEVBQU05SCxJQUFJMFcsRUFBWSxDQUNwQy9TLE1BQU8sU0FDUFksUUFBUyxlQUNQbUosR0FHTixJQUFLLFNBQ0gsT0FBT3dLLEdBQVNwUSxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDcEMvUyxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSTBXLEVBQVksQ0FDMUIvUyxNQUFPLFNBQ1BZLFFBQVMsZUFDUG1KLEdBSU4sUUFDRSxPQUFPd0ssR0FBU3BRLEVBQU05SCxJQUFJMFcsRUFBWSxDQUNwQy9TLE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJMFcsRUFBWSxDQUMxQi9TLE1BQU8sU0FDUFksUUFBUyxlQUNQbUosR0FFVixHQUNDLENBQ0R0UixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxDQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBR2hDLE9BRkFoTixFQ2hJUyxTQUFzQk4sRUFBV2tiLEdBQzlDN2MsRUFBYSxFQUFHVSxXQUNoQixJQUFJd0IsRUFBTWhCLEVBQVUyYixHQUVoQjNhLEVBQU0sR0FBTSxJQUNkQSxHQUFZLEdBR2QsSUFDSUQsRUFBT3pCLEVBQU9tQixHQUlkUyxJQUZZRixFQUFNLEVBQ00sR0FBSyxFQUpkLEVBS21CLEVBQUksR0FBS0EsRUFIOUJELEVBQUtFLFlBS3RCLE9BREFGLEVBQUtJLFdBQVdKLEVBQUtLLGFBQWVGLEdBQzdCSCxDQUNULENEZ0hha2IsQ0FBYWxiLEVBQU1nTixHQUMxQmhOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUFoSThEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQW1JOUc4RixDQUNULENBOUd1QyxDQThHckN2RSxJRTFJRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJNGlCLEdBQTBCLFNBQVVsRSxJQWxCL0MsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVStILEVBQVlsRSxHQUV0QixJQXZCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFpQi9CNkIsR0FqQmdCOUIsRUFpQk11SCxFQWpCU3RILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FtQm5hLFNBQVNtakIsSUFDUCxJQUFJckYsR0E5QlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWdDcEosQ0FBZ0IxSSxLQUFNMmxCLEdBRXRCLElBQUssSUFBSS9FLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUV4RkEsQ0FDVCxDQTZDQSxPQXRGb0JoQixFQTJDUHFHLEVBM0NvQmhHLEVBMkNSLENBQUMsQ0FDeEI5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9pRixFQUFNcEMsVUFBVWdSLEVBQVksQ0FDakMvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDaEMvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHYixJQUFLLFFBQ0gsT0FBT3VELEVBQU1wQyxVQUFVZ1IsRUFBWSxDQUNqQy9TLE1BQU8sU0FDUFksUUFBUyxlQUliLFFBQ0UsT0FBT3VELEVBQU1wQyxVQUFVZ1IsRUFBWSxDQUNqQy9TLE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU1wQyxVQUFVZ1IsRUFBWSxDQUNoQy9TLE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU1wQyxVQUFVZ1IsRUFBWSxDQUNoQy9TLE1BQU8sU0FDUFksUUFBUyxlQUdqQixHQUNDLENBQ0RuSSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBRWhDLE9BREFoTixFQUFLTSxZQUFZc1ksR0FBcUI1TCxHQUFRLEVBQUcsRUFBRyxHQUM3Q2hOLENBQ1QsSUFuRjhEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQXNGOUdnRyxDQUNULENBbkVxQyxDQW1FbkN6RSxJQzdGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJNmlCLEdBQWtDLFNBQVVuRSxJQWxCdkQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVWdJLEVBQW9CbkUsR0FFOUIsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNd0gsRUFqQlN2SCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTb2pCLElBQ1AsSUFBSXRGLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTTRsQixHQUV0QixJQUFLLElBQUloRixFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFeEZBLENBQ1QsQ0E2Q0EsT0F0Rm9CaEIsRUEyQ1BzRyxFQTNDb0JqRyxFQTJDQSxDQUFDLENBQ2hDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0wsSUFBSyxLQUNMLElBQUssTUFDSCxPQUFPaUYsRUFBTXBDLFVBQVVnUixFQUFZLENBQ2pDL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVVnUixFQUFZLENBQ2hDL1MsTUFBTyxTQUNQWSxRQUFTLGVBR2IsSUFBSyxRQUNILE9BQU91RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDakMvUyxNQUFPLFNBQ1BZLFFBQVMsZUFJYixRQUNFLE9BQU91RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDakMvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDaEMvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDaEMvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxHQUVoQyxPQURBaE4sRUFBS00sWUFBWXNZLEdBQXFCNUwsR0FBUSxFQUFHLEVBQUcsR0FDN0NoTixDQUNULElBbkY4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0FzRjlHaUcsQ0FDVCxDQW5FNkMsQ0FtRTNDMUUsSUM3RkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSThpQixHQUErQixTQUFVcEUsSUFuQnBELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVVpSSxFQUFpQnBFLEdBRTNCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTXlILEVBbEJTeEgsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBU3FqQixJQUNQLElBQUl2RixHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU02bEIsR0FFdEIsSUFBSyxJQUFJakYsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssTUFFOUVBLENBQ1QsQ0E2Q0EsT0F2Rm9CaEIsRUE0Q1B1RyxFQTVDb0JsRyxFQTRDSCxDQUFDLENBQzdCOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0wsSUFBSyxLQUNMLElBQUssTUFDSCxPQUFPaUYsRUFBTXBDLFVBQVVnUixFQUFZLENBQ2pDL1MsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVVnUixFQUFZLENBQ2hDL1MsTUFBTyxTQUNQWSxRQUFTLGVBR2IsSUFBSyxRQUNILE9BQU91RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDakMvUyxNQUFPLFNBQ1BZLFFBQVMsZUFJYixRQUNFLE9BQU91RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDakMvUyxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDaEMvUyxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVWdSLEVBQVksQ0FDaEMvUyxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXlaLEVBQVF6TSxHQUVoQyxPQURBaE4sRUFBS00sWUFBWXNZLEdBQXFCNUwsR0FBUSxFQUFHLEVBQUcsR0FDN0NoTixDQUNULElBcEY4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0F1RjlHa0csQ0FDVCxDQW5FMEMsQ0FtRXhDM0UsSUM5RkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSStpQixHQUErQixTQUFVckUsSUFuQnBELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVVrSSxFQUFpQnJFLEdBRTNCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTTBILEVBbEJTekgsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBU3NqQixJQUNQLElBQUl4RixHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU04bEIsR0FFdEIsSUFBSyxJQUFJbEYsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxNQUVuRkEsQ0FDVCxDQXdDQSxPQWxGb0JoQixFQTRDUHdHLEVBNUNvQm5HLEVBNENILENBQUMsQ0FDN0I5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDSCxPQUFPd1YsR0FBb0JwQixHQUFnQkksUUFBU1gsR0FFdEQsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFNBR1YsUUFDRSxPQUFPMFUsR0FBYTNWLEVBQU1oTixPQUFRNmdCLEdBRXhDLEdBQ0MsQ0FDRHRhLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLEVBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FDaEMsSUFBSXVPLEVBQU92YixFQUFLa0QsZUFBaUIsR0FVakMsT0FSSXFZLEdBQVF2TyxFQUFRLEdBQ2xCaE4sRUFBS00sWUFBWTBNLEVBQVEsR0FBSSxFQUFHLEVBQUcsR0FDekJ1TyxHQUFrQixLQUFWdk8sRUFHbEJoTixFQUFLTSxZQUFZME0sRUFBTyxFQUFHLEVBQUcsR0FGOUJoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBS3JCTixDQUNULElBL0U4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0FrRjlHbUcsQ0FDVCxDQTlEMEMsQ0E4RHhDNUUsSUN6RkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSWlqQixHQUErQixTQUFVdkUsSUFuQnBELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVVvSSxFQUFpQnZFLEdBRTNCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTTRILEVBbEJTM0gsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBU3dqQixJQUNQLElBQUkxRixHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU1nbUIsR0FFdEIsSUFBSyxJQUFJcEYsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFN0ZBLENBQ1QsQ0ErQkEsT0F6RW9CaEIsRUE0Q1AwRyxFQTVDb0JyRyxFQTRDSCxDQUFDLENBQzdCOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3dWLEdBQW9CcEIsR0FBZ0JDLFFBQVNSLEdBRXRELElBQUssS0FDSCxPQUFPNU8sRUFBTWpFLGNBQWM2UyxFQUFZLENBQ3JDNVMsS0FBTSxTQUdWLFFBQ0UsT0FBTzBVLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUV4QyxHQUNDLENBQ0R0YSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBRWhDLE9BREFoTixFQUFLTSxZQUFZME0sRUFBTyxFQUFHLEVBQUcsR0FDdkJoTixDQUNULElBdEU4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0F5RTlHcUcsQ0FDVCxDQXJEMEMsQ0FxRHhDOUUsSUNoRkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSWtqQixHQUErQixTQUFVeEUsSUFuQnBELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVVxSSxFQUFpQnhFLEdBRTNCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTTZILEVBbEJTNUgsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBU3lqQixJQUNQLElBQUkzRixHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU1pbUIsR0FFdEIsSUFBSyxJQUFJckYsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxNQUVuRkEsQ0FDVCxDQXNDQSxPQWhGb0JoQixFQTRDUDJHLEVBNUNvQnRHLEVBNENILENBQUMsQ0FDN0I5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDSCxPQUFPd1YsR0FBb0JwQixHQUFnQkcsUUFBU1YsR0FFdEQsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFNBR1YsUUFDRSxPQUFPMFUsR0FBYTNWLEVBQU1oTixPQUFRNmdCLEdBRXhDLEdBQ0MsQ0FDRHRhLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLEVBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FTaEMsT0FSV2hOLEVBQUtrRCxlQUFpQixJQUVyQjhKLEVBQVEsR0FDbEJoTixFQUFLTSxZQUFZME0sRUFBUSxHQUFJLEVBQUcsRUFBRyxHQUVuQ2hOLEVBQUtNLFlBQVkwTSxFQUFPLEVBQUcsRUFBRyxHQUd6QmhOLENBQ1QsSUE3RThEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQWdGOUdzRyxDQUNULENBNUQwQyxDQTREeEMvRSxJQ3ZGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJbWpCLEdBQStCLFNBQVV6RSxJQW5CcEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXNJLEVBQWlCekUsR0FFM0IsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNOEgsRUFsQlM3SCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTMGpCLElBQ1AsSUFBSTVGLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTWttQixHQUV0QixJQUFLLElBQUl0RixFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUU3RkEsQ0FDVCxDQWdDQSxPQTFFb0JoQixFQTRDUDRHLEVBNUNvQnZHLEVBNENILENBQUMsQ0FDN0I5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDSCxPQUFPd1YsR0FBb0JwQixHQUFnQkUsUUFBU1QsR0FFdEQsSUFBSyxLQUNILE9BQU81TyxFQUFNakUsY0FBYzZTLEVBQVksQ0FDckM1UyxLQUFNLFNBR1YsUUFDRSxPQUFPMFUsR0FBYTNWLEVBQU1oTixPQUFRNmdCLEdBRXhDLEdBQ0MsQ0FDRHRhLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLEVBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FDaEMsSUFBSW5ILEVBQVFtSCxHQUFTLEdBQUtBLEVBQVEsR0FBS0EsRUFFdkMsT0FEQWhOLEVBQUtNLFlBQVl1RixFQUFPLEVBQUcsRUFBRyxHQUN2QjdGLENBQ1QsSUF2RThEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQTBFOUd1RyxDQUNULENBdEQwQyxDQXNEeENoRixJQ2pGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJb2pCLEdBQTRCLFNBQVUxRSxJQW5CakQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXVJLEVBQWMxRSxHQUV4QixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk0rSCxFQWxCUzlILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVMyakIsSUFDUCxJQUFJN0YsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNbW1CLEdBRXRCLElBQUssSUFBSXZGLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssTUFFcEVBLENBQ1QsQ0ErQkEsT0F6RW9CaEIsRUE0Q1A2RyxFQTVDb0J4RyxFQTRDTixDQUFDLENBQzFCOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3dWLEdBQW9CcEIsR0FBZ0JLLE9BQVFaLEdBRXJELElBQUssS0FDSCxPQUFPNU8sRUFBTWpFLGNBQWM2UyxFQUFZLENBQ3JDNVMsS0FBTSxXQUdWLFFBQ0UsT0FBTzBVLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUV4QyxHQUNDLENBQ0R0YSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBRWhDLE9BREFoTixFQUFLNGIsY0FBYzVPLEVBQU8sRUFBRyxHQUN0QmhOLENBQ1QsSUF0RThEbVYsR0FBWSxHQUFrQkwsRUFBWS9YLFVBQVdvWSxHQXlFOUd3RyxDQUNULENBckR1QyxDQXFEckNqRixJQ2hGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJc2pCLEdBQTRCLFNBQVU1RSxJQW5CakQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXlJLEVBQWM1RSxHQUV4QixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk1pSSxFQWxCU2hJLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUW5YLFVBQVVvWCxRQUFRbFgsS0FBSzZXLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU83WixHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENxYyxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0IvZSxNQUFNOEksWUFBYXRHLEVBQVM4YixRQUFRQyxVQUFVTSxFQUFPNVYsVUFBVzhWLEVBQVksTUFBU3ZjLEVBQVNxYyxFQUFNblosTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVM2akIsSUFDUCxJQUFJL0YsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUk1VyxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNcW1CLEdBRXRCLElBQUssSUFBSXpGLEVBQU8zWCxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU1nSixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FcFksRUFBS29ZLEdBQVE1WCxVQUFVNFgsR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3pZLEtBQUsvQixNQUFNd2EsRUFBUSxDQUFDbGdCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUI2WCxHQUFRLHFCQUFzQixDQUFDLElBQUssTUFFcEVBLENBQ1QsQ0ErQkEsT0F6RW9CaEIsRUE0Q1ArRyxFQTVDb0IxRyxFQTRDTixDQUFDLENBQzFCOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3dWLEdBQW9CcEIsR0FBZ0JNLE9BQVFiLEdBRXJELElBQUssS0FDSCxPQUFPNU8sRUFBTWpFLGNBQWM2UyxFQUFZLENBQ3JDNVMsS0FBTSxXQUdWLFFBQ0UsT0FBTzBVLEdBQWEzVixFQUFNaE4sT0FBUTZnQixHQUV4QyxHQUNDLENBQ0R0YSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNeVosRUFBUXpNLEdBRWhDLE9BREFoTixFQUFLOGIsY0FBYzlPLEVBQU8sR0FDbkJoTixDQUNULElBdEU4RG1WLEdBQVksR0FBa0JMLEVBQVkvWCxVQUFXb1ksR0F5RTlHMEcsQ0FDVCxDQXJEdUMsQ0FxRHJDbkYsSUNoRkYsU0FBUyxHQUFRbmUsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFtYixHQUFTLElBQUssSUFBSWhmLEVBQUksRUFBR0EsRUFBSWdmLEVBQU1sZixPQUFRRSxJQUFLLENBQUUsSUFBSWlmLEVBQWFELEVBQU1oZixHQUFJaWYsRUFBV3hZLFdBQWF3WSxFQUFXeFksYUFBYyxFQUFPd1ksRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTS9XLE9BQU9DLGVBQWUzQyxFQUFRb2IsRUFBVzVZLElBQUs0WSxFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQjNZLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9rWCxnQkFBa0IsU0FBeUJuWCxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFb1gsVUFBWWpXLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk4VyxlQUFlLDZEQUFnRSxPQUFPOVcsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9rWCxlQUFpQmxYLE9BQU9vWSxlQUFpQixTQUF5QnJZLEdBQUssT0FBT0EsRUFBRW9YLFdBQWFuWCxPQUFPb1ksZUFBZXJZLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNOFcsY0FBYyxFQUFNRCxVQUFVLElBQWtCL2EsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FJek0sSUFBSXdqQixHQUFzQyxTQUFVOUUsSUFsQjNELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJbFYsVUFBVSxzREFBeURpVixFQUFTcFcsVUFBWVIsT0FBTzhXLE9BQU9ELEdBQWNBLEVBQVdyVyxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPbUcsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FtQjlYLENBQVUySSxFQUF3QjlFLEdBRWxDLElBdkJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWlCL0I2QixHQWpCZ0I5QixFQWlCTW1JLEVBakJTbEksRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRblgsVUFBVW9YLFFBQVFsWCxLQUFLNlcsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzdaLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ3FjLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQi9lLE1BQU04SSxZQUFhdEcsRUFBUzhiLFFBQVFDLFVBQVVNLEVBQU81VixVQUFXOFYsRUFBWSxNQUFTdmMsRUFBU3FjLEVBQU1uWixNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW1CbmEsU0FBUytqQixJQUNQLElBQUlqRyxHQTlCUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTVXLFVBQVUsb0NBQXdDLENBZ0NwSixDQUFnQjFJLEtBQU11bUIsR0FFdEIsSUFBSyxJQUFJM0YsRUFBTzNYLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTWdKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VwWSxFQUFLb1ksR0FBUTVYLFVBQVU0WCxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPelksS0FBSy9CLE1BQU13YSxFQUFRLENBQUNsZ0IsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjZYLEdBQVEscUJBQXNCLENBQUMsSUFBSyxNQUVwRUEsQ0FDVCxDQW1CQSxPQTVEb0JoQixFQTJDUGlILEdBM0NvQjVHLEVBMkNJLENBQUMsQ0FDcEM5WSxJQUFLLFFBQ0wyUSxNQUFPLFNBQWUySixFQUFZN1QsR0FLaEMsT0FBT3FWLEdBQVNNLEdBQWEzVixFQUFNaE4sT0FBUTZnQixJQUp2QixTQUF1QjNKLEdBQ3pDLE9BQU8xTixLQUFLRSxNQUFNd04sRUFBUTFOLEtBQUtrRSxJQUFJLEdBQW9CLEVBQWZWLEVBQU1oTixRQUNoRCxHQUdGLEdBQ0MsQ0FDRHVHLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU15WixFQUFRek0sR0FFaEMsT0FEQWhOLEVBQUtnYyxtQkFBbUJoUCxHQUNqQmhOLENBQ1QsTUF6RDBFLEdBQWtCOFUsRUFBWS9YLFVBQVdvWSxHQTREOUc0RyxDQUNULENBekNpRCxDQXlDL0NyRixJQ25FRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJMGpCLEdBQXNDLFNBQVVoRixJQXBCM0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTZJLEVBQXdCaEYsR0FFbEMsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNcUksRUFuQlNwSSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTaWtCLElBQ1AsSUFBSW5HLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXltQixHQUV0QixJQUFLLElBQUk3RixFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssTUFFekVBLENBQ1QsQ0FrQ0EsT0E3RW9CaEIsRUE2Q1BtSCxHQTdDb0I5RyxFQTZDSSxDQUFDLENBQ3BDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEdBQ2hDLE9BQVFBLEdBQ04sSUFBSyxJQUNILE9BQU95VixHQUFxQkwsR0FBdUN2QixHQUVyRSxJQUFLLEtBQ0gsT0FBTzRCLEdBQXFCTCxHQUF3QnZCLEdBRXRELElBQUssT0FDSCxPQUFPNEIsR0FBcUJMLEdBQXVDdkIsR0FFckUsSUFBSyxRQUNILE9BQU80QixHQUFxQkwsR0FBMEN2QixHQUd4RSxRQUNFLE9BQU80QixHQUFxQkwsR0FBMkJ2QixHQUU3RCxHQUNDLENBQ0R0YSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNK1YsRUFBTy9JLEdBQy9CLE9BQUkrSSxFQUFNTyxlQUNEdFcsRUFHRixJQUFJckIsS0FBS3FCLEVBQUtwQixVQUFZb08sRUFDbkMsTUExRTBFLEdBQWtCOEgsRUFBWS9YLFVBQVdvWSxHQTZFOUc4RyxDQUNULENBeERpRCxDQXdEL0N2RixJQ3BGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJMmpCLEdBQWlDLFNBQVVqRixJQXBCdEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVThJLEVBQW1CakYsR0FFN0IsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNc0ksRUFuQlNySSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTa2tCLElBQ1AsSUFBSXBHLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTTBtQixHQUV0QixJQUFLLElBQUk5RixFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssTUFFekVBLENBQ1QsQ0FrQ0EsT0E3RW9CaEIsRUE2Q1BvSCxHQTdDb0IvRyxFQTZDRCxDQUFDLENBQy9COVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosRUFBWTdULEdBQ2hDLE9BQVFBLEdBQ04sSUFBSyxJQUNILE9BQU95VixHQUFxQkwsR0FBdUN2QixHQUVyRSxJQUFLLEtBQ0gsT0FBTzRCLEdBQXFCTCxHQUF3QnZCLEdBRXRELElBQUssT0FDSCxPQUFPNEIsR0FBcUJMLEdBQXVDdkIsR0FFckUsSUFBSyxRQUNILE9BQU80QixHQUFxQkwsR0FBMEN2QixHQUd4RSxRQUNFLE9BQU80QixHQUFxQkwsR0FBMkJ2QixHQUU3RCxHQUNDLENBQ0R0YSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNK1YsRUFBTy9JLEdBQy9CLE9BQUkrSSxFQUFNTyxlQUNEdFcsRUFHRixJQUFJckIsS0FBS3FCLEVBQUtwQixVQUFZb08sRUFDbkMsTUExRTBFLEdBQWtCOEgsRUFBWS9YLFVBQVdvWSxHQTZFOUcrRyxDQUNULENBeEQ0QyxDQXdEMUN4RixJQ3BGRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJNGpCLEdBQXNDLFNBQVVsRixJQWxCM0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVStJLEVBQXdCbEYsR0FFbEMsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNdUksRUFqQlN0SSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTbWtCLElBQ1AsSUFBSXJHLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTTJtQixHQUV0QixJQUFLLElBQUkvRixFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsS0FFOURBLENBQ1QsQ0FnQkEsT0F6RG9CaEIsRUEyQ1BxSCxHQTNDb0JoSCxFQTJDSSxDQUFDLENBQ3BDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosR0FDcEIsT0FBTzZCLEdBQXFCN0IsRUFDOUIsR0FDQyxDQUNEdGEsSUFBSyxNQUNMMlEsTUFBTyxTQUFhdUIsRUFBT2tMLEVBQVF6TSxHQUNqQyxNQUFPLENBQUMsSUFBSXJPLEtBQWEsSUFBUnFPLEdBQWUsQ0FDOUJzSixnQkFBZ0IsR0FFcEIsTUF0RDBFLEdBQWtCeEIsRUFBWS9YLFVBQVdvWSxHQXlEOUdnSCxDQUNULENBdENpRCxDQXNDL0N6RixJQ2hFRixTQUFTLEdBQVFuZSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUW1iLEdBQVMsSUFBSyxJQUFJaGYsRUFBSSxFQUFHQSxFQUFJZ2YsRUFBTWxmLE9BQVFFLElBQUssQ0FBRSxJQUFJaWYsRUFBYUQsRUFBTWhmLEdBQUlpZixFQUFXeFksV0FBYXdZLEVBQVd4WSxhQUFjLEVBQU93WSxFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNL1csT0FBT0MsZUFBZTNDLEVBQVFvYixFQUFXNVksSUFBSzRZLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCM1ksRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2tYLGdCQUFrQixTQUF5Qm5YLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVvWCxVQUFZalcsRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSThXLGVBQWUsNkRBQWdFLE9BQU85VyxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2tYLGVBQWlCbFgsT0FBT29ZLGVBQWlCLFNBQXlCclksR0FBSyxPQUFPQSxFQUFFb1gsV0FBYW5YLE9BQU9vWSxlQUFlclksRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU04VyxjQUFjLEVBQU1ELFVBQVUsSUFBa0IvYSxFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJNmpCLEdBQTJDLFNBQVVuRixJQWxCaEUsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUlsVixVQUFVLHNEQUF5RGlWLEVBQVNwVyxVQUFZUixPQUFPOFcsT0FBT0QsR0FBY0EsRUFBV3JXLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9tRyxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVWdKLEVBQTZCbkYsR0FFdkMsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNd0ksRUFqQlN2SSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFuWCxVQUFVb1gsUUFBUWxYLEtBQUs2VyxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPN1osR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDcWMsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCL2UsTUFBTThJLFlBQWF0RyxFQUFTOGIsUUFBUUMsVUFBVU0sRUFBTzVWLFVBQVc4VixFQUFZLE1BQVN2YyxFQUFTcWMsRUFBTW5aLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTb2tCLElBQ1AsSUFBSXRHLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJNVcsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTTRtQixHQUV0QixJQUFLLElBQUloRyxFQUFPM1gsVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNZ0osR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRXBZLEVBQUtvWSxHQUFRNVgsVUFBVTRYLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU96WSxLQUFLL0IsTUFBTXdhLEVBQVEsQ0FBQ2xnQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCNlgsR0FBUSxxQkFBc0IsS0FFOURBLENBQ1QsQ0FnQkEsT0F6RG9CaEIsRUEyQ1BzSCxHQTNDb0JqSCxFQTJDUyxDQUFDLENBQ3pDOVksSUFBSyxRQUNMMlEsTUFBTyxTQUFlMkosR0FDcEIsT0FBTzZCLEdBQXFCN0IsRUFDOUIsR0FDQyxDQUNEdGEsSUFBSyxNQUNMMlEsTUFBTyxTQUFhdUIsRUFBT2tMLEVBQVF6TSxHQUNqQyxNQUFPLENBQUMsSUFBSXJPLEtBQUtxTyxHQUFRLENBQ3ZCc0osZ0JBQWdCLEdBRXBCLE1BdEQwRSxHQUFrQnhCLEVBQVkvWCxVQUFXb1ksR0F5RDlHaUgsQ0FDVCxDQXRDc0QsQ0FzQ3BEMUYsSUNXUzJGLEdBQVUsQ0FDbkI1WSxFQUFHLElBQUl1VCxHQUNQblQsRUFBRyxJQUFJdVYsR0FDUG5WLEVBQUcsSUFBSXNWLEdBQ1BuVixFQUFHLElBQUlvVixHQUNQblYsRUFBRyxJQUFJc1YsR0FDUHJWLEVBQUcsSUFBSXNWLEdBQ1BuVixFQUFHLElBQUlvVixHQUNQblYsRUFBRyxJQUFJb1YsR0FDUG5WLEVBQUcsSUFBSW9WLEdBQ1BuVixFQUFHLElBQUlvVixHQUNQbFYsRUFBRyxJQUFJcVYsR0FDUGplLEVBQUcsSUFBSXNlLEdBQ1B4VixFQUFHLElBQUkwVixHQUNQclYsRUFBRyxJQUFJd1YsR0FDUHhnQixFQUFHLElBQUl5Z0IsR0FDUHRWLEVBQUcsSUFBSXdWLEdBQ1BobEIsRUFBRyxJQUFJaWxCLEdBQ1A5ZSxFQUFHLElBQUlnZixHQUNQemQsRUFBRyxJQUFJMGQsR0FDUHRWLEVBQUcsSUFBSXVWLEdBQ1B0VixFQUFHLElBQUl1VixHQUNQdFYsRUFBRyxJQUFJd1YsR0FDUHZWLEVBQUcsSUFBSXdWLEdBQ1BqbEIsRUFBRyxJQUFJa2xCLEdBQ1AzZixFQUFHLElBQUk0ZixHQUNQelYsRUFBRyxJQUFJMlYsR0FDUDFWLEVBQUcsSUFBSTRWLEdBQ1AzVixFQUFHLElBQUk2VixHQUNQdFYsRUFBRyxJQUFJdVYsR0FDUG5WLEVBQUcsSUFBSW9WLEdBQ1BsVixFQUFHLElBQUltVixJQzFHVCxTQUFTLEdBQVE3akIsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FFelgsU0FBUytqQixHQUEyQmhnQixFQUFHaWdCLEdBQWtCLElBQUlDLEVBQUksR0FBc0Isb0JBQVhwZSxRQUFnRCxNQUF0QjlCLEVBQUU4QixPQUFPQyxVQUFtQixDQUFFLEdBQUkrTyxNQUFNQyxRQUFRL1EsS0FBT2tnQixFQUU3SixTQUFxQ2xnQixFQUFHbWdCLEdBQVUsR0FBS25nQixFQUFMLENBQWdCLEdBQWlCLGlCQUFOQSxFQUFnQixPQUFPb2dCLEdBQWtCcGdCLEVBQUdtZ0IsR0FBUyxJQUFJemdCLEVBQUlPLE9BQU9RLFVBQVV4SCxTQUFTMEgsS0FBS1gsR0FBR3RGLE1BQU0sR0FBSSxHQUFpRSxNQUFuRCxXQUFOZ0YsR0FBa0JNLEVBQUVnQyxjQUFhdEMsRUFBSU0sRUFBRWdDLFlBQVlxZSxNQUFnQixRQUFOM2dCLEdBQXFCLFFBQU5BLEVBQW9Cb1IsTUFBTXdQLEtBQUt0Z0IsR0FBYyxjQUFOTixHQUFxQiwyQ0FBMkNqRixLQUFLaUYsR0FBVzBnQixHQUFrQnBnQixFQUFHbWdCLFFBQXpHLENBQTdPLENBQStWLENBRjdQSSxDQUE0QnZnQixLQUFPaWdCLEdBQWtCamdCLEdBQXlCLGlCQUFiQSxFQUFFeEcsT0FBcUIsQ0FBTTBtQixJQUFJbGdCLEVBQUlrZ0IsR0FBSSxJQUFJeG1CLEVBQUksRUFBTzhtQixFQUFJLFdBQWMsRUFBRyxNQUFPLENBQUU1VyxFQUFHNFcsRUFBRzlnQixFQUFHLFdBQWUsT0FBSWhHLEdBQUtzRyxFQUFFeEcsT0FBZSxDQUFFaW5CLE1BQU0sR0FBZSxDQUFFQSxNQUFNLEVBQU8vUCxNQUFPMVEsRUFBRXRHLEtBQVEsRUFBR3FFLEVBQUcsU0FBVzJpQixHQUFNLE1BQU1BLENBQUksRUFBR0MsRUFBR0gsRUFBSyxDQUFFLE1BQU0sSUFBSTVlLFVBQVUsd0lBQTBJLENBQUUsSUFBNkNnZixFQUF6Q0MsR0FBbUIsRUFBTUMsR0FBUyxFQUFZLE1BQU8sQ0FBRWxYLEVBQUcsV0FBZXNXLEVBQUtsZ0IsRUFBRThCLE9BQU9DLFdBQWEsRUFBR3JDLEVBQUcsV0FBZSxJQUFJcWhCLEVBQU9iLEVBQUdjLE9BQXNDLE9BQTlCSCxFQUFtQkUsRUFBS04sS0FBYU0sQ0FBTSxFQUFHaGpCLEVBQUcsU0FBV2tqQixHQUFPSCxHQUFTLEVBQU1GLEVBQU1LLENBQUssRUFBR04sRUFBRyxXQUFlLElBQVdFLEdBQWlDLE1BQWJYLEVBQUdnQixRQUFnQmhCLEVBQUdnQixRQUFVLENBQUUsUUFBVSxHQUFJSixFQUFRLE1BQU1GLENBQUssQ0FBRSxFQUFLLENBSTk5QixTQUFTUixHQUFrQmUsRUFBS0MsSUFBa0IsTUFBUEEsR0FBZUEsRUFBTUQsRUFBSTNuQixVQUFRNG5CLEVBQU1ELEVBQUkzbkIsUUFBUSxJQUFLLElBQUlFLEVBQUksRUFBRzJuQixFQUFPLElBQUl2USxNQUFNc1EsR0FBTTFuQixFQUFJMG5CLEVBQUsxbkIsSUFBTzJuQixFQUFLM25CLEdBQUt5bkIsRUFBSXpuQixHQUFNLE9BQU8ybkIsQ0FBTSxDQXlCdEwsSUFBSSxHQUF5Qix3REFHekIsR0FBNkIsb0NBQzdCLEdBQXNCLGVBQ3RCLEdBQW9CLE1BQ3BCQyxHQUFzQixLQUN0QixHQUFnQyxXQStTckIsU0FBU25OLEdBQU1vTixFQUFpQkMsRUFBbUJDLEVBQW9CcG5CLEdBQ3BGLElBQUkySyxFQUFNSSxFQUFpQkgsRUFBT0MsRUFBT3VOLEVBQU83TSxFQUF1QjhNLEVBQWtCQyxFQUF1QnJOLEVBQXVCQyxFQUF3QnFOLEVBQU9DLEVBQU9DLEVBQU8zTixFQUF1QjROLEVBQWtCQyxFQUF1QkMsRUFBd0JDLEVBRTVRelIsRUFBYSxFQUFHVSxXQUNoQixJQUFJa1ksRUFBYS9mLE9BQU9pbkIsR0FDcEJHLEVBQWVwbkIsT0FBT2tuQixHQUN0QjNjLEVBQWlCQyxJQUNqQlcsRUFBNEwsUUFBbExULEVBQWdHLFFBQXhGSSxFQUFrQi9LLGFBQXlDLEVBQVNBLEVBQVFvTCxjQUF3QyxJQUFwQkwsRUFBNkJBLEVBQWtCUCxFQUFlWSxjQUE2QixJQUFUVCxFQUFrQkEsRUFBT29PLEVBRWpPLElBQUszTixFQUFPZ0csTUFDVixNQUFNLElBQUkvRixXQUFXLHNDQUd2QixJQUFJRyxFQUF3QmxELEVBQXUzQixRQUE1MkJzQyxFQUE2akIsUUFBcGpCQyxFQUF1ZSxRQUE5ZHVOLEVBQXNILFFBQTdHN00sRUFBd0J2TCxhQUF5QyxFQUFTQSxFQUFRd0wsNkJBQTZELElBQTFCRCxFQUFtQ0EsRUFBd0J2TCxTQUEwRixRQUF2Q3FZLEVBQW1CclksRUFBUW9MLGNBQXlDLElBQXJCaU4sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQnJZLGVBQStDLElBQTFCc1ksT0FBL0osRUFBMk1BLEVBQXNCOU0sNkJBQTZDLElBQVY0TSxFQUFtQkEsRUFBUTVOLEVBQWVnQiw2QkFBNkMsSUFBVlgsRUFBbUJBLEVBQTRELFFBQW5ESSxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1Qk0sNkJBQTZDLElBQVZaLEVBQW1CQSxFQUFRLEdBRXQ3QixLQUFNWSxHQUF5QixHQUFLQSxHQUF5QixHQUMzRCxNQUFNLElBQUlILFdBQVcsNkRBR3ZCLElBQUlGLEVBQWU3QyxFQUFzMUIsUUFBMzBCaVEsRUFBa2lCLFFBQXpoQkMsRUFBcWQsUUFBNWNDLEVBQTZHLFFBQXBHM04sRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUEwRixRQUF2QzBZLEVBQW1CMVksRUFBUW9MLGNBQXlDLElBQXJCc04sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQjFZLGVBQStDLElBQTFCMlksT0FBL0osRUFBMk1BLEVBQXNCeE4sb0JBQW9DLElBQVZzTixFQUFtQkEsRUFBUWpPLEVBQWVXLG9CQUFvQyxJQUFWcU4sRUFBbUJBLEVBQTZELFFBQXBESSxFQUF5QnBPLEVBQWVZLGNBQStDLElBQTNCd04sR0FBMkcsUUFBN0RDLEVBQXlCRCxFQUF1QjVZLGVBQWdELElBQTNCNlksT0FBL0UsRUFBNEhBLEVBQXVCMU4sb0JBQW9DLElBQVZvTixFQUFtQkEsRUFBUSxHQUU1NEIsS0FBTXBOLEdBQWdCLEdBQUtBLEdBQWdCLEdBQ3pDLE1BQU0sSUFBSUUsV0FBVyxvREFHdkIsR0FBcUIsS0FBakJnYyxFQUNGLE1BQW1CLEtBQWZySCxFQUNLcFksRUFBT3dmLEdBRVAsSUFBSXBmLEtBQUtLLEtBSXBCLElBb0JJaWYsRUFwQkFDLEVBQWUsQ0FDakIvYixzQkFBdUJBLEVBQ3ZCTCxhQUFjQSxFQUNkQyxPQUFRQSxHQUdOb2MsRUFBVSxDQUFDLElBQUluSSxJQUNmb0ksRUFBU0osRUFBYWpXLE1BQU0sSUFBNEJ0UyxLQUFJLFNBQVVxYSxHQUN4RSxJQUFJQyxFQUFpQkQsRUFBVSxHQUUvQixPQUFJQyxLQUFrQixHQUViQyxFQURhLEVBQWVELElBQ2RELEVBQVcvTixFQUFPMEYsWUFHbENxSSxDQUNULElBQUcvWixLQUFLLElBQUlnUyxNQUFNLElBQ2RzVyxFQUFhLEdBRWJDLEVBQVloQyxHQUEyQjhCLEdBRzNDLElBQ0UsSUFBSUcsRUFBUSxXQUNWLElBQUl6YixFQUFRbWIsRUFBTWpSLE1BRVpyVyxTQUEwQ0EsRUFBUXdaLDhCQUFnQ2xILEVBQXlCbkcsSUFDL0dvRyxFQUFvQnBHLEVBQU9rYixFQUFjSCxHQUdyQ2xuQixTQUEwQ0EsRUFBUXlaLCtCQUFpQ3JILEVBQTBCakcsSUFDakhvRyxFQUFvQnBHLEVBQU9rYixFQUFjSCxHQUczQyxJQUFJOU4sRUFBaUJqTixFQUFNLEdBQ3ZCMGIsRUFBU25DLEdBQVF0TSxHQUVyQixHQUFJeU8sRUFBUSxDQUNWLElBQUlDLEVBQXFCRCxFQUFPQyxtQkFFaEMsR0FBSXJSLE1BQU1DLFFBQVFvUixHQUFxQixDQUNyQyxJQUFJQyxFQUFvQkwsRUFBV00sTUFBSyxTQUFVQyxHQUNoRCxPQUFPSCxFQUFtQkksU0FBU0QsRUFBVTliLFFBQVU4YixFQUFVOWIsUUFBVWlOLENBQzdFLElBRUEsR0FBSTJPLEVBQ0YsTUFBTSxJQUFJMWMsV0FBVyxzQ0FBc0NuTSxPQUFPNm9CLEVBQWtCSSxVQUFXLFdBQVdqcEIsT0FBT2lOLEVBQU8sc0JBRTVILE1BQU8sR0FBa0MsTUFBOUIwYixFQUFPQyxvQkFBOEJKLEVBQVd2b0IsT0FBUyxFQUNsRSxNQUFNLElBQUlrTSxXQUFXLHNDQUFzQ25NLE9BQU9pTixFQUFPLDJDQUczRXViLEVBQVdwcEIsS0FBSyxDQUNkNk4sTUFBT2lOLEVBQ1ArTyxVQUFXaGMsSUFFYixJQUFJaUwsRUFBY3lRLEVBQU9PLElBQUlwSSxFQUFZN1QsRUFBT2YsRUFBT2dHLE1BQU9tVyxHQUU5RCxJQUFLblEsRUFDSCxNQUFPLENBQ0xpUixFQUFHLElBQUlyZ0IsS0FBS0ssTUFJaEJtZixFQUFRbHBCLEtBQUs4WSxFQUFZNkksUUFDekJELEVBQWE1SSxFQUFZSCxJQUMzQixLQUFPLENBQ0wsR0FBSW1DLEVBQWVoSSxNQUFNLElBQ3ZCLE1BQU0sSUFBSS9GLFdBQVcsaUVBQW1FK04sRUFBaUIsS0FXM0csR0FQYyxPQUFWak4sRUFDRkEsRUFBUSxJQUNvQixNQUFuQmlOLElBQ1RqTixFQUEyQkEsRUFxRnRCaUYsTUFBTSxJQUFxQixHQUFHNVEsUUFBUSxHQUFtQixNQWpGOUIsSUFBOUJ3ZixFQUFXM04sUUFBUWxHLEdBR3JCLE1BQU8sQ0FDTGtjLEVBQUcsSUFBSXJnQixLQUFLSyxNQUhkMlgsRUFBYUEsRUFBVzNmLE1BQU04TCxFQUFNaE4sT0FNeEMsQ0FDRixFQUVBLElBQUt3b0IsRUFBVXBZLE1BQU8rWCxFQUFRSyxFQUFVdGlCLEtBQUsrZ0IsTUFBTyxDQUNsRCxJQUFJa0MsRUFBT1YsSUFFWCxHQUFzQixXQUFsQixHQUFRVSxHQUFvQixPQUFPQSxFQUFLRCxDQUM5QyxDQUVGLENBQUUsTUFBTzlCLEdBQ1BvQixFQUFVamtCLEVBQUU2aUIsRUFDZCxDQUFFLFFBQ0FvQixFQUFVckIsR0FDWixDQUVBLEdBQUl0RyxFQUFXN2dCLE9BQVMsR0FBSzhuQixHQUFvQjdtQixLQUFLNGYsR0FDcEQsT0FBTyxJQUFJaFksS0FBS0ssS0FHbEIsSUFBSWtnQixFQUF3QmYsRUFBUTFvQixLQUFJLFNBQVVtaEIsR0FDaEQsT0FBT0EsRUFBTzFGLFFBQ2hCLElBQUdpTyxNQUFLLFNBQVVoakIsRUFBR3VCLEdBQ25CLE9BQU9BLEVBQUl2QixDQUNiLElBQUdpakIsUUFBTyxTQUFVbE8sRUFBVTVYLEVBQU9nVSxHQUNuQyxPQUFPQSxFQUFNdEUsUUFBUWtJLEtBQWM1WCxDQUNyQyxJQUFHN0QsS0FBSSxTQUFVeWIsR0FDZixPQUFPaU4sRUFBUWlCLFFBQU8sU0FBVXhJLEdBQzlCLE9BQU9BLEVBQU8xRixXQUFhQSxDQUM3QixJQUFHaU8sTUFBSyxTQUFVaGpCLEVBQUd1QixHQUNuQixPQUFPQSxFQUFFbVksWUFBYzFaLEVBQUUwWixXQUMzQixHQUNGLElBQUdwZ0IsS0FBSSxTQUFVNHBCLEdBQ2YsT0FBT0EsRUFBWSxFQUNyQixJQUNJcmYsRUFBT3pCLEVBQU93ZixHQUVsQixHQUFJMWUsTUFBTVcsRUFBS3BCLFdBQ2IsT0FBTyxJQUFJRCxLQUFLSyxLQUlsQixJQUlJc2dCLEVBSkFsWCxFQUFVM0ksRUFBZ0JPLEVBQU1tSSxFQUFnQ25JLElBQ2hFK1YsRUFBUSxDQUFDLEVBRVR3SixFQUFhakQsR0FBMkI0QyxHQUc1QyxJQUNFLElBQUtLLEVBQVdyWixNQUFPb1osRUFBU0MsRUFBV3ZqQixLQUFLK2dCLE1BQU8sQ0FDckQsSUFBSW5HLEVBQVMwSSxFQUFPdFMsTUFFcEIsSUFBSzRKLEVBQU9DLFNBQVN6TyxFQUFTOFYsR0FDNUIsT0FBTyxJQUFJdmYsS0FBS0ssS0FHbEIsSUFBSWhILEdBQVM0ZSxFQUFPRSxJQUFJMU8sRUFBUzJOLEVBQU9tSSxHQUVwQzlRLE1BQU1DLFFBQVFyVixLQUNoQm9RLEVBQVVwUSxHQUFPLEdBQ2pCLEdBQU8rZCxFQUFPL2QsR0FBTyxLQUVyQm9RLEVBQVVwUSxFQUVkLENBQ0YsQ0FBRSxNQUFPa2xCLEdBQ1BxQyxFQUFXbGxCLEVBQUU2aUIsRUFDZixDQUFFLFFBQ0FxQyxFQUFXdEMsR0FDYixDQUVBLE9BQU83VSxDQUNULENDbmZlLFNBQVNvWCxHQUFZOWYsRUFBVy9JLEdBQzdDLElBQUkySyxFQUFNQyxFQUFPQyxFQUFPQyxFQUF1QkMsRUFBaUJDLEVBQXVCQyxFQUF1QkMsRUFFOUc5RCxFQUFhLEVBQUdVLFdBQ2hCLElBQUkwQyxFQUFpQkMsSUFDakJVLEVBQWU3QyxFQUErMEIsUUFBcDBCcUMsRUFBOGhCLFFBQXRoQkMsRUFBa2QsUUFBemNDLEVBQTZHLFFBQXBHQyxFQUF3QjlLLGFBQXlDLEVBQVNBLEVBQVFtTCxvQkFBb0QsSUFBMUJMLEVBQW1DQSxFQUF3QjlLLFNBQXlGLFFBQXRDK0ssRUFBa0IvSyxFQUFRb0wsY0FBd0MsSUFBcEJMLEdBQTRGLFFBQXJEQyxFQUF3QkQsRUFBZ0IvSyxlQUErQyxJQUExQmdMLE9BQTVKLEVBQXdNQSxFQUFzQkcsb0JBQW9DLElBQVZOLEVBQW1CQSxFQUFRTCxFQUFlVyxvQkFBb0MsSUFBVlAsRUFBbUJBLEVBQTRELFFBQW5ESyxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1QkMsb0JBQW1DLElBQVRSLEVBQWtCQSxFQUFPLEdBRW40QixLQUFNUSxHQUFnQixHQUFLQSxHQUFnQixHQUN6QyxNQUFNLElBQUlFLFdBQVcsb0RBR3ZCLElBQUloQyxFQUFPekIsRUFBT21CLEdBQ2RPLEVBQU1ELEVBQUt5ZixTQUNYdGYsR0FBUUYsRUFBTTZCLEVBQWUsRUFBSSxHQUFLN0IsRUFBTTZCLEVBR2hELE9BRkE5QixFQUFLMGYsUUFBUTFmLEVBQUt3SSxVQUFZckksR0FDOUJILEVBQUt5VyxTQUFTLEVBQUcsRUFBRyxFQUFHLEdBQ2hCelcsQ0FDVCxDQ2ZlLFNBQVMyZixHQUFXamdCLEVBQVcvSSxHQUU1QyxPQURBb0gsRUFBYSxFQUFHVSxXQ0dILFNBQW9CbWhCLEVBQWVDLEVBQWdCbHBCLEdBQ2hFb0gsRUFBYSxFQUFHVSxXQUNoQixJQUFJcWhCLEVBQXNCTixHQUFZSSxFQUFlanBCLEdBQ2pEb3BCLEVBQXVCUCxHQUFZSyxFQUFnQmxwQixHQUN2RCxPQUFPbXBCLEVBQW9CbGhCLFlBQWNtaEIsRUFBcUJuaEIsU0FDaEUsQ0RQU29oQixDQUFXdGdCLEVBQVdmLEtBQUttUyxNQUFPbmEsRUFDM0MsQ0VoQ0EsTUF5REEsR0F4RHlCLENBQUM0YSxFQUFVQyxLQUNoQyxNQUFNQyxFQUFXMVgsU0FBU1csY0FBYyxPQUN4QytXLEVBQVMxVyxhQUFhLEtBQU0sbUJBRTVCLE1BQU0yVyxFQUFlM1gsU0FBU1csY0FBYyxNQUs1QyxHQUpBZ1gsRUFBYUMsWUFBYyxRQUUzQkYsRUFBU2pYLFlBQVlrWCxHQUVSLE1BQVRGLEVBQ0YsSUFBSyxJQUFJeGIsRUFBSSxFQUFHQSxFQUFJd2IsRUFBTTFiLE9BQVFFLElBSWhDLEdBQUkycEIsR0FGWWxQLEdBQU1lLEVBQU14YixHQUFHaWIsUUFBUyxhQUFjLElBQUl0UyxPQUVqQyxDQUN2QixNQUFNaVQsRUFBVTdYLFNBQVNXLGNBQWMsT0FDdkNrWCxFQUFRN1csYUFBYSxRQUFTLFlBRTlCLE1BQU04VyxFQUFNOVgsU0FBU1csY0FBYyxVQUNuQ21YLEVBQUk5VyxhQUFhLFFBQVMsY0FDMUI4VyxFQUFJOVcsYUFBYSxVQUFXeVcsRUFBTXhiLEdBQUc2YSxNQUVyQyxNQUFNaUIsRUFBYy9YLFNBQVNXLGNBQWMsS0FDM0NvWCxFQUFZSCxZQUFjSCxFQUFNeGIsR0FBRythLE1BRW5DLE1BQU1nQixFQUFjaFksU0FBU1csY0FBYyxLQUMzQ3FYLEVBQVlKLFlBQWNILEVBQU14YixHQUFHaWIsUUFFbkNXLEVBQVFwWCxZQUFZcVgsR0FDcEJELEVBQVFwWCxZQUFZc1gsR0FDcEJGLEVBQVFwWCxZQUFZdVgsR0FFcEJOLEVBQVNqWCxZQUFZb1gsRUFDdkIsQ0FJSixPQUFPSCxFQUFTYSxTQUFTLEVDK0M3QixHQW5GZ0IsTUFDZCxNQUFNMk4sRUFBZWxtQixTQUFTQyxjQUFjLGtCQUV0Q2ttQixFQUFlLEtBQ25CRCxFQUFhRSxVQUFZLEdBQ3ZCLGtCQUNBLGdCQUVGLElBQW9CLEVBR2hCQyxFQUFlLEtBQ25CSCxFQUFhRSxVQUFZLEdBQ3ZCLGtCQUNBLGdCQUVGLElBQW9CLEVBR2hCRSxFQUFrQixLQUN0QkosRUFBYUUsVUFBWSxHQUN2QixrQkFDQSxnQkFFRixJQUFvQixFQW9EdEIsTUFBTyxDQUNMRyxLQU5XLEtBQ1hKLElBckJtQixNQUNuQixNQUFNSyxFQUFVeG1CLFNBQVNDLGNBQWMsVUFDakN3bUIsRUFBVXptQixTQUFTQyxjQUFjLFVBQ2pDeW1CLEVBQWExbUIsU0FBU0MsY0FBYyxjQUUxQ3VtQixFQUFRM04saUJBQWlCLFNBQVMsS0FDaENzTixHQUFjLElBSWhCTSxFQUFRNU4saUJBQWlCLFNBQVMsS0FDaEN3TixHQUFjLElBR2hCSyxFQUFXN04saUJBQWlCLFNBQVMsS0FDbkN5TixHQUFpQixHQUNqQixFQU1GSyxFQUFjLEVBS2RDLFlBbkRrQixLQUNsQkMsTUFBTSxVQUFVLEVBbURoQkMsZUFoRHNCMVAsSUFDdEIsT0FBUUEsR0FDTixJQUFLLFVBWUwsUUFDRStPLElBQ0EsTUFWRixJQUFLLFFBQ0hFLElBQ0EsTUFFRixJQUFLLFlBQ0hDLElBTUosRUFpQ0gsRUFqRmUsR0NMaEIsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9TZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9FcmFQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9RdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL01vbnRoUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3NldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbERheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPRGF5UGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zZXRVVENJU09EYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxdG8xMlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMHRvMjNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxVG8yNFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9NaW51dGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvU2Vjb25kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVXaXRoWlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9JU09UaW1lem9uZVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luYm94LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXItbW9udGguc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWEzZmY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQtc2VjdGlvbiB7XFxuICBmbGV4OiAxODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZWJmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEuODtcXG59XFxuXFxuI2xlZnQtY29udGVudCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5saSNpbmJveCxcXG5saSN0b2RheSxcXG5saSN0aGlzLXdlZWssXFxuI2FkZC1wcm9qZWN0LFxcbiNhZGQtdGFzay1oNCxcXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG5saSNpbmJveDpob3ZlcixcXG5saSN0b2RheTpob3ZlcixcXG5saSN0aGlzLXdlZWs6aG92ZXIsXFxuI2FkZC1wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGkjaW5ib3gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxubGkjdG9kYXkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxubGkjdGhpcy13ZWVrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQgaDMge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCB7XFxuICBmbGV4OiA3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjJmZjtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgI3JpZ2h0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNyaWdodC1jb250ZW50IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1kaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jaXJjbGUtYnRuIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjJmZjtcXG59XFxuXFxuLmNpcmNsZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2FkZC10YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stZGl2IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2staDQge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuLFxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWNiN2U7XFxuICBib3JkZXItY29sb3I6ICM4MWNiN2U7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxYWQ5ZTtcXG4gIGJvcmRlci1jb2xvcjogI2QxYWQ5ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztFQUtFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBNEM7QUFDOUM7O0FBRUE7RUFDRSx5REFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx5REFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQTJEO0FBQzdEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlEQUEyQztBQUM3Qzs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIseURBQTJDO0VBQzNDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybCguLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhM2ZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcblxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LXNlY3Rpb24ge1xcbiAgZmxleDogMTg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ViZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxLjg7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxubGkjaW5ib3gsXFxubGkjdG9kYXksXFxubGkjdGhpcy13ZWVrLFxcbiNhZGQtcHJvamVjdCxcXG4jYWRkLXRhc2staDQsXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuXFxubGkjaW5ib3g6aG92ZXIsXFxubGkjdG9kYXk6aG92ZXIsXFxubGkjdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpI2luYm94IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2luYm94LnN2Z1xcXCIpO1xcbn1cXG5cXG5saSN0b2RheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcXFwiKTtcXG59XFxuXFxubGkjdGhpcy13ZWVrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2NhbGVuZGFyLW1vbnRoLnN2Z1xcXCIpO1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IGgzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZm9ybWF0LWxpc3QtYnVsbGV0ZWQuc3ZnXFxcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXFxcIik7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHtcXG4gIGZsZXg6IDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCAjcmlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbiNhZGQtdGFzay1kaXYgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1oNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXFxcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1idG4sXFxuI2NhbmNlbC10YXNrLWJ0biB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMS42cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxY2I3ZTtcXG4gIGJvcmRlci1jb2xvcjogIzgxY2I3ZTtcXG59XFxuXFxuI2NhbmNlbC10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFhZDllO1xcbiAgYm9yZGVyLWNvbG9yOiAjZDFhZDllO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2dpdGh1Yi5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LWJvZHktc3R5bGUgKi9cblxuY29uc3QgVGFzayA9IChpZE5vLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gIHJldHVybiB7IGlkTm8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gIC8vIGNvcHkgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSB0byB0aGUgdmFyaWFibGVzIGlmIHRoZXkgZXhpc3RcbiAgbGV0IHByb2plY3RTdG9yYWdlID0gW107XG4gIGxldCB0YXNrU3RvcmFnZSA9IFtdO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIpICE9PSBudWxsKSB7XG4gICAgcHJvamVjdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIikpO1xuICB9XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza1N0b3JhZ2VcIikgIT09IG51bGwpIHtcbiAgICB0YXNrU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrU3RvcmFnZVwiKSk7XG4gIH1cblxuICAvLyBjb3B5IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSB2YXJpYWJsZXMgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza1N0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkodGFza1N0b3JhZ2UpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RTdG9yYWdlKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWRObywgcHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1N0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrU3RvcmFnZVtpXS5pZE5vID09IHRhc2tJZE5vKSB7XG4gICAgICAgIHRhc2tTdG9yYWdlLnNwbGljZShpLCAxKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGRpc3BsYXkucmVmcmVzaENvbnRlbnQocHJvamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRlc3RJdGVtID0gVGFzayhcbiAgICBEYXRlLm5vdygpLFxuICAgIFwiNCB0ZXN0IHRpdGxlXCIsXG4gICAgXCI0IHRlc3QgZGVzY3JpcHRpb25cIixcbiAgICBmb3JtYXQobmV3IERhdGUoKSwgXCJNTS9kZC95eXl5XCIpLFxuICAgIFwiNCB0ZXN0IHByaW9yaXR5XCIsXG4gICAgXCJkZWZhdWx0XCJcbiAgKTtcbiAgY29uc29sZS5sb2codGVzdEl0ZW0pO1xuXG4gIHRhc2tTdG9yYWdlLnB1c2godGVzdEl0ZW0pO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RTdG9yYWdlLFxuICAgIHRhc2tTdG9yYWdlLFxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbiAgICBkZWxldGVUYXNrLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgaW5ib3ggPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza3NbaV0uaWRObyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWRpdlwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgYWRkVGFza0g0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBhZGRUYXNrSDQuc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtdGFzay1oNCcpO1xuXG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWJ0blwiKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtdGFzay1idG5cIik7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIFxuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0lucHV0KTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgICBpbmJveERpdi5hcHBlbmRDaGlsZChhZGRUYXNrSDQpO1xuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG4gICAgcmV0dXJuIGluYm94RGl2Lm91dGVySFRNTDtcbiAgfTtcblxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2lyY2xlLWJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrSDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2staDQnKTtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWRpdicpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2stYnRuJyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGRlbGV0ZSB0YXNrXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVGFzayhkYXRhSWQsIFwiZGVmYXVsdFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAvLyBsaXN0ZW5lciB0byB0b2dnbGUgdGhlIGRpc3BsYXkgb2YgYWRkIHRhc2sgZWxlbWVudHNcbiAgICBhZGRUYXNrSDQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza0g0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGFkZFRhc2tINC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcbiAgICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluYm94O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHRvZGF5ID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAocHJvamVjdHMsIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG5cbiAgICBpZiAodGFza3MgIT0gbnVsbCkge1xuICAgICAgY29uc3QgZGF0ZU5vdyA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcIk1NL2RkL3l5eXlcIik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29tcGFyZSBkYXRlIGFuZCBjaGVjayBpZiBkdWVEYXRlIGlzIGVxdWFsIHRvIHRvZGF5XG4gICAgICAgIGlmICh0YXNrc1tpXS5kdWVEYXRlID09IGRhdGVOb3cpIHtcbiAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNpcmNsZS1idG5cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza3NbaV0uaWRObyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gdGFza3NbaV0udGl0bGU7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZHVlRGF0ZTtcblxuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAgICAgICAgIGluYm94RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluYm94RGl2Lm91dGVySFRNTDtcbiAgfTtcblxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2lyY2xlLWJ0blwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgZGVsZXRlIHRhc2tcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUYXNrKGRhdGFJZCwgXCJ0b2RheVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBUSU1FWk9ORV9VTklUX1BSSU9SSVRZID0gMTA7XG5leHBvcnQgdmFyIFNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNldHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2V0dGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN1YlByaW9yaXR5XCIsIDApO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNldHRlciwgW3tcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX3V0Y0RhdGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2V0dGVyO1xufSgpO1xuZXhwb3J0IHZhciBWYWx1ZVNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NldHRlcikge1xuICBfaW5oZXJpdHMoVmFsdWVTZXR0ZXIsIF9TZXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVmFsdWVTZXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIFZhbHVlU2V0dGVyKHZhbHVlLCB2YWxpZGF0ZVZhbHVlLCBzZXRWYWx1ZSwgcHJpb3JpdHksIHN1YlByaW9yaXR5KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlU2V0dGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBfdGhpcy52YWxpZGF0ZVZhbHVlID0gdmFsaWRhdGVWYWx1ZTtcbiAgICBfdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIF90aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIF90aGlzLnN1YlByaW9yaXR5ID0gc3ViUHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZhbHVlU2V0dGVyLCBbe1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZSh1dGNEYXRlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVZhbHVlKHV0Y0RhdGUsIHRoaXMudmFsdWUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KHV0Y0RhdGUsIGZsYWdzLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh1dGNEYXRlLCBmbGFncywgdGhpcy52YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZhbHVlU2V0dGVyO1xufShTZXR0ZXIpO1xuZXhwb3J0IHZhciBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NldHRlcjIpIHtcbiAgX2luaGVyaXRzKERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyLCBfU2V0dGVyMik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzMiA9IF9zdXBlcjIuY2FsbC5hcHBseShfc3VwZXIyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwicHJpb3JpdHlcIiwgVElNRVpPTkVfVU5JVF9QUklPUklUWSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInN1YlByaW9yaXR5XCIsIC0xKTtcblxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIsIFt7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MpIHtcbiAgICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnZlcnRlZERhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICAgIGNvbnZlcnRlZERhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgIGNvbnZlcnRlZERhdGUuc2V0SG91cnMoZGF0ZS5nZXRVVENIb3VycygpLCBkYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGF0ZS5nZXRVVENTZWNvbmRzKCksIGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgICAgcmV0dXJuIGNvbnZlcnRlZERhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyO1xufShTZXR0ZXIpOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgVmFsdWVTZXR0ZXIgfSBmcm9tIFwiLi9TZXR0ZXIuanNcIjtcbmV4cG9ydCB2YXIgUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJzZXIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhcnNlciwgW3tcbiAgICBrZXk6IFwicnVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLnBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXR0ZXI6IG5ldyBWYWx1ZVNldHRlcihyZXN1bHQudmFsdWUsIHRoaXMudmFsaWRhdGUsIHRoaXMuc2V0LCB0aGlzLnByaW9yaXR5LCB0aGlzLnN1YlByaW9yaXR5KSxcbiAgICAgICAgcmVzdDogcmVzdWx0LnJlc3RcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF91dGNEYXRlLCBfdmFsdWUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFyc2VyO1xufSgpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5leHBvcnQgdmFyIEVyYVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRXJhUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEVyYVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRXJhUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcmFQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxNDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1InLCAndScsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXJhUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gQUQsIEJDXG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICBjYXNlICdHRyc6XG4gICAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gQSwgQlxuXG4gICAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBmbGFncywgdmFsdWUpIHtcbiAgICAgIGZsYWdzLmVyYSA9IHZhbHVlO1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVyYVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJleHBvcnQgdmFyIG51bWVyaWNQYXR0ZXJucyA9IHtcbiAgbW9udGg6IC9eKDFbMC0yXXwwP1xcZCkvLFxuICAvLyAwIHRvIDEyXG4gIGRhdGU6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLyxcbiAgLy8gMCB0byAzMVxuICBkYXlPZlllYXI6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLyxcbiAgLy8gMCB0byAzNjZcbiAgd2VlazogL14oNVswLTNdfFswLTRdP1xcZCkvLFxuICAvLyAwIHRvIDUzXG4gIGhvdXIyM2g6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLyxcbiAgLy8gMCB0byAyM1xuICBob3VyMjRoOiAvXigyWzAtNF18WzAtMV0/XFxkKS8sXG4gIC8vIDAgdG8gMjRcbiAgaG91cjExaDogL14oMVswLTFdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTFcbiAgaG91cjEyaDogL14oMVswLTJdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTJcbiAgbWludXRlOiAvXlswLTVdP1xcZC8sXG4gIC8vIDAgdG8gNTlcbiAgc2Vjb25kOiAvXlswLTVdP1xcZC8sXG4gIC8vIDAgdG8gNTlcbiAgc2luZ2xlRGlnaXQ6IC9eXFxkLyxcbiAgLy8gMCB0byA5XG4gIHR3b0RpZ2l0czogL15cXGR7MSwyfS8sXG4gIC8vIDAgdG8gOTlcbiAgdGhyZWVEaWdpdHM6IC9eXFxkezEsM30vLFxuICAvLyAwIHRvIDk5OVxuICBmb3VyRGlnaXRzOiAvXlxcZHsxLDR9LyxcbiAgLy8gMCB0byA5OTk5XG4gIGFueURpZ2l0c1NpZ25lZDogL14tP1xcZCsvLFxuICBzaW5nbGVEaWdpdFNpZ25lZDogL14tP1xcZC8sXG4gIC8vIDAgdG8gOSwgLTAgdG8gLTlcbiAgdHdvRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsMn0vLFxuICAvLyAwIHRvIDk5LCAtMCB0byAtOTlcbiAgdGhyZWVEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSwzfS8sXG4gIC8vIDAgdG8gOTk5LCAtMCB0byAtOTk5XG4gIGZvdXJEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSw0fS8gLy8gMCB0byA5OTk5LCAtMCB0byAtOTk5OVxuXG59O1xuZXhwb3J0IHZhciB0aW1lem9uZVBhdHRlcm5zID0ge1xuICBiYXNpY09wdGlvbmFsTWludXRlczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pP3xaLyxcbiAgYmFzaWM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KXxaLyxcbiAgYmFzaWNPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KSgoXFxkezJ9KSk/fFovLFxuICBleHRlbmRlZDogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KXxaLyxcbiAgZXh0ZW5kZWRPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSkoOihcXGR7Mn0pKT98Wi9cbn07IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUsIG1pbGxpc2Vjb25kc0luU2Vjb25kIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gbWFwVmFsdWUocGFyc2VGblJlc3VsdCwgbWFwRm4pIHtcbiAgaWYgKCFwYXJzZUZuUmVzdWx0KSB7XG4gICAgcmV0dXJuIHBhcnNlRm5SZXN1bHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBtYXBGbihwYXJzZUZuUmVzdWx0LnZhbHVlKSxcbiAgICByZXN0OiBwYXJzZUZuUmVzdWx0LnJlc3RcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBwYXJzZUludChtYXRjaFJlc3VsdFswXSwgMTApLFxuICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UobWF0Y2hSZXN1bHRbMF0ubGVuZ3RoKVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gSW5wdXQgaXMgJ1onXG5cblxuICBpZiAobWF0Y2hSZXN1bHRbMF0gPT09ICdaJykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UoMSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNpZ24gPSBtYXRjaFJlc3VsdFsxXSA9PT0gJysnID8gMSA6IC0xO1xuICB2YXIgaG91cnMgPSBtYXRjaFJlc3VsdFsyXSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCkgOiAwO1xuICB2YXIgbWludXRlcyA9IG1hdGNoUmVzdWx0WzNdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKSA6IDA7XG4gIHZhciBzZWNvbmRzID0gbWF0Y2hSZXN1bHRbNV0gPyBwYXJzZUludChtYXRjaFJlc3VsdFs1XSwgMTApIDogMDtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiBtaWxsaXNlY29uZHNJblNlY29uZCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZykge1xuICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuYW55RGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHMobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoJ15cXFxcZHsxLCcgKyBuICsgJ30nKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHNTaWduZWQobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXRTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoJ14tP1xcXFxkezEsJyArIG4gKyAnfScpLCBkYXRlU3RyaW5nKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRheVBlcmlvZEVudW1Ub0hvdXJzKGRheVBlcmlvZCkge1xuICBzd2l0Y2ggKGRheVBlcmlvZCkge1xuICAgIGNhc2UgJ21vcm5pbmcnOlxuICAgICAgcmV0dXJuIDQ7XG5cbiAgICBjYXNlICdldmVuaW5nJzpcbiAgICAgIHJldHVybiAxNztcblxuICAgIGNhc2UgJ3BtJzpcbiAgICBjYXNlICdub29uJzpcbiAgICBjYXNlICdhZnRlcm5vb24nOlxuICAgICAgcmV0dXJuIDEyO1xuXG4gICAgY2FzZSAnYW0nOlxuICAgIGNhc2UgJ21pZG5pZ2h0JzpcbiAgICBjYXNlICduaWdodCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHR3b0RpZ2l0WWVhciwgY3VycmVudFllYXIpIHtcbiAgdmFyIGlzQ29tbW9uRXJhID0gY3VycmVudFllYXIgPiAwOyAvLyBBYnNvbHV0ZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgeWVhcjpcbiAgLy8gMSAtPiAxIEFDXG4gIC8vIDAgLT4gMSBCQ1xuICAvLyAtMSAtPiAyIEJDXG5cbiAgdmFyIGFic0N1cnJlbnRZZWFyID0gaXNDb21tb25FcmEgPyBjdXJyZW50WWVhciA6IDEgLSBjdXJyZW50WWVhcjtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAoYWJzQ3VycmVudFllYXIgPD0gNTApIHtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgfHwgMTAwO1xuICB9IGVsc2Uge1xuICAgIHZhciByYW5nZUVuZCA9IGFic0N1cnJlbnRZZWFyICsgNTA7XG4gICAgdmFyIHJhbmdlRW5kQ2VudHVyeSA9IE1hdGguZmxvb3IocmFuZ2VFbmQgLyAxMDApICogMTAwO1xuICAgIHZhciBpc1ByZXZpb3VzQ2VudHVyeSA9IHR3b0RpZ2l0WWVhciA+PSByYW5nZUVuZCAlIDEwMDtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgKyByYW5nZUVuZENlbnR1cnkgLSAoaXNQcmV2aW91c0NlbnR1cnkgPyAxMDAgOiAwKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbW1vbkVyYSA/IHJlc3VsdCA6IDEgLSByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG4vLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zXG4vLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4vLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4vLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4vLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4vLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4vLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4vLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5leHBvcnQgdmFyIFllYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3UnLCAndycsICdJJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh5ZWFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09ICd5eSdcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG5cbiAgICAgICAgY2FzZSAneW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gICAgICBpZiAodmFsdWUuaXNUd29EaWdpdFllYXIpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRUd29EaWdpdFllYXIgPSBub3JtYWxpemVUd29EaWdpdFllYXIodmFsdWUueWVhciwgY3VycmVudFllYXIpO1xuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsIDAsIDEpO1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHllYXIgPSAhKCdlcmEnIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgbWFwVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG4vLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG5leHBvcnQgdmFyIExvY2FsV2Vla1llYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsV2Vla1llYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTG9jYWxXZWVrWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxXZWVrWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxXZWVrWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdSJywgJ3UnLCAnUScsICdxJywgJ00nLCAnTCcsICdJJywgJ2QnLCAnRCcsICdpJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbFdlZWtZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh5ZWFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09ICdZWSdcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnWSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG5cbiAgICAgICAgY2FzZSAnWW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih2YWx1ZS55ZWFyLCBjdXJyZW50WWVhcik7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIobm9ybWFsaXplZFR3b0RpZ2l0WWVhciwgMCwgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB5ZWFyID0gISgnZXJhJyBpbiBmbGFncykgfHwgZmxhZ3MuZXJhID09PSAxID8gdmFsdWUueWVhciA6IDEgLSB2YWx1ZS55ZWFyO1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbFdlZWtZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuXG5leHBvcnQgdmFyIElTT1dlZWtZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09XZWVrWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09XZWVrWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSVNPV2Vla1llYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1dlZWtZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydHJywgJ3knLCAnWScsICd1JywgJ1EnLCAncScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09XZWVrWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbiA9PT0gJ1InKSB7XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQoNCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChfZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgdmFyIGZpcnN0V2Vla09mWWVhciA9IG5ldyBEYXRlKDApO1xuICAgICAgZmlyc3RXZWVrT2ZZZWFyLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICAgIGZpcnN0V2Vla09mWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzdGFydE9mVVRDSVNPV2VlayhmaXJzdFdlZWtPZlllYXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09XZWVrWWVhclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEV4dGVuZGVkWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRXh0ZW5kZWRZZWFyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEV4dGVuZGVkWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRXh0ZW5kZWRZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRlZFllYXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0cnLCAneScsICdZJywgJ1InLCAndycsICdJJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHRlbmRlZFllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBpZiAodG9rZW4gPT09ICd1Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV4dGVuZGVkWWVhclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFF1YXJ0ZXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFF1YXJ0ZXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUXVhcnRlclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gUXVhcnRlclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVhcnRlclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEyMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnTScsICdMJywgJ3cnLCAnSScsICdkJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFF1YXJ0ZXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICBjYXNlICdRUSc6XG4gICAgICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgICBjYXNlICdRUVEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUXVhcnRlclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lUXVhcnRlclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lUXVhcnRlclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTIwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAnUScsICdNJywgJ0wnLCAndycsICdJJywgJ2QnLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICBjYXNlICdxcSc6XG4gICAgICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgICBjYXNlICdxcXEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmV4cG9ydCB2YXIgTW9udGhQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKE1vbnRoUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1vbnRoUGFyc2VyKTtcblxuICBmdW5jdGlvbiBNb250aFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9udGhQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ0wnLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDExMCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9udGhQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAtIDE7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1vbnRoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgICBjYXNlICdNTU0nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9udGhQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cywgbWFwVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU3RhbmRBbG9uZU1vbnRoUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lTW9udGhQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RhbmRBbG9uZU1vbnRoUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lTW9udGhQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVNb250aFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDExMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnUScsICdNJywgJ3cnLCAnSScsICdEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lTW9udGhQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAtIDE7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1vbnRoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgICBjYXNlICdMTEwnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZU1vbnRoUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiOyAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcblxuZXhwb3J0IHZhciBMb2NhbFdlZWtQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsV2Vla1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihMb2NhbFdlZWtQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsV2Vla1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxXZWVrUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ2knLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsV2Vla1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd3byc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNTM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENXZWVrKHNldFVUQ1dlZWsoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxXZWVrUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlXZWVrLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgd2VlayA9IHRvSW50ZWdlcihkaXJ0eVdlZWspO1xuICB2YXIgZGlmZiA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykgLSB3ZWVrO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBJU08gd2VlayBvZiB5ZWFyXG5cbmV4cG9ydCB2YXIgSVNPV2Vla1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPV2Vla1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09XZWVrUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09XZWVrUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09XZWVrUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1knLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ3cnLCAnZCcsICdEJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPV2Vla1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0knOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdJbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNTM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENJU09XZWVrKHNldFVUQ0lTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPV2Vla1BhcnNlcjtcbn0oUGFyc2VyKTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VVRDSVNPV2VlayhkaXJ0eURhdGUsIGRpcnR5SVNPV2Vlaykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGlzb1dlZWsgPSB0b0ludGVnZXIoZGlydHlJU09XZWVrKTtcbiAgdmFyIGRpZmYgPSBnZXRVVENJU09XZWVrKGRhdGUpIC0gaXNvV2VlaztcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZiAqIDcpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgaXNMZWFwWWVhckluZGV4LCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbnZhciBEQVlTX0lOX01PTlRIID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xudmFyIERBWVNfSU5fTU9OVEhfTEVBUF9ZRUFSID0gWzMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdOyAvLyBEYXkgb2YgdGhlIG1vbnRoXG5cbmV4cG9ydCB2YXIgRGF0ZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF0ZVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXRlUGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXRlUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN1YlByaW9yaXR5XCIsIDEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZGF0ZSwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnZG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICB2YXIgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgICAgaWYgKGlzTGVhcFllYXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USFttb250aF07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENEYXRlKHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzLCBpc0xlYXBZZWFySW5kZXggfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRGF5T2ZZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXlPZlllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF5T2ZZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXlPZlllYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERheU9mWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdWJwcmlvcml0eVwiLCAxKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ00nLCAnTCcsICd3JywgJ0knLCAnZCcsICdFJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlPZlllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgY2FzZSAnREQnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXlPZlllYXIsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0RvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgdmFyIGlzTGVhcFllYXIgPSBpc0xlYXBZZWFySW5kZXgoeWVhcik7XG5cbiAgICAgIGlmIChpc0xlYXBZZWFyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDM2NjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDM2NTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKDAsIHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5T2ZZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENEYXkoZGlydHlEYXRlLCBkaXJ0eURheSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IHRvSW50ZWdlcihkaXJ0eURheSk7XG4gIHZhciBjdXJyZW50RGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIHJlbWFpbmRlciA9IGRheSAlIDc7XG4gIHZhciBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG4gIHZhciBkaWZmID0gKGRheUluZGV4IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gY3VycmVudERheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgc2V0VVRDRGF5IGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0RheS9pbmRleC5qc1wiOyAvLyBEYXkgb2Ygd2Vla1xuXG5leHBvcnQgdmFyIERheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERheVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF5UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gVHVlXG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICBjYXNlICdFRSc6XG4gICAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIExvY2FsIGRheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgTG9jYWxEYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKExvY2FsRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBMb2NhbERheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxEYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdSJywgJ3UnLCAncScsICdRJywgJ00nLCAnTCcsICdJJywgJ2QnLCAnRCcsICdFJywgJ2knLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHZhciB3aG9sZVdlZWtEYXlzID0gTWF0aC5mbG9vcigodmFsdWUgLSAxKSAvIDcpICogNztcbiAgICAgICAgcmV0dXJuICh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3ICsgd2hvbGVXZWVrRGF5cztcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gM1xuICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgY2FzZSAnZWUnOlxuICAgICAgICAgIC8vIDAzXG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gM3JkXG5cbiAgICAgICAgY2FzZSAnZW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVcblxuICAgICAgICBjYXNlICdlZWUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgICBjYXNlICdlZWVlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlID0gc2V0VVRDRGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ0UnLCAnaScsICdlJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHZhciB3aG9sZVdlZWtEYXlzID0gTWF0aC5mbG9vcigodmFsdWUgLSAxKSAvIDcpICogNztcbiAgICAgICAgcmV0dXJuICh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3ICsgd2hvbGVXZWVrRGF5cztcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gM1xuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgY2FzZSAnY2MnOlxuICAgICAgICAgIC8vIDAzXG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gM3JkXG5cbiAgICAgICAgY2FzZSAnY28nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVcblxuICAgICAgICBjYXNlICdjY2MnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgICBjYXNlICdjY2NjJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlID0gc2V0VVRDRGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgc2V0VVRDSVNPRGF5IGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0lTT0RheS9pbmRleC5qc1wiOyAvLyBJU08gZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBJU09EYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT0RheVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09EYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT0RheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPRGF5UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnWScsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnRScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT0RheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDJcbiAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgICAvLyAwMlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMm5kXG5cbiAgICAgICAgY2FzZSAnaW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1XG5cbiAgICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlID0gc2V0VVRDSVNPRGF5KGRhdGUsIHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPRGF5UGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ0lTT0RheShkaXJ0eURhdGUsIGRpcnR5RGF5KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF5ID0gdG9JbnRlZ2VyKGRpcnR5RGF5KTtcblxuICBpZiAoZGF5ICUgNyA9PT0gMCkge1xuICAgIGRheSA9IGRheSAtIDc7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGN1cnJlbnREYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEFNUE1QYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEFNUE1QYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQU1QTVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gQU1QTVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQU1QTVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDgwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydiJywgJ0InLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBTVBNUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKGRheVBlcmlvZEVudW1Ub0hvdXJzKHZhbHVlKSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQU1QTVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgQU1QTU1pZG5pZ2h0UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhBTVBNTWlkbmlnaHRQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQU1QTU1pZG5pZ2h0UGFyc2VyKTtcblxuICBmdW5jdGlvbiBBTVBNTWlkbmlnaHRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFNUE1NaWRuaWdodFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDgwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydhJywgJ0InLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBTVBNTWlkbmlnaHRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgY2FzZSAnYmInOlxuICAgICAgICBjYXNlICdiYmInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYmJiYic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBTVBNTWlkbmlnaHRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7IC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcblxuZXhwb3J0IHZhciBEYXlQZXJpb2RQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKERheVBlcmlvZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXlQZXJpb2RQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERheVBlcmlvZFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF5UGVyaW9kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF5UGVyaW9kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgIGNhc2UgJ0JCJzpcbiAgICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKGRheVBlcmlvZEVudW1Ub0hvdXJzKHZhbHVlKSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5UGVyaW9kUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjF0bzEyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMXRvMTJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjF0bzEyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMXRvMTJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIxdG8xMlBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydIJywgJ0snLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjF0bzEyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMmgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ2hvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAxMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaXNQTSA9IGRhdGUuZ2V0VVRDSG91cnMoKSA+PSAxMjtcblxuICAgICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlICsgMTIsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIGlmICghaXNQTSAmJiB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjF0bzEyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjB0bzIzUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMHRvMjNQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjB0bzIzUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMHRvMjNQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIwdG8yM1BhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydhJywgJ2InLCAnaCcsICdLJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhvdXIwdG8yM1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5ob3VyMjNoLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdIbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjB0bzIzUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjBUbzExUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMFRvMTFQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjBUbzExUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMFRvMTFQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIwVG8xMVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydoJywgJ0gnLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjBUbzExUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0tvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaXNQTSA9IGRhdGUuZ2V0VVRDSG91cnMoKSA+PSAxMjtcblxuICAgICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlICsgMTIsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMFRvMTFQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMVRvMjRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIxVG8yNFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMVRvMjRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIxVG8yNFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjFUbzI0UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICdoJywgJ0gnLCAnSycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjFUbzI0UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyNGgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ2tvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAyNDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaG91cnMgPSB2YWx1ZSA8PSAyNCA/IHZhbHVlICUgMjQgOiB2YWx1ZTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoaG91cnMsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhvdXIxVG8yNFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIE1pbnV0ZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTWludXRlUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1pbnV0ZVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gTWludXRlUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW51dGVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA2MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbnV0ZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5taW51dGUsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ21vJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDU5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWludXRlUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU2Vjb25kUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTZWNvbmRQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2Vjb25kUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTZWNvbmRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlY29uZFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDUwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2Vjb25kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNlY29uZCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnc28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHZhbHVlLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWNvbmRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRnJhY3Rpb25PZlNlY29uZFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRnJhY3Rpb25PZlNlY29uZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKTtcblxuICBmdW5jdGlvbiBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGcmFjdGlvbk9mU2Vjb25kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTWlsbGlzZWNvbmRzKHZhbHVlKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyB0aW1lem9uZVBhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lem9uZVBhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjsgLy8gVGltZXpvbmUgKElTTy04NjAxLiArMDA6MDAgaXMgYCdaJ2ApXG5cbmV4cG9ydCB2YXIgSVNPVGltZXpvbmVXaXRoWlBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPVGltZXpvbmVXaXRoWlBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09UaW1lem9uZVdpdGhaUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09UaW1lem9uZVdpdGhaUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09UaW1lem9uZVdpdGhaUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCcsICd4J10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT1RpbWV6b25lV2l0aFpQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxNaW51dGVzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdYWFhYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSB2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1RpbWV6b25lV2l0aFpQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiOyAvLyBUaW1lem9uZSAoSVNPLTg2MDEpXG5cbmV4cG9ydCB2YXIgSVNPVGltZXpvbmVQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT1RpbWV6b25lUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1RpbWV6b25lUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09UaW1lem9uZVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPVGltZXpvbmVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJywgJ1gnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPVGltZXpvbmVQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxNaW51dGVzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd4eHh4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSB2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1RpbWV6b25lUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhUaW1lc3RhbXBTZWNvbmRzUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRpbWVzdGFtcFNlY29uZHNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA0MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsICcqJyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGltZXN0YW1wU2Vjb25kc1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZykge1xuICAgICAgcmV0dXJuIHBhcnNlQW55RGlnaXRzU2lnbmVkKGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gW25ldyBEYXRlKHZhbHVlICogMTAwMCksIHtcbiAgICAgICAgdGltZXN0YW1wSXNTZXQ6IHRydWVcbiAgICAgIH1dO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMjApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCAnKicpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZykge1xuICAgICAgcmV0dXJuIHBhcnNlQW55RGlnaXRzU2lnbmVkKGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gW25ldyBEYXRlKHZhbHVlKSwge1xuICAgICAgICB0aW1lc3RhbXBJc1NldDogdHJ1ZVxuICAgICAgfV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcjtcbn0oUGFyc2VyKTsiLCJpbXBvcnQgeyBFcmFQYXJzZXIgfSBmcm9tIFwiLi9FcmFQYXJzZXIuanNcIjtcbmltcG9ydCB7IFllYXJQYXJzZXIgfSBmcm9tIFwiLi9ZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtZZWFyUGFyc2VyIH0gZnJvbSBcIi4vTG9jYWxXZWVrWWVhclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9JU09XZWVrWWVhclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRXh0ZW5kZWRZZWFyUGFyc2VyIH0gZnJvbSBcIi4vRXh0ZW5kZWRZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBRdWFydGVyUGFyc2VyIH0gZnJvbSBcIi4vUXVhcnRlclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9TdGFuZEFsb25lUXVhcnRlclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9Nb250aFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZU1vbnRoUGFyc2VyIH0gZnJvbSBcIi4vU3RhbmRBbG9uZU1vbnRoUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbFdlZWtQYXJzZXIuanNcIjtcbmltcG9ydCB7IElTT1dlZWtQYXJzZXIgfSBmcm9tIFwiLi9JU09XZWVrUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4vRGF0ZVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRGF5T2ZZZWFyUGFyc2VyIH0gZnJvbSBcIi4vRGF5T2ZZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlQYXJzZXIgfSBmcm9tIFwiLi9EYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vTG9jYWxEYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciB9IGZyb20gXCIuL1N0YW5kQWxvbmVMb2NhbERheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPRGF5UGFyc2VyIH0gZnJvbSBcIi4vSVNPRGF5UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBBTVBNUGFyc2VyIH0gZnJvbSBcIi4vQU1QTVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgQU1QTU1pZG5pZ2h0UGFyc2VyIH0gZnJvbSBcIi4vQU1QTU1pZG5pZ2h0UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlQZXJpb2RQYXJzZXIgfSBmcm9tIFwiLi9EYXlQZXJpb2RQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIxdG8xMlBhcnNlciB9IGZyb20gXCIuL0hvdXIxdG8xMlBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjB0bzIzUGFyc2VyIH0gZnJvbSBcIi4vSG91cjB0bzIzUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBIb3VyMFRvMTFQYXJzZXIgfSBmcm9tIFwiLi9Ib3VyMFRvMTFQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIxVG8yNFBhcnNlciB9IGZyb20gXCIuL0hvdXIxVG8yNFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTWludXRlUGFyc2VyIH0gZnJvbSBcIi4vTWludXRlUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9TZWNvbmRQYXJzZXIuanNcIjtcbmltcG9ydCB7IEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9GcmFjdGlvbk9mU2Vjb25kUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVdpdGhaUGFyc2VyIH0gZnJvbSBcIi4vSVNPVGltZXpvbmVXaXRoWlBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPVGltZXpvbmVQYXJzZXIgfSBmcm9tIFwiLi9JU09UaW1lem9uZVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wU2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL1RpbWVzdGFtcFNlY29uZHNQYXJzZXIuanNcIjtcbmltcG9ydCB7IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8qIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHoqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgcGFyc2VgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICovXG5cbmV4cG9ydCB2YXIgcGFyc2VycyA9IHtcbiAgRzogbmV3IEVyYVBhcnNlcigpLFxuICB5OiBuZXcgWWVhclBhcnNlcigpLFxuICBZOiBuZXcgTG9jYWxXZWVrWWVhclBhcnNlcigpLFxuICBSOiBuZXcgSVNPV2Vla1llYXJQYXJzZXIoKSxcbiAgdTogbmV3IEV4dGVuZGVkWWVhclBhcnNlcigpLFxuICBROiBuZXcgUXVhcnRlclBhcnNlcigpLFxuICBxOiBuZXcgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIoKSxcbiAgTTogbmV3IE1vbnRoUGFyc2VyKCksXG4gIEw6IG5ldyBTdGFuZEFsb25lTW9udGhQYXJzZXIoKSxcbiAgdzogbmV3IExvY2FsV2Vla1BhcnNlcigpLFxuICBJOiBuZXcgSVNPV2Vla1BhcnNlcigpLFxuICBkOiBuZXcgRGF0ZVBhcnNlcigpLFxuICBEOiBuZXcgRGF5T2ZZZWFyUGFyc2VyKCksXG4gIEU6IG5ldyBEYXlQYXJzZXIoKSxcbiAgZTogbmV3IExvY2FsRGF5UGFyc2VyKCksXG4gIGM6IG5ldyBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIoKSxcbiAgaTogbmV3IElTT0RheVBhcnNlcigpLFxuICBhOiBuZXcgQU1QTVBhcnNlcigpLFxuICBiOiBuZXcgQU1QTU1pZG5pZ2h0UGFyc2VyKCksXG4gIEI6IG5ldyBEYXlQZXJpb2RQYXJzZXIoKSxcbiAgaDogbmV3IEhvdXIxdG8xMlBhcnNlcigpLFxuICBIOiBuZXcgSG91cjB0bzIzUGFyc2VyKCksXG4gIEs6IG5ldyBIb3VyMFRvMTFQYXJzZXIoKSxcbiAgazogbmV3IEhvdXIxVG8yNFBhcnNlcigpLFxuICBtOiBuZXcgTWludXRlUGFyc2VyKCksXG4gIHM6IG5ldyBTZWNvbmRQYXJzZXIoKSxcbiAgUzogbmV3IEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIoKSxcbiAgWDogbmV3IElTT1RpbWV6b25lV2l0aFpQYXJzZXIoKSxcbiAgeDogbmV3IElTT1RpbWV6b25lUGFyc2VyKCksXG4gIHQ6IG5ldyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyKCksXG4gIFQ6IG5ldyBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIoKVxufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgfSBmcm9tIFwiLi9fbGliL1NldHRlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL19saWIvcGFyc2Vycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgbm90V2hpdGVzcGFjZVJlZ0V4cCA9IC9cXFMvO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgcGFyc2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRhdGUgcGFyc2VkIGZyb20gc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKlxuICogRm9ybWF0IG9mIHRoZSBmb3JtYXQgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA1IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogTm90IGFsbCB0b2tlbnMgYXJlIGNvbXBhdGlibGUuIENvbWJpbmF0aW9ucyB0aGF0IGRvbid0IG1ha2Ugc2Vuc2Ugb3IgY291bGQgbGVhZCB0byBidWdzIGFyZSBwcm9oaWJpdGVkXG4gKiBhbmQgd2lsbCB0aHJvdyBgUmFuZ2VFcnJvcmAuIEZvciBleGFtcGxlIHVzYWdlIG9mIDI0LWhvdXIgZm9ybWF0IHRva2VuIHdpdGggQU0vUE0gdG9rZW4gd2lsbCB0aHJvdyBhbiBleGNlcHRpb246XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcGFyc2UoJzIzIEFNJywgJ0hIIGEnLCBuZXcgRGF0ZSgpKVxuICogLy89PiBSYW5nZUVycm9yOiBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYEhIYCBhbmQgYGFgIGF0IHRoZSBzYW1lIHRpbWVcbiAqIGBgYFxuICpcbiAqIFNlZSB0aGUgY29tcGF0aWJpbGl0eSB0YWJsZTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlFPUFUzeFVocGxsbDZkeW9NbVZVWEhLbF84Q1JEczZfdWVMbWV4M1NvcXdodW9sa3VOM08wNWw0cnF4NWgxZEtYOGViNDZVbC1DQ1NycS9wdWJodG1sP2dpZD0wJnNpbmdsZT10cnVlXG4gKlxuICogQWNjZXB0ZWQgZm9ybWF0IHN0cmluZyBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8UHJpb3J8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMTQwIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgMTMwIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3LCA5OTk5ICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgOTk5OTk5OXRoICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxMjMsIDk5OSAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgMTMwIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3LCA5MDAwICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgOTk5OTk5OXRoICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNCw2ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxMjMsIDk5OSAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgMTMwIHwgUiAgICAgICB8IC00MywgMSwgMTkwMCwgMjAxNywgOTk5OSwgLTk5OTkgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSICAgICAgfCAtNDMsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAxLCAxMjMsIDk5OSwgLTk5OSAgICAgICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAxLCAyMDE3LCA5OTk5LCAtOTk5OSAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQsNSB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB1ICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5ICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDk5LCAtOTkgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IDEyMCB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IDEyMCB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IDExMCB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IDExMCB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IDEwMCB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IDEwMCB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8ICA5MCB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8ICA5MCB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgIDkwIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8ICA5MCB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA1ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCAgOTAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgIDkwIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA4MCB8IGEuLmFhYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8ICA4MCB8IGIuLmJiYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8ICA4MCB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA2MCB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA1MCB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8ICA0MCB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgIDMwIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8ICAyMCB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgIDEwIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCAgMTAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8ICBOQSB8IFAgICAgICAgfCAwNS8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUCAgICAgIHwgTWF5IDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQICAgICB8IE1heSAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQUFAgICAgfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzICAgICAgICAgICAgfCAyLDUsOCB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCAgTkEgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8ICBOQSB8IFBwICAgICAgfCAwNS8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUHBwICAgIHwgTWF5IDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQcHAgICB8IE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQUFBwcCAgfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgfCAyLDUsOCB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyLlxuICogICAgSW4gYGZvcm1hdGAgZnVuY3Rpb24sIHRoZXkgd2lsbCBwcm9kdWNlIGRpZmZlcmVudCByZXN1bHQ6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqICAgIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggYm90aCBmb3JtYXR0aW5nIGFuZCBzdGFuZC1hbG9uZSB1bml0cyBpbnRlcmNoYW5nYWJseS5cbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGU6XG4gKiAgICAtIGZvciBudW1lcmljYWwgdW5pdHMgKGB5eXl5eXl5eWApIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggYSBudW1iZXJcbiAqICAgICAgYXMgd2lkZSBhcyB0aGUgc2VxdWVuY2VcbiAqICAgIC0gZm9yIHRleHQgdW5pdHMgKGBNTU1NTU1NTWApIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggdGhlIHdpZGVzdCB2YXJpYXRpb24gb2YgdGhlIHVuaXQuXG4gKiAgICAgIFRoZXNlIHZhcmlhdGlvbnMgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogMy4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNC4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCB3aWxsIHRyeSB0byBndWVzcyB0aGUgY2VudHVyeSBvZiB0d28gZGlnaXQgeWVhciBieSBwcm94aW1pdHkgd2l0aCBgcmVmZXJlbmNlRGF0ZWA6XG4gKlxuICogICAgYHBhcnNlKCc1MCcsICd5eScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFNhdCBKYW4gMDEgMjA1MCAwMDowMDowMGBcbiAqXG4gKiAgICBgcGFyc2UoJzc1JywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gV2VkIEphbiAwMSAxOTc1IDAwOjAwOjAwYFxuICpcbiAqICAgIHdoaWxlIGB1dWAgd2lsbCBqdXN0IGFzc2lnbiB0aGUgeWVhciBhcyBpczpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3V1JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAwMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBUdWUgSmFuIDAxIDAwNzUgMDA6MDA6MDBgXG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbc2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW3NldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3NldFdlZWtZZWFyfSkuXG4gKlxuICogNS4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA2LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDcuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDguIGBQK2AgdG9rZW5zIGRvIG5vdCBoYXZlIGEgZGVmaW5lZCBwcmlvcml0eSBzaW5jZSB0aGV5IGFyZSBtZXJlbHkgYWxpYXNlcyB0byBvdGhlciB0b2tlbnMgYmFzZWRcbiAqICAgIG9uIHRoZSBnaXZlbiBsb2NhbGUuXG4gKlxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBQYCA9PiBgTU0vZGQveXl5eWBcbiAqICAgIHVzaW5nIGBlbi1VU2AgbG9jYWxlOiBgcGAgPT4gYGhoOm1tIGFgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYFBgID0+IGBkZC9NTS95eXl5YFxuICogICAgdXNpbmcgYHB0LUJSYCBsb2NhbGU6IGBwYCA9PiBgSEg6bW1gXG4gKlxuICogVmFsdWVzIHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGRhdGUgaW4gdGhlIGRlc2NlbmRpbmcgb3JkZXIgb2YgaXRzIHVuaXQncyBwcmlvcml0eS5cbiAqIFVuaXRzIG9mIGFuIGVxdWFsIHByaW9yaXR5IG92ZXJ3cml0ZSBlYWNoIG90aGVyIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlLlxuICpcbiAqIElmIG5vIHZhbHVlcyBvZiBoaWdoZXIgcHJpb3JpdHkgYXJlIHBhcnNlZCAoZS5nLiB3aGVuIHBhcnNpbmcgc3RyaW5nICdKYW51YXJ5IDFzdCcgd2l0aG91dCBhIHllYXIpLFxuICogdGhlIHZhbHVlcyB3aWxsIGJlIHRha2VuIGZyb20gM3JkIGFyZ3VtZW50IGByZWZlcmVuY2VEYXRlYCB3aGljaCB3b3JrcyBhcyBhIGNvbnRleHQgb2YgcGFyc2luZy5cbiAqXG4gKiBgcmVmZXJlbmNlRGF0ZWAgbXVzdCBiZSBwYXNzZWQgZm9yIGNvcnJlY3Qgd29yayBvZiB0aGUgZnVuY3Rpb24uXG4gKiBJZiB5b3UncmUgbm90IHN1cmUgd2hpY2ggYHJlZmVyZW5jZURhdGVgIHRvIHN1cHBseSwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIERhdGU6XG4gKiBgcGFyc2UoJzAyLzExLzIwMTQnLCAnTU0vZGQveXl5eScsIG5ldyBEYXRlKCkpYFxuICogSW4gdGhpcyBjYXNlIHBhcnNpbmcgd2lsbCBiZSBkb25lIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IGRhdGUuXG4gKiBJZiBgcmVmZXJlbmNlRGF0ZWAgaXMgYEludmFsaWQgRGF0ZWAgb3IgYSB2YWx1ZSBub3QgY29udmVydGlibGUgdG8gdmFsaWQgYERhdGVgLFxuICogdGhlbiBgSW52YWxpZCBEYXRlYCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqIElmIGBmb3JtYXRTdHJpbmdgIG1hdGNoZXMgd2l0aCBgZGF0ZVN0cmluZ2AgYnV0IGRvZXMgbm90IHByb3ZpZGVzIHRva2VucywgYHJlZmVyZW5jZURhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogSWYgcGFyc2luZyBmYWlsZWQsIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlU3RyaW5nIC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFN0cmluZyAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0gezF8MnwzfDR8NXw2fDd9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMyBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBtYXRjaGAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAxMSBGZWJydWFyeSAyMDE0IGZyb20gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoJzAyLzExLzIwMTQnLCAnTU0vZGQveXl5eScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAyOHRoIG9mIEZlYnJ1YXJ5IGluIEVzcGVyYW50byBsb2NhbGUgaW4gdGhlIGNvbnRleHQgb2YgMjAxMCB5ZWFyOlxuICogaW1wb3J0IGVvIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMjgtYSBkZSBmZWJydWFybycsIFwiZG8gJ2RlJyBNTU1NXCIsIG5ldyBEYXRlKDIwMTAsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9cbiAqIH0pXG4gKiAvLz0+IFN1biBGZWIgMjggMjAxMCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlKGRpcnR5RGF0ZVN0cmluZywgZGlydHlGb3JtYXRTdHJpbmcsIGRpcnR5UmVmZXJlbmNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMywgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVTdHJpbmcgPSBTdHJpbmcoZGlydHlEYXRlU3RyaW5nKTtcbiAgdmFyIGZvcm1hdFN0cmluZyA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cmluZyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUubWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBtYXRjaCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmIChmb3JtYXRTdHJpbmcgPT09ICcnKSB7XG4gICAgaWYgKGRhdGVTdHJpbmcgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdG9EYXRlKGRpcnR5UmVmZXJlbmNlRGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGVcbiAgfTsgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG5cbiAgdmFyIHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuICB2YXIgdG9rZW5zID0gZm9ybWF0U3RyaW5nLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciBpbiBsb25nRm9ybWF0dGVycykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKTtcbiAgdmFyIHVzZWRUb2tlbnMgPSBbXTtcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodG9rZW5zKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgdG9rZW4gPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyaW5nLCBkaXJ0eURhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0cmluZywgZGlydHlEYXRlU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gdG9rZW5bMF07XG4gICAgICB2YXIgcGFyc2VyID0gcGFyc2Vyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICAgIGlmIChwYXJzZXIpIHtcbiAgICAgICAgdmFyIGluY29tcGF0aWJsZVRva2VucyA9IHBhcnNlci5pbmNvbXBhdGlibGVUb2tlbnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICAgIHZhciBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChmdW5jdGlvbiAodXNlZFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHwgdXNlZFRva2VuLnRva2VuID09PSBmaXJzdENoYXJhY3RlcjtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYFwiLmNvbmNhdChpbmNvbXBhdGlibGVUb2tlbi5mdWxsVG9rZW4sIFwiYCBhbmQgYFwiKS5jb25jYXQodG9rZW4sIFwiYCBhdCB0aGUgc2FtZSB0aW1lXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gJyonICYmIHVzZWRUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGZvcm1hdCBzdHJpbmcgbXVzdG4ndCBjb250YWluIGBcIi5jb25jYXQodG9rZW4sIFwiYCBhbmQgYW55IG90aGVyIHRva2VuIGF0IHRoZSBzYW1lIHRpbWVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlZFRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0b2tlbjogZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICAgZnVsbFRva2VuOiB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gcGFyc2VyLnJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbG9jYWxlLm1hdGNoLCBzdWJGbk9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdjogbmV3IERhdGUoTmFOKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0ZXJzLnB1c2gocGFyc2VSZXN1bHQuc2V0dGVyKTtcbiAgICAgICAgZGF0ZVN0cmluZyA9IHBhcnNlUmVzdWx0LnJlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICAgICAgfSAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG5cblxuICAgICAgICBpZiAodG9rZW4gPT09IFwiJydcIikge1xuICAgICAgICAgIHRva2VuID0gXCInXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgdG9rZW4gPSBjbGVhbkVzY2FwZWRTdHJpbmcodG9rZW4pO1xuICAgICAgICB9IC8vIEN1dCB0b2tlbiBmcm9tIHN0cmluZywgb3IsIGlmIHN0cmluZyBkb2Vzbid0IG1hdGNoIHRoZSB0b2tlbiwgcmV0dXJuIEludmFsaWQgRGF0ZVxuXG5cbiAgICAgICAgaWYgKGRhdGVTdHJpbmcuaW5kZXhPZih0b2tlbikgPT09IDApIHtcbiAgICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBuZXcgRGF0ZShOYU4pXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICBpZiAoX3R5cGVvZihfcmV0KSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICB9IC8vIENoZWNrIGlmIHRoZSByZW1haW5pbmcgaW5wdXQgY29udGFpbnMgc29tZXRoaW5nIG90aGVyIHRoYW4gd2hpdGVzcGFjZVxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA+IDAgJiYgbm90V2hpdGVzcGFjZVJlZ0V4cC50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVycy5tYXAoZnVuY3Rpb24gKHNldHRlcikge1xuICAgIHJldHVybiBzZXR0ZXIucHJpb3JpdHk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYiAtIGE7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAocHJpb3JpdHksIGluZGV4LCBhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXg7XG4gIH0pLm1hcChmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICByZXR1cm4gc2V0dGVycy5maWx0ZXIoZnVuY3Rpb24gKHNldHRlcikge1xuICAgICAgcmV0dXJuIHNldHRlci5wcmlvcml0eSA9PT0gcHJpb3JpdHk7XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5O1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHNldHRlckFycmF5KSB7XG4gICAgcmV0dXJuIHNldHRlckFycmF5WzBdO1xuICB9KTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlSZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG5cblxuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhkYXRlLCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpKTtcbiAgdmFyIGZsYWdzID0ge307XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih1bmlxdWVQcmlvcml0eVNldHRlcnMpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBzZXR0ZXIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKHV0Y0RhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBzZXR0ZXIuc2V0KHV0Y0RhdGUsIGZsYWdzLCBzdWJGbk9wdGlvbnMpOyAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIHV0Y0RhdGUgPSByZXN1bHRbMF07XG4gICAgICAgIGFzc2lnbihmbGFncywgcmVzdWx0WzFdKTsgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0Y0RhdGUgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIHJldHVybiB1dGNEYXRlO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGlzVGhpc1dlZWssIHBhcnNlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHRoaXNXZWVrID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAocHJvamVjdHMsIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG5cbiAgICBpZiAodGFza3MgIT0gbnVsbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBwYXJzZSB0aGUgZGF0ZSBzdHJpbmcgYmFjayB0byBJU09cbiAgICAgICAgY29uc3QgZGF0ZU5vdyA9IHBhcnNlKHRhc2tzW2ldLmR1ZURhdGUsIFwiTU0vZGQveXl5eVwiLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBpZiAoaXNUaGlzV2VlayhkYXRlTm93KSkge1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBjYWxsIHRoZSBkZWxldGUgdGFza1xuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRhc2soZGF0YUlkLCBcInRoaXMtd2Vla1wiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoaXNXZWVrO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IGluYm94IGZyb20gXCIuL2luYm94XCI7XG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCB0aGlzV2VlayBmcm9tIFwiLi90aGlzV2Vla1wiO1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcmlnaHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpc3BsYXlJbmJveCA9ICgpID0+IHtcbiAgICByaWdodENvbnRlbnQuaW5uZXJIVE1MID0gaW5ib3guZGlzcGxheUNvbnRlbnQoXG4gICAgICBzdG9yYWdlLnByb2plY3RTdG9yYWdlLFxuICAgICAgc3RvcmFnZS50YXNrU3RvcmFnZVxuICAgICk7XG4gICAgaW5ib3guc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRvZGF5ID0gKCkgPT4ge1xuICAgIHJpZ2h0Q29udGVudC5pbm5lckhUTUwgPSB0b2RheS5kaXNwbGF5Q29udGVudChcbiAgICAgIHN0b3JhZ2UucHJvamVjdFN0b3JhZ2UsXG4gICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlXG4gICAgKTtcbiAgICB0b2RheS5zZXRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VGhpc1dlZWsgPSAoKSA9PiB7XG4gICAgcmlnaHRDb250ZW50LmlubmVySFRNTCA9IHRoaXNXZWVrLmRpc3BsYXlDb250ZW50KFxuICAgICAgc3RvcmFnZS5wcm9qZWN0U3RvcmFnZSxcbiAgICAgIHN0b3JhZ2UudGFza1N0b3JhZ2VcbiAgICApO1xuICAgIHRvZGF5LnNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHRlc3REaXNwbGF5ID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwic3VjY2Vzc1wiKTtcbiAgfTtcblxuICBjb25zdCByZWZyZXNoQ29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgc3dpdGNoIChwcm9qZWN0KSB7XG4gICAgICBjYXNlIFwiZGVmYXVsdFwiOlxuICAgICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICBkaXNwbGF5VG9kYXkoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aGlzLXdlZWtcIjpcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBpbmJveExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmJveFwiKTtcbiAgICBjb25zdCB0b2RheUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcbiAgICBjb25zdCB0aGlzV2Vla0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGlzLXdlZWtcIik7XG5cbiAgICBpbmJveExpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICB9KTtcblxuICAgIC8vIGRpc3BsYXkgdG9kYXkgd2hlbiBjbGlja2VkXG4gICAgdG9kYXlMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRvZGF5KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzV2Vla0xpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VGhpc1dlZWsoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBpbml0aWFsaXplXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgZGlzcGxheUluYm94KCk7XG4gICAgc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIHRlc3REaXNwbGF5LFxuICAgIHJlZnJlc2hDb250ZW50LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheVwiO1xuXG5kaXNwbGF5LmluaXQoKTtcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyIsIlVSTCIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm0iLCJuIiwiZ2V0dGVyIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInAiLCJiIiwiYmFzZVVSSSIsInNlbGYiLCJocmVmIiwibmMiLCJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJUeXBlRXJyb3IiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJndW1lbnRzIiwiYXJnU3RyIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwid2FybiIsInN0YWNrIiwiTmFOIiwidG9JbnRlZ2VyIiwiZGlydHlOdW1iZXIiLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJzdWJNaWxsaXNlY29uZHMiLCJkaXJ0eURhdGUiLCJkaXJ0eUFtb3VudCIsInRpbWVzdGFtcCIsImFtb3VudCIsImFkZE1pbGxpc2Vjb25kcyIsInN0YXJ0T2ZVVENJU09XZWVrIiwiZGF0ZSIsImRheSIsImdldFVUQ0RheSIsImRpZmYiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSVNPV2Vla1llYXIiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyIiwic2V0VVRDRnVsbFllYXIiLCJzdGFydE9mTmV4dFllYXIiLCJmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyIiwic3RhcnRPZlRoaXNZZWFyIiwiZ2V0VVRDSVNPV2VlayIsImZvdXJ0aE9mSmFudWFyeSIsInN0YXJ0T2ZVVENJU09XZWVrWWVhciIsInJvdW5kIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0YXJ0T2ZVVENXZWVrIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfb3B0aW9ucyR3ZWVrU3RhcnRzT24iLCJfb3B0aW9ucyRsb2NhbGUiLCJfb3B0aW9ucyRsb2NhbGUkb3B0aW8iLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwyIiwid2Vla1N0YXJ0c09uIiwibG9jYWxlIiwiUmFuZ2VFcnJvciIsImdldFVUQ1dlZWtZZWFyIiwiX29wdGlvbnMkZmlyc3RXZWVrQ29uIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwiZmlyc3RXZWVrT2ZOZXh0WWVhciIsImZpcnN0V2Vla09mVGhpc1llYXIiLCJnZXRVVENXZWVrIiwiZmlyc3RXZWVrIiwic3RhcnRPZlVUQ1dlZWtZZWFyIiwiYWRkTGVhZGluZ1plcm9zIiwidGFyZ2V0TGVuZ3RoIiwic2lnbiIsIm91dHB1dCIsImFicyIsInRva2VuIiwic2lnbmVkWWVhciIsIm1vbnRoIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwibnVtYmVyT2ZEaWdpdHMiLCJtaWxsaXNlY29uZHMiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJwb3ciLCJHIiwibG9jYWxpemUiLCJlcmEiLCJ3aWR0aCIsInkiLCJvcmRpbmFsTnVtYmVyIiwidW5pdCIsImxpZ2h0Rm9ybWF0dGVycyIsIlkiLCJzaWduZWRXZWVrWWVhciIsIndlZWtZZWFyIiwiUiIsInUiLCJRIiwicXVhcnRlciIsImNvbnRleHQiLCJxIiwiTSIsIkwiLCJ3Iiwid2VlayIsIkkiLCJpc29XZWVrIiwiRCIsImRheU9mWWVhciIsInNldFVUQ01vbnRoIiwiZGlmZmVyZW5jZSIsImdldFVUQ0RheU9mWWVhciIsIkUiLCJkYXlPZldlZWsiLCJsb2NhbERheU9mV2VlayIsImMiLCJpc29EYXlPZldlZWsiLCJkYXlQZXJpb2RFbnVtVmFsdWUiLCJkYXlQZXJpb2QiLCJ0b0xvd2VyQ2FzZSIsImhvdXJzIiwiQiIsImgiLCJIIiwiSyIsInMiLCJTIiwiWCIsIl9sb2NhbGl6ZSIsInRpbWV6b25lT2Zmc2V0IiwiX29yaWdpbmFsRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwiZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzIiwiZm9ybWF0VGltZXpvbmUiLCJ4IiwiTyIsImZvcm1hdFRpbWV6b25lU2hvcnQiLCJ6IiwidCIsIm9yaWdpbmFsRGF0ZSIsIlQiLCJvZmZzZXQiLCJkaXJ0eURlbGltaXRlciIsImFic09mZnNldCIsIm1pbnV0ZXMiLCJkZWxpbWl0ZXIiLCJkYXRlTG9uZ0Zvcm1hdHRlciIsInBhdHRlcm4iLCJmb3JtYXRMb25nIiwidGltZUxvbmdGb3JtYXR0ZXIiLCJ0aW1lIiwiUCIsImRhdGVUaW1lRm9ybWF0IiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsImRhdGVQYXR0ZXJuIiwidGltZVBhdHRlcm4iLCJkYXRlVGltZSIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJ1dGNEYXRlIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwicHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zIiwicHJvdGVjdGVkV2Vla1llYXJUb2tlbnMiLCJpc1Byb3RlY3RlZERheU9mWWVhclRva2VuIiwiaW5kZXhPZiIsImlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiIsInRocm93UHJvdGVjdGVkRXJyb3IiLCJmb3JtYXQiLCJpbnB1dCIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJidWlsZEZvcm1hdExvbmdGbiIsImRlZmF1bHRXaWR0aCIsImZvcm1hdHMiLCJmdWxsIiwibG9uZyIsIm1lZGl1bSIsInNob3J0IiwiZm9ybWF0UmVsYXRpdmVMb2NhbGUiLCJsYXN0V2VlayIsInllc3RlcmRheSIsInRvZGF5IiwidG9tb3Jyb3ciLCJuZXh0V2VlayIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImFyZ3VtZW50Q2FsbGJhY2siLCJfb3B0aW9ucyIsInJlbTEwMCIsIm5hcnJvdyIsImFiYnJldmlhdGVkIiwid2lkZSIsImFtIiwicG0iLCJtaWRuaWdodCIsIm5vb24iLCJtb3JuaW5nIiwiYWZ0ZXJub29uIiwiZXZlbmluZyIsIm5pZ2h0IiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwidmFsdWUiLCJtYXRjaGVkU3RyaW5nIiwicGFyc2VQYXR0ZXJucyIsImRlZmF1bHRQYXJzZVdpZHRoIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJmaW5kSW5kZXgiLCJvYmplY3QiLCJmaW5kS2V5IiwidmFsdWVDYWxsYmFjayIsInJlc3QiLCJwYXJzZVBhdHRlcm4iLCJwYXJzZUludCIsInBhcnNlUmVzdWx0IiwiYW55IiwiY29kZSIsImZvcm1hdERpc3RhbmNlIiwidG9rZW5WYWx1ZSIsImFkZFN1ZmZpeCIsImNvbXBhcmlzb24iLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwiZXNjYXBlZFN0cmluZ1JlZ0V4cCIsImRvdWJsZVF1b3RlUmVnRXhwIiwidW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAiLCJkaXJ0eUZvcm1hdFN0ciIsIl9yZWY0IiwiX29wdGlvbnMkbG9jYWxlMiIsIl9vcHRpb25zJGxvY2FsZTIkb3B0aSIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9vcHRpb25zJGxvY2FsZTMiLCJfb3B0aW9ucyRsb2NhbGUzJG9wdGkiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwzIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsNCIsImZvcm1hdFN0ciIsImRlZmF1bHRMb2NhbGUiLCJpc0RhdGUiLCJpc1ZhbGlkIiwiZm9ybWF0dGVyT3B0aW9ucyIsInN1YnN0cmluZyIsImZpcnN0Q2hhcmFjdGVyIiwibG9uZ0Zvcm1hdHRlciIsIm1hdGNoZWQiLCJmb3JtYXR0ZXIiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwicHJvamVjdFN0b3JhZ2UiLCJ0YXNrU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0ZXN0SXRlbSIsImlkTm8iLCJub3ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsImxvZyIsImRlbGV0ZVRhc2siLCJ0YXNrSWRObyIsInByb2plY3RzIiwidGFza3MiLCJpbmJveERpdiIsImluYm94SGVhZGluZyIsInRleHRDb250ZW50IiwidGFza0RpdiIsImJ0biIsInRhc2tEZXRhaWxzIiwidGFza0R1ZURhdGUiLCJhZGRUYXNrRGl2IiwiYWRkVGFza0g0IiwiYWRkVGFza0lucHV0IiwiYnRuRGl2IiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwib3V0ZXJIVE1MIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYW5jZWxUYXNrQnRuIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhSWQiLCJnZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiZGF0ZU5vdyIsInByb3BlcnR5IiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiTmV3VGFyZ2V0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiUmVmZXJlbmNlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIlNldHRlciIsIl91dGNEYXRlIiwiVmFsdWVTZXR0ZXIiLCJfU2V0dGVyIiwiX3N1cGVyIiwidmFsaWRhdGVWYWx1ZSIsInNldFZhbHVlIiwic3ViUHJpb3JpdHkiLCJfdGhpcyIsImZsYWdzIiwiRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIiLCJfU2V0dGVyMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJfbGVuIiwiX2tleSIsInRpbWVzdGFtcElzU2V0IiwiY29udmVydGVkRGF0ZSIsInNldEZ1bGxZZWFyIiwic2V0SG91cnMiLCJQYXJzZXIiLCJkYXRlU3RyaW5nIiwic2V0dGVyIiwidmFsaWRhdGUiLCJzZXQiLCJfdmFsdWUiLCJFcmFQYXJzZXIiLCJfUGFyc2VyIiwibnVtZXJpY1BhdHRlcm5zIiwiaG91cjIzaCIsImhvdXIyNGgiLCJob3VyMTFoIiwiaG91cjEyaCIsIm1pbnV0ZSIsInNlY29uZCIsInNpbmdsZURpZ2l0IiwidHdvRGlnaXRzIiwidGhyZWVEaWdpdHMiLCJmb3VyRGlnaXRzIiwiYW55RGlnaXRzU2lnbmVkIiwic2luZ2xlRGlnaXRTaWduZWQiLCJ0d29EaWdpdHNTaWduZWQiLCJ0aHJlZURpZ2l0c1NpZ25lZCIsImZvdXJEaWdpdHNTaWduZWQiLCJ0aW1lem9uZVBhdHRlcm5zIiwibWFwVmFsdWUiLCJwYXJzZUZuUmVzdWx0IiwibWFwRm4iLCJwYXJzZU51bWVyaWNQYXR0ZXJuIiwicGFyc2VUaW1lem9uZVBhdHRlcm4iLCJwYXJzZUFueURpZ2l0c1NpZ25lZCIsInBhcnNlTkRpZ2l0cyIsIlJlZ0V4cCIsInBhcnNlTkRpZ2l0c1NpZ25lZCIsImRheVBlcmlvZEVudW1Ub0hvdXJzIiwibm9ybWFsaXplVHdvRGlnaXRZZWFyIiwidHdvRGlnaXRZZWFyIiwiY3VycmVudFllYXIiLCJpc0NvbW1vbkVyYSIsImFic0N1cnJlbnRZZWFyIiwicmFuZ2VFbmQiLCJpc0xlYXBZZWFySW5kZXgiLCJZZWFyUGFyc2VyIiwiaXNUd29EaWdpdFllYXIiLCJub3JtYWxpemVkVHdvRGlnaXRZZWFyIiwiTG9jYWxXZWVrWWVhclBhcnNlciIsIklTT1dlZWtZZWFyUGFyc2VyIiwiX2ZsYWdzIiwiZmlyc3RXZWVrT2ZZZWFyIiwiRXh0ZW5kZWRZZWFyUGFyc2VyIiwiUXVhcnRlclBhcnNlciIsIlN0YW5kQWxvbmVRdWFydGVyUGFyc2VyIiwiTW9udGhQYXJzZXIiLCJTdGFuZEFsb25lTW9udGhQYXJzZXIiLCJMb2NhbFdlZWtQYXJzZXIiLCJkaXJ0eVdlZWsiLCJzZXRVVENXZWVrIiwiSVNPV2Vla1BhcnNlciIsImRpcnR5SVNPV2VlayIsInNldFVUQ0lTT1dlZWsiLCJEQVlTX0lOX01PTlRIIiwiREFZU19JTl9NT05USF9MRUFQX1lFQVIiLCJEYXRlUGFyc2VyIiwiaXNMZWFwWWVhciIsIkRheU9mWWVhclBhcnNlciIsInNldFVUQ0RheSIsImRpcnR5RGF5IiwiRGF5UGFyc2VyIiwiTG9jYWxEYXlQYXJzZXIiLCJ3aG9sZVdlZWtEYXlzIiwiU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIiwiSVNPRGF5UGFyc2VyIiwic2V0VVRDSVNPRGF5IiwiQU1QTVBhcnNlciIsIkFNUE1NaWRuaWdodFBhcnNlciIsIkRheVBlcmlvZFBhcnNlciIsIkhvdXIxdG8xMlBhcnNlciIsImlzUE0iLCJIb3VyMHRvMjNQYXJzZXIiLCJIb3VyMFRvMTFQYXJzZXIiLCJIb3VyMVRvMjRQYXJzZXIiLCJNaW51dGVQYXJzZXIiLCJzZXRVVENNaW51dGVzIiwiU2Vjb25kUGFyc2VyIiwic2V0VVRDU2Vjb25kcyIsIkZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIiLCJzZXRVVENNaWxsaXNlY29uZHMiLCJJU09UaW1lem9uZVdpdGhaUGFyc2VyIiwiSVNPVGltZXpvbmVQYXJzZXIiLCJUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIiwiVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIiwicGFyc2VycyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibmFtZSIsImZyb20iLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJGIiwiZG9uZSIsIl9lIiwiZiIsImVyciIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJzdGVwIiwibmV4dCIsIl9lMiIsInJldHVybiIsImFyciIsImxlbiIsImFycjIiLCJub3RXaGl0ZXNwYWNlUmVnRXhwIiwiZGlydHlEYXRlU3RyaW5nIiwiZGlydHlGb3JtYXRTdHJpbmciLCJkaXJ0eVJlZmVyZW5jZURhdGUiLCJmb3JtYXRTdHJpbmciLCJfc3RlcCIsInN1YkZuT3B0aW9ucyIsInNldHRlcnMiLCJ0b2tlbnMiLCJ1c2VkVG9rZW5zIiwiX2l0ZXJhdG9yIiwiX2xvb3AiLCJwYXJzZXIiLCJpbmNvbXBhdGlibGVUb2tlbnMiLCJpbmNvbXBhdGlibGVUb2tlbiIsImZpbmQiLCJ1c2VkVG9rZW4iLCJpbmNsdWRlcyIsImZ1bGxUb2tlbiIsInJ1biIsInYiLCJfcmV0IiwidW5pcXVlUHJpb3JpdHlTZXR0ZXJzIiwic29ydCIsImZpbHRlciIsInNldHRlckFycmF5IiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMiIsInN0YXJ0T2ZXZWVrIiwiZ2V0RGF5Iiwic2V0RGF0ZSIsImlzVGhpc1dlZWsiLCJkaXJ0eURhdGVMZWZ0IiwiZGlydHlEYXRlUmlnaHQiLCJkYXRlTGVmdFN0YXJ0T2ZXZWVrIiwiZGF0ZVJpZ2h0U3RhcnRPZldlZWsiLCJpc1NhbWVXZWVrIiwicmlnaHRDb250ZW50IiwiZGlzcGxheUluYm94IiwiaW5uZXJIVE1MIiwiZGlzcGxheVRvZGF5IiwiZGlzcGxheVRoaXNXZWVrIiwiaW5pdCIsImluYm94TGkiLCJ0b2RheUxpIiwidGhpc1dlZWtMaSIsInNldExpc3RlbmVycyIsInRlc3REaXNwbGF5IiwiYWxlcnQiLCJyZWZyZXNoQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=
