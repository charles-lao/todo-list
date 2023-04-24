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
            ');\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n  top: 0;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url(' +
            v +
            ");\n}\n\nli#today {\n  background-image: url(" +
            g +
            ");\n}\n\nli#this-week {\n  background-image: url(" +
            w +
            ");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url(" +
            A +
            ");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url(" +
            O +
            ');\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n  padding-left: 5px;\n}\n\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url(' +
            O +
            ");\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-task-btn {\n  background-color: #81cb7e;\n  border-color: #81cb7e;\n}\n\n#cancel-task-btn {\n  background-color: #d1ad9e;\n  border-color: #d1ad9e;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url(" +
            C +
            ");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,MAAM;AACR;;AAEA;EACE,YAAY;EACZ,WAAW;;EAEX,iBAAiB;AACnB;;AAEA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;;;;;EAME,4BAA4B;EAC5B,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;;;EAKE,eAAe;AACjB;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yDAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,yDAA2C;AAC7C;;AAEA;EACE,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,yDAA2C;EAC3C,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;EACP,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB",
            sourcesContent: [
              '@font-face {\n  font-family: "Roboto";\n  src: url(../fonts/Roboto-Regular.ttf);\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n  top: 0;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url("../images/inbox.svg");\n}\n\nli#today {\n  background-image: url("../images/calendar-today.svg");\n}\n\nli#this-week {\n  background-image: url("../images/calendar-month.svg");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url("../images/format-list-bulleted.svg");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url("../images/plus.svg");\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n  padding-left: 5px;\n}\n\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url("../images/plus.svg");\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-task-btn {\n  background-color: #81cb7e;\n  border-color: #81cb7e;\n}\n\n#cancel-task-btn {\n  background-color: #d1ad9e;\n  border-color: #d1ad9e;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url("../images/github.svg");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n',
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
              return "GMT" + E(o, ":");
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
              return "GMT" + E(o, ":");
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
      function E(t, e) {
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
      const T = x;
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
        var c, l, f, p, y, d, b, h, m, v, g, w, A, O, C, x, E, k;
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
                          null === (x = C.options) ||
                          void 0 === x
                        ? void 0
                        : x.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (E = j.locale) ||
                  void 0 === E ||
                  null === (k = E.options) ||
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
      const tt = (t, e, n, r, o, i) => ({
          idNo: t,
          title: e,
          description: n,
          dueDate: r,
          priority: o,
          project: i,
        }),
        et = (() => {
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
            r = tt(
              Date.now(),
              "4 test title",
              "4 test description",
              V(new Date(), "MM/dd/yyyy"),
              "4 test priority",
              "default"
            );
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
                  e[o].idNo == t && (e.splice(o, 1), n(), mi.refreshContent(r));
              },
              addTask: (t, r) => {
                const o = tt(
                  Date.now(),
                  t,
                  "description",
                  V(new Date(), "MM/dd/yyyy"),
                  "low",
                  r
                );
                e.push(o), n();
              },
            }
          );
        })();
      var nt = n(379),
        rt = n.n(nt),
        ot = n(795),
        it = n.n(ot),
        at = n(569),
        ut = n.n(at),
        ct = n(565),
        lt = n.n(ct),
        ft = n(216),
        st = n.n(ft),
        pt = n(589),
        yt = n.n(pt),
        dt = n(890),
        bt = {};
      (bt.styleTagTransform = yt()),
        (bt.setAttributes = lt()),
        (bt.insert = ut().bind(null, "head")),
        (bt.domAPI = it()),
        (bt.insertStyleElement = st()),
        rt()(dt.Z, bt),
        dt.Z && dt.Z.locals && dt.Z.locals;
      const ht = (t, e) => {
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
          a.setAttribute("type", "text"),
            a.setAttribute("id", "add-task-input");
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
        mt = () => {
          const t = document.querySelectorAll(".circle-btn"),
            e = document.querySelector("#add-task-h4"),
            n = document.querySelector("#add-task-div"),
            r = document.querySelector("#cancel-task-btn"),
            o = document.querySelector("#add-task-btn"),
            i = document.querySelector("#add-task-input");
          t.forEach((t) => {
            t.addEventListener("click", (t) => {
              const e = t.target.getAttribute("data-id");
              et.deleteTask(e, "default");
            });
          }),
            e.addEventListener("click", (t) => {
              (e.style.display = "none"), (n.style.display = "flex");
            }),
            r.addEventListener("click", (t) => {
              (e.style.display = "inline-flex"), (n.style.display = "none");
            }),
            o.addEventListener("click", (t) => {
              et.addTask(i.value, "default"), mi.refreshContent("default");
            });
        },
        vt = (t, e) => {
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
        gt = () => {
          document.querySelectorAll(".circle-btn").forEach((t) => {
            t.addEventListener("click", (t) => {
              const e = t.target.getAttribute("data-id");
              et.deleteTask(e, "today");
            });
          });
        };
      function wt(t, e) {
        if (null == t)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
      }
      function At(t) {
        return (
          (At =
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
          At(t)
        );
      }
      function Ot(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Ct(t, e);
      }
      function Ct(t, e) {
        return (
          (Ct =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ct(t, e)
        );
      }
      function xt(t) {
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
            r = kt(t);
          if (e) {
            var o = kt(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (t, e) {
            return !e || ("object" !== At(e) && "function" != typeof e)
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
      function kt(t) {
        return (
          (kt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          kt(t)
        );
      }
      function St(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Tt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function jt(t, e, n) {
        return e && Tt(t.prototype, e), n && Tt(t, n), t;
      }
      function Pt(t, e, n) {
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
      var _t = (function () {
          function t() {
            St(this, t), Pt(this, "subPriority", 0);
          }
          return (
            jt(t, [
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
        Rt = (function (t) {
          Ot(n, t);
          var e = xt(n);
          function n(t, r, o, i, a) {
            var u;
            return (
              St(this, n),
              ((u = e.call(this)).value = t),
              (u.validateValue = r),
              (u.setValue = o),
              (u.priority = i),
              a && (u.subPriority = a),
              u
            );
          }
          return (
            jt(n, [
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
        })(_t),
        Bt = (function (t) {
          Ot(n, t);
          var e = xt(n);
          function n() {
            var t;
            St(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              Pt(Et((t = e.call.apply(e, [this].concat(o)))), "priority", 10),
              Pt(Et(t), "subPriority", -1),
              t
            );
          }
          return (
            jt(n, [
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
        })(_t);
      function Dt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var Mt = (function () {
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
                      setter: new Rt(
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
          n && Dt(e.prototype, n),
          t
        );
      })();
      function Ut(t) {
        return (
          (Ut =
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
          Ut(t)
        );
      }
      function qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Yt(t, e) {
        return (
          (Yt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Yt(t, e)
        );
      }
      function Nt(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ht(t) {
        return (
          (Ht = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ht(t)
        );
      }
      function Lt(t, e, n) {
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
      var Wt = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Yt(t, e);
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
                  e = Ht(r);
                if (o) {
                  var n = Ht(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== Ut(e) && "function" != typeof e)
                    ? Nt(t)
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
              Lt(Nt((t = i.call.apply(i, [this].concat(n)))), "priority", 140),
              Lt(Nt(t), "incompatibleTokens", ["R", "u", "t", "T"]),
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
            n && qt(e.prototype, n),
            a
          );
        })(Mt),
        It =
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
        Qt = /^([+-])(\d{2})(\d{2})?|Z/,
        Ft = /^([+-])(\d{2})(\d{2})|Z/,
        zt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Xt = /^([+-])(\d{2}):(\d{2})|Z/,
        Gt = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
      function Zt(t, e) {
        return t ? { value: e(t.value), rest: t.rest } : t;
      }
      function Jt(t, e) {
        var n = e.match(t);
        return n
          ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) }
          : null;
      }
      function Kt(t, e) {
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
      function $t(t) {
        return Jt(It.anyDigitsSigned, t);
      }
      function Vt(t, e) {
        switch (t) {
          case 1:
            return Jt(It.singleDigit, e);
          case 2:
            return Jt(It.twoDigits, e);
          case 3:
            return Jt(It.threeDigits, e);
          case 4:
            return Jt(It.fourDigits, e);
          default:
            return Jt(new RegExp("^\\d{1," + t + "}"), e);
        }
      }
      function te(t, e) {
        switch (t) {
          case 1:
            return Jt(It.singleDigitSigned, e);
          case 2:
            return Jt(It.twoDigitsSigned, e);
          case 3:
            return Jt(It.threeDigitsSigned, e);
          case 4:
            return Jt(It.fourDigitsSigned, e);
          default:
            return Jt(new RegExp("^-?\\d{1," + t + "}"), e);
        }
      }
      function ee(t) {
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
      function ne(t, e) {
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
      function re(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
      }
      function oe(t) {
        return (
          (oe =
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
          oe(t)
        );
      }
      function ie(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ae(t, e) {
        return (
          (ae =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ae(t, e)
        );
      }
      function ue(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ce(t) {
        return (
          (ce = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ce(t)
        );
      }
      function le(t, e, n) {
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
            e && ae(t, e);
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
                e = ce(r);
              if (o) {
                var n = ce(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== oe(e) && "function" != typeof e)
                  ? ue(t)
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
            le(ue((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            le(ue(t), "incompatibleTokens", [
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
                    return Zt(Vt(4, t), r);
                  case "yo":
                    return Zt(n.ordinalNumber(t, { unit: "year" }), r);
                  default:
                    return Zt(Vt(e.length, t), r);
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
                  var o = ne(n.year, r);
                  return (
                    t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
                  );
                }
                var i = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
                return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && ie(e.prototype, n),
          a
        );
      })(Mt);
      function se(t) {
        return (
          (se =
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
          se(t)
        );
      }
      function pe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ye(t, e) {
        return (
          (ye =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ye(t, e)
        );
      }
      function de(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function be(t) {
        return (
          (be = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          be(t)
        );
      }
      function he(t, e, n) {
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
      var me = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ye(t, e);
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
                e = be(r);
              if (o) {
                var n = be(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== se(e) && "function" != typeof e)
                  ? de(t)
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
            he(de((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            he(de(t), "incompatibleTokens", [
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
                    return Zt(Vt(4, t), r);
                  case "Yo":
                    return Zt(n.ordinalNumber(t, { unit: "year" }), r);
                  default:
                    return Zt(Vt(e.length, t), r);
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
                  var i = ne(n.year, o);
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
          n && pe(e.prototype, n),
          a
        );
      })(Mt);
      function ve(t) {
        return (
          (ve =
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
          ve(t)
        );
      }
      function ge(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function we(t, e) {
        return (
          (we =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          we(t, e)
        );
      }
      function Ae(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Oe(t) {
        return (
          (Oe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Oe(t)
        );
      }
      function Ce(t, e, n) {
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
      var xe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && we(t, e);
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
                e = Oe(r);
              if (o) {
                var n = Oe(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== ve(e) && "function" != typeof e)
                  ? Ae(t)
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
            Ce(Ae((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            Ce(Ae(t), "incompatibleTokens", [
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
                return te("R" === e ? 4 : e.length, t);
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
          ]) && ge(e.prototype, n),
          a
        );
      })(Mt);
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
      function ke(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Se(t, e) {
        return (
          (Se =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Se(t, e)
        );
      }
      function Te(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function je(t) {
        return (
          (je = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          je(t)
        );
      }
      function Pe(t, e, n) {
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
      var _e = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Se(t, e);
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
                e = je(r);
              if (o) {
                var n = je(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ee(e) && "function" != typeof e)
                  ? Te(t)
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
            Pe(Te((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            Pe(Te(t), "incompatibleTokens", [
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
                return te("u" === e ? 4 : e.length, t);
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]) && ke(e.prototype, n),
          a
        );
      })(Mt);
      function Re(t) {
        return (
          (Re =
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
          Re(t)
        );
      }
      function Be(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function De(t, e) {
        return (
          (De =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          De(t, e)
        );
      }
      function Me(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ue(t) {
        return (
          (Ue = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ue(t)
        );
      }
      function qe(t, e, n) {
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
      var Ye = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && De(t, e);
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
                e = Ue(r);
              if (o) {
                var n = Ue(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Re(e) && "function" != typeof e)
                  ? Me(t)
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
            qe(Me((t = i.call.apply(i, [this].concat(n)))), "priority", 120),
            qe(Me(t), "incompatibleTokens", [
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
                    return Vt(e.length, t);
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
          n && Be(e.prototype, n),
          a
        );
      })(Mt);
      function Ne(t) {
        return (
          (Ne =
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
          Ne(t)
        );
      }
      function He(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Le(t, e) {
        return (
          (Le =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Le(t, e)
        );
      }
      function We(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ie(t) {
        return (
          (Ie = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ie(t)
        );
      }
      function Qe(t, e, n) {
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
      var Fe = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Le(t, e);
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
                e = Ie(r);
              if (o) {
                var n = Ie(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ne(e) && "function" != typeof e)
                  ? We(t)
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
            Qe(We((t = i.call.apply(i, [this].concat(n)))), "priority", 120),
            Qe(We(t), "incompatibleTokens", [
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
                    return Vt(e.length, t);
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
          n && He(e.prototype, n),
          a
        );
      })(Mt);
      function ze(t) {
        return (
          (ze =
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
          ze(t)
        );
      }
      function Xe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ge(t, e) {
        return (
          (Ge =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ge(t, e)
        );
      }
      function Ze(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Je(t) {
        return (
          (Je = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Je(t)
        );
      }
      function Ke(t, e, n) {
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
      var $e = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Ge(t, e);
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
                e = Je(r);
              if (o) {
                var n = Je(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== ze(e) && "function" != typeof e)
                  ? Ze(t)
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
            Ke(
              Ze((t = i.call.apply(i, [this].concat(n)))),
              "incompatibleTokens",
              ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
            ),
            Ke(Ze(t), "priority", 110),
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
                    return Zt(Jt(It.month, t), r);
                  case "MM":
                    return Zt(Vt(2, t), r);
                  case "Mo":
                    return Zt(n.ordinalNumber(t, { unit: "month" }), r);
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
          n && Xe(e.prototype, n),
          a
        );
      })(Mt);
      function Ve(t) {
        return (
          (Ve =
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
          Ve(t)
        );
      }
      function tn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function en(t, e) {
        return (
          (en =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          en(t, e)
        );
      }
      function nn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function rn(t) {
        return (
          (rn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          rn(t)
        );
      }
      function on(t, e, n) {
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
      var an = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && en(t, e);
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
                e = rn(r);
              if (o) {
                var n = rn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ve(e) && "function" != typeof e)
                  ? nn(t)
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
            on(nn((t = i.call.apply(i, [this].concat(n)))), "priority", 110),
            on(nn(t), "incompatibleTokens", [
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
                    return Zt(Jt(It.month, t), r);
                  case "LL":
                    return Zt(Vt(2, t), r);
                  case "Lo":
                    return Zt(n.ordinalNumber(t, { unit: "month" }), r);
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
          n && tn(e.prototype, n),
          a
        );
      })(Mt);
      function un(t) {
        return (
          (un =
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
          un(t)
        );
      }
      function cn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ln(t, e) {
        return (
          (ln =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ln(t, e)
        );
      }
      function fn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function sn(t) {
        return (
          (sn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          sn(t)
        );
      }
      function pn(t, e, n) {
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
      var yn = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ln(t, e);
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
                e = sn(a);
              if (u) {
                var n = sn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== un(e) && "function" != typeof e)
                  ? fn(t)
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
            pn(fn((t = c.call.apply(c, [this].concat(n)))), "priority", 100),
            pn(fn(t), "incompatibleTokens", [
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
                    return Jt(It.week, t);
                  case "wo":
                    return n.ordinalNumber(t, { unit: "week" });
                  default:
                    return Vt(e.length, t);
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
          r && cn(n.prototype, r),
          l
        );
      })(Mt);
      function dn(t) {
        return (
          (dn =
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
          dn(t)
        );
      }
      function bn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function hn(t, e) {
        return (
          (hn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          hn(t, e)
        );
      }
      function mn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function vn(t) {
        return (
          (vn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          vn(t)
        );
      }
      function gn(t, e, n) {
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
      var wn = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && hn(t, e);
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
                e = vn(a);
              if (c) {
                var n = vn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== dn(e) && "function" != typeof e)
                  ? mn(t)
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
            gn(mn((t = f.call.apply(f, [this].concat(n)))), "priority", 100),
            gn(mn(t), "incompatibleTokens", [
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
                    return Jt(It.week, t);
                  case "Io":
                    return n.ordinalNumber(t, { unit: "week" });
                  default:
                    return Vt(e.length, t);
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
          r && bn(n.prototype, r),
          s
        );
      })(Mt);
      function An(t) {
        return (
          (An =
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
          An(t)
        );
      }
      function On(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Cn(t, e) {
        return (
          (Cn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Cn(t, e)
        );
      }
      function xn(t) {
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
      function kn(t, e, n) {
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
      var Sn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Tn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jn = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && Cn(t, e);
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
                  return !e || ("object" !== An(e) && "function" != typeof e)
                    ? xn(t)
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
              kn(xn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
              kn(xn(t), "subPriority", 1),
              kn(xn(t), "incompatibleTokens", [
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
                      return Jt(It.date, t);
                    case "do":
                      return n.ordinalNumber(t, { unit: "date" });
                    default:
                      return Vt(e.length, t);
                  }
                },
              },
              {
                key: "validate",
                value: function (t, e) {
                  var n = re(t.getUTCFullYear()),
                    r = t.getUTCMonth();
                  return n ? e >= 1 && e <= Tn[r] : e >= 1 && e <= Sn[r];
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
                },
              },
            ]),
            n && On(e.prototype, n),
            a
          );
        })(Mt);
      function Pn(t) {
        return (
          (Pn =
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
          Pn(t)
        );
      }
      function _n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Rn(t, e) {
        return (
          (Rn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Rn(t, e)
        );
      }
      function Bn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Dn(t) {
        return (
          (Dn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Dn(t)
        );
      }
      function Mn(t, e, n) {
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
      var Un = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Rn(t, e);
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
                e = Dn(r);
              if (o) {
                var n = Dn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Pn(e) && "function" != typeof e)
                  ? Bn(t)
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
            Mn(Bn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Mn(Bn(t), "subpriority", 1),
            Mn(Bn(t), "incompatibleTokens", [
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
                    return Jt(It.dayOfYear, t);
                  case "Do":
                    return n.ordinalNumber(t, { unit: "date" });
                  default:
                    return Vt(e.length, t);
                }
              },
            },
            {
              key: "validate",
              value: function (t, e) {
                return re(t.getUTCFullYear())
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
          n && _n(e.prototype, n),
          a
        );
      })(Mt);
      function qn(e, n, r) {
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
      function Yn(t) {
        return (
          (Yn =
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
          Yn(t)
        );
      }
      function Nn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Hn(t, e) {
        return (
          (Hn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Hn(t, e)
        );
      }
      function Ln(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Wn(t) {
        return (
          (Wn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Wn(t)
        );
      }
      function In(t, e, n) {
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
      var Qn = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Hn(t, e);
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
                e = Wn(r);
              if (o) {
                var n = Wn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Yn(e) && "function" != typeof e)
                  ? Ln(t)
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
            In(Ln((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            In(Ln(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
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
                return (t = qn(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Nn(e.prototype, n),
          a
        );
      })(Mt);
      function Fn(t) {
        return (
          (Fn =
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
          Fn(t)
        );
      }
      function zn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Xn(t, e) {
        return (
          (Xn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Xn(t, e)
        );
      }
      function Gn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Zn(t) {
        return (
          (Zn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Zn(t)
        );
      }
      function Jn(t, e, n) {
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
      var Kn = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Xn(t, e);
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
                e = Zn(r);
              if (o) {
                var n = Zn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Fn(e) && "function" != typeof e)
                  ? Gn(t)
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
            Jn(Gn((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Jn(Gn(t), "incompatibleTokens", [
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
                    return Zt(Vt(e.length, t), o);
                  case "eo":
                    return Zt(n.ordinalNumber(t, { unit: "day" }), o);
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
                return (t = qn(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && zn(e.prototype, n),
          a
        );
      })(Mt);
      function $n(t) {
        return (
          ($n =
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
          $n(t)
        );
      }
      function Vn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function tr(t, e) {
        return (
          (tr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          tr(t, e)
        );
      }
      function er(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function nr(t) {
        return (
          (nr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          nr(t)
        );
      }
      function rr(t, e, n) {
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
      var or = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && tr(t, e);
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
                e = nr(r);
              if (o) {
                var n = nr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== $n(e) && "function" != typeof e)
                  ? er(t)
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
            rr(er((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            rr(er(t), "incompatibleTokens", [
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
                    return Zt(Vt(e.length, t), o);
                  case "co":
                    return Zt(n.ordinalNumber(t, { unit: "day" }), o);
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
                return (t = qn(t, n, r)).setUTCHours(0, 0, 0, 0), t;
              },
            },
          ]),
          n && Vn(e.prototype, n),
          a
        );
      })(Mt);
      function ir(t) {
        return (
          (ir =
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
          ir(t)
        );
      }
      function ar(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function ur(t, e) {
        return (
          (ur =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          ur(t, e)
        );
      }
      function cr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function lr(t) {
        return (
          (lr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          lr(t)
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
      var sr = (function (e) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ur(t, e);
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
                e = lr(a);
              if (u) {
                var n = lr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== ir(e) && "function" != typeof e)
                  ? cr(t)
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
            fr(cr((t = c.call.apply(c, [this].concat(n)))), "priority", 90),
            fr(cr(t), "incompatibleTokens", [
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
                    return Vt(e.length, t);
                  case "io":
                    return n.ordinalNumber(t, { unit: "day" });
                  case "iii":
                    return Zt(
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                        n.day(t, { width: "short", context: "formatting" }) ||
                        n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  case "iiiii":
                    return Zt(
                      n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  case "iiiiii":
                    return Zt(
                      n.day(t, { width: "short", context: "formatting" }) ||
                        n.day(t, { width: "narrow", context: "formatting" }),
                      r
                    );
                  default:
                    return Zt(
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
          r && ar(n.prototype, r),
          l
        );
      })(Mt);
      function pr(t) {
        return (
          (pr =
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
          pr(t)
        );
      }
      function yr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function dr(t, e) {
        return (
          (dr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          dr(t, e)
        );
      }
      function br(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function hr(t) {
        return (
          (hr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          hr(t)
        );
      }
      function mr(t, e, n) {
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
      var vr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && dr(t, e);
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
                e = hr(r);
              if (o) {
                var n = hr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== pr(e) && "function" != typeof e)
                  ? br(t)
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
            mr(br((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            mr(br(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
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
                return t.setUTCHours(ee(n), 0, 0, 0), t;
              },
            },
          ]),
          n && yr(e.prototype, n),
          a
        );
      })(Mt);
      function gr(t) {
        return (
          (gr =
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
          gr(t)
        );
      }
      function wr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ar(t, e) {
        return (
          (Ar =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Ar(t, e)
        );
      }
      function Or(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Cr(t) {
        return (
          (Cr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Cr(t)
        );
      }
      function xr(t, e, n) {
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
            e && Ar(t, e);
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
                e = Cr(r);
              if (o) {
                var n = Cr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== gr(e) && "function" != typeof e)
                  ? Or(t)
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
            xr(Or((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            xr(Or(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
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
                return t.setUTCHours(ee(n), 0, 0, 0), t;
              },
            },
          ]),
          n && wr(e.prototype, n),
          a
        );
      })(Mt);
      function kr(t) {
        return (
          (kr =
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
          kr(t)
        );
      }
      function Sr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Tr(t, e) {
        return (
          (Tr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Tr(t, e)
        );
      }
      function jr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Pr(t) {
        return (
          (Pr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Pr(t)
        );
      }
      function _r(t, e, n) {
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
      var Rr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Tr(t, e);
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
                e = Pr(r);
              if (o) {
                var n = Pr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== kr(e) && "function" != typeof e)
                  ? jr(t)
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
            _r(jr((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            _r(jr(t), "incompatibleTokens", ["a", "b", "t", "T"]),
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
                return t.setUTCHours(ee(n), 0, 0, 0), t;
              },
            },
          ]),
          n && Sr(e.prototype, n),
          a
        );
      })(Mt);
      function Br(t) {
        return (
          (Br =
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
          Br(t)
        );
      }
      function Dr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Mr(t, e) {
        return (
          (Mr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Mr(t, e)
        );
      }
      function Ur(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function qr(t) {
        return (
          (qr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          qr(t)
        );
      }
      function Yr(t, e, n) {
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
      var Nr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Mr(t, e);
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
                e = qr(r);
              if (o) {
                var n = qr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Br(e) && "function" != typeof e)
                  ? Ur(t)
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
            Yr(Ur((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            Yr(Ur(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
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
                    return Jt(It.hour12h, t);
                  case "ho":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return Vt(e.length, t);
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
          n && Dr(e.prototype, n),
          a
        );
      })(Mt);
      function Hr(t) {
        return (
          (Hr =
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
          Hr(t)
        );
      }
      function Lr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Wr(t, e) {
        return (
          (Wr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Wr(t, e)
        );
      }
      function Ir(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Qr(t) {
        return (
          (Qr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Qr(t)
        );
      }
      function Fr(t, e, n) {
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
      var zr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Wr(t, e);
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
                e = Qr(r);
              if (o) {
                var n = Qr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Hr(e) && "function" != typeof e)
                  ? Ir(t)
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
            Fr(Ir((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            Fr(Ir(t), "incompatibleTokens", [
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
                    return Jt(It.hour23h, t);
                  case "Ho":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return Vt(e.length, t);
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
          n && Lr(e.prototype, n),
          a
        );
      })(Mt);
      function Xr(t) {
        return (
          (Xr =
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
          Xr(t)
        );
      }
      function Gr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Zr(t, e) {
        return (
          (Zr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Zr(t, e)
        );
      }
      function Jr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Kr(t) {
        return (
          (Kr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Kr(t)
        );
      }
      function $r(t, e, n) {
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
      var Vr = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Zr(t, e);
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
                e = Kr(r);
              if (o) {
                var n = Kr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Xr(e) && "function" != typeof e)
                  ? Jr(t)
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
            $r(Jr((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            $r(Jr(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
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
                    return Jt(It.hour11h, t);
                  case "Ko":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return Vt(e.length, t);
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
          n && Gr(e.prototype, n),
          a
        );
      })(Mt);
      function to(t) {
        return (
          (to =
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
          to(t)
        );
      }
      function eo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function no(t, e) {
        return (
          (no =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          no(t, e)
        );
      }
      function ro(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function oo(t) {
        return (
          (oo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          oo(t)
        );
      }
      function io(t, e, n) {
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
      var ao = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && no(t, e);
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
                e = oo(r);
              if (o) {
                var n = oo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== to(e) && "function" != typeof e)
                  ? ro(t)
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
            io(ro((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            io(ro(t), "incompatibleTokens", [
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
                    return Jt(It.hour24h, t);
                  case "ko":
                    return n.ordinalNumber(t, { unit: "hour" });
                  default:
                    return Vt(e.length, t);
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
          n && eo(e.prototype, n),
          a
        );
      })(Mt);
      function uo(t) {
        return (
          (uo =
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
          uo(t)
        );
      }
      function co(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function lo(t, e) {
        return (
          (lo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          lo(t, e)
        );
      }
      function fo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function so(t) {
        return (
          (so = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          so(t)
        );
      }
      function po(t, e, n) {
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
      var yo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && lo(t, e);
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
                e = so(r);
              if (o) {
                var n = so(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== uo(e) && "function" != typeof e)
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
            po(fo((t = i.call.apply(i, [this].concat(n)))), "priority", 60),
            po(fo(t), "incompatibleTokens", ["t", "T"]),
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
                    return Jt(It.minute, t);
                  case "mo":
                    return n.ordinalNumber(t, { unit: "minute" });
                  default:
                    return Vt(e.length, t);
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
          n && co(e.prototype, n),
          a
        );
      })(Mt);
      function bo(t) {
        return (
          (bo =
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
          bo(t)
        );
      }
      function ho(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function mo(t, e) {
        return (
          (mo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          mo(t, e)
        );
      }
      function vo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function go(t) {
        return (
          (go = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          go(t)
        );
      }
      function wo(t, e, n) {
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
      var Ao = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && mo(t, e);
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
                e = go(r);
              if (o) {
                var n = go(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== bo(e) && "function" != typeof e)
                  ? vo(t)
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
            wo(vo((t = i.call.apply(i, [this].concat(n)))), "priority", 50),
            wo(vo(t), "incompatibleTokens", ["t", "T"]),
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
                    return Jt(It.second, t);
                  case "so":
                    return n.ordinalNumber(t, { unit: "second" });
                  default:
                    return Vt(e.length, t);
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
          n && ho(e.prototype, n),
          a
        );
      })(Mt);
      function Oo(t) {
        return (
          (Oo =
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
          Oo(t)
        );
      }
      function Co(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function xo(t, e) {
        return (
          (xo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          xo(t, e)
        );
      }
      function Eo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ko(t) {
        return (
          (ko = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ko(t)
        );
      }
      function So(t, e, n) {
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
      var To = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && xo(t, e);
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
                e = ko(r);
              if (o) {
                var n = ko(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Oo(e) && "function" != typeof e)
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
            So(Eo((t = i.call.apply(i, [this].concat(n)))), "priority", 30),
            So(Eo(t), "incompatibleTokens", ["t", "T"]),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t, e) {
                return Zt(Vt(e.length, t), function (t) {
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
          ]) && Co(e.prototype, n),
          a
        );
      })(Mt);
      function jo(t) {
        return (
          (jo =
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
          jo(t)
        );
      }
      function Po(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function _o(t, e) {
        return (
          (_o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          _o(t, e)
        );
      }
      function Ro(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Bo(t) {
        return (
          (Bo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Bo(t)
        );
      }
      function Do(t, e, n) {
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
      var Mo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && _o(t, e);
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
                e = Bo(r);
              if (o) {
                var n = Bo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== jo(e) && "function" != typeof e)
                  ? Ro(t)
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
            Do(Ro((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Do(Ro(t), "incompatibleTokens", ["t", "T", "x"]),
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
                    return Kt(Qt, t);
                  case "XX":
                    return Kt(Ft, t);
                  case "XXXX":
                    return Kt(zt, t);
                  case "XXXXX":
                    return Kt(Gt, t);
                  default:
                    return Kt(Xt, t);
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
              },
            },
          ]) && Po(e.prototype, n),
          a
        );
      })(Mt);
      function Uo(t) {
        return (
          (Uo =
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
          Uo(t)
        );
      }
      function qo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Yo(t, e) {
        return (
          (Yo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Yo(t, e)
        );
      }
      function No(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Ho(t) {
        return (
          (Ho = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Ho(t)
        );
      }
      function Lo(t, e, n) {
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
      var Wo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Yo(t, e);
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
                e = Ho(r);
              if (o) {
                var n = Ho(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Uo(e) && "function" != typeof e)
                  ? No(t)
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
            Lo(No((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Lo(No(t), "incompatibleTokens", ["t", "T", "X"]),
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
                    return Kt(Qt, t);
                  case "xx":
                    return Kt(Ft, t);
                  case "xxxx":
                    return Kt(zt, t);
                  case "xxxxx":
                    return Kt(Gt, t);
                  default:
                    return Kt(Xt, t);
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
              },
            },
          ]) && qo(e.prototype, n),
          a
        );
      })(Mt);
      function Io(t) {
        return (
          (Io =
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
          Io(t)
        );
      }
      function Qo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Fo(t, e) {
        return (
          (Fo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Fo(t, e)
        );
      }
      function zo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Xo(t) {
        return (
          (Xo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Xo(t)
        );
      }
      function Go(t, e, n) {
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
      var Zo = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Fo(t, e);
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
                e = Xo(r);
              if (o) {
                var n = Xo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Io(e) && "function" != typeof e)
                  ? zo(t)
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
            Go(zo((t = i.call.apply(i, [this].concat(n)))), "priority", 40),
            Go(zo(t), "incompatibleTokens", "*"),
            t
          );
        }
        return (
          (e = a),
          (n = [
            {
              key: "parse",
              value: function (t) {
                return $t(t);
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return [new Date(1e3 * n), { timestampIsSet: !0 }];
              },
            },
          ]) && Qo(e.prototype, n),
          a
        );
      })(Mt);
      function Jo(t) {
        return (
          (Jo =
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
          Jo(t)
        );
      }
      function Ko(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function $o(t, e) {
        return (
          ($o =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          $o(t, e)
        );
      }
      function Vo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ti(t) {
        return (
          (ti = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ti(t)
        );
      }
      function ei(t, e, n) {
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
      var ni = (function (t) {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && $o(t, e);
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
                  e = ti(r);
                if (o) {
                  var n = ti(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== Jo(e) && "function" != typeof e)
                    ? Vo(t)
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
              ei(Vo((t = i.call.apply(i, [this].concat(n)))), "priority", 20),
              ei(Vo(t), "incompatibleTokens", "*"),
              t
            );
          }
          return (
            (e = a),
            (n = [
              {
                key: "parse",
                value: function (t) {
                  return $t(t);
                },
              },
              {
                key: "set",
                value: function (t, e, n) {
                  return [new Date(n), { timestampIsSet: !0 }];
                },
              },
            ]) && Ko(e.prototype, n),
            a
          );
        })(Mt),
        ri = {
          G: new Wt(),
          y: new fe(),
          Y: new me(),
          R: new xe(),
          u: new _e(),
          Q: new Ye(),
          q: new Fe(),
          M: new $e(),
          L: new an(),
          w: new yn(),
          I: new wn(),
          d: new jn(),
          D: new Un(),
          E: new Qn(),
          e: new Kn(),
          c: new or(),
          i: new sr(),
          a: new vr(),
          b: new Er(),
          B: new Rr(),
          h: new Nr(),
          H: new zr(),
          K: new Vr(),
          k: new ao(),
          m: new yo(),
          s: new Ao(),
          S: new To(),
          X: new Mo(),
          x: new Wo(),
          t: new Zo(),
          T: new ni(),
        };
      function oi(t) {
        return (
          (oi =
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
          oi(t)
        );
      }
      function ii(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ai(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ai(t, e)
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
      function ai(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var ui = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ci = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        li = /^'([^]*?)'?$/,
        fi = /''/g,
        si = /\S/,
        pi = /[a-zA-Z]/;
      function yi(e, n, r, u) {
        var c, l, f, p, y, d, b, h, m, v, g, w, A, O, C, x, E, k;
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
                          null === (x = C.options) ||
                          void 0 === x
                        ? void 0
                        : x.weekStartsOn) && void 0 !== A
                    ? A
                    : j.weekStartsOn) && void 0 !== w
                ? w
                : null === (E = j.locale) ||
                  void 0 === E ||
                  null === (k = E.options) ||
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
          H = [new Bt()],
          L = T.match(ci)
            .map(function (t) {
              var e = t[0];
              return e in _ ? (0, _[e])(t, P.formatLong) : t;
            })
            .join("")
            .match(ui),
          W = [],
          I = ii(L);
        try {
          var Q = function () {
            var t = Y.value;
            (null != u && u.useAdditionalWeekYearTokens) || !U(t) || q(t, T, e),
              (null != u && u.useAdditionalDayOfYearTokens) ||
                !M(t) ||
                q(t, T, e);
            var n = t[0],
              r = ri[n];
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
              if (n.match(pi))
                throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                    n +
                    "`"
                );
              if (
                ("''" === t
                  ? (t = "'")
                  : "'" === n && (t = t.match(li)[1].replace(fi, "'")),
                0 !== S.indexOf(t))
              )
                return { v: new Date(NaN) };
              S = S.slice(t.length);
            }
          };
          for (I.s(); !(Y = I.n()).done; ) {
            var F = Q();
            if ("object" === oi(F)) return F.v;
          }
        } catch (t) {
          I.e(t);
        } finally {
          I.f();
        }
        if (S.length > 0 && si.test(S)) return new Date(NaN);
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
          $ = ii(z);
        try {
          for ($.s(); !(Z = $.n()).done; ) {
            var V = Z.value;
            if (!V.validate(J, N)) return new Date(NaN);
            var tt = V.set(J, K, N);
            Array.isArray(tt) ? ((J = tt[0]), wt(K, tt[1])) : (J = tt);
          }
        } catch (t) {
          $.e(t);
        } finally {
          $.f();
        }
        return J;
      }
      function di(e, n) {
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
      function bi(e, n) {
        return (
          t(1, arguments),
          (function (e, n, r) {
            t(2, arguments);
            var o = di(e, r),
              i = di(n, r);
            return o.getTime() === i.getTime();
          })(e, Date.now(), n)
        );
      }
      const hi = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = "Inbox"), n.appendChild(r), null != e))
            for (let t = 0; t < e.length; t++)
              if (bi(yi(e[t].dueDate, "MM/dd/yyyy", new Date()))) {
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
        mi = (() => {
          const t = document.querySelector("#right-content"),
            e = () => {
              (t.innerHTML = ht(et.projectStorage, et.taskStorage)), mt();
            },
            n = () => {
              (t.innerHTML = vt(et.projectStorage, et.taskStorage)), gt();
            },
            r = () => {
              (t.innerHTML = hi(et.projectStorage, et.taskStorage)), gt();
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
      mi.init();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxFQUFhRSxVQUFZLEdBQ3ZCLGtCQUNBLGdCQUVGLElBQW9CLEVBR2hCRSxFQUFrQixLQUN0QkosRUFBYUUsVUFBWSxHQUN2QixrQkFDQSxnQkFFRixJQUFvQixFQXVEdEIsTUFBTyxDQUNMRyxLQU5XLEtBQ1hKLElBckJtQixNQUNuQixNQUFNSyxFQUFVM21CLFNBQVNDLGNBQWMsVUFDakMybUIsRUFBVTVtQixTQUFTQyxjQUFjLFVBQ2pDNG1CLEVBQWE3bUIsU0FBU0MsY0FBYyxjQUUxQzBtQixFQUFRM04saUJBQWlCLFNBQVMsS0FDaENzTixHQUFjLElBSWhCTSxFQUFRNU4saUJBQWlCLFNBQVMsS0FDaEN3TixHQUFjLElBR2hCSyxFQUFXN04saUJBQWlCLFNBQVMsS0FDbkN5TixHQUFpQixHQUNqQixFQU1GSyxFQUFjLEVBS2RDLFlBdERrQixLQUNsQkMsTUFBTSxVQUFVLEVBc0RoQkMsZUFsRHNCdFEsSUFDdEIsT0FBUUEsR0FDTixJQUFLLFVBWUwsUUFDRTJQLElBQ0EsTUFWRixJQUFLLFFBQ0hFLElBQ0EsTUFFRixJQUFLLFlBQ0hDLElBTUosRUFtQ0gsRUFwRmUsR0NMaEIsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9TZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9FcmFQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9RdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL01vbnRoUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3NldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPV2Vla1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbERheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPRGF5UGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zZXRVVENJU09EYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvRGF5UGVyaW9kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxdG8xMlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMHRvMjNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjBUbzExUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIxVG8yNFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9NaW51dGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvU2Vjb25kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVXaXRoWlBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9JU09UaW1lem9uZVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBTZWNvbmRzUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luYm94LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXItbW9udGguc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9naXRodWIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZsZXg6IDI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBnYXA6IDVweDtcXG4gIHRvcDogMDtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG5cXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jY29udGVudC1zZWN0aW9uIHtcXG4gIGZsZXg6IDE4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2xlZnQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlYmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMS44O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmxpI2luYm94LFxcbmxpI3RvZGF5LFxcbmxpI3RoaXMtd2VlayxcXG4jYWRkLXByb2plY3QsXFxuI2FkZC10YXNrLWg0LFxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxufVxcblxcbmxpI2luYm94OmhvdmVyLFxcbmxpI3RvZGF5OmhvdmVyLFxcbmxpI3RoaXMtd2Vlazpob3ZlcixcXG4jYWRkLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSNpbmJveCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5saSN0b2RheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5saSN0aGlzLXdlZWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuI2xlZnQtY29udGVudCBoMyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHtcXG4gIGZsZXg6IDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCAjcmlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1kaXYgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1oNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuLFxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWNiN2U7XFxuICBib3JkZXItY29sb3I6ICM4MWNiN2U7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxYWQ5ZTtcXG4gIGJvcmRlci1jb2xvcjogI2QxYWQ5ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtBQUNSOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztFQUtFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBNEM7QUFDOUM7O0FBRUE7RUFDRSx5REFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx5REFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQTJEO0FBQzdEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlEQUEyQztBQUM3Qzs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlEQUEyQztFQUMzQyxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhM2ZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGdhcDogNXB4O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcblxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LXNlY3Rpb24ge1xcbiAgZmxleDogMTg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ViZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxLjg7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxubGkjaW5ib3gsXFxubGkjdG9kYXksXFxubGkjdGhpcy13ZWVrLFxcbiNhZGQtcHJvamVjdCxcXG4jYWRkLXRhc2staDQsXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuXFxubGkjaW5ib3g6aG92ZXIsXFxubGkjdG9kYXk6aG92ZXIsXFxubGkjdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpI2luYm94IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2luYm94LnN2Z1xcXCIpO1xcbn1cXG5cXG5saSN0b2RheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci10b2RheS5zdmdcXFwiKTtcXG59XFxuXFxubGkjdGhpcy13ZWVrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2NhbGVuZGFyLW1vbnRoLnN2Z1xcXCIpO1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IGgzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZm9ybWF0LWxpc3QtYnVsbGV0ZWQuc3ZnXFxcIik7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXFxcIik7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHtcXG4gIGZsZXg6IDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCAjcmlnaHQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNhZGQtdGFzay1kaXYgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1oNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXFxcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuLFxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWNiN2U7XFxuICBib3JkZXItY29sb3I6ICM4MWNiN2U7XFxufVxcblxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxYWQ5ZTtcXG4gIGJvcmRlci1jb2xvcjogI2QxYWQ5ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9naXRodWIuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1ib2R5LXN0eWxlICovXG5cbmNvbnN0IFRhc2sgPSAoaWRObywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICByZXR1cm4geyBpZE5vLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAvLyBjb3B5IGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UgdG8gdGhlIHZhcmlhYmxlcyBpZiB0aGV5IGV4aXN0XG4gIGxldCBwcm9qZWN0U3RvcmFnZSA9IFtdO1xuICBsZXQgdGFza1N0b3JhZ2UgPSBbXTtcblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiKSAhPT0gbnVsbCkge1xuICAgIHByb2plY3RTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIpKTtcbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tTdG9yYWdlXCIpICE9PSBudWxsKSB7XG4gICAgdGFza1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza1N0b3JhZ2VcIikpO1xuICB9XG5cbiAgLy8gY29weSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgdmFyaWFibGVzIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tTdG9yYWdlKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0U3RvcmFnZSkpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0lkTm8sIHByb2plY3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza1N0b3JhZ2VbaV0uaWRObyA9PSB0YXNrSWRObykge1xuICAgICAgICB0YXNrU3RvcmFnZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBkaXNwbGF5LnJlZnJlc2hDb250ZW50KHByb2plY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRpdGxlLCBwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soXG4gICAgICBEYXRlLm5vdygpLCAvLyB1bmlxdWUgaWRcbiAgICAgIHRpdGxlLFxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgIGZvcm1hdChuZXcgRGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiksXG4gICAgICAnbG93JyxcbiAgICAgIHByb2plY3RcbiAgICApO1xuXG4gICAgdGFza1N0b3JhZ2UucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCB0ZXN0SXRlbSA9IFRhc2soXG4gICAgRGF0ZS5ub3coKSxcbiAgICBcIjQgdGVzdCB0aXRsZVwiLFxuICAgIFwiNCB0ZXN0IGRlc2NyaXB0aW9uXCIsXG4gICAgZm9ybWF0KG5ldyBEYXRlKCksIFwiTU0vZGQveXl5eVwiKSxcbiAgICBcIjQgdGVzdCBwcmlvcml0eVwiLFxuICAgIFwiZGVmYXVsdFwiXG4gICk7XG4gIGNvbnNvbGUubG9nKHRlc3RJdGVtKTtcblxuICB0YXNrU3RvcmFnZS5wdXNoKHRlc3RJdGVtKTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0U3RvcmFnZSxcbiAgICB0YXNrU3RvcmFnZSxcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG4gICAgZGVsZXRlVGFzayxcbiAgICBhZGRUYXNrLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgaW5ib3ggPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza3NbaV0uaWRObyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWRpdlwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBhZGRUYXNrSDQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0g0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2staDRcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYWRkVGFza0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGFkZFRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZC10YXNrLWlucHV0Jyk7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idG5cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXRhc2stYnRuXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tJbnB1dCk7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0g0KTtcbiAgICBpbmJveERpdi5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcblxuICAgIHJldHVybiBpbmJveERpdi5vdXRlckhUTUw7XG4gIH07XG5cbiAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpcmNsZS1idG5cIik7XG4gICAgY29uc3QgYWRkVGFza0g0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1oNFwiKTtcbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1kaXZcIik7XG4gICAgY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLXRhc2stYnRuXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJyk7XG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWlucHV0Jyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGRlbGV0ZSB0YXNrXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVGFzayhkYXRhSWQsIFwiZGVmYXVsdFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgdG8gdG9nZ2xlIHRoZSBkaXNwbGF5IG9mIGFkZCB0YXNrIGVsZW1lbnRzXG4gICAgYWRkVGFza0g0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza0g0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGFkZFRhc2tINC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiO1xuICAgICAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHN0b3JhZ2UuYWRkVGFzayhhZGRUYXNrSW5wdXQudmFsdWUsICdkZWZhdWx0Jyk7XG4gICAgICBkaXNwbGF5LnJlZnJlc2hDb250ZW50KCdkZWZhdWx0Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5ib3g7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9kYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBkYXRlTm93ID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiTU0vZGQveXl5eVwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb21wYXJlIGRhdGUgYW5kIGNoZWNrIGlmIGR1ZURhdGUgaXMgZXF1YWwgdG8gdG9kYXlcbiAgICAgICAgaWYgKHRhc2tzW2ldLmR1ZURhdGUgPT0gZGF0ZU5vdykge1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBjYWxsIHRoZSBkZWxldGUgdGFza1xuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRhc2soZGF0YUlkLCBcInRvZGF5XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFRJTUVaT05FX1VOSVRfUFJJT1JJVFkgPSAxMDtcbmV4cG9ydCB2YXIgU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2V0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXR0ZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3ViUHJpb3JpdHlcIiwgMCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2V0dGVyLCBbe1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfdXRjRGF0ZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZXR0ZXI7XG59KCk7XG5leHBvcnQgdmFyIFZhbHVlU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU2V0dGVyKSB7XG4gIF9pbmhlcml0cyhWYWx1ZVNldHRlciwgX1NldHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihWYWx1ZVNldHRlcik7XG5cbiAgZnVuY3Rpb24gVmFsdWVTZXR0ZXIodmFsdWUsIHZhbGlkYXRlVmFsdWUsIHNldFZhbHVlLCBwcmlvcml0eSwgc3ViUHJpb3JpdHkpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWVTZXR0ZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIF90aGlzLnZhbGlkYXRlVmFsdWUgPSB2YWxpZGF0ZVZhbHVlO1xuICAgIF90aGlzLnNldFZhbHVlID0gc2V0VmFsdWU7XG4gICAgX3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIGlmIChzdWJQcmlvcml0eSkge1xuICAgICAgX3RoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmFsdWVTZXR0ZXIsIFt7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKHV0Y0RhdGUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlVmFsdWUodXRjRGF0ZSwgdGhpcy52YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQodXRjRGF0ZSwgZmxhZ3MsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKHV0Y0RhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmFsdWVTZXR0ZXI7XG59KFNldHRlcik7XG5leHBvcnQgdmFyIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU2V0dGVyMikge1xuICBfaW5oZXJpdHMoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIsIF9TZXR0ZXIyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlcik7XG5cbiAgZnVuY3Rpb24gRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJwcmlvcml0eVwiLCBUSU1FWk9ORV9VTklUX1BSSU9SSVRZKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwic3ViUHJpb3JpdHlcIiwgLTEpO1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciwgW3tcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBmbGFncykge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgICAgY29udmVydGVkRGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRhdGUuZ2V0VVRDTW9udGgoKSwgZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgICAgY29udmVydGVkRGF0ZS5zZXRIb3VycyhkYXRlLmdldFVUQ0hvdXJzKCksIGRhdGUuZ2V0VVRDTWludXRlcygpLCBkYXRlLmdldFVUQ1NlY29uZHMoKSwgZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgICByZXR1cm4gY29udmVydGVkRGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXI7XG59KFNldHRlcik7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBWYWx1ZVNldHRlciB9IGZyb20gXCIuL1NldHRlci5qc1wiO1xuZXhwb3J0IHZhciBQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcnNlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFyc2VyLCBbe1xuICAgIGtleTogXCJydW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcnVuKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNldHRlcjogbmV3IFZhbHVlU2V0dGVyKHJlc3VsdC52YWx1ZSwgdGhpcy52YWxpZGF0ZSwgdGhpcy5zZXQsIHRoaXMucHJpb3JpdHksIHRoaXMuc3ViUHJpb3JpdHkpLFxuICAgICAgICByZXN0OiByZXN1bHQucmVzdFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX3V0Y0RhdGUsIF92YWx1ZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXJzZXI7XG59KCk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmV4cG9ydCB2YXIgRXJhUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhFcmFQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRXJhUGFyc2VyKTtcblxuICBmdW5jdGlvbiBFcmFQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVyYVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDE0MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnUicsICd1JywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFcmFQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBBRCwgQkNcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgIGNhc2UgJ0dHJzpcbiAgICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBBLCBCXG5cbiAgICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJhUGFyc2VyO1xufShQYXJzZXIpOyIsImV4cG9ydCB2YXIgbnVtZXJpY1BhdHRlcm5zID0ge1xuICBtb250aDogL14oMVswLTJdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTJcbiAgZGF0ZTogL14oM1swLTFdfFswLTJdP1xcZCkvLFxuICAvLyAwIHRvIDMxXG4gIGRheU9mWWVhcjogL14oMzZbMC02XXwzWzAtNV1cXGR8WzAtMl0/XFxkP1xcZCkvLFxuICAvLyAwIHRvIDM2NlxuICB3ZWVrOiAvXig1WzAtM118WzAtNF0/XFxkKS8sXG4gIC8vIDAgdG8gNTNcbiAgaG91cjIzaDogL14oMlswLTNdfFswLTFdP1xcZCkvLFxuICAvLyAwIHRvIDIzXG4gIGhvdXIyNGg6IC9eKDJbMC00XXxbMC0xXT9cXGQpLyxcbiAgLy8gMCB0byAyNFxuICBob3VyMTFoOiAvXigxWzAtMV18MD9cXGQpLyxcbiAgLy8gMCB0byAxMVxuICBob3VyMTJoOiAvXigxWzAtMl18MD9cXGQpLyxcbiAgLy8gMCB0byAxMlxuICBtaW51dGU6IC9eWzAtNV0/XFxkLyxcbiAgLy8gMCB0byA1OVxuICBzZWNvbmQ6IC9eWzAtNV0/XFxkLyxcbiAgLy8gMCB0byA1OVxuICBzaW5nbGVEaWdpdDogL15cXGQvLFxuICAvLyAwIHRvIDlcbiAgdHdvRGlnaXRzOiAvXlxcZHsxLDJ9LyxcbiAgLy8gMCB0byA5OVxuICB0aHJlZURpZ2l0czogL15cXGR7MSwzfS8sXG4gIC8vIDAgdG8gOTk5XG4gIGZvdXJEaWdpdHM6IC9eXFxkezEsNH0vLFxuICAvLyAwIHRvIDk5OTlcbiAgYW55RGlnaXRzU2lnbmVkOiAvXi0/XFxkKy8sXG4gIHNpbmdsZURpZ2l0U2lnbmVkOiAvXi0/XFxkLyxcbiAgLy8gMCB0byA5LCAtMCB0byAtOVxuICB0d29EaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSwyfS8sXG4gIC8vIDAgdG8gOTksIC0wIHRvIC05OVxuICB0aHJlZURpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDN9LyxcbiAgLy8gMCB0byA5OTksIC0wIHRvIC05OTlcbiAgZm91ckRpZ2l0c1NpZ25lZDogL14tP1xcZHsxLDR9LyAvLyAwIHRvIDk5OTksIC0wIHRvIC05OTk5XG5cbn07XG5leHBvcnQgdmFyIHRpbWV6b25lUGF0dGVybnMgPSB7XG4gIGJhc2ljT3B0aW9uYWxNaW51dGVzOiAvXihbKy1dKShcXGR7Mn0pKFxcZHsyfSk/fFovLFxuICBiYXNpYzogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pfFovLFxuICBiYXNpY09wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pKChcXGR7Mn0pKT98Wi8sXG4gIGV4dGVuZGVkOiAvXihbKy1dKShcXGR7Mn0pOihcXGR7Mn0pfFovLFxuICBleHRlbmRlZE9wdGlvbmFsU2Vjb25kczogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KSg6KFxcZHsyfSkpP3xaL1xufTsiLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSwgbWlsbGlzZWNvbmRzSW5TZWNvbmQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZShwYXJzZUZuUmVzdWx0LCBtYXBGbikge1xuICBpZiAoIXBhcnNlRm5SZXN1bHQpIHtcbiAgICByZXR1cm4gcGFyc2VGblJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IG1hcEZuKHBhcnNlRm5SZXN1bHQudmFsdWUpLFxuICAgIHJlc3Q6IHBhcnNlRm5SZXN1bHQucmVzdFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtZXJpY1BhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHBhcnNlSW50KG1hdGNoUmVzdWx0WzBdLCAxMCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lem9uZVBhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBkYXRlU3RyaW5nLm1hdGNoKHBhdHRlcm4pO1xuXG4gIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBJbnB1dCBpcyAnWidcblxuXG4gIGlmIChtYXRjaFJlc3VsdFswXSA9PT0gJ1onKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZSgxKVxuICAgIH07XG4gIH1cblxuICB2YXIgc2lnbiA9IG1hdGNoUmVzdWx0WzFdID09PSAnKycgPyAxIDogLTE7XG4gIHZhciBob3VycyA9IG1hdGNoUmVzdWx0WzJdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbMl0sIDEwKSA6IDA7XG4gIHZhciBtaW51dGVzID0gbWF0Y2hSZXN1bHRbM10gPyBwYXJzZUludChtYXRjaFJlc3VsdFszXSwgMTApIDogMDtcbiAgdmFyIHNlY29uZHMgPSBtYXRjaFJlc3VsdFs1XSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzVdLCAxMCkgOiAwO1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIG1pbGxpc2Vjb25kc0luU2Vjb25kKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aClcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFueURpZ2l0c1NpZ25lZChkYXRlU3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5hbnlEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0cyhuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzLCBkYXRlU3RyaW5nKTtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cCgnXlxcXFxkezEsJyArIG4gKyAnfScpLCBkYXRlU3RyaW5nKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0c1NpZ25lZChuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdFNpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudHdvRGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obmV3IFJlZ0V4cCgnXi0/XFxcXGR7MSwnICsgbiArICd9JyksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGF5UGVyaW9kRW51bVRvSG91cnMoZGF5UGVyaW9kKSB7XG4gIHN3aXRjaCAoZGF5UGVyaW9kKSB7XG4gICAgY2FzZSAnbW9ybmluZyc6XG4gICAgICByZXR1cm4gNDtcblxuICAgIGNhc2UgJ2V2ZW5pbmcnOlxuICAgICAgcmV0dXJuIDE3O1xuXG4gICAgY2FzZSAncG0nOlxuICAgIGNhc2UgJ25vb24nOlxuICAgIGNhc2UgJ2FmdGVybm9vbic6XG4gICAgICByZXR1cm4gMTI7XG5cbiAgICBjYXNlICdhbSc6XG4gICAgY2FzZSAnbWlkbmlnaHQnOlxuICAgIGNhc2UgJ25pZ2h0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUd29EaWdpdFllYXIodHdvRGlnaXRZZWFyLCBjdXJyZW50WWVhcikge1xuICB2YXIgaXNDb21tb25FcmEgPSBjdXJyZW50WWVhciA+IDA7IC8vIEFic29sdXRlIG51bWJlciBvZiB0aGUgY3VycmVudCB5ZWFyOlxuICAvLyAxIC0+IDEgQUNcbiAgLy8gMCAtPiAxIEJDXG4gIC8vIC0xIC0+IDIgQkNcblxuICB2YXIgYWJzQ3VycmVudFllYXIgPSBpc0NvbW1vbkVyYSA/IGN1cnJlbnRZZWFyIDogMSAtIGN1cnJlbnRZZWFyO1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmIChhYnNDdXJyZW50WWVhciA8PSA1MCkge1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciB8fCAxMDA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJhbmdlRW5kID0gYWJzQ3VycmVudFllYXIgKyA1MDtcbiAgICB2YXIgcmFuZ2VFbmRDZW50dXJ5ID0gTWF0aC5mbG9vcihyYW5nZUVuZCAvIDEwMCkgKiAxMDA7XG4gICAgdmFyIGlzUHJldmlvdXNDZW50dXJ5ID0gdHdvRGlnaXRZZWFyID49IHJhbmdlRW5kICUgMTAwO1xuICAgIHJlc3VsdCA9IHR3b0RpZ2l0WWVhciArIHJhbmdlRW5kQ2VudHVyeSAtIChpc1ByZXZpb3VzQ2VudHVyeSA/IDEwMCA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29tbW9uRXJhID8gcmVzdWx0IDogMSAtIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbi8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfUGF0dGVybnNcbi8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbi8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbi8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbi8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbi8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbi8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbi8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbmV4cG9ydCB2YXIgWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAndScsICd3JywgJ0knLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gJ3l5J1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDQsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBjYXNlICd5byc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuaXNUd29EaWdpdFllYXIgfHwgdmFsdWUueWVhciA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgY3VycmVudFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cbiAgICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih2YWx1ZS55ZWFyLCBjdXJyZW50WWVhcik7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIobm9ybWFsaXplZFR3b0RpZ2l0WWVhciwgMCwgMSk7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgeWVhciA9ICEoJ2VyYScgaW4gZmxhZ3MpIHx8IGZsYWdzLmVyYSA9PT0gMSA/IHZhbHVlLnllYXIgOiAxIC0gdmFsdWUueWVhcjtcbiAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFllYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBtYXBWYWx1ZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbi8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCB2YXIgTG9jYWxXZWVrWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxXZWVrWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihMb2NhbFdlZWtZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBMb2NhbFdlZWtZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbFdlZWtZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdRJywgJ3EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ2knLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsV2Vla1llYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gJ1lZJ1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdZJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDQsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBjYXNlICdZbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuaXNUd29EaWdpdFllYXIgfHwgdmFsdWUueWVhciA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgY3VycmVudFllYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHZhbHVlLmlzVHdvRGlnaXRZZWFyKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkVHdvRGlnaXRZZWFyID0gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHZhbHVlLnllYXIsIGN1cnJlbnRZZWFyKTtcbiAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcihub3JtYWxpemVkVHdvRGlnaXRZZWFyLCAwLCBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHllYXIgPSAhKCdlcmEnIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvY2FsV2Vla1llYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG5cbmV4cG9ydCB2YXIgSVNPV2Vla1llYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT1dlZWtZZWFyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1dlZWtZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09XZWVrWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPV2Vla1llYXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0cnLCAneScsICdZJywgJ3UnLCAnUScsICdxJywgJ00nLCAnTCcsICd3JywgJ2QnLCAnRCcsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT1dlZWtZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgICAgaWYgKHRva2VuID09PSAnUicpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgZmlyc3RXZWVrT2ZZZWFyID0gbmV3IERhdGUoMCk7XG4gICAgICBmaXJzdFdlZWtPZlllYXIuc2V0VVRDRnVsbFllYXIodmFsdWUsIDAsIDQpO1xuICAgICAgZmlyc3RXZWVrT2ZZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1dlZWtZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRXh0ZW5kZWRZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhFeHRlbmRlZFllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRXh0ZW5kZWRZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBFeHRlbmRlZFllYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGVkWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnRycsICd5JywgJ1knLCAnUicsICd3JywgJ0knLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV4dGVuZGVkWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbiA9PT0gJ3UnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQoNCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXh0ZW5kZWRZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgUXVhcnRlclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoUXVhcnRlclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihRdWFydGVyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBRdWFydGVyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBRdWFydGVyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTIwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdNJywgJ0wnLCAndycsICdJJywgJ2QnLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUXVhcnRlclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgICAgY2FzZSAnUW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBRdWFydGVyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lUXVhcnRlclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMjApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdRJywgJ00nLCAnTCcsICd3JywgJ0knLCAnZCcsICdEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lUXVhcnRlclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgICAgY2FzZSAncW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgICAgY2FzZSAncXFxcSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lUXVhcnRlclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuZXhwb3J0IHZhciBNb250aFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTW9udGhQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTW9udGhQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIE1vbnRoUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb250aFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAnTCcsICd3JywgJ0knLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTEwKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb250aFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gMTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgICAgY2FzZSAnTW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb250aFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzLCBtYXBWYWx1ZSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBTdGFuZEFsb25lTW9udGhQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVNb250aFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lTW9udGhQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFN0YW5kQWxvbmVNb250aFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZU1vbnRoUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTEwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ00nLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YW5kQWxvbmVNb250aFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gMTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgICAgY2FzZSAnTEwnOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgICAgY2FzZSAnTG8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgICAgY2FzZSAnTExMTCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgodmFsdWUsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lTW9udGhQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7IC8vIExvY2FsIHdlZWsgb2YgeWVhclxuXG5leHBvcnQgdmFyIExvY2FsV2Vla1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxXZWVrUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKExvY2FsV2Vla1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxXZWVrUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbFdlZWtQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnUicsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAnSScsICdkJywgJ0QnLCAnaScsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxXZWVrUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLndlZWssIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3dvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoc2V0VVRDV2VlayhkYXRlLCB2YWx1ZSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbFdlZWtQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eVdlZWssIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB3ZWVrID0gdG9JbnRlZ2VyKGRpcnR5V2Vlayk7XG4gIHZhciBkaWZmID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKSAtIHdlZWs7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIElTTyB3ZWVrIG9mIHllYXJcblxuZXhwb3J0IHZhciBJU09XZWVrUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09XZWVrUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1dlZWtQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1dlZWtQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1dlZWtQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnWScsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09XZWVrUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLndlZWssIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0lvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhcnRPZlVUQ0lTT1dlZWsoc2V0VVRDSVNPV2VlayhkYXRlLCB2YWx1ZSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09XZWVrUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENJU09XZWVrKGRpcnR5RGF0ZSwgZGlydHlJU09XZWVrKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgaXNvV2VlayA9IHRvSW50ZWdlcihkaXJ0eUlTT1dlZWspO1xuICB2YXIgZGlmZiA9IGdldFVUQ0lTT1dlZWsoZGF0ZSkgLSBpc29XZWVrO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBpc0xlYXBZZWFySW5kZXgsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xudmFyIERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG52YXIgREFZU19JTl9NT05USF9MRUFQX1lFQVIgPSBbMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07IC8vIERheSBvZiB0aGUgbW9udGhcblxuZXhwb3J0IHZhciBEYXRlUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXRlUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERhdGVQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERhdGVQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3ViUHJpb3JpdHlcIiwgMSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnUScsICd3JywgJ0knLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0ZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXRlLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdkbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKGRhdGUsIHZhbHVlKSB7XG4gICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIHZhciBpc0xlYXBZZWFyID0gaXNMZWFwWWVhckluZGV4KHllYXIpO1xuICAgICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgICBpZiAoaXNMZWFwWWVhcikge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIX0xFQVBfWUVBUlttb250aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIW21vbnRoXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0RhdGUodmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXRlUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMsIGlzTGVhcFllYXJJbmRleCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBEYXlPZlllYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKERheU9mWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXlPZlllYXJQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERheU9mWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF5T2ZZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN1YnByaW9yaXR5XCIsIDEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAnTScsICdMJywgJ3cnLCAnSScsICdkJywgJ0UnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERheU9mWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBjYXNlICdERCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmRheU9mWWVhciwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnRG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICB2YXIgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcblxuICAgICAgaWYgKGlzTGVhcFllYXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY1O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoMCwgdmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlPZlllYXJQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ0RheShkaXJ0eURhdGUsIGRpcnR5RGF5LCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gdG9JbnRlZ2VyKGRpcnR5RGF5KTtcbiAgdmFyIGN1cnJlbnREYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIERheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgRGF5UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXlQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBUdWVcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgIGNhc2UgJ0VFJzpcbiAgICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUXG5cbiAgICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1XG5cbiAgICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdWVzZGF5XG5cbiAgICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgZGF0ZSA9IHNldFVUQ0RheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERheVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0RheSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zZXRVVENEYXkvaW5kZXguanNcIjsgLy8gTG9jYWwgZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBMb2NhbERheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTG9jYWxEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTG9jYWxEYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ0UnLCAnaScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbERheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdmFyIHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgICByZXR1cm4gKHZhbHVlICsgb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA2KSAlIDcgKyB3aG9sZVdlZWtEYXlzO1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAzXG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICBjYXNlICdlZSc6XG4gICAgICAgICAgLy8gMDNcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAzcmRcblxuICAgICAgICBjYXNlICdlbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbERheVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHNldFVUQ0RheSBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zZXRVVENEYXkvaW5kZXguanNcIjsgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnUicsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAnSScsICdkJywgJ0QnLCAnRScsICdpJywgJ2UnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgdmFyIHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgICByZXR1cm4gKHZhbHVlICsgb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA2KSAlIDcgKyB3aG9sZVdlZWtEYXlzO1xuICAgICAgfTtcblxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAzXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICdjYyc6XG4gICAgICAgICAgLy8gMDNcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyAzcmRcblxuICAgICAgICBjYXNlICdjbyc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENJU09EYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDSVNPRGF5L2luZGV4LmpzXCI7IC8vIElTTyBkYXkgb2Ygd2Vla1xuXG5leHBvcnQgdmFyIElTT0RheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT0RheVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSVNPRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09EYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdZJywgJ3UnLCAncScsICdRJywgJ00nLCAnTCcsICd3JywgJ2QnLCAnRCcsICdFJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPRGF5UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gNztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gMlxuICAgICAgICBjYXNlICdpJzpcbiAgICAgICAgY2FzZSAnaWknOlxuICAgICAgICAgIC8vIDAyXG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgICAvLyAybmRcblxuICAgICAgICBjYXNlICdpbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlXG5cbiAgICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVzZGF5XG5cbiAgICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA3O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENJU09EYXkoZGF0ZSwgdmFsdWUpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09EYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VVRDSVNPRGF5KGRpcnR5RGF0ZSwgZGlydHlEYXkpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXkgPSB0b0ludGVnZXIoZGlydHlEYXkpO1xuXG4gIGlmIChkYXkgJSA3ID09PSAwKSB7XG4gICAgZGF5ID0gZGF5IC0gNztcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgY3VycmVudERheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciByZW1haW5kZXIgPSBkYXkgJSA3O1xuICB2YXIgZGF5SW5kZXggPSAocmVtYWluZGVyICsgNykgJSA3O1xuICB2YXIgZGlmZiA9IChkYXlJbmRleCA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIGN1cnJlbnREYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgQU1QTVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoQU1QTVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBTVBNUGFyc2VyKTtcblxuICBmdW5jdGlvbiBBTVBNUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBTVBNUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2InLCAnQicsICdIJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFNUE1QYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnYWEnOlxuICAgICAgICBjYXNlICdhYWEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBTVBNUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBBTVBNTWlkbmlnaHRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEFNUE1NaWRuaWdodFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBTVBNTWlkbmlnaHRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEFNUE1NaWRuaWdodFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQU1QTU1pZG5pZ2h0UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnQicsICdIJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFNUE1NaWRuaWdodFBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ2InOlxuICAgICAgICBjYXNlICdiYic6XG4gICAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlICdiYmJiJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFNUE1NaWRuaWdodFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjsgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuXG5leHBvcnQgdmFyIERheVBlcmlvZFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF5UGVyaW9kUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERheVBlcmlvZFBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRGF5UGVyaW9kUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXlQZXJpb2RQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA4MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnYScsICdiJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlQZXJpb2RQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgY2FzZSAnQkInOlxuICAgICAgICBjYXNlICdCQkInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnQkJCQic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlQZXJpb2RQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMXRvMTJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIxdG8xMlBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMXRvMTJQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIxdG8xMlBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjF0bzEyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0gnLCAnSycsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMXRvMTJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjEyaCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnaG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDEyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBpc1BNID0gZGF0ZS5nZXRVVENIb3VycygpID49IDEyO1xuXG4gICAgICBpZiAoaXNQTSAmJiB2YWx1ZSA8IDEyKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUgKyAxMiwgMCwgMCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKCFpc1BNICYmIHZhbHVlID09PSAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMXRvMTJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMHRvMjNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIwdG8yM1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMHRvMjNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIwdG8yM1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjB0bzIzUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICdoJywgJ0snLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjB0bzIzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyM2gsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0hvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMHRvMjNQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMFRvMTFQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIwVG8xMVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMFRvMTFQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIwVG8xMVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjBUbzExUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2gnLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMFRvMTFQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjExaCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnS28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBpc1BNID0gZGF0ZS5nZXRVVENIb3VycygpID49IDEyO1xuXG4gICAgICBpZiAoaXNQTSAmJiB2YWx1ZSA8IDEyKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUgKyAxMiwgMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhvdXIwVG8xMVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEhvdXIxVG8yNFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSG91cjFUbzI0UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhvdXIxVG8yNFBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSG91cjFUbzI0UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb3VyMVRvMjRQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA3MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnYScsICdiJywgJ2gnLCAnSCcsICdLJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIb3VyMVRvMjRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdrJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuaG91cjI0aCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAna28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDI0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHZhciBob3VycyA9IHZhbHVlIDw9IDI0ID8gdmFsdWUgJSAyNCA6IHZhbHVlO1xuICAgICAgZGF0ZS5zZXRVVENIb3Vycyhob3VycywgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjFUbzI0UGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgTWludXRlUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhNaW51dGVQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWludXRlUGFyc2VyKTtcblxuICBmdW5jdGlvbiBNaW51dGVQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbnV0ZVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDYwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWludXRlUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1pbnV0ZSwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnbW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW51dGVQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBTZWNvbmRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFNlY29uZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWNvbmRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFNlY29uZFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Vjb25kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWNvbmRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2Vjb25kLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdzbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA1OTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlY29uZFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhGcmFjdGlvbk9mU2Vjb25kUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUgKiBNYXRoLnBvdygxMCwgLXRva2VuLmxlbmd0aCArIDMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENNaWxsaXNlY29uZHModmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiOyAvLyBUaW1lem9uZSAoSVNPLTg2MDEuICswMDowMCBpcyBgJ1onYClcblxuZXhwb3J0IHZhciBJU09UaW1lem9uZVdpdGhaUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09UaW1lem9uZVdpdGhaUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1RpbWV6b25lV2l0aFpQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1RpbWV6b25lV2l0aFpQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1RpbWV6b25lV2l0aFpQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJywgJ3gnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPVGltZXpvbmVXaXRoWlBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbE1pbnV0ZXMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5iYXNpYywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnWFhYJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBpZiAoZmxhZ3MudGltZXN0YW1wSXNTZXQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPVGltZXpvbmVXaXRoWlBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgdGltZXpvbmVQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlVGltZXpvbmVQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7IC8vIFRpbWV6b25lIChJU08tODYwMSlcblxuZXhwb3J0IHZhciBJU09UaW1lem9uZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPVGltZXpvbmVQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSVNPVGltZXpvbmVQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT1RpbWV6b25lUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09UaW1lem9uZVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnLCAnWCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09UaW1lem9uZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbE1pbnV0ZXMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5iYXNpYywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAneHh4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcywgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAneHh4JzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBpZiAoZmxhZ3MudGltZXN0YW1wSXNTZXQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPVGltZXpvbmVQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFRpbWVzdGFtcFNlY29uZHNQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVGltZXN0YW1wU2Vjb25kc1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gVGltZXN0YW1wU2Vjb25kc1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXN0YW1wU2Vjb25kc1BhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDQwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgJyonKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaW1lc3RhbXBTZWNvbmRzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nKSB7XG4gICAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoX2RhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUgKiAxMDAwKSwge1xuICAgICAgICB0aW1lc3RhbXBJc1NldDogdHJ1ZVxuICAgICAgfV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVzdGFtcFNlY29uZHNQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlQW55RGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcik7XG5cbiAgZnVuY3Rpb24gVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAyMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsICcqJyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nKSB7XG4gICAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoX2RhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbbmV3IERhdGUodmFsdWUpLCB7XG4gICAgICAgIHRpbWVzdGFtcElzU2V0OiB0cnVlXG4gICAgICB9XTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB7IEVyYVBhcnNlciB9IGZyb20gXCIuL0VyYVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgWWVhclBhcnNlciB9IGZyb20gXCIuL1llYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbFdlZWtZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09XZWVrWWVhclBhcnNlciB9IGZyb20gXCIuL0lTT1dlZWtZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBFeHRlbmRlZFllYXJQYXJzZXIgfSBmcm9tIFwiLi9FeHRlbmRlZFllYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IFF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9RdWFydGVyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lUXVhcnRlclBhcnNlciB9IGZyb20gXCIuL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBNb250aFBhcnNlciB9IGZyb20gXCIuL01vbnRoUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTdGFuZEFsb25lTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9TdGFuZEFsb25lTW9udGhQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsV2Vla1BhcnNlciB9IGZyb20gXCIuL0xvY2FsV2Vla1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1BhcnNlciB9IGZyb20gXCIuL0lTT1dlZWtQYXJzZXIuanNcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi9EYXRlUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlPZlllYXJQYXJzZXIgfSBmcm9tIFwiLi9EYXlPZlllYXJQYXJzZXIuanNcIjtcbmltcG9ydCB7IERheVBhcnNlciB9IGZyb20gXCIuL0RheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTG9jYWxEYXlQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbERheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09EYXlQYXJzZXIgfSBmcm9tIFwiLi9JU09EYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IEFNUE1QYXJzZXIgfSBmcm9tIFwiLi9BTVBNUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBBTVBNTWlkbmlnaHRQYXJzZXIgfSBmcm9tIFwiLi9BTVBNTWlkbmlnaHRQYXJzZXIuanNcIjtcbmltcG9ydCB7IERheVBlcmlvZFBhcnNlciB9IGZyb20gXCIuL0RheVBlcmlvZFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjF0bzEyUGFyc2VyIH0gZnJvbSBcIi4vSG91cjF0bzEyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBIb3VyMHRvMjNQYXJzZXIgfSBmcm9tIFwiLi9Ib3VyMHRvMjNQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIwVG8xMVBhcnNlciB9IGZyb20gXCIuL0hvdXIwVG8xMVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjFUbzI0UGFyc2VyIH0gZnJvbSBcIi4vSG91cjFUbzI0UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBNaW51dGVQYXJzZXIgfSBmcm9tIFwiLi9NaW51dGVQYXJzZXIuanNcIjtcbmltcG9ydCB7IFNlY29uZFBhcnNlciB9IGZyb20gXCIuL1NlY29uZFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRnJhY3Rpb25PZlNlY29uZFBhcnNlciB9IGZyb20gXCIuL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIuanNcIjtcbmltcG9ydCB7IElTT1RpbWV6b25lV2l0aFpQYXJzZXIgfSBmcm9tIFwiLi9JU09UaW1lem9uZVdpdGhaUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVBhcnNlciB9IGZyb20gXCIuL0lTT1RpbWV6b25lUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vVGltZXN0YW1wU2Vjb25kc1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyIH0gZnJvbSBcIi4vVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBwYXJzZWAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKi9cblxuZXhwb3J0IHZhciBwYXJzZXJzID0ge1xuICBHOiBuZXcgRXJhUGFyc2VyKCksXG4gIHk6IG5ldyBZZWFyUGFyc2VyKCksXG4gIFk6IG5ldyBMb2NhbFdlZWtZZWFyUGFyc2VyKCksXG4gIFI6IG5ldyBJU09XZWVrWWVhclBhcnNlcigpLFxuICB1OiBuZXcgRXh0ZW5kZWRZZWFyUGFyc2VyKCksXG4gIFE6IG5ldyBRdWFydGVyUGFyc2VyKCksXG4gIHE6IG5ldyBTdGFuZEFsb25lUXVhcnRlclBhcnNlcigpLFxuICBNOiBuZXcgTW9udGhQYXJzZXIoKSxcbiAgTDogbmV3IFN0YW5kQWxvbmVNb250aFBhcnNlcigpLFxuICB3OiBuZXcgTG9jYWxXZWVrUGFyc2VyKCksXG4gIEk6IG5ldyBJU09XZWVrUGFyc2VyKCksXG4gIGQ6IG5ldyBEYXRlUGFyc2VyKCksXG4gIEQ6IG5ldyBEYXlPZlllYXJQYXJzZXIoKSxcbiAgRTogbmV3IERheVBhcnNlcigpLFxuICBlOiBuZXcgTG9jYWxEYXlQYXJzZXIoKSxcbiAgYzogbmV3IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcigpLFxuICBpOiBuZXcgSVNPRGF5UGFyc2VyKCksXG4gIGE6IG5ldyBBTVBNUGFyc2VyKCksXG4gIGI6IG5ldyBBTVBNTWlkbmlnaHRQYXJzZXIoKSxcbiAgQjogbmV3IERheVBlcmlvZFBhcnNlcigpLFxuICBoOiBuZXcgSG91cjF0bzEyUGFyc2VyKCksXG4gIEg6IG5ldyBIb3VyMHRvMjNQYXJzZXIoKSxcbiAgSzogbmV3IEhvdXIwVG8xMVBhcnNlcigpLFxuICBrOiBuZXcgSG91cjFUbzI0UGFyc2VyKCksXG4gIG06IG5ldyBNaW51dGVQYXJzZXIoKSxcbiAgczogbmV3IFNlY29uZFBhcnNlcigpLFxuICBTOiBuZXcgRnJhY3Rpb25PZlNlY29uZFBhcnNlcigpLFxuICBYOiBuZXcgSVNPVGltZXpvbmVXaXRoWlBhcnNlcigpLFxuICB4OiBuZXcgSVNPVGltZXpvbmVQYXJzZXIoKSxcbiAgdDogbmV3IFRpbWVzdGFtcFNlY29uZHNQYXJzZXIoKSxcbiAgVDogbmV3IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcigpXG59OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciB9IGZyb20gXCIuL19saWIvU2V0dGVyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZXJzIH0gZnJvbSBcIi4vX2xpYi9wYXJzZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciBub3RXaGl0ZXNwYWNlUmVnRXhwID0gL1xcUy87XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbc2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGVTdHJpbmcgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0U3RyaW5nIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IHJlZmVyZW5jZURhdGUgLSBkZWZpbmVzIHZhbHVlcyBtaXNzaW5nIGZyb20gdGhlIHBhcnNlZCBkYXRlU3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAzIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYG1hdGNoYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2UoZGlydHlEYXRlU3RyaW5nLCBkaXJ0eUZvcm1hdFN0cmluZywgZGlydHlSZWZlcmVuY2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygzLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZVN0cmluZyA9IFN0cmluZyhkaXJ0eURhdGVTdHJpbmcpO1xuICB2YXIgZm9ybWF0U3RyaW5nID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyaW5nKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5tYXRjaCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIG1hdGNoIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJycpIHtcbiAgICBpZiAoZGF0ZVN0cmluZyA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0b0RhdGUoZGlydHlSZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN1YkZuT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZVxuICB9OyAvLyBJZiB0aW1lem9uZSBpc24ndCBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgc2V0IHRvIHRoZSBzeXN0ZW0gdGltZXpvbmVcblxuICB2YXIgc2V0dGVycyA9IFtuZXcgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIoKV07XG4gIHZhciB0b2tlbnMgPSBmb3JtYXRTdHJpbmcubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuICB2YXIgdXNlZFRva2VucyA9IFtdO1xuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0b2tlbnMpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHJpbmcsIGRpcnR5RGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyaW5nLCBkaXJ0eURhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICAgIHZhciBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgICAgaWYgKHBhcnNlcikge1xuICAgICAgICB2YXIgaW5jb21wYXRpYmxlVG9rZW5zID0gcGFyc2VyLmluY29tcGF0aWJsZVRva2VucztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpbmNvbXBhdGlibGVUb2tlbnMpKSB7XG4gICAgICAgICAgdmFyIGluY29tcGF0aWJsZVRva2VuID0gdXNlZFRva2Vucy5maW5kKGZ1bmN0aW9uICh1c2VkVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBpbmNvbXBhdGlibGVUb2tlbnMuaW5jbHVkZXModXNlZFRva2VuLnRva2VuKSB8fCB1c2VkVG9rZW4udG9rZW4gPT09IGZpcnN0Q2hhcmFjdGVyO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGluY29tcGF0aWJsZVRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgXCIuY29uY2F0KGluY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbiwgXCJgIGFuZCBgXCIpLmNvbmNhdCh0b2tlbiwgXCJgIGF0IHRoZSBzYW1lIHRpbWVcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZXIuaW5jb21wYXRpYmxlVG9rZW5zID09PSAnKicgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYFwiLmNvbmNhdCh0b2tlbiwgXCJgIGFuZCBhbnkgb3RoZXIgdG9rZW4gYXQgdGhlIHNhbWUgdGltZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB1c2VkVG9rZW5zLnB1c2goe1xuICAgICAgICAgIHRva2VuOiBmaXJzdENoYXJhY3RlcixcbiAgICAgICAgICBmdWxsVG9rZW46IHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcGFyc2VSZXN1bHQgPSBwYXJzZXIucnVuKGRhdGVTdHJpbmcsIHRva2VuLCBsb2NhbGUubWF0Y2gsIHN1YkZuT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBuZXcgRGF0ZShOYU4pXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHRlcnMucHVzaChwYXJzZVJlc3VsdC5zZXR0ZXIpO1xuICAgICAgICBkYXRlU3RyaW5nID0gcGFyc2VSZXN1bHQucmVzdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgICAgICB9IC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcblxuXG4gICAgICAgIGlmICh0b2tlbiA9PT0gXCInJ1wiKSB7XG4gICAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgICB0b2tlbiA9IGNsZWFuRXNjYXBlZFN0cmluZyh0b2tlbik7XG4gICAgICAgIH0gLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG5cblxuICAgICAgICBpZiAoZGF0ZVN0cmluZy5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKHRva2VuLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IG5ldyBEYXRlKE5hTilcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKCk7XG5cbiAgICAgIGlmIChfdHlwZW9mKF9yZXQpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH0gLy8gQ2hlY2sgaWYgdGhlIHJlbWFpbmluZyBpbnB1dCBjb250YWlucyBzb21ldGhpbmcgb3RoZXIgdGhhbiB3aGl0ZXNwYWNlXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cmluZykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB1bmlxdWVQcmlvcml0eVNldHRlcnMgPSBzZXR0ZXJzLm1hcChmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgcmV0dXJuIHNldHRlci5wcmlvcml0eTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiIC0gYTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YocHJpb3JpdHkpID09PSBpbmRleDtcbiAgfSkubWFwKGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgIHJldHVybiBzZXR0ZXJzLmZpbHRlcihmdW5jdGlvbiAoc2V0dGVyKSB7XG4gICAgICByZXR1cm4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYi5zdWJQcmlvcml0eSAtIGEuc3ViUHJpb3JpdHk7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAoc2V0dGVyQXJyYXkpIHtcbiAgICByZXR1cm4gc2V0dGVyQXJyYXlbMF07XG4gIH0pO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eVJlZmVyZW5jZURhdGUpO1xuXG4gIGlmIChpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cblxuXG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKGRhdGUsIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkpO1xuICB2YXIgZmxhZ3MgPSB7fTtcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHVuaXF1ZVByaW9yaXR5U2V0dGVycyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIHNldHRlciA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgaWYgKCFzZXR0ZXIudmFsaWRhdGUodXRjRGF0ZSwgc3ViRm5PcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHNldHRlci5zZXQodXRjRGF0ZSwgZmxhZ3MsIHN1YkZuT3B0aW9ucyk7IC8vIFJlc3VsdCBpcyB0dXBsZSAoZGF0ZSwgZmxhZ3MpXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgdXRjRGF0ZSA9IHJlc3VsdFswXTtcbiAgICAgICAgYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pOyAvLyBSZXN1bHQgaXMgZGF0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRjRGF0ZSA9IHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG5cbiAgcmV0dXJuIHV0Y0RhdGU7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IGZvcm1hdCwgaXNUaGlzV2VlaywgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdGhpc1dlZWsgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29udGVudCA9IChwcm9qZWN0cywgdGFza3MpID0+IHtcbiAgICBjb25zdCBpbmJveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5ib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyaWdodC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHBhcnNlIHRoZSBkYXRlIHN0cmluZyBiYWNrIHRvIElTT1xuICAgICAgICBjb25zdCBkYXRlTm93ID0gcGFyc2UodGFza3NbaV0uZHVlRGF0ZSwgXCJNTS9kZC95eXl5XCIsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgIGlmIChpc1RoaXNXZWVrKGRhdGVOb3cpKSB7XG4gICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGl2XCIpO1xuXG4gICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjaXJjbGUtYnRuXCIpO1xuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRhc2tzW2ldLmlkTm8pO1xuXG4gICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRpdGxlO1xuXG4gICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG5cbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cbiAgICAgICAgICBpbmJveERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmJveERpdi5vdXRlckhUTUw7XG4gIH07XG5cbiAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpcmNsZS1idG5cIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGRlbGV0ZSB0YXNrXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVGFzayhkYXRhSWQsIFwidGhpcy13ZWVrXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheUNvbnRlbnQsIHNldExpc3RlbmVycyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGhpc1dlZWs7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgaW5ib3ggZnJvbSBcIi4vaW5ib3hcIjtcbmltcG9ydCB0b2RheSBmcm9tIFwiLi90b2RheVwiO1xuaW1wb3J0IHRoaXNXZWVrIGZyb20gXCIuL3RoaXNXZWVrXCI7XG5cbmNvbnN0IGRpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCByaWdodENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpZ2h0LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgZGlzcGxheUluYm94ID0gKCkgPT4ge1xuICAgIHJpZ2h0Q29udGVudC5pbm5lckhUTUwgPSBpbmJveC5kaXNwbGF5Q29udGVudChcbiAgICAgIHN0b3JhZ2UucHJvamVjdFN0b3JhZ2UsXG4gICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlXG4gICAgKTtcbiAgICBpbmJveC5zZXRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VG9kYXkgPSAoKSA9PiB7XG4gICAgcmlnaHRDb250ZW50LmlubmVySFRNTCA9IHRvZGF5LmRpc3BsYXlDb250ZW50KFxuICAgICAgc3RvcmFnZS5wcm9qZWN0U3RvcmFnZSxcbiAgICAgIHN0b3JhZ2UudGFza1N0b3JhZ2VcbiAgICApO1xuICAgIHRvZGF5LnNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUaGlzV2VlayA9ICgpID0+IHtcbiAgICByaWdodENvbnRlbnQuaW5uZXJIVE1MID0gdGhpc1dlZWsuZGlzcGxheUNvbnRlbnQoXG4gICAgICBzdG9yYWdlLnByb2plY3RTdG9yYWdlLFxuICAgICAgc3RvcmFnZS50YXNrU3RvcmFnZVxuICAgICk7XG4gICAgdG9kYXkuc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdGVzdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJzdWNjZXNzXCIpO1xuICB9O1xuXG4gIC8vIHJlZGlzcGxheXMgdGhlIGN1cnJlbnQgY29udGVudFxuICBjb25zdCByZWZyZXNoQ29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgc3dpdGNoIChwcm9qZWN0KSB7XG4gICAgICBjYXNlIFwiZGVmYXVsdFwiOlxuICAgICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICBkaXNwbGF5VG9kYXkoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0aGlzLXdlZWtcIjpcbiAgICAgICAgZGlzcGxheVRoaXNXZWVrKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG5cblxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG4gICAgY29uc3QgdG9kYXlMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG4gICAgY29uc3QgdGhpc1dlZWtMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhpcy13ZWVrXCIpO1xuXG4gICAgaW5ib3hMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheUluYm94KCk7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNwbGF5IHRvZGF5IHdoZW4gY2xpY2tlZFxuICAgIHRvZGF5TGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXlUb2RheSgpO1xuICAgIH0pO1xuXG4gICAgdGhpc1dlZWtMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRoaXNXZWVrKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gaW5pdGlhbGl6ZVxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGRpc3BsYXlJbmJveCgpO1xuICAgIHNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICB0ZXN0RGlzcGxheSxcbiAgICByZWZyZXNoQ29udGVudCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7XG4iLCJpbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlcIjtcblxuZGlzcGxheS5pbml0KCk7XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18iLCJVUkwiLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18iLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwibiIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwIiwiYiIsImJhc2VVUkkiLCJzZWxmIiwiaHJlZiIsIm5jIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwiVHlwZUVycm9yIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJ0b0RhdGUiLCJhcmd1bWVudCIsImFyZ3VtZW50cyIsImFyZ1N0ciIsIkRhdGUiLCJnZXRUaW1lIiwiY29uc29sZSIsIndhcm4iLCJzdGFjayIsIk5hTiIsInRvSW50ZWdlciIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwic3ViTWlsbGlzZWNvbmRzIiwiZGlydHlEYXRlIiwiZGlydHlBbW91bnQiLCJ0aW1lc3RhbXAiLCJhbW91bnQiLCJhZGRNaWxsaXNlY29uZHMiLCJzdGFydE9mVVRDSVNPV2VlayIsImRhdGUiLCJkYXkiLCJnZXRVVENEYXkiLCJkaWZmIiwic2V0VVRDRGF0ZSIsImdldFVUQ0RhdGUiLCJzZXRVVENIb3VycyIsImdldFVUQ0lTT1dlZWtZZWFyIiwieWVhciIsImdldFVUQ0Z1bGxZZWFyIiwiZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciIsInNldFVUQ0Z1bGxZZWFyIiwic3RhcnRPZk5leHRZZWFyIiwiZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciIsInN0YXJ0T2ZUaGlzWWVhciIsImdldFVUQ0lTT1dlZWsiLCJmb3VydGhPZkphbnVhcnkiLCJzdGFydE9mVVRDSVNPV2Vla1llYXIiLCJyb3VuZCIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzdGFydE9mVVRDV2VlayIsIl9yZWYiLCJfcmVmMiIsIl9yZWYzIiwiX29wdGlvbnMkd2Vla1N0YXJ0c09uIiwiX29wdGlvbnMkbG9jYWxlIiwiX29wdGlvbnMkbG9jYWxlJG9wdGlvIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMiIsIndlZWtTdGFydHNPbiIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJnZXRVVENXZWVrWWVhciIsIl9vcHRpb25zJGZpcnN0V2Vla0NvbiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsImZpcnN0V2Vla09mTmV4dFllYXIiLCJmaXJzdFdlZWtPZlRoaXNZZWFyIiwiZ2V0VVRDV2VlayIsImZpcnN0V2VlayIsInN0YXJ0T2ZVVENXZWVrWWVhciIsImFkZExlYWRpbmdaZXJvcyIsInRhcmdldExlbmd0aCIsInNpZ24iLCJvdXRwdXQiLCJhYnMiLCJ0b2tlbiIsInNpZ25lZFllYXIiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsIm51bWJlck9mRGlnaXRzIiwibWlsbGlzZWNvbmRzIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwicG93IiwiRyIsImxvY2FsaXplIiwiZXJhIiwid2lkdGgiLCJ5Iiwib3JkaW5hbE51bWJlciIsInVuaXQiLCJsaWdodEZvcm1hdHRlcnMiLCJZIiwic2lnbmVkV2Vla1llYXIiLCJ3ZWVrWWVhciIsIlIiLCJ1IiwiUSIsInF1YXJ0ZXIiLCJjb250ZXh0IiwicSIsIk0iLCJMIiwidyIsIndlZWsiLCJJIiwiaXNvV2VlayIsIkQiLCJkYXlPZlllYXIiLCJzZXRVVENNb250aCIsImRpZmZlcmVuY2UiLCJnZXRVVENEYXlPZlllYXIiLCJFIiwiZGF5T2ZXZWVrIiwibG9jYWxEYXlPZldlZWsiLCJjIiwiaXNvRGF5T2ZXZWVrIiwiZGF5UGVyaW9kRW51bVZhbHVlIiwiZGF5UGVyaW9kIiwidG9Mb3dlckNhc2UiLCJob3VycyIsIkIiLCJoIiwiSCIsIksiLCJzIiwiUyIsIlgiLCJfbG9jYWxpemUiLCJ0aW1lem9uZU9mZnNldCIsIl9vcmlnaW5hbERhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsImZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyIsImZvcm1hdFRpbWV6b25lIiwieCIsIk8iLCJmb3JtYXRUaW1lem9uZVNob3J0IiwieiIsInQiLCJvcmlnaW5hbERhdGUiLCJUIiwib2Zmc2V0IiwiZGlydHlEZWxpbWl0ZXIiLCJhYnNPZmZzZXQiLCJtaW51dGVzIiwiZGVsaW1pdGVyIiwiZGF0ZUxvbmdGb3JtYXR0ZXIiLCJwYXR0ZXJuIiwiZm9ybWF0TG9uZyIsInRpbWVMb25nRm9ybWF0dGVyIiwidGltZSIsIlAiLCJkYXRlVGltZUZvcm1hdCIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJkYXRlUGF0dGVybiIsInRpbWVQYXR0ZXJuIiwiZGF0ZVRpbWUiLCJnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIiwidXRjRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInByb3RlY3RlZERheU9mWWVhclRva2VucyIsInByb3RlY3RlZFdlZWtZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsImluZGV4T2YiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiaW5wdXQiLCJmb3JtYXREaXN0YW5jZUxvY2FsZSIsImxlc3NUaGFuWFNlY29uZHMiLCJvbmUiLCJvdGhlciIsInhTZWNvbmRzIiwiaGFsZkFNaW51dGUiLCJsZXNzVGhhblhNaW51dGVzIiwieE1pbnV0ZXMiLCJhYm91dFhIb3VycyIsInhIb3VycyIsInhEYXlzIiwiYWJvdXRYV2Vla3MiLCJ4V2Vla3MiLCJhYm91dFhNb250aHMiLCJ4TW9udGhzIiwiYWJvdXRYWWVhcnMiLCJ4WWVhcnMiLCJvdmVyWFllYXJzIiwiYWxtb3N0WFllYXJzIiwiYnVpbGRGb3JtYXRMb25nRm4iLCJkZWZhdWx0V2lkdGgiLCJmb3JtYXRzIiwiZnVsbCIsImxvbmciLCJtZWRpdW0iLCJzaG9ydCIsImZvcm1hdFJlbGF0aXZlTG9jYWxlIiwibGFzdFdlZWsiLCJ5ZXN0ZXJkYXkiLCJ0b2RheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJidWlsZExvY2FsaXplRm4iLCJkaXJ0eUluZGV4IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJhcmd1bWVudENhbGxiYWNrIiwiX29wdGlvbnMiLCJyZW0xMDAiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImJ1aWxkTWF0Y2hGbiIsInN0cmluZyIsIm1hdGNoUGF0dGVybiIsIm1hdGNoUGF0dGVybnMiLCJkZWZhdWx0TWF0Y2hXaWR0aCIsInZhbHVlIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5IiwicHJlZGljYXRlIiwiZmluZEluZGV4Iiwib2JqZWN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0IiwicGFyc2VQYXR0ZXJuIiwicGFyc2VJbnQiLCJwYXJzZVJlc3VsdCIsImFueSIsImNvZGUiLCJmb3JtYXREaXN0YW5jZSIsInRva2VuVmFsdWUiLCJhZGRTdWZmaXgiLCJjb21wYXJpc29uIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsImZvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImVzY2FwZWRTdHJpbmdSZWdFeHAiLCJkb3VibGVRdW90ZVJlZ0V4cCIsInVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwIiwiZGlydHlGb3JtYXRTdHIiLCJfcmVmNCIsIl9vcHRpb25zJGxvY2FsZTIiLCJfb3B0aW9ucyRsb2NhbGUyJG9wdGkiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfb3B0aW9ucyRsb2NhbGUzIiwiX29wdGlvbnMkbG9jYWxlMyRvcHRpIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMyIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDQiLCJmb3JtYXRTdHIiLCJkZWZhdWx0TG9jYWxlIiwiaXNEYXRlIiwiaXNWYWxpZCIsImZvcm1hdHRlck9wdGlvbnMiLCJzdWJzdHJpbmciLCJmaXJzdENoYXJhY3RlciIsImxvbmdGb3JtYXR0ZXIiLCJtYXRjaGVkIiwiZm9ybWF0dGVyIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsImlkTm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsInByb2plY3RTdG9yYWdlIiwidGFza1N0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGVzdEl0ZW0iLCJub3ciLCJsb2ciLCJkZWxldGVUYXNrIiwidGFza0lkTm8iLCJhZGRUYXNrIiwibmV3VGFzayIsInByb2plY3RzIiwidGFza3MiLCJpbmJveERpdiIsImluYm94SGVhZGluZyIsInRleHRDb250ZW50IiwidGFza0RpdiIsImJ0biIsInRhc2tEZXRhaWxzIiwidGFza0R1ZURhdGUiLCJhZGRUYXNrRGl2IiwiYWRkVGFza0g0IiwiYWRkVGFza0lucHV0IiwiYnRuRGl2IiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwib3V0ZXJIVE1MIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYW5jZWxUYXNrQnRuIiwiYWRkVGFza0J0biIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YUlkIiwiZ2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImRhdGVOb3ciLCJwcm9wZXJ0eSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiX3NldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsIk5ld1RhcmdldCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIlJlZmVyZW5jZUVycm9yIiwiZ2V0UHJvdG90eXBlT2YiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZGVmaW5lUHJvcGVydHkiLCJTZXR0ZXIiLCJfdXRjRGF0ZSIsIlZhbHVlU2V0dGVyIiwiX1NldHRlciIsIl9zdXBlciIsInZhbGlkYXRlVmFsdWUiLCJzZXRWYWx1ZSIsInN1YlByaW9yaXR5IiwiX3RoaXMiLCJmbGFncyIsIkRhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyIiwiX1NldHRlcjIiLCJfc3VwZXIyIiwiX3RoaXMyIiwiX2xlbiIsIl9rZXkiLCJ0aW1lc3RhbXBJc1NldCIsImNvbnZlcnRlZERhdGUiLCJzZXRGdWxsWWVhciIsInNldEhvdXJzIiwiUGFyc2VyIiwiZGF0ZVN0cmluZyIsInNldHRlciIsInZhbGlkYXRlIiwic2V0IiwiX3ZhbHVlIiwiRXJhUGFyc2VyIiwiX1BhcnNlciIsIm51bWVyaWNQYXR0ZXJucyIsImhvdXIyM2giLCJob3VyMjRoIiwiaG91cjExaCIsImhvdXIxMmgiLCJtaW51dGUiLCJzZWNvbmQiLCJzaW5nbGVEaWdpdCIsInR3b0RpZ2l0cyIsInRocmVlRGlnaXRzIiwiZm91ckRpZ2l0cyIsImFueURpZ2l0c1NpZ25lZCIsInNpbmdsZURpZ2l0U2lnbmVkIiwidHdvRGlnaXRzU2lnbmVkIiwidGhyZWVEaWdpdHNTaWduZWQiLCJmb3VyRGlnaXRzU2lnbmVkIiwidGltZXpvbmVQYXR0ZXJucyIsIm1hcFZhbHVlIiwicGFyc2VGblJlc3VsdCIsIm1hcEZuIiwicGFyc2VOdW1lcmljUGF0dGVybiIsInBhcnNlVGltZXpvbmVQYXR0ZXJuIiwicGFyc2VBbnlEaWdpdHNTaWduZWQiLCJwYXJzZU5EaWdpdHMiLCJSZWdFeHAiLCJwYXJzZU5EaWdpdHNTaWduZWQiLCJkYXlQZXJpb2RFbnVtVG9Ib3VycyIsIm5vcm1hbGl6ZVR3b0RpZ2l0WWVhciIsInR3b0RpZ2l0WWVhciIsImN1cnJlbnRZZWFyIiwiaXNDb21tb25FcmEiLCJhYnNDdXJyZW50WWVhciIsInJhbmdlRW5kIiwiaXNMZWFwWWVhckluZGV4IiwiWWVhclBhcnNlciIsImlzVHdvRGlnaXRZZWFyIiwibm9ybWFsaXplZFR3b0RpZ2l0WWVhciIsIkxvY2FsV2Vla1llYXJQYXJzZXIiLCJJU09XZWVrWWVhclBhcnNlciIsIl9mbGFncyIsImZpcnN0V2Vla09mWWVhciIsIkV4dGVuZGVkWWVhclBhcnNlciIsIlF1YXJ0ZXJQYXJzZXIiLCJTdGFuZEFsb25lUXVhcnRlclBhcnNlciIsIk1vbnRoUGFyc2VyIiwiU3RhbmRBbG9uZU1vbnRoUGFyc2VyIiwiTG9jYWxXZWVrUGFyc2VyIiwiZGlydHlXZWVrIiwic2V0VVRDV2VlayIsIklTT1dlZWtQYXJzZXIiLCJkaXJ0eUlTT1dlZWsiLCJzZXRVVENJU09XZWVrIiwiREFZU19JTl9NT05USCIsIkRBWVNfSU5fTU9OVEhfTEVBUF9ZRUFSIiwiRGF0ZVBhcnNlciIsImlzTGVhcFllYXIiLCJEYXlPZlllYXJQYXJzZXIiLCJzZXRVVENEYXkiLCJkaXJ0eURheSIsIkRheVBhcnNlciIsIkxvY2FsRGF5UGFyc2VyIiwid2hvbGVXZWVrRGF5cyIsIlN0YW5kQWxvbmVMb2NhbERheVBhcnNlciIsIklTT0RheVBhcnNlciIsInNldFVUQ0lTT0RheSIsIkFNUE1QYXJzZXIiLCJBTVBNTWlkbmlnaHRQYXJzZXIiLCJEYXlQZXJpb2RQYXJzZXIiLCJIb3VyMXRvMTJQYXJzZXIiLCJpc1BNIiwiSG91cjB0bzIzUGFyc2VyIiwiSG91cjBUbzExUGFyc2VyIiwiSG91cjFUbzI0UGFyc2VyIiwiTWludXRlUGFyc2VyIiwic2V0VVRDTWludXRlcyIsIlNlY29uZFBhcnNlciIsInNldFVUQ1NlY29uZHMiLCJGcmFjdGlvbk9mU2Vjb25kUGFyc2VyIiwic2V0VVRDTWlsbGlzZWNvbmRzIiwiSVNPVGltZXpvbmVXaXRoWlBhcnNlciIsIklTT1RpbWV6b25lUGFyc2VyIiwiVGltZXN0YW1wU2Vjb25kc1BhcnNlciIsIlRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciIsInBhcnNlcnMiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm5hbWUiLCJmcm9tIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsImRvbmUiLCJfZSIsImYiLCJlcnIiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIm5leHQiLCJfZTIiLCJyZXR1cm4iLCJhcnIiLCJsZW4iLCJhcnIyIiwibm90V2hpdGVzcGFjZVJlZ0V4cCIsImRpcnR5RGF0ZVN0cmluZyIsImRpcnR5Rm9ybWF0U3RyaW5nIiwiZGlydHlSZWZlcmVuY2VEYXRlIiwiZm9ybWF0U3RyaW5nIiwiX3N0ZXAiLCJzdWJGbk9wdGlvbnMiLCJzZXR0ZXJzIiwidG9rZW5zIiwidXNlZFRva2VucyIsIl9pdGVyYXRvciIsIl9sb29wIiwicGFyc2VyIiwiaW5jb21wYXRpYmxlVG9rZW5zIiwiaW5jb21wYXRpYmxlVG9rZW4iLCJmaW5kIiwidXNlZFRva2VuIiwiaW5jbHVkZXMiLCJmdWxsVG9rZW4iLCJydW4iLCJ2IiwiX3JldCIsInVuaXF1ZVByaW9yaXR5U2V0dGVycyIsInNvcnQiLCJmaWx0ZXIiLCJzZXR0ZXJBcnJheSIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJzdGFydE9mV2VlayIsImdldERheSIsInNldERhdGUiLCJpc1RoaXNXZWVrIiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiZGF0ZUxlZnRTdGFydE9mV2VlayIsImRhdGVSaWdodFN0YXJ0T2ZXZWVrIiwiaXNTYW1lV2VlayIsInJpZ2h0Q29udGVudCIsImRpc3BsYXlJbmJveCIsImlubmVySFRNTCIsImRpc3BsYXlUb2RheSIsImRpc3BsYXlUaGlzV2VlayIsImluaXQiLCJpbmJveExpIiwidG9kYXlMaSIsInRoaXNXZWVrTGkiLCJzZXRMaXN0ZW5lcnMiLCJ0ZXN0RGlzcGxheSIsImFsZXJ0IiwicmVmcmVzaENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9
