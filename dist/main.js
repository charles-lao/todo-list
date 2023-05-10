(() => {
  "use strict";
  var t = {
      890: (t, e, n) => {
        n.d(e, { Z: () => C });
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
          d = new URL(n(324), n.b),
          y = new URL(n(152), n.b),
          b = new URL(n(926), n.b),
          h = a()(o()),
          m = c()(l),
          v = c()(f),
          g = c()(s),
          w = c()(p),
          A = c()(d),
          O = c()(y),
          E = c()(b);
        h.push([
          t.id,
          '@font-face {\n  font-family: "Roboto";\n  src: url(' +
            m +
            ');\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n  cursor: pointer;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url(' +
            v +
            ");\n}\n\nli#today {\n  background-image: url(" +
            g +
            ");\n}\n\nli#this-week {\n  background-image: url(" +
            w +
            ");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url(" +
            A +
            ");\n  display: inline-flex;\n}\n\n.project p:first-child {\n  flex: 6;\n}\n.x-project {\n  flex: 1;\n  font-weight: bolder;\n  align-self: end;\n  justify-self: end;\n  text-align: center;\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url(" +
            O +
            ');\n}\n\n#add-project-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline-flex;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n  align-self: center;\n  justify-self: center;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\n.task-details-input,\n.task-due-date-input {\n  display: none;\n  flex: 1;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n  padding-left: 5px;\n}\n\n#add-project-div div,\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url(' +
            O +
            ");\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n#add-project-btn,\n#cancel-project-btn,\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-project-btn,\n#add-task-btn {\n  background-color: #aaffaa;\n  border-color: #93fe93;\n}\n\n#cancel-project-btn,\n#cancel-task-btn {\n  background-color: #ffbebe;\n  border-color: #ffa6a6;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url(" +
            E +
            ");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,qBAAqB;EACrB,4CAAqC;AACvC;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;;EAEE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;;;;;EAME,4BAA4B;EAC5B,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;;;;;EAKE,eAAe;AACjB;;AAEA;EACE,yDAA4C;AAC9C;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,yDAAqD;AACvD;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yDAA2D;EAC3D,oBAAoB;AACtB;;AAEA;EACE,OAAO;AACT;AACA;EACE,OAAO;EACP,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,yDAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,OAAO;EACP,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,yDAA2C;EAC3C,eAAe;EACf,mBAAmB;AACrB;;AAEA;;;;EAIE,OAAO;EACP,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;;EAEE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,yDAA6C;EAC7C,4BAA4B;EAC5B,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB",
            sourcesContent: [
              '@font-face {\n  font-family: "Roboto";\n  src: url(../fonts/Roboto-Regular.ttf);\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n  cursor: pointer;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n#add-task-h4,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url("../images/inbox.svg");\n}\n\nli#today {\n  background-image: url("../images/calendar-today.svg");\n}\n\nli#this-week {\n  background-image: url("../images/calendar-month.svg");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url("../images/format-list-bulleted.svg");\n  display: inline-flex;\n}\n\n.project p:first-child {\n  flex: 6;\n}\n.x-project {\n  flex: 1;\n  font-weight: bolder;\n  align-self: end;\n  justify-self: end;\n  text-align: center;\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url("../images/plus.svg");\n}\n\n#add-project-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline-flex;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n  align-self: center;\n  justify-self: center;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n#add-task-div {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 10px;\n}\n\n.task-details-input,\n.task-due-date-input {\n  display: none;\n  flex: 1;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  height: 1.5rem;\n  padding-left: 5px;\n}\n\n#add-project-div div,\n#add-task-div div {\n  display: flex;\n  gap: 10px;\n}\n\n#add-task-h4 {\n  display: inline-flex;\n  background-image: url("../images/plus.svg");\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n#add-project-btn,\n#cancel-project-btn,\n#add-task-btn,\n#cancel-task-btn {\n  flex: 1;\n  border-radius: 10px;\n  height: 1.6rem;\n  font-size: 1rem;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n#add-project-btn,\n#add-task-btn {\n  background-color: #aaffaa;\n  border-color: #93fe93;\n}\n\n#cancel-project-btn,\n#cancel-task-btn {\n  background-color: #ffbebe;\n  border-color: #ffa6a6;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url("../images/github.svg");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const C = h;
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
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = u),
                e.splice(u, 0, { identifier: s, updater: y, references: 1 });
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
        var r, a, u, c, l, f, p, d;
        t(1, arguments);
        var y = s(),
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
                      : y.weekStartsOn) && void 0 !== a
                  ? a
                  : null === (p = y.locale) ||
                    void 0 === p ||
                    null === (d = p.options) ||
                    void 0 === d
                  ? void 0
                  : d.weekStartsOn) && void 0 !== r
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
      function d(e, n) {
        var r, a, u, c, l, f, d, y;
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
                  : null === (d = m.locale) ||
                    void 0 === d ||
                    null === (y = d.options) ||
                    void 0 === y
                  ? void 0
                  : y.firstWeekContainsDate) && void 0 !== r
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
      function y(e, n) {
        t(1, arguments);
        var r = o(e),
          a =
            p(r, n).getTime() -
            (function (e, n) {
              var r, o, a, u, c, l, f, y;
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
                          null === (y = f.options) ||
                          void 0 === y
                        ? void 0
                        : y.firstWeekContainsDate) && void 0 !== r
                    ? r
                    : 1
                ),
                m = d(e, n),
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
        E = function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds();
          return b(Math.floor(r * Math.pow(10, n - 3)), e.length);
        };
      var C = {
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
          var o = d(t, r),
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
          var o = y(t, r);
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
          return E(t, e);
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
      const j = C;
      var T = function (t, e) {
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
      const B = {
        p: P,
        P: function (t, e) {
          var n,
            r = t.match(/(P+)(p+)?/) || [],
            o = r[1],
            i = r[2];
          if (!i) return T(t, e);
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
          return n.replace("{{date}}", T(o, e)).replace("{{time}}", P(i, e));
        },
      };
      function _(t) {
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
      var R = ["D", "DD"],
        D = ["YY", "YYYY"];
      function M(t) {
        return -1 !== R.indexOf(t);
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
      const L = {
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
      var H = {
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
      const Q = {
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
      function I(t) {
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
      var z,
        F = {
          ordinalNumber:
            ((z = {
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
                n = t.match(z.matchPattern);
              if (!n) return null;
              var r = n[0],
                o = t.match(z.parsePattern);
              if (!o) return null;
              var i = z.valueCallback ? z.valueCallback(o[0]) : o[0];
              return {
                value: (i = e.valueCallback ? e.valueCallback(i) : i),
                rest: t.slice(r.length),
              };
            }),
          era: I({
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
          quarter: I({
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
          month: I({
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
          day: I({
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
          dayPeriod: I({
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
        formatLong: L,
        formatRelative: function (t, e, n, r) {
          return H[t];
        },
        localize: Q,
        match: F,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var G = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Z = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        J = /^'([^]*?)'?$/,
        K = /''/g,
        $ = /[a-zA-Z]/;
      function V(n, r, u) {
        var c, l, f, p, d, y, b, h, m, v, g, w, A, O, E, C, x, k;
        t(2, arguments);
        var S = String(r),
          T = s(),
          P =
            null !==
              (c =
                null !== (l = null == u ? void 0 : u.locale) && void 0 !== l
                  ? l
                  : T.locale) && void 0 !== c
              ? c
              : X,
          R = i(
            null !==
              (f =
                null !==
                  (p =
                    null !==
                      (d =
                        null !==
                          (y = null == u ? void 0 : u.firstWeekContainsDate) &&
                        void 0 !== y
                          ? y
                          : null == u ||
                            null === (b = u.locale) ||
                            void 0 === b ||
                            null === (h = b.options) ||
                            void 0 === h
                          ? void 0
                          : h.firstWeekContainsDate) && void 0 !== d
                      ? d
                      : T.firstWeekContainsDate) && void 0 !== p
                  ? p
                  : null === (m = T.locale) ||
                    void 0 === m ||
                    null === (v = m.options) ||
                    void 0 === v
                  ? void 0
                  : v.firstWeekContainsDate) && void 0 !== f
              ? f
              : 1
          );
        if (!(R >= 1 && R <= 7))
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
                          null === (E = u.locale) ||
                          void 0 === E ||
                          null === (C = E.options) ||
                          void 0 === C
                        ? void 0
                        : C.weekStartsOn) && void 0 !== A
                    ? A
                    : T.weekStartsOn) && void 0 !== w
                ? w
                : null === (x = T.locale) ||
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
        var N = a(Y, _(Y)),
          L = {
            firstWeekContainsDate: R,
            weekStartsOn: D,
            locale: P,
            _originalDate: Y,
          };
        return S.match(Z)
          .map(function (t) {
            var e = t[0];
            return "p" === e || "P" === e ? (0, B[e])(t, P.formatLong) : t;
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
            var a = j[i];
            if (a)
              return (
                (null != u && u.useAdditionalWeekYearTokens) ||
                  !U(t) ||
                  q(t, r, String(n)),
                (null != u && u.useAdditionalDayOfYearTokens) ||
                  !M(t) ||
                  q(t, r, String(n)),
                a(N, t, P.localize, L)
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
        };
        return {
          projectStorage: t,
          taskStorage: e,
          updateLocalStorage: n,
          deleteTask: (t, r) => {
            for (let o = 0; o < e.length; o++)
              e[o].idNo == t && (e.splice(o, 1), n(), vi.refreshContent(r));
          },
          addTask: (t, r) => {
            const o = ((t, e, n, r, o, i) => ({
              idNo: t,
              title: e,
              description: n,
              dueDate: r,
              priority: o,
              project: i,
            }))(
              Date.now(),
              t,
              "description",
              V(new Date(), "MM/dd/yyyy"),
              "low",
              r
            );
            e.push(o), n();
          },
          addProject: (e) => {
            t.push(e), n();
          },
          deleteProject: (e) => {
            t.splice(e, 1), n();
          },
          editTask: (t, r, o) => {
            for (let i = 0; i < e.length; i++)
              e[i].idNo == t && ((e[i].title = r), n(), vi.refreshContent(o));
          },
        };
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
        dt = n(890),
        yt = {};
      (yt.styleTagTransform = pt()),
        (yt.setAttributes = ct()),
        (yt.insert = at().bind(null, "head")),
        (yt.domAPI = ot()),
        (yt.insertStyleElement = ft()),
        nt()(dt.Z, yt),
        dt.Z && dt.Z.locals && dt.Z.locals;
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
              i.setAttribute("class", "task-details"),
                i.setAttribute("data-id", e[t].idNo),
                (i.textContent = e[t].title);
              const a = document.createElement("input");
              a.setAttribute("value", e[t].title),
                a.setAttribute("class", "task-details-input"),
                a.setAttribute("data-id", e[t].idNo),
                (a.type = "text");
              const u = document.createElement("p");
              u.textContent = e[t].dueDate;
              const c = document.createElement("input");
              c.setAttribute("class", "task-due-date-input"),
                (c.type = "date"),
                r.appendChild(o),
                r.appendChild(i),
                r.appendChild(a),
                r.appendChild(u),
                r.appendChild(c),
                n.appendChild(r);
            }
          const o = document.createElement("div");
          o.setAttribute("id", "add-task-div");
          const i = document.createElement("h4");
          (i.textContent = "Add Task"), i.setAttribute("id", "add-task-h4");
          const a = document.createElement("input");
          a.setAttribute("type", "text"),
            a.setAttribute("id", "add-task-input"),
            a.setAttribute("placeholder", "Task name");
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
            r = document.querySelector("#cancel-task-btn"),
            o = document.querySelector("#add-task-btn"),
            i = document.querySelector("#add-task-input"),
            a = document.querySelectorAll(".task-details"),
            u = document.querySelectorAll(".task-details-input");
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
            }),
            o.addEventListener("click", (t) => {
              tt.addTask(i.value, "default"), vi.refreshContent("default");
            }),
            a.forEach((t) => {
              t.addEventListener("click", (e) => {
                const n = e.target.getAttribute("data-id");
                a.forEach((t) => {
                  t.setAttribute("style", "display: flex;");
                }),
                  t.setAttribute("style", "display: none;"),
                  u.forEach((t) => {
                    t.getAttribute("data-id") == n
                      ? (t.setAttribute("style", "display: flex;"),
                        t.addEventListener("keypress", (e) => {
                          13 === e.keyCode &&
                            tt.editTask(n, t.value, "default");
                        }))
                      : t.setAttribute("style", "display: none;");
                  });
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
      function Et(t) {
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
              ? Ct(t)
              : e;
          })(this, n);
        };
      }
      function Ct(t) {
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
      function jt(t, e, n) {
        return e && St(t.prototype, e), n && St(t, n), t;
      }
      function Tt(t, e, n) {
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
            kt(this, t), Tt(this, "subPriority", 0);
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
        Bt = (function (t) {
          At(n, t);
          var e = Et(n);
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
        })(Pt),
        _t = (function (t) {
          At(n, t);
          var e = Et(n);
          function n() {
            var t;
            kt(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              Tt(Ct((t = e.call.apply(e, [this].concat(o)))), "priority", 10),
              Tt(Ct(t), "subPriority", -1),
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
        })(Pt);
      function Rt(t, e) {
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
                      setter: new Bt(
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
          n && Rt(e.prototype, n),
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
      var Ht = (function (t) {
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
              Lt(Yt((t = i.call.apply(i, [this].concat(n)))), "priority", 140),
              Lt(Yt(t), "incompatibleTokens", ["R", "u", "t", "T"]),
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
        Qt = /^([+-])(\d{2})(\d{2})?|Z/,
        It = /^([+-])(\d{2})(\d{2})|Z/,
        zt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Ft = /^([+-])(\d{2}):(\d{2})|Z/,
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
      function de(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function ye(t) {
        return (
          (ye = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          ye(t)
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
                e = ye(r);
              if (o) {
                var n = ye(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== fe(e) && "function" != typeof e)
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
            be(de((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            be(de(t), "incompatibleTokens", [
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
                var o = d(t, r);
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
      var Ee = (function (t) {
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
      function Ce(t) {
        return (
          (Ce =
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
          Ce(t)
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
      function Te(t, e, n) {
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
                e = je(r);
              if (o) {
                var n = je(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ce(e) && "function" != typeof e)
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
            Te(Se((t = i.call.apply(i, [this].concat(n)))), "priority", 130),
            Te(Se(t), "incompatibleTokens", [
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
      function Be(t) {
        return (
          (Be =
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
          Be(t)
        );
      }
      function _e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Re(t, e) {
        return (
          (Re =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Re(t, e)
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
            e && Re(t, e);
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
                return !e || ("object" !== Be(e) && "function" != typeof e)
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
          n && _e(e.prototype, n),
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
      function He(t) {
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
      var Ie = (function (t) {
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
                e = We(r);
              if (o) {
                var n = We(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Ye(e) && "function" != typeof e)
                  ? He(t)
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
            Qe(He((t = i.call.apply(i, [this].concat(n)))), "priority", 120),
            Qe(He(t), "incompatibleTokens", [
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
      function Fe(t, e) {
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
                return !e || ("object" !== ze(e) && "function" != typeof e)
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
          n && Fe(e.prototype, n),
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
                      c = y(a, r) - u;
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
      function yn(t, e) {
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
                return !e || ("object" !== dn(e) && "function" != typeof e)
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
          r && yn(n.prototype, r),
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
      function En(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Cn(t) {
        return (
          (Cn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Cn(t)
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
        jn = (function (t) {
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
                  e = Cn(r);
                if (o) {
                  var n = Cn(this).constructor;
                  t = Reflect.construct(e, arguments, n);
                } else t = e.apply(this, arguments);
                return (function (t, e) {
                  return !e || ("object" !== wn(e) && "function" != typeof e)
                    ? En(t)
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
              xn(En((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
              xn(En(t), "subPriority", 1),
              xn(En(t), "incompatibleTokens", [
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
      function Tn(t) {
        return (
          (Tn =
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
          Tn(t)
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
      function Bn(t, e) {
        return (
          (Bn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Bn(t, e)
        );
      }
      function _n(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Rn(t) {
        return (
          (Rn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Rn(t)
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
            e && Bn(t, e);
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
                e = Rn(r);
              if (o) {
                var n = Rn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Tn(e) && "function" != typeof e)
                  ? _n(t)
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
            Dn(_n((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Dn(_n(t), "subpriority", 1),
            Dn(_n(t), "incompatibleTokens", [
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
        var a, u, c, l, f, p, d, y;
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
                  : null === (d = b.locale) ||
                    void 0 === d ||
                    null === (y = d.options) ||
                    void 0 === y
                  ? void 0
                  : y.weekStartsOn) && void 0 !== a
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
      function Ln(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Hn(t) {
        return (
          (Hn = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Hn(t)
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
      var Qn = (function (t) {
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
                e = Hn(r);
              if (o) {
                var n = Hn(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== qn(e) && "function" != typeof e)
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
            Wn(Ln((t = i.call.apply(i, [this].concat(n)))), "priority", 90),
            Wn(Ln(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
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
      function In(t) {
        return (
          (In =
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
          In(t)
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
      function Fn(t, e) {
        return (
          (Fn =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Fn(t, e)
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
            e && Fn(t, e);
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
                return !e || ("object" !== In(e) && "function" != typeof e)
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
          n && zn(e.prototype, n),
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
      function yr(t) {
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
                e = br(r);
              if (o) {
                var n = br(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== sr(e) && "function" != typeof e)
                  ? yr(t)
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
            hr(yr((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            hr(yr(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
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
      function Er(t, e, n) {
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
      var Cr = (function (t) {
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
            Er(Ar((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Er(Ar(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
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
      function jr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Tr(t) {
        return (
          (Tr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Tr(t)
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
      var Br = (function (t) {
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
                e = Tr(r);
              if (o) {
                var n = Tr(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== xr(e) && "function" != typeof e)
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
            Pr(jr((t = i.call.apply(i, [this].concat(n)))), "priority", 80),
            Pr(jr(t), "incompatibleTokens", ["a", "b", "t", "T"]),
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
      function _r(t) {
        return (
          (_r =
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
          _r(t)
        );
      }
      function Rr(t, e) {
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
                return !e || ("object" !== _r(e) && "function" != typeof e)
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
          n && Rr(e.prototype, n),
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
      function Lr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Hr(t, e) {
        return (
          (Hr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Hr(t, e)
        );
      }
      function Wr(t) {
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
      function Ir(t, e, n) {
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
            e && Hr(t, e);
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
            Ir(Wr((t = i.call.apply(i, [this].concat(n)))), "priority", 70),
            Ir(Wr(t), "incompatibleTokens", [
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
          n && Lr(e.prototype, n),
          a
        );
      })(Dt);
      function Fr(t) {
        return (
          (Fr =
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
          Fr(t)
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
                return !e || ("object" !== Fr(e) && "function" != typeof e)
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
      function Eo(t, e) {
        return (
          (Eo =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Eo(t, e)
        );
      }
      function Co(t) {
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
            e && Eo(t, e);
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
                  ? Co(t)
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
            ko(Co((t = i.call.apply(i, [this].concat(n)))), "priority", 30),
            ko(Co(t), "incompatibleTokens", ["t", "T"]),
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
      function To(t, e) {
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
      function Bo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function _o(t) {
        return (
          (_o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          _o(t)
        );
      }
      function Ro(t, e, n) {
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
                e = _o(r);
              if (o) {
                var n = _o(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== jo(e) && "function" != typeof e)
                  ? Bo(t)
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
            Ro(Bo((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Ro(Bo(t), "incompatibleTokens", ["t", "T", "x"]),
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
                    return Jt(Qt, t);
                  case "XX":
                    return Jt(It, t);
                  case "XXXX":
                    return Jt(zt, t);
                  case "XXXXX":
                    return Jt(Xt, t);
                  default:
                    return Jt(Ft, t);
                }
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
              },
            },
          ]) && To(e.prototype, n),
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
      var Ho = (function (t) {
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
            Lo(Yo((t = i.call.apply(i, [this].concat(n)))), "priority", 10),
            Lo(Yo(t), "incompatibleTokens", ["t", "T", "X"]),
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
                    return Jt(Qt, t);
                  case "xx":
                    return Jt(It, t);
                  case "xxxx":
                    return Jt(zt, t);
                  case "xxxxx":
                    return Jt(Xt, t);
                  default:
                    return Jt(Ft, t);
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
      function Qo(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Io(t, e) {
        return (
          (Io =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          Io(t, e)
        );
      }
      function zo(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Fo(t) {
        return (
          (Fo = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Fo(t)
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
            e && Io(t, e);
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
                e = Fo(r);
              if (o) {
                var n = Fo(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return (function (t, e) {
                return !e || ("object" !== Wo(e) && "function" != typeof e)
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
            Xo(zo((t = i.call.apply(i, [this].concat(n)))), "priority", 40),
            Xo(zo(t), "incompatibleTokens", "*"),
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
          ]) && Qo(e.prototype, n),
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
          G: new Ht(),
          y: new le(),
          Y: new he(),
          R: new Ee(),
          u: new Pe(),
          Q: new qe(),
          q: new Ie(),
          M: new Ke(),
          L: new on(),
          w: new pn(),
          I: new gn(),
          d: new jn(),
          D: new Mn(),
          E: new Qn(),
          e: new Jn(),
          c: new rr(),
          i: new fr(),
          a: new mr(),
          b: new Cr(),
          B: new Br(),
          h: new Yr(),
          H: new zr(),
          K: new $r(),
          k: new io(),
          m: new po(),
          s: new wo(),
          S: new So(),
          X: new Do(),
          x: new Ho(),
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
        var c, l, f, p, d, y, b, h, m, v, g, w, A, O, E, C, x, k;
        t(3, arguments);
        var S = String(e),
          j = String(n),
          T = s(),
          P =
            null !==
              (c =
                null !== (l = null == u ? void 0 : u.locale) && void 0 !== l
                  ? l
                  : T.locale) && void 0 !== c
              ? c
              : X;
        if (!P.match)
          throw new RangeError("locale must contain match property");
        var R = i(
          null !==
            (f =
              null !==
                (p =
                  null !==
                    (d =
                      null !==
                        (y = null == u ? void 0 : u.firstWeekContainsDate) &&
                      void 0 !== y
                        ? y
                        : null == u ||
                          null === (b = u.locale) ||
                          void 0 === b ||
                          null === (h = b.options) ||
                          void 0 === h
                        ? void 0
                        : h.firstWeekContainsDate) && void 0 !== d
                    ? d
                    : T.firstWeekContainsDate) && void 0 !== p
                ? p
                : null === (m = T.locale) ||
                  void 0 === m ||
                  null === (v = m.options) ||
                  void 0 === v
                ? void 0
                : v.firstWeekContainsDate) && void 0 !== f
            ? f
            : 1
        );
        if (!(R >= 1 && R <= 7))
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
                          null === (E = u.locale) ||
                          void 0 === E ||
                          null === (C = E.options) ||
                          void 0 === C
                        ? void 0
                        : C.weekStartsOn) && void 0 !== A
                    ? A
                    : T.weekStartsOn) && void 0 !== w
                ? w
                : null === (x = T.locale) ||
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
        if ("" === j) return "" === S ? o(r) : new Date(NaN);
        var Y,
          N = { firstWeekContainsDate: R, weekStartsOn: D, locale: P },
          L = [new _t()],
          H = j
            .match(ui)
            .map(function (t) {
              var e = t[0];
              return e in B ? (0, B[e])(t, P.formatLong) : t;
            })
            .join("")
            .match(ai),
          W = [],
          Q = oi(H);
        try {
          var I = function () {
            var t = Y.value;
            (null != u && u.useAdditionalWeekYearTokens) || !U(t) || q(t, j, e),
              (null != u && u.useAdditionalDayOfYearTokens) ||
                !M(t) ||
                q(t, j, e);
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
              L.push(a.setter), (S = a.rest);
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
          for (Q.s(); !(Y = Q.n()).done; ) {
            var z = I();
            if ("object" === ri(z)) return z.v;
          }
        } catch (t) {
          Q.e(t);
        } finally {
          Q.f();
        }
        if (S.length > 0 && fi.test(S)) return new Date(NaN);
        var F = L.map(function (t) {
            return t.priority;
          })
            .sort(function (t, e) {
              return e - t;
            })
            .filter(function (t, e, n) {
              return n.indexOf(t) === e;
            })
            .map(function (t) {
              return L.filter(function (e) {
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
          J = a(G, _(G)),
          K = {},
          $ = oi(F);
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
      function di(e, n) {
        var r, a, u, c, l, f, p, d;
        t(1, arguments);
        var y = s(),
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
                      : y.weekStartsOn) && void 0 !== a
                  ? a
                  : null === (p = y.locale) ||
                    void 0 === p ||
                    null === (d = p.options) ||
                    void 0 === d
                  ? void 0
                  : d.weekStartsOn) && void 0 !== r
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
      function yi(e, n) {
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
      const bi = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = "Inbox"), n.appendChild(r), null != e))
            for (let t = 0; t < e.length; t++)
              if (yi(pi(e[t].dueDate, "MM/dd/yyyy", new Date()))) {
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
        hi = (t, e) => {
          const n = document.createElement("div");
          n.setAttribute("id", "right-container");
          const r = document.createElement("h3");
          if (((r.textContent = t), n.appendChild(r), null != e))
            for (let r = 0; r < e.length; r++)
              if (e[r].project == t) {
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
          const o = document.createElement("div");
          o.setAttribute("id", "add-task-div");
          const i = document.createElement("h4");
          (i.textContent = "Add Task"), i.setAttribute("id", "add-task-h4");
          const a = document.createElement("input");
          a.setAttribute("type", "text"),
            a.setAttribute("id", "add-task-input"),
            a.setAttribute("placeholder", "Task name");
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
        mi = (t) => {
          const e = t,
            n = document.querySelectorAll(".circle-btn"),
            r = document.querySelector("#add-task-h4"),
            o = document.querySelector("#add-task-div"),
            i = document.querySelector("#cancel-task-btn"),
            a = document.querySelector("#add-task-btn"),
            u = document.querySelector("#add-task-input");
          n.forEach((t) => {
            t.addEventListener("click", (t) => {
              const n = t.target.getAttribute("data-id");
              tt.deleteTask(n, e);
            });
          }),
            r.addEventListener("click", (t) => {
              (r.style.display = "none"), (o.style.display = "flex");
            }),
            i.addEventListener("click", (t) => {
              (r.style.display = "inline-flex"), (o.style.display = "none");
            }),
            a.addEventListener("click", (t) => {
              tt.addTask(u.value, e), vi.refreshContent(e);
            });
        },
        vi = (() => {
          const t = document.querySelector("#right-content"),
            e = () => {
              (t.innerHTML = bt(tt.projectStorage, tt.taskStorage)), ht();
            },
            n = () => {
              (t.innerHTML = mt(tt.projectStorage, tt.taskStorage)), vt();
            },
            r = () => {
              (t.innerHTML = bi(tt.projectStorage, tt.taskStorage)), vt();
            },
            o = () => {
              const t = document.querySelector("#projects-list");
              if (((t.textContent = ""), null != tt.projectStorage))
                for (let e = 0; e < tt.projectStorage.length; e++) {
                  const n = document.createElement("li");
                  n.setAttribute("class", "project");
                  const r = document.createElement("p");
                  (r.textContent = "X"),
                    r.setAttribute("class", "x-project"),
                    r.setAttribute("data-index", e);
                  const o = document.createElement("p");
                  (o.textContent = tt.projectStorage[e]),
                    o.setAttribute("class", "project-name"),
                    o.setAttribute("data-index", e),
                    n.appendChild(o),
                    n.appendChild(r),
                    t.appendChild(n);
                }
            },
            i = (e) => {
              (t.innerHTML = hi(e, tt.taskStorage)), mi(e);
            };
          return {
            init: () => {
              e(),
                o(),
                (() => {
                  const t = document.querySelector("#inbox"),
                    a = document.querySelector("#today"),
                    u = document.querySelector("#this-week"),
                    c = document.querySelector("#add-project-div"),
                    l = document.querySelector("#add-project-input"),
                    f = document.querySelector("#add-project"),
                    s = document.querySelector("#add-project-btn"),
                    p = document.querySelector("#cancel-project-btn"),
                    d = document.querySelectorAll(".x-project"),
                    y = document.querySelectorAll(".project-name");
                  t.addEventListener("click", () => {
                    e();
                  }),
                    a.addEventListener("click", () => {
                      n();
                    }),
                    u.addEventListener("click", () => {
                      r();
                    }),
                    f.addEventListener("click", (t) => {
                      (c.style.display = "flex"), (f.style.display = "none");
                    }),
                    p.addEventListener("click", (t) => {
                      (c.style.display = "none"), (f.style.display = "flex");
                    }),
                    s.addEventListener("click", (t) => {
                      tt.addProject(l.value), o();
                    }),
                    d.forEach((t) => {
                      t.addEventListener("click", (t) => {
                        const e = t.target.getAttribute("data-index");
                        tt.deleteProject(e), o();
                      });
                    }),
                    y.forEach((t) => {
                      t.addEventListener("click", (t) => {
                        const e = t.target.getAttribute("data-index");
                        i(tt.projectStorage[e]);
                      });
                    });
                })();
            },
            refreshContent: (t) => {
              switch (t) {
                case "default":
                  e();
                  break;
                case "today":
                  n();
                  break;
                case "this-week":
                  r();
                  break;
                default:
                  i(t);
              }
            },
          };
        })();
      vi.init();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUhBSUlBLEVBQWdDLElBQUlDLElBQUksWUFDeENDLEVBQWdDLElBQUlELElBQUksWUFDeENFLEVBQWdDLElBQUlGLElBQUksWUFDeENHLEVBQWdDLElBQUlILElBQUksWUFDeENJLEVBQWdDLElBQUlKLElBQUksWUFDeENLLEVBQWdDLElBQUlMLElBQUksWUFDeENNLEVBQWdDLElBQUlOLElBQUksWUFDeENPLEVBQTBCLElBQTRCLEtBQ3REQyxFQUFxQyxJQUFnQ1QsR0FDckVVLEVBQXFDLElBQWdDUixHQUNyRVMsRUFBcUMsSUFBZ0NSLEdBQ3JFUyxFQUFxQyxJQUFnQ1IsR0FDckVTLEVBQXFDLElBQWdDUixHQUNyRVMsRUFBcUMsSUFBZ0NSLEdBQ3JFUyxFQUFxQyxJQUFnQ1IsR0FFekVDLEVBQXdCUSxLQUFLLENBQUNDLEVBQU9DLEdBQUksc0RBQTBEVCxFQUFxQyw0cUNBQWdyQ0MsRUFBcUMsZ0RBQWtEQyxFQUFxQyxvREFBc0RDLEVBQXFDLG9IQUFzSEMsRUFBcUMsb1FBQXNRQyxFQUFxQyx5eUNBQTZ5Q0EsRUFBcUMsdW5CQUF5bkJDLEVBQXFDLHdLQUF5SyxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxvQ0FBb0MsTUFBUSxHQUFHLFNBQVcsZzNEQUFnM0QsZUFBaUIsQ0FBQyw2N0hBQWk5SCxXQUFhLE1BRW5pVSxTLFVDaEJBRSxFQUFPRSxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQU8sR0E0RVgsT0F6RUFBLEVBQUtDLFNBQVcsV0FDZCxPQUFPQyxLQUFLQyxLQUFJLFNBQVVDLEdBQ3hCLElBQUlDLEVBQVUsR0FDVkMsT0FBK0IsSUFBWkYsRUFBSyxHQW9CNUIsT0FuQklBLEVBQUssS0FDUEMsR0FBVyxjQUFjRSxPQUFPSCxFQUFLLEdBQUksUUFFdkNBLEVBQUssS0FDUEMsR0FBVyxVQUFVRSxPQUFPSCxFQUFLLEdBQUksT0FFbkNFLElBQ0ZELEdBQVcsU0FBU0UsT0FBT0gsRUFBSyxHQUFHSSxPQUFTLEVBQUksSUFBSUQsT0FBT0gsRUFBSyxJQUFNLEdBQUksT0FFNUVDLEdBQVdOLEVBQXVCSyxHQUM5QkUsSUFDRkQsR0FBVyxLQUVURCxFQUFLLEtBQ1BDLEdBQVcsS0FFVEQsRUFBSyxLQUNQQyxHQUFXLEtBRU5BLENBQ1QsSUFBR0ksS0FBSyxHQUNWLEVBR0FULEVBQUtVLEVBQUksU0FBV0MsRUFBU0MsRUFBT0MsRUFBUUMsRUFBVUMsR0FDN0IsaUJBQVpKLElBQ1RBLEVBQVUsQ0FBQyxDQUFDLEtBQU1BLE9BQVNLLEtBRTdCLElBQUlDLEVBQXlCLENBQUMsRUFDOUIsR0FBSUosRUFDRixJQUFLLElBQUlLLEVBQUksRUFBR0EsRUFBSWhCLEtBQUtNLE9BQVFVLElBQUssQ0FDcEMsSUFBSXJCLEVBQUtLLEtBQUtnQixHQUFHLEdBQ1AsTUFBTnJCLElBQ0ZvQixFQUF1QnBCLElBQU0sRUFFakMsQ0FFRixJQUFLLElBQUlzQixFQUFLLEVBQUdBLEVBQUtSLEVBQVFILE9BQVFXLElBQU0sQ0FDMUMsSUFBSWYsRUFBTyxHQUFHRyxPQUFPSSxFQUFRUSxJQUN6Qk4sR0FBVUksRUFBdUJiLEVBQUssV0FHckIsSUFBVlcsU0FDYyxJQUFaWCxFQUFLLEtBR2RBLEVBQUssR0FBSyxTQUFTRyxPQUFPSCxFQUFLLEdBQUdJLE9BQVMsRUFBSSxJQUFJRCxPQUFPSCxFQUFLLElBQU0sR0FBSSxNQUFNRyxPQUFPSCxFQUFLLEdBQUksTUFGL0ZBLEVBQUssR0FBS1csR0FNVkgsSUFDR1IsRUFBSyxJQUdSQSxFQUFLLEdBQUssVUFBVUcsT0FBT0gsRUFBSyxHQUFJLE1BQU1HLE9BQU9ILEVBQUssR0FBSSxLQUMxREEsRUFBSyxHQUFLUSxHQUhWUixFQUFLLEdBQUtRLEdBTVZFLElBQ0dWLEVBQUssSUFHUkEsRUFBSyxHQUFLLGNBQWNHLE9BQU9ILEVBQUssR0FBSSxPQUFPRyxPQUFPSCxFQUFLLEdBQUksS0FDL0RBLEVBQUssR0FBS1UsR0FIVlYsRUFBSyxHQUFLLEdBQUdHLE9BQU9PLElBTXhCZCxFQUFLTCxLQUFLUyxHQUNaLENBQ0YsRUFDT0osQ0FDVCxDLFVDbEZBSixFQUFPRSxRQUFVLFNBQVVzQixFQUFLQyxHQUk5QixPQUhLQSxJQUNIQSxFQUFVLENBQUMsR0FFUkQsR0FHTEEsRUFBTUUsT0FBT0YsRUFBSUcsV0FBYUgsRUFBSUksUUFBVUosR0FHeEMsZUFBZUssS0FBS0wsS0FDdEJBLEVBQU1BLEVBQUlNLE1BQU0sR0FBSSxJQUVsQkwsRUFBUU0sT0FDVlAsR0FBT0MsRUFBUU0sTUFLYixvQkFBb0JGLEtBQUtMLElBQVFDLEVBQVFPLFdBQ3BDLElBQUtyQixPQUFPYSxFQUFJUyxRQUFRLEtBQU0sT0FBT0EsUUFBUSxNQUFPLE9BQVEsS0FFOURULEdBakJFQSxDQWtCWCxDLFVDdkJBeEIsRUFBT0UsUUFBVSxTQUFVTSxHQUN6QixJQUFJQyxFQUFVRCxFQUFLLEdBQ2YwQixFQUFhMUIsRUFBSyxHQUN0QixJQUFLMEIsRUFDSCxPQUFPekIsRUFFVCxHQUFvQixtQkFBVDBCLEtBQXFCLENBQzlCLElBQUlDLEVBQVNELEtBQUtFLFNBQVNDLG1CQUFtQkMsS0FBS0MsVUFBVU4sTUFDekRPLEVBQU8sK0RBQStEOUIsT0FBT3lCLEdBQzdFTSxFQUFnQixPQUFPL0IsT0FBTzhCLEVBQU0sT0FDeEMsTUFBTyxDQUFDaEMsR0FBU0UsT0FBTyxDQUFDK0IsSUFBZ0I3QixLQUFLLEtBQ2hELENBQ0EsTUFBTyxDQUFDSixHQUFTSSxLQUFLLEtBQ3hCLEMsVUNiQSxJQUFJOEIsRUFBYyxHQUNsQixTQUFTQyxFQUFxQkMsR0FFNUIsSUFEQSxJQUFJQyxHQUFVLEVBQ0xoQyxFQUFJLEVBQUdBLEVBQUk2QixFQUFZL0IsT0FBUUUsSUFDdEMsR0FBSTZCLEVBQVk3QixHQUFHK0IsYUFBZUEsRUFBWSxDQUM1Q0MsRUFBU2hDLEVBQ1QsS0FDRixDQUVGLE9BQU9nQyxDQUNULENBQ0EsU0FBU0MsRUFBYTNDLEVBQU1xQixHQUcxQixJQUZBLElBQUl1QixFQUFhLENBQUMsRUFDZEMsRUFBYyxHQUNUbkMsRUFBSSxFQUFHQSxFQUFJVixFQUFLUSxPQUFRRSxJQUFLLENBQ3BDLElBQUlOLEVBQU9KLEVBQUtVLEdBQ1piLEVBQUt3QixFQUFReUIsS0FBTzFDLEVBQUssR0FBS2lCLEVBQVF5QixLQUFPMUMsRUFBSyxHQUNsRDJDLEVBQVFILEVBQVcvQyxJQUFPLEVBQzFCNEMsRUFBYSxHQUFHbEMsT0FBT1YsRUFBSSxLQUFLVSxPQUFPd0MsR0FDM0NILEVBQVcvQyxHQUFNa0QsRUFBUSxFQUN6QixJQUFJQyxFQUFvQlIsRUFBcUJDLEdBQ3pDUSxFQUFNLENBQ1JDLElBQUs5QyxFQUFLLEdBQ1ZRLE1BQU9SLEVBQUssR0FDWitDLFVBQVcvQyxFQUFLLEdBQ2hCVSxTQUFVVixFQUFLLEdBQ2ZXLE1BQU9YLEVBQUssSUFFZCxJQUEyQixJQUF2QjRDLEVBQ0ZULEVBQVlTLEdBQW1CSSxhQUMvQmIsRUFBWVMsR0FBbUJLLFFBQVFKLE9BQ2xDLENBQ0wsSUFBSUksRUFBVUMsRUFBZ0JMLEVBQUs1QixHQUNuQ0EsRUFBUWtDLFFBQVU3QyxFQUNsQjZCLEVBQVlpQixPQUFPOUMsRUFBRyxFQUFHLENBQ3ZCK0IsV0FBWUEsRUFDWlksUUFBU0EsRUFDVEQsV0FBWSxHQUVoQixDQUNBUCxFQUFZbEQsS0FBSzhDLEVBQ25CLENBQ0EsT0FBT0ksQ0FDVCxDQUNBLFNBQVNTLEVBQWdCTCxFQUFLNUIsR0FDNUIsSUFBSW9DLEVBQU1wQyxFQUFRcUMsT0FBT3JDLEdBWXpCLE9BWEFvQyxFQUFJRSxPQUFPVixHQUNHLFNBQWlCVyxHQUM3QixHQUFJQSxFQUFRLENBQ1YsR0FBSUEsRUFBT1YsTUFBUUQsRUFBSUMsS0FBT1UsRUFBT2hELFFBQVVxQyxFQUFJckMsT0FBU2dELEVBQU9ULFlBQWNGLEVBQUlFLFdBQWFTLEVBQU85QyxXQUFhbUMsRUFBSW5DLFVBQVk4QyxFQUFPN0MsUUFBVWtDLEVBQUlsQyxNQUN6SixPQUVGMEMsRUFBSUUsT0FBT1YsRUFBTVcsRUFDbkIsTUFDRUgsRUFBSUksUUFFUixDQUVGLENBQ0FqRSxFQUFPRSxRQUFVLFNBQVVFLEVBQU1xQixHQUcvQixJQUFJeUMsRUFBa0JuQixFQUR0QjNDLEVBQU9BLEdBQVEsR0FEZnFCLEVBQVVBLEdBQVcsQ0FBQyxHQUd0QixPQUFPLFNBQWdCMEMsR0FDckJBLEVBQVVBLEdBQVcsR0FDckIsSUFBSyxJQUFJckQsRUFBSSxFQUFHQSxFQUFJb0QsRUFBZ0J0RCxPQUFRRSxJQUFLLENBQy9DLElBQ0lzRCxFQUFReEIsRUFES3NCLEVBQWdCcEQsSUFFakM2QixFQUFZeUIsR0FBT1osWUFDckIsQ0FFQSxJQURBLElBQUlhLEVBQXFCdEIsRUFBYW9CLEVBQVMxQyxHQUN0QzZDLEVBQUssRUFBR0EsRUFBS0osRUFBZ0J0RCxPQUFRMEQsSUFBTSxDQUNsRCxJQUNJQyxFQUFTM0IsRUFES3NCLEVBQWdCSSxJQUVLLElBQW5DM0IsRUFBWTRCLEdBQVFmLGFBQ3RCYixFQUFZNEIsR0FBUWQsVUFDcEJkLEVBQVlpQixPQUFPVyxFQUFRLEdBRS9CLENBQ0FMLEVBQWtCRyxDQUNwQixDQUNGLEMsVUNqRkEsSUFBSUcsRUFBTyxDQUFDLEVBK0JaeEUsRUFBT0UsUUFQUCxTQUEwQnVFLEVBQVFDLEdBQ2hDLElBQUlDLEVBdEJOLFNBQW1CQSxHQUNqQixRQUE0QixJQUFqQkgsRUFBS0csR0FBeUIsQ0FDdkMsSUFBSUMsRUFBY0MsU0FBU0MsY0FBY0gsR0FHekMsR0FBSUksT0FBT0MsbUJBQXFCSixhQUF1QkcsT0FBT0Msa0JBQzVELElBR0VKLEVBQWNBLEVBQVlLLGdCQUFnQkMsSUFDNUMsQ0FBRSxNQUFPQyxHQUVQUCxFQUFjLElBQ2hCLENBRUZKLEVBQUtHLEdBQVVDLENBQ2pCLENBQ0EsT0FBT0osRUFBS0csRUFDZCxDQUllUyxDQUFVWCxHQUN2QixJQUFLRSxFQUNILE1BQU0sSUFBSVUsTUFBTSwyR0FFbEJWLEVBQU9XLFlBQVlaLEVBQ3JCLEMsVUN2QkExRSxFQUFPRSxRQU5QLFNBQTRCdUIsR0FDMUIsSUFBSThELEVBQVVWLFNBQVNXLGNBQWMsU0FHckMsT0FGQS9ELEVBQVFnRSxjQUFjRixFQUFTOUQsRUFBUWlFLFlBQ3ZDakUsRUFBUWdELE9BQU9jLEVBQVM5RCxFQUFRQSxTQUN6QjhELENBQ1QsQyxnQkNDQXZGLEVBQU9FLFFBTlAsU0FBd0N5RixHQUN0QyxJQUFJQyxFQUFtRCxLQUNuREEsR0FDRkQsRUFBYUUsYUFBYSxRQUFTRCxFQUV2QyxDLFVDb0RBNUYsRUFBT0UsUUFqQlAsU0FBZ0J1QixHQUNkLEdBQXdCLG9CQUFib0QsU0FDVCxNQUFPLENBQ0xkLE9BQVEsV0FBbUIsRUFDM0JFLE9BQVEsV0FBbUIsR0FHL0IsSUFBSTBCLEVBQWVsRSxFQUFRcUUsbUJBQW1CckUsR0FDOUMsTUFBTyxDQUNMc0MsT0FBUSxTQUFnQlYsSUFqRDVCLFNBQWVzQyxFQUFjbEUsRUFBUzRCLEdBQ3BDLElBQUlDLEVBQU0sR0FDTkQsRUFBSW5DLFdBQ05vQyxHQUFPLGNBQWMzQyxPQUFPMEMsRUFBSW5DLFNBQVUsUUFFeENtQyxFQUFJckMsUUFDTnNDLEdBQU8sVUFBVTNDLE9BQU8wQyxFQUFJckMsTUFBTyxPQUVyQyxJQUFJTixPQUFpQyxJQUFkMkMsRUFBSWxDLE1BQ3ZCVCxJQUNGNEMsR0FBTyxTQUFTM0MsT0FBTzBDLEVBQUlsQyxNQUFNUCxPQUFTLEVBQUksSUFBSUQsT0FBTzBDLEVBQUlsQyxPQUFTLEdBQUksT0FFNUVtQyxHQUFPRCxFQUFJQyxJQUNQNUMsSUFDRjRDLEdBQU8sS0FFTEQsRUFBSXJDLFFBQ05zQyxHQUFPLEtBRUxELEVBQUluQyxXQUNOb0MsR0FBTyxLQUVULElBQUlDLEVBQVlGLEVBQUlFLFVBQ2hCQSxHQUE2QixvQkFBVHBCLE9BQ3RCbUIsR0FBTyx1REFBdUQzQyxPQUFPd0IsS0FBS0UsU0FBU0MsbUJBQW1CQyxLQUFLQyxVQUFVZSxNQUFlLFFBS3RJOUIsRUFBUXNFLGtCQUFrQnpDLEVBQUtxQyxFQUFjbEUsRUFBUUEsUUFDdkQsQ0FvQk11RSxDQUFNTCxFQUFjbEUsRUFBUzRCLEVBQy9CLEVBQ0FZLE9BQVEsWUFyQlosU0FBNEIwQixHQUUxQixHQUFnQyxPQUE1QkEsRUFBYU0sV0FDZixPQUFPLEVBRVROLEVBQWFNLFdBQVdDLFlBQVlQLEVBQ3RDLENBZ0JNUSxDQUFtQlIsRUFDckIsRUFFSixDLFVDOUNBM0YsRUFBT0UsUUFWUCxTQUEyQm9ELEVBQUtxQyxHQUM5QixHQUFJQSxFQUFhUyxXQUNmVCxFQUFhUyxXQUFXQyxRQUFVL0MsTUFDN0IsQ0FDTCxLQUFPcUMsRUFBYVcsWUFDbEJYLEVBQWFPLFlBQVlQLEVBQWFXLFlBRXhDWCxFQUFhTCxZQUFZVCxTQUFTMEIsZUFBZWpELEdBQ25ELENBQ0YsQywyWUNYSWtELEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQnRGLElBQWpCdUYsRUFDSCxPQUFPQSxFQUFhekcsUUFHckIsSUFBSUYsRUFBU3dHLEVBQXlCRSxHQUFZLENBQ2pEekcsR0FBSXlHLEVBRUp4RyxRQUFTLENBQUMsR0FPWCxPQUhBMEcsRUFBb0JGLEdBQVUxRyxFQUFRQSxFQUFPRSxRQUFTdUcsR0FHL0N6RyxFQUFPRSxPQUNmLENBR0F1RyxFQUFvQkksRUFBSUQsRUN4QnhCSCxFQUFvQkssRUFBSzlHLElBQ3hCLElBQUkrRyxFQUFTL0csR0FBVUEsRUFBTzJCLFdBQzdCLElBQU8zQixFQUFpQixRQUN4QixJQUFNLEVBRVAsT0FEQXlHLEVBQW9CTyxFQUFFRCxFQUFRLENBQUVFLEVBQUdGLElBQzVCQSxDQUFNLEVDTGROLEVBQW9CTyxFQUFJLENBQUM5RyxFQUFTZ0gsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYVCxFQUFvQlcsRUFBRUYsRUFBWUMsS0FBU1YsRUFBb0JXLEVBQUVsSCxFQUFTaUgsSUFDNUVFLE9BQU9DLGVBQWVwSCxFQUFTaUgsRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLElBRTFFLEVDTkRWLEVBQW9CZ0IsRUFBSSxXQUN2QixHQUEwQixpQkFBZkMsV0FBeUIsT0FBT0EsV0FDM0MsSUFDQyxPQUFPcEgsTUFBUSxJQUFJcUgsU0FBUyxjQUFiLEVBQ2hCLENBQUUsTUFBT3hDLEdBQ1IsR0FBc0IsaUJBQVhKLE9BQXFCLE9BQU9BLE1BQ3hDLENBQ0EsQ0FQdUIsR0NBeEIwQixFQUFvQlcsRUFBSSxDQUFDL0QsRUFBS3VFLElBQVVQLE9BQU9RLFVBQVVDLGVBQWVDLEtBQUsxRSxFQUFLdUUsRyxNQ0FsRixJQUFJSSxFQUNBdkIsRUFBb0JnQixFQUFFUSxnQkFBZUQsRUFBWXZCLEVBQW9CZ0IsRUFBRVMsU0FBVyxJQUN0RixJQUFJckQsRUFBVzRCLEVBQW9CZ0IsRUFBRTVDLFNBQ3JDLElBQUttRCxHQUFhbkQsSUFDYkEsRUFBU3NELGdCQUNaSCxFQUFZbkQsRUFBU3NELGNBQWNDLE1BQy9CSixHQUFXLENBQ2YsSUFBSUssRUFBVXhELEVBQVN5RCxxQkFBcUIsVUFDekNELEVBQVF6SCxTQUFRb0gsRUFBWUssRUFBUUEsRUFBUXpILE9BQVMsR0FBR3dILElBQzVELENBSUQsSUFBS0osRUFBVyxNQUFNLElBQUkzQyxNQUFNLHlEQUNoQzJDLEVBQVlBLEVBQVUvRixRQUFRLE9BQVEsSUFBSUEsUUFBUSxRQUFTLElBQUlBLFFBQVEsWUFBYSxLQUNwRndFLEVBQW9COEIsRUFBSVAsQyxLQ2Z4QnZCLEVBQW9CK0IsRUFBSTNELFNBQVM0RCxTQUFXQyxLQUFLUixTQUFTUyxLQ0ExRGxDLEVBQW9CbUMsUUFBS3hILEUsTUNBVixTQUFTeUgsRUFBYUMsRUFBVUMsR0FDN0MsR0FBSUEsRUFBS25JLE9BQVNrSSxFQUNoQixNQUFNLElBQUlFLFVBQVVGLEVBQVcsYUFBZUEsRUFBVyxFQUFJLElBQU0sSUFBTSx1QkFBeUJDLEVBQUtuSSxPQUFTLFdBRXBILENDSkEsU0FBU3FJLEVBQVE1RixHQUFtVixPQUF0TzRGLEVBQXJELG1CQUFYQyxRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZNEYsRUFBUTVGLEVBQU0sQ0NBelgsU0FBUyxFQUFRQSxHQUFtVixPQUF0TyxFQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksRUFBUUEsRUFBTSxDQWtDMVcsU0FBU2dHLEVBQU9DLEdBQzdCVCxFQUFhLEVBQUdVLFdBQ2hCLElBQUlDLEVBQVNuQyxPQUFPUSxVQUFVeEgsU0FBUzBILEtBQUt1QixHQUU1QyxPQUFJQSxhQUFvQkcsTUFBOEIsV0FBdEIsRUFBUUgsSUFBcUMsa0JBQVhFLEVBRXpELElBQUlDLEtBQUtILEVBQVNJLFdBQ0ksaUJBQWJKLEdBQW9DLG9CQUFYRSxFQUNsQyxJQUFJQyxLQUFLSCxJQUVTLGlCQUFiQSxHQUFvQyxvQkFBWEUsR0FBb0Qsb0JBQVpHLFVBRTNFQSxRQUFRQyxLQUFLLHNOQUViRCxRQUFRQyxNQUFLLElBQUl2RSxPQUFRd0UsUUFHcEIsSUFBSUosS0FBS0ssS0FFcEIsQ0NyRGUsU0FBU0MsRUFBVUMsR0FDaEMsR0FBb0IsT0FBaEJBLElBQXdDLElBQWhCQSxJQUF3QyxJQUFoQkEsRUFDbEQsT0FBT0YsSUFHVCxJQUFJRyxFQUFTQyxPQUFPRixHQUVwQixPQUFJRyxNQUFNRixHQUNEQSxFQUdGQSxFQUFTLEVBQUlHLEtBQUtDLEtBQUtKLEdBQVVHLEtBQUtFLE1BQU1MLEVBQ3JELENDVWUsU0FBU00sRUFBZ0JDLEVBQVdDLEdBR2pELE9BRkE1QixFQUFhLEVBQUdVLFdDREgsU0FBeUJpQixFQUFXQyxHQUNqRDVCLEVBQWEsRUFBR1UsV0FDaEIsSUFBSW1CLEVBQVlyQixFQUFPbUIsR0FBV2QsVUFDOUJpQixFQUFTWixFQUFVVSxHQUN2QixPQUFPLElBQUloQixLQUFLaUIsRUFBWUMsRUFDOUIsQ0RGU0MsQ0FBZ0JKLEdBRFZULEVBQVVVLEdBRXpCLENFeEJlLFNBQVNJLEVBQWtCTCxHQUN4QzNCLEVBQWEsRUFBR1UsV0FDaEIsSUFDSXVCLEVBQU96QixFQUFPbUIsR0FDZE8sRUFBTUQsRUFBS0UsWUFDWEMsR0FBUUYsRUFITyxFQUdjLEVBQUksR0FBS0EsRUFIdkIsRUFNbkIsT0FGQUQsRUFBS0ksV0FBV0osRUFBS0ssYUFBZUYsR0FDcENILEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsQ0NSZSxTQUFTTyxFQUFrQmIsR0FDeEMzQixFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RjLEVBQU9SLEVBQUtTLGlCQUNaQyxFQUE0QixJQUFJL0IsS0FBSyxHQUN6QytCLEVBQTBCQyxlQUFlSCxFQUFPLEVBQUcsRUFBRyxHQUN0REUsRUFBMEJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDL0MsSUFBSU0sRUFBa0JiLEVBQWtCVyxHQUNwQ0csRUFBNEIsSUFBSWxDLEtBQUssR0FDekNrQyxFQUEwQkYsZUFBZUgsRUFBTSxFQUFHLEdBQ2xESyxFQUEwQlAsWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUMvQyxJQUFJUSxFQUFrQmYsRUFBa0JjLEdBRXhDLE9BQUliLEVBQUtwQixXQUFhZ0MsRUFBZ0JoQyxVQUM3QjRCLEVBQU8sRUFDTFIsRUFBS3BCLFdBQWFrQyxFQUFnQmxDLFVBQ3BDNEIsRUFFQUEsRUFBTyxDQUVsQixDQ2xCZSxTQUFTTyxFQUFjckIsR0FDcEMzQixFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RTLEVBQU9KLEVBQWtCQyxHQUFNcEIsVUNMdEIsU0FBK0JjLEdBQzVDM0IsRUFBYSxFQUFHVSxXQUNoQixJQUFJK0IsRUFBT0QsRUFBa0JiLEdBQ3pCc0IsRUFBa0IsSUFBSXJDLEtBQUssR0FJL0IsT0FIQXFDLEVBQWdCTCxlQUFlSCxFQUFNLEVBQUcsR0FDeENRLEVBQWdCVixZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQzFCUCxFQUFrQmlCLEVBRS9CLENESGlEQyxDQUFzQmpCLEdBQU1wQixVQUkzRSxPQUFPVSxLQUFLNEIsTUFBTWYsRUFSTyxRQVF3QixDQUNuRCxDRWJBLElBQUlnQixFQUFpQixDQUFDLEVBQ2YsU0FBU0MsSUFDZCxPQUFPRCxDQUNULENDQ2UsU0FBU0UsRUFBZTNCLEVBQVcvSSxHQUNoRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT0MsRUFBdUJDLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCVSxFQUFlN0MsRUFBKzBCLFFBQXAwQnFDLEVBQThoQixRQUF0aEJDLEVBQWtkLFFBQXpjQyxFQUE2RyxRQUFwR0MsRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JHLG9CQUFvQyxJQUFWTixFQUFtQkEsRUFBUUwsRUFBZVcsb0JBQW9DLElBQVZQLEVBQW1CQSxFQUE0RCxRQUFuREssRUFBd0JULEVBQWVZLGNBQThDLElBQTFCSCxHQUF5RyxRQUE1REMsRUFBeUJELEVBQXNCakwsZUFBZ0QsSUFBM0JrTCxPQUE5RSxFQUEySEEsRUFBdUJDLG9CQUFtQyxJQUFUUixFQUFrQkEsRUFBTyxHQUVuNEIsS0FBTVEsR0FBZ0IsR0FBS0EsR0FBZ0IsR0FDekMsTUFBTSxJQUFJRSxXQUFXLG9EQUd2QixJQUFJaEMsRUFBT3pCLEVBQU9tQixHQUNkTyxFQUFNRCxFQUFLRSxZQUNYQyxHQUFRRixFQUFNNkIsRUFBZSxFQUFJLEdBQUs3QixFQUFNNkIsRUFHaEQsT0FGQTlCLEVBQUtJLFdBQVdKLEVBQUtLLGFBQWVGLEdBQ3BDSCxFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULENDaEJlLFNBQVNpQyxFQUFldkMsRUFBVy9JLEdBQ2hELElBQUkySyxFQUFNQyxFQUFPQyxFQUFPVSxFQUF1QlIsRUFBaUJDLEVBQXVCQyxFQUF1QkMsRUFFOUc5RCxFQUFhLEVBQUdVLFdBQ2hCLElBQUl1QixFQUFPekIsRUFBT21CLEdBQ2RjLEVBQU9SLEVBQUtTLGlCQUNaVSxFQUFpQkMsSUFDakJlLEVBQXdCbEQsRUFBbTNCLFFBQXgyQnFDLEVBQXlqQixRQUFqakJDLEVBQW9lLFFBQTNkQyxFQUFzSCxRQUE3R1UsRUFBd0J2TCxhQUF5QyxFQUFTQSxFQUFRd0wsNkJBQTZELElBQTFCRCxFQUFtQ0EsRUFBd0J2TCxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JRLDZCQUE2QyxJQUFWWCxFQUFtQkEsRUFBUUwsRUFBZWdCLDZCQUE2QyxJQUFWWixFQUFtQkEsRUFBNEQsUUFBbkRLLEVBQXdCVCxFQUFlWSxjQUE4QyxJQUExQkgsR0FBeUcsUUFBNURDLEVBQXlCRCxFQUFzQmpMLGVBQWdELElBQTNCa0wsT0FBOUUsRUFBMkhBLEVBQXVCTSw2QkFBNEMsSUFBVGIsRUFBa0JBLEVBQU8sR0FFaDdCLEtBQU1hLEdBQXlCLEdBQUtBLEdBQXlCLEdBQzNELE1BQU0sSUFBSUgsV0FBVyw2REFHdkIsSUFBSUksRUFBc0IsSUFBSXpELEtBQUssR0FDbkN5RCxFQUFvQnpCLGVBQWVILEVBQU8sRUFBRyxFQUFHMkIsR0FDaERDLEVBQW9COUIsWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUN6QyxJQUFJTSxFQUFrQlMsRUFBZWUsRUFBcUJ6TCxHQUN0RDBMLEVBQXNCLElBQUkxRCxLQUFLLEdBQ25DMEQsRUFBb0IxQixlQUFlSCxFQUFNLEVBQUcyQixHQUM1Q0UsRUFBb0IvQixZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ3pDLElBQUlRLEVBQWtCTyxFQUFlZ0IsRUFBcUIxTCxHQUUxRCxPQUFJcUosRUFBS3BCLFdBQWFnQyxFQUFnQmhDLFVBQzdCNEIsRUFBTyxFQUNMUixFQUFLcEIsV0FBYWtDLEVBQWdCbEMsVUFDcEM0QixFQUVBQSxFQUFPLENBRWxCLENDN0JlLFNBQVM4QixFQUFXNUMsRUFBVy9JLEdBQzVDb0gsRUFBYSxFQUFHVSxXQUNoQixJQUFJdUIsRUFBT3pCLEVBQU9tQixHQUNkUyxFQUFPa0IsRUFBZXJCLEVBQU1ySixHQUFTaUksVUNINUIsU0FBNEJjLEVBQVcvSSxHQUNwRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT1UsRUFBdUJSLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCZSxFQUF3QmxELEVBQW0zQixRQUF4MkJxQyxFQUF5akIsUUFBampCQyxFQUFvZSxRQUEzZEMsRUFBc0gsUUFBN0dVLEVBQXdCdkwsYUFBeUMsRUFBU0EsRUFBUXdMLDZCQUE2RCxJQUExQkQsRUFBbUNBLEVBQXdCdkwsU0FBeUYsUUFBdEMrSyxFQUFrQi9LLEVBQVFvTCxjQUF3QyxJQUFwQkwsR0FBNEYsUUFBckRDLEVBQXdCRCxFQUFnQi9LLGVBQStDLElBQTFCZ0wsT0FBNUosRUFBd01BLEVBQXNCUSw2QkFBNkMsSUFBVlgsRUFBbUJBLEVBQVFMLEVBQWVnQiw2QkFBNkMsSUFBVlosRUFBbUJBLEVBQTRELFFBQW5ESyxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1Qk0sNkJBQTRDLElBQVRiLEVBQWtCQSxFQUFPLEdBQzU2QmQsRUFBT3lCLEVBQWV2QyxFQUFXL0ksR0FDakM0TCxFQUFZLElBQUk1RCxLQUFLLEdBSXpCLE9BSEE0RCxFQUFVNUIsZUFBZUgsRUFBTSxFQUFHMkIsR0FDbENJLEVBQVVqQyxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ3BCZSxFQUFla0IsRUFBVzVMLEVBRXZDLENEVHVENkwsQ0FBbUJ4QyxFQUFNckosR0FBU2lJLFVBSXZGLE9BQU9VLEtBQUs0QixNQUFNZixFQVJPLFFBUXdCLENBQ25ELENFYmUsU0FBU3NDLEVBQWdCdEQsRUFBUXVELEdBSTlDLElBSEEsSUFBSUMsRUFBT3hELEVBQVMsRUFBSSxJQUFNLEdBQzFCeUQsRUFBU3RELEtBQUt1RCxJQUFJMUQsR0FBUTVKLFdBRXZCcU4sRUFBTzlNLE9BQVM0TSxHQUNyQkUsRUFBUyxJQUFNQSxFQUdqQixPQUFPRCxFQUFPQyxDQUNoQixDQzBFQSxRQW5FSyxTQUFXNUMsRUFBTThDLEdBU2xCLElBQUlDLEVBQWEvQyxFQUFLUyxpQkFFbEJELEVBQU91QyxFQUFhLEVBQUlBLEVBQWEsRUFBSUEsRUFDN0MsT0FBT04sRUFBMEIsT0FBVkssRUFBaUJ0QyxFQUFPLElBQU1BLEVBQU1zQyxFQUFNaE4sT0FDbkUsRUFzREYsRUFwREssU0FBV2tLLEVBQU04QyxHQUNsQixJQUFJRSxFQUFRaEQsRUFBS2lELGNBQ2pCLE1BQWlCLE1BQVZILEVBQWdCbE0sT0FBT29NLEVBQVEsR0FBS1AsRUFBZ0JPLEVBQVEsRUFBRyxFQUN4RSxFQWlERixFQS9DSyxTQUFXaEQsRUFBTThDLEdBQ2xCLE9BQU9MLEVBQWdCekMsRUFBS0ssYUFBY3lDLEVBQU1oTixPQUNsRCxFQTZDRixFQXZCSyxTQUFXa0ssRUFBTThDLEdBQ2xCLE9BQU9MLEVBQWdCekMsRUFBS2tELGNBQWdCLElBQU0sR0FBSUosRUFBTWhOLE9BQzlELEVBcUJGLEVBbkJLLFNBQVdrSyxFQUFNOEMsR0FDbEIsT0FBT0wsRUFBZ0J6QyxFQUFLa0QsY0FBZUosRUFBTWhOLE9BQ25ELEVBaUJGLEVBZkssU0FBV2tLLEVBQU04QyxHQUNsQixPQUFPTCxFQUFnQnpDLEVBQUttRCxnQkFBaUJMLEVBQU1oTixPQUNyRCxFQWFGLEVBWEssU0FBV2tLLEVBQU04QyxHQUNsQixPQUFPTCxFQUFnQnpDLEVBQUtvRCxnQkFBaUJOLEVBQU1oTixPQUNyRCxFQVNGLEVBUEssU0FBV2tLLEVBQU04QyxHQUNsQixJQUFJTyxFQUFpQlAsRUFBTWhOLE9BQ3ZCd04sRUFBZXRELEVBQUt1RCxxQkFFeEIsT0FBT2QsRUFEaUJuRCxLQUFLRSxNQUFNOEQsRUFBZWhFLEtBQUtrRSxJQUFJLEdBQUlILEVBQWlCLElBQ3RDUCxFQUFNaE4sT0FDbEQsRUMxRUYsSUF3REksRUFBYSxDQUVmMk4sRUFBRyxTQUFXekQsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlDLEVBQU0zRCxFQUFLUyxpQkFBbUIsRUFBSSxFQUFJLEVBRTFDLE9BQVFxQyxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9ZLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sZ0JBSVgsSUFBSyxRQUNILE9BQU9GLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sV0FLWCxRQUNFLE9BQU9GLEVBQVNDLElBQUlBLEVBQUssQ0FDdkJDLE1BQU8sU0FHZixFQUVBQyxFQUFHLFNBQVc3RCxFQUFNOEMsRUFBT1ksR0FFekIsR0FBYyxPQUFWWixFQUFnQixDQUNsQixJQUFJQyxFQUFhL0MsRUFBS1MsaUJBRWxCRCxFQUFPdUMsRUFBYSxFQUFJQSxFQUFhLEVBQUlBLEVBQzdDLE9BQU9XLEVBQVNJLGNBQWN0RCxFQUFNLENBQ2xDdUQsS0FBTSxRQUVWLENBRUEsT0FBT0MsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQW1CLEVBQUcsU0FBV2pFLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSXVOLEVBQWlCakMsRUFBZWpDLEVBQU1ySixHQUV0Q3dOLEVBQVdELEVBQWlCLEVBQUlBLEVBQWlCLEVBQUlBLEVBRXpELE1BQWMsT0FBVnBCLEVBRUtMLEVBRFkwQixFQUFXLElBQ08sR0FJekIsT0FBVnJCLEVBQ0tZLEVBQVNJLGNBQWNLLEVBQVUsQ0FDdENKLEtBQU0sU0FLSHRCLEVBQWdCMEIsRUFBVXJCLEVBQU1oTixPQUN6QyxFQUVBc08sRUFBRyxTQUFXcEUsRUFBTThDLEdBR2xCLE9BQU9MLEVBRldsQyxFQUFrQlAsR0FFQThDLEVBQU1oTixPQUM1QyxFQVVBdU8sRUFBRyxTQUFXckUsRUFBTThDLEdBRWxCLE9BQU9MLEVBREl6QyxFQUFLUyxpQkFDYXFDLEVBQU1oTixPQUNyQyxFQUVBd08sRUFBRyxTQUFXdEUsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlhLEVBQVVqRixLQUFLQyxNQUFNUyxFQUFLaUQsY0FBZ0IsR0FBSyxHQUVuRCxPQUFRSCxHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzJOLEdBR2hCLElBQUssS0FDSCxPQUFPOUIsRUFBZ0I4QixFQUFTLEdBR2xDLElBQUssS0FDSCxPQUFPYixFQUFTSSxjQUFjUyxFQUFTLENBQ3JDUixLQUFNLFlBSVYsSUFBSyxNQUNILE9BQU9MLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTYSxRQUFRQSxFQUFTLENBQy9CWCxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU9kLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sT0FDUFksUUFBUyxlQUdqQixFQUVBQyxFQUFHLFNBQVd6RSxFQUFNOEMsRUFBT1ksR0FDekIsSUFBSWEsRUFBVWpGLEtBQUtDLE1BQU1TLEVBQUtpRCxjQUFnQixHQUFLLEdBRW5ELE9BQVFILEdBRU4sSUFBSyxJQUNILE9BQU9sTSxPQUFPMk4sR0FHaEIsSUFBSyxLQUNILE9BQU85QixFQUFnQjhCLEVBQVMsR0FHbEMsSUFBSyxLQUNILE9BQU9iLEVBQVNJLGNBQWNTLEVBQVMsQ0FDckNSLEtBQU0sWUFJVixJQUFLLE1BQ0gsT0FBT0wsRUFBU2EsUUFBUUEsRUFBUyxDQUMvQlgsTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVNhLFFBQVFBLEVBQVMsQ0FDL0JYLE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU2EsUUFBUUEsRUFBUyxDQUMvQlgsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUFFLEVBQUcsU0FBVzFFLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJVixFQUFRaEQsRUFBS2lELGNBRWpCLE9BQVFILEdBQ04sSUFBSyxJQUNMLElBQUssS0FDSCxPQUFPa0IsRUFBa0JoRSxFQUFNOEMsR0FHakMsSUFBSyxLQUNILE9BQU9ZLEVBQVNJLGNBQWNkLEVBQVEsRUFBRyxDQUN2Q2UsS0FBTSxVQUlWLElBQUssTUFDSCxPQUFPTCxFQUFTVixNQUFNQSxFQUFPLENBQzNCWSxNQUFPLGNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT2QsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxTQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTVixNQUFNQSxFQUFPLENBQzNCWSxNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQUcsRUFBRyxTQUFXM0UsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlWLEVBQVFoRCxFQUFLaUQsY0FFakIsT0FBUUgsR0FFTixJQUFLLElBQ0gsT0FBT2xNLE9BQU9vTSxFQUFRLEdBR3hCLElBQUssS0FDSCxPQUFPUCxFQUFnQk8sRUFBUSxFQUFHLEdBR3BDLElBQUssS0FDSCxPQUFPVSxFQUFTSSxjQUFjZCxFQUFRLEVBQUcsQ0FDdkNlLEtBQU0sVUFJVixJQUFLLE1BQ0gsT0FBT0wsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVNWLE1BQU1BLEVBQU8sQ0FDM0JZLE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU1YsTUFBTUEsRUFBTyxDQUMzQlksTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUFJLEVBQUcsU0FBVzVFLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSWtPLEVBQU92QyxFQUFXdEMsRUFBTXJKLEdBRTVCLE1BQWMsT0FBVm1NLEVBQ0tZLEVBQVNJLGNBQWNlLEVBQU0sQ0FDbENkLEtBQU0sU0FJSHRCLEVBQWdCb0MsRUFBTS9CLEVBQU1oTixPQUNyQyxFQUVBZ1AsRUFBRyxTQUFXOUUsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUlxQixFQUFVaEUsRUFBY2YsR0FFNUIsTUFBYyxPQUFWOEMsRUFDS1ksRUFBU0ksY0FBY2lCLEVBQVMsQ0FDckNoQixLQUFNLFNBSUh0QixFQUFnQnNDLEVBQVNqQyxFQUFNaE4sT0FDeEMsRUFFQW9HLEVBQUcsU0FBVzhELEVBQU04QyxFQUFPWSxHQUN6QixNQUFjLE9BQVZaLEVBQ0tZLEVBQVNJLGNBQWM5RCxFQUFLSyxhQUFjLENBQy9DMEQsS0FBTSxTQUlIQyxFQUFrQmhFLEVBQU04QyxFQUNqQyxFQUVBa0MsRUFBRyxTQUFXaEYsRUFBTThDLEVBQU9ZLEdBQ3pCLElBQUl1QixFQ3RWTyxTQUF5QnZGLEdBQ3RDM0IsRUFBYSxFQUFHVSxXQUNoQixJQUFJdUIsRUFBT3pCLEVBQU9tQixHQUNkRSxFQUFZSSxFQUFLcEIsVUFDckJvQixFQUFLa0YsWUFBWSxFQUFHLEdBQ3BCbEYsRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUMxQixJQUNJNkUsRUFBYXZGLEVBRFVJLEVBQUtwQixVQUVoQyxPQUFPVSxLQUFLRSxNQUFNMkYsRUFUTSxPQVM4QixDQUN4RCxDRDZVb0JDLENBQWdCcEYsR0FFaEMsTUFBYyxPQUFWOEMsRUFDS1ksRUFBU0ksY0FBY21CLEVBQVcsQ0FDdkNsQixLQUFNLGNBSUh0QixFQUFnQndDLEVBQVduQyxFQUFNaE4sT0FDMUMsRUFFQXVQLEVBQUcsU0FBV3JGLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJNEIsRUFBWXRGLEVBQUtFLFlBRXJCLE9BQVE0QyxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9ZLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFNBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxRQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQW5LLEVBQUcsU0FBVzJGLEVBQU04QyxFQUFPWSxFQUFVL00sR0FDbkMsSUFBSTJPLEVBQVl0RixFQUFLRSxZQUNqQnFGLEdBQWtCRCxFQUFZM08sRUFBUW1MLGFBQWUsR0FBSyxHQUFLLEVBRW5FLE9BQVFnQixHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzJPLEdBR2hCLElBQUssS0FDSCxPQUFPOUMsRUFBZ0I4QyxFQUFnQixHQUd6QyxJQUFLLEtBQ0gsT0FBTzdCLEVBQVNJLGNBQWN5QixFQUFnQixDQUM1Q3hCLEtBQU0sUUFHVixJQUFLLE1BQ0gsT0FBT0wsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxjQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssU0FDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFFBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sT0FDUFksUUFBUyxlQUdqQixFQUVBZ0IsRUFBRyxTQUFXeEYsRUFBTThDLEVBQU9ZLEVBQVUvTSxHQUNuQyxJQUFJMk8sRUFBWXRGLEVBQUtFLFlBQ2pCcUYsR0FBa0JELEVBQVkzTyxFQUFRbUwsYUFBZSxHQUFLLEdBQUssRUFFbkUsT0FBUWdCLEdBRU4sSUFBSyxJQUNILE9BQU9sTSxPQUFPMk8sR0FHaEIsSUFBSyxLQUNILE9BQU85QyxFQUFnQjhDLEVBQWdCekMsRUFBTWhOLFFBRy9DLElBQUssS0FDSCxPQUFPNE4sRUFBU0ksY0FBY3lCLEVBQWdCLENBQzVDeEIsS0FBTSxRQUdWLElBQUssTUFDSCxPQUFPTCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLGNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU9kLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sUUFDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUF4TyxFQUFHLFNBQVdnSyxFQUFNOEMsRUFBT1ksR0FDekIsSUFBSTRCLEVBQVl0RixFQUFLRSxZQUNqQnVGLEVBQTZCLElBQWRILEVBQWtCLEVBQUlBLEVBRXpDLE9BQVF4QyxHQUVOLElBQUssSUFDSCxPQUFPbE0sT0FBTzZPLEdBR2hCLElBQUssS0FDSCxPQUFPaEQsRUFBZ0JnRCxFQUFjM0MsRUFBTWhOLFFBRzdDLElBQUssS0FDSCxPQUFPNE4sRUFBU0ksY0FBYzJCLEVBQWMsQ0FDMUMxQixLQUFNLFFBSVYsSUFBSyxNQUNILE9BQU9MLEVBQVN6RCxJQUFJcUYsRUFBVyxDQUM3QjFCLE1BQU8sY0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFNBQ0gsT0FBT2QsRUFBU3pELElBQUlxRixFQUFXLENBQzdCMUIsTUFBTyxRQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPZCxFQUFTekQsSUFBSXFGLEVBQVcsQ0FDN0IxQixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXJJLEVBQUcsU0FBVzZELEVBQU04QyxFQUFPWSxHQUN6QixJQUNJZ0MsRUFEUTFGLEVBQUtrRCxjQUNnQixJQUFNLEVBQUksS0FBTyxLQUVsRCxPQUFRSixHQUNOLElBQUssSUFDTCxJQUFLLEtBQ0gsT0FBT1ksRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxjQUNQWSxRQUFTLGVBR2IsSUFBSyxNQUNILE9BQU9kLEVBQVNpQyxVQUFVRCxFQUFvQixDQUM1QzlCLE1BQU8sY0FDUFksUUFBUyxlQUNSb0IsY0FFTCxJQUFLLFFBQ0gsT0FBT2xDLEVBQVNpQyxVQUFVRCxFQUFvQixDQUM1QzlCLE1BQU8sU0FDUFksUUFBUyxlQUliLFFBQ0UsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxPQUNQWSxRQUFTLGVBR2pCLEVBRUE5RyxFQUFHLFNBQVdzQyxFQUFNOEMsRUFBT1ksR0FDekIsSUFDSWdDLEVBREFHLEVBQVE3RixFQUFLa0QsY0FXakIsT0FQRXdDLEVBRFksS0FBVkcsRUF2akJBLE9BeWpCaUIsSUFBVkEsRUExakJILFdBNmpCZUEsRUFBUSxJQUFNLEVBQUksS0FBTyxLQUd4Qy9DLEdBQ04sSUFBSyxJQUNMLElBQUssS0FDSCxPQUFPWSxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLGNBQ1BZLFFBQVMsZUFHYixJQUFLLE1BQ0gsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxjQUNQWSxRQUFTLGVBQ1JvQixjQUVMLElBQUssUUFDSCxPQUFPbEMsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPZCxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXNCLEVBQUcsU0FBVzlGLEVBQU04QyxFQUFPWSxHQUN6QixJQUNJZ0MsRUFEQUcsRUFBUTdGLEVBQUtrRCxjQWFqQixPQVRFd0MsRUFERUcsR0FBUyxHQTdsQk4sVUErbEJJQSxHQUFTLEdBaG1CWCxZQWttQkVBLEdBQVMsRUFubUJiLFVBR0YsUUFzbUJHL0MsR0FDTixJQUFLLElBQ0wsSUFBSyxLQUNMLElBQUssTUFDSCxPQUFPWSxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLGNBQ1BZLFFBQVMsZUFHYixJQUFLLFFBQ0gsT0FBT2QsRUFBU2lDLFVBQVVELEVBQW9CLENBQzVDOUIsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPZCxFQUFTaUMsVUFBVUQsRUFBb0IsQ0FDNUM5QixNQUFPLE9BQ1BZLFFBQVMsZUFHakIsRUFFQXVCLEVBQUcsU0FBVy9GLEVBQU04QyxFQUFPWSxHQUN6QixHQUFjLE9BQVZaLEVBQWdCLENBQ2xCLElBQUkrQyxFQUFRN0YsRUFBS2tELGNBQWdCLEdBRWpDLE9BRGMsSUFBVjJDLElBQWFBLEVBQVEsSUFDbEJuQyxFQUFTSSxjQUFjK0IsRUFBTyxDQUNuQzlCLEtBQU0sUUFFVixDQUVBLE9BQU9DLEVBQWtCaEUsRUFBTThDLEVBQ2pDLEVBRUFrRCxFQUFHLFNBQVdoRyxFQUFNOEMsRUFBT1ksR0FDekIsTUFBYyxPQUFWWixFQUNLWSxFQUFTSSxjQUFjOUQsRUFBS2tELGNBQWUsQ0FDaERhLEtBQU0sU0FJSEMsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQW1ELEVBQUcsU0FBV2pHLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJbUMsRUFBUTdGLEVBQUtrRCxjQUFnQixHQUVqQyxNQUFjLE9BQVZKLEVBQ0tZLEVBQVNJLGNBQWMrQixFQUFPLENBQ25DOUIsS0FBTSxTQUlIdEIsRUFBZ0JvRCxFQUFPL0MsRUFBTWhOLE9BQ3RDLEVBRUFVLEVBQUcsU0FBV3dKLEVBQU04QyxFQUFPWSxHQUN6QixJQUFJbUMsRUFBUTdGLEVBQUtrRCxjQUdqQixPQUZjLElBQVYyQyxJQUFhQSxFQUFRLElBRVgsT0FBVi9DLEVBQ0tZLEVBQVNJLGNBQWMrQixFQUFPLENBQ25DOUIsS0FBTSxTQUlIdEIsRUFBZ0JvRCxFQUFPL0MsRUFBTWhOLE9BQ3RDLEVBRUFpRyxFQUFHLFNBQVdpRSxFQUFNOEMsRUFBT1ksR0FDekIsTUFBYyxPQUFWWixFQUNLWSxFQUFTSSxjQUFjOUQsRUFBS21ELGdCQUFpQixDQUNsRFksS0FBTSxXQUlIQyxFQUFrQmhFLEVBQU04QyxFQUNqQyxFQUVBb0QsRUFBRyxTQUFXbEcsRUFBTThDLEVBQU9ZLEdBQ3pCLE1BQWMsT0FBVlosRUFDS1ksRUFBU0ksY0FBYzlELEVBQUtvRCxnQkFBaUIsQ0FDbERXLEtBQU0sV0FJSEMsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQXFELEVBQUcsU0FBV25HLEVBQU04QyxHQUNsQixPQUFPa0IsRUFBa0JoRSxFQUFNOEMsRUFDakMsRUFFQXNELEVBQUcsU0FBV3BHLEVBQU04QyxFQUFPdUQsRUFBVzFQLEdBQ3BDLElBQ0kyUCxHQURlM1AsRUFBUTRQLGVBQWlCdkcsR0FDVndHLG9CQUVsQyxHQUF1QixJQUFuQkYsRUFDRixNQUFPLElBR1QsT0FBUXhELEdBRU4sSUFBSyxJQUNILE9BQU8yRCxFQUFrQ0gsR0FLM0MsSUFBSyxPQUNMLElBQUssS0FFSCxPQUFPSSxFQUFlSixHQVF4QixRQUNFLE9BQU9JLEVBQWVKLEVBQWdCLEtBRTVDLEVBRUFLLEVBQUcsU0FBVzNHLEVBQU04QyxFQUFPdUQsRUFBVzFQLEdBQ3BDLElBQ0kyUCxHQURlM1AsRUFBUTRQLGVBQWlCdkcsR0FDVndHLG9CQUVsQyxPQUFRMUQsR0FFTixJQUFLLElBQ0gsT0FBTzJELEVBQWtDSCxHQUszQyxJQUFLLE9BQ0wsSUFBSyxLQUVILE9BQU9JLEVBQWVKLEdBUXhCLFFBQ0UsT0FBT0ksRUFBZUosRUFBZ0IsS0FFNUMsRUFFQU0sRUFBRyxTQUFXNUcsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFDSTJQLEdBRGUzUCxFQUFRNFAsZUFBaUJ2RyxHQUNWd0csb0JBRWxDLE9BQVExRCxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE1BQU8sTUFBUStELEVBQW9CUCxFQUFnQixLQUlyRCxRQUNFLE1BQU8sTUFBUUksRUFBZUosRUFBZ0IsS0FFcEQsRUFFQVEsRUFBRyxTQUFXOUcsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFDSTJQLEdBRGUzUCxFQUFRNFAsZUFBaUJ2RyxHQUNWd0csb0JBRWxDLE9BQVExRCxHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE1BQU8sTUFBUStELEVBQW9CUCxFQUFnQixLQUlyRCxRQUNFLE1BQU8sTUFBUUksRUFBZUosRUFBZ0IsS0FFcEQsRUFFQVMsRUFBRyxTQUFXL0csRUFBTThDLEVBQU91RCxFQUFXMVAsR0FDcEMsSUFBSXFRLEVBQWVyUSxFQUFRNFAsZUFBaUJ2RyxFQUU1QyxPQUFPeUMsRUFEU25ELEtBQUtFLE1BQU13SCxFQUFhcEksVUFBWSxLQUNsQmtFLEVBQU1oTixPQUMxQyxFQUVBbVIsRUFBRyxTQUFXakgsRUFBTThDLEVBQU91RCxFQUFXMVAsR0FHcEMsT0FBTzhMLEdBRlk5TCxFQUFRNFAsZUFBaUJ2RyxHQUNmcEIsVUFDS2tFLEVBQU1oTixPQUMxQyxHQUdGLFNBQVMrUSxFQUFvQkssRUFBUUMsR0FDbkMsSUFBSXhFLEVBQU91RSxFQUFTLEVBQUksSUFBTSxJQUMxQkUsRUFBWTlILEtBQUt1RCxJQUFJcUUsR0FDckJyQixFQUFRdkcsS0FBS0UsTUFBTTRILEVBQVksSUFDL0JDLEVBQVVELEVBQVksR0FFMUIsR0FBZ0IsSUFBWkMsRUFDRixPQUFPMUUsRUFBTy9MLE9BQU9pUCxHQUd2QixJQUFJeUIsRUFBWUgsR0FBa0IsR0FDbEMsT0FBT3hFLEVBQU8vTCxPQUFPaVAsR0FBU3lCLEVBQVk3RSxFQUFnQjRFLEVBQVMsRUFDckUsQ0FFQSxTQUFTWixFQUFrQ1MsRUFBUUMsR0FDakQsT0FBSUQsRUFBUyxJQUFPLEdBQ1BBLEVBQVMsRUFBSSxJQUFNLEtBQ2hCekUsRUFBZ0JuRCxLQUFLdUQsSUFBSXFFLEdBQVUsR0FBSSxHQUdoRFIsRUFBZVEsRUFBUUMsRUFDaEMsQ0FFQSxTQUFTVCxFQUFlUSxFQUFRQyxHQUM5QixJQUFJRyxFQUFZSCxHQUFrQixHQUM5QnhFLEVBQU91RSxFQUFTLEVBQUksSUFBTSxJQUMxQkUsRUFBWTlILEtBQUt1RCxJQUFJcUUsR0FHekIsT0FBT3ZFLEVBRktGLEVBQWdCbkQsS0FBS0UsTUFBTTRILEVBQVksSUFBSyxHQUVsQ0UsRUFEUjdFLEVBQWdCMkUsRUFBWSxHQUFJLEVBRWhELENBRUEsVUVqMkJBLElBQUlHLEVBQW9CLFNBQTJCQyxFQUFTQyxHQUMxRCxPQUFRRCxHQUNOLElBQUssSUFDSCxPQUFPQyxFQUFXekgsS0FBSyxDQUNyQjRELE1BQU8sVUFHWCxJQUFLLEtBQ0gsT0FBTzZELEVBQVd6SCxLQUFLLENBQ3JCNEQsTUFBTyxXQUdYLElBQUssTUFDSCxPQUFPNkQsRUFBV3pILEtBQUssQ0FDckI0RCxNQUFPLFNBSVgsUUFDRSxPQUFPNkQsRUFBV3pILEtBQUssQ0FDckI0RCxNQUFPLFNBR2YsRUFFSThELEVBQW9CLFNBQTJCRixFQUFTQyxHQUMxRCxPQUFRRCxHQUNOLElBQUssSUFDSCxPQUFPQyxFQUFXRSxLQUFLLENBQ3JCL0QsTUFBTyxVQUdYLElBQUssS0FDSCxPQUFPNkQsRUFBV0UsS0FBSyxDQUNyQi9ELE1BQU8sV0FHWCxJQUFLLE1BQ0gsT0FBTzZELEVBQVdFLEtBQUssQ0FDckIvRCxNQUFPLFNBSVgsUUFDRSxPQUFPNkQsRUFBV0UsS0FBSyxDQUNyQi9ELE1BQU8sU0FHZixFQStDQSxRQUpxQixDQUNuQm5HLEVBQUdpSyxFQUNIRSxFQTNDMEIsU0FBK0JKLEVBQVNDLEdBQ2xFLElBUUlJLEVBUkFDLEVBQWNOLEVBQVFPLE1BQU0sY0FBZ0IsR0FDNUNDLEVBQWNGLEVBQVksR0FDMUJHLEVBQWNILEVBQVksR0FFOUIsSUFBS0csRUFDSCxPQUFPVixFQUFrQkMsRUFBU0MsR0FLcEMsT0FBUU8sR0FDTixJQUFLLElBQ0hILEVBQWlCSixFQUFXUyxTQUFTLENBQ25DdEUsTUFBTyxVQUVULE1BRUYsSUFBSyxLQUNIaUUsRUFBaUJKLEVBQVdTLFNBQVMsQ0FDbkN0RSxNQUFPLFdBRVQsTUFFRixJQUFLLE1BQ0hpRSxFQUFpQkosRUFBV1MsU0FBUyxDQUNuQ3RFLE1BQU8sU0FFVCxNQUdGLFFBQ0VpRSxFQUFpQkosRUFBV1MsU0FBUyxDQUNuQ3RFLE1BQU8sU0FLYixPQUFPaUUsRUFBZTFRLFFBQVEsV0FBWW9RLEVBQWtCUyxFQUFhUCxJQUFhdFEsUUFBUSxXQUFZdVEsRUFBa0JPLEVBQWFSLEdBQzNJLEdDOUVlLFNBQVNVLEVBQWdDbkksR0FDdEQsSUFBSW9JLEVBQVUsSUFBSXpKLEtBQUtBLEtBQUswSixJQUFJckksRUFBS3NJLGNBQWV0SSxFQUFLdUksV0FBWXZJLEVBQUt3SSxVQUFXeEksRUFBS3lJLFdBQVl6SSxFQUFLMEksYUFBYzFJLEVBQUsySSxhQUFjM0ksRUFBSzRJLG9CQUVqSixPQURBUixFQUFRekgsZUFBZVgsRUFBS3NJLGVBQ3JCdEksRUFBS3BCLFVBQVl3SixFQUFReEosU0FDbEMsQ0NmQSxJQUFJaUssRUFBMkIsQ0FBQyxJQUFLLE1BQ2pDQyxFQUEwQixDQUFDLEtBQU0sUUFDOUIsU0FBU0MsRUFBMEJqRyxHQUN4QyxPQUFvRCxJQUE3QytGLEVBQXlCRyxRQUFRbEcsRUFDMUMsQ0FDTyxTQUFTbUcsRUFBeUJuRyxHQUN2QyxPQUFtRCxJQUE1Q2dHLEVBQXdCRSxRQUFRbEcsRUFDekMsQ0FDTyxTQUFTb0csRUFBb0JwRyxFQUFPcUcsRUFBUUMsR0FDakQsR0FBYyxTQUFWdEcsRUFDRixNQUFNLElBQUlkLFdBQVcscUNBQXFDbk0sT0FBT3NULEVBQVEsMENBQTBDdFQsT0FBT3VULEVBQU8sbUZBQzVILEdBQWMsT0FBVnRHLEVBQ1QsTUFBTSxJQUFJZCxXQUFXLGlDQUFpQ25NLE9BQU9zVCxFQUFRLDBDQUEwQ3RULE9BQU91VCxFQUFPLG1GQUN4SCxHQUFjLE1BQVZ0RyxFQUNULE1BQU0sSUFBSWQsV0FBVywrQkFBK0JuTSxPQUFPc1QsRUFBUSxzREFBc0R0VCxPQUFPdVQsRUFBTyxtRkFDbEksR0FBYyxPQUFWdEcsRUFDVCxNQUFNLElBQUlkLFdBQVcsaUNBQWlDbk0sT0FBT3NULEVBQVEsc0RBQXNEdFQsT0FBT3VULEVBQU8sa0ZBRTdJLENDbEJBLElBQUlDLEVBQXVCLENBQ3pCQyxpQkFBa0IsQ0FDaEJDLElBQUsscUJBQ0xDLE1BQU8sK0JBRVRDLFNBQVUsQ0FDUkYsSUFBSyxXQUNMQyxNQUFPLHFCQUVURSxZQUFhLGdCQUNiQyxpQkFBa0IsQ0FDaEJKLElBQUsscUJBQ0xDLE1BQU8sK0JBRVRJLFNBQVUsQ0FDUkwsSUFBSyxXQUNMQyxNQUFPLHFCQUVUSyxZQUFhLENBQ1hOLElBQUssZUFDTEMsTUFBTyx5QkFFVE0sT0FBUSxDQUNOUCxJQUFLLFNBQ0xDLE1BQU8sbUJBRVRPLE1BQU8sQ0FDTFIsSUFBSyxRQUNMQyxNQUFPLGtCQUVUUSxZQUFhLENBQ1hULElBQUssZUFDTEMsTUFBTyx5QkFFVFMsT0FBUSxDQUNOVixJQUFLLFNBQ0xDLE1BQU8sbUJBRVRVLGFBQWMsQ0FDWlgsSUFBSyxnQkFDTEMsTUFBTywwQkFFVFcsUUFBUyxDQUNQWixJQUFLLFVBQ0xDLE1BQU8sb0JBRVRZLFlBQWEsQ0FDWGIsSUFBSyxlQUNMQyxNQUFPLHlCQUVUYSxPQUFRLENBQ05kLElBQUssU0FDTEMsTUFBTyxtQkFFVGMsV0FBWSxDQUNWZixJQUFLLGNBQ0xDLE1BQU8sd0JBRVRlLGFBQWMsQ0FDWmhCLElBQUssZ0JBQ0xDLE1BQU8sMkJDNURJLFNBQVNnQixFQUFrQnZNLEdBQ3hDLE9BQU8sV0FDTCxJQUFJdEgsRUFBVThILFVBQVUzSSxPQUFTLFFBQXNCUSxJQUFqQm1JLFVBQVUsR0FBbUJBLFVBQVUsR0FBSyxDQUFDLEVBRS9FbUYsRUFBUWpOLEVBQVFpTixNQUFRaE4sT0FBT0QsRUFBUWlOLE9BQVMzRixFQUFLd00sYUFFekQsT0FEYXhNLEVBQUt5TSxRQUFROUcsSUFBVTNGLEVBQUt5TSxRQUFRek0sRUFBS3dNLGFBRXhELENBQ0YsQ0N5QkEsUUFkaUIsQ0FDZnpLLEtBQU13SyxFQUFrQixDQUN0QkUsUUFwQmMsQ0FDaEJDLEtBQU0sbUJBQ05DLEtBQU0sYUFDTkMsT0FBUSxXQUNSQyxNQUFPLGNBaUJMTCxhQUFjLFNBRWhCOUMsS0FBTTZDLEVBQWtCLENBQ3RCRSxRQWxCYyxDQUNoQkMsS0FBTSxpQkFDTkMsS0FBTSxjQUNOQyxPQUFRLFlBQ1JDLE1BQU8sVUFlTEwsYUFBYyxTQUVoQnZDLFNBQVVzQyxFQUFrQixDQUMxQkUsUUFoQmtCLENBQ3BCQyxLQUFNLHlCQUNOQyxLQUFNLHlCQUNOQyxPQUFRLHFCQUNSQyxNQUFPLHNCQWFMTCxhQUFjLFVDOUJsQixJQUFJTSxFQUF1QixDQUN6QkMsU0FBVSxxQkFDVkMsVUFBVyxtQkFDWEMsTUFBTyxlQUNQQyxTQUFVLGtCQUNWQyxTQUFVLGNBQ1Y1QixNQUFPLEtDTk0sU0FBUzZCLEVBQWdCcE4sR0FDdEMsT0FBTyxTQUFVcU4sRUFBWTNVLEdBQzNCLElBQ0k0VSxFQUVKLEdBQWdCLGdCQUhGNVUsU0FBMENBLEVBQVE2TixRQUFVNU4sT0FBT0QsRUFBUTZOLFNBQVcsZUFHcEV2RyxFQUFLdU4saUJBQWtCLENBQ3JELElBQUlmLEVBQWV4TSxFQUFLd04sd0JBQTBCeE4sRUFBS3dNLGFBQ25EN0csRUFBUWpOLFNBQTBDQSxFQUFRaU4sTUFBUWhOLE9BQU9ELEVBQVFpTixPQUFTNkcsRUFDOUZjLEVBQWN0TixFQUFLdU4saUJBQWlCNUgsSUFBVTNGLEVBQUt1TixpQkFBaUJmLEVBQ3RFLEtBQU8sQ0FDTCxJQUFJaUIsRUFBZ0J6TixFQUFLd00sYUFFckJrQixFQUFTaFYsU0FBMENBLEVBQVFpTixNQUFRaE4sT0FBT0QsRUFBUWlOLE9BQVMzRixFQUFLd00sYUFFcEdjLEVBQWN0TixFQUFLMk4sT0FBT0QsSUFBVzFOLEVBQUsyTixPQUFPRixFQUNuRCxDQUlBLE9BQU9ILEVBRkt0TixFQUFLNE4saUJBQW1CNU4sRUFBSzROLGlCQUFpQlAsR0FBY0EsRUFHMUUsQ0FDRixDQzRIQSxRQTVCZSxDQUNieEgsY0EzQmtCLFNBQXVCNUUsRUFBYTRNLEdBQ3RELElBQUkzTSxFQUFTQyxPQUFPRixHQU9oQjZNLEVBQVM1TSxFQUFTLElBRXRCLEdBQUk0TSxFQUFTLElBQU1BLEVBQVMsR0FDMUIsT0FBUUEsRUFBUyxJQUNmLEtBQUssRUFDSCxPQUFPNU0sRUFBUyxLQUVsQixLQUFLLEVBQ0gsT0FBT0EsRUFBUyxLQUVsQixLQUFLLEVBQ0gsT0FBT0EsRUFBUyxLQUl0QixPQUFPQSxFQUFTLElBQ2xCLEVBSUV3RSxJQUFLMEgsRUFBZ0IsQ0FDbkJPLE9BdkhZLENBQ2RJLE9BQVEsQ0FBQyxJQUFLLEtBQ2RDLFlBQWEsQ0FBQyxLQUFNLE1BQ3BCQyxLQUFNLENBQUMsZ0JBQWlCLGdCQXFIdEJ6QixhQUFjLFNBRWhCbEcsUUFBUzhHLEVBQWdCLENBQ3ZCTyxPQXRIZ0IsQ0FDbEJJLE9BQVEsQ0FBQyxJQUFLLElBQUssSUFBSyxLQUN4QkMsWUFBYSxDQUFDLEtBQU0sS0FBTSxLQUFNLE1BQ2hDQyxLQUFNLENBQUMsY0FBZSxjQUFlLGNBQWUsZ0JBb0hsRHpCLGFBQWMsT0FDZG9CLGlCQUFrQixTQUEwQnRILEdBQzFDLE9BQU9BLEVBQVUsQ0FDbkIsSUFFRnZCLE1BQU9xSSxFQUFnQixDQUNyQk8sT0FwSGMsQ0FDaEJJLE9BQVEsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssS0FDaEVDLFlBQWEsQ0FBQyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sT0FDM0ZDLEtBQU0sQ0FBQyxVQUFXLFdBQVksUUFBUyxRQUFTLE1BQU8sT0FBUSxPQUFRLFNBQVUsWUFBYSxVQUFXLFdBQVksYUFrSG5IekIsYUFBYyxTQUVoQnhLLElBQUtvTCxFQUFnQixDQUNuQk8sT0FuSFksQ0FDZEksT0FBUSxDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLEtBQ3ZDbEIsTUFBTyxDQUFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFNLE1BQzVDbUIsWUFBYSxDQUFDLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE9BQ3hEQyxLQUFNLENBQUMsU0FBVSxTQUFVLFVBQVcsWUFBYSxXQUFZLFNBQVUsYUFnSHZFekIsYUFBYyxTQUVoQjlFLFVBQVcwRixFQUFnQixDQUN6Qk8sT0FqSGtCLENBQ3BCSSxPQUFRLENBQ05HLEdBQUksSUFDSkMsR0FBSSxJQUNKQyxTQUFVLEtBQ1ZDLEtBQU0sSUFDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxTQUVUVCxZQUFhLENBQ1hFLEdBQUksS0FDSkMsR0FBSSxLQUNKQyxTQUFVLFdBQ1ZDLEtBQU0sT0FDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxTQUVUUixLQUFNLENBQ0pDLEdBQUksT0FDSkMsR0FBSSxPQUNKQyxTQUFVLFdBQ1ZDLEtBQU0sT0FDTkMsUUFBUyxVQUNUQyxVQUFXLFlBQ1hDLFFBQVMsVUFDVEMsTUFBTyxVQXFGUGpDLGFBQWMsT0FDZGUsaUJBbkY0QixDQUM5QlEsT0FBUSxDQUNORyxHQUFJLElBQ0pDLEdBQUksSUFDSkMsU0FBVSxLQUNWQyxLQUFNLElBQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sWUFFVFQsWUFBYSxDQUNYRSxHQUFJLEtBQ0pDLEdBQUksS0FDSkMsU0FBVSxXQUNWQyxLQUFNLE9BQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sWUFFVFIsS0FBTSxDQUNKQyxHQUFJLE9BQ0pDLEdBQUksT0FDSkMsU0FBVSxXQUNWQyxLQUFNLE9BQ05DLFFBQVMsaUJBQ1RDLFVBQVcsbUJBQ1hDLFFBQVMsaUJBQ1RDLE1BQU8sYUF1RFBqQix1QkFBd0IsVUM5SWIsU0FBU2tCLEVBQWExTyxHQUNuQyxPQUFPLFNBQVUyTyxHQUNmLElBQUlqVyxFQUFVOEgsVUFBVTNJLE9BQVMsUUFBc0JRLElBQWpCbUksVUFBVSxHQUFtQkEsVUFBVSxHQUFLLENBQUMsRUFDL0VtRixFQUFRak4sRUFBUWlOLE1BQ2hCaUosRUFBZWpKLEdBQVMzRixFQUFLNk8sY0FBY2xKLElBQVUzRixFQUFLNk8sY0FBYzdPLEVBQUs4TyxtQkFDN0VqRixFQUFjOEUsRUFBTzdFLE1BQU04RSxHQUUvQixJQUFLL0UsRUFDSCxPQUFPLEtBR1QsSUFPSWtGLEVBUEFDLEVBQWdCbkYsRUFBWSxHQUM1Qm9GLEVBQWdCdEosR0FBUzNGLEVBQUtpUCxjQUFjdEosSUFBVTNGLEVBQUtpUCxjQUFjalAsRUFBS2tQLG1CQUM5RTlRLEVBQU0rUSxNQUFNQyxRQUFRSCxHQTBCNUIsU0FBbUJJLEVBQU9DLEdBQ3hCLElBQUssSUFBSWxSLEVBQU0sRUFBR0EsRUFBTWlSLEVBQU14WCxPQUFRdUcsSUFDcEMsR0FBY2lSLEVBQU1qUixHQTNCSHRGLEtBQUtrVyxHQTRCcEIsT0FBTzVRLENBS2IsQ0FsQzZDbVIsQ0FBVU4sR0FnQnZELFNBQWlCTyxFQUFRRixHQUN2QixJQUFLLElBQUlsUixLQUFPb1IsRUFDZCxHQUFJQSxFQUFPelEsZUFBZVgsSUFBa0JvUixFQUFPcFIsR0FmbEN0RixLQUFLa1csR0FnQnBCLE9BQU81USxDQUtiLENBdEJTcVIsQ0FBUVIsR0FPYixPQUhBRixFQUFRL08sRUFBSzBQLGNBQWdCMVAsRUFBSzBQLGNBQWN0UixHQUFPQSxFQUdoRCxDQUNMMlEsTUFIRkEsRUFBUXJXLEVBQVFnWCxjQUFnQmhYLEVBQVFnWCxjQUFjWCxHQUFTQSxFQUk3RFksS0FIU2hCLEVBQU81VixNQUFNaVcsRUFBY25YLFFBS3hDLENBQ0YsQ0N6QkEsSUNGNENtSSxFRHVEeEM4SixFQUFRLENBQ1ZqRSxlQ3hEMEM3RixFRHdEUCxDQUNqQzRPLGFBdkQ0Qix3QkF3RDVCZ0IsYUF2RDRCLE9Bd0Q1QkYsY0FBZSxTQUF1QlgsR0FDcEMsT0FBT2MsU0FBU2QsRUFBTyxHQUN6QixHQzVESyxTQUFVSixHQUNmLElBQUlqVyxFQUFVOEgsVUFBVTNJLE9BQVMsUUFBc0JRLElBQWpCbUksVUFBVSxHQUFtQkEsVUFBVSxHQUFLLENBQUMsRUFDL0VxSixFQUFjOEUsRUFBTzdFLE1BQU05SixFQUFLNE8sY0FDcEMsSUFBSy9FLEVBQWEsT0FBTyxLQUN6QixJQUFJbUYsRUFBZ0JuRixFQUFZLEdBQzVCaUcsRUFBY25CLEVBQU83RSxNQUFNOUosRUFBSzRQLGNBQ3BDLElBQUtFLEVBQWEsT0FBTyxLQUN6QixJQUFJZixFQUFRL08sRUFBSzBQLGNBQWdCMVAsRUFBSzBQLGNBQWNJLEVBQVksSUFBTUEsRUFBWSxHQUdsRixNQUFPLENBQ0xmLE1BSEZBLEVBQVFyVyxFQUFRZ1gsY0FBZ0JoWCxFQUFRZ1gsY0FBY1gsR0FBU0EsRUFJN0RZLEtBSFNoQixFQUFPNVYsTUFBTWlXLEVBQWNuWCxRQUt4QyxHRGdEQTZOLElBQUtnSixFQUFhLENBQ2hCRyxjQTVEbUIsQ0FDckJkLE9BQVEsVUFDUkMsWUFBYSw2REFDYkMsS0FBTSw4REEwREphLGtCQUFtQixPQUNuQkcsY0F6RG1CLENBQ3JCYyxJQUFLLENBQUMsTUFBTyxZQXlEWGIsa0JBQW1CLFFBRXJCNUksUUFBU29JLEVBQWEsQ0FDcEJHLGNBMUR1QixDQUN6QmQsT0FBUSxXQUNSQyxZQUFhLFlBQ2JDLEtBQU0sa0NBd0RKYSxrQkFBbUIsT0FDbkJHLGNBdkR1QixDQUN6QmMsSUFBSyxDQUFDLEtBQU0sS0FBTSxLQUFNLE9BdUR0QmIsa0JBQW1CLE1BQ25CUSxjQUFlLFNBQXVCclUsR0FDcEMsT0FBT0EsRUFBUSxDQUNqQixJQUVGMEosTUFBTzJKLEVBQWEsQ0FDbEJHLGNBM0RxQixDQUN2QmQsT0FBUSxlQUNSQyxZQUFhLHNEQUNiQyxLQUFNLDZGQXlESmEsa0JBQW1CLE9BQ25CRyxjQXhEcUIsQ0FDdkJsQixPQUFRLENBQUMsTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE9BQ3RGZ0MsSUFBSyxDQUFDLE9BQVEsTUFBTyxRQUFTLE9BQVEsUUFBUyxRQUFTLFFBQVMsT0FBUSxNQUFPLE1BQU8sTUFBTyxRQXVENUZiLGtCQUFtQixRQUVyQmxOLElBQUswTSxFQUFhLENBQ2hCRyxjQXhEbUIsQ0FDckJkLE9BQVEsWUFDUmxCLE1BQU8sMkJBQ1BtQixZQUFhLGtDQUNiQyxLQUFNLGdFQXFESmEsa0JBQW1CLE9BQ25CRyxjQXBEbUIsQ0FDckJsQixPQUFRLENBQUMsTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sT0FDbkRnQyxJQUFLLENBQUMsT0FBUSxNQUFPLE9BQVEsTUFBTyxPQUFRLE1BQU8sU0FtRGpEYixrQkFBbUIsUUFFckJ4SCxVQUFXZ0gsRUFBYSxDQUN0QkcsY0FwRHlCLENBQzNCZCxPQUFRLDZEQUNSZ0MsSUFBSyxrRkFtREhqQixrQkFBbUIsTUFDbkJHLGNBbER5QixDQUMzQmMsSUFBSyxDQUNIN0IsR0FBSSxNQUNKQyxHQUFJLE1BQ0pDLFNBQVUsT0FDVkMsS0FBTSxPQUNOQyxRQUFTLFdBQ1RDLFVBQVcsYUFDWEMsUUFBUyxXQUNUQyxNQUFPLFdBMENQUyxrQkFBbUIsU0VqRXZCLE1DNUJBLEVEY2EsQ0FDWGMsS0FBTSxRQUNOQyxlVCtDbUIsU0FBd0JwTCxFQUFPekssRUFBTzFCLEdBQ3pELElBQUlxQixFQUNBbVcsRUFBYTlFLEVBQXFCdkcsR0FVdEMsT0FQRTlLLEVBRHdCLGlCQUFmbVcsRUFDQUEsRUFDVSxJQUFWOVYsRUFDQThWLEVBQVc1RSxJQUVYNEUsRUFBVzNFLE1BQU1yUyxRQUFRLFlBQWFrQixFQUFNOUMsWUFHbkRvQixTQUEwQ0EsRUFBUXlYLFVBQ2hEelgsRUFBUTBYLFlBQWMxWCxFQUFRMFgsV0FBYSxFQUN0QyxNQUFRclcsRUFFUkEsRUFBUyxPQUliQSxDQUNULEVTbkVFeVAsV0FBWSxFQUNaNkcsZU5WbUIsU0FBd0J4TCxFQUFPeUwsRUFBT0MsRUFBVzFDLEdBQ3BFLE9BQU9mLEVBQXFCakksRUFDOUIsRU1TRVksU0FBVSxFQUNWcUUsTUY0RUYsRUUzRUVwUixRQUFTLENBQ1BtTCxhQUFjLEVBR2RLLHNCQUF1QixJRUozQixJQUFJc00sRUFBeUIsd0RBR3pCQyxFQUE2QixvQ0FDN0JDLEVBQXNCLGVBQ3RCQyxFQUFvQixNQUNwQkMsRUFBZ0MsV0FxU3JCLFNBQVMxRixFQUFPekosRUFBV29QLEVBQWdCblksR0FDeEQsSUFBSTJLLEVBQU1JLEVBQWlCSCxFQUFPQyxFQUFPdU4sRUFBTzdNLEVBQXVCOE0sRUFBa0JDLEVBQXVCck4sRUFBdUJDLEVBQXdCcU4sRUFBT0MsRUFBT0MsRUFBTzNOLEVBQXVCNE4sRUFBa0JDLEVBQXVCQyxFQUF3QkMsRUFFNVF6UixFQUFhLEVBQUdVLFdBQ2hCLElBQUlnUixFQUFZN1ksT0FBT2tZLEdBQ25CM04sRUFBaUJDLElBQ2pCVyxFQUE0TCxRQUFsTFQsRUFBZ0csUUFBeEZJLEVBQWtCL0ssYUFBeUMsRUFBU0EsRUFBUW9MLGNBQXdDLElBQXBCTCxFQUE2QkEsRUFBa0JQLEVBQWVZLGNBQTZCLElBQVRULEVBQWtCQSxFQUFPb08sRUFDN052TixFQUF3QmxELEVBQXUzQixRQUE1MkJzQyxFQUE2akIsUUFBcGpCQyxFQUF1ZSxRQUE5ZHVOLEVBQXNILFFBQTdHN00sRUFBd0J2TCxhQUF5QyxFQUFTQSxFQUFRd0wsNkJBQTZELElBQTFCRCxFQUFtQ0EsRUFBd0J2TCxTQUEwRixRQUF2Q3FZLEVBQW1CclksRUFBUW9MLGNBQXlDLElBQXJCaU4sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQnJZLGVBQStDLElBQTFCc1ksT0FBL0osRUFBMk1BLEVBQXNCOU0sNkJBQTZDLElBQVY0TSxFQUFtQkEsRUFBUTVOLEVBQWVnQiw2QkFBNkMsSUFBVlgsRUFBbUJBLEVBQTRELFFBQW5ESSxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1Qk0sNkJBQTZDLElBQVZaLEVBQW1CQSxFQUFRLEdBRXQ3QixLQUFNWSxHQUF5QixHQUFLQSxHQUF5QixHQUMzRCxNQUFNLElBQUlILFdBQVcsNkRBR3ZCLElBQUlGLEVBQWU3QyxFQUFzMUIsUUFBMzBCaVEsRUFBa2lCLFFBQXpoQkMsRUFBcWQsUUFBNWNDLEVBQTZHLFFBQXBHM04sRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUEwRixRQUF2QzBZLEVBQW1CMVksRUFBUW9MLGNBQXlDLElBQXJCc04sR0FBOEYsUUFBdERDLEVBQXdCRCxFQUFpQjFZLGVBQStDLElBQTFCMlksT0FBL0osRUFBMk1BLEVBQXNCeE4sb0JBQW9DLElBQVZzTixFQUFtQkEsRUFBUWpPLEVBQWVXLG9CQUFvQyxJQUFWcU4sRUFBbUJBLEVBQTZELFFBQXBESSxFQUF5QnBPLEVBQWVZLGNBQStDLElBQTNCd04sR0FBMkcsUUFBN0RDLEVBQXlCRCxFQUF1QjVZLGVBQWdELElBQTNCNlksT0FBL0UsRUFBNEhBLEVBQXVCMU4sb0JBQW9DLElBQVZvTixFQUFtQkEsRUFBUSxHQUU1NEIsS0FBTXBOLEdBQWdCLEdBQUtBLEdBQWdCLEdBQ3pDLE1BQU0sSUFBSUUsV0FBVyxvREFHdkIsSUFBS0QsRUFBTzJCLFNBQ1YsTUFBTSxJQUFJMUIsV0FBVyx5Q0FHdkIsSUFBS0QsRUFBTzBGLFdBQ1YsTUFBTSxJQUFJekYsV0FBVywyQ0FHdkIsSUFBSWdGLEVBQWV6SSxFQUFPbUIsR0FFMUIsSUMzVGEsU0FBaUJBLEdBRzlCLEdBRkEzQixFQUFhLEVBQUdVLFlqQ0FILFNBQWdCdU8sR0FFN0IsT0FEQWpQLEVBQWEsRUFBR1UsV0FDVHVPLGFBQWlCck8sTUFBMkIsV0FBbkJSLEVBQVE2TyxJQUFpRSxrQkFBMUN6USxPQUFPUSxVQUFVeEgsU0FBUzBILEtBQUsrUCxFQUNoRyxDaUNETzJDLENBQU9qUSxJQUFtQyxpQkFBZEEsRUFDL0IsT0FBTyxFQUdULElBQUlNLEVBQU96QixFQUFPbUIsR0FDbEIsT0FBUUwsTUFBTUQsT0FBT1ksR0FDdkIsQ0RrVE80UCxDQUFRNUksR0FDWCxNQUFNLElBQUloRixXQUFXLHNCQU12QixJQUNJb0csRUFBVTNJLEVBQWdCdUgsRUFEVG1CLEVBQWdDbkIsSUFFakQ2SSxFQUFtQixDQUNyQjFOLHNCQUF1QkEsRUFDdkJMLGFBQWNBLEVBQ2RDLE9BQVFBLEVBQ1J3RSxjQUFlUyxHQTJDakIsT0F6Q2F5SSxFQUFVMUgsTUFBTTJHLEdBQTRCalosS0FBSSxTQUFVcWEsR0FDckUsSUFBSUMsRUFBaUJELEVBQVUsR0FFL0IsTUFBdUIsTUFBbkJDLEdBQTZDLE1BQW5CQSxHQUVyQkMsRUFEYSxFQUFlRCxJQUNkRCxFQUFXL04sRUFBTzBGLFlBR2xDcUksQ0FDVCxJQUFHL1osS0FBSyxJQUFJZ1MsTUFBTTBHLEdBQXdCaFosS0FBSSxTQUFVcWEsR0FFdEQsR0FBa0IsT0FBZEEsRUFDRixNQUFPLElBR1QsSUE2QndCMUcsRUFDdEI2RyxFQTlCRUYsRUFBaUJELEVBQVUsR0FFL0IsR0FBdUIsTUFBbkJDLEVBQ0YsT0EyQkFFLEdBRHNCN0csRUExQkkwRyxHQTJCVi9ILE1BQU00RyxJQU1uQnNCLEVBQVEsR0FBRzlZLFFBQVF5WCxFQUFtQixLQUhwQ3hGLEVBM0JQLElBQUk4RyxFQUFZLEVBQVdILEdBRTNCLEdBQUlHLEVBU0YsT0FSTXZaLFNBQTBDQSxFQUFRd1osOEJBQWdDbEgsRUFBeUI2RyxJQUMvRzVHLEVBQW9CNEcsRUFBV2hCLEVBQWdCbFksT0FBTzhJLElBR2xEL0ksU0FBMENBLEVBQVF5WiwrQkFBaUNySCxFQUEwQitHLElBQ2pINUcsRUFBb0I0RyxFQUFXaEIsRUFBZ0JsWSxPQUFPOEksSUFHakR3USxFQUFVOUgsRUFBUzBILEVBQVcvTixFQUFPMkIsU0FBVW1NLEdBR3hELEdBQUlFLEVBQWVoSSxNQUFNOEcsR0FDdkIsTUFBTSxJQUFJN00sV0FBVyxpRUFBbUUrTixFQUFpQixLQUczRyxPQUFPRCxDQUNULElBQUcvWixLQUFLLEdBRVYsQ0VyWkEsTUMyRkEsR0F6RmdCLE1BRWQsSUFBSXNhLEVBQWlCLEdBQ2pCQyxFQUFjLEdBRTZCLE9BQTNDQyxhQUFhQyxRQUFRLG9CQUN2QkgsRUFBaUI1WSxLQUFLZ1osTUFBTUYsYUFBYUMsUUFBUSxvQkFHUCxPQUF4Q0QsYUFBYUMsUUFBUSxpQkFDdkJGLEVBQWM3WSxLQUFLZ1osTUFBTUYsYUFBYUMsUUFBUSxpQkFJaEQsTUFBTUUsRUFBcUIsS0FDekJILGFBQWFJLFFBQVEsY0FBZWxaLEtBQUtDLFVBQVU0WSxJQUNuREMsYUFBYUksUUFBUSxpQkFBa0JsWixLQUFLQyxVQUFVMlksR0FBZ0IsRUE2RHhFLE1BQU8sQ0FDTEEsaUJBQ0FDLGNBQ0FJLHFCQUNBRSxXQTlEaUIsQ0FBQ0MsRUFBVUMsS0FDNUIsSUFBSyxJQUFJOWEsRUFBSSxFQUFHQSxFQUFJc2EsRUFBWXhhLE9BQVFFLElBQ2xDc2EsRUFBWXRhLEdBQUcrYSxNQUFRRixJQUN6QlAsRUFBWXhYLE9BQU85QyxFQUFHLEdBQ3RCMGEsSUFDQSxrQkFBdUJJLEdBRTNCLEVBd0RBRSxRQXJEYyxDQUFDQyxFQUFPSCxLQUN0QixNQUFNSSxFRGhDRyxFQUFDSCxFQUFNRSxFQUFPRSxFQUFhQyxFQUFTQyxFQUFVUCxLQUNsRCxDQUFFQyxPQUFNRSxRQUFPRSxjQUFhQyxVQUFTQyxXQUFVUCxZQytCcEMsQ0FDZG5TLEtBQUsyUyxNQUNMTCxFQUNBLGNBQ0E5SCxFQUFPLElBQUl4SyxLQUFRLGNBQ25CLE1BQ0FtUyxHQUdGUixFQUFZcmIsS0FBS2ljLEdBQ2pCUixHQUFvQixFQTJDcEJhLFdBN0JrQkMsSUFDbEJuQixFQUFlcGIsS0FBS3VjLEdBQ3BCZCxHQUFvQixFQTRCcEJlLGNBekJxQm5ZLElBQ3JCK1csRUFBZXZYLE9BQU9RLEVBQU8sR0FDN0JvWCxHQUFvQixFQXdCcEJnQixTQTFDZSxDQUFDYixFQUFVYyxFQUFVYixLQUNwQyxJQUFLLElBQUk5YSxFQUFJLEVBQUdBLEVBQUlzYSxFQUFZeGEsT0FBUUUsSUFDbENzYSxFQUFZdGEsR0FBRythLE1BQVFGLElBQ3pCUCxFQUFZdGEsR0FBR2liLE1BQVFVLEVBQ3ZCakIsSUFDQSxrQkFBdUJJLEdBRTNCLEVBcUNILEVBdkZlLEcsNElDT1puYSxHQUFVLENBQUMsRUFFZkEsR0FBUXNFLGtCQUFvQixLQUM1QnRFLEdBQVFnRSxjQUFnQixLQUVsQmhFLEdBQVFnRCxPQUFTLFVBQWMsS0FBTSxRQUUzQ2hELEdBQVFxQyxPQUFTLEtBQ2pCckMsR0FBUXFFLG1CQUFxQixLQUVoQixLQUFJLEtBQVNyRSxJQUtKLE1BQVcsYUFBaUIsWUFBM0MsTUM2SFAsR0FsSnlCLENBQUNpYixFQUFVQyxLQUNoQyxNQUFNQyxFQUFXL1gsU0FBU1csY0FBYyxPQUN4Q29YLEVBQVMvVyxhQUFhLEtBQU0sbUJBRTVCLE1BQU1nWCxFQUFlaFksU0FBU1csY0FBYyxNQUs1QyxHQUpBcVgsRUFBYUMsWUFBYyxRQUUzQkYsRUFBU3RYLFlBQVl1WCxHQUVSLE1BQVRGLEVBQ0YsSUFBSyxJQUFJN2IsRUFBSSxFQUFHQSxFQUFJNmIsRUFBTS9iLE9BQVFFLElBQUssQ0FDckMsTUFBTWljLEVBQVVsWSxTQUFTVyxjQUFjLE9BQ3ZDdVgsRUFBUWxYLGFBQWEsUUFBUyxZQUU5QixNQUFNbVgsRUFBTW5ZLFNBQVNXLGNBQWMsVUFDbkN3WCxFQUFJblgsYUFBYSxRQUFTLGNBQzFCbVgsRUFBSW5YLGFBQWEsVUFBVzhXLEVBQU03YixHQUFHK2EsTUFFckMsTUFBTW9CLEVBQWNwWSxTQUFTVyxjQUFjLEtBQzNDeVgsRUFBWXBYLGFBQWEsUUFBUyxnQkFDbENvWCxFQUFZcFgsYUFBYSxVQUFXOFcsRUFBTTdiLEdBQUcrYSxNQUM3Q29CLEVBQVlILFlBQWNILEVBQU03YixHQUFHaWIsTUFFbkMsTUFBTW1CLEVBQW1CclksU0FBU1csY0FBYyxTQUNoRDBYLEVBQWlCclgsYUFBYSxRQUFTOFcsRUFBTTdiLEdBQUdpYixPQUNoRG1CLEVBQWlCclgsYUFBYSxRQUFTLHNCQUN2Q3FYLEVBQWlCclgsYUFBYSxVQUFXOFcsRUFBTTdiLEdBQUcrYSxNQUNsRHFCLEVBQWlCQyxLQUFPLE9BRXhCLE1BQU1DLEVBQWN2WSxTQUFTVyxjQUFjLEtBQzNDNFgsRUFBWU4sWUFBY0gsRUFBTTdiLEdBQUdvYixRQUVuQyxNQUFNbUIsRUFBbUJ4WSxTQUFTVyxjQUFjLFNBQ2hENlgsRUFBaUJ4WCxhQUFhLFFBQVMsdUJBQ3ZDd1gsRUFBaUJGLEtBQU8sT0FFeEJKLEVBQVF6WCxZQUFZMFgsR0FDcEJELEVBQVF6WCxZQUFZMlgsR0FDcEJGLEVBQVF6WCxZQUFZNFgsR0FDcEJILEVBQVF6WCxZQUFZOFgsR0FDcEJMLEVBQVF6WCxZQUFZK1gsR0FDcEJULEVBQVN0WCxZQUFZeVgsRUFDdkIsQ0FHRixNQUFNTyxFQUFhelksU0FBU1csY0FBYyxPQUMxQzhYLEVBQVd6WCxhQUFhLEtBQU0sZ0JBRTlCLE1BQU0wWCxFQUFZMVksU0FBU1csY0FBYyxNQUN6QytYLEVBQVVULFlBQWMsV0FDeEJTLEVBQVUxWCxhQUFhLEtBQU0sZUFFN0IsTUFBTTJYLEVBQWUzWSxTQUFTVyxjQUFjLFNBQzVDZ1ksRUFBYTNYLGFBQWEsT0FBUSxRQUNsQzJYLEVBQWEzWCxhQUFhLEtBQU0sa0JBQ2hDMlgsRUFBYTNYLGFBQWEsY0FBZSxhQUV6QyxNQUFNNFgsRUFBUzVZLFNBQVNXLGNBQWMsT0FFaENrWSxFQUFTN1ksU0FBU1csY0FBYyxVQUN0Q2tZLEVBQU83WCxhQUFhLEtBQU0sZ0JBQzFCNlgsRUFBT1osWUFBYyxNQUVyQixNQUFNYSxFQUFZOVksU0FBU1csY0FBYyxVQVl6QyxPQVhBbVksRUFBVTlYLGFBQWEsS0FBTSxtQkFDN0I4WCxFQUFVYixZQUFjLFNBRXhCUSxFQUFXaFksWUFBWWtZLEdBQ3ZCQyxFQUFPblksWUFBWW9ZLEdBQ25CRCxFQUFPblksWUFBWXFZLEdBQ25CTCxFQUFXaFksWUFBWW1ZLEdBRXZCYixFQUFTdFgsWUFBWWlZLEdBQ3JCWCxFQUFTdFgsWUFBWWdZLEdBRWRWLEVBQVNnQixTQUFTLEVBdUU3QixHQXBFdUIsS0FDbkIsTUFBTUMsRUFBVWhaLFNBQVNpWixpQkFBaUIsZUFDcENQLEVBQVkxWSxTQUFTQyxjQUFjLGdCQUNuQ3dZLEVBQWF6WSxTQUFTQyxjQUFjLGlCQUNwQ2laLEVBQWdCbFosU0FBU0MsY0FBYyxvQkFDdkNrWixFQUFhblosU0FBU0MsY0FBYyxpQkFDcEMwWSxFQUFlM1ksU0FBU0MsY0FBYyxtQkFDdENtWSxFQUFjcFksU0FBU2laLGlCQUFpQixpQkFDeENHLEVBQW9CcFosU0FBU2laLGlCQUFpQix1QkFFcERELEVBQVFLLFNBQVNDLElBQ2ZBLEVBQU9DLGlCQUFpQixTQUFValosSUFDaEMsTUFBTWtaLEVBQVNsWixFQUFFUixPQUFPMlosYUFBYSxXQUdyQyxjQUFtQkQsRUFBUSxVQUFVLEdBQ3JDLElBSUpkLEVBQVVhLGlCQUFpQixTQUFValosSUFDbkNvWSxFQUFVN1ksTUFBTTZaLFFBQVUsT0FDMUJqQixFQUFXNVksTUFBTTZaLFFBQVUsTUFBTSxJQUduQ1IsRUFBY0ssaUJBQWlCLFNBQVVqWixJQUN2Q29ZLEVBQVU3WSxNQUFNNlosUUFBVSxjQUMxQmpCLEVBQVc1WSxNQUFNNlosUUFBVSxNQUFNLElBR25DUCxFQUFXSSxpQkFBaUIsU0FBVWpaLElBQ3BDLFdBQWdCcVksRUFBYTFGLE1BQU8sV0FDcEMsa0JBQXVCLFVBQVUsSUFJbkNtRixFQUFZaUIsU0FBU00sSUFFbkJBLEVBQVdKLGlCQUFpQixTQUFValosSUFDcEMsTUFBTXNaLEVBQVN0WixFQUFFUixPQUFPMlosYUFBYSxXQUdyQ3JCLEVBQVlpQixTQUFTUSxJQUNuQkEsRUFBUzdZLGFBQWEsUUFBUyxpQkFBaUIsSUFHbEQyWSxFQUFXM1ksYUFBYSxRQUFTLGtCQUVqQ29ZLEVBQWtCQyxTQUFTaEIsSUFDckJBLEVBQWlCb0IsYUFBYSxZQUFjRyxHQUM5Q3ZCLEVBQWlCclgsYUFBYSxRQUFTLGtCQUV2Q3FYLEVBQWlCa0IsaUJBQWlCLFlBQWFqWixJQUMzQixLQUFkQSxFQUFFd1osU0FDSixZQUFpQkYsRUFBUXZCLEVBQWlCcEYsTUFBTyxVQUNuRCxLQUdGb0YsRUFBaUJyWCxhQUFhLFFBQVMsaUJBQ3pDLEdBQ0EsR0FDRixHQUNGLEVDbkZOLEdBeER5QixDQUFDNlcsRUFBVUMsS0FDaEMsTUFBTUMsRUFBVy9YLFNBQVNXLGNBQWMsT0FDeENvWCxFQUFTL1csYUFBYSxLQUFNLG1CQUU1QixNQUFNZ1gsRUFBZWhZLFNBQVNXLGNBQWMsTUFLNUMsR0FKQXFYLEVBQWFDLFlBQWMsUUFFM0JGLEVBQVN0WCxZQUFZdVgsR0FFUixNQUFURixFQUFlLENBQ2pCLE1BQU1pQyxFQUFVM0ssRUFBTyxJQUFJeEssS0FBUSxjQUVuQyxJQUFLLElBQUkzSSxFQUFJLEVBQUdBLEVBQUk2YixFQUFNL2IsT0FBUUUsSUFFaEMsR0FBSTZiLEVBQU03YixHQUFHb2IsU0FBVzBDLEVBQVMsQ0FDL0IsTUFBTTdCLEVBQVVsWSxTQUFTVyxjQUFjLE9BQ3ZDdVgsRUFBUWxYLGFBQWEsUUFBUyxZQUU5QixNQUFNbVgsRUFBTW5ZLFNBQVNXLGNBQWMsVUFDbkN3WCxFQUFJblgsYUFBYSxRQUFTLGNBQzFCbVgsRUFBSW5YLGFBQWEsVUFBVzhXLEVBQU03YixHQUFHK2EsTUFFckMsTUFBTW9CLEVBQWNwWSxTQUFTVyxjQUFjLEtBQzNDeVgsRUFBWUgsWUFBY0gsRUFBTTdiLEdBQUdpYixNQUVuQyxNQUFNcUIsRUFBY3ZZLFNBQVNXLGNBQWMsS0FDM0M0WCxFQUFZTixZQUFjSCxFQUFNN2IsR0FBR29iLFFBRW5DYSxFQUFRelgsWUFBWTBYLEdBQ3BCRCxFQUFRelgsWUFBWTJYLEdBQ3BCRixFQUFRelgsWUFBWThYLEdBRXBCUixFQUFTdFgsWUFBWXlYLEVBQ3ZCLENBRUosQ0FFQSxPQUFPSCxFQUFTZ0IsU0FBUyxFQW1CN0IsR0FoQnVCLEtBQ0gvWSxTQUFTaVosaUJBQWlCLGVBRWxDSSxTQUFTQyxJQUNmQSxFQUFPQyxpQkFBaUIsU0FBVWpaLElBQ2hDLE1BQU1rWixFQUFTbFosRUFBRVIsT0FBTzJaLGFBQWEsV0FHckMsY0FBbUJELEVBQVEsUUFBUSxHQUNuQyxHQUNGLEVDeERTLFNBQVMsR0FBTzFaLEVBQVE0VCxHQUNyQyxHQUFjLE1BQVY1VCxFQUNGLE1BQU0sSUFBSXFFLFVBQVUsaUVBR3RCLElBQUssSUFBSTZWLEtBQVl0RyxFQUNmbFIsT0FBT1EsVUFBVUMsZUFBZUMsS0FBS3dRLEVBQVFzRyxLQUUvQ2xhLEVBQU9rYSxHQUFZdEcsRUFBT3NHLElBSTlCLE9BQU9sYSxDQUNULENDYkEsU0FBUyxHQUFRdEIsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FFelgsU0FBU3liLEdBQVVDLEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZSSxHQUFnQkwsRUFBVUMsRUFBYSxDQUVoWSxTQUFTSSxHQUFnQmhZLEVBQUdtQixHQUErRyxPQUExRzZXLEdBQWtCL1gsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVWdZLEdBQWdCaFksRUFBR21CLEVBQUksQ0FFekssU0FBU2dYLEdBQWFDLEdBQVcsSUFBSUMsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlE2YSxHQUE2QixPQUFPLFdBQWtDLElBQXNDbGQsRUFBbENtZCxFQUFRQyxHQUFnQlYsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZRCxHQUFnQjVmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDcVksR0FBdUIxWCxHQUF0Q1gsQ0FBNkMsQ0FGMk1zWSxDQUEyQi9mLEtBQU13QyxFQUFTLENBQUcsQ0FJeGEsU0FBU3NkLEdBQXVCMVgsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVN3WCxHQUFnQjlZLEdBQXdKLE9BQW5KOFksR0FBa0I3WSxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVU4WSxHQUFnQjlZLEVBQUksQ0FFNU0sU0FBU29aLEdBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQUV4SixTQUFTMlgsR0FBa0JoYyxFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQUU1VCxTQUFTQyxHQUFhSixFQUFhSyxFQUFZQyxHQUFtSixPQUFoSUQsR0FBWUosR0FBa0JELEVBQVk3WSxVQUFXa1osR0FBaUJDLEdBQWFMLEdBQWtCRCxFQUFhTSxHQUFxQk4sQ0FBYSxDQUV0TixTQUFTTyxHQUFnQjVkLEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBRWhOLElBQ1c2ZCxHQUFzQixXQUMvQixTQUFTQSxJQUNQVixHQUFnQmxnQixLQUFNNGdCLEdBRXRCRCxHQUFnQjNnQixLQUFNLGNBQWUsRUFDdkMsQ0FTQSxPQVBBd2dCLEdBQWFJLEVBQVEsQ0FBQyxDQUNwQi9aLElBQUssV0FDTDJRLE1BQU8sU0FBa0JxSixFQUFVdkssR0FDakMsT0FBTyxDQUNULEtBR0tzSyxDQUNULENBZmlDLEdBZ0J0QkUsR0FBMkIsU0FBVUMsR0FDOUN2QyxHQUFVc0MsRUFBYUMsR0FFdkIsSUFBSUMsRUFBUy9CLEdBQWE2QixHQUUxQixTQUFTQSxFQUFZdEosRUFBT3lKLEVBQWVDLEVBQVVyRixFQUFVc0YsR0FDN0QsSUFBSUMsRUFjSixPQVpBbEIsR0FBZ0JsZ0IsS0FBTThnQixJQUV0Qk0sRUFBUUosRUFBT3ZaLEtBQUt6SCxPQUNkd1gsTUFBUUEsRUFDZDRKLEVBQU1ILGNBQWdCQSxFQUN0QkcsRUFBTUYsU0FBV0EsRUFDakJFLEVBQU12RixTQUFXQSxFQUVic0YsSUFDRkMsRUFBTUQsWUFBY0EsR0FHZkMsQ0FDVCxDQWNBLE9BWkFaLEdBQWFNLEVBQWEsQ0FBQyxDQUN6QmphLElBQUssV0FDTDJRLE1BQU8sU0FBa0I1RSxFQUFTelIsR0FDaEMsT0FBT25CLEtBQUtpaEIsY0FBY3JPLEVBQVM1UyxLQUFLd1gsTUFBT3JXLEVBQ2pELEdBQ0MsQ0FDRDBGLElBQUssTUFDTDJRLE1BQU8sU0FBYTVFLEVBQVN5TyxFQUFPbGdCLEdBQ2xDLE9BQU9uQixLQUFLa2hCLFNBQVN0TyxFQUFTeU8sRUFBT3JoQixLQUFLd1gsTUFBT3JXLEVBQ25ELEtBR0syZixDQUNULENBcENzQyxDQW9DcENGLElBQ1NVLEdBQTBDLFNBQVVDLEdBQzdEL0MsR0FBVThDLEVBQTRCQyxHQUV0QyxJQUFJQyxFQUFVdkMsR0FBYXFDLEdBRTNCLFNBQVNBLElBQ1AsSUFBSUcsRUFFSnZCLEdBQWdCbGdCLEtBQU1zaEIsR0FFdEIsSUFBSyxJQUFJSSxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkFoQixHQUFnQmIsR0FGaEIyQixFQUFTRCxFQUFRL1osS0FBSy9CLE1BQU04YixFQUFTLENBQUN4aEIsTUFBTUssT0FBT29JLEtBRUgsV0F0RXZCLElBd0V6QmtZLEdBQWdCYixHQUF1QjJCLEdBQVMsZUFBZ0IsR0FFekRBLENBQ1QsQ0FnQkEsT0FkQWpCLEdBQWFjLEVBQTRCLENBQUMsQ0FDeEN6YSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNNlcsR0FDeEIsR0FBSUEsRUFBTU8sZUFDUixPQUFPcFgsRUFHVCxJQUFJcVgsRUFBZ0IsSUFBSTFZLEtBQUssR0FHN0IsT0FGQTBZLEVBQWNDLFlBQVl0WCxFQUFLUyxpQkFBa0JULEVBQUtpRCxjQUFlakQsRUFBS0ssY0FDMUVnWCxFQUFjRSxTQUFTdlgsRUFBS2tELGNBQWVsRCxFQUFLbUQsZ0JBQWlCbkQsRUFBS29ELGdCQUFpQnBELEVBQUt1RCxzQkFDckY4VCxDQUNULEtBR0tQLENBQ1QsQ0F0Q3FELENBc0NuRFYsSUNsSEYsU0FBUyxHQUFrQnZjLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBS3JULElBQUl5QixHQUFzQixXQUMvQixTQUFTQSxLQVJYLFNBQXlCN0IsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FTcEosQ0FBZ0IxSSxLQUFNZ2lCLEVBQ3hCLENBTkYsSUFBc0I1QixFQUFhSyxFQTZCakMsT0E3Qm9CTCxFQVFQNEIsRUFSb0J2QixFQVFaLENBQUMsQ0FDcEI1WixJQUFLLE1BQ0wyUSxNQUFPLFNBQWF5SyxFQUFZM1UsRUFBT2lGLEVBQU9wUixHQUM1QyxJQUFJcUIsRUFBU3hDLEtBQUtpYixNQUFNZ0gsRUFBWTNVLEVBQU9pRixFQUFPcFIsR0FFbEQsT0FBS3FCLEVBSUUsQ0FDTDBmLE9BQVEsSUFBSXBCLEdBQVl0ZSxFQUFPZ1YsTUFBT3hYLEtBQUttaUIsU0FBVW5pQixLQUFLb2lCLElBQUtwaUIsS0FBSzZiLFNBQVU3YixLQUFLbWhCLGFBQ25GL0ksS0FBTTVWLEVBQU80VixNQUxOLElBT1gsR0FDQyxDQUNEdlIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnFKLEVBQVV3QixFQUFRL0wsR0FDekMsT0FBTyxDQUNULElBMUI4RG1LLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0E2QjlHdUIsQ0FDVCxDQTNCaUMsR0NQakMsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBR3pNLElBQUl1ZixHQUF5QixTQUFVQyxJQWpCOUMsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQWtCOVgsQ0FBVTRELEVBQVdDLEdBRXJCLElBdEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWdCL0I2QixHQWhCZ0I5QixFQWdCTW9ELEVBaEJTbkQsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQWtCbmEsU0FBUzhmLElBQ1AsSUFBSWxCLEdBN0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0ErQnBKLENBQWdCMUksS0FBTXNpQixHQUV0QixJQUFLLElBQUlaLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLE1BRTlFQSxDQUNULENBNENBLE9BcEZvQmhCLEVBMENQa0MsRUExQ29CN0IsRUEwQ1QsQ0FBQyxDQUN2QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBRU4sSUFBSyxJQUNMLElBQUssS0FDTCxJQUFLLE1BQ0gsT0FBT2lGLEVBQU1wRSxJQUFJOFQsRUFBWSxDQUMzQjdULE1BQU8saUJBQ0htRSxFQUFNcEUsSUFBSThULEVBQVksQ0FDMUI3VCxNQUFPLFdBSVgsSUFBSyxRQUNILE9BQU9tRSxFQUFNcEUsSUFBSThULEVBQVksQ0FDM0I3VCxNQUFPLFdBS1gsUUFDRSxPQUFPbUUsRUFBTXBFLElBQUk4VCxFQUFZLENBQzNCN1QsTUFBTyxVQUNIbUUsRUFBTXBFLElBQUk4VCxFQUFZLENBQzFCN1QsTUFBTyxpQkFDSG1FLEVBQU1wRSxJQUFJOFQsRUFBWSxDQUMxQjdULE1BQU8sV0FHZixHQUNDLENBQ0R2SCxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNNlcsRUFBTzdKLEdBSS9CLE9BSEE2SixFQUFNbFQsSUFBTXFKLEVBQ1poTixFQUFLVyxlQUFlcU0sRUFBTyxFQUFHLEdBQzlCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQWpGOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBb0Y5RzZCLENBQ1QsQ0FsRW9DLENBa0VsQ04sSUMzRlNRLElDZ0NVMVksS0FBS2tFLElBQUksR0FBSSxHRGhDTCxDQUMzQlIsTUFBTyxpQkFFUGhELEtBQU0scUJBRU5pRixVQUFXLGtDQUVYSixLQUFNLHFCQUVOb1QsUUFBUyxxQkFFVEMsUUFBUyxxQkFFVEMsUUFBUyxpQkFFVEMsUUFBUyxpQkFFVEMsT0FBUSxZQUVSQyxPQUFRLFlBRVJDLFlBQWEsTUFFYkMsVUFBVyxXQUVYQyxZQUFhLFdBRWJDLFdBQVksV0FFWkMsZ0JBQWlCLFNBQ2pCQyxrQkFBbUIsUUFFbkJDLGdCQUFpQixhQUVqQkMsa0JBQW1CLGFBRW5CQyxpQkFBa0IsZUFHVEMsR0FDYSwyQkFEYkEsR0FFRiwwQkFGRUEsR0FHYSxvQ0FIYkEsR0FJQywyQkFKREEsR0FLZ0Isc0NFMUNwQixTQUFTQyxHQUFTQyxFQUFlQyxHQUN0QyxPQUFLRCxFQUlFLENBQ0xsTSxNQUFPbU0sRUFBTUQsRUFBY2xNLE9BQzNCWSxLQUFNc0wsRUFBY3RMLE1BTGJzTCxDQU9YLENBQ08sU0FBU0UsR0FBb0I1UixFQUFTaVEsR0FDM0MsSUFBSTNQLEVBQWMyUCxFQUFXMVAsTUFBTVAsR0FFbkMsT0FBS00sRUFJRSxDQUNMa0YsTUFBT2MsU0FBU2hHLEVBQVksR0FBSSxJQUNoQzhGLEtBQU02SixFQUFXemdCLE1BQU04USxFQUFZLEdBQUdoUyxTQUwvQixJQU9YLENBQ08sU0FBU3VqQixHQUFxQjdSLEVBQVNpUSxHQUM1QyxJQUFJM1AsRUFBYzJQLEVBQVcxUCxNQUFNUCxHQUVuQyxPQUFLTSxFQUtrQixNQUFuQkEsRUFBWSxHQUNQLENBQ0xrRixNQUFPLEVBQ1BZLEtBQU02SixFQUFXemdCLE1BQU0sSUFRcEIsQ0FDTGdXLE9BTDRCLE1BQW5CbEYsRUFBWSxHQUFhLEdBQUssSURhWCxNQ1psQkEsRUFBWSxHQUFLZ0csU0FBU2hHLEVBQVksR0FBSSxJQUFNLEdERTVCLEtDRGxCQSxFQUFZLEdBQUtnRyxTQUFTaEcsRUFBWSxHQUFJLElBQU0sR0RxQjlCLEtDcEJsQkEsRUFBWSxHQUFLZ0csU0FBU2hHLEVBQVksR0FBSSxJQUFNLElBRzVEOEYsS0FBTTZKLEVBQVd6Z0IsTUFBTThRLEVBQVksR0FBR2hTLFNBakIvQixJQW1CWCxDQUNPLFNBQVN3akIsR0FBcUI3QixHQUNuQyxPQUFPMkIsR0FBb0JwQixHQUFnQlcsZ0JBQWlCbEIsRUFDOUQsQ0FDTyxTQUFTOEIsR0FBYXZkLEVBQUd5YixHQUM5QixPQUFRemIsR0FDTixLQUFLLEVBQ0gsT0FBT29kLEdBQW9CcEIsR0FBZ0JPLFlBQWFkLEdBRTFELEtBQUssRUFDSCxPQUFPMkIsR0FBb0JwQixHQUFnQlEsVUFBV2YsR0FFeEQsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCUyxZQUFhaEIsR0FFMUQsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCVSxXQUFZakIsR0FFekQsUUFDRSxPQUFPMkIsR0FBb0IsSUFBSUksT0FBTyxVQUFZeGQsRUFBSSxLQUFNeWIsR0FFbEUsQ0FDTyxTQUFTZ0MsR0FBbUJ6ZCxFQUFHeWIsR0FDcEMsT0FBUXpiLEdBQ04sS0FBSyxFQUNILE9BQU9vZCxHQUFvQnBCLEdBQWdCWSxrQkFBbUJuQixHQUVoRSxLQUFLLEVBQ0gsT0FBTzJCLEdBQW9CcEIsR0FBZ0JhLGdCQUFpQnBCLEdBRTlELEtBQUssRUFDSCxPQUFPMkIsR0FBb0JwQixHQUFnQmMsa0JBQW1CckIsR0FFaEUsS0FBSyxFQUNILE9BQU8yQixHQUFvQnBCLEdBQWdCZSxpQkFBa0J0QixHQUUvRCxRQUNFLE9BQU8yQixHQUFvQixJQUFJSSxPQUFPLFlBQWN4ZCxFQUFJLEtBQU15YixHQUVwRSxDQUNPLFNBQVNpQyxHQUFxQi9ULEdBQ25DLE9BQVFBLEdBQ04sSUFBSyxVQUNILE9BQU8sRUFFVCxJQUFLLFVBQ0gsT0FBTyxHQUVULElBQUssS0FDTCxJQUFLLE9BQ0wsSUFBSyxZQUNILE9BQU8sR0FLVCxRQUNFLE9BQU8sRUFFYixDQUNPLFNBQVNnVSxHQUFzQkMsRUFBY0MsR0FDbEQsSUFNSTdoQixFQU5BOGhCLEVBQWNELEVBQWMsRUFLNUJFLEVBQWlCRCxFQUFjRCxFQUFjLEVBQUlBLEVBR3JELEdBQUlFLEdBQWtCLEdBQ3BCL2hCLEVBQVM0aEIsR0FBZ0IsUUFDcEIsQ0FDTCxJQUFJSSxFQUFXRCxFQUFpQixHQUdoQy9oQixFQUFTNGhCLEVBRjBDLElBQTdCdGEsS0FBS0UsTUFBTXdhLEVBQVcsTUFDcEJKLEdBQWdCSSxFQUFXLElBQ1ksSUFBTSxFQUN2RSxDQUVBLE9BQU9GLEVBQWM5aEIsRUFBUyxFQUFJQSxDQUNwQyxDQUNPLFNBQVNpaUIsR0FBZ0J6WixHQUM5QixPQUFPQSxFQUFPLEtBQVEsR0FBS0EsRUFBTyxHQUFNLEdBQUtBLEVBQU8sS0FBUSxDQUM5RCxDQ2pJQSxTQUFTLEdBQVFqSSxHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FZek0sSUFBSTJoQixHQUEwQixTQUFVbkMsSUExQi9DLFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0EyQjlYLENBQVVnRyxFQUFZbkMsR0FFdEIsSUEvQm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBeUIvQjZCLEdBekJnQjlCLEVBeUJNd0YsRUF6QlN2RixFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBMkJuYSxTQUFTa2lCLElBQ1AsSUFBSXRELEdBdENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0F3Q3BKLENBQWdCMUksS0FBTTBrQixHQUV0QixJQUFLLElBQUloRCxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLEtBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUU1R0EsQ0FDVCxDQWlEQSxPQWxHb0JoQixFQW1EUHNFLEVBbkRvQmpFLEVBbURSLENBQUMsQ0FDeEI1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEdBQ3ZDLElBQUk0RixFQUFnQixTQUF1Qm5OLEdBQ3pDLE1BQU8sQ0FDTEEsS0FBTUEsRUFDTjJaLGVBQTBCLE9BQVZyWCxFQUVwQixFQUVBLE9BQVFBLEdBQ04sSUFBSyxJQUNILE9BQU9tVyxHQUFTTSxHQUFhLEVBQUc5QixHQUFhOUosR0FFL0MsSUFBSyxLQUNILE9BQU9zTCxHQUFTbFIsRUFBTWpFLGNBQWMyVCxFQUFZLENBQzlDMVQsS0FBTSxTQUNKNEosR0FFTixRQUNFLE9BQU9zTCxHQUFTTSxHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FBYTlKLEdBRTlELEdBQ0MsQ0FDRHRSLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsRUFBTW1OLGdCQUFrQm5OLEVBQU14TSxLQUFPLENBQzlDLEdBQ0MsQ0FDRG5FLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU02VyxFQUFPN0osR0FDL0IsSUFBSTZNLEVBQWM3WixFQUFLUyxpQkFFdkIsR0FBSXVNLEVBQU1tTixlQUFnQixDQUN4QixJQUFJQyxFQUF5QlQsR0FBc0IzTSxFQUFNeE0sS0FBTXFaLEdBRy9ELE9BRkE3WixFQUFLVyxlQUFleVosRUFBd0IsRUFBRyxHQUMvQ3BhLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsQ0FFQSxJQUFJUSxFQUFTLFFBQVNxVyxHQUF3QixJQUFkQSxFQUFNbFQsSUFBeUIsRUFBSXFKLEVBQU14TSxLQUF2QndNLEVBQU14TSxLQUd4RCxPQUZBUixFQUFLVyxlQUFlSCxFQUFNLEVBQUcsR0FDN0JSLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUEvRjhEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQWtHOUdpRSxDQUNULENBdkVxQyxDQXVFbkMxQyxJQ3pHRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FPek0sSUFBSThoQixHQUFtQyxTQUFVdEMsSUFyQnhELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FzQjlYLENBQVVtRyxFQUFxQnRDLEdBRS9CLElBMUJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQW9CL0I2QixHQXBCZ0I5QixFQW9CTTJGLEVBcEJTMUYsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQXNCbmEsU0FBU3FpQixJQUNQLElBQUl6RCxHQWpDUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBbUNwSixDQUFnQjFJLEtBQU02a0IsR0FFdEIsSUFBSyxJQUFJbkQsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFM0hBLENBQ1QsQ0FpREEsT0E3Rm9CaEIsRUE4Q1B5RSxFQTlDb0JwRSxFQThDQyxDQUFDLENBQ2pDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxJQUFJNEYsRUFBZ0IsU0FBdUJuTixHQUN6QyxNQUFPLENBQ0xBLEtBQU1BLEVBQ04yWixlQUEwQixPQUFWclgsRUFFcEIsRUFFQSxPQUFRQSxHQUNOLElBQUssSUFDSCxPQUFPbVcsR0FBU00sR0FBYSxFQUFHOUIsR0FBYTlKLEdBRS9DLElBQUssS0FDSCxPQUFPc0wsR0FBU2xSLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUM5QzFULEtBQU0sU0FDSjRKLEdBRU4sUUFDRSxPQUFPc0wsR0FBU00sR0FBYXpXLEVBQU1oTixPQUFRMmhCLEdBQWE5SixHQUU5RCxHQUNDLENBQ0R0UixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEVBQU1tTixnQkFBa0JuTixFQUFNeE0sS0FBTyxDQUM5QyxHQUNDLENBQ0RuRSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNNlcsRUFBTzdKLEVBQU9yVyxHQUN0QyxJQUFJa2pCLEVBQWM1WCxFQUFlakMsRUFBTXJKLEdBRXZDLEdBQUlxVyxFQUFNbU4sZUFBZ0IsQ0FDeEIsSUFBSUMsRUFBeUJULEdBQXNCM00sRUFBTXhNLEtBQU1xWixHQUcvRCxPQUZBN1osRUFBS1csZUFBZXlaLEVBQXdCLEVBQUd6akIsRUFBUXdMLHVCQUN2RG5DLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJlLEVBQWVyQixFQUFNckosRUFDOUIsQ0FFQSxJQUFJNkosRUFBUyxRQUFTcVcsR0FBd0IsSUFBZEEsRUFBTWxULElBQXlCLEVBQUlxSixFQUFNeE0sS0FBdkJ3TSxFQUFNeE0sS0FHeEQsT0FGQVIsRUFBS1csZUFBZUgsRUFBTSxFQUFHN0osRUFBUXdMLHVCQUNyQ25DLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJlLEVBQWVyQixFQUFNckosRUFDOUIsSUExRjhEc2YsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQTZGOUdvRSxDQUNULENBdkU4QyxDQXVFNUM3QyxJQ3BHRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FNek0sSUFBSStoQixHQUFpQyxTQUFVdkMsSUFwQnRELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FxQjlYLENBQVVvRyxFQUFtQnZDLEdBRTdCLElBekJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQW1CL0I2QixHQW5CZ0I5QixFQW1CTTRGLEVBbkJTM0YsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQXFCbmEsU0FBU3NpQixJQUNQLElBQUkxRCxHQWhDUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBa0NwSixDQUFnQjFJLEtBQU04a0IsR0FFdEIsSUFBSyxJQUFJcEQsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRXJJQSxDQUNULENBcUJBLE9BaEVvQmhCLEVBNkNQMEUsR0E3Q29CckUsRUE2Q0QsQ0FBQyxDQUMvQjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxHQUNoQyxPQUNTMlcsR0FESyxNQUFWM1csRUFDd0IsRUFHRkEsRUFBTWhOLE9BSEQyaEIsRUFJakMsR0FDQyxDQUNEcGIsSUFBSyxNQUNMMlEsTUFBTyxTQUFhdUIsRUFBT2dNLEVBQVF2TixHQUNqQyxJQUFJd04sRUFBa0IsSUFBSTdiLEtBQUssR0FHL0IsT0FGQTZiLEVBQWdCN1osZUFBZXFNLEVBQU8sRUFBRyxHQUN6Q3dOLEVBQWdCbGEsWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUM5QlAsRUFBa0J5YSxFQUMzQixNQTdEMEUsR0FBa0I1RSxFQUFZN1ksVUFBV2taLEdBZ0U5R3FFLENBQ1QsQ0EzQzRDLENBMkMxQzlDLElDdkVGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJa2lCLEdBQWtDLFNBQVUxQyxJQWxCdkQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVXVHLEVBQW9CMUMsR0FFOUIsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNK0YsRUFqQlM5RixFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTeWlCLElBQ1AsSUFBSTdELEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTWlsQixHQUV0QixJQUFLLElBQUl2RCxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLEtBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRWpIQSxDQUNULENBb0JBLE9BN0RvQmhCLEVBMkNQNkUsR0EzQ29CeEUsRUEyQ0EsQ0FBQyxDQUNoQzVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxHQUNoQyxPQUNTMlcsR0FESyxNQUFWM1csRUFDd0IsRUFHRkEsRUFBTWhOLE9BSEQyaEIsRUFJakMsR0FDQyxDQUNEcGIsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUdoQyxPQUZBaE4sRUFBS1csZUFBZXFNLEVBQU8sRUFBRyxHQUM5QmhOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsTUExRDBFLEdBQWtCNFYsRUFBWTdZLFVBQVdrWixHQTZEOUd3RSxDQUNULENBMUM2QyxDQTBDM0NqRCxJQ3BFRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FJek0sSUFBSW1pQixHQUE2QixTQUFVM0MsSUFsQmxELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FtQjlYLENBQVV3RyxFQUFlM0MsR0FFekIsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNZ0csRUFqQlMvRixFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTMGlCLElBQ1AsSUFBSTlELEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTWtsQixHQUV0QixJQUFLLElBQUl4RCxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLEtBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRWhJQSxDQUNULENBZ0VBLE9BekdvQmhCLEVBMkNQOEUsRUEzQ29CekUsRUEyQ0wsQ0FBQyxDQUMzQjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBRU4sSUFBSyxJQUNMLElBQUssS0FFSCxPQUFPeVcsR0FBYXpXLEVBQU1oTixPQUFRMmhCLEdBR3BDLElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxZQUlWLElBQUssTUFDSCxPQUFPZ0UsRUFBTXhELFFBQVFrVCxFQUFZLENBQy9CN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXhELFFBQVFrVCxFQUFZLENBQzlCN1QsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU91RCxFQUFNeEQsUUFBUWtULEVBQVksQ0FDL0I3VCxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNeEQsUUFBUWtULEVBQVksQ0FDL0I3VCxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNeEQsUUFBUWtULEVBQVksQ0FDOUI3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNeEQsUUFBUWtULEVBQVksQ0FDOUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUdoQyxPQUZBaE4sRUFBS2tGLFlBQTBCLEdBQWI4SCxFQUFRLEdBQVEsR0FDbENoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBdEc4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0F5RzlHeUUsQ0FDVCxDQXRGd0MsQ0FzRnRDbEQsSUNoSEYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUlvaUIsR0FBdUMsU0FBVTVDLElBbEI1RCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVeUcsRUFBeUI1QyxHQUVuQyxJQXZCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFpQi9CNkIsR0FqQmdCOUIsRUFpQk1pRyxFQWpCU2hHLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FtQm5hLFNBQVMyaUIsSUFDUCxJQUFJL0QsR0E5QlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWdDcEosQ0FBZ0IxSSxLQUFNbWxCLEdBRXRCLElBQUssSUFBSXpELEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFaElBLENBQ1QsQ0FnRUEsT0F6R29CaEIsRUEyQ1ArRSxFQTNDb0IxRSxFQTJDSyxDQUFDLENBQ3JDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxPQUFRakYsR0FFTixJQUFLLElBQ0wsSUFBSyxLQUVILE9BQU95VyxHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FHcEMsSUFBSyxLQUNILE9BQU8xUCxFQUFNakUsY0FBYzJULEVBQVksQ0FDckMxVCxLQUFNLFlBSVYsSUFBSyxNQUNILE9BQU9nRSxFQUFNeEQsUUFBUWtULEVBQVksQ0FDL0I3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNeEQsUUFBUWtULEVBQVksQ0FDOUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT3VELEVBQU14RCxRQUFRa1QsRUFBWSxDQUMvQjdULE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT3VELEVBQU14RCxRQUFRa1QsRUFBWSxDQUMvQjdULE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU14RCxRQUFRa1QsRUFBWSxDQUM5QjdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU14RCxRQUFRa1QsRUFBWSxDQUM5QjdULE1BQU8sU0FDUFksUUFBUyxlQUdqQixHQUNDLENBQ0RuSSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxDQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBR2hDLE9BRkFoTixFQUFLa0YsWUFBMEIsR0FBYjhILEVBQVEsR0FBUSxHQUNsQ2hOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUF0RzhEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQXlHOUcwRSxDQUNULENBdEZrRCxDQXNGaERuRCxJQ2hIRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSXFpQixHQUEyQixTQUFVN0MsSUFuQmhELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVUwRyxFQUFhN0MsR0FFdkIsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNa0csRUFsQlNqRyxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTNGlCLElBQ1AsSUFBSWhFLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTW9sQixHQUV0QixJQUFLLElBQUkxRCxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVsSSxHQUFnQixHQUF1QjJZLEdBQVEsV0FBWSxLQUVwREEsQ0FDVCxDQXNFQSxPQWhIb0JoQixFQTRDUGdGLEVBNUNvQjNFLEVBNENQLENBQUMsQ0FDekI1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEdBQ3ZDLElBQUk0RixFQUFnQixTQUF1QlgsR0FDekMsT0FBT0EsRUFBUSxDQUNqQixFQUVBLE9BQVFsSyxHQUVOLElBQUssSUFDSCxPQUFPbVcsR0FBU0csR0FBb0JwQixHQUFnQmhWLE1BQU95VSxHQUFhOUosR0FHMUUsSUFBSyxLQUNILE9BQU9zTCxHQUFTTSxHQUFhLEVBQUc5QixHQUFhOUosR0FHL0MsSUFBSyxLQUNILE9BQU9zTCxHQUFTbFIsRUFBTWpFLGNBQWMyVCxFQUFZLENBQzlDMVQsS0FBTSxVQUNKNEosR0FHTixJQUFLLE1BQ0gsT0FBTzVGLEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM3QjdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM1QjdULE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTS9FLE1BQU15VSxFQUFZLENBQzdCN1QsTUFBTyxTQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPdUQsRUFBTS9FLE1BQU15VSxFQUFZLENBQzdCN1QsTUFBTyxPQUNQWSxRQUFTLGdCQUNMdUQsRUFBTS9FLE1BQU15VSxFQUFZLENBQzVCN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTS9FLE1BQU15VSxFQUFZLENBQzVCN1QsTUFBTyxTQUNQWSxRQUFTLGVBR2pCLEdBQ0MsQ0FDRG5JLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLEVBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU11YSxFQUFRdk4sR0FHaEMsT0FGQWhOLEVBQUtrRixZQUFZOEgsRUFBTyxHQUN4QmhOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUE3RzhEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQWdIOUcyRSxDQUNULENBNUZzQyxDQTRGcENwRCxJQ3ZIRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSXNpQixHQUFxQyxTQUFVOUMsSUFuQjFELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVUyRyxFQUF1QjlDLEdBRWpDLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTW1HLEVBbEJTbEcsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBUzZpQixJQUNQLElBQUlqRSxHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU1xbEIsR0FFdEIsSUFBSyxJQUFJM0QsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFM0hBLENBQ1QsQ0FzRUEsT0FoSG9CaEIsRUE0Q1BpRixFQTVDb0I1RSxFQTRDRyxDQUFDLENBQ25DNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxJQUFJNEYsRUFBZ0IsU0FBdUJYLEdBQ3pDLE9BQU9BLEVBQVEsQ0FDakIsRUFFQSxPQUFRbEssR0FFTixJQUFLLElBQ0gsT0FBT21XLEdBQVNHLEdBQW9CcEIsR0FBZ0JoVixNQUFPeVUsR0FBYTlKLEdBRzFFLElBQUssS0FDSCxPQUFPc0wsR0FBU00sR0FBYSxFQUFHOUIsR0FBYTlKLEdBRy9DLElBQUssS0FDSCxPQUFPc0wsR0FBU2xSLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUM5QzFULEtBQU0sVUFDSjRKLEdBR04sSUFBSyxNQUNILE9BQU81RixFQUFNL0UsTUFBTXlVLEVBQVksQ0FDN0I3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNL0UsTUFBTXlVLEVBQVksQ0FDNUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT3VELEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM3QjdULE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT3VELEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM3QjdULE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM1QjdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU0vRSxNQUFNeVUsRUFBWSxDQUM1QjdULE1BQU8sU0FDUFksUUFBUyxlQUdqQixHQUNDLENBQ0RuSSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBR2hDLE9BRkFoTixFQUFLa0YsWUFBWThILEVBQU8sR0FDeEJoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBN0c4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FnSDlHNEUsQ0FDVCxDQTVGZ0QsQ0E0RjlDckQsSUN2SEYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBUXpNLElBQUl1aUIsR0FBK0IsU0FBVS9DLElBdEJwRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBdUI5WCxDQUFVNEcsRUFBaUIvQyxHQUUzQixJQTNCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFxQi9CNkIsR0FyQmdCOUIsRUFxQk1vRyxFQXJCU25HLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0F1Qm5hLFNBQVM4aUIsSUFDUCxJQUFJbEUsR0FsQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQW9DcEosQ0FBZ0IxSSxLQUFNc2xCLEdBRXRCLElBQUssSUFBSTVELEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksS0FFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTNIQSxDQUNULENBOEJBLE9BM0VvQmhCLEVBK0NQa0YsRUEvQ29CN0UsRUErQ0gsQ0FBQyxDQUM3QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU9zVyxHQUFvQnBCLEdBQWdCblQsS0FBTTRTLEdBRW5ELElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxTQUdWLFFBQ0UsT0FBT3dWLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUV4QyxHQUNDLENBQ0RwYixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEVBQU9yVyxHQUN2QyxPQUFPMEssRUN6RUUsU0FBb0IzQixFQUFXcWIsRUFBV3BrQixHQUN2RG9ILEVBQWEsRUFBR1UsV0FDaEIsSUFBSXVCLEVBQU96QixFQUFPbUIsR0FDZG1GLEVBQU81RixFQUFVOGIsR0FDakI1YSxFQUFPbUMsRUFBV3RDLEVBQU1ySixHQUFXa08sRUFFdkMsT0FEQTdFLEVBQUtJLFdBQVdKLEVBQUtLLGFBQXNCLEVBQVBGLEdBQzdCSCxDQUNULENEa0U0QmdiLENBQVdoYixFQUFNZ04sRUFBT3JXLEdBQVVBLEVBQzFELElBeEU4RHNmLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0EyRTlHNkUsQ0FDVCxDQXBEMEMsQ0FvRHhDdEQsSUVsRkYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBUXpNLElBQUkwaUIsR0FBNkIsU0FBVWxELElBdEJsRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBdUI5WCxDQUFVK0csRUFBZWxELEdBRXpCLElBM0JvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQXFCL0I2QixHQXJCZ0I5QixFQXFCTXVHLEVBckJTdEcsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQXVCbmEsU0FBU2lqQixJQUNQLElBQUlyRSxHQWxDUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBb0NwSixDQUFnQjFJLEtBQU15bEIsR0FFdEIsSUFBSyxJQUFJL0QsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxLQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVoSUEsQ0FDVCxDQThCQSxPQTNFb0JoQixFQStDUHFGLEVBL0NvQmhGLEVBK0NMLENBQUMsQ0FDM0I1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDSCxPQUFPc1csR0FBb0JwQixHQUFnQm5ULEtBQU00UyxHQUVuRCxJQUFLLEtBQ0gsT0FBTzFQLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUNyQzFULEtBQU0sU0FHVixRQUNFLE9BQU93VixHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FFeEMsR0FDQyxDQUNEcGIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUNoQyxPQUFPak4sRUN6RUUsU0FBdUJMLEVBQVd3YixHQUMvQ25kLEVBQWEsRUFBR1UsV0FDaEIsSUFBSXVCLEVBQU96QixFQUFPbUIsR0FDZHFGLEVBQVU5RixFQUFVaWMsR0FDcEIvYSxFQUFPWSxFQUFjZixHQUFRK0UsRUFFakMsT0FEQS9FLEVBQUtJLFdBQVdKLEVBQUtLLGFBQXNCLEVBQVBGLEdBQzdCSCxDQUNULENEa0UrQm1iLENBQWNuYixFQUFNZ04sR0FDL0MsSUF4RThEaUosR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQTJFOUdnRixDQUNULENBcER3QyxDQW9EdEN6RCxJRWxGRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLaE4sSUFBSTZpQixHQUFnQixDQUFDLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxJQUM3REMsR0FBMEIsQ0FBQyxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLEdBQUksSUFFaEVDLEdBQTBCLFNBQVV2RCxJQXRCL0MsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXVCOVgsQ0FBVW9ILEVBQVl2RCxHQUV0QixJQTNCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFxQi9CNkIsR0FyQmdCOUIsRUFxQk00RyxFQXJCUzNHLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0F1Qm5hLFNBQVNzakIsSUFDUCxJQUFJMUUsR0FsQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQW9DcEosQ0FBZ0IxSSxLQUFNOGxCLEdBRXRCLElBQUssSUFBSXBFLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FXekIsT0FOQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLGNBQWUsR0FFOUQsR0FBZ0IsR0FBdUJBLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRXRIQSxDQUNULENBd0NBLE9BdkZvQmhCLEVBaURQMEYsRUFqRG9CckYsRUFpRFIsQ0FBQyxDQUN4QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU9zVyxHQUFvQnBCLEdBQWdCaFksS0FBTXlYLEdBRW5ELElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxTQUdWLFFBQ0UsT0FBT3dWLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUV4QyxHQUNDLENBQ0RwYixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCaE4sRUFBTWdOLEdBQzdCLElBQ0l1TyxFQUFhdEIsR0FETmphLEVBQUtTLGtCQUVadUMsRUFBUWhELEVBQUtpRCxjQUVqQixPQUFJc1ksRUFDS3ZPLEdBQVMsR0FBS0EsR0FBU3FPLEdBQXdCclksR0FFL0NnSyxHQUFTLEdBQUtBLEdBQVNvTyxHQUFjcFksRUFFaEQsR0FDQyxDQUNEM0csSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUdoQyxPQUZBaE4sRUFBS0ksV0FBVzRNLEdBQ2hCaE4sRUFBS00sWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQXBGOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBdUY5R3FGLENBQ1QsQ0FoRXFDLENBZ0VuQzlELElDOUZGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJaWpCLEdBQStCLFNBQVV6RCxJQW5CcEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXNILEVBQWlCekQsR0FFM0IsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNOEcsRUFsQlM3RyxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTd2pCLElBQ1AsSUFBSTVFLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTWdtQixHQUV0QixJQUFLLElBQUl0RSxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBV3pCLE9BTkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxjQUFlLEdBRTlELEdBQWdCLEdBQXVCQSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVySUEsQ0FDVCxDQXdDQSxPQXBGb0JoQixFQThDUDRGLEVBOUNvQnZGLEVBOENILENBQUMsQ0FDN0I1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUNOLElBQUssSUFDTCxJQUFLLEtBQ0gsT0FBT3NXLEdBQW9CcEIsR0FBZ0IvUyxVQUFXd1MsR0FFeEQsSUFBSyxLQUNILE9BQU8xUCxFQUFNakUsY0FBYzJULEVBQVksQ0FDckMxVCxLQUFNLFNBR1YsUUFDRSxPQUFPd1YsR0FBYXpXLEVBQU1oTixPQUFRMmhCLEdBRXhDLEdBQ0MsQ0FDRHBiLElBQUssV0FDTDJRLE1BQU8sU0FBa0JoTixFQUFNZ04sR0FJN0IsT0FGaUJpTixHQUROamEsRUFBS1Msa0JBSVB1TSxHQUFTLEdBQUtBLEdBQVMsSUFFdkJBLEdBQVMsR0FBS0EsR0FBUyxHQUVsQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBR2hDLE9BRkFoTixFQUFLa0YsWUFBWSxFQUFHOEgsR0FDcEJoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBakY4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FvRjlHdUYsQ0FDVCxDQWhFMEMsQ0FnRXhDaEUsSUN2RmEsU0FBU2lFLEdBQVUvYixFQUFXZ2MsRUFBVS9rQixHQUNyRCxJQUFJMkssRUFBTUMsRUFBT0MsRUFBT0MsRUFBdUJDLEVBQWlCQyxFQUF1QkMsRUFBdUJDLEVBRTlHOUQsRUFBYSxFQUFHVSxXQUNoQixJQUFJMEMsRUFBaUJDLElBQ2pCVSxFQUFlN0MsRUFBKzBCLFFBQXAwQnFDLEVBQThoQixRQUF0aEJDLEVBQWtkLFFBQXpjQyxFQUE2RyxRQUFwR0MsRUFBd0I5SyxhQUF5QyxFQUFTQSxFQUFRbUwsb0JBQW9ELElBQTFCTCxFQUFtQ0EsRUFBd0I5SyxTQUF5RixRQUF0QytLLEVBQWtCL0ssRUFBUW9MLGNBQXdDLElBQXBCTCxHQUE0RixRQUFyREMsRUFBd0JELEVBQWdCL0ssZUFBK0MsSUFBMUJnTCxPQUE1SixFQUF3TUEsRUFBc0JHLG9CQUFvQyxJQUFWTixFQUFtQkEsRUFBUUwsRUFBZVcsb0JBQW9DLElBQVZQLEVBQW1CQSxFQUE0RCxRQUFuREssRUFBd0JULEVBQWVZLGNBQThDLElBQTFCSCxHQUF5RyxRQUE1REMsRUFBeUJELEVBQXNCakwsZUFBZ0QsSUFBM0JrTCxPQUE5RSxFQUEySEEsRUFBdUJDLG9CQUFtQyxJQUFUUixFQUFrQkEsRUFBTyxHQUVuNEIsS0FBTVEsR0FBZ0IsR0FBS0EsR0FBZ0IsR0FDekMsTUFBTSxJQUFJRSxXQUFXLG9EQUd2QixJQUFJaEMsRUFBT3pCLEVBQU9tQixHQUNkTyxFQUFNaEIsRUFBVXljLEdBSWhCdmIsSUFGWUYsRUFBTSxFQUNNLEdBQUssRUFDVjZCLEVBQWUsRUFBSSxHQUFLN0IsRUFIOUJELEVBQUtFLFlBS3RCLE9BREFGLEVBQUtJLFdBQVdKLEVBQUtLLGFBQWVGLEdBQzdCSCxDQUNULENDdkJBLFNBQVMsR0FBUXpILEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJb2pCLEdBQXlCLFNBQVU1RCxJQW5COUMsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXlILEVBQVc1RCxHQUVyQixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk1pSCxFQWxCU2hILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVMyakIsSUFDUCxJQUFJL0UsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNbW1CLEdBRXRCLElBQUssSUFBSXpFLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUV4RkEsQ0FDVCxDQXNFQSxPQWhIb0JoQixFQTRDUCtGLEVBNUNvQjFGLEVBNENULENBQUMsQ0FDdkI1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEdBQ3ZDLE9BQVFqRixHQUVOLElBQUssSUFDTCxJQUFLLEtBQ0wsSUFBSyxNQUNILE9BQU9pRixFQUFNOUgsSUFBSXdYLEVBQVksQ0FDM0I3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFFBQ0gsT0FBT3VELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMzQjdULE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssU0FDSCxPQUFPdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzNCN1QsTUFBTyxRQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxTQUNQWSxRQUFTLGVBS2IsUUFDRSxPQUFPdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzNCN1QsTUFBTyxPQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxRQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxTQUNQWSxRQUFTLGVBR2pCLEdBQ0MsQ0FDRG5JLElBQUssV0FDTDJRLE1BQU8sU0FBa0J1QixFQUFPdkIsR0FDOUIsT0FBT0EsR0FBUyxHQUFLQSxHQUFTLENBQ2hDLEdBQ0MsQ0FDRDNRLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU11YSxFQUFRdk4sRUFBT3JXLEdBR3ZDLE9BRkFxSixFQUFPeWIsR0FBVXpiLEVBQU1nTixFQUFPclcsSUFDekIySixZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBN0c4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FnSDlHMEYsQ0FDVCxDQTVGb0MsQ0E0RmxDbkUsSUN2SEYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBTXpNLElBQUlxakIsR0FBOEIsU0FBVTdELElBcEJuRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBcUI5WCxDQUFVMEgsRUFBZ0I3RCxHQUUxQixJQXpCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFtQi9CNkIsR0FuQmdCOUIsRUFtQk1rSCxFQW5CU2pILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FxQm5hLFNBQVM0akIsSUFDUCxJQUFJaEYsR0FoQ1IsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWtDcEosQ0FBZ0IxSSxLQUFNb21CLEdBRXRCLElBQUssSUFBSTFFLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxNQUVySUEsQ0FDVCxDQXFGQSxPQWhJb0JoQixFQTZDUGdHLEVBN0NvQjNGLEVBNkNKLENBQUMsQ0FDNUI1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxFQUFZM1UsRUFBT2lGLEVBQU9wUixHQUM5QyxJQUFJZ1gsRUFBZ0IsU0FBdUJYLEdBQ3pDLElBQUk2TyxFQUE4QyxFQUE5QnZjLEtBQUtFLE9BQU93TixFQUFRLEdBQUssR0FDN0MsT0FBUUEsRUFBUXJXLEVBQVFtTCxhQUFlLEdBQUssRUFBSStaLENBQ2xELEVBRUEsT0FBUS9ZLEdBRU4sSUFBSyxJQUNMLElBQUssS0FFSCxPQUFPbVcsR0FBU00sR0FBYXpXLEVBQU1oTixPQUFRMmhCLEdBQWE5SixHQUcxRCxJQUFLLEtBQ0gsT0FBT3NMLEdBQVNsUixFQUFNakUsY0FBYzJULEVBQVksQ0FDOUMxVCxLQUFNLFFBQ0o0SixHQUdOLElBQUssTUFDSCxPQUFPNUYsRUFBTTlILElBQUl3WCxFQUFZLENBQzNCN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxRQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxRQUNILE9BQU91RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDM0I3VCxNQUFPLFNBQ1BZLFFBQVMsZUFJYixJQUFLLFNBQ0gsT0FBT3VELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMzQjdULE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sU0FDUFksUUFBUyxlQUtiLFFBQ0UsT0FBT3VELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMzQjdULE1BQU8sT0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sU0FDUFksUUFBUyxlQUdqQixHQUNDLENBQ0RuSSxJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxDQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEVBQU9yVyxHQUd2QyxPQUZBcUosRUFBT3liLEdBQVV6YixFQUFNZ04sRUFBT3JXLElBQ3pCMkosWUFBWSxFQUFHLEVBQUcsRUFBRyxHQUNuQk4sQ0FDVCxJQTdIOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBZ0k5RzJGLENBQ1QsQ0EzR3lDLENBMkd2Q3BFLElDdklGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJdWpCLEdBQXdDLFNBQVUvRCxJQXBCN0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTRILEVBQTBCL0QsR0FFcEMsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNb0gsRUFuQlNuSCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTOGpCLElBQ1AsSUFBSWxGLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXNtQixHQUV0QixJQUFLLElBQUk1RSxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFcklBLENBQ1QsQ0FxRkEsT0FoSW9CaEIsRUE2Q1BrRyxFQTdDb0I3RixFQTZDTSxDQUFDLENBQ3RDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixFQUFPcFIsR0FDOUMsSUFBSWdYLEVBQWdCLFNBQXVCWCxHQUN6QyxJQUFJNk8sRUFBOEMsRUFBOUJ2YyxLQUFLRSxPQUFPd04sRUFBUSxHQUFLLEdBQzdDLE9BQVFBLEVBQVFyVyxFQUFRbUwsYUFBZSxHQUFLLEVBQUkrWixDQUNsRCxFQUVBLE9BQVEvWSxHQUVOLElBQUssSUFDTCxJQUFLLEtBRUgsT0FBT21XLEdBQVNNLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUFhOUosR0FHMUQsSUFBSyxLQUNILE9BQU9zTCxHQUFTbFIsRUFBTWpFLGNBQWMyVCxFQUFZLENBQzlDMVQsS0FBTSxRQUNKNEosR0FHTixJQUFLLE1BQ0gsT0FBTzVGLEVBQU05SCxJQUFJd1gsRUFBWSxDQUMzQjdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sU0FDUFksUUFBUyxlQUliLElBQUssUUFDSCxPQUFPdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzNCN1QsTUFBTyxTQUNQWSxRQUFTLGVBSWIsSUFBSyxTQUNILE9BQU91RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDM0I3VCxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFLYixRQUNFLE9BQU91RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDM0I3VCxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixFQUFPclcsR0FHdkMsT0FGQXFKLEVBQU95YixHQUFVemIsRUFBTWdOLEVBQU9yVyxJQUN6QjJKLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FDbkJOLENBQ1QsSUE3SDhEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQWdJOUc2RixDQUNULENBM0dtRCxDQTJHakR0RSxJQ3ZJRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FNek0sSUFBSXdqQixHQUE0QixTQUFVaEUsSUFwQmpELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FxQjlYLENBQVU2SCxFQUFjaEUsR0FFeEIsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNcUgsRUFuQlNwSCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTK2pCLElBQ1AsSUFBSW5GLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXVtQixHQUV0QixJQUFLLElBQUk3RSxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFcklBLENBQ1QsQ0F3RkEsT0FuSW9CaEIsRUE2Q1BtRyxFQTdDb0I5RixFQTZDTixDQUFDLENBQzFCNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxJQUFJNEYsRUFBZ0IsU0FBdUJYLEdBQ3pDLE9BQWMsSUFBVkEsRUFDSyxFQUdGQSxDQUNULEVBRUEsT0FBUWxLLEdBRU4sSUFBSyxJQUNMLElBQUssS0FFSCxPQUFPeVcsR0FBYXpXLEVBQU1oTixPQUFRMmhCLEdBR3BDLElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxRQUlWLElBQUssTUFDSCxPQUFPa1YsR0FBU2xSLEVBQU05SCxJQUFJd1gsRUFBWSxDQUNwQzdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sUUFDUFksUUFBUyxnQkFDTHVELEVBQU05SCxJQUFJd1gsRUFBWSxDQUMxQjdULE1BQU8sU0FDUFksUUFBUyxlQUNQbUosR0FHTixJQUFLLFFBQ0gsT0FBT3NMLEdBQVNsUixFQUFNOUgsSUFBSXdYLEVBQVksQ0FDcEM3VCxNQUFPLFNBQ1BZLFFBQVMsZUFDUG1KLEdBR04sSUFBSyxTQUNILE9BQU9zTCxHQUFTbFIsRUFBTTlILElBQUl3WCxFQUFZLENBQ3BDN1QsTUFBTyxRQUNQWSxRQUFTLGdCQUNMdUQsRUFBTTlILElBQUl3WCxFQUFZLENBQzFCN1QsTUFBTyxTQUNQWSxRQUFTLGVBQ1BtSixHQUlOLFFBQ0UsT0FBT3NMLEdBQVNsUixFQUFNOUgsSUFBSXdYLEVBQVksQ0FDcEM3VCxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFFBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNOUgsSUFBSXdYLEVBQVksQ0FDMUI3VCxNQUFPLFNBQ1BZLFFBQVMsZUFDUG1KLEdBRVYsR0FDQyxDQUNEdFIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsQ0FDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUdoQyxPQUZBaE4sRUNoSVMsU0FBc0JOLEVBQVdnYyxHQUM5QzNkLEVBQWEsRUFBR1UsV0FDaEIsSUFBSXdCLEVBQU1oQixFQUFVeWMsR0FFaEJ6YixFQUFNLEdBQU0sSUFDZEEsR0FBWSxHQUdkLElBQ0lELEVBQU96QixFQUFPbUIsR0FJZFMsSUFGWUYsRUFBTSxFQUNNLEdBQUssRUFKZCxFQUttQixFQUFJLEdBQUtBLEVBSDlCRCxFQUFLRSxZQUt0QixPQURBRixFQUFLSSxXQUFXSixFQUFLSyxhQUFlRixHQUM3QkgsQ0FDVCxDRGdIYWdjLENBQWFoYyxFQUFNZ04sR0FDMUJoTixFQUFLTSxZQUFZLEVBQUcsRUFBRyxFQUFHLEdBQ25CTixDQUNULElBaEk4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FtSTlHOEYsQ0FDVCxDQTlHdUMsQ0E4R3JDdkUsSUUxSUYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUkwakIsR0FBMEIsU0FBVWxFLElBbEIvQyxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVK0gsRUFBWWxFLEdBRXRCLElBdkJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWlCL0I2QixHQWpCZ0I5QixFQWlCTXVILEVBakJTdEgsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW1CbmEsU0FBU2lrQixJQUNQLElBQUlyRixHQTlCUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBZ0NwSixDQUFnQjFJLEtBQU15bUIsR0FFdEIsSUFBSyxJQUFJL0UsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRXhGQSxDQUNULENBNkNBLE9BdEZvQmhCLEVBMkNQcUcsRUEzQ29CaEcsRUEyQ1IsQ0FBQyxDQUN4QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNMLElBQUssS0FDTCxJQUFLLE1BQ0gsT0FBT2lGLEVBQU1wQyxVQUFVOFIsRUFBWSxDQUNqQzdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU1wQyxVQUFVOFIsRUFBWSxDQUNoQzdULE1BQU8sU0FDUFksUUFBUyxlQUdiLElBQUssUUFDSCxPQUFPdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2pDN1QsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2pDN1QsTUFBTyxPQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2hDN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2hDN1QsTUFBTyxTQUNQWSxRQUFTLGVBR2pCLEdBQ0MsQ0FDRG5JLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU11YSxFQUFRdk4sR0FFaEMsT0FEQWhOLEVBQUtNLFlBQVlvWixHQUFxQjFNLEdBQVEsRUFBRyxFQUFHLEdBQzdDaE4sQ0FDVCxJQW5GOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBc0Y5R2dHLENBQ1QsQ0FuRXFDLENBbUVuQ3pFLElDN0ZGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJMmpCLEdBQWtDLFNBQVVuRSxJQWxCdkQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVWdJLEVBQW9CbkUsR0FFOUIsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNd0gsRUFqQlN2SCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTa2tCLElBQ1AsSUFBSXRGLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTTBtQixHQUV0QixJQUFLLElBQUloRixFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFeEZBLENBQ1QsQ0E2Q0EsT0F0Rm9CaEIsRUEyQ1BzRyxFQTNDb0JqRyxFQTJDQSxDQUFDLENBQ2hDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0wsSUFBSyxLQUNMLElBQUssTUFDSCxPQUFPaUYsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2pDN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2hDN1QsTUFBTyxTQUNQWSxRQUFTLGVBR2IsSUFBSyxRQUNILE9BQU91RCxFQUFNcEMsVUFBVThSLEVBQVksQ0FDakM3VCxNQUFPLFNBQ1BZLFFBQVMsZUFJYixRQUNFLE9BQU91RCxFQUFNcEMsVUFBVThSLEVBQVksQ0FDakM3VCxNQUFPLE9BQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVThSLEVBQVksQ0FDaEM3VCxNQUFPLGNBQ1BZLFFBQVMsZ0JBQ0x1RCxFQUFNcEMsVUFBVThSLEVBQVksQ0FDaEM3VCxNQUFPLFNBQ1BZLFFBQVMsZUFHakIsR0FDQyxDQUNEbkksSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUVoQyxPQURBaE4sRUFBS00sWUFBWW9aLEdBQXFCMU0sR0FBUSxFQUFHLEVBQUcsR0FDN0NoTixDQUNULElBbkY4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FzRjlHaUcsQ0FDVCxDQW5FNkMsQ0FtRTNDMUUsSUM3RkYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS3pNLElBQUk0akIsR0FBK0IsU0FBVXBFLElBbkJwRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBb0I5WCxDQUFVaUksRUFBaUJwRSxHQUUzQixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk15SCxFQWxCU3hILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVNta0IsSUFDUCxJQUFJdkYsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNMm1CLEdBRXRCLElBQUssSUFBSWpGLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLE1BRTlFQSxDQUNULENBNkNBLE9BdkZvQmhCLEVBNENQdUcsRUE1Q29CbEcsRUE0Q0gsQ0FBQyxDQUM3QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNMLElBQUssS0FDTCxJQUFLLE1BQ0gsT0FBT2lGLEVBQU1wQyxVQUFVOFIsRUFBWSxDQUNqQzdULE1BQU8sY0FDUFksUUFBUyxnQkFDTHVELEVBQU1wQyxVQUFVOFIsRUFBWSxDQUNoQzdULE1BQU8sU0FDUFksUUFBUyxlQUdiLElBQUssUUFDSCxPQUFPdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2pDN1QsTUFBTyxTQUNQWSxRQUFTLGVBSWIsUUFDRSxPQUFPdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2pDN1QsTUFBTyxPQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2hDN1QsTUFBTyxjQUNQWSxRQUFTLGdCQUNMdUQsRUFBTXBDLFVBQVU4UixFQUFZLENBQ2hDN1QsTUFBTyxTQUNQWSxRQUFTLGVBR2pCLEdBQ0MsQ0FDRG5JLElBQUssTUFDTDJRLE1BQU8sU0FBYWhOLEVBQU11YSxFQUFRdk4sR0FFaEMsT0FEQWhOLEVBQUtNLFlBQVlvWixHQUFxQjFNLEdBQVEsRUFBRyxFQUFHLEdBQzdDaE4sQ0FDVCxJQXBGOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBdUY5R2tHLENBQ1QsQ0FuRTBDLENBbUV4QzNFLElDOUZGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJNmpCLEdBQStCLFNBQVVyRSxJQW5CcEQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVWtJLEVBQWlCckUsR0FFM0IsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNMEgsRUFsQlN6SCxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTb2tCLElBQ1AsSUFBSXhGLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTTRtQixHQUV0QixJQUFLLElBQUlsRixFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRW5GQSxDQUNULENBd0NBLE9BbEZvQmhCLEVBNENQd0csRUE1Q29CbkcsRUE0Q0gsQ0FBQyxDQUM3QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU9zVyxHQUFvQnBCLEdBQWdCSSxRQUFTWCxHQUV0RCxJQUFLLEtBQ0gsT0FBTzFQLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUNyQzFULEtBQU0sU0FHVixRQUNFLE9BQU93VixHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FFeEMsR0FDQyxDQUNEcGIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUNoQyxJQUFJcVAsRUFBT3JjLEVBQUtrRCxlQUFpQixHQVVqQyxPQVJJbVosR0FBUXJQLEVBQVEsR0FDbEJoTixFQUFLTSxZQUFZME0sRUFBUSxHQUFJLEVBQUcsRUFBRyxHQUN6QnFQLEdBQWtCLEtBQVZyUCxFQUdsQmhOLEVBQUtNLFlBQVkwTSxFQUFPLEVBQUcsRUFBRyxHQUY5QmhOLEVBQUtNLFlBQVksRUFBRyxFQUFHLEVBQUcsR0FLckJOLENBQ1QsSUEvRThEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQWtGOUdtRyxDQUNULENBOUQwQyxDQThEeEM1RSxJQ3pGRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSStqQixHQUErQixTQUFVdkUsSUFuQnBELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVVvSSxFQUFpQnZFLEdBRTNCLElBeEJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQWtCL0I2QixHQWxCZ0I5QixFQWtCTTRILEVBbEJTM0gsRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQW9CbmEsU0FBU3NrQixJQUNQLElBQUkxRixHQS9CUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBaUNwSixDQUFnQjFJLEtBQU04bUIsR0FFdEIsSUFBSyxJQUFJcEYsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLElBQUssTUFFN0ZBLENBQ1QsQ0ErQkEsT0F6RW9CaEIsRUE0Q1AwRyxFQTVDb0JyRyxFQTRDSCxDQUFDLENBQzdCNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3NXLEdBQW9CcEIsR0FBZ0JDLFFBQVNSLEdBRXRELElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxTQUdWLFFBQ0UsT0FBT3dWLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUV4QyxHQUNDLENBQ0RwYixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBRWhDLE9BREFoTixFQUFLTSxZQUFZME0sRUFBTyxFQUFHLEVBQUcsR0FDdkJoTixDQUNULElBdEU4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0F5RTlHcUcsQ0FDVCxDQXJEMEMsQ0FxRHhDOUUsSUNoRkYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS3pNLElBQUlna0IsR0FBK0IsU0FBVXhFLElBbkJwRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBb0I5WCxDQUFVcUksRUFBaUJ4RSxHQUUzQixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk02SCxFQWxCUzVILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVN1a0IsSUFDUCxJQUFJM0YsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNK21CLEdBRXRCLElBQUssSUFBSXJGLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssTUFFbkZBLENBQ1QsQ0FzQ0EsT0FoRm9CaEIsRUE0Q1AyRyxFQTVDb0J0RyxFQTRDSCxDQUFDLENBQzdCNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3NXLEdBQW9CcEIsR0FBZ0JHLFFBQVNWLEdBRXRELElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxTQUdWLFFBQ0UsT0FBT3dWLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUV4QyxHQUNDLENBQ0RwYixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBU2hDLE9BUldoTixFQUFLa0QsZUFBaUIsSUFFckI4SixFQUFRLEdBQ2xCaE4sRUFBS00sWUFBWTBNLEVBQVEsR0FBSSxFQUFHLEVBQUcsR0FFbkNoTixFQUFLTSxZQUFZME0sRUFBTyxFQUFHLEVBQUcsR0FHekJoTixDQUNULElBN0U4RGlXLEdBQVksR0FBa0JMLEVBQVk3WSxVQUFXa1osR0FnRjlHc0csQ0FDVCxDQTVEMEMsQ0E0RHhDL0UsSUN2RkYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBS3pNLElBQUlpa0IsR0FBK0IsU0FBVXpFLElBbkJwRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBb0I5WCxDQUFVc0ksRUFBaUJ6RSxHQUUzQixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk04SCxFQWxCUzdILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVN3a0IsSUFDUCxJQUFJNUYsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNZ25CLEdBRXRCLElBQUssSUFBSXRGLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssSUFBSyxJQUFLLElBQUssSUFBSyxJQUFLLE1BRTdGQSxDQUNULENBZ0NBLE9BMUVvQmhCLEVBNENQNEcsRUE1Q29CdkcsRUE0Q0gsQ0FBQyxDQUM3QjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU9zVyxHQUFvQnBCLEdBQWdCRSxRQUFTVCxHQUV0RCxJQUFLLEtBQ0gsT0FBTzFQLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUNyQzFULEtBQU0sU0FHVixRQUNFLE9BQU93VixHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FFeEMsR0FDQyxDQUNEcGIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUNoQyxJQUFJbkgsRUFBUW1ILEdBQVMsR0FBS0EsRUFBUSxHQUFLQSxFQUV2QyxPQURBaE4sRUFBS00sWUFBWXVGLEVBQU8sRUFBRyxFQUFHLEdBQ3ZCN0YsQ0FDVCxJQXZFOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBMEU5R3VHLENBQ1QsQ0F0RDBDLENBc0R4Q2hGLElDakZGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUt6TSxJQUFJa2tCLEdBQTRCLFNBQVUxRSxJQW5CakQsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW9COVgsQ0FBVXVJLEVBQWMxRSxHQUV4QixJQXhCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFrQi9CNkIsR0FsQmdCOUIsRUFrQk0rSCxFQWxCUzlILEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FvQm5hLFNBQVN5a0IsSUFDUCxJQUFJN0YsR0EvQlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWlDcEosQ0FBZ0IxSSxLQUFNaW5CLEdBRXRCLElBQUssSUFBSXZGLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixDQUFDLElBQUssTUFFcEVBLENBQ1QsQ0ErQkEsT0F6RW9CaEIsRUE0Q1A2RyxFQTVDb0J4RyxFQTRDTixDQUFDLENBQzFCNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEVBQU9pRixHQUN2QyxPQUFRakYsR0FDTixJQUFLLElBQ0gsT0FBT3NXLEdBQW9CcEIsR0FBZ0JLLE9BQVFaLEdBRXJELElBQUssS0FDSCxPQUFPMVAsRUFBTWpFLGNBQWMyVCxFQUFZLENBQ3JDMVQsS0FBTSxXQUdWLFFBQ0UsT0FBT3dWLEdBQWF6VyxFQUFNaE4sT0FBUTJoQixHQUV4QyxHQUNDLENBQ0RwYixJQUFLLFdBQ0wyUSxNQUFPLFNBQWtCdUIsRUFBT3ZCLEdBQzlCLE9BQU9BLEdBQVMsR0FBS0EsR0FBUyxFQUNoQyxHQUNDLENBQ0QzUSxJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNdWEsRUFBUXZOLEdBRWhDLE9BREFoTixFQUFLMGMsY0FBYzFQLEVBQU8sRUFBRyxHQUN0QmhOLENBQ1QsSUF0RThEaVcsR0FBWSxHQUFrQkwsRUFBWTdZLFVBQVdrWixHQXlFOUd3RyxDQUNULENBckR1QyxDQXFEckNqRixJQ2hGRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FLek0sSUFBSW9rQixHQUE0QixTQUFVNUUsSUFuQmpELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FvQjlYLENBQVV5SSxFQUFjNUUsR0FFeEIsSUF4Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBa0IvQjZCLEdBbEJnQjlCLEVBa0JNaUksRUFsQlNoSSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBb0JuYSxTQUFTMmtCLElBQ1AsSUFBSS9GLEdBL0JSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FpQ3BKLENBQWdCMUksS0FBTW1uQixHQUV0QixJQUFLLElBQUl6RixFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLE1BRXBFQSxDQUNULENBK0JBLE9BekVvQmhCLEVBNENQK0csRUE1Q29CMUcsRUE0Q04sQ0FBQyxDQUMxQjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxFQUFPaUYsR0FDdkMsT0FBUWpGLEdBQ04sSUFBSyxJQUNILE9BQU9zVyxHQUFvQnBCLEdBQWdCTSxPQUFRYixHQUVyRCxJQUFLLEtBQ0gsT0FBTzFQLEVBQU1qRSxjQUFjMlQsRUFBWSxDQUNyQzFULEtBQU0sV0FHVixRQUNFLE9BQU93VixHQUFhelcsRUFBTWhOLE9BQVEyaEIsR0FFeEMsR0FDQyxDQUNEcGIsSUFBSyxXQUNMMlEsTUFBTyxTQUFrQnVCLEVBQU92QixHQUM5QixPQUFPQSxHQUFTLEdBQUtBLEdBQVMsRUFDaEMsR0FDQyxDQUNEM1EsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUVoQyxPQURBaE4sRUFBSzRjLGNBQWM1UCxFQUFPLEdBQ25CaE4sQ0FDVCxJQXRFOERpVyxHQUFZLEdBQWtCTCxFQUFZN1ksVUFBV2taLEdBeUU5RzBHLENBQ1QsQ0FyRHVDLENBcURyQ25GLElDaEZGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJc2tCLEdBQXNDLFNBQVU5RSxJQWxCM0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVTJJLEVBQXdCOUUsR0FFbEMsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNbUksRUFqQlNsSSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTNmtCLElBQ1AsSUFBSWpHLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTXFuQixHQUV0QixJQUFLLElBQUkzRixFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLE1BRXBFQSxDQUNULENBbUJBLE9BNURvQmhCLEVBMkNQaUgsR0EzQ29CNUcsRUEyQ0ksQ0FBQyxDQUNwQzVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxHQUtoQyxPQUFPbVcsR0FBU00sR0FBYXpXLEVBQU1oTixPQUFRMmhCLElBSnZCLFNBQXVCekssR0FDekMsT0FBTzFOLEtBQUtFLE1BQU13TixFQUFRMU4sS0FBS2tFLElBQUksR0FBb0IsRUFBZlYsRUFBTWhOLFFBQ2hELEdBR0YsR0FDQyxDQUNEdUcsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTXVhLEVBQVF2TixHQUVoQyxPQURBaE4sRUFBSzhjLG1CQUFtQjlQLEdBQ2pCaE4sQ0FDVCxNQXpEMEUsR0FBa0I0VixFQUFZN1ksVUFBV2taLEdBNEQ5RzRHLENBQ1QsQ0F6Q2lELENBeUMvQ3JGLElDbkVGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQU16TSxJQUFJd2tCLEdBQXNDLFNBQVVoRixJQXBCM0QsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQXFCOVgsQ0FBVTZJLEVBQXdCaEYsR0FFbEMsSUF6Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBbUIvQjZCLEdBbkJnQjlCLEVBbUJNcUksRUFuQlNwSSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBcUJuYSxTQUFTK2tCLElBQ1AsSUFBSW5HLEdBaENSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FrQ3BKLENBQWdCMUksS0FBTXVuQixHQUV0QixJQUFLLElBQUk3RixFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsQ0FBQyxJQUFLLElBQUssTUFFekVBLENBQ1QsQ0FrQ0EsT0E3RW9CaEIsRUE2Q1BtSCxHQTdDb0I5RyxFQTZDSSxDQUFDLENBQ3BDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssRUFBWTNVLEdBQ2hDLE9BQVFBLEdBQ04sSUFBSyxJQUNILE9BQU91VyxHQUFxQkwsR0FBdUN2QixHQUVyRSxJQUFLLEtBQ0gsT0FBTzRCLEdBQXFCTCxHQUF3QnZCLEdBRXRELElBQUssT0FDSCxPQUFPNEIsR0FBcUJMLEdBQXVDdkIsR0FFckUsSUFBSyxRQUNILE9BQU80QixHQUFxQkwsR0FBMEN2QixHQUd4RSxRQUNFLE9BQU80QixHQUFxQkwsR0FBMkJ2QixHQUU3RCxHQUNDLENBQ0RwYixJQUFLLE1BQ0wyUSxNQUFPLFNBQWFoTixFQUFNNlcsRUFBTzdKLEdBQy9CLE9BQUk2SixFQUFNTyxlQUNEcFgsRUFHRixJQUFJckIsS0FBS3FCLEVBQUtwQixVQUFZb08sRUFDbkMsTUExRTBFLEdBQWtCNEksRUFBWTdZLFVBQVdrWixHQTZFOUc4RyxDQUNULENBeERpRCxDQXdEL0N2RixJQ3BGRixTQUFTLEdBQVFqZixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUl6WCxTQUFTLEdBQWtCc0IsRUFBUWljLEdBQVMsSUFBSyxJQUFJOWYsRUFBSSxFQUFHQSxFQUFJOGYsRUFBTWhnQixPQUFRRSxJQUFLLENBQUUsSUFBSStmLEVBQWFELEVBQU05ZixHQUFJK2YsRUFBV3RaLFdBQWFzWixFQUFXdFosYUFBYyxFQUFPc1osRUFBVzFCLGNBQWUsRUFBVSxVQUFXMEIsSUFBWUEsRUFBVzNCLFVBQVcsR0FBTTdYLE9BQU9DLGVBQWUzQyxFQUFRa2MsRUFBVzFaLElBQUswWixFQUFhLENBQUUsQ0FNNVQsU0FBUyxHQUFnQnpaLEVBQUdtQixHQUErRyxPQUExRyxHQUFrQmxCLE9BQU9nWSxnQkFBa0IsU0FBeUJqWSxFQUFHbUIsR0FBc0IsT0FBakJuQixFQUFFa1ksVUFBWS9XLEVBQVVuQixDQUFHLEVBQVUsR0FBZ0JBLEVBQUdtQixFQUFJLENBTXpLLFNBQVMsR0FBdUJHLEdBQVEsUUFBYSxJQUFUQSxFQUFtQixNQUFNLElBQUk0WCxlQUFlLDZEQUFnRSxPQUFPNVgsQ0FBTSxDQUlySyxTQUFTLEdBQWdCdEIsR0FBd0osT0FBbkosR0FBa0JDLE9BQU9nWSxlQUFpQmhZLE9BQU9rWixlQUFpQixTQUF5Qm5aLEdBQUssT0FBT0EsRUFBRWtZLFdBQWFqWSxPQUFPa1osZUFBZW5aLEVBQUksRUFBVSxHQUFnQkEsRUFBSSxDQUU1TSxTQUFTLEdBQWdCL0QsRUFBSzhELEVBQUsyUSxHQUFpSyxPQUFwSjNRLEtBQU85RCxFQUFPZ0UsT0FBT0MsZUFBZWpFLEVBQUs4RCxFQUFLLENBQUUyUSxNQUFPQSxFQUFPdlEsWUFBWSxFQUFNNFgsY0FBYyxFQUFNRCxVQUFVLElBQWtCN2IsRUFBSThELEdBQU8yUSxFQUFnQnpVLENBQUssQ0FNek0sSUFBSXlrQixHQUFpQyxTQUFVakYsSUFwQnRELFNBQW1COUQsRUFBVUMsR0FBYyxHQUEwQixtQkFBZkEsR0FBNEMsT0FBZkEsRUFBdUIsTUFBTSxJQUFJaFcsVUFBVSxzREFBeUQrVixFQUFTbFgsVUFBWVIsT0FBTzRYLE9BQU9ELEdBQWNBLEVBQVduWCxVQUFXLENBQUV1QixZQUFhLENBQUUwTyxNQUFPaUgsRUFBVUcsVUFBVSxFQUFNQyxjQUFjLEtBQWVILEdBQVksR0FBZ0JELEVBQVVDLEVBQWEsQ0FxQjlYLENBQVU4SSxFQUFtQmpGLEdBRTdCLElBekJvQm5DLEVBQWFLLEVBTWJ2QixFQUFlQyxFQW1CL0I2QixHQW5CZ0I5QixFQW1CTXNJLEVBbkJTckksRUFNckMsV0FBdUMsR0FBdUIsb0JBQVpDLFVBQTRCQSxRQUFRQyxVQUFXLE9BQU8sRUFBTyxHQUFJRCxRQUFRQyxVQUFVQyxLQUFNLE9BQU8sRUFBTyxHQUFxQixtQkFBVkMsTUFBc0IsT0FBTyxFQUFNLElBQXNGLE9BQWhGQyxRQUFRalksVUFBVWtZLFFBQVFoWSxLQUFLMlgsUUFBUUMsVUFBVUcsUUFBUyxJQUFJLFdBQWEsTUFBWSxDQUFNLENBQUUsTUFBTzNhLEdBQUssT0FBTyxDQUFPLENBQUUsQ0FOdlEsR0FBb0MsV0FBa0MsSUFBc0NyQyxFQUFsQ21kLEVBQVEsR0FBZ0JULEdBQWtCLEdBQUlDLEVBQTJCLENBQUUsSUFBSVUsRUFBWSxHQUFnQjdmLE1BQU04SSxZQUFhdEcsRUFBUzRjLFFBQVFDLFVBQVVNLEVBQU8xVyxVQUFXNFcsRUFBWSxNQUFTcmQsRUFBU21kLEVBQU1qYSxNQUFNMUYsS0FBTWlKLFdBQWMsT0FFcFgsU0FBb0NiLEVBQU1YLEdBQVEsT0FBSUEsR0FBMkIsV0FBbEIsR0FBUUEsSUFBc0MsbUJBQVRBLEVBQThDLEdBQXVCVyxHQUF0Q1gsQ0FBNkMsQ0FGMk0sQ0FBMkJ6SCxLQUFNd0MsRUFBUyxHQXFCbmEsU0FBU2dsQixJQUNQLElBQUlwRyxHQWhDUixTQUF5QmpCLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSTFYLFVBQVUsb0NBQXdDLENBa0NwSixDQUFnQjFJLEtBQU13bkIsR0FFdEIsSUFBSyxJQUFJOUYsRUFBT3pZLFVBQVUzSSxPQUFRbUksRUFBTyxJQUFJbVAsTUFBTThKLEdBQU9DLEVBQU8sRUFBR0EsRUFBT0QsRUFBTUMsSUFDL0VsWixFQUFLa1osR0FBUTFZLFVBQVUwWSxHQVN6QixPQUpBLEdBQWdCLEdBRmhCUCxFQUFRSixFQUFPdlosS0FBSy9CLE1BQU1zYixFQUFRLENBQUNoaEIsTUFBTUssT0FBT29JLEtBRUQsV0FBWSxJQUUzRCxHQUFnQixHQUF1QjJZLEdBQVEscUJBQXNCLENBQUMsSUFBSyxJQUFLLE1BRXpFQSxDQUNULENBa0NBLE9BN0VvQmhCLEVBNkNQb0gsR0E3Q29CL0csRUE2Q0QsQ0FBQyxDQUMvQjVaLElBQUssUUFDTDJRLE1BQU8sU0FBZXlLLEVBQVkzVSxHQUNoQyxPQUFRQSxHQUNOLElBQUssSUFDSCxPQUFPdVcsR0FBcUJMLEdBQXVDdkIsR0FFckUsSUFBSyxLQUNILE9BQU80QixHQUFxQkwsR0FBd0J2QixHQUV0RCxJQUFLLE9BQ0gsT0FBTzRCLEdBQXFCTCxHQUF1Q3ZCLEdBRXJFLElBQUssUUFDSCxPQUFPNEIsR0FBcUJMLEdBQTBDdkIsR0FHeEUsUUFDRSxPQUFPNEIsR0FBcUJMLEdBQTJCdkIsR0FFN0QsR0FDQyxDQUNEcGIsSUFBSyxNQUNMMlEsTUFBTyxTQUFhaE4sRUFBTTZXLEVBQU83SixHQUMvQixPQUFJNkosRUFBTU8sZUFDRHBYLEVBR0YsSUFBSXJCLEtBQUtxQixFQUFLcEIsVUFBWW9PLEVBQ25DLE1BMUUwRSxHQUFrQjRJLEVBQVk3WSxVQUFXa1osR0E2RTlHK0csQ0FDVCxDQXhENEMsQ0F3RDFDeEYsSUNwRkYsU0FBUyxHQUFRamYsR0FBbVYsT0FBdE8sR0FBckQsbUJBQVg2RixRQUFvRCxpQkFBcEJBLE9BQU9DLFNBQW1DLFNBQWlCOUYsR0FBTyxjQUFjQSxDQUFLLEVBQXNCLFNBQWlCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYNkYsUUFBeUI3RixFQUFJK0YsY0FBZ0JGLFFBQVU3RixJQUFRNkYsT0FBT3JCLFVBQVksZ0JBQWtCeEUsQ0FBSyxFQUFZLEdBQVFBLEVBQU0sQ0FJelgsU0FBUyxHQUFrQnNCLEVBQVFpYyxHQUFTLElBQUssSUFBSTlmLEVBQUksRUFBR0EsRUFBSThmLEVBQU1oZ0IsT0FBUUUsSUFBSyxDQUFFLElBQUkrZixFQUFhRCxFQUFNOWYsR0FBSStmLEVBQVd0WixXQUFhc1osRUFBV3RaLGFBQWMsRUFBT3NaLEVBQVcxQixjQUFlLEVBQVUsVUFBVzBCLElBQVlBLEVBQVczQixVQUFXLEdBQU03WCxPQUFPQyxlQUFlM0MsRUFBUWtjLEVBQVcxWixJQUFLMFosRUFBYSxDQUFFLENBTTVULFNBQVMsR0FBZ0J6WixFQUFHbUIsR0FBK0csT0FBMUcsR0FBa0JsQixPQUFPZ1ksZ0JBQWtCLFNBQXlCalksRUFBR21CLEdBQXNCLE9BQWpCbkIsRUFBRWtZLFVBQVkvVyxFQUFVbkIsQ0FBRyxFQUFVLEdBQWdCQSxFQUFHbUIsRUFBSSxDQU16SyxTQUFTLEdBQXVCRyxHQUFRLFFBQWEsSUFBVEEsRUFBbUIsTUFBTSxJQUFJNFgsZUFBZSw2REFBZ0UsT0FBTzVYLENBQU0sQ0FJckssU0FBUyxHQUFnQnRCLEdBQXdKLE9BQW5KLEdBQWtCQyxPQUFPZ1ksZUFBaUJoWSxPQUFPa1osZUFBaUIsU0FBeUJuWixHQUFLLE9BQU9BLEVBQUVrWSxXQUFhalksT0FBT2taLGVBQWVuWixFQUFJLEVBQVUsR0FBZ0JBLEVBQUksQ0FFNU0sU0FBUyxHQUFnQi9ELEVBQUs4RCxFQUFLMlEsR0FBaUssT0FBcEozUSxLQUFPOUQsRUFBT2dFLE9BQU9DLGVBQWVqRSxFQUFLOEQsRUFBSyxDQUFFMlEsTUFBT0EsRUFBT3ZRLFlBQVksRUFBTTRYLGNBQWMsRUFBTUQsVUFBVSxJQUFrQjdiLEVBQUk4RCxHQUFPMlEsRUFBZ0J6VSxDQUFLLENBSXpNLElBQUkwa0IsR0FBc0MsU0FBVWxGLElBbEIzRCxTQUFtQjlELEVBQVVDLEdBQWMsR0FBMEIsbUJBQWZBLEdBQTRDLE9BQWZBLEVBQXVCLE1BQU0sSUFBSWhXLFVBQVUsc0RBQXlEK1YsRUFBU2xYLFVBQVlSLE9BQU80WCxPQUFPRCxHQUFjQSxFQUFXblgsVUFBVyxDQUFFdUIsWUFBYSxDQUFFME8sTUFBT2lILEVBQVVHLFVBQVUsRUFBTUMsY0FBYyxLQUFlSCxHQUFZLEdBQWdCRCxFQUFVQyxFQUFhLENBbUI5WCxDQUFVK0ksRUFBd0JsRixHQUVsQyxJQXZCb0JuQyxFQUFhSyxFQU1idkIsRUFBZUMsRUFpQi9CNkIsR0FqQmdCOUIsRUFpQk11SSxFQWpCU3RJLEVBTXJDLFdBQXVDLEdBQXVCLG9CQUFaQyxVQUE0QkEsUUFBUUMsVUFBVyxPQUFPLEVBQU8sR0FBSUQsUUFBUUMsVUFBVUMsS0FBTSxPQUFPLEVBQU8sR0FBcUIsbUJBQVZDLE1BQXNCLE9BQU8sRUFBTSxJQUFzRixPQUFoRkMsUUFBUWpZLFVBQVVrWSxRQUFRaFksS0FBSzJYLFFBQVFDLFVBQVVHLFFBQVMsSUFBSSxXQUFhLE1BQVksQ0FBTSxDQUFFLE1BQU8zYSxHQUFLLE9BQU8sQ0FBTyxDQUFFLENBTnZRLEdBQW9DLFdBQWtDLElBQXNDckMsRUFBbENtZCxFQUFRLEdBQWdCVCxHQUFrQixHQUFJQyxFQUEyQixDQUFFLElBQUlVLEVBQVksR0FBZ0I3ZixNQUFNOEksWUFBYXRHLEVBQVM0YyxRQUFRQyxVQUFVTSxFQUFPMVcsVUFBVzRXLEVBQVksTUFBU3JkLEVBQVNtZCxFQUFNamEsTUFBTTFGLEtBQU1pSixXQUFjLE9BRXBYLFNBQW9DYixFQUFNWCxHQUFRLE9BQUlBLEdBQTJCLFdBQWxCLEdBQVFBLElBQXNDLG1CQUFUQSxFQUE4QyxHQUF1QlcsR0FBdENYLENBQTZDLENBRjJNLENBQTJCekgsS0FBTXdDLEVBQVMsR0FtQm5hLFNBQVNpbEIsSUFDUCxJQUFJckcsR0E5QlIsU0FBeUJqQixFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUkxWCxVQUFVLG9DQUF3QyxDQWdDcEosQ0FBZ0IxSSxLQUFNeW5CLEdBRXRCLElBQUssSUFBSS9GLEVBQU96WSxVQUFVM0ksT0FBUW1JLEVBQU8sSUFBSW1QLE1BQU04SixHQUFPQyxFQUFPLEVBQUdBLEVBQU9ELEVBQU1DLElBQy9FbFosRUFBS2taLEdBQVExWSxVQUFVMFksR0FTekIsT0FKQSxHQUFnQixHQUZoQlAsRUFBUUosRUFBT3ZaLEtBQUsvQixNQUFNc2IsRUFBUSxDQUFDaGhCLE1BQU1LLE9BQU9vSSxLQUVELFdBQVksSUFFM0QsR0FBZ0IsR0FBdUIyWSxHQUFRLHFCQUFzQixLQUU5REEsQ0FDVCxDQWdCQSxPQXpEb0JoQixFQTJDUHFILEdBM0NvQmhILEVBMkNJLENBQUMsQ0FDcEM1WixJQUFLLFFBQ0wyUSxNQUFPLFNBQWV5SyxHQUNwQixPQUFPNkIsR0FBcUI3QixFQUM5QixHQUNDLENBQ0RwYixJQUFLLE1BQ0wyUSxNQUFPLFNBQWF1QixFQUFPZ00sRUFBUXZOLEdBQ2pDLE1BQU8sQ0FBQyxJQUFJck8sS0FBYSxJQUFScU8sR0FBZSxDQUM5Qm9LLGdCQUFnQixHQUVwQixNQXREMEUsR0FBa0J4QixFQUFZN1ksVUFBV2taLEdBeUQ5R2dILENBQ1QsQ0F0Q2lELENBc0MvQ3pGLElDaEVGLFNBQVMsR0FBUWpmLEdBQW1WLE9BQXRPLEdBQXJELG1CQUFYNkYsUUFBb0QsaUJBQXBCQSxPQUFPQyxTQUFtQyxTQUFpQjlGLEdBQU8sY0FBY0EsQ0FBSyxFQUFzQixTQUFpQkEsR0FBTyxPQUFPQSxHQUF5QixtQkFBWDZGLFFBQXlCN0YsRUFBSStGLGNBQWdCRixRQUFVN0YsSUFBUTZGLE9BQU9yQixVQUFZLGdCQUFrQnhFLENBQUssRUFBWSxHQUFRQSxFQUFNLENBSXpYLFNBQVMsR0FBa0JzQixFQUFRaWMsR0FBUyxJQUFLLElBQUk5ZixFQUFJLEVBQUdBLEVBQUk4ZixFQUFNaGdCLE9BQVFFLElBQUssQ0FBRSxJQUFJK2YsRUFBYUQsRUFBTTlmLEdBQUkrZixFQUFXdFosV0FBYXNaLEVBQVd0WixhQUFjLEVBQU9zWixFQUFXMUIsY0FBZSxFQUFVLFVBQVcwQixJQUFZQSxFQUFXM0IsVUFBVyxHQUFNN1gsT0FBT0MsZUFBZTNDLEVBQVFrYyxFQUFXMVosSUFBSzBaLEVBQWEsQ0FBRSxDQU01VCxTQUFTLEdBQWdCelosRUFBR21CLEdBQStHLE9BQTFHLEdBQWtCbEIsT0FBT2dZLGdCQUFrQixTQUF5QmpZLEVBQUdtQixHQUFzQixPQUFqQm5CLEVBQUVrWSxVQUFZL1csRUFBVW5CLENBQUcsRUFBVSxHQUFnQkEsRUFBR21CLEVBQUksQ0FNekssU0FBUyxHQUF1QkcsR0FBUSxRQUFhLElBQVRBLEVBQW1CLE1BQU0sSUFBSTRYLGVBQWUsNkRBQWdFLE9BQU81WCxDQUFNLENBSXJLLFNBQVMsR0FBZ0J0QixHQUF3SixPQUFuSixHQUFrQkMsT0FBT2dZLGVBQWlCaFksT0FBT2taLGVBQWlCLFNBQXlCblosR0FBSyxPQUFPQSxFQUFFa1ksV0FBYWpZLE9BQU9rWixlQUFlblosRUFBSSxFQUFVLEdBQWdCQSxFQUFJLENBRTVNLFNBQVMsR0FBZ0IvRCxFQUFLOEQsRUFBSzJRLEdBQWlLLE9BQXBKM1EsS0FBTzlELEVBQU9nRSxPQUFPQyxlQUFlakUsRUFBSzhELEVBQUssQ0FBRTJRLE1BQU9BLEVBQU92USxZQUFZLEVBQU00WCxjQUFjLEVBQU1ELFVBQVUsSUFBa0I3YixFQUFJOEQsR0FBTzJRLEVBQWdCelUsQ0FBSyxDQUl6TSxJQUFJMmtCLEdBQTJDLFNBQVVuRixJQWxCaEUsU0FBbUI5RCxFQUFVQyxHQUFjLEdBQTBCLG1CQUFmQSxHQUE0QyxPQUFmQSxFQUF1QixNQUFNLElBQUloVyxVQUFVLHNEQUF5RCtWLEVBQVNsWCxVQUFZUixPQUFPNFgsT0FBT0QsR0FBY0EsRUFBV25YLFVBQVcsQ0FBRXVCLFlBQWEsQ0FBRTBPLE1BQU9pSCxFQUFVRyxVQUFVLEVBQU1DLGNBQWMsS0FBZUgsR0FBWSxHQUFnQkQsRUFBVUMsRUFBYSxDQW1COVgsQ0FBVWdKLEVBQTZCbkYsR0FFdkMsSUF2Qm9CbkMsRUFBYUssRUFNYnZCLEVBQWVDLEVBaUIvQjZCLEdBakJnQjlCLEVBaUJNd0ksRUFqQlN2SSxFQU1yQyxXQUF1QyxHQUF1QixvQkFBWkMsVUFBNEJBLFFBQVFDLFVBQVcsT0FBTyxFQUFPLEdBQUlELFFBQVFDLFVBQVVDLEtBQU0sT0FBTyxFQUFPLEdBQXFCLG1CQUFWQyxNQUFzQixPQUFPLEVBQU0sSUFBc0YsT0FBaEZDLFFBQVFqWSxVQUFVa1ksUUFBUWhZLEtBQUsyWCxRQUFRQyxVQUFVRyxRQUFTLElBQUksV0FBYSxNQUFZLENBQU0sQ0FBRSxNQUFPM2EsR0FBSyxPQUFPLENBQU8sQ0FBRSxDQU52USxHQUFvQyxXQUFrQyxJQUFzQ3JDLEVBQWxDbWQsRUFBUSxHQUFnQlQsR0FBa0IsR0FBSUMsRUFBMkIsQ0FBRSxJQUFJVSxFQUFZLEdBQWdCN2YsTUFBTThJLFlBQWF0RyxFQUFTNGMsUUFBUUMsVUFBVU0sRUFBTzFXLFVBQVc0VyxFQUFZLE1BQVNyZCxFQUFTbWQsRUFBTWphLE1BQU0xRixLQUFNaUosV0FBYyxPQUVwWCxTQUFvQ2IsRUFBTVgsR0FBUSxPQUFJQSxHQUEyQixXQUFsQixHQUFRQSxJQUFzQyxtQkFBVEEsRUFBOEMsR0FBdUJXLEdBQXRDWCxDQUE2QyxDQUYyTSxDQUEyQnpILEtBQU13QyxFQUFTLEdBbUJuYSxTQUFTa2xCLElBQ1AsSUFBSXRHLEdBOUJSLFNBQXlCakIsRUFBVUMsR0FBZSxLQUFNRCxhQUFvQkMsR0FBZ0IsTUFBTSxJQUFJMVgsVUFBVSxvQ0FBd0MsQ0FnQ3BKLENBQWdCMUksS0FBTTBuQixHQUV0QixJQUFLLElBQUloRyxFQUFPelksVUFBVTNJLE9BQVFtSSxFQUFPLElBQUltUCxNQUFNOEosR0FBT0MsRUFBTyxFQUFHQSxFQUFPRCxFQUFNQyxJQUMvRWxaLEVBQUtrWixHQUFRMVksVUFBVTBZLEdBU3pCLE9BSkEsR0FBZ0IsR0FGaEJQLEVBQVFKLEVBQU92WixLQUFLL0IsTUFBTXNiLEVBQVEsQ0FBQ2hoQixNQUFNSyxPQUFPb0ksS0FFRCxXQUFZLElBRTNELEdBQWdCLEdBQXVCMlksR0FBUSxxQkFBc0IsS0FFOURBLENBQ1QsQ0FnQkEsT0F6RG9CaEIsRUEyQ1BzSCxHQTNDb0JqSCxFQTJDUyxDQUFDLENBQ3pDNVosSUFBSyxRQUNMMlEsTUFBTyxTQUFleUssR0FDcEIsT0FBTzZCLEdBQXFCN0IsRUFDOUIsR0FDQyxDQUNEcGIsSUFBSyxNQUNMMlEsTUFBTyxTQUFhdUIsRUFBT2dNLEVBQVF2TixHQUNqQyxNQUFPLENBQUMsSUFBSXJPLEtBQUtxTyxHQUFRLENBQ3ZCb0ssZ0JBQWdCLEdBRXBCLE1BdEQwRSxHQUFrQnhCLEVBQVk3WSxVQUFXa1osR0F5RDlHaUgsQ0FDVCxDQXRDc0QsQ0FzQ3BEMUYsSUNXUzJGLEdBQVUsQ0FDbkIxWixFQUFHLElBQUlxVSxHQUNQalUsRUFBRyxJQUFJcVcsR0FDUGpXLEVBQUcsSUFBSW9XLEdBQ1BqVyxFQUFHLElBQUlrVyxHQUNQalcsRUFBRyxJQUFJb1csR0FDUG5XLEVBQUcsSUFBSW9XLEdBQ1BqVyxFQUFHLElBQUlrVyxHQUNQalcsRUFBRyxJQUFJa1csR0FDUGpXLEVBQUcsSUFBSWtXLEdBQ1BqVyxFQUFHLElBQUlrVyxHQUNQaFcsRUFBRyxJQUFJbVcsR0FDUC9lLEVBQUcsSUFBSW9mLEdBQ1B0VyxFQUFHLElBQUl3VyxHQUNQblcsRUFBRyxJQUFJc1csR0FDUHRoQixFQUFHLElBQUl1aEIsR0FDUHBXLEVBQUcsSUFBSXNXLEdBQ1A5bEIsRUFBRyxJQUFJK2xCLEdBQ1A1ZixFQUFHLElBQUk4ZixHQUNQdmUsRUFBRyxJQUFJd2UsR0FDUHBXLEVBQUcsSUFBSXFXLEdBQ1BwVyxFQUFHLElBQUlxVyxHQUNQcFcsRUFBRyxJQUFJc1csR0FDUHJXLEVBQUcsSUFBSXNXLEdBQ1AvbEIsRUFBRyxJQUFJZ21CLEdBQ1B6Z0IsRUFBRyxJQUFJMGdCLEdBQ1B2VyxFQUFHLElBQUl5VyxHQUNQeFcsRUFBRyxJQUFJMFcsR0FDUHpXLEVBQUcsSUFBSTJXLEdBQ1BwVyxFQUFHLElBQUlxVyxHQUNQalcsRUFBRyxJQUFJa1csR0FDUGhXLEVBQUcsSUFBSWlXLElDMUdULFNBQVMsR0FBUTNrQixHQUFtVixPQUF0TyxHQUFyRCxtQkFBWDZGLFFBQW9ELGlCQUFwQkEsT0FBT0MsU0FBbUMsU0FBaUI5RixHQUFPLGNBQWNBLENBQUssRUFBc0IsU0FBaUJBLEdBQU8sT0FBT0EsR0FBeUIsbUJBQVg2RixRQUF5QjdGLEVBQUkrRixjQUFnQkYsUUFBVTdGLElBQVE2RixPQUFPckIsVUFBWSxnQkFBa0J4RSxDQUFLLEVBQVksR0FBUUEsRUFBTSxDQUV6WCxTQUFTNmtCLEdBQTJCOWdCLEVBQUcrZ0IsR0FBa0IsSUFBSUMsRUFBSSxHQUFzQixvQkFBWGxmLFFBQWdELE1BQXRCOUIsRUFBRThCLE9BQU9DLFVBQW1CLENBQUUsR0FBSStPLE1BQU1DLFFBQVEvUSxLQUFPZ2hCLEVBRTdKLFNBQXFDaGhCLEVBQUdpaEIsR0FBVSxHQUFLamhCLEVBQUwsQ0FBZ0IsR0FBaUIsaUJBQU5BLEVBQWdCLE9BQU9raEIsR0FBa0JsaEIsRUFBR2loQixHQUFTLElBQUl2aEIsRUFBSU8sT0FBT1EsVUFBVXhILFNBQVMwSCxLQUFLWCxHQUFHdEYsTUFBTSxHQUFJLEdBQWlFLE1BQW5ELFdBQU5nRixHQUFrQk0sRUFBRWdDLGNBQWF0QyxFQUFJTSxFQUFFZ0MsWUFBWWtULE1BQWdCLFFBQU54VixHQUFxQixRQUFOQSxFQUFvQm9SLE1BQU1xUSxLQUFLbmhCLEdBQWMsY0FBTk4sR0FBcUIsMkNBQTJDakYsS0FBS2lGLEdBQVd3aEIsR0FBa0JsaEIsRUFBR2loQixRQUF6RyxDQUE3TyxDQUErVixDQUY3UEcsQ0FBNEJwaEIsS0FBTytnQixHQUFrQi9nQixHQUF5QixpQkFBYkEsRUFBRXhHLE9BQXFCLENBQU13bkIsSUFBSWhoQixFQUFJZ2hCLEdBQUksSUFBSXRuQixFQUFJLEVBQU8ybkIsRUFBSSxXQUFjLEVBQUcsTUFBTyxDQUFFelgsRUFBR3lYLEVBQUczaEIsRUFBRyxXQUFlLE9BQUloRyxHQUFLc0csRUFBRXhHLE9BQWUsQ0FBRThuQixNQUFNLEdBQWUsQ0FBRUEsTUFBTSxFQUFPNVEsTUFBTzFRLEVBQUV0RyxLQUFRLEVBQUdxRSxFQUFHLFNBQVd3akIsR0FBTSxNQUFNQSxDQUFJLEVBQUdDLEVBQUdILEVBQUssQ0FBRSxNQUFNLElBQUl6ZixVQUFVLHdJQUEwSSxDQUFFLElBQTZDNmYsRUFBekNDLEdBQW1CLEVBQU1DLEdBQVMsRUFBWSxNQUFPLENBQUUvWCxFQUFHLFdBQWVvWCxFQUFLaGhCLEVBQUU4QixPQUFPQyxXQUFhLEVBQUdyQyxFQUFHLFdBQWUsSUFBSWtpQixFQUFPWixFQUFHYSxPQUFzQyxPQUE5QkgsRUFBbUJFLEVBQUtOLEtBQWFNLENBQU0sRUFBRzdqQixFQUFHLFNBQVcrakIsR0FBT0gsR0FBUyxFQUFNRixFQUFNSyxDQUFLLEVBQUdOLEVBQUcsV0FBZSxJQUFXRSxHQUFpQyxNQUFiVixFQUFHZSxRQUFnQmYsRUFBR2UsUUFBVSxDQUFFLFFBQVUsR0FBSUosRUFBUSxNQUFNRixDQUFLLENBQUUsRUFBSyxDQUk5OUIsU0FBU1AsR0FBa0JjLEVBQUtDLElBQWtCLE1BQVBBLEdBQWVBLEVBQU1ELEVBQUl4b0IsVUFBUXlvQixFQUFNRCxFQUFJeG9CLFFBQVEsSUFBSyxJQUFJRSxFQUFJLEVBQUd3b0IsRUFBTyxJQUFJcFIsTUFBTW1SLEdBQU12b0IsRUFBSXVvQixFQUFLdm9CLElBQU93b0IsRUFBS3hvQixHQUFLc29CLEVBQUl0b0IsR0FBTSxPQUFPd29CLENBQU0sQ0F5QnRMLElBQUksR0FBeUIsd0RBR3pCLEdBQTZCLG9DQUM3QixHQUFzQixlQUN0QixHQUFvQixNQUNwQkMsR0FBc0IsS0FDdEIsR0FBZ0MsV0ErU3JCLFNBQVNoTyxHQUFNaU8sRUFBaUJDLEVBQW1CQyxFQUFvQmpvQixHQUNwRixJQUFJMkssRUFBTUksRUFBaUJILEVBQU9DLEVBQU91TixFQUFPN00sRUFBdUI4TSxFQUFrQkMsRUFBdUJyTixFQUF1QkMsRUFBd0JxTixFQUFPQyxFQUFPQyxFQUFPM04sRUFBdUI0TixFQUFrQkMsRUFBdUJDLEVBQXdCQyxFQUU1UXpSLEVBQWEsRUFBR1UsV0FDaEIsSUFBSWdaLEVBQWE3Z0IsT0FBTzhuQixHQUNwQkcsRUFBZWpvQixPQUFPK25CLEdBQ3RCeGQsRUFBaUJDLElBQ2pCVyxFQUE0TCxRQUFsTFQsRUFBZ0csUUFBeEZJLEVBQWtCL0ssYUFBeUMsRUFBU0EsRUFBUW9MLGNBQXdDLElBQXBCTCxFQUE2QkEsRUFBa0JQLEVBQWVZLGNBQTZCLElBQVRULEVBQWtCQSxFQUFPb08sRUFFak8sSUFBSzNOLEVBQU9nRyxNQUNWLE1BQU0sSUFBSS9GLFdBQVcsc0NBR3ZCLElBQUlHLEVBQXdCbEQsRUFBdTNCLFFBQTUyQnNDLEVBQTZqQixRQUFwakJDLEVBQXVlLFFBQTlkdU4sRUFBc0gsUUFBN0c3TSxFQUF3QnZMLGFBQXlDLEVBQVNBLEVBQVF3TCw2QkFBNkQsSUFBMUJELEVBQW1DQSxFQUF3QnZMLFNBQTBGLFFBQXZDcVksRUFBbUJyWSxFQUFRb0wsY0FBeUMsSUFBckJpTixHQUE4RixRQUF0REMsRUFBd0JELEVBQWlCclksZUFBK0MsSUFBMUJzWSxPQUEvSixFQUEyTUEsRUFBc0I5TSw2QkFBNkMsSUFBVjRNLEVBQW1CQSxFQUFRNU4sRUFBZWdCLDZCQUE2QyxJQUFWWCxFQUFtQkEsRUFBNEQsUUFBbkRJLEVBQXdCVCxFQUFlWSxjQUE4QyxJQUExQkgsR0FBeUcsUUFBNURDLEVBQXlCRCxFQUFzQmpMLGVBQWdELElBQTNCa0wsT0FBOUUsRUFBMkhBLEVBQXVCTSw2QkFBNkMsSUFBVlosRUFBbUJBLEVBQVEsR0FFdDdCLEtBQU1ZLEdBQXlCLEdBQUtBLEdBQXlCLEdBQzNELE1BQU0sSUFBSUgsV0FBVyw2REFHdkIsSUFBSUYsRUFBZTdDLEVBQXMxQixRQUEzMEJpUSxFQUFraUIsUUFBemhCQyxFQUFxZCxRQUE1Y0MsRUFBNkcsUUFBcEczTixFQUF3QjlLLGFBQXlDLEVBQVNBLEVBQVFtTCxvQkFBb0QsSUFBMUJMLEVBQW1DQSxFQUF3QjlLLFNBQTBGLFFBQXZDMFksRUFBbUIxWSxFQUFRb0wsY0FBeUMsSUFBckJzTixHQUE4RixRQUF0REMsRUFBd0JELEVBQWlCMVksZUFBK0MsSUFBMUIyWSxPQUEvSixFQUEyTUEsRUFBc0J4TixvQkFBb0MsSUFBVnNOLEVBQW1CQSxFQUFRak8sRUFBZVcsb0JBQW9DLElBQVZxTixFQUFtQkEsRUFBNkQsUUFBcERJLEVBQXlCcE8sRUFBZVksY0FBK0MsSUFBM0J3TixHQUEyRyxRQUE3REMsRUFBeUJELEVBQXVCNVksZUFBZ0QsSUFBM0I2WSxPQUEvRSxFQUE0SEEsRUFBdUIxTixvQkFBb0MsSUFBVm9OLEVBQW1CQSxFQUFRLEdBRTU0QixLQUFNcE4sR0FBZ0IsR0FBS0EsR0FBZ0IsR0FDekMsTUFBTSxJQUFJRSxXQUFXLG9EQUd2QixHQUFxQixLQUFqQjZjLEVBQ0YsTUFBbUIsS0FBZnBILEVBQ0tsWixFQUFPcWdCLEdBRVAsSUFBSWpnQixLQUFLSyxLQUlwQixJQW9CSThmLEVBcEJBQyxFQUFlLENBQ2pCNWMsc0JBQXVCQSxFQUN2QkwsYUFBY0EsRUFDZEMsT0FBUUEsR0FHTmlkLEVBQVUsQ0FBQyxJQUFJbEksSUFDZm1JLEVBQVNKLEVBQWE5VyxNQUFNLElBQTRCdFMsS0FBSSxTQUFVcWEsR0FDeEUsSUFBSUMsRUFBaUJELEVBQVUsR0FFL0IsT0FBSUMsS0FBa0IsR0FFYkMsRUFEYSxFQUFlRCxJQUNkRCxFQUFXL04sRUFBTzBGLFlBR2xDcUksQ0FDVCxJQUFHL1osS0FBSyxJQUFJZ1MsTUFBTSxJQUNkbVgsRUFBYSxHQUViQyxFQUFZL0IsR0FBMkI2QixHQUczQyxJQUNFLElBQUlHLEVBQVEsV0FDVixJQUFJdGMsRUFBUWdjLEVBQU05UixNQUVaclcsU0FBMENBLEVBQVF3Wiw4QkFBZ0NsSCxFQUF5Qm5HLElBQy9Hb0csRUFBb0JwRyxFQUFPK2IsRUFBY0gsR0FHckMvbkIsU0FBMENBLEVBQVF5WiwrQkFBaUNySCxFQUEwQmpHLElBQ2pIb0csRUFBb0JwRyxFQUFPK2IsRUFBY0gsR0FHM0MsSUFBSTNPLEVBQWlCak4sRUFBTSxHQUN2QnVjLEVBQVNsQyxHQUFRcE4sR0FFckIsR0FBSXNQLEVBQVEsQ0FDVixJQUFJQyxFQUFxQkQsRUFBT0MsbUJBRWhDLEdBQUlsUyxNQUFNQyxRQUFRaVMsR0FBcUIsQ0FDckMsSUFBSUMsRUFBb0JMLEVBQVdNLE1BQUssU0FBVUMsR0FDaEQsT0FBT0gsRUFBbUJJLFNBQVNELEVBQVUzYyxRQUFVMmMsRUFBVTNjLFFBQVVpTixDQUM3RSxJQUVBLEdBQUl3UCxFQUNGLE1BQU0sSUFBSXZkLFdBQVcsc0NBQXNDbk0sT0FBTzBwQixFQUFrQkksVUFBVyxXQUFXOXBCLE9BQU9pTixFQUFPLHNCQUU1SCxNQUFPLEdBQWtDLE1BQTlCdWMsRUFBT0Msb0JBQThCSixFQUFXcHBCLE9BQVMsRUFDbEUsTUFBTSxJQUFJa00sV0FBVyxzQ0FBc0NuTSxPQUFPaU4sRUFBTywyQ0FHM0VvYyxFQUFXanFCLEtBQUssQ0FDZDZOLE1BQU9pTixFQUNQNFAsVUFBVzdjLElBRWIsSUFBSWlMLEVBQWNzUixFQUFPTyxJQUFJbkksRUFBWTNVLEVBQU9mLEVBQU9nRyxNQUFPZ1gsR0FFOUQsSUFBS2hSLEVBQ0gsTUFBTyxDQUNMOFIsRUFBRyxJQUFJbGhCLEtBQUtLLE1BSWhCZ2dCLEVBQVEvcEIsS0FBSzhZLEVBQVkySixRQUN6QkQsRUFBYTFKLEVBQVlILElBQzNCLEtBQU8sQ0FDTCxHQUFJbUMsRUFBZWhJLE1BQU0sSUFDdkIsTUFBTSxJQUFJL0YsV0FBVyxpRUFBbUUrTixFQUFpQixLQVczRyxHQVBjLE9BQVZqTixFQUNGQSxFQUFRLElBQ29CLE1BQW5CaU4sSUFDVGpOLEVBQTJCQSxFQXFGdEJpRixNQUFNLElBQXFCLEdBQUc1USxRQUFRLEdBQW1CLE1BakY5QixJQUE5QnNnQixFQUFXek8sUUFBUWxHLEdBR3JCLE1BQU8sQ0FDTCtjLEVBQUcsSUFBSWxoQixLQUFLSyxNQUhkeVksRUFBYUEsRUFBV3pnQixNQUFNOEwsRUFBTWhOLE9BTXhDLENBQ0YsRUFFQSxJQUFLcXBCLEVBQVVqWixNQUFPNFksRUFBUUssRUFBVW5qQixLQUFLNGhCLE1BQU8sQ0FDbEQsSUFBSWtDLEVBQU9WLElBRVgsR0FBc0IsV0FBbEIsR0FBUVUsR0FBb0IsT0FBT0EsRUFBS0QsQ0FDOUMsQ0FFRixDQUFFLE1BQU85QixHQUNQb0IsRUFBVTlrQixFQUFFMGpCLEVBQ2QsQ0FBRSxRQUNBb0IsRUFBVXJCLEdBQ1osQ0FFQSxHQUFJckcsRUFBVzNoQixPQUFTLEdBQUsyb0IsR0FBb0IxbkIsS0FBSzBnQixHQUNwRCxPQUFPLElBQUk5WSxLQUFLSyxLQUdsQixJQUFJK2dCLEVBQXdCZixFQUFRdnBCLEtBQUksU0FBVWlpQixHQUNoRCxPQUFPQSxFQUFPckcsUUFDaEIsSUFBRzJPLE1BQUssU0FBVTdqQixFQUFHdUIsR0FDbkIsT0FBT0EsRUFBSXZCLENBQ2IsSUFBRzhqQixRQUFPLFNBQVU1TyxFQUFVL1gsRUFBT2dVLEdBQ25DLE9BQU9BLEVBQU10RSxRQUFRcUksS0FBYy9YLENBQ3JDLElBQUc3RCxLQUFJLFNBQVU0YixHQUNmLE9BQU8yTixFQUFRaUIsUUFBTyxTQUFVdkksR0FDOUIsT0FBT0EsRUFBT3JHLFdBQWFBLENBQzdCLElBQUcyTyxNQUFLLFNBQVU3akIsRUFBR3VCLEdBQ25CLE9BQU9BLEVBQUVpWixZQUFjeGEsRUFBRXdhLFdBQzNCLEdBQ0YsSUFBR2xoQixLQUFJLFNBQVV5cUIsR0FDZixPQUFPQSxFQUFZLEVBQ3JCLElBQ0lsZ0IsRUFBT3pCLEVBQU9xZ0IsR0FFbEIsR0FBSXZmLE1BQU1XLEVBQUtwQixXQUNiLE9BQU8sSUFBSUQsS0FBS0ssS0FJbEIsSUFJSW1oQixFQUpBL1gsRUFBVTNJLEVBQWdCTyxFQUFNbUksRUFBZ0NuSSxJQUNoRTZXLEVBQVEsQ0FBQyxFQUVUdUosRUFBYWhELEdBQTJCMkMsR0FHNUMsSUFDRSxJQUFLSyxFQUFXbGEsTUFBT2lhLEVBQVNDLEVBQVdwa0IsS0FBSzRoQixNQUFPLENBQ3JELElBQUlsRyxFQUFTeUksRUFBT25ULE1BRXBCLElBQUswSyxFQUFPQyxTQUFTdlAsRUFBUzJXLEdBQzVCLE9BQU8sSUFBSXBnQixLQUFLSyxLQUdsQixJQUFJaEgsR0FBUzBmLEVBQU9FLElBQUl4UCxFQUFTeU8sRUFBT2tJLEdBRXBDM1IsTUFBTUMsUUFBUXJWLEtBQ2hCb1EsRUFBVXBRLEdBQU8sR0FDakIsR0FBTzZlLEVBQU83ZSxHQUFPLEtBRXJCb1EsRUFBVXBRLEVBRWQsQ0FDRixDQUFFLE1BQU8rbEIsR0FDUHFDLEVBQVcvbEIsRUFBRTBqQixFQUNmLENBQUUsUUFDQXFDLEVBQVd0QyxHQUNiLENBRUEsT0FBTzFWLENBQ1QsQ0NuZmUsU0FBU2lZLEdBQVkzZ0IsRUFBVy9JLEdBQzdDLElBQUkySyxFQUFNQyxFQUFPQyxFQUFPQyxFQUF1QkMsRUFBaUJDLEVBQXVCQyxFQUF1QkMsRUFFOUc5RCxFQUFhLEVBQUdVLFdBQ2hCLElBQUkwQyxFQUFpQkMsSUFDakJVLEVBQWU3QyxFQUErMEIsUUFBcDBCcUMsRUFBOGhCLFFBQXRoQkMsRUFBa2QsUUFBemNDLEVBQTZHLFFBQXBHQyxFQUF3QjlLLGFBQXlDLEVBQVNBLEVBQVFtTCxvQkFBb0QsSUFBMUJMLEVBQW1DQSxFQUF3QjlLLFNBQXlGLFFBQXRDK0ssRUFBa0IvSyxFQUFRb0wsY0FBd0MsSUFBcEJMLEdBQTRGLFFBQXJEQyxFQUF3QkQsRUFBZ0IvSyxlQUErQyxJQUExQmdMLE9BQTVKLEVBQXdNQSxFQUFzQkcsb0JBQW9DLElBQVZOLEVBQW1CQSxFQUFRTCxFQUFlVyxvQkFBb0MsSUFBVlAsRUFBbUJBLEVBQTRELFFBQW5ESyxFQUF3QlQsRUFBZVksY0FBOEMsSUFBMUJILEdBQXlHLFFBQTVEQyxFQUF5QkQsRUFBc0JqTCxlQUFnRCxJQUEzQmtMLE9BQTlFLEVBQTJIQSxFQUF1QkMsb0JBQW1DLElBQVRSLEVBQWtCQSxFQUFPLEdBRW40QixLQUFNUSxHQUFnQixHQUFLQSxHQUFnQixHQUN6QyxNQUFNLElBQUlFLFdBQVcsb0RBR3ZCLElBQUloQyxFQUFPekIsRUFBT21CLEdBQ2RPLEVBQU1ELEVBQUtzZ0IsU0FDWG5nQixHQUFRRixFQUFNNkIsRUFBZSxFQUFJLEdBQUs3QixFQUFNNkIsRUFHaEQsT0FGQTlCLEVBQUt1Z0IsUUFBUXZnQixFQUFLd0ksVUFBWXJJLEdBQzlCSCxFQUFLdVgsU0FBUyxFQUFHLEVBQUcsRUFBRyxHQUNoQnZYLENBQ1QsQ0NmZSxTQUFTd2dCLEdBQVc5Z0IsRUFBVy9JLEdBRTVDLE9BREFvSCxFQUFhLEVBQUdVLFdDR0gsU0FBb0JnaUIsRUFBZUMsRUFBZ0IvcEIsR0FDaEVvSCxFQUFhLEVBQUdVLFdBQ2hCLElBQUlraUIsRUFBc0JOLEdBQVlJLEVBQWU5cEIsR0FDakRpcUIsRUFBdUJQLEdBQVlLLEVBQWdCL3BCLEdBQ3ZELE9BQU9ncUIsRUFBb0IvaEIsWUFBY2dpQixFQUFxQmhpQixTQUNoRSxDRFBTaWlCLENBQVduaEIsRUFBV2YsS0FBSzJTLE1BQU8zYSxFQUMzQyxDRWhDQSxNQXlEQSxHQXhEeUIsQ0FBQ2liLEVBQVVDLEtBQ2hDLE1BQU1DLEVBQVcvWCxTQUFTVyxjQUFjLE9BQ3hDb1gsRUFBUy9XLGFBQWEsS0FBTSxtQkFFNUIsTUFBTWdYLEVBQWVoWSxTQUFTVyxjQUFjLE1BSzVDLEdBSkFxWCxFQUFhQyxZQUFjLFFBRTNCRixFQUFTdFgsWUFBWXVYLEdBRVIsTUFBVEYsRUFDRixJQUFLLElBQUk3YixFQUFJLEVBQUdBLEVBQUk2YixFQUFNL2IsT0FBUUUsSUFJaEMsR0FBSXdxQixHQUZZL1AsR0FBTW9CLEVBQU03YixHQUFHb2IsUUFBUyxhQUFjLElBQUl6UyxPQUVqQyxDQUN2QixNQUFNc1QsRUFBVWxZLFNBQVNXLGNBQWMsT0FDdkN1WCxFQUFRbFgsYUFBYSxRQUFTLFlBRTlCLE1BQU1tWCxFQUFNblksU0FBU1csY0FBYyxVQUNuQ3dYLEVBQUluWCxhQUFhLFFBQVMsY0FDMUJtWCxFQUFJblgsYUFBYSxVQUFXOFcsRUFBTTdiLEdBQUcrYSxNQUVyQyxNQUFNb0IsRUFBY3BZLFNBQVNXLGNBQWMsS0FDM0N5WCxFQUFZSCxZQUFjSCxFQUFNN2IsR0FBR2liLE1BRW5DLE1BQU1xQixFQUFjdlksU0FBU1csY0FBYyxLQUMzQzRYLEVBQVlOLFlBQWNILEVBQU03YixHQUFHb2IsUUFFbkNhLEVBQVF6WCxZQUFZMFgsR0FDcEJELEVBQVF6WCxZQUFZMlgsR0FDcEJGLEVBQVF6WCxZQUFZOFgsR0FFcEJSLEVBQVN0WCxZQUFZeVgsRUFDdkIsQ0FJSixPQUFPSCxFQUFTZ0IsU0FBUyxFQ3NFN0IsR0EzR3lCLENBQUNnTyxFQUFhalAsS0FDbkMsTUFBTWtQLEVBQWFobkIsU0FBU1csY0FBYyxPQUMxQ3FtQixFQUFXaG1CLGFBQWEsS0FBTSxtQkFFOUIsTUFBTWltQixFQUFpQmpuQixTQUFTVyxjQUFjLE1BSzlDLEdBSkFzbUIsRUFBZWhQLFlBQWM4TyxFQUU3QkMsRUFBV3ZtQixZQUFZd21CLEdBRVYsTUFBVG5QLEVBQ0YsSUFBSyxJQUFJN2IsRUFBSSxFQUFHQSxFQUFJNmIsRUFBTS9iLE9BQVFFLElBRWhDLEdBQUk2YixFQUFNN2IsR0FBRzhhLFNBQVdnUSxFQUFhLENBQ25DLE1BQU03TyxFQUFVbFksU0FBU1csY0FBYyxPQUN2Q3VYLEVBQVFsWCxhQUFhLFFBQVMsWUFFOUIsTUFBTW1YLEVBQU1uWSxTQUFTVyxjQUFjLFVBQ25Dd1gsRUFBSW5YLGFBQWEsUUFBUyxjQUMxQm1YLEVBQUluWCxhQUFhLFVBQVc4VyxFQUFNN2IsR0FBRythLE1BRXJDLE1BQU1vQixFQUFjcFksU0FBU1csY0FBYyxLQUMzQ3lYLEVBQVlILFlBQWNILEVBQU03YixHQUFHaWIsTUFFbkMsTUFBTXFCLEVBQWN2WSxTQUFTVyxjQUFjLEtBQzNDNFgsRUFBWU4sWUFBY0gsRUFBTTdiLEdBQUdvYixRQUVuQ2EsRUFBUXpYLFlBQVkwWCxHQUNwQkQsRUFBUXpYLFlBQVkyWCxHQUNwQkYsRUFBUXpYLFlBQVk4WCxHQUVwQnlPLEVBQVd2bUIsWUFBWXlYLEVBQ3pCLENBSUosTUFBTU8sRUFBYXpZLFNBQVNXLGNBQWMsT0FDMUM4WCxFQUFXelgsYUFBYSxLQUFNLGdCQUU5QixNQUFNMFgsRUFBWTFZLFNBQVNXLGNBQWMsTUFDekMrWCxFQUFVVCxZQUFjLFdBQ3hCUyxFQUFVMVgsYUFBYSxLQUFNLGVBRTdCLE1BQU0yWCxFQUFlM1ksU0FBU1csY0FBYyxTQUM1Q2dZLEVBQWEzWCxhQUFhLE9BQVEsUUFDbEMyWCxFQUFhM1gsYUFBYSxLQUFNLGtCQUNoQzJYLEVBQWEzWCxhQUFhLGNBQWUsYUFFekMsTUFBTTRYLEVBQVM1WSxTQUFTVyxjQUFjLE9BRWhDa1ksRUFBUzdZLFNBQVNXLGNBQWMsVUFDdENrWSxFQUFPN1gsYUFBYSxLQUFNLGdCQUMxQjZYLEVBQU9aLFlBQWMsTUFFckIsTUFBTWEsRUFBWTlZLFNBQVNXLGNBQWMsVUFZekMsT0FYQW1ZLEVBQVU5WCxhQUFhLEtBQU0sbUJBQzdCOFgsRUFBVWIsWUFBYyxTQUV4QlEsRUFBV2hZLFlBQVlrWSxHQUN2QkMsRUFBT25ZLFlBQVlvWSxHQUNuQkQsRUFBT25ZLFlBQVlxWSxHQUNuQkwsRUFBV2hZLFlBQVltWSxHQUV2Qm9PLEVBQVd2bUIsWUFBWWlZLEdBQ3ZCc08sRUFBV3ZtQixZQUFZZ1ksR0FFaEJ1TyxFQUFXak8sU0FBUyxFQTBDL0IsR0F2Q3dCaEMsSUFDcEIsTUFBTWdRLEVBQWNoUSxFQUVkaUMsRUFBVWhaLFNBQVNpWixpQkFBaUIsZUFDcENQLEVBQVkxWSxTQUFTQyxjQUFjLGdCQUNuQ3dZLEVBQWF6WSxTQUFTQyxjQUFjLGlCQUNwQ2laLEVBQWdCbFosU0FBU0MsY0FBYyxvQkFDdkNrWixFQUFhblosU0FBU0MsY0FBYyxpQkFDcEMwWSxFQUFlM1ksU0FBU0MsY0FBYyxtQkFFNUMrWSxFQUFRSyxTQUFTQyxJQUNmQSxFQUFPQyxpQkFBaUIsU0FBVWpaLElBQ2hDLE1BQU1rWixFQUFTbFosRUFBRVIsT0FBTzJaLGFBQWEsV0FHckMsY0FBbUJELEVBQVF1TixFQUFZLEdBQ3ZDLElBSUpyTyxFQUFVYSxpQkFBaUIsU0FBVWpaLElBQ25Db1ksRUFBVTdZLE1BQU02WixRQUFVLE9BQzFCakIsRUFBVzVZLE1BQU02WixRQUFVLE1BQU0sSUFHbkNSLEVBQWNLLGlCQUFpQixTQUFValosSUFDdkNvWSxFQUFVN1ksTUFBTTZaLFFBQVUsY0FDMUJqQixFQUFXNVksTUFBTTZaLFFBQVUsTUFBTSxJQUduQ1AsRUFBV0ksaUJBQWlCLFNBQVVqWixJQUNwQyxXQUFnQnFZLEVBQWExRixNQUFPOFQsR0FDcEMsa0JBQXVCQSxFQUFZLEdBQ25DLEVDd0ROLEdBM0pnQixNQUNkLE1BQU1HLEVBQWVsbkIsU0FBU0MsY0FBYyxrQkFFdENrbkIsRUFBZSxLQUNuQkQsRUFBYUUsVUFBWSxHQUN2QixrQkFDQSxnQkFFRixJQUFvQixFQUdoQkMsRUFBZSxLQUNuQkgsRUFBYUUsVUFBWSxHQUN2QixrQkFDQSxnQkFFRixJQUFvQixFQUdoQkUsRUFBa0IsS0FDdEJKLEVBQWFFLFVBQVksR0FDdkIsa0JBQ0EsZ0JBRUYsSUFBb0IsRUFHaEJHLEVBQWtCLEtBQ3RCLE1BQU1DLEVBQWV4bkIsU0FBU0MsY0FBYyxrQkFHNUMsR0FGQXVuQixFQUFhdlAsWUFBYyxHQUVHLE1BQTFCLGtCQUNGLElBQUssSUFBSWhjLEVBQUksRUFBR0EsRUFBSSx5QkFBK0JBLElBQUssQ0FDdEQsTUFBTXdyQixFQUFZem5CLFNBQVNXLGNBQWMsTUFDekM4bUIsRUFBVXptQixhQUFhLFFBQVMsV0FFaEMsTUFBTTBtQixFQUFPMW5CLFNBQVNXLGNBQWMsS0FDcEMrbUIsRUFBS3pQLFlBQWMsSUFDbkJ5UCxFQUFLMW1CLGFBQWEsUUFBUyxhQUMzQjBtQixFQUFLMW1CLGFBQWEsYUFBYy9FLEdBRWhDLE1BQU04cUIsRUFBYy9tQixTQUFTVyxjQUFjLEtBQzNDb21CLEVBQVk5TyxZQUFjLGtCQUF1QmhjLEdBQ2pEOHFCLEVBQVkvbEIsYUFBYSxRQUFTLGdCQUNsQytsQixFQUFZL2xCLGFBQWEsYUFBYy9FLEdBRXZDd3JCLEVBQVVobkIsWUFBWXNtQixHQUV0QlUsRUFBVWhuQixZQUFZaW5CLEdBQ3RCRixFQUFhL21CLFlBQVlnbkIsRUFDM0IsQ0FDRixFQUdJRSxFQUFzQkMsSUFDMUJWLEVBQWFFLFVBQVksR0FDdkJRLEVBQ0EsZ0JBRUYsR0FBeUJBLEVBQVksRUEwRnZDLE1BQU8sQ0FDTEMsS0FQVyxLQUNYVixJQUNBSSxJQTdEbUIsTUFDbkIsTUFBTU8sRUFBVTluQixTQUFTQyxjQUFjLFVBQ2pDOG5CLEVBQVUvbkIsU0FBU0MsY0FBYyxVQUNqQytuQixFQUFhaG9CLFNBQVNDLGNBQWMsY0FDcENnb0IsRUFBZ0Jqb0IsU0FBU0MsY0FBYyxvQkFDdkNpb0IsRUFBa0Jsb0IsU0FBU0MsY0FBYyxzQkFDekN1WCxFQUFheFgsU0FBU0MsY0FBYyxnQkFDcENrb0IsRUFBZ0Jub0IsU0FBU0MsY0FBYyxvQkFDdkNtb0IsRUFBbUJwb0IsU0FBU0MsY0FBYyx1QkFDMUNvb0IsRUFBZXJvQixTQUFTaVosaUJBQWlCLGNBQ3pDcVAsRUFBZXRvQixTQUFTaVosaUJBQWlCLGlCQUUvQzZPLEVBQVF2TyxpQkFBaUIsU0FBUyxLQUNoQzROLEdBQWMsSUFJaEJZLEVBQVF4TyxpQkFBaUIsU0FBUyxLQUNoQzhOLEdBQWMsSUFHaEJXLEVBQVd6TyxpQkFBaUIsU0FBUyxLQUNuQytOLEdBQWlCLElBSW5COVAsRUFBVytCLGlCQUFpQixTQUFValosSUFDcEMybkIsRUFBY3BvQixNQUFNNlosUUFBVSxPQUM5QmxDLEVBQVczWCxNQUFNNlosUUFBVSxNQUFNLElBR25DME8sRUFBaUI3TyxpQkFBaUIsU0FBVWpaLElBQzFDMm5CLEVBQWNwb0IsTUFBTTZaLFFBQVUsT0FDOUJsQyxFQUFXM1gsTUFBTTZaLFFBQVUsTUFBTSxJQUduQ3lPLEVBQWM1TyxpQkFBaUIsU0FBVWpaLElBQ3ZDLGNBQW1CNG5CLEVBQWdCalYsT0FDbkNzVSxHQUFpQixJQUduQmMsRUFBYWhQLFNBQVNrUCxJQUNwQkEsRUFBWWhQLGlCQUFpQixTQUFValosSUFDckMsTUFBTWtvQixFQUFlbG9CLEVBQUVSLE9BQU8yWixhQUFhLGNBQzNDLGlCQUFzQitPLEdBQ3RCakIsR0FBaUIsR0FDakIsSUFHSmUsRUFBYWpQLFNBQVMwTixJQUNwQkEsRUFBWXhOLGlCQUFpQixTQUFValosSUFDckMsTUFBTWtvQixFQUFlbG9CLEVBQUVSLE9BQU8yWixhQUFhLGNBRTNDa08sRUFBbUIsa0JBQXVCYSxHQUFjLEdBQ3hELEdBQ0YsRUFPRkMsRUFBYyxFQUtkQyxlQXhGc0IzUixJQUN0QixPQUFRQSxHQUNOLElBQUssVUFDSG9RLElBQ0EsTUFFRixJQUFLLFFBQ0hFLElBQ0EsTUFFRixJQUFLLFlBQ0hDLElBQ0EsTUFFRixRQUNFSyxFQUFtQjVRLEdBRXZCLEVBeUVILEVBekplLEdDTmhCLFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvU2V0dGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvRXJhUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1llYXJQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxXZWVrWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9JU09XZWVrWWVhclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9FeHRlbmRlZFllYXJQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvUXVhcnRlclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lUXVhcnRlclBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Nb250aFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9TdGFuZEFsb25lTW9udGhQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxXZWVrUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3NldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvRGF0ZVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9EYXlPZlllYXJQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3NldFVUQ0RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxEYXlQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT0RheVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc2V0VVRDSVNPRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0FNUE1QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvQU1QTU1pZG5pZ2h0UGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0RheVBlcmlvZFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMXRvMTJQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjB0bzIzUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIwVG8xMVBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMVRvMjRQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvTWludXRlUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL1NlY29uZFBhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9GcmFjdGlvbk9mU2Vjb25kUGFyc2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lV2l0aFpQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvSVNPVGltZXpvbmVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvVGltZXN0YW1wU2Vjb25kc1BhcnNlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlL19saWIvcGFyc2Vycy9UaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9fbGliL3BhcnNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGhpc1dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9pbmJveC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2FsZW5kYXItdG9kYXkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2NhbGVuZGFyLW1vbnRoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mb3JtYXQtbGlzdC1idWxsZXRlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFhM2ZmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGdhcDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LXNlY3Rpb24ge1xcbiAgZmxleDogMTg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ViZmY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxLjg7XFxufVxcblxcbiNsZWZ0LWNvbnRlbnQgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxubGkjaW5ib3gsXFxubGkjdG9kYXksXFxubGkjdGhpcy13ZWVrLFxcbiNhZGQtcHJvamVjdCxcXG4jYWRkLXRhc2staDQsXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuXFxubGkjaW5ib3g6aG92ZXIsXFxubGkjdG9kYXk6aG92ZXIsXFxubGkjdGhpcy13ZWVrOmhvdmVyLFxcbiNhZGQtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpI2luYm94IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbmxpI3RvZGF5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbmxpI3RoaXMtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IGgzIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4ucHJvamVjdCBwOmZpcnN0LWNoaWxkIHtcXG4gIGZsZXg6IDY7XFxufVxcbi54LXByb2plY3Qge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWRpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQge1xcbiAgZmxleDogNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWYyZmY7XFxufVxcblxcbiNyaWdodC1jb250ZW50ICNyaWdodC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCBoMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1kaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmbGV4OiAxO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5jaXJjbGUtYnRuIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjJmZjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2lyY2xlLWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNyaWdodC1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLWlucHV0LFxcbi50YXNrLWR1ZS1kYXRlLWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1kaXYgZGl2LFxcbiNhZGQtdGFzay1kaXYgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNhZGQtdGFzay1oNCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuLFxcbiNjYW5jZWwtcHJvamVjdC1idG4sXFxuI2FkZC10YXNrLWJ0bixcXG4jY2FuY2VsLXRhc2stYnRuIHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAxLjZyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bixcXG4jYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XFxuICBib3JkZXItY29sb3I6ICM5M2ZlOTM7XFxufVxcblxcbiNjYW5jZWwtcHJvamVjdC1idG4sXFxuI2NhbmNlbC10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZhNmE2O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7O0VBS0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHlEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5REFBMkQ7RUFDM0Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlEQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIseURBQTJDO0VBQzNDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYTNmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZsZXg6IDI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBnYXA6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1zZWN0aW9uIHtcXG4gIGZsZXg6IDE4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2xlZnQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlYmZmO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMS44O1xcbn1cXG5cXG4jbGVmdC1jb250ZW50IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmxpI2luYm94LFxcbmxpI3RvZGF5LFxcbmxpI3RoaXMtd2VlayxcXG4jYWRkLXByb2plY3QsXFxuI2FkZC10YXNrLWg0LFxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcHg7XFxufVxcblxcbmxpI2luYm94OmhvdmVyLFxcbmxpI3RvZGF5OmhvdmVyLFxcbmxpI3RoaXMtd2Vlazpob3ZlcixcXG4jYWRkLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSNpbmJveCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9pbmJveC5zdmdcXFwiKTtcXG59XFxuXFxubGkjdG9kYXkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvY2FsZW5kYXItdG9kYXkuc3ZnXFxcIik7XFxufVxcblxcbmxpI3RoaXMtd2VlayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jYWxlbmRhci1tb250aC5zdmdcXFwiKTtcXG59XFxuXFxuI2xlZnQtY29udGVudCBoMyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2Zvcm1hdC1saXN0LWJ1bGxldGVkLnN2Z1xcXCIpO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbi5wcm9qZWN0IHA6Zmlyc3QtY2hpbGQge1xcbiAgZmxleDogNjtcXG59XFxuLngtcHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9wbHVzLnN2Z1xcXCIpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jcmlnaHQtY29udGVudCB7XFxuICBmbGV4OiA3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZjJmZjtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgI3JpZ2h0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNyaWdodC1jb250ZW50IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpcmNsZS1idG4ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMmZmO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaXJjbGUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3JpZ2h0LWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtdGFzay1kaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMtaW5wdXQsXFxuLnRhc2stZHVlLWRhdGUtaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWRpdiBkaXYsXFxuI2FkZC10YXNrLWRpdiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2FkZC10YXNrLWg0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvcGx1cy5zdmdcXFwiKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4sXFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcXG4jYWRkLXRhc2stYnRuLFxcbiNjYW5jZWwtdGFzay1idG4ge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEuNnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuLFxcbiNhZGQtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gIGJvcmRlci1jb2xvcjogIzkzZmU5MztcXG59XFxuXFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcXG4jY2FuY2VsLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XFxuICBib3JkZXItY29sb3I6ICNmZmE2YTY7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvZ2l0aHViLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBtaW4taGVpZ2h0OiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuXG5jb25zdCBUYXNrID0gKGlkTm8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgcmV0dXJuIHsgaWRObywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgLy8gY29weSBjb250ZW50cyBvZiBsb2NhbCBzdG9yYWdlIHRvIHRoZSB2YXJpYWJsZXMgaWYgdGhleSBleGlzdFxuICBsZXQgcHJvamVjdFN0b3JhZ2UgPSBbXTtcbiAgbGV0IHRhc2tTdG9yYWdlID0gW107XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIikgIT09IG51bGwpIHtcbiAgICBwcm9qZWN0U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiKSk7XG4gIH1cblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrU3RvcmFnZVwiKSAhPT0gbnVsbCkge1xuICAgIHRhc2tTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tTdG9yYWdlXCIpKTtcbiAgfVxuXG4gIC8vIGNvcHkgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHZhcmlhYmxlcyB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrU3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeSh0YXNrU3RvcmFnZSkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdFN0b3JhZ2UpKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJZE5vLCBwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhc2tTdG9yYWdlW2ldLmlkTm8gPT0gdGFza0lkTm8pIHtcbiAgICAgICAgdGFza1N0b3JhZ2Uuc3BsaWNlKGksIDEpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZGlzcGxheS5yZWZyZXNoQ29udGVudChwcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgcHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFxuICAgICAgRGF0ZS5ub3coKSwgLy8gdW5pcXVlIGlkXG4gICAgICB0aXRsZSxcbiAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGZvcm1hdChuZXcgRGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiksXG4gICAgICBcImxvd1wiLFxuICAgICAgcHJvamVjdFxuICAgICk7XG5cbiAgICB0YXNrU3RvcmFnZS5wdXNoKG5ld1Rhc2spO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKHRhc2tJZE5vLCBuZXdUaXRsZSwgcHJvamVjdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza1N0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrU3RvcmFnZVtpXS5pZE5vID09IHRhc2tJZE5vKSB7XG4gICAgICAgIHRhc2tTdG9yYWdlW2ldLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBkaXNwbGF5LnJlZnJlc2hDb250ZW50KHByb2plY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIHByb2plY3RTdG9yYWdlLnB1c2gobmFtZSk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RTdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgLy8gY29uc3QgdGVzdEl0ZW0gPSBUYXNrKFxuICAvLyAgIERhdGUubm93KCksXG4gIC8vICAgXCI0IHRlc3QgdGl0bGVcIixcbiAgLy8gICBcIjQgdGVzdCBkZXNjcmlwdGlvblwiLFxuICAvLyAgIGZvcm1hdChuZXcgRGF0ZSgpLCBcIk1NL2RkL3l5eXlcIiksXG4gIC8vICAgXCI0IHRlc3QgcHJpb3JpdHlcIixcbiAgLy8gICBcImRlZmF1bHRcIlxuICAvLyApO1xuICAvLyBjb25zb2xlLmxvZyh0ZXN0SXRlbSk7XG5cbiAgLy8gdGFza1N0b3JhZ2UucHVzaCh0ZXN0SXRlbSk7XG4gIC8vIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdFN0b3JhZ2UsXG4gICAgdGFza1N0b3JhZ2UsXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgYWRkVGFzayxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFRhc2ssXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBpbmJveCA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlDb250ZW50ID0gKHByb2plY3RzLCB0YXNrcykgPT4ge1xuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmJveERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGluYm94SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBpbmJveEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgICBpbmJveERpdi5hcHBlbmRDaGlsZChpbmJveEhlYWRpbmcpO1xuXG4gICAgaWYgKHRhc2tzICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjaXJjbGUtYnRuXCIpO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGV0YWlsc1wiKTtcbiAgICAgICAgdGFza0RldGFpbHMuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcbiAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRhc2tzW2ldLnRpdGxlKTtcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZGV0YWlscy1pbnB1dFwiKTtcbiAgICAgICAgdGFza0RldGFpbHNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRhc2tzW2ldLmlkTm8pO1xuICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnR5cGUgPSBcInRleHRcIjtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGFza0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhc2stZHVlLWRhdGUtaW5wdXRcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscyk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHNJbnB1dCk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlSW5wdXQpO1xuICAgICAgICBpbmJveERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stZGl2XCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGFkZFRhc2tINC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrSDQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1oNFwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBhZGRUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgYWRkVGFza0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2staW5wdXRcIik7XG4gICAgYWRkVGFza0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayBuYW1lXCIpO1xuXG4gICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRhc2stYnRuXCIpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbmNlbC10YXNrLWJ0blwiKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrSW5wdXQpO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICAgIGJ0bkRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcblxuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tINCk7XG4gICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tINCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2staDRcIik7XG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGl2XCIpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1pbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1kZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWRldGFpbHMtaW5wdXRcIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhSWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGRlbGV0ZSB0YXNrXG4gICAgICAgIHN0b3JhZ2UuZGVsZXRlVGFzayhkYXRhSWQsIFwiZGVmYXVsdFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgdG8gdG9nZ2xlIHRoZSBkaXNwbGF5IG9mIGFkZCB0YXNrIGVsZW1lbnRzXG4gICAgYWRkVGFza0g0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza0g0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGFkZFRhc2tINC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiO1xuICAgICAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgc3RvcmFnZS5hZGRUYXNrKGFkZFRhc2tJbnB1dC52YWx1ZSwgXCJkZWZhdWx0XCIpO1xuICAgICAgZGlzcGxheS5yZWZyZXNoQ29udGVudChcImRlZmF1bHRcIik7XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgdGhlIGRpc3BsYXkgZm9yIHRoZSB0YXNrIGRldGFpbHMgaW5wdXRcbiAgICB0YXNrRGV0YWlscy5mb3JFYWNoKCh0YXNrRGV0YWlsKSA9PiB7XG5cbiAgICAgIHRhc2tEZXRhaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgIFxuICAgICAgICAvLyByZWluaXRpYWxpemVzIGRpc3BsYXkgZm9yIG5vbiBzZWxlY3RlZCB0YXNrRGV0YWlsXG4gICAgICAgIHRhc2tEZXRhaWxzLmZvckVhY2goKHRhc2tEZWV0KSA9PiB7XG4gICAgICAgICAgdGFza0RlZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrRGV0YWlsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbiAgICAgICAgdGFza0RldGFpbHNJbnB1dHMuZm9yRWFjaCgodGFza0RldGFpbHNJbnB1dCkgPT4ge1xuICAgICAgICAgIGlmICh0YXNrRGV0YWlsc0lucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT0gZGF0YUlEKSB7XG4gICAgICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleDtcIik7XG5cbiAgICAgICAgICAgIHRhc2tEZXRhaWxzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5lZGl0VGFzayhkYXRhSUQsIHRhc2tEZXRhaWxzSW5wdXQudmFsdWUsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrRGV0YWlsc0lucHV0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluYm94O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHRvZGF5ID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAocHJvamVjdHMsIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG5cbiAgICBpZiAodGFza3MgIT0gbnVsbCkge1xuICAgICAgY29uc3QgZGF0ZU5vdyA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcIk1NL2RkL3l5eXlcIik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29tcGFyZSBkYXRlIGFuZCBjaGVjayBpZiBkdWVEYXRlIGlzIGVxdWFsIHRvIHRvZGF5XG4gICAgICAgIGlmICh0YXNrc1tpXS5kdWVEYXRlID09IGRhdGVOb3cpIHtcbiAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNpcmNsZS1idG5cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza3NbaV0uaWRObyk7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gdGFza3NbaV0udGl0bGU7XG5cbiAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza3NbaV0uZHVlRGF0ZTtcblxuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcbiAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAgICAgICAgIGluYm94RGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluYm94RGl2Lm91dGVySFRNTDtcbiAgfTtcblxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2lyY2xlLWJ0blwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgZGVsZXRlIHRhc2tcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUYXNrKGRhdGFJZCwgXCJ0b2RheVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZGF5O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBUSU1FWk9ORV9VTklUX1BSSU9SSVRZID0gMTA7XG5leHBvcnQgdmFyIFNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNldHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2V0dGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN1YlByaW9yaXR5XCIsIDApO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNldHRlciwgW3tcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX3V0Y0RhdGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2V0dGVyO1xufSgpO1xuZXhwb3J0IHZhciBWYWx1ZVNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NldHRlcikge1xuICBfaW5oZXJpdHMoVmFsdWVTZXR0ZXIsIF9TZXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVmFsdWVTZXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIFZhbHVlU2V0dGVyKHZhbHVlLCB2YWxpZGF0ZVZhbHVlLCBzZXRWYWx1ZSwgcHJpb3JpdHksIHN1YlByaW9yaXR5KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlU2V0dGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBfdGhpcy52YWxpZGF0ZVZhbHVlID0gdmFsaWRhdGVWYWx1ZTtcbiAgICBfdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIF90aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIF90aGlzLnN1YlByaW9yaXR5ID0gc3ViUHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZhbHVlU2V0dGVyLCBbe1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZSh1dGNEYXRlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVZhbHVlKHV0Y0RhdGUsIHRoaXMudmFsdWUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KHV0Y0RhdGUsIGZsYWdzLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh1dGNEYXRlLCBmbGFncywgdGhpcy52YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZhbHVlU2V0dGVyO1xufShTZXR0ZXIpO1xuZXhwb3J0IHZhciBEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1NldHRlcjIpIHtcbiAgX2luaGVyaXRzKERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyLCBfU2V0dGVyMik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzMiA9IF9zdXBlcjIuY2FsbC5hcHBseShfc3VwZXIyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwicHJpb3JpdHlcIiwgVElNRVpPTkVfVU5JVF9QUklPUklUWSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInN1YlByaW9yaXR5XCIsIC0xKTtcblxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIsIFt7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgZmxhZ3MpIHtcbiAgICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkge1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnZlcnRlZERhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICAgIGNvbnZlcnRlZERhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgIGNvbnZlcnRlZERhdGUuc2V0SG91cnMoZGF0ZS5nZXRVVENIb3VycygpLCBkYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGF0ZS5nZXRVVENTZWNvbmRzKCksIGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgICAgcmV0dXJuIGNvbnZlcnRlZERhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyO1xufShTZXR0ZXIpOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IHsgVmFsdWVTZXR0ZXIgfSBmcm9tIFwiLi9TZXR0ZXIuanNcIjtcbmV4cG9ydCB2YXIgUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJzZXIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhcnNlciwgW3tcbiAgICBrZXk6IFwicnVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gsIG9wdGlvbnMpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLnBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXR0ZXI6IG5ldyBWYWx1ZVNldHRlcihyZXN1bHQudmFsdWUsIHRoaXMudmFsaWRhdGUsIHRoaXMuc2V0LCB0aGlzLnByaW9yaXR5LCB0aGlzLnN1YlByaW9yaXR5KSxcbiAgICAgICAgcmVzdDogcmVzdWx0LnJlc3RcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF91dGNEYXRlLCBfdmFsdWUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFyc2VyO1xufSgpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5leHBvcnQgdmFyIEVyYVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRXJhUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEVyYVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRXJhUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcmFQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxNDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1InLCAndScsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXJhUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gQUQsIEJDXG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICBjYXNlICdHRyc6XG4gICAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gQSwgQlxuXG4gICAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmVyYShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBmbGFncywgdmFsdWUpIHtcbiAgICAgIGZsYWdzLmVyYSA9IHZhbHVlO1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVyYVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJleHBvcnQgdmFyIG51bWVyaWNQYXR0ZXJucyA9IHtcbiAgbW9udGg6IC9eKDFbMC0yXXwwP1xcZCkvLFxuICAvLyAwIHRvIDEyXG4gIGRhdGU6IC9eKDNbMC0xXXxbMC0yXT9cXGQpLyxcbiAgLy8gMCB0byAzMVxuICBkYXlPZlllYXI6IC9eKDM2WzAtNl18M1swLTVdXFxkfFswLTJdP1xcZD9cXGQpLyxcbiAgLy8gMCB0byAzNjZcbiAgd2VlazogL14oNVswLTNdfFswLTRdP1xcZCkvLFxuICAvLyAwIHRvIDUzXG4gIGhvdXIyM2g6IC9eKDJbMC0zXXxbMC0xXT9cXGQpLyxcbiAgLy8gMCB0byAyM1xuICBob3VyMjRoOiAvXigyWzAtNF18WzAtMV0/XFxkKS8sXG4gIC8vIDAgdG8gMjRcbiAgaG91cjExaDogL14oMVswLTFdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTFcbiAgaG91cjEyaDogL14oMVswLTJdfDA/XFxkKS8sXG4gIC8vIDAgdG8gMTJcbiAgbWludXRlOiAvXlswLTVdP1xcZC8sXG4gIC8vIDAgdG8gNTlcbiAgc2Vjb25kOiAvXlswLTVdP1xcZC8sXG4gIC8vIDAgdG8gNTlcbiAgc2luZ2xlRGlnaXQ6IC9eXFxkLyxcbiAgLy8gMCB0byA5XG4gIHR3b0RpZ2l0czogL15cXGR7MSwyfS8sXG4gIC8vIDAgdG8gOTlcbiAgdGhyZWVEaWdpdHM6IC9eXFxkezEsM30vLFxuICAvLyAwIHRvIDk5OVxuICBmb3VyRGlnaXRzOiAvXlxcZHsxLDR9LyxcbiAgLy8gMCB0byA5OTk5XG4gIGFueURpZ2l0c1NpZ25lZDogL14tP1xcZCsvLFxuICBzaW5nbGVEaWdpdFNpZ25lZDogL14tP1xcZC8sXG4gIC8vIDAgdG8gOSwgLTAgdG8gLTlcbiAgdHdvRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsMn0vLFxuICAvLyAwIHRvIDk5LCAtMCB0byAtOTlcbiAgdGhyZWVEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSwzfS8sXG4gIC8vIDAgdG8gOTk5LCAtMCB0byAtOTk5XG4gIGZvdXJEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSw0fS8gLy8gMCB0byA5OTk5LCAtMCB0byAtOTk5OVxuXG59O1xuZXhwb3J0IHZhciB0aW1lem9uZVBhdHRlcm5zID0ge1xuICBiYXNpY09wdGlvbmFsTWludXRlczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pP3xaLyxcbiAgYmFzaWM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KXxaLyxcbiAgYmFzaWNPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KSgoXFxkezJ9KSk/fFovLFxuICBleHRlbmRlZDogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KXxaLyxcbiAgZXh0ZW5kZWRPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSkoOihcXGR7Mn0pKT98Wi9cbn07IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUsIG1pbGxpc2Vjb25kc0luU2Vjb25kIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gbWFwVmFsdWUocGFyc2VGblJlc3VsdCwgbWFwRm4pIHtcbiAgaWYgKCFwYXJzZUZuUmVzdWx0KSB7XG4gICAgcmV0dXJuIHBhcnNlRm5SZXN1bHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBtYXBGbihwYXJzZUZuUmVzdWx0LnZhbHVlKSxcbiAgICByZXN0OiBwYXJzZUZuUmVzdWx0LnJlc3RcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWVyaWNQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBwYXJzZUludChtYXRjaFJlc3VsdFswXSwgMTApLFxuICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UobWF0Y2hSZXN1bHRbMF0ubGVuZ3RoKVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHBhdHRlcm4sIGRhdGVTdHJpbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gSW5wdXQgaXMgJ1onXG5cblxuICBpZiAobWF0Y2hSZXN1bHRbMF0gPT09ICdaJykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UoMSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHNpZ24gPSBtYXRjaFJlc3VsdFsxXSA9PT0gJysnID8gMSA6IC0xO1xuICB2YXIgaG91cnMgPSBtYXRjaFJlc3VsdFsyXSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzJdLCAxMCkgOiAwO1xuICB2YXIgbWludXRlcyA9IG1hdGNoUmVzdWx0WzNdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKSA6IDA7XG4gIHZhciBzZWNvbmRzID0gbWF0Y2hSZXN1bHRbNV0gPyBwYXJzZUludChtYXRjaFJlc3VsdFs1XSwgMTApIDogMDtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiBtaWxsaXNlY29uZHNJblNlY29uZCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZykge1xuICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuYW55RGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHMobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0cywgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoJ15cXFxcZHsxLCcgKyBuICsgJ30nKSwgZGF0ZVN0cmluZyk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHNTaWduZWQobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXRTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMudGhyZWVEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoJ14tP1xcXFxkezEsJyArIG4gKyAnfScpLCBkYXRlU3RyaW5nKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRheVBlcmlvZEVudW1Ub0hvdXJzKGRheVBlcmlvZCkge1xuICBzd2l0Y2ggKGRheVBlcmlvZCkge1xuICAgIGNhc2UgJ21vcm5pbmcnOlxuICAgICAgcmV0dXJuIDQ7XG5cbiAgICBjYXNlICdldmVuaW5nJzpcbiAgICAgIHJldHVybiAxNztcblxuICAgIGNhc2UgJ3BtJzpcbiAgICBjYXNlICdub29uJzpcbiAgICBjYXNlICdhZnRlcm5vb24nOlxuICAgICAgcmV0dXJuIDEyO1xuXG4gICAgY2FzZSAnYW0nOlxuICAgIGNhc2UgJ21pZG5pZ2h0JzpcbiAgICBjYXNlICduaWdodCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVHdvRGlnaXRZZWFyKHR3b0RpZ2l0WWVhciwgY3VycmVudFllYXIpIHtcbiAgdmFyIGlzQ29tbW9uRXJhID0gY3VycmVudFllYXIgPiAwOyAvLyBBYnNvbHV0ZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgeWVhcjpcbiAgLy8gMSAtPiAxIEFDXG4gIC8vIDAgLT4gMSBCQ1xuICAvLyAtMSAtPiAyIEJDXG5cbiAgdmFyIGFic0N1cnJlbnRZZWFyID0gaXNDb21tb25FcmEgPyBjdXJyZW50WWVhciA6IDEgLSBjdXJyZW50WWVhcjtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAoYWJzQ3VycmVudFllYXIgPD0gNTApIHtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgfHwgMTAwO1xuICB9IGVsc2Uge1xuICAgIHZhciByYW5nZUVuZCA9IGFic0N1cnJlbnRZZWFyICsgNTA7XG4gICAgdmFyIHJhbmdlRW5kQ2VudHVyeSA9IE1hdGguZmxvb3IocmFuZ2VFbmQgLyAxMDApICogMTAwO1xuICAgIHZhciBpc1ByZXZpb3VzQ2VudHVyeSA9IHR3b0RpZ2l0WWVhciA+PSByYW5nZUVuZCAlIDEwMDtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgKyByYW5nZUVuZENlbnR1cnkgLSAoaXNQcmV2aW91c0NlbnR1cnkgPyAxMDAgOiAwKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbW1vbkVyYSA/IHJlc3VsdCA6IDEgLSByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG4vLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zXG4vLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4vLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4vLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4vLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4vLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4vLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4vLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5leHBvcnQgdmFyIFllYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3UnLCAndycsICdJJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh5ZWFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09ICd5eSdcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG5cbiAgICAgICAgY2FzZSAneW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXG4gICAgICBpZiAodmFsdWUuaXNUd29EaWdpdFllYXIpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRUd29EaWdpdFllYXIgPSBub3JtYWxpemVUd29EaWdpdFllYXIodmFsdWUueWVhciwgY3VycmVudFllYXIpO1xuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsIDAsIDEpO1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHllYXIgPSAhKCdlcmEnIGluIGZsYWdzKSB8fCBmbGFncy5lcmEgPT09IDEgPyB2YWx1ZS55ZWFyIDogMSAtIHZhbHVlLnllYXI7XG4gICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDEpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgbWFwVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG4vLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG5leHBvcnQgdmFyIExvY2FsV2Vla1llYXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsV2Vla1llYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTG9jYWxXZWVrWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxXZWVrWWVhclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxXZWVrWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEzMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdSJywgJ3UnLCAnUScsICdxJywgJ00nLCAnTCcsICdJJywgJ2QnLCAnRCcsICdpJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbFdlZWtZZWFyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHZhciB2YWx1ZUNhbGxiYWNrID0gZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh5ZWFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09ICdZWSdcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnWSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG5cbiAgICAgICAgY2FzZSAnWW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgdmFyIGN1cnJlbnRZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih2YWx1ZS55ZWFyLCBjdXJyZW50WWVhcik7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIobm9ybWFsaXplZFR3b0RpZ2l0WWVhciwgMCwgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB5ZWFyID0gISgnZXJhJyBpbiBmbGFncykgfHwgZmxhZ3MuZXJhID09PSAxID8gdmFsdWUueWVhciA6IDEgLSB2YWx1ZS55ZWFyO1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbFdlZWtZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuXG5leHBvcnQgdmFyIElTT1dlZWtZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhJU09XZWVrWWVhclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09XZWVrWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gSVNPV2Vla1llYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElTT1dlZWtZZWFyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTMwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydHJywgJ3knLCAnWScsICd1JywgJ1EnLCAncScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhJU09XZWVrWWVhclBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbiA9PT0gJ1InKSB7XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQoNCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChfZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgdmFyIGZpcnN0V2Vla09mWWVhciA9IG5ldyBEYXRlKDApO1xuICAgICAgZmlyc3RXZWVrT2ZZZWFyLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICAgIGZpcnN0V2Vla09mWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzdGFydE9mVVRDSVNPV2VlayhmaXJzdFdlZWtPZlllYXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJU09XZWVrWWVhclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEV4dGVuZGVkWWVhclBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRXh0ZW5kZWRZZWFyUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEV4dGVuZGVkWWVhclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRXh0ZW5kZWRZZWFyUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRlZFllYXJQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ0cnLCAneScsICdZJywgJ1InLCAndycsICdJJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHRlbmRlZFllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBpZiAodG9rZW4gPT09ICd1Jykge1xuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV4dGVuZGVkWWVhclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFF1YXJ0ZXJQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFF1YXJ0ZXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUXVhcnRlclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gUXVhcnRlclBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUXVhcnRlclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDEyMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnTScsICdMJywgJ3cnLCAnSScsICdkJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFF1YXJ0ZXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICBjYXNlICdRUSc6XG4gICAgICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgICBjYXNlICdRUVEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUXVhcnRlclBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lUXVhcnRlclBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGFuZEFsb25lUXVhcnRlclBhcnNlcik7XG5cbiAgZnVuY3Rpb24gU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVRdWFydGVyUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTIwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAnUScsICdNJywgJ0wnLCAndycsICdJJywgJ2QnLCAnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICBjYXNlICdxcSc6XG4gICAgICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgICBjYXNlICdxcXEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTW9udGgoKHZhbHVlIC0gMSkgKiAzLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmV4cG9ydCB2YXIgTW9udGhQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKE1vbnRoUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1vbnRoUGFyc2VyKTtcblxuICBmdW5jdGlvbiBNb250aFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9udGhQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ0wnLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDExMCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9udGhQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAtIDE7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1vbnRoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgICBjYXNlICdNTU0nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9udGhQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cywgbWFwVmFsdWUgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU3RhbmRBbG9uZU1vbnRoUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lTW9udGhQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RhbmRBbG9uZU1vbnRoUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lTW9udGhQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVNb250aFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDExMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnWScsICdSJywgJ3EnLCAnUScsICdNJywgJ3cnLCAnSScsICdEJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lTW9udGhQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAtIDE7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLm1vbnRoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgICBjYXNlICdMTEwnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSkgfHwgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCAxKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZU1vbnRoUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiOyAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcblxuZXhwb3J0IHZhciBMb2NhbFdlZWtQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsV2Vla1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihMb2NhbFdlZWtQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIExvY2FsV2Vla1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxXZWVrUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ2knLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsV2Vla1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd3byc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNTM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENXZWVrKHNldFVUQ1dlZWsoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxXZWVrUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlXZWVrLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgd2VlayA9IHRvSW50ZWdlcihkaXJ0eVdlZWspO1xuICB2YXIgZGlmZiA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykgLSB3ZWVrO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBJU08gd2VlayBvZiB5ZWFyXG5cbmV4cG9ydCB2YXIgSVNPV2Vla1BhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPV2Vla1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09XZWVrUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09XZWVrUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09XZWVrUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1knLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ3cnLCAnZCcsICdEJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPV2Vla1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0knOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdJbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNTM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YXJ0T2ZVVENJU09XZWVrKHNldFVUQ0lTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPV2Vla1BhcnNlcjtcbn0oUGFyc2VyKTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VVRDSVNPV2VlayhkaXJ0eURhdGUsIGRpcnR5SVNPV2Vlaykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGlzb1dlZWsgPSB0b0ludGVnZXIoZGlydHlJU09XZWVrKTtcbiAgdmFyIGRpZmYgPSBnZXRVVENJU09XZWVrKGRhdGUpIC0gaXNvV2VlaztcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZiAqIDcpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgaXNMZWFwWWVhckluZGV4LCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbnZhciBEQVlTX0lOX01PTlRIID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xudmFyIERBWVNfSU5fTU9OVEhfTEVBUF9ZRUFSID0gWzMxLCAyOSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdOyAvLyBEYXkgb2YgdGhlIG1vbnRoXG5cbmV4cG9ydCB2YXIgRGF0ZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF0ZVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXRlUGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXRlUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXRlUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN1YlByaW9yaXR5XCIsIDEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ1knLCAnUicsICdxJywgJ1EnLCAndycsICdJJywgJ0QnLCAnaScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZGF0ZSwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnZG8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShkYXRlLCB2YWx1ZSkge1xuICAgICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICB2YXIgaXNMZWFwWWVhciA9IGlzTGVhcFllYXJJbmRleCh5ZWFyKTtcbiAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgICAgaWYgKGlzTGVhcFllYXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USF9MRUFQX1lFQVJbbW9udGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gREFZU19JTl9NT05USFttb250aF07XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENEYXRlKHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzLCBpc0xlYXBZZWFySW5kZXggfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRGF5T2ZZZWFyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhEYXlPZlllYXJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRGF5T2ZZZWFyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBEYXlPZlllYXJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERheU9mWWVhclBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdWJwcmlvcml0eVwiLCAxKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydZJywgJ1InLCAncScsICdRJywgJ00nLCAnTCcsICd3JywgJ0knLCAnZCcsICdFJywgJ2knLCAnZScsICdjJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEYXlPZlllYXJQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgY2FzZSAnREQnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXlPZlllYXIsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0RvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgdmFyIGlzTGVhcFllYXIgPSBpc0xlYXBZZWFySW5kZXgoeWVhcik7XG5cbiAgICAgIGlmIChpc0xlYXBZZWFyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDM2NjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDM2NTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ01vbnRoKDAsIHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5T2ZZZWFyUGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRVVENEYXkoZGlydHlEYXRlLCBkaXJ0eURheSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IHRvSW50ZWdlcihkaXJ0eURheSk7XG4gIHZhciBjdXJyZW50RGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIHJlbWFpbmRlciA9IGRheSAlIDc7XG4gIHZhciBkYXlJbmRleCA9IChyZW1haW5kZXIgKyA3KSAlIDc7XG4gIHZhciBkaWZmID0gKGRheUluZGV4IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gY3VycmVudERheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgc2V0VVRDRGF5IGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0RheS9pbmRleC5qc1wiOyAvLyBEYXkgb2Ygd2Vla1xuXG5leHBvcnQgdmFyIERheVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERheVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gRGF5UGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsnRCcsICdpJywgJ2UnLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF5UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gVHVlXG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICBjYXNlICdFRSc6XG4gICAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVFxuXG4gICAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAvLyBUdVxuXG4gICAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGRhdGUgPSBzZXRVVENEYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIExvY2FsIGRheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgTG9jYWxEYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKExvY2FsRGF5UGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKExvY2FsRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBMb2NhbERheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxEYXlQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA5MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsneScsICdSJywgJ3UnLCAncScsICdRJywgJ00nLCAnTCcsICdJJywgJ2QnLCAnRCcsICdFJywgJ2knLCAnYycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHZhciB3aG9sZVdlZWtEYXlzID0gTWF0aC5mbG9vcigodmFsdWUgLSAxKSAvIDcpICogNztcbiAgICAgICAgcmV0dXJuICh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3ICsgd2hvbGVXZWVrRGF5cztcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gM1xuICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgY2FzZSAnZWUnOlxuICAgICAgICAgIC8vIDAzXG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gM3JkXG5cbiAgICAgICAgY2FzZSAnZW8nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVcblxuICAgICAgICBjYXNlICdlZWUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgICBjYXNlICdlZWVlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlID0gc2V0VVRDRGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxEYXlQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBzZXRVVENEYXkgZnJvbSBcIi4uLy4uLy4uL19saWIvc2V0VVRDRGF5L2luZGV4LmpzXCI7IC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG5cbmV4cG9ydCB2YXIgU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyKTtcblxuICBmdW5jdGlvbiBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDkwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd5JywgJ1InLCAndScsICdxJywgJ1EnLCAnTScsICdMJywgJ0knLCAnZCcsICdEJywgJ0UnLCAnaScsICdlJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHZhciB3aG9sZVdlZWtEYXlzID0gTWF0aC5mbG9vcigodmFsdWUgLSAxKSAvIDcpICogNztcbiAgICAgICAgcmV0dXJuICh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3ICsgd2hvbGVXZWVrRGF5cztcbiAgICAgIH07XG5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgLy8gM1xuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgY2FzZSAnY2MnOlxuICAgICAgICAgIC8vIDAzXG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gM3JkXG5cbiAgICAgICAgY2FzZSAnY28nOlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgICAvLyBUdWVcblxuICAgICAgICBjYXNlICdjY2MnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVHVcblxuICAgICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgICBjYXNlICdjY2NjJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBkYXRlID0gc2V0VVRDRGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgc2V0VVRDSVNPRGF5IGZyb20gXCIuLi8uLi8uLi9fbGliL3NldFVUQ0lTT0RheS9pbmRleC5qc1wiOyAvLyBJU08gZGF5IG9mIHdlZWtcblxuZXhwb3J0IHZhciBJU09EYXlQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT0RheVBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09EYXlQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIElTT0RheVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPRGF5UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgOTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3knLCAnWScsICd1JywgJ3EnLCAnUScsICdNJywgJ0wnLCAndycsICdkJywgJ0QnLCAnRScsICdlJywgJ2MnLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT0RheVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICB2YXIgdmFsdWVDYWxsYmFjayA9IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIDJcbiAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgICAvLyAwMlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgICAgLy8gMm5kXG5cbiAgICAgICAgY2FzZSAnaW8nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8vIFR1ZVxuXG4gICAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFRcblxuICAgICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgICAgcmV0dXJuIG1hcFZhbHVlKG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAgIC8vIFR1XG5cbiAgICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgICByZXR1cm4gbWFwVmFsdWUobWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgICAgLy8gVHVlc2RheVxuXG4gICAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXBWYWx1ZShtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlID0gc2V0VVRDSVNPRGF5KGRhdGUsIHZhbHVlKTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSVNPRGF5UGFyc2VyO1xufShQYXJzZXIpOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFVUQ0lTT0RheShkaXJ0eURhdGUsIGRpcnR5RGF5KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF5ID0gdG9JbnRlZ2VyKGRpcnR5RGF5KTtcblxuICBpZiAoZGF5ICUgNyA9PT0gMCkge1xuICAgIGRheSA9IGRheSAtIDc7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGN1cnJlbnREYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgNztcbiAgdmFyIGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIEFNUE1QYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEFNUE1QYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQU1QTVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gQU1QTVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQU1QTVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDgwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydiJywgJ0InLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBTVBNUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKGRheVBlcmlvZEVudW1Ub0hvdXJzKHZhbHVlKSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQU1QTVBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgZGF5UGVyaW9kRW51bVRvSG91cnMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgQU1QTU1pZG5pZ2h0UGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhBTVBNTWlkbmlnaHRQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQU1QTU1pZG5pZ2h0UGFyc2VyKTtcblxuICBmdW5jdGlvbiBBTVBNTWlkbmlnaHRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFNUE1NaWRuaWdodFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDgwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydhJywgJ0InLCAnSCcsICdrJywgJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBTVBNTWlkbmlnaHRQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgY2FzZSAnYmInOlxuICAgICAgICBjYXNlICdiYmInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KSB8fCBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnYmJiYic6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBTVBNTWlkbmlnaHRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7IC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcblxuZXhwb3J0IHZhciBEYXlQZXJpb2RQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKERheVBlcmlvZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEYXlQZXJpb2RQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIERheVBlcmlvZFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF5UGVyaW9kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgODApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGF5UGVyaW9kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnQic6XG4gICAgICAgIGNhc2UgJ0JCJzpcbiAgICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgICAgfSkgfHwgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICAgIH0pIHx8IG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICBkYXRlLnNldFVUQ0hvdXJzKGRheVBlcmlvZEVudW1Ub0hvdXJzKHZhbHVlKSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF5UGVyaW9kUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjF0bzEyUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMXRvMTJQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjF0bzEyUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMXRvMTJQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIxdG8xMlBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydIJywgJ0snLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjF0bzEyUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMmgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ2hvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAxMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaXNQTSA9IGRhdGUuZ2V0VVRDSG91cnMoKSA+PSAxMjtcblxuICAgICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlICsgMTIsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIGlmICghaXNQTSAmJiB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjF0bzEyUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjB0bzIzUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMHRvMjNQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjB0bzIzUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMHRvMjNQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIwdG8yM1BhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydhJywgJ2InLCAnaCcsICdLJywgJ2snLCAndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhvdXIwdG8yM1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5ob3VyMjNoLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdIbyc6XG4gICAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMjM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG91cjB0bzIzUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgSG91cjBUbzExUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhIb3VyMFRvMTFQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSG91cjBUbzExUGFyc2VyKTtcblxuICBmdW5jdGlvbiBIb3VyMFRvMTFQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhvdXIwVG8xMVBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDcwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWydoJywgJ0gnLCAnaycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjBUbzExUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnSyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ0tvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaXNQTSA9IGRhdGUuZ2V0VVRDSG91cnMoKSA+PSAxMjtcblxuICAgICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgICBkYXRlLnNldFVUQ0hvdXJzKHZhbHVlICsgMTIsIDAsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb3VyMFRvMTFQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHBhcnNlTnVtZXJpY1BhdHRlcm4sIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBIb3VyMVRvMjRQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKEhvdXIxVG8yNFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIb3VyMVRvMjRQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIEhvdXIxVG8yNFBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSG91cjFUbzI0UGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgNzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ2EnLCAnYicsICdoJywgJ0gnLCAnSycsICd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG91cjFUbzI0UGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyNGgsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ2tvJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnaG91cidcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSAyNDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICB2YXIgaG91cnMgPSB2YWx1ZSA8PSAyNCA/IHZhbHVlICUgMjQgOiB2YWx1ZTtcbiAgICAgIGRhdGUuc2V0VVRDSG91cnMoaG91cnMsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhvdXIxVG8yNFBhcnNlcjtcbn0oUGFyc2VyKTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VOdW1lcmljUGF0dGVybiwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5leHBvcnQgdmFyIE1pbnV0ZVBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoTWludXRlUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1pbnV0ZVBhcnNlcik7XG5cbiAgZnVuY3Rpb24gTWludXRlUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW51dGVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA2MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJ10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbnV0ZVBhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5taW51dGUsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ21vJzpcbiAgICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDU5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWludXRlUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWVyaWNQYXR0ZXJuLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgU2Vjb25kUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhTZWNvbmRQYXJzZXIsIF9QYXJzZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2Vjb25kUGFyc2VyKTtcblxuICBmdW5jdGlvbiBTZWNvbmRQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlY29uZFBhcnNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByaW9yaXR5XCIsIDUwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbmNvbXBhdGlibGVUb2tlbnNcIiwgWyd0JywgJ1QnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2Vjb25kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnNlY29uZCwgZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY2FzZSAnc28nOlxuICAgICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNTk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgICAgZGF0ZS5zZXRVVENTZWNvbmRzKHZhbHVlLCAwKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWNvbmRQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmV4cG9ydCB2YXIgRnJhY3Rpb25PZlNlY29uZFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoRnJhY3Rpb25PZlNlY29uZFBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKTtcblxuICBmdW5jdGlvbiBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMzApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCddKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGcmFjdGlvbk9mU2Vjb25kUGFyc2VyLCBbe1xuICAgIGtleTogXCJwYXJzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgICAgdmFyIHZhbHVlQ2FsbGJhY2sgPSBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICAgIGRhdGUuc2V0VVRDTWlsbGlzZWNvbmRzKHZhbHVlKTtcbiAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyB0aW1lem9uZVBhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lem9uZVBhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMuanNcIjsgLy8gVGltZXpvbmUgKElTTy04NjAxLiArMDA6MDAgaXMgYCdaJ2ApXG5cbmV4cG9ydCB2YXIgSVNPVGltZXpvbmVXaXRoWlBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1BhcnNlcikge1xuICBfaW5oZXJpdHMoSVNPVGltZXpvbmVXaXRoWlBhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihJU09UaW1lem9uZVdpdGhaUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09UaW1lem9uZVdpdGhaUGFyc2VyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJU09UaW1lem9uZVdpdGhaUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCBbJ3QnLCAnVCcsICd4J10pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElTT1RpbWV6b25lV2l0aFpQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxNaW51dGVzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICdYWFhYWCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ1hYWCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSB2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1RpbWV6b25lV2l0aFpQYXJzZXI7XG59KFBhcnNlcik7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIuanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWV6b25lUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5qc1wiOyAvLyBUaW1lem9uZSAoSVNPLTg2MDEpXG5cbmV4cG9ydCB2YXIgSVNPVGltZXpvbmVQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKElTT1RpbWV6b25lUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKElTT1RpbWV6b25lUGFyc2VyKTtcblxuICBmdW5jdGlvbiBJU09UaW1lem9uZVBhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSVNPVGltZXpvbmVQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCAxMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsIFsndCcsICdUJywgJ1gnXSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSVNPVGltZXpvbmVQYXJzZXIsIFt7XG4gICAga2V5OiBcInBhcnNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxNaW51dGVzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybih0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxTZWNvbmRzLCBkYXRlU3RyaW5nKTtcblxuICAgICAgICBjYXNlICd4eHh4eCc6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWRPcHRpb25hbFNlY29uZHMsIGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNhc2UgJ3h4eCc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWQsIGRhdGVTdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgICAgaWYgKGZsYWdzLnRpbWVzdGFtcElzU2V0KSB7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSB2YWx1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElTT1RpbWV6b25lUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUGFyc2VyKSB7XG4gIF9pbmhlcml0cyhUaW1lc3RhbXBTZWNvbmRzUGFyc2VyLCBfUGFyc2VyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRpbWVzdGFtcFNlY29uZHNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwcmlvcml0eVwiLCA0MCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jb21wYXRpYmxlVG9rZW5zXCIsICcqJyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGltZXN0YW1wU2Vjb25kc1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZykge1xuICAgICAgcmV0dXJuIHBhcnNlQW55RGlnaXRzU2lnbmVkKGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gW25ldyBEYXRlKHZhbHVlICogMTAwMCksIHtcbiAgICAgICAgdGltZXN0YW1wSXNTZXQ6IHRydWVcbiAgICAgIH1dO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyO1xufShQYXJzZXIpOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuZXhwb3J0IHZhciBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QYXJzZXIpIHtcbiAgX2luaGVyaXRzKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciwgX1BhcnNlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIpO1xuXG4gIGZ1bmN0aW9uIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicHJpb3JpdHlcIiwgMjApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluY29tcGF0aWJsZVRva2Vuc1wiLCAnKicpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciwgW3tcbiAgICBrZXk6IFwicGFyc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2UoZGF0ZVN0cmluZykge1xuICAgICAgcmV0dXJuIHBhcnNlQW55RGlnaXRzU2lnbmVkKGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KF9kYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gW25ldyBEYXRlKHZhbHVlKSwge1xuICAgICAgICB0aW1lc3RhbXBJc1NldDogdHJ1ZVxuICAgICAgfV07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcjtcbn0oUGFyc2VyKTsiLCJpbXBvcnQgeyBFcmFQYXJzZXIgfSBmcm9tIFwiLi9FcmFQYXJzZXIuanNcIjtcbmltcG9ydCB7IFllYXJQYXJzZXIgfSBmcm9tIFwiLi9ZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtZZWFyUGFyc2VyIH0gZnJvbSBcIi4vTG9jYWxXZWVrWWVhclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9JU09XZWVrWWVhclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRXh0ZW5kZWRZZWFyUGFyc2VyIH0gZnJvbSBcIi4vRXh0ZW5kZWRZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBRdWFydGVyUGFyc2VyIH0gZnJvbSBcIi4vUXVhcnRlclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9TdGFuZEFsb25lUXVhcnRlclBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9Nb250aFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZU1vbnRoUGFyc2VyIH0gZnJvbSBcIi4vU3RhbmRBbG9uZU1vbnRoUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtQYXJzZXIgfSBmcm9tIFwiLi9Mb2NhbFdlZWtQYXJzZXIuanNcIjtcbmltcG9ydCB7IElTT1dlZWtQYXJzZXIgfSBmcm9tIFwiLi9JU09XZWVrUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4vRGF0ZVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgRGF5T2ZZZWFyUGFyc2VyIH0gZnJvbSBcIi4vRGF5T2ZZZWFyUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlQYXJzZXIgfSBmcm9tIFwiLi9EYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IExvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vTG9jYWxEYXlQYXJzZXIuanNcIjtcbmltcG9ydCB7IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciB9IGZyb20gXCIuL1N0YW5kQWxvbmVMb2NhbERheVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPRGF5UGFyc2VyIH0gZnJvbSBcIi4vSVNPRGF5UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBBTVBNUGFyc2VyIH0gZnJvbSBcIi4vQU1QTVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgQU1QTU1pZG5pZ2h0UGFyc2VyIH0gZnJvbSBcIi4vQU1QTU1pZG5pZ2h0UGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEYXlQZXJpb2RQYXJzZXIgfSBmcm9tIFwiLi9EYXlQZXJpb2RQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIxdG8xMlBhcnNlciB9IGZyb20gXCIuL0hvdXIxdG8xMlBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSG91cjB0bzIzUGFyc2VyIH0gZnJvbSBcIi4vSG91cjB0bzIzUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBIb3VyMFRvMTFQYXJzZXIgfSBmcm9tIFwiLi9Ib3VyMFRvMTFQYXJzZXIuanNcIjtcbmltcG9ydCB7IEhvdXIxVG8yNFBhcnNlciB9IGZyb20gXCIuL0hvdXIxVG8yNFBhcnNlci5qc1wiO1xuaW1wb3J0IHsgTWludXRlUGFyc2VyIH0gZnJvbSBcIi4vTWludXRlUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9TZWNvbmRQYXJzZXIuanNcIjtcbmltcG9ydCB7IEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9GcmFjdGlvbk9mU2Vjb25kUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVdpdGhaUGFyc2VyIH0gZnJvbSBcIi4vSVNPVGltZXpvbmVXaXRoWlBhcnNlci5qc1wiO1xuaW1wb3J0IHsgSVNPVGltZXpvbmVQYXJzZXIgfSBmcm9tIFwiLi9JU09UaW1lem9uZVBhcnNlci5qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wU2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL1RpbWVzdGFtcFNlY29uZHNQYXJzZXIuanNcIjtcbmltcG9ydCB7IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL1RpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlci5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8qIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHoqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgcGFyc2VgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICovXG5cbmV4cG9ydCB2YXIgcGFyc2VycyA9IHtcbiAgRzogbmV3IEVyYVBhcnNlcigpLFxuICB5OiBuZXcgWWVhclBhcnNlcigpLFxuICBZOiBuZXcgTG9jYWxXZWVrWWVhclBhcnNlcigpLFxuICBSOiBuZXcgSVNPV2Vla1llYXJQYXJzZXIoKSxcbiAgdTogbmV3IEV4dGVuZGVkWWVhclBhcnNlcigpLFxuICBROiBuZXcgUXVhcnRlclBhcnNlcigpLFxuICBxOiBuZXcgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIoKSxcbiAgTTogbmV3IE1vbnRoUGFyc2VyKCksXG4gIEw6IG5ldyBTdGFuZEFsb25lTW9udGhQYXJzZXIoKSxcbiAgdzogbmV3IExvY2FsV2Vla1BhcnNlcigpLFxuICBJOiBuZXcgSVNPV2Vla1BhcnNlcigpLFxuICBkOiBuZXcgRGF0ZVBhcnNlcigpLFxuICBEOiBuZXcgRGF5T2ZZZWFyUGFyc2VyKCksXG4gIEU6IG5ldyBEYXlQYXJzZXIoKSxcbiAgZTogbmV3IExvY2FsRGF5UGFyc2VyKCksXG4gIGM6IG5ldyBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIoKSxcbiAgaTogbmV3IElTT0RheVBhcnNlcigpLFxuICBhOiBuZXcgQU1QTVBhcnNlcigpLFxuICBiOiBuZXcgQU1QTU1pZG5pZ2h0UGFyc2VyKCksXG4gIEI6IG5ldyBEYXlQZXJpb2RQYXJzZXIoKSxcbiAgaDogbmV3IEhvdXIxdG8xMlBhcnNlcigpLFxuICBIOiBuZXcgSG91cjB0bzIzUGFyc2VyKCksXG4gIEs6IG5ldyBIb3VyMFRvMTFQYXJzZXIoKSxcbiAgazogbmV3IEhvdXIxVG8yNFBhcnNlcigpLFxuICBtOiBuZXcgTWludXRlUGFyc2VyKCksXG4gIHM6IG5ldyBTZWNvbmRQYXJzZXIoKSxcbiAgUzogbmV3IEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIoKSxcbiAgWDogbmV3IElTT1RpbWV6b25lV2l0aFpQYXJzZXIoKSxcbiAgeDogbmV3IElTT1RpbWV6b25lUGFyc2VyKCksXG4gIHQ6IG5ldyBUaW1lc3RhbXBTZWNvbmRzUGFyc2VyKCksXG4gIFQ6IG5ldyBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIoKVxufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgfSBmcm9tIFwiLi9fbGliL1NldHRlci5qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL19saWIvcGFyc2Vycy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgbm90V2hpdGVzcGFjZVJlZ0V4cCA9IC9cXFMvO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgcGFyc2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRhdGUgcGFyc2VkIGZyb20gc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKlxuICogRm9ybWF0IG9mIHRoZSBmb3JtYXQgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA1IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogTm90IGFsbCB0b2tlbnMgYXJlIGNvbXBhdGlibGUuIENvbWJpbmF0aW9ucyB0aGF0IGRvbid0IG1ha2Ugc2Vuc2Ugb3IgY291bGQgbGVhZCB0byBidWdzIGFyZSBwcm9oaWJpdGVkXG4gKiBhbmQgd2lsbCB0aHJvdyBgUmFuZ2VFcnJvcmAuIEZvciBleGFtcGxlIHVzYWdlIG9mIDI0LWhvdXIgZm9ybWF0IHRva2VuIHdpdGggQU0vUE0gdG9rZW4gd2lsbCB0aHJvdyBhbiBleGNlcHRpb246XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogcGFyc2UoJzIzIEFNJywgJ0hIIGEnLCBuZXcgRGF0ZSgpKVxuICogLy89PiBSYW5nZUVycm9yOiBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYEhIYCBhbmQgYGFgIGF0IHRoZSBzYW1lIHRpbWVcbiAqIGBgYFxuICpcbiAqIFNlZSB0aGUgY29tcGF0aWJpbGl0eSB0YWJsZTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlFPUFUzeFVocGxsbDZkeW9NbVZVWEhLbF84Q1JEczZfdWVMbWV4M1NvcXdodW9sa3VOM08wNWw0cnF4NWgxZEtYOGViNDZVbC1DQ1NycS9wdWJodG1sP2dpZD0wJnNpbmdsZT10cnVlXG4gKlxuICogQWNjZXB0ZWQgZm9ybWF0IHN0cmluZyBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8UHJpb3J8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMTQwIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgMTMwIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3LCA5OTk5ICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgOTk5OTk5OXRoICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxMjMsIDk5OSAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgMTMwIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3LCA5MDAwICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgOTk5OTk5OXRoICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNCw2ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxMjMsIDk5OSAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgMTMwIHwgUiAgICAgICB8IC00MywgMSwgMTkwMCwgMjAxNywgOTk5OSwgLTk5OTkgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSICAgICAgfCAtNDMsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAxLCAxMjMsIDk5OSwgLTk5OSAgICAgICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAxLCAyMDE3LCA5OTk5LCAtOTk5OSAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQsNSB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB1ICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5ICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDk5LCAtOTkgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IDEyMCB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IDEyMCB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IDExMCB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IDExMCB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IDEwMCB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IDEwMCB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8ICA5MCB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8ICA5MCB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgIDkwIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8ICA5MCB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA1ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCAgOTAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgIDkwIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA4MCB8IGEuLmFhYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8ICA4MCB8IGIuLmJiYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8ICA4MCB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8ICA3MCB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA2MCB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8ICA1MCB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8ICA0MCB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgIDMwIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8ICAyMCB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgIDEwIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCAgMTAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8ICBOQSB8IFAgICAgICAgfCAwNS8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUCAgICAgIHwgTWF5IDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQICAgICB8IE1heSAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQUFAgICAgfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzICAgICAgICAgICAgfCAyLDUsOCB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCAgTkEgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8ICBOQSB8IFBwICAgICAgfCAwNS8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUHBwICAgIHwgTWF5IDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQcHAgICB8IE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQUFBwcCAgfCBTdW5kYXksIE1heSAyOXRoLCAxNDUzIGF0IC4uLiAgICAgfCAyLDUsOCB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyLlxuICogICAgSW4gYGZvcm1hdGAgZnVuY3Rpb24sIHRoZXkgd2lsbCBwcm9kdWNlIGRpZmZlcmVudCByZXN1bHQ6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqICAgIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggYm90aCBmb3JtYXR0aW5nIGFuZCBzdGFuZC1hbG9uZSB1bml0cyBpbnRlcmNoYW5nYWJseS5cbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGU6XG4gKiAgICAtIGZvciBudW1lcmljYWwgdW5pdHMgKGB5eXl5eXl5eWApIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggYSBudW1iZXJcbiAqICAgICAgYXMgd2lkZSBhcyB0aGUgc2VxdWVuY2VcbiAqICAgIC0gZm9yIHRleHQgdW5pdHMgKGBNTU1NTU1NTWApIGBwYXJzZWAgd2lsbCB0cnkgdG8gbWF0Y2ggdGhlIHdpZGVzdCB2YXJpYXRpb24gb2YgdGhlIHVuaXQuXG4gKiAgICAgIFRoZXNlIHZhcmlhdGlvbnMgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogMy4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNC4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCB3aWxsIHRyeSB0byBndWVzcyB0aGUgY2VudHVyeSBvZiB0d28gZGlnaXQgeWVhciBieSBwcm94aW1pdHkgd2l0aCBgcmVmZXJlbmNlRGF0ZWA6XG4gKlxuICogICAgYHBhcnNlKCc1MCcsICd5eScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFNhdCBKYW4gMDEgMjA1MCAwMDowMDowMGBcbiAqXG4gKiAgICBgcGFyc2UoJzc1JywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gV2VkIEphbiAwMSAxOTc1IDAwOjAwOjAwYFxuICpcbiAqICAgIHdoaWxlIGB1dWAgd2lsbCBqdXN0IGFzc2lnbiB0aGUgeWVhciBhcyBpczpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3V1JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAwMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBUdWUgSmFuIDAxIDAwNzUgMDA6MDA6MDBgXG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbc2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW3NldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3NldFdlZWtZZWFyfSkuXG4gKlxuICogNS4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA2LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDcuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDguIGBQK2AgdG9rZW5zIGRvIG5vdCBoYXZlIGEgZGVmaW5lZCBwcmlvcml0eSBzaW5jZSB0aGV5IGFyZSBtZXJlbHkgYWxpYXNlcyB0byBvdGhlciB0b2tlbnMgYmFzZWRcbiAqICAgIG9uIHRoZSBnaXZlbiBsb2NhbGUuXG4gKlxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBQYCA9PiBgTU0vZGQveXl5eWBcbiAqICAgIHVzaW5nIGBlbi1VU2AgbG9jYWxlOiBgcGAgPT4gYGhoOm1tIGFgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYFBgID0+IGBkZC9NTS95eXl5YFxuICogICAgdXNpbmcgYHB0LUJSYCBsb2NhbGU6IGBwYCA9PiBgSEg6bW1gXG4gKlxuICogVmFsdWVzIHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIGRhdGUgaW4gdGhlIGRlc2NlbmRpbmcgb3JkZXIgb2YgaXRzIHVuaXQncyBwcmlvcml0eS5cbiAqIFVuaXRzIG9mIGFuIGVxdWFsIHByaW9yaXR5IG92ZXJ3cml0ZSBlYWNoIG90aGVyIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlLlxuICpcbiAqIElmIG5vIHZhbHVlcyBvZiBoaWdoZXIgcHJpb3JpdHkgYXJlIHBhcnNlZCAoZS5nLiB3aGVuIHBhcnNpbmcgc3RyaW5nICdKYW51YXJ5IDFzdCcgd2l0aG91dCBhIHllYXIpLFxuICogdGhlIHZhbHVlcyB3aWxsIGJlIHRha2VuIGZyb20gM3JkIGFyZ3VtZW50IGByZWZlcmVuY2VEYXRlYCB3aGljaCB3b3JrcyBhcyBhIGNvbnRleHQgb2YgcGFyc2luZy5cbiAqXG4gKiBgcmVmZXJlbmNlRGF0ZWAgbXVzdCBiZSBwYXNzZWQgZm9yIGNvcnJlY3Qgd29yayBvZiB0aGUgZnVuY3Rpb24uXG4gKiBJZiB5b3UncmUgbm90IHN1cmUgd2hpY2ggYHJlZmVyZW5jZURhdGVgIHRvIHN1cHBseSwgY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIERhdGU6XG4gKiBgcGFyc2UoJzAyLzExLzIwMTQnLCAnTU0vZGQveXl5eScsIG5ldyBEYXRlKCkpYFxuICogSW4gdGhpcyBjYXNlIHBhcnNpbmcgd2lsbCBiZSBkb25lIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjdXJyZW50IGRhdGUuXG4gKiBJZiBgcmVmZXJlbmNlRGF0ZWAgaXMgYEludmFsaWQgRGF0ZWAgb3IgYSB2YWx1ZSBub3QgY29udmVydGlibGUgdG8gdmFsaWQgYERhdGVgLFxuICogdGhlbiBgSW52YWxpZCBEYXRlYCB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqIElmIGBmb3JtYXRTdHJpbmdgIG1hdGNoZXMgd2l0aCBgZGF0ZVN0cmluZ2AgYnV0IGRvZXMgbm90IHByb3ZpZGVzIHRva2VucywgYHJlZmVyZW5jZURhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogSWYgcGFyc2luZyBmYWlsZWQsIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRlU3RyaW5nIC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFN0cmluZyAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0gezF8MnwzfDR8NXw2fDd9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMyBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBtYXRjaGAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAxMSBGZWJydWFyeSAyMDE0IGZyb20gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoJzAyLzExLzIwMTQnLCAnTU0vZGQveXl5eScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBQYXJzZSAyOHRoIG9mIEZlYnJ1YXJ5IGluIEVzcGVyYW50byBsb2NhbGUgaW4gdGhlIGNvbnRleHQgb2YgMjAxMCB5ZWFyOlxuICogaW1wb3J0IGVvIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMjgtYSBkZSBmZWJydWFybycsIFwiZG8gJ2RlJyBNTU1NXCIsIG5ldyBEYXRlKDIwMTAsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9cbiAqIH0pXG4gKiAvLz0+IFN1biBGZWIgMjggMjAxMCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlKGRpcnR5RGF0ZVN0cmluZywgZGlydHlGb3JtYXRTdHJpbmcsIGRpcnR5UmVmZXJlbmNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMywgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVTdHJpbmcgPSBTdHJpbmcoZGlydHlEYXRlU3RyaW5nKTtcbiAgdmFyIGZvcm1hdFN0cmluZyA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cmluZyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUubWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBtYXRjaCBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmIChmb3JtYXRTdHJpbmcgPT09ICcnKSB7XG4gICAgaWYgKGRhdGVTdHJpbmcgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdG9EYXRlKGRpcnR5UmVmZXJlbmNlRGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGVcbiAgfTsgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG5cbiAgdmFyIHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuICB2YXIgdG9rZW5zID0gZm9ybWF0U3RyaW5nLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciBpbiBsb25nRm9ybWF0dGVycykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKTtcbiAgdmFyIHVzZWRUb2tlbnMgPSBbXTtcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodG9rZW5zKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgdG9rZW4gPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyaW5nLCBkaXJ0eURhdGVTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0cmluZywgZGlydHlEYXRlU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gdG9rZW5bMF07XG4gICAgICB2YXIgcGFyc2VyID0gcGFyc2Vyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICAgIGlmIChwYXJzZXIpIHtcbiAgICAgICAgdmFyIGluY29tcGF0aWJsZVRva2VucyA9IHBhcnNlci5pbmNvbXBhdGlibGVUb2tlbnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICAgIHZhciBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChmdW5jdGlvbiAodXNlZFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHwgdXNlZFRva2VuLnRva2VuID09PSBmaXJzdENoYXJhY3RlcjtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gYFwiLmNvbmNhdChpbmNvbXBhdGlibGVUb2tlbi5mdWxsVG9rZW4sIFwiYCBhbmQgYFwiKS5jb25jYXQodG9rZW4sIFwiYCBhdCB0aGUgc2FtZSB0aW1lXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gJyonICYmIHVzZWRUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIGZvcm1hdCBzdHJpbmcgbXVzdG4ndCBjb250YWluIGBcIi5jb25jYXQodG9rZW4sIFwiYCBhbmQgYW55IG90aGVyIHRva2VuIGF0IHRoZSBzYW1lIHRpbWVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlZFRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0b2tlbjogZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICAgZnVsbFRva2VuOiB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcnNlUmVzdWx0ID0gcGFyc2VyLnJ1bihkYXRlU3RyaW5nLCB0b2tlbiwgbG9jYWxlLm1hdGNoLCBzdWJGbk9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdjogbmV3IERhdGUoTmFOKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0ZXJzLnB1c2gocGFyc2VSZXN1bHQuc2V0dGVyKTtcbiAgICAgICAgZGF0ZVN0cmluZyA9IHBhcnNlUmVzdWx0LnJlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICAgICAgfSAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG5cblxuICAgICAgICBpZiAodG9rZW4gPT09IFwiJydcIikge1xuICAgICAgICAgIHRva2VuID0gXCInXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgdG9rZW4gPSBjbGVhbkVzY2FwZWRTdHJpbmcodG9rZW4pO1xuICAgICAgICB9IC8vIEN1dCB0b2tlbiBmcm9tIHN0cmluZywgb3IsIGlmIHN0cmluZyBkb2Vzbid0IG1hdGNoIHRoZSB0b2tlbiwgcmV0dXJuIEludmFsaWQgRGF0ZVxuXG5cbiAgICAgICAgaWYgKGRhdGVTdHJpbmcuaW5kZXhPZih0b2tlbikgPT09IDApIHtcbiAgICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBuZXcgRGF0ZShOYU4pXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICBpZiAoX3R5cGVvZihfcmV0KSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICB9IC8vIENoZWNrIGlmIHRoZSByZW1haW5pbmcgaW5wdXQgY29udGFpbnMgc29tZXRoaW5nIG90aGVyIHRoYW4gd2hpdGVzcGFjZVxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5nLmxlbmd0aCA+IDAgJiYgbm90V2hpdGVzcGFjZVJlZ0V4cC50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVycy5tYXAoZnVuY3Rpb24gKHNldHRlcikge1xuICAgIHJldHVybiBzZXR0ZXIucHJpb3JpdHk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYiAtIGE7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAocHJpb3JpdHksIGluZGV4LCBhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXg7XG4gIH0pLm1hcChmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICByZXR1cm4gc2V0dGVycy5maWx0ZXIoZnVuY3Rpb24gKHNldHRlcikge1xuICAgICAgcmV0dXJuIHNldHRlci5wcmlvcml0eSA9PT0gcHJpb3JpdHk7XG4gICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5O1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHNldHRlckFycmF5KSB7XG4gICAgcmV0dXJuIHNldHRlckFycmF5WzBdO1xuICB9KTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlSZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG5cblxuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhkYXRlLCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpKTtcbiAgdmFyIGZsYWdzID0ge307XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih1bmlxdWVQcmlvcml0eVNldHRlcnMpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBzZXR0ZXIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKHV0Y0RhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBzZXR0ZXIuc2V0KHV0Y0RhdGUsIGZsYWdzLCBzdWJGbk9wdGlvbnMpOyAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIHV0Y0RhdGUgPSByZXN1bHRbMF07XG4gICAgICAgIGFzc2lnbihmbGFncywgcmVzdWx0WzFdKTsgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0Y0RhdGUgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIHJldHVybiB1dGNEYXRlO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGlzVGhpc1dlZWssIHBhcnNlIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHRoaXNXZWVrID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAocHJvamVjdHMsIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluYm94RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGluYm94SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgIGluYm94RGl2LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG5cbiAgICBpZiAodGFza3MgIT0gbnVsbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBwYXJzZSB0aGUgZGF0ZSBzdHJpbmcgYmFjayB0byBJU09cbiAgICAgICAgY29uc3QgZGF0ZU5vdyA9IHBhcnNlKHRhc2tzW2ldLmR1ZURhdGUsIFwiTU0vZGQveXl5eVwiLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICBpZiAoaXNUaGlzV2VlayhkYXRlTm93KSkge1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5ib3hEaXYub3V0ZXJIVE1MO1xuICB9O1xuXG4gIGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgICAgICAvLyBjYWxsIHRoZSBkZWxldGUgdGFza1xuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRhc2soZGF0YUlkLCBcInRoaXMtd2Vla1wiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXlDb250ZW50LCBzZXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoaXNXZWVrO1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IHByb2plY3RQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAocHJvamVjdE5hbWUsIHRhc2tzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RIZWFkaW5nKTtcblxuICAgIGlmICh0YXNrcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNvbXBhcmUgZGF0ZSBhbmQgY2hlY2sgaWYgZHVlRGF0ZSBpcyBlcXVhbCB0byB0b2RheVxuICAgICAgICBpZiAodGFza3NbaV0ucHJvamVjdCA9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2lyY2xlLWJ0blwiKTtcbiAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0YXNrc1tpXS5pZE5vKTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSB0YXNrc1tpXS50aXRsZTtcblxuICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1kaXZcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgYWRkVGFza0g0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tINC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10YXNrLWg0XCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBhZGRUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1pbnB1dFwiKTtcbiAgICBhZGRUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIG5hbWVcIik7XG5cbiAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdGFzay1idG5cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLXRhc2stYnRuXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tJbnB1dCk7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgYnRuRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRUYXNrSDQpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Rpdik7XG5cbiAgICByZXR1cm4gcHJvamVjdERpdi5vdXRlckhUTUw7XG4gIH07XG5cbiAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3Q7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXJjbGUtYnRuXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tINCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2staDRcIik7XG4gICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGl2XCIpO1xuICAgIGNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10YXNrLWJ0blwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG4gICAgY29uc3QgYWRkVGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1pbnB1dFwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgZGVsZXRlIHRhc2tcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUYXNrKGRhdGFJZCwgcHJvamVjdE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW5lciB0byB0b2dnbGUgdGhlIGRpc3BsYXkgb2YgYWRkIHRhc2sgZWxlbWVudHNcbiAgICBhZGRUYXNrSDQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBhZGRUYXNrSDQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza0g0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1mbGV4XCI7XG4gICAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBzdG9yYWdlLmFkZFRhc2soYWRkVGFza0lucHV0LnZhbHVlLCBwcm9qZWN0TmFtZSk7XG4gICAgICBkaXNwbGF5LnJlZnJlc2hDb250ZW50KHByb2plY3ROYW1lKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwbGF5Q29udGVudCwgc2V0TGlzdGVuZXJzIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0UGFnZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBpbmJveCBmcm9tIFwiLi9pbmJveFwiO1xuaW1wb3J0IHRvZGF5IGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgdGhpc1dlZWsgZnJvbSBcIi4vdGhpc1dlZWtcIjtcbmltcG9ydCBwcm9qZWN0UGFnZSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcmlnaHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWdodC1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGRpc3BsYXlJbmJveCA9ICgpID0+IHtcbiAgICByaWdodENvbnRlbnQuaW5uZXJIVE1MID0gaW5ib3guZGlzcGxheUNvbnRlbnQoXG4gICAgICBzdG9yYWdlLnByb2plY3RTdG9yYWdlLFxuICAgICAgc3RvcmFnZS50YXNrU3RvcmFnZVxuICAgICk7XG4gICAgaW5ib3guc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRvZGF5ID0gKCkgPT4ge1xuICAgIHJpZ2h0Q29udGVudC5pbm5lckhUTUwgPSB0b2RheS5kaXNwbGF5Q29udGVudChcbiAgICAgIHN0b3JhZ2UucHJvamVjdFN0b3JhZ2UsXG4gICAgICBzdG9yYWdlLnRhc2tTdG9yYWdlXG4gICAgKTtcbiAgICB0b2RheS5zZXRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VGhpc1dlZWsgPSAoKSA9PiB7XG4gICAgcmlnaHRDb250ZW50LmlubmVySFRNTCA9IHRoaXNXZWVrLmRpc3BsYXlDb250ZW50KFxuICAgICAgc3RvcmFnZS5wcm9qZWN0U3RvcmFnZSxcbiAgICAgIHN0b3JhZ2UudGFza1N0b3JhZ2VcbiAgICApO1xuICAgIHRvZGF5LnNldExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWxpc3RcIik7XG4gICAgcHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGlmIChzdG9yYWdlLnByb2plY3RTdG9yYWdlICE9IG51bGwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmFnZS5wcm9qZWN0U3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHByb2plY3RMaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB4QnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHhCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ4LXByb2plY3RcIik7XG4gICAgICAgIHhCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHN0b3JhZ2UucHJvamVjdFN0b3JhZ2VbaV07XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuXG4gICAgICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vIHByb2plY3RMaS50ZXh0Q29udGVudCA9IHN0b3JhZ2UucHJvamVjdFN0b3JhZ2VbaV07XG4gICAgICAgIHByb2plY3RMaS5hcHBlbmRDaGlsZCh4QnRuKTtcbiAgICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RMaSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0UGFnZSA9IChjdXJyUHJvamVjdCkgPT4ge1xuICAgIHJpZ2h0Q29udGVudC5pbm5lckhUTUwgPSBwcm9qZWN0UGFnZS5kaXNwbGF5Q29udGVudChcbiAgICAgIGN1cnJQcm9qZWN0LFxuICAgICAgc3RvcmFnZS50YXNrU3RvcmFnZVxuICAgICk7XG4gICAgcHJvamVjdFBhZ2Uuc2V0TGlzdGVuZXJzKGN1cnJQcm9qZWN0KTtcbiAgfTtcblxuICAvLyByZWRpc3BsYXlzIHRoZSBjdXJyZW50IGNvbnRlbnRcbiAgY29uc3QgcmVmcmVzaENvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICAgIHN3aXRjaCAocHJvamVjdCkge1xuICAgICAgY2FzZSBcImRlZmF1bHRcIjpcbiAgICAgICAgZGlzcGxheUluYm94KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidG9kYXlcIjpcbiAgICAgICAgZGlzcGxheVRvZGF5KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhpcy13ZWVrXCI6XG4gICAgICAgIGRpc3BsYXlUaGlzV2VlaygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGxheVByb2plY3RQYWdlKHByb2plY3QpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgLy8gY29udGFpbnMgYWxsIHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBob21lcGFnZVxuICBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5ib3hMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XG4gICAgY29uc3QgdG9kYXlMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG4gICAgY29uc3QgdGhpc1dlZWtMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhpcy13ZWVrXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWRpdlwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWlucHV0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKTtcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtcHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgeFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi54LXByb2plY3RcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW5hbWVcIik7XG5cbiAgICBpbmJveExpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5SW5ib3goKTtcbiAgICB9KTtcblxuICAgIC8vIGRpc3BsYXkgdG9kYXkgd2hlbiBjbGlja2VkXG4gICAgdG9kYXlMaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRvZGF5KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzV2Vla0xpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5VGhpc1dlZWsoKTtcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZXMgdGhlIGRpc3BsYXkgb2YgYWRkIHByb2plY3QgZGl2IGFuZCB0aGUgaDNcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBhZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBhZGRQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGFkZFByb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHN0b3JhZ2UuYWRkUHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfSk7XG5cbiAgICB4UHJvamVjdEJ0bnMuZm9yRWFjaCgoeFByb2plY3RCdG4pID0+IHtcbiAgICAgIHhQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgICBzdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHByb2plY3ROYW1lcy5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG5cbiAgICAgICAgZGlzcGxheVByb2plY3RQYWdlKHN0b3JhZ2UucHJvamVjdFN0b3JhZ2VbcHJvamVjdEluZGV4XSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBpbml0aWFsaXplXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgZGlzcGxheUluYm94KCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgc2V0TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIHJlZnJlc2hDb250ZW50LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheVwiO1xuXG5kaXNwbGF5LmluaXQoKTtcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyIsIlVSTCIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18iLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm0iLCJuIiwiZ2V0dGVyIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInAiLCJiIiwiYmFzZVVSSSIsInNlbGYiLCJocmVmIiwibmMiLCJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJUeXBlRXJyb3IiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJndW1lbnRzIiwiYXJnU3RyIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwid2FybiIsInN0YWNrIiwiTmFOIiwidG9JbnRlZ2VyIiwiZGlydHlOdW1iZXIiLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJzdWJNaWxsaXNlY29uZHMiLCJkaXJ0eURhdGUiLCJkaXJ0eUFtb3VudCIsInRpbWVzdGFtcCIsImFtb3VudCIsImFkZE1pbGxpc2Vjb25kcyIsInN0YXJ0T2ZVVENJU09XZWVrIiwiZGF0ZSIsImRheSIsImdldFVUQ0RheSIsImRpZmYiLCJzZXRVVENEYXRlIiwiZ2V0VVRDRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSVNPV2Vla1llYXIiLCJ5ZWFyIiwiZ2V0VVRDRnVsbFllYXIiLCJmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyIiwic2V0VVRDRnVsbFllYXIiLCJzdGFydE9mTmV4dFllYXIiLCJmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyIiwic3RhcnRPZlRoaXNZZWFyIiwiZ2V0VVRDSVNPV2VlayIsImZvdXJ0aE9mSmFudWFyeSIsInN0YXJ0T2ZVVENJU09XZWVrWWVhciIsInJvdW5kIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0YXJ0T2ZVVENXZWVrIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfb3B0aW9ucyR3ZWVrU3RhcnRzT24iLCJfb3B0aW9ucyRsb2NhbGUiLCJfb3B0aW9ucyRsb2NhbGUkb3B0aW8iLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwyIiwid2Vla1N0YXJ0c09uIiwibG9jYWxlIiwiUmFuZ2VFcnJvciIsImdldFVUQ1dlZWtZZWFyIiwiX29wdGlvbnMkZmlyc3RXZWVrQ29uIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwiZmlyc3RXZWVrT2ZOZXh0WWVhciIsImZpcnN0V2Vla09mVGhpc1llYXIiLCJnZXRVVENXZWVrIiwiZmlyc3RXZWVrIiwic3RhcnRPZlVUQ1dlZWtZZWFyIiwiYWRkTGVhZGluZ1plcm9zIiwidGFyZ2V0TGVuZ3RoIiwic2lnbiIsIm91dHB1dCIsImFicyIsInRva2VuIiwic2lnbmVkWWVhciIsIm1vbnRoIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwibnVtYmVyT2ZEaWdpdHMiLCJtaWxsaXNlY29uZHMiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJwb3ciLCJHIiwibG9jYWxpemUiLCJlcmEiLCJ3aWR0aCIsInkiLCJvcmRpbmFsTnVtYmVyIiwidW5pdCIsImxpZ2h0Rm9ybWF0dGVycyIsIlkiLCJzaWduZWRXZWVrWWVhciIsIndlZWtZZWFyIiwiUiIsInUiLCJRIiwicXVhcnRlciIsImNvbnRleHQiLCJxIiwiTSIsIkwiLCJ3Iiwid2VlayIsIkkiLCJpc29XZWVrIiwiRCIsImRheU9mWWVhciIsInNldFVUQ01vbnRoIiwiZGlmZmVyZW5jZSIsImdldFVUQ0RheU9mWWVhciIsIkUiLCJkYXlPZldlZWsiLCJsb2NhbERheU9mV2VlayIsImMiLCJpc29EYXlPZldlZWsiLCJkYXlQZXJpb2RFbnVtVmFsdWUiLCJkYXlQZXJpb2QiLCJ0b0xvd2VyQ2FzZSIsImhvdXJzIiwiQiIsImgiLCJIIiwiSyIsInMiLCJTIiwiWCIsIl9sb2NhbGl6ZSIsInRpbWV6b25lT2Zmc2V0IiwiX29yaWdpbmFsRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwiZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzIiwiZm9ybWF0VGltZXpvbmUiLCJ4IiwiTyIsImZvcm1hdFRpbWV6b25lU2hvcnQiLCJ6IiwidCIsIm9yaWdpbmFsRGF0ZSIsIlQiLCJvZmZzZXQiLCJkaXJ0eURlbGltaXRlciIsImFic09mZnNldCIsIm1pbnV0ZXMiLCJkZWxpbWl0ZXIiLCJkYXRlTG9uZ0Zvcm1hdHRlciIsInBhdHRlcm4iLCJmb3JtYXRMb25nIiwidGltZUxvbmdGb3JtYXR0ZXIiLCJ0aW1lIiwiUCIsImRhdGVUaW1lRm9ybWF0IiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsImRhdGVQYXR0ZXJuIiwidGltZVBhdHRlcm4iLCJkYXRlVGltZSIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJ1dGNEYXRlIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwicHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zIiwicHJvdGVjdGVkV2Vla1llYXJUb2tlbnMiLCJpc1Byb3RlY3RlZERheU9mWWVhclRva2VuIiwiaW5kZXhPZiIsImlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiIsInRocm93UHJvdGVjdGVkRXJyb3IiLCJmb3JtYXQiLCJpbnB1dCIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJidWlsZEZvcm1hdExvbmdGbiIsImRlZmF1bHRXaWR0aCIsImZvcm1hdHMiLCJmdWxsIiwibG9uZyIsIm1lZGl1bSIsInNob3J0IiwiZm9ybWF0UmVsYXRpdmVMb2NhbGUiLCJsYXN0V2VlayIsInllc3RlcmRheSIsInRvZGF5IiwidG9tb3Jyb3ciLCJuZXh0V2VlayIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImFyZ3VtZW50Q2FsbGJhY2siLCJfb3B0aW9ucyIsInJlbTEwMCIsIm5hcnJvdyIsImFiYnJldmlhdGVkIiwid2lkZSIsImFtIiwicG0iLCJtaWRuaWdodCIsIm5vb24iLCJtb3JuaW5nIiwiYWZ0ZXJub29uIiwiZXZlbmluZyIsIm5pZ2h0IiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwidmFsdWUiLCJtYXRjaGVkU3RyaW5nIiwicGFyc2VQYXR0ZXJucyIsImRlZmF1bHRQYXJzZVdpZHRoIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJmaW5kSW5kZXgiLCJvYmplY3QiLCJmaW5kS2V5IiwidmFsdWVDYWxsYmFjayIsInJlc3QiLCJwYXJzZVBhdHRlcm4iLCJwYXJzZUludCIsInBhcnNlUmVzdWx0IiwiYW55IiwiY29kZSIsImZvcm1hdERpc3RhbmNlIiwidG9rZW5WYWx1ZSIsImFkZFN1ZmZpeCIsImNvbXBhcmlzb24iLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwiZXNjYXBlZFN0cmluZ1JlZ0V4cCIsImRvdWJsZVF1b3RlUmVnRXhwIiwidW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAiLCJkaXJ0eUZvcm1hdFN0ciIsIl9yZWY0IiwiX29wdGlvbnMkbG9jYWxlMiIsIl9vcHRpb25zJGxvY2FsZTIkb3B0aSIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9vcHRpb25zJGxvY2FsZTMiLCJfb3B0aW9ucyRsb2NhbGUzJG9wdGkiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwzIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsNCIsImZvcm1hdFN0ciIsImRlZmF1bHRMb2NhbGUiLCJpc0RhdGUiLCJpc1ZhbGlkIiwiZm9ybWF0dGVyT3B0aW9ucyIsInN1YnN0cmluZyIsImZpcnN0Q2hhcmFjdGVyIiwibG9uZ0Zvcm1hdHRlciIsIm1hdGNoZWQiLCJmb3JtYXR0ZXIiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwicHJvamVjdFN0b3JhZ2UiLCJ0YXNrU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkZWxldGVUYXNrIiwidGFza0lkTm8iLCJwcm9qZWN0IiwiaWRObyIsImFkZFRhc2siLCJ0aXRsZSIsIm5ld1Rhc2siLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdyIsImFkZFByb2plY3QiLCJuYW1lIiwiZGVsZXRlUHJvamVjdCIsImVkaXRUYXNrIiwibmV3VGl0bGUiLCJwcm9qZWN0cyIsInRhc2tzIiwiaW5ib3hEaXYiLCJpbmJveEhlYWRpbmciLCJ0ZXh0Q29udGVudCIsInRhc2tEaXYiLCJidG4iLCJ0YXNrRGV0YWlscyIsInRhc2tEZXRhaWxzSW5wdXQiLCJ0eXBlIiwidGFza0R1ZURhdGUiLCJ0YXNrRHVlRGF0ZUlucHV0IiwiYWRkVGFza0RpdiIsImFkZFRhc2tINCIsImFkZFRhc2tJbnB1dCIsImJ0bkRpdiIsImFkZEJ0biIsImNhbmNlbEJ0biIsIm91dGVySFRNTCIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FuY2VsVGFza0J0biIsImFkZFRhc2tCdG4iLCJ0YXNrRGV0YWlsc0lucHV0cyIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YUlkIiwiZ2V0QXR0cmlidXRlIiwiZGlzcGxheSIsInRhc2tEZXRhaWwiLCJkYXRhSUQiLCJ0YXNrRGVldCIsImtleUNvZGUiLCJkYXRlTm93IiwicHJvcGVydHkiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJOZXdUYXJnZXQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJSZWZlcmVuY2VFcnJvciIsImdldFByb3RvdHlwZU9mIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2RlZmluZVByb3BlcnR5IiwiU2V0dGVyIiwiX3V0Y0RhdGUiLCJWYWx1ZVNldHRlciIsIl9TZXR0ZXIiLCJfc3VwZXIiLCJ2YWxpZGF0ZVZhbHVlIiwic2V0VmFsdWUiLCJzdWJQcmlvcml0eSIsIl90aGlzIiwiZmxhZ3MiLCJEYXRlVG9TeXN0ZW1UaW1lem9uZVNldHRlciIsIl9TZXR0ZXIyIiwiX3N1cGVyMiIsIl90aGlzMiIsIl9sZW4iLCJfa2V5IiwidGltZXN0YW1wSXNTZXQiLCJjb252ZXJ0ZWREYXRlIiwic2V0RnVsbFllYXIiLCJzZXRIb3VycyIsIlBhcnNlciIsImRhdGVTdHJpbmciLCJzZXR0ZXIiLCJ2YWxpZGF0ZSIsInNldCIsIl92YWx1ZSIsIkVyYVBhcnNlciIsIl9QYXJzZXIiLCJudW1lcmljUGF0dGVybnMiLCJob3VyMjNoIiwiaG91cjI0aCIsImhvdXIxMWgiLCJob3VyMTJoIiwibWludXRlIiwic2Vjb25kIiwic2luZ2xlRGlnaXQiLCJ0d29EaWdpdHMiLCJ0aHJlZURpZ2l0cyIsImZvdXJEaWdpdHMiLCJhbnlEaWdpdHNTaWduZWQiLCJzaW5nbGVEaWdpdFNpZ25lZCIsInR3b0RpZ2l0c1NpZ25lZCIsInRocmVlRGlnaXRzU2lnbmVkIiwiZm91ckRpZ2l0c1NpZ25lZCIsInRpbWV6b25lUGF0dGVybnMiLCJtYXBWYWx1ZSIsInBhcnNlRm5SZXN1bHQiLCJtYXBGbiIsInBhcnNlTnVtZXJpY1BhdHRlcm4iLCJwYXJzZVRpbWV6b25lUGF0dGVybiIsInBhcnNlQW55RGlnaXRzU2lnbmVkIiwicGFyc2VORGlnaXRzIiwiUmVnRXhwIiwicGFyc2VORGlnaXRzU2lnbmVkIiwiZGF5UGVyaW9kRW51bVRvSG91cnMiLCJub3JtYWxpemVUd29EaWdpdFllYXIiLCJ0d29EaWdpdFllYXIiLCJjdXJyZW50WWVhciIsImlzQ29tbW9uRXJhIiwiYWJzQ3VycmVudFllYXIiLCJyYW5nZUVuZCIsImlzTGVhcFllYXJJbmRleCIsIlllYXJQYXJzZXIiLCJpc1R3b0RpZ2l0WWVhciIsIm5vcm1hbGl6ZWRUd29EaWdpdFllYXIiLCJMb2NhbFdlZWtZZWFyUGFyc2VyIiwiSVNPV2Vla1llYXJQYXJzZXIiLCJfZmxhZ3MiLCJmaXJzdFdlZWtPZlllYXIiLCJFeHRlbmRlZFllYXJQYXJzZXIiLCJRdWFydGVyUGFyc2VyIiwiU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIiLCJNb250aFBhcnNlciIsIlN0YW5kQWxvbmVNb250aFBhcnNlciIsIkxvY2FsV2Vla1BhcnNlciIsImRpcnR5V2VlayIsInNldFVUQ1dlZWsiLCJJU09XZWVrUGFyc2VyIiwiZGlydHlJU09XZWVrIiwic2V0VVRDSVNPV2VlayIsIkRBWVNfSU5fTU9OVEgiLCJEQVlTX0lOX01PTlRIX0xFQVBfWUVBUiIsIkRhdGVQYXJzZXIiLCJpc0xlYXBZZWFyIiwiRGF5T2ZZZWFyUGFyc2VyIiwic2V0VVRDRGF5IiwiZGlydHlEYXkiLCJEYXlQYXJzZXIiLCJMb2NhbERheVBhcnNlciIsIndob2xlV2Vla0RheXMiLCJTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIiLCJJU09EYXlQYXJzZXIiLCJzZXRVVENJU09EYXkiLCJBTVBNUGFyc2VyIiwiQU1QTU1pZG5pZ2h0UGFyc2VyIiwiRGF5UGVyaW9kUGFyc2VyIiwiSG91cjF0bzEyUGFyc2VyIiwiaXNQTSIsIkhvdXIwdG8yM1BhcnNlciIsIkhvdXIwVG8xMVBhcnNlciIsIkhvdXIxVG8yNFBhcnNlciIsIk1pbnV0ZVBhcnNlciIsInNldFVUQ01pbnV0ZXMiLCJTZWNvbmRQYXJzZXIiLCJzZXRVVENTZWNvbmRzIiwiRnJhY3Rpb25PZlNlY29uZFBhcnNlciIsInNldFVUQ01pbGxpc2Vjb25kcyIsIklTT1RpbWV6b25lV2l0aFpQYXJzZXIiLCJJU09UaW1lem9uZVBhcnNlciIsIlRpbWVzdGFtcFNlY29uZHNQYXJzZXIiLCJUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIiLCJwYXJzZXJzIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJmcm9tIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsImRvbmUiLCJfZSIsImYiLCJlcnIiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwic3RlcCIsIm5leHQiLCJfZTIiLCJyZXR1cm4iLCJhcnIiLCJsZW4iLCJhcnIyIiwibm90V2hpdGVzcGFjZVJlZ0V4cCIsImRpcnR5RGF0ZVN0cmluZyIsImRpcnR5Rm9ybWF0U3RyaW5nIiwiZGlydHlSZWZlcmVuY2VEYXRlIiwiZm9ybWF0U3RyaW5nIiwiX3N0ZXAiLCJzdWJGbk9wdGlvbnMiLCJzZXR0ZXJzIiwidG9rZW5zIiwidXNlZFRva2VucyIsIl9pdGVyYXRvciIsIl9sb29wIiwicGFyc2VyIiwiaW5jb21wYXRpYmxlVG9rZW5zIiwiaW5jb21wYXRpYmxlVG9rZW4iLCJmaW5kIiwidXNlZFRva2VuIiwiaW5jbHVkZXMiLCJmdWxsVG9rZW4iLCJydW4iLCJ2IiwiX3JldCIsInVuaXF1ZVByaW9yaXR5U2V0dGVycyIsInNvcnQiLCJmaWx0ZXIiLCJzZXR0ZXJBcnJheSIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJzdGFydE9mV2VlayIsImdldERheSIsInNldERhdGUiLCJpc1RoaXNXZWVrIiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiZGF0ZUxlZnRTdGFydE9mV2VlayIsImRhdGVSaWdodFN0YXJ0T2ZXZWVrIiwiaXNTYW1lV2VlayIsInByb2plY3ROYW1lIiwicHJvamVjdERpdiIsInByb2plY3RIZWFkaW5nIiwicmlnaHRDb250ZW50IiwiZGlzcGxheUluYm94IiwiaW5uZXJIVE1MIiwiZGlzcGxheVRvZGF5IiwiZGlzcGxheVRoaXNXZWVrIiwiZGlzcGxheVByb2plY3RzIiwicHJvamVjdHNMaXN0IiwicHJvamVjdExpIiwieEJ0biIsImRpc3BsYXlQcm9qZWN0UGFnZSIsImN1cnJQcm9qZWN0IiwiaW5pdCIsImluYm94TGkiLCJ0b2RheUxpIiwidGhpc1dlZWtMaSIsImFkZFByb2plY3REaXYiLCJhZGRQcm9qZWN0SW5wdXQiLCJhZGRQcm9qZWN0QnRuIiwiY2FuY2VsUHJvamVjdEJ0biIsInhQcm9qZWN0QnRucyIsInByb2plY3ROYW1lcyIsInhQcm9qZWN0QnRuIiwicHJvamVjdEluZGV4Iiwic2V0TGlzdGVuZXJzIiwicmVmcmVzaENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9
