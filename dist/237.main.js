"use strict";
(self.webpackChunktodo_list = self.webpackChunktodo_list || []).push([
  [237],
  {
    890: (n, e, t) => {
      t.d(e, { Z: () => E });
      var r = t(81),
        o = t.n(r),
        i = t(645),
        a = t.n(i),
        c = t(667),
        l = t.n(c),
        s = new URL(t(937), t.b),
        d = new URL(t(556), t.b),
        p = new URL(t(195), t.b),
        u = new URL(t(413), t.b),
        f = new URL(t(324), t.b),
        h = new URL(t(152), t.b),
        g = new URL(t(926), t.b),
        m = a()(o()),
        x = l()(s),
        b = l()(d),
        v = l()(p),
        y = l()(u),
        k = l()(f),
        w = l()(h),
        C = l()(g);
      m.push([
        n.id,
        '@font-face {\n  font-family: "Roboto";\n  src: url(' +
          x +
          ');\n}\n\n* {\n  border: 1px solid red;\n  font-family: "Roboto";\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nheader,\nfooter {\n  background-color: #1aa3ff;\n  color: white;\n}\n\nheader {\n  flex: 2;\n  display: inline-flex;\n  align-items: center;\n  padding-left: 10px;\n  gap: 5px;\n}\n\nheader img {\n  height: 50px;\n  width: 50px;\n  filter: invert(100%);\n  margin-left: 20px;\n}\n\n#content-section {\n  flex: 18;\n  display: flex;\n}\n\n#left-content {\n  background-color: #ccebff;\n  padding: 30px;\n  gap: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1.8;\n}\n\n#left-content ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-size: 1.3rem;\n}\n\nli#inbox,\nli#today,\nli#this-week,\n#add-project,\n.project {\n  background-repeat: no-repeat;\n  background-position: left center;\n  padding-left: 30px;\n  min-height: 10px;\n}\n\nli#inbox:hover,\nli#today:hover,\nli#this-week:hover,\n#add-project:hover,\n.project {\n  cursor: pointer;\n}\n\nli#inbox {\n  background-image: url(' +
          b +
          ");\n}\n\nli#today {\n  background-image: url(" +
          v +
          ");\n}\n\nli#this-week {\n  background-image: url(" +
          y +
          ");\n}\n\n#left-content h3 {\n  margin-top: 12px;\n  font-size: 1.8rem;\n}\n\n.project {\n  background-image: url(" +
          k +
          ");\n}\n\n#add-project {\n  font-size: 1.3rem;\n  background-image: url(" +
          w +
          ");\n}\n\n#right-content {\n  flex: 7;\n  background-color: #def2ff;\n}\n\n#right-content #right-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-top: 30px;\n  padding-right: 20px;\n  gap: 10px;\n}\n\n#right-content h3 {\n  font-size: 2rem;\n  display: inline;\n  margin-bottom: 20px;\n}\n\n.task-div {\n  display: flex;\n  gap: 10px;\n}\n\n.task-div > p:nth-child(2) {\n  flex: 1;\n  justify-self: end;\n}\n\n.circle-btn {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border-color: black;\n  border-width: 2px;\n  background-color: #def2ff;\n}\n\n.circle-btn:hover {\n  cursor: pointer;\n}\n\n#right-content p {\n  font-size: 1rem;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n\nfooter p {\n  background-image: url(" +
          C +
          ");\n  background-repeat: no-repeat;\n  background-position: right center;\n  padding-right: 25px;\n  min-height: 10px;\n  color: black;\n  filter: invert(100%);\n}\n",
        "",
      ]);
      const E = m;
    },
    645: (n) => {
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = "",
                r = void 0 !== e[5];
              return (
                e[4] && (t += "@supports (".concat(e[4], ") {")),
                e[2] && (t += "@media ".concat(e[2], " {")),
                r &&
                  (t += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (t += n(e)),
                r && (t += "}"),
                e[2] && (t += "}"),
                e[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (e.i = function (n, t, r, o, i) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var a = {};
            if (r)
              for (var c = 0; c < this.length; c++) {
                var l = this[c][0];
                null != l && (a[l] = !0);
              }
            for (var s = 0; s < n.length; s++) {
              var d = [].concat(n[s]);
              (r && a[d[0]]) ||
                (void 0 !== i &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = i)),
                t &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = t))
                    : (d[2] = t)),
                o &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = o))
                    : (d[4] = "".concat(o))),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    667: (n) => {
      n.exports = function (n, e) {
        return (
          e || (e = {}),
          n
            ? ((n = String(n.__esModule ? n.default : n)),
              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
              e.hash && (n += e.hash),
              /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
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
      var e = [];
      function t(n) {
        for (var t = -1, r = 0; r < e.length; r++)
          if (e[r].identifier === n) {
            t = r;
            break;
          }
        return t;
      }
      function r(n, r) {
        for (var i = {}, a = [], c = 0; c < n.length; c++) {
          var l = n[c],
            s = r.base ? l[0] + r.base : l[0],
            d = i[s] || 0,
            p = "".concat(s, " ").concat(d);
          i[s] = d + 1;
          var u = t(p),
            f = {
              css: l[1],
              media: l[2],
              sourceMap: l[3],
              supports: l[4],
              layer: l[5],
            };
          if (-1 !== u) e[u].references++, e[u].updater(f);
          else {
            var h = o(f, r);
            (r.byIndex = c),
              e.splice(c, 0, { identifier: p, updater: h, references: 1 });
          }
          a.push(p);
        }
        return a;
      }
      function o(n, e) {
        var t = e.domAPI(e);
        return (
          t.update(n),
          function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          }
        );
      }
      n.exports = function (n, o) {
        var i = r((n = n || []), (o = o || {}));
        return function (n) {
          n = n || [];
          for (var a = 0; a < i.length; a++) {
            var c = t(i[a]);
            e[c].references--;
          }
          for (var l = r(n, o), s = 0; s < i.length; s++) {
            var d = t(i[s]);
            0 === e[d].references && (e[d].updater(), e.splice(d, 1));
          }
          i = l;
        };
      };
    },
    569: (n) => {
      var e = {};
      n.exports = function (n, t) {
        var r = (function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        })(n);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(t);
      };
    },
    216: (n) => {
      n.exports = function (n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    565: (n, e, t) => {
      n.exports = function (n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    795: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = n.insertStyleElement(n);
        return {
          update: function (t) {
            !(function (n, e, t) {
              var r = "";
              t.supports && (r += "@supports (".concat(t.supports, ") {")),
                t.media && (r += "@media ".concat(t.media, " {"));
              var o = void 0 !== t.layer;
              o &&
                (r += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {"
                )),
                (r += t.css),
                o && (r += "}"),
                t.media && (r += "}"),
                t.supports && (r += "}");
              var i = t.sourceMap;
              i &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    " */"
                  )),
                e.styleTagTransform(r, n, e.options);
            })(e, n, t);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(e);
          },
        };
      };
    },
    589: (n) => {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
    237: (n, e, t) => {
      t.r(e), t.d(e, { default: () => x }), t(396);
      var r = t(379),
        o = t.n(r),
        i = t(795),
        a = t.n(i),
        c = t(569),
        l = t.n(c),
        s = t(565),
        d = t.n(s),
        p = t(216),
        u = t.n(p),
        f = t(589),
        h = t.n(f),
        g = t(890),
        m = {};
      (m.styleTagTransform = h()),
        (m.setAttributes = d()),
        (m.insert = l().bind(null, "head")),
        (m.domAPI = a()),
        (m.insertStyleElement = u()),
        o()(g.Z, m),
        g.Z && g.Z.locals && g.Z.locals,
        t(567);
      const x = (n, e) => {
        const t = document.createElement("div");
        t.setAttribute("id", "right-container");
        const r = document.createElement("h3");
        if (((r.textContent = "Inbox"), t.appendChild(r), null != e))
          for (let n = 0; n < e.length; n++) {
            const r = document.createElement("div");
            r.setAttribute("class", "task-div");
            const o = document.createElement("button");
            o.setAttribute("class", "circle-btn");
            const i = document.createElement("p");
            i.textContent = e[n].title;
            const a = document.createElement("p");
            (a.textContent = e[n].dueDate),
              o.addEventListener("click", () => {
                console.log("button clicked!"), alert("btn");
              }),
              r.appendChild(o),
              r.appendChild(i),
              r.appendChild(a),
              t.appendChild(r);
          }
        return t.outerHTML;
      };
    },
    937: (n, e, t) => {
      n.exports = t.p + "fc2b5060f7accec5cf74.ttf";
    },
    413: (n, e, t) => {
      n.exports = t.p + "1514cb89e66edd886067.svg";
    },
    195: (n, e, t) => {
      n.exports = t.p + "233385e32206cd372d69.svg";
    },
    324: (n, e, t) => {
      n.exports = t.p + "365f3e7f182c9f913994.svg";
    },
    926: (n, e, t) => {
      n.exports = t.p + "550985caaa8859d4b95f.svg";
    },
    556: (n, e, t) => {
      n.exports = t.p + "939f2a757e3335be71bb.svg";
    },
    152: (n, e, t) => {
      n.exports = t.p + "3cffe9a515498593b872.svg";
    },
  },
]);
